import React from 'react'
import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Calendar, MapPin, Trophy, ExternalLink } from 'lucide-react'
import hackathonsData from '@/data/hackathons.json'

export default function Hackathon() {
    const hackathons = hackathonsData;

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
                    Hackathon{' '}
                    <span className="bg-gradient-to-r from-color-secondary to-color-accent bg-clip-text text-transparent">
                        Experience
                    </span>
                </h2>
                <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                    My participation in various hackathons and coding competitions, showcasing innovation and problem-solving skills.
                </p>
                <div className="w-24 h-1 bg-gradient-to-r from-color-secondary to-color-accent mx-auto rounded-full mt-6"></div>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {hackathons.map((hackathon, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-white dark:bg-color-dark rounded-2xl p-8 shadow-xl border border-color-primary/20 dark:border-color-secondary/30 hover:shadow-2xl transition-all duration-300"
                    >
                        <div className="flex items-start justify-between mb-4">
                            <div className="flex-1">
                                <div className="flex items-center space-x-3 mb-2">
                                    <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200">
                                        {hackathon.name}
                                    </h3>
                                    {hackathon.result && (
                                        <Badge className="bg-color-accent/90 text-white border-0">
                                            {hackathon.result}
                                        </Badge>
                                    )}
                                </div>
                                
                                <div className="flex flex-wrap items-center gap-4 text-slate-600 dark:text-slate-400 mb-4">
                                    <div className="flex items-center space-x-1">
                                        <Calendar className="w-4 h-4" />
                                        <span>{hackathon.date}</span>
                                    </div>
                                    {hackathon.location && (
                                        <div className="flex items-center space-x-1">
                                            <MapPin className="w-4 h-4" />
                                            <span>{hackathon.location}</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                            
                            {hackathon.website && (
                                <a 
                                    href={hackathon.website} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center space-x-2 text-color-secondary dark:text-color-primary hover:text-color-accent transition-colors cursor-pointer"
                                >
                                    <span>Visit</span>
                                    <ExternalLink className="w-4 h-4" />
                                </a>
                            )}
                        </div>

                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                            {hackathon.description}
                        </p>

                        {hackathon.project && (
                            <div className="mb-6">
                                <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-3">
                                    Project: {hackathon.project.name}
                                </h4>
                                <p className="text-slate-600 dark:text-slate-300 mb-3">
                                    {hackathon.project.description}
                                </p>
                                {hackathon.project.technologies && (
                                    <div className="flex flex-wrap gap-2">
                                        {hackathon.project.technologies.map((tech, idx) => (
                                            <Badge 
                                                key={idx}
                                                variant="secondary"
                                                className="bg-color-primary/10 dark:bg-color-primary/20 text-color-secondary dark:text-color-primary hover:bg-color-primary/20 dark:hover:bg-color-primary/30 transition-colors"
                                            >
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>
                                )}
                            </div>
                        )}

                        {hackathon.achievements && (
                            <div>
                                <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-3 flex items-center">
                                    <Trophy className="w-5 h-5 mr-2 text-color-accent" />
                                    Achievements
                                </h4>
                                <ul className="space-y-2">
                                    {hackathon.achievements.map((achievement, idx) => (
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
