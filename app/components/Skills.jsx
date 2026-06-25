import React from 'react'
import { BlurFade } from '@/components/ui/blur-fade'
import { IconCloud } from '@/components/ui/icon-cloud'
import { Badge } from "@/components/ui/badge"
import { getIcon } from '@/lib/icons'

export default function Skills({ categories, logos: logosProp }) {
    const skillCategories = categories || []
    const logos = logosProp || {}

    // All image URLs for IconCloud
    const allLogos = Object.values(logos).flatMap(cat => Object.values(cat))

    return (
        <div className="py-12 sm:py-16 lg:py-20">
            <BlurFade delay={0.1} duration={0.6} offset={8}>
                <div className="section-industry mb-12">
                    <div className="meta-label">03 · Stack</div>
                    <h2>Technical Skills</h2>
                    <p className="subtitle">
                        Languages, frameworks, and tools across the full stack.
                    </p>
                </div>
            </BlurFade>

            {/* IconCloud hero + category grid */}
            <div className="grid lg:grid-cols-5 gap-8 items-start">
                {/* Category cards — 3/5 */}
                <div className="lg:col-span-3 grid gap-4">
                    {skillCategories.map((category, index) => {
                        const IconComponent = getIcon(category.icon)
                        return (
                            <BlurFade key={index} delay={0.1 + index * 0.08} duration={0.6} offset={8}>
                                <div className="flex items-start gap-4 bg-card rounded-xl p-4 border border-border hover:border-[hsl(var(--color-secondary)_/_0.3)] transition-all duration-300">
                                    <div className="p-2.5 bg-[hsl(var(--color-secondary))] rounded-xl text-white shrink-0">
                                        <IconComponent className="w-5 h-5" />
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <h3 className="text-sm font-semibold text-foreground mb-3">{category.title}</h3>
                                        <div className="flex flex-wrap gap-1.5">
                                            {category.skills.map((skill, skillIndex) => (
                                                <Badge
                                                    key={skillIndex}
                                                    variant="secondary"
                                                    className="bg-[hsl(var(--color-secondary)_/_0.08)] text-[hsl(var(--color-secondary))] text-xs font-normal"
                                                >
                                                    {skill}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </BlurFade>
                        )
                    })}
                </div>

                {/* IconCloud — 2/5 */}
                <BlurFade delay={0.25} duration={0.8} offset={12} className="lg:col-span-2">
                    <div className="flex justify-center lg:justify-end">
                        <div className="w-[350px] h-[350px] lg:w-[400px] lg:h-[400px]">
                            <IconCloud images={allLogos} />
                        </div>
                    </div>
                </BlurFade>
            </div>
        </div>
    )
}
