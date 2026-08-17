import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full text-white p-4 flex justify-between items-center z-20 bg-black/30 backdrop-blur-sm border-b border-yellow-600/20">
      <div className="flex items-center">
        <Link
          to="/"
          className="text-lg font-semibold hover:text-yellow-500 select-none transition-colors"
        >
          Tamim Hmizi
        </Link>
      </div>

      <div className="md:flex space-x-4 hidden select-none">
        <Link to="/" className="hover:text-yellow-500 transition-colors">
          Home
        </Link>
        <Link to="/experience" className="hover:text-yellow-500 transition-colors">
          Experience
        </Link>
        <Link to="/projects" className="hover:text-yellow-500 transition-colors">
          Projects
        </Link>
        <Link to="/education" className="hover:text-yellow-500 transition-colors">
          Education
        </Link>
        <Link to="/skills" className="hover:text-yellow-500 transition-colors">
          Skills
        </Link>
        <Link to="/contact" className="hover:text-yellow-500 transition-colors">
          Contact
        </Link>
      </div>

      <div className="md:hidden flex items-center z-10">
        <button onClick={toggleMenu} className="text-white">
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <div
        className={`md:hidden fixed top-0 left-0 w-full h-screen bg-black bg-opacity-95 z-30 ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex justify-center items-center h-full">
          <div className="space-y-4 text-center text-white">
            <Link
              to="/"
              className="hover:text-yellow-500 block select-none transition-colors"
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link
              to="/experience"
              className="hover:text-yellow-500 block select-none transition-colors"
              onClick={closeMenu}
            >
              Experience
            </Link>
            <Link
              to="/projects"
              className="hover:text-yellow-500 block select-none transition-colors"
              onClick={closeMenu}
            >
              Projects
            </Link>
            <Link
              to="/education"
              className="hover:text-yellow-500 block select-none transition-colors"
              onClick={closeMenu}
            >
              Education
            </Link>
            <Link
              to="/skills"
              className="hover:text-yellow-500 block select-none transition-colors"
              onClick={closeMenu}
            >
              Skills
            </Link>
            <Link
              to="/contact"
              className="hover:text-yellow-500 block select-none transition-colors"
              onClick={closeMenu}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
