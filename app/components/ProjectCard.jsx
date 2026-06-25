import React from 'react'
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight, Github } from 'lucide-react'

export default function ProjectCard({ project }) {
    const title = project.title || project.name
    const description = project.description || project.desc
    const technologies = project.technologies || project.badges || []
    const live = project.live || project.website
    const github = project.github
    const category = project.category || project.status || 'Project'

    return (
        <div className="group relative bg-card rounded-2xl border border-border p-6 hover:border-[hsl(var(--color-secondary)_/_0.4)] transition-all duration-500 flex flex-col h-full">
            {/* Category tag */}
            <div className="mb-4">
                <Badge className="bg-[hsl(var(--color-secondary)_/_0.1)] text-[hsl(var(--color-secondary))] hover:bg-[hsl(var(--color-secondary)_/_0.15)] border-0 text-xs font-mono">
                    {category}
                </Badge>
            </div>

            {/* Title + links */}
            <div className="flex items-start justify-between gap-3 mb-3">
                <h3 className="text-lg font-semibold text-foreground group-hover:text-[hsl(var(--color-secondary))] transition-colors duration-300">
                    {title}
                </h3>
                <div className="flex gap-1.5 shrink-0 pt-0.5">
                    {github && (
                        <a
                            href={github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 rounded-lg text-muted-foreground/60 hover:text-[hsl(var(--color-secondary))] hover:bg-[hsl(var(--color-secondary)_/_0.08)] transition-all"
                        >
                            <Github className="w-4 h-4" />
                        </a>
                    )}
                    {live && (
                        <a
                            href={live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 rounded-lg text-muted-foreground/60 hover:text-[hsl(var(--color-secondary))] hover:bg-[hsl(var(--color-secondary)_/_0.08)] transition-all"
                        >
                            <ArrowUpRight className="w-4 h-4" />
                        </a>
                    )}
                </div>
            </div>

            {/* Description */}
            <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-5">
                {description}
            </p>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-1.5 mt-auto">
                {technologies.slice(0, 5).map((tech, index) => (
                    <Badge
                        key={index}
                        variant="outline"
                        className="border-border text-muted-foreground/70 text-[11px] font-normal px-2 py-0.5"
                    >
                        {tech}
                    </Badge>
                ))}
                {technologies.length > 5 && (
                    <span className="text-[11px] text-muted-foreground/50 self-center">
                        +{technologies.length - 5}
                    </span>
                )}
            </div>
        </div>
    )
}
