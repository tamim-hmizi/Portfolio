import React from "react";
import { MotionConfig } from "framer-motion";
import ProfileSection from "./components/ProfileSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import EducationSection from "./components/EducationSection";
import ContactSection from "./components/ContactSection";
import Navbar from "./components/Navbar";

const App: React.FC = () => {
  // overflow-x-clip, not overflow-x-hidden: `overflow-x: hidden` forces the
  // computed `overflow-y` to `auto`, turning the root div into a second scroll
  // container nested inside the document scroller. Two competing scrollers is
  // what made the page feel laggy. `clip` contains the same horizontal overflow
  // without creating a scroll container.
  return (
    <div className="font-sans text-gray-200 bg-gray-900 overflow-x-clip min-h-screen relative">
      <a href="#content" className="skip-link">Skip to content</a>
      <MotionConfig reducedMotion="user">
        <Navbar />
        <main id="content" tabIndex={-1}>
          <ProfileSection />
          <ProjectsSection />
          <ExperienceSection />
          <SkillsSection />
          <EducationSection />
          <ContactSection />
        </main>
      </MotionConfig>
    </div>
  );
};

export default App;
