#!/usr/bin/env python3
"""Build and validate the resumes: full versions with every project, and two-page versions generated from them."""
import argparse
from pathlib import Path
import re
import shutil
import subprocess
import tempfile

ROOT = Path(__file__).resolve().parents[1]

# Projects kept in the two-page versions, matched against the project title, strongest first within each group.
SHORT_PROJECTS = (
    "QuickOps", "Enterprise Monitoring Platform",
    "bmoovd Ticketing", "bmoovd Mobile App", "bmoovd application mobile", "Roehrdanz Immobilien",
    "Axynoxia ERP", "Axynoxia Energie",
)
MORE_PROJECTS = {
    "resume-en": r"\vspace{4pt}All projects, including client storefronts and Axynoxia products: \href{https://tamim-hmizi.github.io/Portfolio/\#projects}{tamim-hmizi.github.io/Portfolio}",
    "cv-fr": r"\vspace{4pt}Tous les projets, dont les boutiques clients et les produits Axynoxia : \href{https://tamim-hmizi.github.io/Portfolio/\#projects}{tamim-hmizi.github.io/Portfolio}",
}
DOCUMENTS = (
    # name, experience heading, projects heading, English level text
    ("resume-en", "Professional Experience", "Projects", "English (C1)"),
    ("cv-fr", "Expérience professionnelle", "Projets", "anglais (C1)"),
)
# Project titles that appear only in the full versions (the experience bullets still mention GymOS, so it is not listed).
FULL_ONLY = ("Habiter Mieux", "Confortex", "Vie Sublime", "Digiqora", "OMHY", "Edge Proxy",
             "Axynoxia Tickets", "Axynoxia Invoice", "OpenStack Private Cloud Lab", "MERN E-commerce", "New Journey", "Espro", "Bon Livraison")
BOTH = ("Tamim Hmizi", "tamimhmizi@icloud.com", "+216 54 886 068", "Bassetti Group", "Axynoxia", "RFC",
        "ESPRIT", "Tunisie Telecom", "QuickOps", "LLM", "Terraform", "Kubernetes", "B2",
        "Enterprise Monitoring Platform", "bmoovd", "Roehrdanz", "Axynoxia ERP", "Energie", "GymOS")


def run(*args):
    return subprocess.run(args, cwd=ROOT, check=True, capture_output=True, text=True).stdout


def project_title(line):
    """Title of a \\project line with \\href wrappers removed."""
    return re.sub(r"\\href\{[^}]*\}\{([^}]*)\}", r"\1", line[len("\\project{"):]).split("}")[0]


def shorten(source, name):
    """Keep SHORT_PROJECTS, drop groups left empty, and point to the portfolio for the rest."""
    out, group = [], []
    def flush():
        if any(l.startswith("\\project{") for l in group):
            out.extend(group)
        group.clear()
    in_projects = False
    for line in source.split("\n"):
        if line.startswith("\\section{"):
            if in_projects:
                flush()
                out.append(MORE_PROJECTS[name])
                out.append("")
            in_projects = line.startswith(("\\section{Projects}", "\\section{Projets}"))
            out.append(line)
        elif in_projects and line.startswith("\\group{"):
            flush()
            group.append(line)
        elif in_projects and line.startswith("\\project{"):
            if any(project_title(line).startswith(key) for key in SHORT_PROJECTS):
                group.append(line)
        elif in_projects:
            group.append(line)
        else:
            out.append(line)
    return "\n".join(out)


def check(pdf, name, source, heading, projects_heading, language, max_pages, required, forbidden=()):
    log_name = pdf.stem
    metadata = run("pdfinfo", str(pdf))
    pages = int(re.search(r"^Pages:\s+(\d+)", metadata, re.M).group(1))
    if not 1 <= pages <= max_pages:
        raise SystemExit(f"{log_name}: expected at most {max_pages} pages, found {pages}")
    if source.count(f"\\section{{{projects_heading}}}") != 1:
        raise SystemExit(f"{log_name}: expected one projects section")
    text = run("pdftotext", "-enc", "UTF-8", "-nopgbrk", str(pdf), "-")
    for item in (heading, *required):
        if item not in text:
            raise SystemExit(f"{log_name}: text extraction lost {item!r}")
    for item in forbidden:
        if item in text:
            raise SystemExit(f"{log_name}: should not list {item!r}")
    if language not in re.sub(r"\s+", " ", text):
        raise SystemExit(f"{log_name}: English proficiency must be C1")
    if "\ufffd" in text or "\x00" in text:
        raise SystemExit(f"{log_name}: text extraction contains invalid characters")
    fonts = run("pdffonts", str(pdf)).splitlines()[2:]
    if not fonts or any(not re.search(r"\byes\s+yes\s+yes\b", line) for line in fonts):
        raise SystemExit(f"{log_name}: fonts must be embedded, subset and Unicode mapped")
    print(f"{log_name}: {pages} pages; contact, career and project text extracted; fonts embedded and Unicode mapped")


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--check", action="store_true", help="Validate documents without replacing published PDFs")
    args = parser.parse_args()
    for executable in ("pdflatex", "pdfinfo", "pdftotext", "pdffonts"):
        if not shutil.which(executable):
            raise SystemExit(f"Missing required executable: {executable}")
    with tempfile.TemporaryDirectory(prefix="tamim-resumes-") as directory:
        work = Path(directory)
        outputs = []
        for name, heading, projects_heading, language in DOCUMENTS:
            full = (ROOT / "documents" / f"{name}.tex").read_text(encoding="utf-8")
            if full.count("\\project{") != 24:
                raise SystemExit(f"{name}: expected all 24 project entries")
            short = shorten(full, name)
            (work / f"{name}-short.tex").write_text(short, encoding="utf-8")
            for tex, max_pages, required, forbidden in (
                (ROOT / "documents" / f"{name}.tex", 4, BOTH + FULL_ONLY, ()),
                (work / f"{name}-short.tex", 2, BOTH, FULL_ONLY),
            ):
                log = run("pdflatex", "-interaction=nonstopmode", "-halt-on-error", f"-output-directory={directory}", str(tex))
                if "Overfull" in log:
                    raise SystemExit(f"{tex.stem}: text overflows the page.\n{log}")
                pdf = work / f"{tex.stem}.pdf"
                check(pdf, name, tex.read_text(encoding="utf-8"), heading, projects_heading, language, max_pages, required, forbidden)
                outputs.append(pdf)
        # Publish only when every document passes.
        if not args.check:
            for output in outputs:
                shutil.copyfile(output, ROOT / "public" / output.name)


if __name__ == "__main__":
    main()
