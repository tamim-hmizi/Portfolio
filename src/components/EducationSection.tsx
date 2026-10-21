import React from "react";
import { asset } from "../lib/asset";
import Reveal from "./Reveal";
import Highlight from "./Highlight";

const EducationSection: React.FC = () => (
  <section id="education" className="px-4 sm:px-6 md:px-10 py-20 md:py-28">
    <div className="w-full max-w-4xl mx-auto">
      <Reveal className="text-center mb-10">
        <h2 className="text-3xl md:text-5xl font-bold text-white">
          <span className="text-yellow-500">Education</span>
        </h2>
      </Reveal>
      <Reveal>
        <article className="rounded-xl border border-gray-700 bg-gray-800/70 p-6 md:p-8 text-left">
          <header className="flex items-start gap-4">
            <img
              loading="lazy"
              src={asset("espritlogo.jpg")}
              alt="ESPRIT"
              className="w-16 h-16 md:w-20 md:h-20 object-contain rounded-md bg-white p-2 shrink-0"
            />
            <div>
              <h3 className="text-xl md:text-2xl font-semibold text-white">Software Engineering Degree | ESPRIT</h3>
              <p className="text-gray-300 mt-1">
                Specialty: <Highlight>Cloud Architecture and DevOps (ArcTIC)</Highlight>
              </p>
              <p className="text-sm text-gray-300 mt-1">
                <span className="text-yellow-400 font-semibold">2020 to 2025</span> · Ariana, Tunisia
              </p>
            </div>
          </header>
          <ul className="mt-6 text-gray-200 space-y-1.5 list-disc pl-5 marker:text-yellow-500">
            <li>Three years of general software engineering, then two years specializing in cloud architecture and DevOps.</li>
            <li>Coursework across distributed systems, cloud platforms (AWS, Azure, GCP, OpenStack), Docker, Kubernetes and CI/CD, software architecture, databases, testing and machine learning fundamentals.</li>
            <li>
              Final year project: <Highlight>QuickOps</Highlight>, a DevOps as a Service platform with LLM repository analysis, automated provisioning and monitoring, built at RFC.
            </li>
          </ul>
          <a
            href="https://esprit.tn"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-block text-sm text-gray-300 underline underline-offset-4 hover:text-yellow-400"
          >
            esprit.tn
          </a>
        </article>
      </Reveal>
    </div>
  </section>
);

export default EducationSection;
