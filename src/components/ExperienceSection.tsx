import React from "react";
import { motion } from "framer-motion";

const ExperienceSection: React.FC = () => {
    return (
        <motion.section
            className="min-h-screen flex flex-col items-center justify-center text-center relative overflow-hidden select-none p-6 md:p-12"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 1 }}
        >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Experience</h2>
            <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-6">
                I have worked on several exciting projects involving cloud computing, DevOps practices, and full-stack development.
            </p>
            <motion.div
                className="w-full max-w-3xl grid grid-cols-1 md:grid-cols-2 gap-6"
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{delay: 0.5}}
            >
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-semibold text-gray-800">InternRFC</h3>
                    <p className="text-gray-600">Creating an Intern management system for interns working at RFC .</p>
                    <p className="text-gray-600">A cloud native app built with Next.js using aws cloud services .</p>
                    <p className="text-gray-600">AWS services used : S3 , DynamoDB , ECR , EKS , CloudWatch .</p>
                    <p className="text-gray-600">DEVOPS tools used : git , jenkins , docker , terraform .</p>
                    <p className="text-gray-600">Languages used : Node.js , Javascript .</p>
                    <p className="text-gray-600">Frameworks used : Next.js , React.js .</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-semibold text-gray-800">Tutorial App</h3>
                    <p className="text-gray-600">Creating a tutorial app with MERN stack for ESPRIT students .</p>
                    <p className="text-gray-600">Courses data are scraped using PYTHON .</p>
                    <p className="text-gray-600">Languages used : Node.js , Javascript , Python .</p>
                    <p className="text-gray-600">Frameworks used : React.js , Express.js .</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-semibold text-gray-800">Network Support</h3>
                    <p className="text-gray-600">Responding to tickets solving B2B Network problems at Tunisie-Telecom C-NOC service .</p>

                </div>
            </motion.div>
        </motion.section>
    );
};

export default ExperienceSection;
