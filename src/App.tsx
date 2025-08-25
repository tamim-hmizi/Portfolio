import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import ProfileSection from "./components/ProfileSection";
import ExperienceSection from "./components/ExperienceSection";

import EducationSection from "./components/EducationSection";
import SkillsSection from "./components/SkillsSection";
import ContactSection from "./components/ContactSection";
import Navbar from "./components/Navbar";
import FloatingBackground from "./components/FloatingBackground";
import ProjectsSection from "./components/ProjectsSection";

const App: React.FC = () => {
  const positions = [
    "top-5 right-5 w-24 h-24 bg-pink-500",
    "top-20 right-20 w-32 h-32 bg-purple-400",
    "bottom-5 left-5 w-28 h-28 bg-blue-500",
    "bottom-16 left-28 w-20 h-20 bg-indigo-500",
    "bottom-10 right-10 w-40 h-40 bg-pink-400",
    "bottom-20 left-36 w-36 h-36 bg-purple-500",
  ];

  return (
    <div className="font-sans text-gray-200 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-300 overflow-hidden min-h-screen relative">
      {positions.map((position, index) => (
        <FloatingBackground key={index} position={position} index={index} />
      ))}

      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/Portfolio" replace />} />
          <Route path="/Portfolio" element={<ProfileSection />} />
          <Route path="/Portfolio/experience" element={<ExperienceSection />} />
          <Route path="/Portfolio/education" element={<EducationSection />} />
          <Route path="/Portfolio/skills" element={<SkillsSection />} />
          <Route path="/Portfolio/contact" element={<ContactSection />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
