import React from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Globe, Github, ExternalLink, Calendar } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function ProjectCard({ project }) {
    // Handle both old and new field names for compatibility
    const title = project.title || project.name;
    const description = project.description || project.desc;
    const technologies = project.technologies || project.badges || [];
    const live = project.live || project.website;
    const github = project.github;
    const coverImage = project.coverImage;
    const status = project.status;
    const category = project.category || 'Project';
    const icon = project.icon || '💻';
    const date = project.date || project.timeline;

    const getStatusColor = (status) => {
        switch (status) {
            case 'Live':
                return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300';
            case 'In Progress':
                return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300';
            case 'Development':
                return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300';
            case 'Completed':
                return 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300';
            default:
                return 'bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-300';
        }
    };

    return (
        <motion.div
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            className="bg-white dark:bg-color-dark rounded-2xl shadow-xl border border-color-primary/20 dark:border-color-secondary/30 overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col h-full"
        >
            {/* Project Image */}
            <div className="relative h-48 bg-gradient-to-br from-color-primary/20 to-color-secondary/20 dark:from-color-primary/10 dark:to-color-secondary/10 flex-shrink-0">
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl opacity-20">
                        {icon}
                    </div>
                </div>
                <div className="absolute top-4 right-4">
                    <Badge className="bg-color-accent/90 text-white border-0">
                        {category}
                    </Badge>
                </div>
            </div>

            {/* Project Content */}
            <div className="p-6 flex flex-col flex-1">
                <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200">
                        {title}
                    </h3>
                    <div className="flex space-x-2 flex-shrink-0">
                        {github && (
                            <a 
                                href={github} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="p-2 bg-slate-100 dark:bg-slate-700 rounded-lg hover:bg-color-primary/20 dark:hover:bg-color-primary/20 transition-colors cursor-pointer"
                            >
                                <Github className="w-4 h-4 text-slate-600 dark:text-slate-300" />
                            </a>
                        )}
                        {live && (
                            <a 
                                href={live} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="p-2 bg-slate-100 dark:bg-slate-700 rounded-lg hover:bg-color-primary/20 dark:hover:bg-color-primary/20 transition-colors cursor-pointer"
                            >
                                <ExternalLink className="w-4 h-4 text-slate-600 dark:text-slate-300" />
                            </a>
                        )}
                    </div>
                </div>

                <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed flex-1">
                    {description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {technologies.map((tech, index) => (
                        <Badge 
                            key={index}
                            variant="secondary"
                            className="bg-color-primary/10 dark:bg-color-primary/20 text-color-secondary dark:text-color-primary text-xs"
                        >
                            {tech}
                        </Badge>
                    ))}
                </div>

                {/* Project Details */}
                <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400 mb-4">
                    <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{date}</span>
                    </div>
                    {status && (
                        <Badge 
                            variant={status === 'Completed' ? 'default' : 'secondary'}
                            className={status === 'Completed' 
                                ? 'bg-color-accent text-white' 
                                : 'bg-color-primary/20 text-color-secondary dark:text-color-primary'
                            }
                        >
                            {status}
                        </Badge>
                    )}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 mt-auto">
                    {live && (
                        <Button 
                            asChild
                            className="flex-1 bg-gradient-to-r from-color-secondary to-color-accent hover:from-color-secondary/90 hover:to-color-accent/90 text-white border-0 transition-all duration-300 hover:scale-105"
                        >
                            <a 
                                href={live} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-center justify-center space-x-2"
                            >
                                <Globe className="w-4 h-4" />
                                <span>Visit Project</span>
                            </a>
                        </Button>
                    )}
                    {github && (
                        <Button 
                            asChild
                            variant="outline"
                            className="flex-1 border-color-primary/30 dark:border-color-secondary/30 text-slate-700 dark:text-slate-300 hover:border-color-secondary dark:hover:border-color-primary hover:text-color-secondary dark:hover:text-color-primary transition-all duration-300 hover:scale-105"
                        >
                            <a 
                                href={github} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-center justify-center space-x-2"
                            >
                                <Github className="w-4 h-4" />
                                <span>View Code</span>
                            </a>
                        </Button>
                    )}
                    {!live && !github && (
                        <div className="w-full text-center text-slate-500 dark:text-slate-400 text-sm py-2">
                            Links coming soon
                        </div>
                    )}
                </div>
            </div>
        </motion.div>
    )
}
