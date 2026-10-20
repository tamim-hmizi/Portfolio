#!/usr/bin/env python3
"""Build and validate the two three-page, text-based application documents."""
from pathlib import Path
import re
import shutil
import subprocess
import tempfile

ROOT = Path(__file__).resolve().parents[1]


def run(*args):
    return subprocess.run(args, cwd=ROOT, check=True, capture_output=True, text=True).stdout


def main():
    for executable in ("pdflatex", "pdfinfo", "pdftotext", "pdffonts"):
        if not shutil.which(executable):
            raise SystemExit(f"Missing required executable: {executable}")
    with tempfile.TemporaryDirectory(prefix="tamim-resumes-") as directory:
        outputs = []
        for name, heading in (("resume-en", "Professional Experience"), ("cv-fr", "Expérience professionnelle")):
            log = run("pdflatex", "-interaction=nonstopmode", "-halt-on-error",
                      f"-output-directory={directory}", str(ROOT / "public" / f"{name}.tex"))
            if "Overfull" in log:
                raise SystemExit(f"{name}: text overflows the page.\n{log}")
            source = (ROOT / "public" / f"{name}.tex").read_text()
            if source.count("\\project{") != 20:
                raise SystemExit(f"{name}: expected 20 individual project entries")
            if source.count("\\section{Projects}" if name == "resume-en" else "\\section{Projets}") != 1:
                raise SystemExit(f"{name}: expected one unified projects section")
            pdf = Path(directory) / f"{name}.pdf"
            metadata = run("pdfinfo", str(pdf))
            pages = int(re.search(r"^Pages:\s+(\d+)", metadata, re.M).group(1))
            if pages != 3:
                raise SystemExit(f"{name}: expected 3 pages, found {pages}")
            text = run("pdftotext", "-enc", "UTF-8", "-nopgbrk", str(pdf), "-")
            for required in ("Tamim Hmizi", "tamimhmizi@icloud.com", "+216 54 886 068",
                             heading, "Bassetti Group", "Axynoxia", "RFC", "ESPRIT",
                             "Tunisie Telecom", "QuickOps", "LLM", "Terraform", "Kubernetes",
                             "Confortex", "Vie Sublime", "Habiter Mieux", "NexGen", "B2",
                             "LeadGen", "Energie", "ProInvoice", "Tickety", "Roehrdanz",
                             "Jektis Travel", "New Journey", "OpenStack Private Cloud Lab",
                             "DevOps CI/CD Hub", "MERN E-commerce", "Enterprise Monitoring Platform"):
                if required not in text:
                    raise SystemExit(f"{name}: text extraction lost {required!r}")
            if "\ufffd" in text or "\x00" in text:
                raise SystemExit(f"{name}: text extraction contains invalid characters")
            fonts = run("pdffonts", str(pdf))
            font_lines = fonts.splitlines()[2:]
            if not font_lines or any(not re.search(r"\byes\s+yes\s+yes\b", line) for line in font_lines):
                raise SystemExit(f"{name}: fonts must be embedded, subset and Unicode mapped\n{fonts}")
            outputs.append(pdf)
            print(f"{name}: 3 pages; contact, career and project text extracted; fonts embedded and Unicode mapped")
        # Publish only when both documents pass.
        for output in outputs:
            shutil.copyfile(output, ROOT / "public" / output.name)


if __name__ == "__main__":
    main()
