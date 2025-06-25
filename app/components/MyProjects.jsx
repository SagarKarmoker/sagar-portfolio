import React from 'react'
import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { ExternalLink, Github, Calendar } from 'lucide-react'
import ProjectCard from './ProjectCard'
import projectsData from '@/data/projects.json'

export default function MyProjects() {
    // Transform the data to match the expected structure
    const projects = projectsData.map(project => ({
        title: project.name,
        description: project.desc,
        technologies: project.badges,
        date: project.timeline,
        status: project.status,
        github: project.github || null,
        live: project.website || null,
        category: project.status,
        icon: '💻' // Default icon
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
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-color-primary/20 dark:bg-color-primary/30 text-color-secondary dark:text-color-primary text-sm font-medium mb-6">
                    <span className="w-2 h-2 bg-color-secondary rounded-full mr-2"></span>
                    My Work
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                    Featured{' '}
                    <span className="bg-gradient-to-r from-color-secondary to-color-accent bg-clip-text text-transparent">
                        Projects
                    </span>
                </h2>
                <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                    Here are some of my recent projects that showcase my skills in blockchain development, 
                    web applications, and mobile development.
                </p>
                <div className="w-24 h-1 bg-gradient-to-r from-color-secondary to-color-accent mx-auto rounded-full mt-6"></div>
            </motion.div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <ProjectCard project={project} />
                    </motion.div>
                ))}
            </div>

            {/* View More Button */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center mt-12"
            >
                <button className="px-8 py-4 bg-gradient-to-r from-color-secondary to-color-accent text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-color-accent/25 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
                    View All Projects
                </button>
            </motion.div>
        </div>
    )
}
