import React, { Suspense, lazy, useEffect, useState } from "react";
import { LazyMotion, MotionConfig, domAnimation } from "framer-motion";
import ProfileSection from "./components/ProfileSection";
import Navbar from "./components/Navbar";

const ExperienceSection = lazy(() => import("./components/ExperienceSection"));
const ProjectsSection = lazy(() => import("./components/ProjectsSection"));
const SkillsSection = lazy(() => import("./components/SkillsSection"));
const EducationSection = lazy(() => import("./components/EducationSection"));
const ContactSection = lazy(() => import("./components/ContactSection"));

const DeferredSection: React.FC<{
  id: string;
  minHeight: string;
  children: React.ReactNode;
}> = ({ id, minHeight, children }) => {
  const [load, setLoad] = useState(
    () => typeof window !== "undefined" && Boolean(window.location.hash)
  );
  const ref = React.useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (load) return;
    const triggerLoad = () => setLoad(true);
    const onAnchorClick = (event: MouseEvent) => {
      const anchor = (event.target as Element | null)?.closest?.('a[href^="#"]');
      if (anchor) triggerLoad();
    };
    window.addEventListener("hashchange", triggerLoad);
    document.addEventListener("click", onAnchorClick, true);

    const el = ref.current;
    const io =
      el && "IntersectionObserver" in window
        ? new IntersectionObserver(
            (entries) => {
              if (entries.some((e) => e.isIntersecting && window.scrollY > 0)) {
                triggerLoad();
                io?.disconnect();
              }
            },
            { rootMargin: "200px 0px" }
          )
        : null;
    if (el && io) io.observe(el);

    const onScroll = () => {
      if (!el || !io) return;
      const rect = el.getBoundingClientRect();
      if (rect.top <= window.innerHeight + 200) {
        triggerLoad();
        io.disconnect();
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("hashchange", triggerLoad);
      document.removeEventListener("click", onAnchorClick, true);
      window.removeEventListener("scroll", onScroll);
      io?.disconnect();
    };
  }, [load]);

  const placeholder = <section ref={ref} id={id} aria-hidden="true" className={minHeight} />;
  return load ? <Suspense fallback={placeholder}>{children}</Suspense> : placeholder;
};

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
          <DeferredSection id="experience" minHeight="min-h-[4478px] md:min-h-[2855px]">
            <ExperienceSection />
          </DeferredSection>
          <DeferredSection id="projects" minHeight="min-h-[4462px] md:min-h-[1846px]">
            <ProjectsSection />
          </DeferredSection>
          <DeferredSection id="skills" minHeight="min-h-[1603px] md:min-h-[915px]">
            <SkillsSection />
          </DeferredSection>
          <DeferredSection id="education" minHeight="min-h-[855px] md:min-h-[659px]">
            <EducationSection />
          </DeferredSection>
          <DeferredSection id="contact" minHeight="min-h-[919px] md:min-h-[759px]">
            <ContactSection />
          </DeferredSection>
        </main>
      </MotionConfig>
    </LazyMotion>
  </div>
);

export default App;
