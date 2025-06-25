import React from 'react'
import { motion } from 'framer-motion'
import { Badge } from "@/components/ui/badge"
import { Code, Database, Smartphone, Globe, Shield } from 'lucide-react'

export default function Skills() {
    const skillCategories = [
        {
            title: "Programming Languages",
            icon: <Code className="w-6 h-6" />,
            skills: ["Java", "C++", "C", "Python", "JavaScript", "TypeScript", "Solidity"]
        },
        {
            title: "Frontend Development",
            icon: <Globe className="w-6 h-6" />,
            skills: ["React", "Next.js", "HTML", "CSS", "Tailwind CSS", "Vite", "JavaScript"]
        },
        {
            title: "Backend & Database",
            icon: <Database className="w-6 h-6" />,
            skills: ["Node.js", "Spring Boot", "MongoDB", "Oracle SQL", "MySQL", "Firebase"]
        },
        {
            title: "Mobile Development",
            icon: <Smartphone className="w-6 h-6" />,
            skills: ["Kotlin", "Jetpack Compose", "Android", "XML", "Java"]
        },
        {
            title: "Blockchain & Security",
            icon: <Shield className="w-6 h-6" />,
            skills: ["Blockchain", "Solidity", "Smart Contracts", "Ethers.js", "Web3.js", "Security"]
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
                <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                    Technical{' '}
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        Skills
                    </span>
                </h2>
                <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                    A comprehensive overview of my technical expertise across various domains of software development.
                </p>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mt-6"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {skillCategories.map((category, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl border border-slate-200 dark:border-slate-700 hover:shadow-2xl transition-all duration-300"
                    >
                        <div className="flex items-center mb-6">
                            <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white mr-4">
                                {category.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200">
                                {category.title}
                            </h3>
                        </div>
                        
                        <div className="flex flex-wrap gap-2">
                            {category.skills.map((skill, skillIndex) => (
                                <Badge 
                                    key={skillIndex}
                                    variant="secondary" 
                                    className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
                                >
                                    {skill}
                                </Badge>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Additional Skills Section */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="mt-16 text-center"
            >
                <h3 className="text-2xl font-semibold text-slate-800 dark:text-slate-200 mb-8">
                    Additional Skills & Tools
                </h3>
                <div className="flex flex-wrap justify-center gap-3">
                    {[
                        "Git", "GitHub", "Docker", "AWS", "REST APIs", "GraphQL", 
                        "Agile", "Scrum", "JIRA", "Figma", "Postman", "VS Code"
                    ].map((skill, index) => (
                        <Badge 
                            key={index}
                            variant="outline"
                            className="border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:border-blue-500 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                            {skill}
                        </Badge>
                    ))}
                </div>
            </motion.div>
        </div>
    )
}
