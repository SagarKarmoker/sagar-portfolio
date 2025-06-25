import React from 'react'
import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { ExternalLink, Github, Calendar } from 'lucide-react'
import ProjectCard from './ProjectCard'

export default function MyProjects() {
    const projects = [
        {
            name: "eKYC using Blockchain",
            timeline: "Current project",
            desc: "A blockchain-based system designed to streamline the verification processes required for KYC compliance, increasing security and privacy through decentralized data management.",
            badges: ["Blockchain", "Security", "Data Management"],
            website: "",
            github: "",
            coverImage: "",
            status: "In Progress"
        },
        {
            name: "Taxation System with eKYC Using Blockchain",
            timeline: "Development stage",
            desc: "An integrated blockchain system designed to facilitate the secure and efficient handling of tax processes, coupled with an eKYC mechanism to ensure compliance and authenticity.",
            badges: ["Blockchain", "Finance", "Security", "KYC"],
            website: "",
            github: "",
            coverImage: "",
            status: "Development"
        },
        {
            name: "UniCourse",
            timeline: "Current project",
            desc: "A full-fledged Learning Management System built with HTML, JavaScript, Tailwind CSS, and PHP.",
            badges: ["HTML", "JavaScript", "Tailwind CSS", "PHP"],
            website: "",
            github: "https://github.com/SagarKarmoker/UniCourse",
            coverImage: "",
            status: "Live"
        },
        {
            name: "TutorBridge",
            timeline: "Past project",
            desc: "A freelance teaching platform for Android developed using Java, XML, and Firebase.",
            badges: ["Java", "XML", "Firebase"],
            website: "",
            github: "https://github.com/SagarKarmoker/TutorBridge",
            coverImage: "",
            status: "Completed"
        },
        {
            name: "TraceChainBD",
            timeline: "Past project",
            desc: "A blockchain-based supply chain management system that enhances transparency and traceability in logistics.",
            badges: ["Blockchain", "Supply Chain"],
            website: "",
            github: "https://github.com/SagarKarmoker/TraceChainBD",
            coverImage: "",
            status: "Completed"
        },
        {
            name: "Job Platform with Interview Feature",
            timeline: "Past project",
            desc: "An online platform that connects job seekers and employers, featuring built-in tools for conducting live interviews and assessments.",
            badges: ["Web Development", "React", "Node.js", "WebRTC"],
            website: "",
            github: "",
            coverImage: "",
            status: "Completed"
        }
    ];

    return (
        <div className="py-20">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-6">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    My Work
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                    Featured{' '}
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        Projects
                    </span>
                </h2>
                <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                    Here are some of my recent projects that showcase my skills in blockchain development, 
                    web applications, and mobile development.
                </p>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mt-6"></div>
            </motion.div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <ProjectCard project={project} />
                    </motion.div>
                ))}
            </div>

            {/* View More Button */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center mt-12"
            >
                <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
                    View All Projects
                </button>
            </motion.div>
        </div>
    )
}
