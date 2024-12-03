import React from "react";
import { motion } from "framer-motion";
import {
    FaAws, FaDocker, FaGitAlt, FaJenkins, FaReact,
    FaNodeJs, FaAngular, FaJava
} from "react-icons/fa";
import {
    SiTerraform, SiAzuredevops, SiKubernetes, SiPrometheus,
    SiGrafana, SiAnsible, SiNextdotjs,
    SiDjango, SiFlask, SiLaravel, SiNestjs, SiOpenstack, SiSymfony ,SiMicrosoftazure
} from "react-icons/si";

const SkillsSection: React.FC = () => {
    return (
        <motion.section
            className="min-h-screen flex flex-col items-center justify-center text-center relative overflow-hidden select-none p-6 md:p-12 "
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 1 }}
        >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Skills</h2>

            <motion.div
                className="w-full max-w-4xl flex flex-col space-y-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
            >
                {/* Cloud Section */}
                <div className="flex flex-col items-center space-y-4">
                    <h3 className="text-xl font-semibold text-gray-300">Cloud</h3>
                    <div className="flex flex-wrap justify-center gap-6">
                        <FaAws className="text-6xl text-[#FF9900]" />
                        <SiMicrosoftazure className="text-6xl text-[#0078D7]" />
                        <SiOpenstack className="text-6xl text-[#ED1944]" />
                    </div>
                </div>

                {/* DevOps Section */}
                <div className="flex flex-col items-center space-y-4">
                    <h3 className="text-xl font-semibold text-gray-300">DevOps</h3>
                    <div className="flex flex-wrap justify-center gap-6">
                        <FaGitAlt className="text-6xl text-[#F05033]" />
                        <SiAnsible className="text-6xl text-[#EE0000]" />
                        <SiTerraform className="text-6xl text-[#623CE4]" />
                        <SiKubernetes className="text-6xl text-[#326CE5]" />
                        <FaDocker className="text-6xl text-[#2496ED]" />
                        <FaJenkins className="text-6xl text-[#D24939]" />
                        <SiPrometheus className="text-6xl text-[#E6522C]" />
                        <SiGrafana className="text-6xl text-[#F46800]" />
                        <SiAzuredevops className="text-6xl text-[#0078D7]" />

                    </div>
                </div>

                {/* Development Section */}
                <div className="flex flex-col items-center space-y-4">
                    <h3 className="text-xl font-semibold text-gray-300">Development</h3>
                    <div className="flex flex-wrap justify-center gap-6">
                        <FaReact className="text-6xl text-[#61DAFB]" />
                        <SiNextdotjs className="text-6xl text-[#000000]" />
                        <FaNodeJs className="text-6xl text-[#68A063]" />
                        <SiNestjs className="text-6xl text-[#E0234E]" />
                        <FaAngular className="text-6xl text-[#DD0031]" />
                        <FaJava className="text-6xl text-[#007396]" />
                        <SiDjango className="text-6xl text-[#092E20]" />
                        <SiFlask className="text-6xl text-[#000000]" />
                        <SiLaravel className="text-6xl text-[#FF2D20]" />
                        <SiSymfony className="text-6xl text-[#000000]" />


                    </div>
                </div>
            </motion.div>
        </motion.section>
    );
};

export default SkillsSection;
