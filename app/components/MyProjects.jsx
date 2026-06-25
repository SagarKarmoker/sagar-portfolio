import React from 'react'
import { BlurFade } from '@/components/ui/blur-fade'
import ProjectCard from './ProjectCard'

export default function MyProjects({ projects: projectsProp }) {
    const projects = (projectsProp || []).map(project => ({
        title: project.name,
        description: project.desc,
        technologies: project.badges,
        date: project.timeline,
        status: project.status,
        github: project.github || null,
        live: project.website || null,
        category: project.status,
        icon: '💻'
    }));

    return (
        <div className="py-12 sm:py-16 lg:py-20">
            <BlurFade delay={0.1} duration={0.6} offset={8}>
                <div className="section-industry mb-12">
                    <div className="meta-label">02 · Build</div>
                    <h2>Featured Projects</h2>
                    <p className="subtitle">
                        Recent work across blockchain, web applications, and mobile development.
                    </p>
                </div>
            </BlurFade>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {projects.map((project, index) => (
                    <BlurFade key={index} delay={0.1 + index * 0.08} duration={0.6} offset={8}>
                        <ProjectCard project={project} />
                    </BlurFade>
                ))}
            </div>
        </div>
    )
}
