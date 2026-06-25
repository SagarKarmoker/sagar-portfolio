import React from 'react'
import { BlurFade } from '@/components/ui/blur-fade'
import { BorderBeam } from '@/components/ui/border-beam'
import { Badge } from '@/components/ui/badge'
import { Calendar, MapPin, Trophy, ExternalLink, Users, Star } from 'lucide-react'
import hackathonsData from '@/data/hackathons.json'

export default function Hackathon() {
    const hackathons = hackathonsData;

    const getAchievementColor = (achievement) => {
        switch (achievement) {
            case 'Finalist':
                return 'bg-gradient-to-r from-yellow-500 to-orange-500';
            case 'Winner':
                return 'bg-gradient-to-r from-yellow-400 to-yellow-600';
            case 'Participant':
                return 'bg-gradient-to-r from-color-secondary to-color-accent';
            case 'Runner-up':
                return 'bg-gradient-to-r from-gray-400 to-gray-600';
            default:
                return 'bg-gradient-to-r from-color-secondary to-color-accent';
        }
    };

    return (
        <div className="py-12 sm:py-16 lg:py-20">
            <BlurFade delay={0.1} duration={0.6} offset={8}>
                <div className="section-compact mb-12">
                    <h2>
                        Hackathon{' '}
                        <span className="text-[hsl(var(--color-secondary))]">Experience</span>
                    </h2>
                    <p className="subtitle">
                        Participation in hackathons and coding competitions.
                    </p>
                </div>
            </BlurFade>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                {hackathons.map((hackathon, index) => (
                    <BlurFade key={index} delay={0.1 + index * 0.12} duration={0.6} offset={8} className="h-full">
                        <div className="relative group bg-card rounded-xl p-5 sm:p-6 border border-border hover:border-[hsl(var(--color-secondary)_/_0.3)] transition-all duration-500 overflow-visible h-full">
                            <BorderBeam
                                colorFrom="hsl(180 55% 25%)"
                                colorTo="hsl(24 55% 54%)"
                                size={100}
                                duration={8}
                                delay={index * 0.3}
                                borderWidth={1}
                            />

                            {/* Achievement Badge */}
                            {hackathon.achievement && (
                                <div className="absolute -top-3 sm:-top-4 right-4 sm:right-6 z-50">
                                    <Badge className={`${getAchievementColor(hackathon.achievement)} text-white px-3 sm:px-6 py-1.5 sm:py-2 border-0 shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-300 z-50 text-xs sm:text-sm`}>
                                        <Trophy className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                                        {hackathon.achievement}
                                    </Badge>
                                </div>
                            )}

                            <div className="relative z-10 flex flex-col h-full">
                                <div className="flex-1">
                                    <div className="flex items-center space-x-3 sm:space-x-4 mb-3 sm:mb-4">
                                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-color-primary/20 to-color-secondary/20 dark:from-color-primary/10 dark:to-color-secondary/10 rounded-2xl flex items-center justify-center text-lg sm:text-2xl border border-color-primary/30 dark:border-color-secondary/30 group-hover:border-color-accent/50 transition-all duration-300">
                                            {hackathon.icon}
                                        </div>
                                        <div className="min-w-0 flex-1">
                                            <h3 className="text-lg sm:text-xl font-semibold text-foreground group-hover:text-color-secondary dark:group-hover:text-color-primary transition-colors duration-300">
                                                {hackathon.title}
                                            </h3>
                                        </div>
                                    </div>

                                    <div className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-2 sm:gap-4 text-muted-foreground">
                                        <div className="flex items-center bg-muted px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg">
                                            <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5 sm:mr-2 text-color-secondary" />
                                            <span className="text-xs sm:text-sm font-medium">{hackathon.date}</span>
                                        </div>
                                        <div className="flex items-center bg-muted px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg">
                                            <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5 sm:mr-2 text-color-accent" />
                                            <span className="text-xs sm:text-sm font-medium">{hackathon.location}</span>
                                        </div>
                                        <div className="flex items-center bg-muted px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg">
                                            <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                                            <span className="text-xs sm:text-sm font-medium">Hackathon</span>
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <div className="mb-4 sm:mb-6 mt-6">
                                        <div className="flex items-start space-x-2 sm:space-x-3">
                                            <div className="flex-shrink-0 mt-1">
                                                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r from-color-secondary to-color-accent rounded-full"></div>
                                            </div>
                                            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                                                {hackathon.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Action + Stars */}
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 sm:gap-0 mt-auto pt-2">
                                    <div className="inline-flex items-center space-x-2 text-color-secondary dark:text-color-primary hover:text-color-accent transition-colors duration-300 cursor-pointer group/btn">
                                        <span className="font-medium text-sm sm:text-base">View Details</span>
                                        <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4 transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
                                    </div>

                                    {hackathon.achievement && (
                                        <div className="flex items-center space-x-1">
                                            <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-yellow-500 fill-current" />
                                            <span className="text-xs sm:text-sm font-medium text-muted-foreground">
                                                {hackathon.achievement === 'Finalist' ? 'Top Finalist' :
                                                 hackathon.achievement === 'Winner' ? 'Champion' :
                                                 hackathon.achievement === 'Participant' ? 'Active Participant' : hackathon.achievement}
                                            </span>
                                        </div>
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
