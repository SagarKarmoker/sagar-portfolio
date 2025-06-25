import React from 'react'
import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Calendar, BookOpen, ExternalLink, FileText, Award, Globe } from 'lucide-react'
import researchData from '@/data/research.json'

export default function Research() {
    const { publications, researchAreas } = researchData;

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
                        Publications
                    </span>
                </h2>
                <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-8">
                    My academic research contributions in blockchain technology, cybersecurity, and distributed systems.
                </p>
                
                {/* Google Scholar Profile Link */}
                <motion.a
                    href="https://scholar.google.com/citations?user=AOEyXnEAAAAJ&hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="inline-flex items-center space-x-2 bg-gradient-to-r from-color-secondary to-color-accent text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 cursor-pointer"
                >
                    <Globe className="w-5 h-5" />
                    <span>View Google Scholar Profile</span>
                    <ExternalLink className="w-4 h-4" />
                </motion.a>
                
                <div className="w-24 h-1 bg-gradient-to-r from-color-secondary to-color-accent mx-auto rounded-full mt-6"></div>
            </motion.div>

            {/* Research Areas */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="mb-12"
            >
                <h3 className="text-2xl font-semibold text-slate-800 dark:text-slate-200 mb-6 text-center">
                    Research Areas
                </h3>
                <div className="flex flex-wrap justify-center gap-3">
                    {researchAreas.map((area, index) => (
                        <Badge 
                            key={index}
                            className="bg-color-primary/10 dark:bg-color-primary/20 text-color-secondary dark:text-color-primary hover:bg-color-primary/20 dark:hover:bg-color-primary/30 transition-colors px-4 py-2 text-sm font-medium"
                        >
                            {area}
                        </Badge>
                    ))}
                </div>
            </motion.div>

            {/* Publications */}
            <div className="space-y-6">
                {publications.map((publication, index) => (
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
                                <div className="flex items-center space-x-3 mb-3">
                                    <div className="p-2 bg-gradient-to-r from-color-secondary to-color-accent rounded-lg text-white">
                                        <BookOpen className="w-5 h-5" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 leading-tight">
                                        {publication.title}
                                    </h3>
                                    <Badge 
                                        className={
                                            publication.status === 'Published' 
                                                ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' 
                                                : publication.status === 'To be published'
                                                ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
                                                : 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400'
                                        }
                                    >
                                        {publication.status}
                                    </Badge>
                                </div>
                                
                                <div className="flex items-center space-x-4 text-slate-600 dark:text-slate-400 mb-3">
                                    <div className="flex items-center space-x-1">
                                        <Calendar className="w-4 h-4" />
                                        <span>{publication.year}</span>
                                    </div>
                                    <div className="flex items-center space-x-1">
                                        <Award className="w-4 h-4" />
                                        <span>{publication.type}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4 font-medium">
                            {publication.venue}
                        </p>

                        {publication.doi && (
                            <div className="flex items-center space-x-2 mb-4">
                                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">DOI:</span>
                                <a 
                                    href={`https://doi.org/${publication.doi}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-color-accent hover:text-color-secondary transition-colors text-sm font-mono cursor-pointer"
                                >
                                    {publication.doi}
                                </a>
                                <ExternalLink className="w-3 h-3 text-color-accent" />
                            </div>
                        )}
                    </motion.div>
                ))}
            </div>
        </div>
    )
}
