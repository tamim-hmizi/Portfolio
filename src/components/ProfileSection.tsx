import React from "react";
import { m } from "framer-motion";
import { FaArrowRight, FaCalendarCheck, FaFileAlt } from "react-icons/fa";
import { asset } from "../lib/asset";

const focusAreas = [
  { title: "Full stack engineering", text: "Web and mobile apps with React, Next.js, Angular, Flutter, Node.js, NestJS and .NET." },
  { title: "Cloud and DevOps", text: "Azure, AWS and Kubernetes, with Terraform, Ansible and CI/CD pipelines." },
  { title: "AI and automation", text: "LLM features and workflow automation where they save real time." },
  { title: "Delivery end to end", text: "From scoping and architecture to production, monitoring and support." },
];

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" as const, delay },
});

const ProfileSection: React.FC = () => (
  <section id="home" className="relative min-h-screen flex items-center px-4 sm:px-6 md:px-10 pt-24 pb-16">
    <div className="w-full max-w-6xl mx-auto grid lg:grid-cols-[1.4fr_1fr] gap-10 lg:gap-16 items-center">
      <div className="text-center lg:text-left order-2 lg:order-1">
        <m.p {...fadeUp(0)} className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-500 mb-4">
          Software Engineer · Cloud, DevOps &amp; AI
        </m.p>
        <m.h1 {...fadeUp(0.08)} className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.1] mb-5">
          I build software <span className="text-yellow-500">and the cloud it runs on.</span>
        </m.h1>
        <m.p {...fadeUp(0.16)} className="text-lg text-gray-300 max-w-xl mx-auto lg:mx-0 leading-relaxed mb-8">
          I&apos;m Tamim Hmizi, Full Stack Engineer at Bassetti Group and founder of{" "}
          <a
            href="https://www.axynoxia.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-400 font-semibold underline-offset-4 hover:underline"
          >
            Axynoxia
          </a>
          . I design, ship and operate web and mobile products, with infrastructure as code, CI/CD and LLM integration where they add value.
        </m.p>

        <m.div {...fadeUp(0.24)} className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
          <a
            href="#projects"
            className="inline-flex justify-center items-center gap-2 px-6 py-3 rounded-lg bg-yellow-500 text-gray-900 font-bold hover:bg-yellow-400 transition-colors"
          >
            View projects <FaArrowRight aria-hidden="true" />
          </a>
          <a
            href={asset("resume-en.pdf")}
            download
            className="inline-flex justify-center items-center gap-2 px-6 py-3 rounded-lg border-2 border-yellow-500/60 text-yellow-400 font-semibold hover:border-yellow-400 hover:bg-yellow-500/10 transition-colors"
          >
            <FaFileAlt aria-hidden="true" /> Resume (EN)
          </a>
          <a
            href={asset("cv-fr.pdf")}
            download
            className="inline-flex justify-center items-center gap-2 px-6 py-3 rounded-lg border-2 border-gray-600 text-gray-200 font-semibold hover:border-gray-400 hover:bg-white/5 transition-colors"
          >
            <FaFileAlt aria-hidden="true" /> CV (FR)
          </a>
        </m.div>
        <m.a
          {...fadeUp(0.3)}
          href="https://calendly.com/axynoxia/axynoxia-discovery-call"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 text-sm text-gray-300 hover:text-yellow-400 transition-colors"
        >
          <FaCalendarCheck aria-hidden="true" /> Book a discovery call
        </m.a>

        <m.ul {...fadeUp(0.36)} aria-label="What I do" className="mt-10 grid sm:grid-cols-2 gap-3 text-left">
          {focusAreas.map(({ title, text }) => (
            <li key={title} className="rounded-xl bg-gray-800/60 border border-gray-700 px-4 py-3">
              <p className="font-semibold text-yellow-400">{title}</p>
              <p className="mt-1 text-sm text-gray-300 leading-snug">{text}</p>
            </li>
          ))}
        </m.ul>
      </div>

      <m.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="order-1 lg:order-2 flex justify-center"
      >
        <div className="relative">
          <div className="absolute -inset-3 rounded-full bg-yellow-500/20 blur-2xl" aria-hidden="true" />
          <img
            src={asset("me.jpg")}
            alt="Tamim Hmizi"
            width={320}
            height={320}
            fetchPriority="high"
            className="relative w-36 h-36 sm:w-48 sm:h-48 lg:w-80 lg:h-80 rounded-full border-4 border-yellow-500 object-cover shadow-2xl"
            style={{ objectPosition: "center 90%" }}
          />
        </div>
      </m.div>
    </div>
  </section>
);

export default ProfileSection;
