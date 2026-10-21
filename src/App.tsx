import React from "react";
import { LazyMotion, MotionConfig, domAnimation } from "framer-motion";
import ProfileSection from "./components/ProfileSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import EducationSection from "./components/EducationSection";
import ContactSection from "./components/ContactSection";
import Navbar from "./components/Navbar";

// overflow-x-clip, not overflow-x-hidden: `overflow-x: hidden` forces the
// computed `overflow-y` to `auto`, turning the root div into a second scroll
// container nested inside the document scroller. `clip` contains the same
// horizontal overflow without creating a scroll container.
const App: React.FC = () => (
  <div className="page-bg font-sans text-gray-200 overflow-x-clip min-h-screen">
    <a href="#content" className="skip-link">
      Skip to content
    </a>
    {/* LazyMotion with `m` components loads only the DOM animation features this site uses. */}
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">
        <Navbar />
        <main id="content" tabIndex={-1}>
          <ProfileSection />
          <ExperienceSection />
          <ProjectsSection />
          <SkillsSection />
          <EducationSection />
          <ContactSection />
        </main>
      </MotionConfig>
    </LazyMotion>
  </div>
);

export default App;
