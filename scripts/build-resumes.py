#!/usr/bin/env python3
"""Build and validate the application documents within a three-page limit."""
import argparse
from pathlib import Path
import re
import shutil
import subprocess
import tempfile

ROOT = Path(__file__).resolve().parents[1]


def run(*args):
    return subprocess.run(args, cwd=ROOT, check=True, capture_output=True, text=True).stdout


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--check", action="store_true", help="Validate documents without replacing published PDFs")
    args = parser.parse_args()
    for executable in ("pdflatex", "pdfinfo", "pdftotext", "pdffonts"):
        if not shutil.which(executable):
            raise SystemExit(f"Missing required executable: {executable}")
    with tempfile.TemporaryDirectory(prefix="tamim-resumes-") as directory:
        outputs = []
        for name, heading in (("resume-en", "Professional Experience"), ("cv-fr", "Expérience professionnelle")):
            log = run("pdflatex", "-interaction=nonstopmode", "-halt-on-error",
                      f"-output-directory={directory}", str(ROOT / "documents" / f"{name}.tex"))
            if "Overfull" in log:
                raise SystemExit(f"{name}: text overflows the page.\n{log}")
            source = (ROOT / "documents" / f"{name}.tex").read_text()
            if source.count("\\project{") != 19:
                raise SystemExit(f"{name}: expected all 19 project entries")
            if source.count("\\section{Projects}" if name == "resume-en" else "\\section{Projets}") != 1:
                raise SystemExit(f"{name}: expected one unified projects section")
            pdf = Path(directory) / f"{name}.pdf"
            metadata = run("pdfinfo", str(pdf))
            pages = int(re.search(r"^Pages:\s+(\d+)", metadata, re.M).group(1))
            if not 1 <= pages <= 3:
                raise SystemExit(f"{name}: expected at most 3 pages, found {pages}")
            text = run("pdftotext", "-enc", "UTF-8", "-nopgbrk", str(pdf), "-")
            for required in ("Tamim Hmizi", "tamimhmizi@icloud.com", "+216 54 886 068",
                             heading, "Bassetti Group", "Axynoxia", "RFC", "ESPRIT",
                             "Tunisie Telecom", "QuickOps", "LLM", "Terraform", "Kubernetes",
                             "Confortex", "B2", "Energie", "Roehrdanz",
                             "Enterprise Monitoring Platform", "Tickety", "ProInvoice", "LeadGen", "Leasing",
                             "Habiter", "MERN", "OMHY", "New Journey", "OpenStack", "Vie Sublime"):
                if required not in text:
                    raise SystemExit(f"{name}: text extraction lost {required!r}")
            for removed in ("Jektis", "NexGen", "Safe-Wash", "Jerbi", "learn.net", "car-washing"):
                if removed.casefold() in text.casefold():
                    raise SystemExit(f"{name}: removed project reappeared: {removed}")
            if "\ufffd" in text or "\x00" in text:
                raise SystemExit(f"{name}: text extraction contains invalid characters")
            fonts = run("pdffonts", str(pdf))
            font_lines = fonts.splitlines()[2:]
            if not font_lines or any(not re.search(r"\byes\s+yes\s+yes\b", line) for line in font_lines):
                raise SystemExit(f"{name}: fonts must be embedded, subset and Unicode mapped\n{fonts}")
            outputs.append(pdf)
            print(f"{name}: {pages} pages; contact, career and project text extracted; fonts embedded and Unicode mapped")
        # Publish only when both documents pass.
        if not args.check:
            for output in outputs:
                shutil.copyfile(output, ROOT / "public" / output.name)


if __name__ == "__main__":
    main()
