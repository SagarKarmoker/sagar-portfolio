import React from 'react'
import { BlurFade } from '@/components/ui/blur-fade'
import { BorderBeam } from '@/components/ui/border-beam'
import { Badge } from '@/components/ui/badge'
import { Calendar, MapPin, ExternalLink } from 'lucide-react'
import Image from 'next/image'

export default function WorkEx({ jobs }) {
    const workExperience = (jobs || []).map(job => ({
        image: job.image,
        company: job.org || job.position,
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
        <div className="py-12 sm:py-16 lg:py-20">
            <BlurFade delay={0.1} duration={0.6} offset={8}>
                <div className="section-industry mb-12">
                    <div className="meta-label">01 · Professional</div>
                    <h2>Work Experience</h2>
                    <p className="subtitle">
                        Building production systems in blockchain infrastructure and backend engineering.
                    </p>
                </div>
            </BlurFade>

            <div className="space-y-6 sm:space-y-8">
                {workExperience.map((job, index) => (
                    <BlurFade key={index} delay={0.1 + index * 0.1} duration={0.6} offset={8}>
                        <div className={`relative bg-card rounded-xl p-5 sm:p-6 shadow-sm border transition-all duration-300 overflow-hidden ${
                            job.current
                                ? 'border-[hsl(var(--color-secondary)_/_0.3)]'
                                : 'border-border'
                        }`}>
                            {job.current && (
                                <BorderBeam
                                    colorFrom="hsl(180 55% 25%)"
                                    colorTo="hsl(24 55% 54%)"
                                    size={200}
                                    duration={6}
                                    borderWidth={1}
                                />
                            )}
                            <div className="relative z-10">
                                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4 sm:mb-6">
                                    <div className="flex-1">
                                        <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 mb-4">
                                            {job.image && (
                                                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl overflow-hidden bg-white shadow-md flex-shrink-0 self-start sm:self-center">
                                                    <Image
                                                        src={job.image}
                                                        alt={job.company || 'Company logo'}
                                                        width={64}
                                                        height={64}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                            )}
                                            <div className="flex-1 min-w-0">
                                                <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-3 space-y-2 sm:space-y-0 mb-2">
                                                    <h3 className="text-xl sm:text-2xl font-semibold text-foreground">
                                                        {job.title}
                                                    </h3>
                                                    <div className="flex flex-wrap gap-2">
                                                        {job.current && (
                                                            <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0 animate-pulse text-xs">
                                                                Current
                                                            </Badge>
                                                        )}
                                                        {job.company && (
                                                            <Badge className="bg-[hsl(var(--color-accent))] text-white border-0 text-xs">
                                                                {job.company}
                                                            </Badge>
                                                        )}
                                                    </div>
                                                </div>

                                                <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-2 sm:gap-4 text-sm sm:text-base text-muted-foreground">
                                                    <div className="flex items-center space-x-1">
                                                        <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                                                        <span>{job.period}</span>
                                                    </div>
                                                    {job.location && (
                                                        <div className="flex items-center space-x-1">
                                                            <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
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
                                            className="inline-flex items-center space-x-2 text-color-secondary dark:text-color-primary hover:text-color-accent transition-colors cursor-pointer text-sm sm:text-base mt-4 lg:mt-0"
                                        >
                                            <span>Visit Website</span>
                                            <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                                        </a>
                                    )}
                                </div>

                                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4 sm:mb-6">
                                    {job.description}
                                </p>

                                {job.responsibilities && job.responsibilities.length > 0 && (
                                    <div className="mb-4 sm:mb-6">
                                        <h4 className="font-semibold text-foreground mb-2 sm:mb-3 text-sm sm:text-base">
                                            Key Responsibilities:
                                        </h4>
                                        <ul className="space-y-1.5 sm:space-y-2">
                                            {job.responsibilities.map((responsibility, idx) => (
                                                <li key={idx} className="flex items-start space-x-2 text-sm sm:text-base text-muted-foreground">
                                                    <span className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full mt-2 flex-shrink-0 ${
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
                                        <h4 className="font-semibold text-foreground mb-2 sm:mb-3 text-sm sm:text-base">
                                            Technologies Used:
                                        </h4>
                                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
                                            {job.technologies.map((tech, idx) => (
                                                <Badge
                                                    key={idx}
                                                    variant="secondary"
                                                    className={`transition-colors text-xs sm:text-sm ${
                                                        job.current
                                                            ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 hover:bg-green-200 dark:hover:bg-green-900/50'
                                                            : 'bg-[hsl(var(--color-secondary)_/_0.08)] text-[hsl(var(--color-secondary))] hover:bg-[hsl(var(--color-secondary)_/_0.15)]'
                                                    }`}
                                                >
                                                    {tech}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </BlurFade>
                ))}
            </div>
        </div>
    )
}
