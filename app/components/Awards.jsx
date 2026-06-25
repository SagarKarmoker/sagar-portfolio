import React from 'react'
import { BlurFade } from '@/components/ui/blur-fade'
import { BorderBeam } from '@/components/ui/border-beam'
import { Badge } from '@/components/ui/badge'
import { Calendar, MapPin, Award as AwardIcon, Star, Trophy } from 'lucide-react'

export default function Awards({ items }) {
    const awards = items || []

    const getAchievementColor = (achievement) => {
        switch (achievement) {
            case 'Merit Scholarship':
                return 'bg-gradient-to-r from-yellow-500 to-orange-500';
            case "Dean's List":
                return 'bg-gradient-to-r from-purple-500 to-blue-500';
            default:
                return 'bg-gradient-to-r from-color-secondary to-color-accent';
        }
    };

    return (
        <div className="py-12 sm:py-16 lg:py-20">
            <BlurFade delay={0.1} duration={0.6} offset={8}>
                <div className="section-compact mb-12">
                    <h2>
                        Awards &amp;{' '}
                        <span className="text-[hsl(var(--color-accent))]">Achievements</span>
                    </h2>
                    <p className="subtitle">
                        Recognition for academic excellence and outstanding performance.
                    </p>
                </div>
            </BlurFade>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                {awards.map((award, index) => (
                    <BlurFade key={index} delay={0.1 + index * 0.12} duration={0.6} offset={8}>
                        <div className="relative group bg-card rounded-xl p-5 sm:p-6 border border-border hover:border-[hsl(var(--color-secondary)_/_0.3)] transition-all duration-500 overflow-visible">
                            <BorderBeam
                                colorFrom="hsl(24 55% 54%)"
                                colorTo="hsl(180 55% 25%)"
                                size={100}
                                duration={8}
                                delay={index * 0.3}
                                borderWidth={1}
                            />

                            {/* Achievement Badge */}
                            <div className="absolute -top-3 sm:-top-4 right-4 sm:right-6 z-50">
                                <Badge className={`${getAchievementColor(award.achievement)} text-white px-3 sm:px-6 py-1.5 sm:py-2 border-0 shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-300 z-50 text-xs sm:text-sm`}>
                                    <Trophy className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                                    {award.achievement}
                                </Badge>
                            </div>

                            <div className="relative z-10">
                                {/* Header Section */}
                                <div className="flex items-start justify-between mb-4 sm:mb-6">
                                    <div className="flex-1">
                                        <div className="flex items-center space-x-3 sm:space-x-4 mb-3 sm:mb-4">
                                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-muted rounded-2xl flex items-center justify-center text-lg sm:text-2xl border border-border group-hover:border-[hsl(var(--color-accent)_/_0.5)] transition-all duration-300">
                                                {award.icon}
                                            </div>
                                            <div className="min-w-0 flex-1">
                                                <h3 className="text-lg sm:text-xl font-semibold text-foreground transition-colors duration-300">
                                                    {award.title || award.achievement}
                                                </h3>
                                                <Badge className="bg-[hsl(var(--color-secondary)_/_0.08)] text-[hsl(var(--color-secondary))] text-xs mt-1">
                                                    {award.category}
                                                </Badge>
                                            </div>
                                        </div>

                                        <div className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-2 sm:gap-4 text-muted-foreground">
                                            <div className="flex items-center bg-muted px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg">
                                                <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5 sm:mr-2 text-[hsl(var(--color-secondary))]" />
                                                <span className="text-xs sm:text-sm font-medium">{award.period}</span>
                                            </div>
                                            <div className="flex items-center bg-muted px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg">
                                                <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5 sm:mr-2 text-[hsl(var(--color-accent))]" />
                                                <span className="text-xs sm:text-sm font-medium">{award.location}</span>
                                            </div>
                                            <div className="flex items-center bg-muted px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg">
                                                <AwardIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5 sm:mr-2 text-foreground/60" />
                                                <span className="text-xs sm:text-sm font-medium">{award.institution}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Description */}
                                <div className="mb-4 sm:mb-6">
                                    <div className="flex items-start space-x-2 sm:space-x-3">
                                        <div className="flex-shrink-0 mt-1">
                                            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r from-color-secondary to-color-accent rounded-full"></div>
                                        </div>
                                        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                                            {award.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Additional Details */}
                                {award.details && (
                                    <div className="mb-4 sm:mb-6">
                                        <div className="flex items-start space-x-2 sm:space-x-3">
                                            <div className="flex-shrink-0 mt-1">
                                                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r from-color-accent to-color-orange rounded-full"></div>
                                            </div>
                                            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                                                {award.details}
                                            </p>
                                        </div>
                                    </div>
                                )}

                                {/* Achievement Stars */}
                                <div className="flex justify-end">
                                    <div className="flex items-center space-x-1">
                                        <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-yellow-500 fill-current" />
                                        <span className="text-xs sm:text-sm font-medium text-muted-foreground">
                                            {award.achievement === 'Merit Scholarship' ? 'Academic Excellence' :
                                             award.achievement === "Dean's List" ? 'Outstanding Performance' : award.achievement}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </BlurFade>
                ))}
            </div>
        </div>
    )
}
