import React from 'react'
import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Calendar, BookOpen, ExternalLink, FileText } from 'lucide-react'

export default function Research() {
    const researchProjects = [
        {
            title: "Blockchain Technology in Supply Chain Management",
            description: "Researching the implementation of blockchain technology to enhance transparency and traceability in supply chain operations. This project explores how distributed ledger technology can improve efficiency and reduce fraud in global supply chains.",
            period: "2023 - Present",
            status: "Ongoing",
            technologies: ["Blockchain", "Smart Contracts", "Supply Chain", "Research"],
            publications: [
                "Working paper on blockchain adoption in logistics",
                "Conference presentation at IEEE Blockchain Summit 2023"
            ]
        },
        {
            title: "Machine Learning for Predictive Analytics",
            description: "Developing machine learning models for predictive analytics in business applications. This research focuses on using historical data to forecast trends and make data-driven decisions.",
            period: "2022 - 2023",
            status: "Completed",
            technologies: ["Machine Learning", "Python", "Data Analytics", "Predictive Modeling"],
            publications: [
                "Published paper in International Journal of Data Science",
                "Presented at ACM Data Mining Conference 2023"
            ]
        },
        {
            title: "Cybersecurity in IoT Networks",
            description: "Investigating security vulnerabilities in Internet of Things (IoT) networks and developing countermeasures to protect connected devices from cyber threats.",
            period: "2022 - 2023",
            status: "Completed",
            technologies: ["IoT", "Cybersecurity", "Network Security", "Penetration Testing"],
            publications: [
                "Research paper on IoT security protocols",
                "Technical report on vulnerability assessment"
            ]
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
                    Research{' '}
                    <span className="bg-gradient-to-r from-color-secondary to-color-accent bg-clip-text text-transparent">
                        Projects
                    </span>
                </h2>
                <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                    My academic research contributions in emerging technologies and their real-world applications.
                </p>
                <div className="w-24 h-1 bg-gradient-to-r from-color-secondary to-color-accent mx-auto rounded-full mt-6"></div>
            </motion.div>

            <div className="space-y-8">
                {researchProjects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-white dark:bg-color-dark rounded-2xl p-8 shadow-xl border border-color-primary/20 dark:border-color-secondary/30 hover:shadow-2xl transition-all duration-300"
                    >
                        <div className="flex items-start justify-between mb-6">
                            <div className="flex-1">
                                <div className="flex items-center space-x-3 mb-2">
                                    <div className="p-2 bg-gradient-to-r from-color-secondary to-color-accent rounded-lg text-white">
                                        <BookOpen className="w-5 h-5" />
                                    </div>
                                    <h3 className="text-2xl font-semibold text-slate-800 dark:text-slate-200">
                                        {project.title}
                                    </h3>
                                    <Badge 
                                        className={project.status === 'Completed' 
                                            ? 'bg-color-accent text-white' 
                                            : 'bg-color-primary/20 text-color-secondary dark:text-color-primary'
                                        }
                                    >
                                        {project.status}
                                    </Badge>
                                </div>
                                
                                <div className="flex items-center space-x-4 text-slate-600 dark:text-slate-400 mb-4">
                                    <div className="flex items-center space-x-1">
                                        <Calendar className="w-4 h-4" />
                                        <span>{project.period}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                            {project.description}
                        </p>

                        <div className="mb-6">
                            <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-3">
                                Research Areas:
                            </h4>
                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech, idx) => (
                                    <Badge 
                                        key={idx}
                                        variant="secondary"
                                        className="bg-color-primary/10 dark:bg-color-primary/20 text-color-secondary dark:text-color-primary hover:bg-color-primary/20 dark:hover:bg-color-primary/30 transition-colors"
                                    >
                                        {tech}
                                    </Badge>
                                ))}
                            </div>
                        </div>

                        {project.publications && (
                            <div>
                                <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-3 flex items-center">
                                    <FileText className="w-5 h-5 mr-2 text-color-accent" />
                                    Publications & Presentations
                                </h4>
                                <ul className="space-y-2">
                                    {project.publications.map((publication, idx) => (
                                        <li key={idx} className="flex items-start space-x-2 text-slate-600 dark:text-slate-300">
                                            <span className="w-2 h-2 bg-color-accent rounded-full mt-2 flex-shrink-0"></span>
                                            <span>{publication}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </motion.div>
                ))}
            </div>
        </div>
    )
}
