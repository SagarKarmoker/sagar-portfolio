import React from 'react'
import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Calendar, MapPin, GraduationCap, ExternalLink } from 'lucide-react'
import educationData from '@/data/education.json'
import Image from 'next/image'

export default function Education() {
    const education = educationData;

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
                    Educational{' '}
                    <span className="bg-gradient-to-r from-color-secondary to-color-accent bg-clip-text text-transparent">
                        Background
                    </span>
                </h2>
                <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                    My academic journey and educational achievements in computer science and engineering.
                </p>
                <div className="w-24 h-1 bg-gradient-to-r from-color-secondary to-color-accent mx-auto rounded-full mt-6"></div>
            </motion.div>

            <div className="space-y-8">
                {education.map((edu, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-white dark:bg-color-dark rounded-2xl p-8 shadow-xl border border-color-primary/20 dark:border-color-secondary/30 hover:shadow-2xl transition-all duration-300"
                    >
                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                            <div className="flex-1">
                                <div className="flex items-center space-x-4 mb-4">
                                    {edu.image && (
                                        <div className="w-16 h-16 rounded-xl overflow-hidden bg-white shadow-md flex-shrink-0">
                                            <Image
                                                src={edu.image}
                                                alt={edu.institution}
                                                width={64}
                                                height={64}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    )}
                                    <div className="flex-1">
                                        <div className="flex items-center space-x-3 mb-2">
                                            <div className="p-2 bg-gradient-to-r from-color-secondary to-color-accent rounded-lg text-white">
                                                <GraduationCap className="w-5 h-5" />
                                            </div>
                                            <h3 className="text-2xl font-semibold text-slate-800 dark:text-slate-200">
                                                {edu.degree}
                                            </h3>
                                            {edu.institution && (
                                                <Badge className="bg-color-accent/90 text-white border-0">
                                                    {edu.institution}
                                                </Badge>
                                            )}
                                        </div>
                                        
                                        <div className="flex flex-wrap items-center gap-4 text-slate-600 dark:text-slate-400">
                                            <div className="flex items-center space-x-1">
                                                <Calendar className="w-4 h-4" />
                                                <span>{edu.period}</span>
                                            </div>
                                            {edu.location && (
                                                <div className="flex items-center space-x-1">
                                                    <MapPin className="w-4 h-4" />
                                                    <span>{edu.location}</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            {edu.website && (
                                <a 
                                    href={edu.website} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center space-x-2 text-color-secondary dark:text-color-primary hover:text-color-accent transition-colors cursor-pointer"
                                >
                                    <span>Visit Institution</span>
                                    <ExternalLink className="w-4 h-4" />
                                </a>
                            )}
                        </div>

                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                            {edu.description}
                        </p>

                        {edu.courses && (
                            <div className="mb-6">
                                <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-3">
                                    Key Courses:
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {edu.courses.map((course, idx) => (
                                        <Badge 
                                            key={idx}
                                            variant="secondary"
                                            className="bg-color-primary/10 dark:bg-color-primary/20 text-color-secondary dark:text-color-primary hover:bg-color-primary/20 dark:hover:bg-color-primary/30 transition-colors"
                                        >
                                            {course}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        )}

                        {edu.achievements && (
                            <div>
                                <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-3">
                                    Achievements & Activities:
                                </h4>
                                <ul className="space-y-2">
                                    {edu.achievements.map((achievement, idx) => (
                                        <li key={idx} className="flex items-start space-x-2 text-slate-600 dark:text-slate-300">
                                            <span className="w-2 h-2 bg-color-accent rounded-full mt-2 flex-shrink-0"></span>
                                            <span>{achievement}</span>
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