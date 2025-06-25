import React from 'react'
import { motion } from 'framer-motion'
import { Badge } from "@/components/ui/badge"
import { Code, Database, Smartphone, Globe, Shield } from 'lucide-react'
import skillsData from '@/data/skills.json'
import logosData from '@/data/logos.json'
import { getIcon } from '@/lib/icons'
import Image from 'next/image'

export default function Skills() {
    const { skillCategories, additionalSkills } = skillsData;
    const logos = logosData;

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
                    <span className="bg-gradient-to-r from-color-secondary to-color-accent bg-clip-text text-transparent">
                        Skills
                    </span>
                </h2>
                <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                    A comprehensive overview of my technical expertise across various domains of software development.
                </p>
                <div className="w-24 h-1 bg-gradient-to-r from-color-secondary to-color-accent mx-auto rounded-full mt-6"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {skillCategories.map((category, index) => {
                    const IconComponent = getIcon(category.icon);
                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white dark:bg-color-dark rounded-2xl p-8 shadow-xl border border-color-primary/20 dark:border-color-secondary/30 hover:shadow-2xl transition-all duration-300"
                        >
                            <div className="flex items-center mb-6">
                                <div className="flex items-center space-x-3">
                                    <div className="p-3 bg-gradient-to-r from-color-secondary to-color-accent rounded-xl text-white">
                                        <IconComponent className="w-6 h-6" />
                                    </div>
                                </div>
                                <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 ml-4">
                                    {category.title}
                                </h3>
                            </div>
                            
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, skillIndex) => {
                                    const skillLogo = logos.programmingLanguages[skill] || 
                                                    logos.frontend[skill] || 
                                                    logos.backend[skill] || 
                                                    logos.mobile[skill] || 
                                                    logos.blockchain[skill] || 
                                                    logos.tools[skill];
                                    return (
                                        <Badge 
                                            key={skillIndex}
                                            variant="secondary" 
                                            className="bg-color-primary/10 dark:bg-color-primary/20 text-color-secondary dark:text-color-primary hover:bg-color-primary/20 dark:hover:bg-color-primary/30 transition-colors flex items-center space-x-1"
                                        >
                                            {skillLogo && (
                                                <div className="w-4 h-4 flex-shrink-0">
                                                    <Image
                                                        src={skillLogo}
                                                        alt={skill}
                                                        width={16}
                                                        height={16}
                                                        className="w-full h-full object-contain"
                                                    />
                                                </div>
                                            )}
                                            <span>{skill}</span>
                                        </Badge>
                                    );
                                })}
                            </div>
                        </motion.div>
                    );
                })}
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
                <div className="flex flex-wrap justify-center gap-4">
                    {additionalSkills.map((skill, index) => {
                        const skillLogo = logos.tools[skill] || logos.programmingLanguages[skill] || logos.frontend[skill] || logos.backend[skill];
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                viewport={{ once: true }}
                                className="flex items-center space-x-2 bg-white dark:bg-color-dark rounded-xl p-3 shadow-lg border border-color-primary/20 dark:border-color-secondary/30 hover:shadow-xl transition-all duration-300 hover:scale-105"
                            >
                                {skillLogo && (
                                    <div className="w-6 h-6 flex-shrink-0">
                                        <Image
                                            src={skillLogo}
                                            alt={skill}
                                            width={24}
                                            height={24}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                )}
                                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                                    {skill}
                                </span>
                            </motion.div>
                        );
                    })}
                </div>
            </motion.div>
        </div>
    )
}
