import React from 'react'
import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Calendar, MapPin, GraduationCap, ExternalLink } from 'lucide-react'
import Image from 'next/image'

export default function Education({ schools }) {
    const education = schools || [];

    return (
        <div className="py-12 sm:py-16 lg:py-20">
            {/* Heading: academic */}
            <div className="section-academic">
                <h2>
                    Educational{' '}
                    <span className="text-[hsl(var(--color-accent))]">Background</span>
                </h2>
                <p className="subtitle">
                    My academic journey and achievements in computer science and engineering.
                </p>
            </div>

            <div className="space-y-6 sm:space-y-8">
                {education.map((edu, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-card rounded-xl p-5 sm:p-6 shadow-sm border border-border hover:border-[hsl(var(--color-accent)_/_0.3)] transition-all duration-300"
                    >
                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4 sm:mb-6">
                            <div className="flex-1">
                                <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 mb-4">
                                    {edu.image && (
                                        <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl overflow-hidden bg-white shadow-md flex-shrink-0 self-start sm:self-center">
                                            <Image
                                                src={edu.image}
                                                alt={edu.institution || 'Institution logo'}
                                                width={64}
                                                height={64}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    )}
                                    <div className="flex-1 min-w-0">
                                        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-3 space-y-2 sm:space-y-0 mb-2">
                                            <div className="flex items-center space-x-2 sm:space-x-3">
                                                <div className="p-1.5 sm:p-2 bg-[hsl(var(--color-accent))] rounded-lg text-white flex-shrink-0">
                                                    <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5" />
                                                </div>
                                                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-foreground">
                                                    {edu.degree}
                                                </h3>
                                            </div>
                                            <Badge className="bg-[hsl(var(--color-accent))] text-white border-0 text-xs sm:text-sm self-start sm:self-center">
                                                {edu.institution || 'University'}
                                            </Badge>
                                        </div>
                                        
                                        <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-2 sm:gap-4 text-sm sm:text-base text-muted-foreground">
                                            <div className="flex items-center space-x-1">
                                                <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                                                <span>{edu.period}</span>
                                            </div>
                                            {edu.location && (
                                                <div className="flex items-center space-x-1">
                                                    <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
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
                                    className="inline-flex items-center space-x-2 text-[hsl(var(--color-secondary))] dark:text-[hsl(var(--color-secondary))] hover:opacity-70 transition-colors cursor-pointer text-sm sm:text-base mt-4 lg:mt-0"
                                >
                                    <span>Visit Institution</span>
                                    <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                                </a>
                            )}
                        </div>

                        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4 sm:mb-6">
                            {edu.description}
                        </p>

                        {edu.courses && (
                            <div className="mb-4 sm:mb-6">
                                <h4 className="font-semibold text-foreground mb-2 sm:mb-3 text-sm sm:text-base">
                                    Key Courses
                                </h4>
                                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                                    {edu.courses.map((course, idx) => (
                                        <Badge 
                                            key={idx}
                                            variant="secondary"
                                            className="bg-[hsl(var(--color-secondary)_/_0.08)] text-[hsl(var(--color-secondary))] hover:bg-[hsl(var(--color-secondary)_/_0.15)] transition-colors text-xs sm:text-sm"
                                        >
                                            {course}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        )}

                        {edu.achievements && (
                            <div>
                                <h4 className="font-semibold text-foreground mb-2 sm:mb-3 text-sm sm:text-base">
                                    Achievements &amp; Activities
                                </h4>
                                <ul className="space-y-1.5 sm:space-y-2">
                                    {edu.achievements.map((achievement, idx) => (
                                        <li key={idx} className="flex items-start space-x-2 text-sm sm:text-base text-muted-foreground">
                                            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[hsl(var(--color-accent))] rounded-full mt-2 flex-shrink-0"></span>
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