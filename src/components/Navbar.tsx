import React, { useEffect, useState } from "react";
import { FaBars, FaTimes, FaFileDownload, FaChevronDown } from "react-icons/fa";

const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const sections = NAV_LINKS.map((l) => document.getElementById(l.id)).filter(
      (el): el is HTMLElement => el !== null
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));

    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const closeAll = () => {
    setIsMenuOpen(false);
    setIsResumeOpen(false);
  };

  const linkClass = (id: string) =>
    `relative py-1 transition-colors ${
      active === id ? "text-yellow-500" : "text-gray-200 hover:text-yellow-400"
    }`;

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-40 transition-all border-b ${
        scrolled
          ? "bg-black/70 backdrop-blur-md border-yellow-600/20 shadow-lg shadow-black/20"
          : "bg-black/20 backdrop-blur-sm border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-14 md:h-16">
        <a
          href="#home"
          className="text-base md:text-lg font-bold text-white hover:text-yellow-500 select-none transition-colors tracking-tight"
        >
          Tamim Hmizi
          <span className="hidden sm:inline text-yellow-500 font-normal"> · Axynoxia</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium select-none">
          {NAV_LINKS.map((link) => (
            <a key={link.id} href={`#${link.id}`} className={linkClass(link.id)}>
              {link.label}
            </a>
          ))}

          {/* Resume dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsResumeOpen(true)}
            onMouseLeave={() => setIsResumeOpen(false)}
          >
            <button
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-yellow-600 hover:bg-yellow-700 text-white font-semibold text-sm transition-colors"
              aria-haspopup="true"
              aria-expanded={isResumeOpen}
              onClick={() => setIsResumeOpen((v) => !v)}
            >
              <FaFileDownload size={13} />
              Resume
              <FaChevronDown size={10} className={`transition-transform ${isResumeOpen ? "rotate-180" : ""}`} />
            </button>
            {isResumeOpen && (
              <div className="absolute right-0 mt-1 w-40 bg-gray-900 border border-yellow-600/30 rounded-lg shadow-xl overflow-hidden">
                <a
                  href="/Portfolio/resume-en.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  className="block px-4 py-2 text-sm text-gray-200 hover:bg-yellow-600/20 hover:text-yellow-400 transition-colors"
                >
                  English (PDF)
                </a>
                <a
                  href="/Portfolio/cv-fr.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  className="block px-4 py-2 text-sm text-gray-200 hover:bg-yellow-600/20 hover:text-yellow-400 transition-colors border-t border-yellow-600/10"
                >
                  Français (PDF)
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsMenuOpen((v) => !v)}
          className="md:hidden text-white text-xl z-10"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden fixed inset-0 top-14 bg-black/95 backdrop-blur-sm transition-opacity ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-6 text-lg">
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={closeAll}
              className={active === link.id ? "text-yellow-500 font-semibold" : "text-gray-200 hover:text-yellow-400"}
            >
              {link.label}
            </a>
          ))}
          <div className="flex gap-3 mt-4">
            <a
              href="/Portfolio/resume-en.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              onClick={closeAll}
              className="px-4 py-2 rounded-lg bg-yellow-600 text-white font-semibold text-sm"
            >
              Resume (EN)
            </a>
            <a
              href="/Portfolio/cv-fr.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              onClick={closeAll}
              className="px-4 py-2 rounded-lg bg-amber-700 text-white font-semibold text-sm"
            >
              CV (FR)
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
