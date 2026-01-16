import React from "react";
import { motion } from "framer-motion";

const EducationSection: React.FC = () => {
  return (
    <motion.section
      className="min-h-screen flex flex-col items-center justify-center text-center relative overflow-hidden select-none p-6 md:p-12 pt-24 md:pt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
        <span className="text-yellow-500">Education</span>
      </h2>
      <motion.div
        className="w-full max-w-4xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <a 
          href="https://esprit.tn" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-gray-800 border-2 border-yellow-600/30 p-6 md:p-8 rounded-xl shadow-lg mb-6 hover:border-yellow-500 transition-all cursor-pointer block"
        >
          <div className="flex items-start gap-4 mb-4">
            <img
              src="/Portfolio/espritlogo.jpg"
              alt="ESPRIT logo"
              className="w-16 h-16 md:w-20 md:h-20 object-contain rounded-md shadow-sm bg-white p-2 flex-shrink-0"
            />
            <div className="flex-1">
              <h3 className="text-xl md:text-2xl font-semibold text-yellow-500 mb-1">
                Software Engineering Degree
              </h3>
              <p className="text-gray-300 text-base md:text-lg mb-2">
                ESPRIT — Ariana, Tunisia
              </p>
              <p className="text-yellow-400 text-sm md:text-base font-semibold mb-4">
                2020 -- 2025
              </p>
            </div>
          </div>
          
          <div className="mt-6 space-y-4">
            <div>
              <h4 className="text-yellow-500 font-semibold text-lg mb-2">Comprehensive Engineering Curriculum:</h4>
              <div className="text-gray-300 text-sm md:text-base space-y-1">
                <p>• Software Engineering Principles, Object-Oriented Programming (Java, C++)</p>
                <p>• Data Structures & Algorithms, Database Systems (SQL, NoSQL)</p>
                <p>• Web Development (HTML, CSS, JavaScript, React, Angular)</p>
                <p>• Backend Development (Node.js, Spring Boot, Django)</p>
                <p>• Cloud Computing (AWS, Azure, GCP)</p>
                <p>• DevOps Practices (Docker, Kubernetes, CI/CD)</p>
                <p>• System Architecture & Design Patterns</p>
                <p>• Network Programming, Operating Systems (Linux, Windows)</p>
                <p>• Software Testing & Quality Assurance</p>
                <p>• Project Management & Agile Methodologies</p>
                <p>• Machine Learning & AI Fundamentals</p>
              </div>
            </div>
            
            <div className="mt-4 pt-4 border-t border-yellow-600/30">
              <h4 className="text-yellow-500 font-semibold text-lg mb-2">Hands-on Projects:</h4>
              <div className="text-gray-300 text-sm md:text-base space-y-1">
                <p>• Full-stack web applications</p>
                <p>• Cloud infrastructure deployment and automation</p>
                <p>• Microservices architecture implementation</p>
                <p>• CI/CD pipeline development</p>
                <p>• Database design and optimization</p>
                <p>• Mobile application development</p>
                <p>• System integration projects</p>
              </div>
            </div>
            
            <div className="mt-4 pt-4 border-t border-yellow-600/30">
              <h4 className="text-yellow-500 font-semibold text-lg mb-2">Final Year Project (PFE):</h4>
              <p className="text-gray-300 text-sm md:text-base">
                Developed a <strong className="text-yellow-400">production-grade DevOps-as-a-Service platform</strong> integrating AI-powered infrastructure recommendations, automated provisioning, and comprehensive monitoring solutions.
              </p>
            </div>
          </div>
        </a>
      </motion.div>
    </motion.section>
  );
};

export default EducationSection;
