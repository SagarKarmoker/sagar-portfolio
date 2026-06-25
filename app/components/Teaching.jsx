import React from 'react'
import { BlurFade } from '@/components/ui/blur-fade'
import { NumberTicker } from '@/components/ui/number-ticker'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'
import { GraduationCap, BookOpen, Users, Calendar, MapPin } from 'lucide-react'

export default function Teaching() {
    const teachingPositions = [
        {
            image: "/ewu.png",
            institution: "East West University",
            position: "Graduate Teaching Assistant (GTA)",
            period: "February 2025 - December 2025",
            location: "Dhaka, Bangladesh",
            current: false,
            description: "Assisted professors in teaching computer science courses and mentoring students in programming and software development concepts.",
            courses: [
                "CSE412 - Software Engineering",
                "CSE479 - Web Programming",
                "CSE360 - Computer Architecture"
            ],
            responsibilities: [
                "Conducted lab sessions and practical demonstrations",
                "Provided one-on-one tutoring to struggling students",
                "Graded assignments and provided constructive feedback",
                "Assisted in curriculum development and course materials"
            ],
            impact: "Mentored 100+ students across 3 courses"
        },
        {
            image: "/ewu.png",
            institution: "East West University",
            position: "Undergraduate Teaching Assistant (UTA)",
            period: "October 2023 - January 2025",
            location: "Dhaka, Bangladesh",
            current: false,
            description: "Assisted professors in teaching programming and foundational computer science courses.",
            courses: [
                "Programming Fundamentals",
                "Data Structures & Algorithms",
                "Object-Oriented Programming"
            ],
            responsibilities: [
                "Conducted lab sessions for programming courses",
                "Provided tutoring support to undergraduate students",
                "Graded assignments and exams",
                "Developed supplementary learning materials"
            ],
            impact: "Supported 150+ students over 1.5 years"
        }
    ];

    return (
        <div className="py-12 sm:py-16 lg:py-20">
            <BlurFade delay={0.1} duration={0.6} offset={8}>
                <div className="section-academic">
                    <h2>
                        Teaching{' '}
                        <span className="text-[hsl(var(--color-accent))]">Experience</span>
                    </h2>
                    <p className="subtitle">
                        Sharing knowledge and mentoring the next generation of computer scientists
                        through hands-on teaching and academic support.
                    </p>
                </div>
            </BlurFade>

            {/* Teaching Stats */}
            <BlurFade delay={0.2} duration={0.6} offset={8}>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
                    <div className="bg-card rounded-2xl p-6 sm:p-8 shadow-sm border border-border text-center">
                        <Users className="w-8 h-8 sm:w-10 sm:h-10 text-[hsl(var(--color-secondary))] mx-auto mb-3" />
                        <div className="text-3xl sm:text-4xl font-bold text-foreground mb-1">
                            <NumberTicker value={250} />+
                        </div>
                        <div className="text-sm sm:text-base text-muted-foreground">Students Mentored</div>
                    </div>
                    <div className="bg-card rounded-2xl p-6 sm:p-8 shadow-sm border border-border text-center">
                        <BookOpen className="w-8 h-8 sm:w-10 sm:h-10 text-[hsl(var(--color-accent))] mx-auto mb-3" />
                        <div className="text-3xl sm:text-4xl font-bold text-foreground mb-1">
                            <NumberTicker value={6} />
                        </div>
                        <div className="text-sm sm:text-base text-muted-foreground">Courses Supported</div>
                    </div>
                    <div className="bg-card rounded-2xl p-6 sm:p-8 shadow-sm border border-border text-center">
                        <GraduationCap className="w-8 h-8 sm:w-10 sm:h-10 text-[hsl(var(--color-secondary))] mx-auto mb-3" />
                        <div className="text-3xl sm:text-4xl font-bold text-foreground mb-1">
                            <NumberTicker value={2} />+
                        </div>
                        <div className="text-sm sm:text-base text-muted-foreground">Years Teaching</div>
                    </div>
                </div>
            </BlurFade>

            {/* Teaching Positions */}
            <div className="space-y-6 sm:space-y-8">
                {teachingPositions.map((position, index) => (
                    <BlurFade key={index} delay={0.1 + index * 0.1} duration={0.6} offset={8}>
                        <div className="bg-card rounded-xl p-5 sm:p-6 shadow-sm border border-border hover:border-[hsl(var(--color-accent)_/_0.3)] transition-all duration-300">
                                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4 sm:mb-6">
                                    <div className="flex-1">
                                        <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 mb-4">
                                            {position.image && (
                                                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl overflow-hidden bg-white shadow-md flex-shrink-0 self-start sm:self-center">
                                                    <Image
                                                        src={position.image}
                                                        alt={position.institution || 'Institution logo'}
                                                        width={64}
                                                        height={64}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                            )}
                                            <div className="flex-1 min-w-0">
                                                <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-3 space-y-2 sm:space-y-0 mb-2">
                                                    <h3 className="text-xl sm:text-2xl font-semibold text-foreground">
                                                        {position.position}
                                                    </h3>
                                                    <div className="flex flex-wrap gap-2">
                                                        {position.current && (
                                                            <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0 animate-pulse text-xs">
                                                                Current
                                                            </Badge>
                                                        )}
                                                        <Badge className="bg-[hsl(var(--color-accent))] text-white border-0 text-xs">
                                                            {position.institution}
                                                        </Badge>
                                                    </div>
                                                </div>

                                                <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-2 sm:gap-4 text-sm sm:text-base text-muted-foreground">
                                                    <div className="flex items-center space-x-1">
                                                        <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                                                        <span>{position.period}</span>
                                                    </div>
                                                    {position.location && (
                                                        <div className="flex items-center space-x-1">
                                                            <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                                                            <span>{position.location}</span>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4 sm:mb-6">
                                    {position.description}
                                </p>

                                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
                                    {position.courses && position.courses.length > 0 && (
                                        <div>
                                            <h4 className="font-semibold text-foreground mb-2 sm:mb-3 text-sm sm:text-base">
                                                Courses Supported
                                            </h4>
                                            <div className="flex flex-wrap gap-1.5 sm:gap-2">
                                                {position.courses.map((course, courseIndex) => (
                                                    <Badge
                                                        key={courseIndex}
                                                        className="bg-[hsl(var(--color-secondary)_/_0.08)] text-[hsl(var(--color-secondary))] hover:bg-[hsl(var(--color-secondary)_/_0.15)] transition-colors text-xs sm:text-sm"
                                                    >
                                                        {course}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {position.responsibilities && position.responsibilities.length > 0 && (
                                        <div>
                                            <h4 className="font-semibold text-foreground mb-2 sm:mb-3 text-sm sm:text-base">
                                                Key Responsibilities
                                            </h4>
                                            <ul className="space-y-1.5">
                                                {position.responsibilities.map((responsibility, respIndex) => (
                                                    <li key={respIndex} className="flex items-start space-x-2 text-sm sm:text-base text-muted-foreground">
                                                        <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[hsl(var(--color-accent))] rounded-full mt-2 flex-shrink-0"></span>
                                                        <span>{responsibility}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>

                                <div className="flex items-center space-x-2 sm:space-x-3 pt-4 sm:pt-6 border-t border-border">
                                    <div>
                                        <span className="text-sm sm:text-base font-semibold text-foreground">Impact</span>
                                        <p className="text-xs sm:text-sm text-muted-foreground">{position.impact}</p>
                                    </div>
                                </div>
                        </div>
                    </BlurFade>
                ))}
            </div>
        </div>
    )
}
