#!/usr/bin/env python3
"""Build and validate the full English and French resumes."""
import argparse
from pathlib import Path
import re
import shutil
import subprocess
import tempfile

ROOT = Path(__file__).resolve().parents[1]

DOCUMENTS = (
    # name, experience heading, projects heading, English level text
    ("resume-en", "Professional Experience", "Projects", "English (C1)"),
    ("cv-fr", "Expérience professionnelle", "Projets", "anglais (C1)"),
)
# Additional project titles required in the full versions.
FULL_ONLY = ("Habiter Mieux", "Confortex", "Vie Sublime", "Digiqora", "OMHY", "Edge Proxy",
             "Axynoxia Tickets", "Axynoxia Invoice", "OpenStack Private Cloud Lab", "MERN E-commerce", "New Journey", "Espro", "Bon Livraison")
BOTH = ("Tamim Hmizi", "tamimhmizi@icloud.com", "+216 54 886 068", "Bassetti Group", "Axynoxia", "RFC",
        "ESPRIT", "Tunisie Telecom", "QuickOps", "LLM", "Terraform", "Kubernetes", "B2",
        "Enterprise Monitoring Platform", "bmoovd", "Roehrdanz", "Axynoxia ERP", "Energie", "GymOS")


def run(*args):
    return subprocess.run(args, cwd=ROOT, check=True, capture_output=True, text=True).stdout


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
            for tex, max_pages, required, forbidden in (
                (ROOT / "documents" / f"{name}.tex", 4, BOTH + FULL_ONLY, ()),
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
