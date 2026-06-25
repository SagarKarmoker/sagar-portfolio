import React from 'react'
import { BlurFade } from '@/components/ui/blur-fade'
import { BorderBeam } from '@/components/ui/border-beam'
import { Badge } from '@/components/ui/badge'
import { BookOpen, ExternalLink, Globe } from 'lucide-react'

export default function Research({ publications }) {
    const items = publications || []

    return (
        <div className="py-12 sm:py-16 lg:py-20">
            <BlurFade delay={0.1} duration={0.6} offset={8}>
                <div className="section-compact mb-12">
                    <h2>
                        <span className="text-[hsl(var(--color-accent))]">Published</span> Research
                    </h2>
                    <p className="subtitle">
                        Peer-reviewed publications in blockchain, cybersecurity, and distributed systems.
                    </p>

                    <a
                        href="https://scholar.google.com/citations?user=AOEyXnEAAAAJ&hl=en"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 bg-[hsl(var(--color-accent))] text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold hover:opacity-90 transition-all duration-300 cursor-pointer text-sm sm:text-base mt-4"
                    >
                        <Globe className="w-4 h-4 sm:w-5 sm:h-5" />
                        <span>View Google Scholar Profile</span>
                        <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </a>
                </div>
            </BlurFade>

            {/* Publications */}
            <div className="space-y-3 sm:space-y-4">
                {items.map((publication, index) => (
                    <BlurFade key={index} delay={0.1 + index * 0.08} duration={0.6} offset={8}>
                        <div className="relative bg-card rounded-xl p-5 sm:p-6 shadow-sm border border-border hover:border-[hsl(var(--color-accent)_/_0.3)] transition-all duration-300 overflow-hidden">
                            <BorderBeam
                                colorFrom="hsl(24 55% 54%)"
                                colorTo="hsl(180 55% 25%)"
                                size={100}
                                duration={8}
                                delay={index * 0.5}
                                borderWidth={1}
                            />
                            <div className="flex items-start gap-4 relative z-10">
                                <div className="hidden sm:flex w-10 h-10 rounded-lg bg-[hsl(var(--color-accent)_/_0.1)] items-center justify-center text-[hsl(var(--color-accent))] shrink-0 mt-1">
                                    <BookOpen className="w-5 h-5" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex flex-wrap items-start gap-2 mb-2">
                                        <h3 className="text-base sm:text-lg font-semibold text-foreground leading-snug">
                                            {publication.title}
                                        </h3>
                                        <Badge
                                            className={`text-xs border-0 ${
                                                publication.status === 'Published'
                                                    ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                                                    : publication.status === 'To be published'
                                                    ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
                                                    : 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400'
                                            }`}
                                        >
                                            {publication.status}
                                        </Badge>
                                    </div>

                                    <p className="text-sm text-muted-foreground mb-2 font-medium italic">
                                        {publication.venue}
                                    </p>

                                    <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground mb-2">
                                        <span className="font-mono">{publication.year}</span>
                                        <span className="w-1 h-1 rounded-full bg-muted-foreground/30" />
                                        <span>{publication.type}</span>
                                    </div>

                                    {publication.doi && (
                                        <a
                                            href={`https://doi.org/${publication.doi}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1.5 text-xs font-mono text-[hsl(var(--color-accent))] hover:text-[hsl(var(--color-accent)_/_0.7)] transition-colors"
                                        >
                                            <span>{publication.doi}</span>
                                            <ExternalLink className="w-3 h-3" />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </BlurFade>
                ))}
            </div>
        </div>
    )
}
