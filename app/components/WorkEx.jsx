import React from 'react'
import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Calendar, MapPin, ExternalLink } from 'lucide-react'
import workExperienceData from '@/data/workExperience.json'
import Image from 'next/image'

export default function WorkEx() {
    // Map the JSON data to the expected structure
    const workExperience = workExperienceData.map(job => ({
        image: job.image,
        company: job.org,
        title: job.position,
        period: job.time,
        location: job.location || '',
        description: job.description,
        responsibilities: job.responsibilities || [],
        technologies: job.technologies || [],
        website: job.website || '',
        current: job.current || false
    }));

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
                    Work{' '}
                    <span className="bg-gradient-to-r from-color-secondary to-color-accent bg-clip-text text-transparent">
                        Experience
                    </span>
                </h2>
                <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                    My professional journey in software development and blockchain technology.
                </p>
                <div className="w-24 h-1 bg-gradient-to-r from-color-secondary to-color-accent mx-auto rounded-full mt-6"></div>
            </motion.div>

            <div className="space-y-8">
                {workExperience.map((job, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className={`bg-white dark:bg-color-dark rounded-2xl p-8 shadow-xl border transition-all duration-300 ${
                            job.current 
                                ? 'border-color-accent/50 dark:border-color-accent/30 hover:shadow-2xl hover:shadow-color-accent/10' 
                                : 'border-color-primary/20 dark:border-color-secondary/30 hover:shadow-2xl'
                        }`}
                    >
                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                            <div className="flex-1">
                                <div className="flex items-center space-x-4 mb-4">
                                    {job.image && (
                                        <div className="w-16 h-16 rounded-xl overflow-hidden bg-white shadow-md flex-shrink-0">
                                            <Image
                                                src={job.image}
                                                alt={job.company}
                                                width={64}
                                                height={64}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    )}
                                    <div className="flex-1">
                                        <div className="flex items-center space-x-3 mb-2">
                                            <h3 className="text-2xl font-semibold text-slate-800 dark:text-slate-200">
                                                {job.title}
                                            </h3>
                                            {job.current && (
                                                <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0 animate-pulse">
                                                    Current
                                                </Badge>
                                            )}
                                            {job.company && (
                                                <Badge className="bg-color-accent/90 text-white border-0">
                                                    {job.company}
                                                </Badge>
                                            )}
                                        </div>
                                        
                                        <div className="flex flex-wrap items-center gap-4 text-slate-600 dark:text-slate-400">
                                            <div className="flex items-center space-x-1">
                                                <Calendar className="w-4 h-4" />
                                                <span>{job.period}</span>
                                            </div>
                                            {job.location && (
                                                <div className="flex items-center space-x-1">
                                                    <MapPin className="w-4 h-4" />
                                                    <span>{job.location}</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            {job.website && (
                                <a 
                                    href={job.website} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center space-x-2 text-color-secondary dark:text-color-primary hover:text-color-accent transition-colors cursor-pointer"
                                >
                                    <span>Visit Website</span>
                                    <ExternalLink className="w-4 h-4" />
                                </a>
                            )}
                        </div>

                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                            {job.description}
                        </p>

                        {job.responsibilities && job.responsibilities.length > 0 && (
                            <div className="mb-6">
                                <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-3">
                                    Key Responsibilities:
                                </h4>
                                <ul className="space-y-2">
                                    {job.responsibilities.map((responsibility, idx) => (
                                        <li key={idx} className="flex items-start space-x-2 text-slate-600 dark:text-slate-300">
                                            <span className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                                                job.current 
                                                    ? 'bg-gradient-to-r from-green-500 to-emerald-500' 
                                                    : 'bg-color-accent'
                                            }`}></span>
                                            <span>{responsibility}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {job.technologies && job.technologies.length > 0 && (
                            <div>
                                <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-3">
                                    Technologies Used:
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {job.technologies.map((tech, idx) => (
                                        <Badge 
                                            key={idx}
                                            variant="secondary"
                                            className={`transition-colors ${
                                                job.current 
                                                    ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 hover:bg-green-200 dark:hover:bg-green-900/50' 
                                                    : 'bg-color-primary/10 dark:bg-color-primary/20 text-color-secondary dark:text-color-primary hover:bg-color-primary/20 dark:hover:bg-color-primary/30'
                                            }`}
                                        >
                                            {tech}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        )}
                    </motion.div>
                ))}
            </div>
        </div>
    )
}