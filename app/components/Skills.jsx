import React from 'react'
import { motion } from 'framer-motion'
import { Badge } from "@/components/ui/badge"
import { Code, Database, Smartphone, Globe, Shield } from 'lucide-react'
import skillsData from '@/data/skills.json'
import { getIcon } from '@/lib/icons'

export default function Skills() {
    const { skillCategories, additionalSkills } = skillsData;

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
                                <div className="p-3 bg-gradient-to-r from-color-secondary to-color-accent rounded-xl text-white mr-4">
                                    <IconComponent className="w-6 h-6" />
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
                                        className="bg-color-primary/10 dark:bg-color-primary/20 text-color-secondary dark:text-color-primary hover:bg-color-primary/20 dark:hover:bg-color-primary/30 transition-colors"
                                    >
                                        {skill}
                                    </Badge>
                                ))}
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
                <div className="flex flex-wrap justify-center gap-3">
                    {additionalSkills.map((skill, index) => (
                        <Badge 
                            key={index}
                            variant="outline"
                            className="border-color-primary/30 dark:border-color-secondary/30 text-slate-700 dark:text-slate-300 hover:border-color-secondary dark:hover:border-color-primary hover:text-color-secondary dark:hover:text-color-primary transition-colors"
                        >
                            {skill}
                        </Badge>
                    ))}
                </div>
            </motion.div>
        </div>
    )
}
