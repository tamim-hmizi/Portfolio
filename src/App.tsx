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


const App: React.FC = () => {
  const positions = [
    "top-5 right-5 w-24 h-24 bg-yellow-600",
    "top-20 right-20 w-32 h-32 bg-amber-700",
    "bottom-5 left-5 w-28 h-28 bg-yellow-700",
    "bottom-16 left-28 w-20 h-20 bg-amber-800",
    "bottom-10 right-10 w-40 h-40 bg-yellow-800",
    "bottom-20 left-36 w-36 h-36 bg-amber-900",
  ];

  return (
    <div className="font-sans text-gray-200 bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden min-h-screen relative">
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
