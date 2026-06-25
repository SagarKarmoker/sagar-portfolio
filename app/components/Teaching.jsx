import React from 'react'
import { BlurFade } from '@/components/ui/blur-fade'
import { NumberTicker } from '@/components/ui/number-ticker'
import { Badge } from '@/components/ui/badge'
import { GraduationCap, BookOpen, Users, Calendar, MapPin } from 'lucide-react'

export default function Teaching() {
    const teachingPositions = [
        {
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
                        <div className="bg-card rounded-xl p-5 sm:p-6 shadow-sm border border-border">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 sm:mb-6">
                                <div className="flex-1">
                                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-2">
                                        <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                                            {position.position}
                                        </h3>
                                        {position.current && (
                                            <Badge className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 w-fit">
                                                Current
                                            </Badge>
                                        )}
                                    </div>
                                    <div className="text-lg sm:text-xl font-semibold text-[hsl(var(--color-secondary))] mb-3">
                                        {position.institution}
                                    </div>
                                    <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-sm sm:text-base text-muted-foreground">
                                        <div className="flex items-center space-x-1">
                                            <Calendar className="w-4 h-4" />
                                            <span>{position.period}</span>
                                        </div>
                                        <div className="flex items-center space-x-1">
                                            <MapPin className="w-4 h-4" />
                                            <span>{position.location}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-4 sm:mb-6">
                                {position.description}
                            </p>

                            <div className="mb-4 sm:mb-6">
                                <h4 className="text-sm sm:text-base font-semibold text-foreground mb-3">
                                    Courses Supported
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {position.courses.map((course, courseIndex) => (
                                        <Badge
                                            key={courseIndex}
                                            className="bg-[hsl(var(--color-secondary)_/_0.08)] text-[hsl(var(--color-secondary))] hover:bg-[hsl(var(--color-secondary)_/_0.15)] transition-colors px-3 py-1.5 text-xs sm:text-sm"
                                        >
                                            {course}
                                        </Badge>
                                    ))}
                                </div>
                            </div>

                            <div className="mb-4 sm:mb-6">
                                <h4 className="text-sm sm:text-base font-semibold text-foreground mb-3">
                                    Key Responsibilities
                                </h4>
                                <ul className="space-y-2">
                                    {position.responsibilities.map((responsibility, respIndex) => (
                                        <li
                                            key={respIndex}
                                            className="flex items-start space-x-2 text-sm sm:text-base text-muted-foreground"
                                        >
                                            <span className="text-[hsl(var(--color-secondary))] mt-1.5">•</span>
                                            <span>{responsibility}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="bg-[hsl(var(--color-accent)_/_0.05)] border border-[hsl(var(--color-accent)_/_0.15)] rounded-xl p-4">
                                <div className="flex items-center space-x-2">
                                    <Users className="w-5 h-5 text-[hsl(var(--color-secondary))]" />
                                    <span className="text-sm sm:text-base font-semibold text-foreground">
                                        Impact: {position.impact}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </BlurFade>
                ))}
            </div>
        </div>
    )
}
