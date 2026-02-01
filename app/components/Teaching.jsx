import React from 'react'
import { motion } from 'framer-motion'
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
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-12 sm:mb-16"
            >
                <div className="inline-flex items-center px-3 sm:px-4 py-2 rounded-full bg-color-primary/20 dark:bg-color-primary/30 text-color-secondary dark:text-color-primary text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                    <GraduationCap className="w-4 h-4 mr-2" />
                    Academic Experience
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                    Teaching{' '}
                    <span className="bg-gradient-to-r from-color-secondary to-color-accent bg-clip-text text-transparent">
                        Experience
                    </span>
                </h2>
                <p className="text-base sm:text-lg lg:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto px-4">
                    Sharing knowledge and mentoring the next generation of computer scientists 
                    through hands-on teaching and academic support.
                </p>
                <div className="w-16 sm:w-20 lg:w-24 h-1 bg-gradient-to-r from-color-secondary to-color-accent mx-auto rounded-full mt-4 sm:mt-6"></div>
            </motion.div>

            {/* Teaching Stats */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16"
            >
                <div className="bg-white dark:bg-color-dark rounded-2xl p-6 sm:p-8 shadow-xl border border-color-primary/20 dark:border-color-secondary/30 text-center">
                    <Users className="w-8 h-8 sm:w-10 sm:h-10 text-color-secondary mx-auto mb-3" />
                    <div className="text-3xl sm:text-4xl font-bold text-slate-800 dark:text-slate-200 mb-1">250+</div>
                    <div className="text-sm sm:text-base text-slate-600 dark:text-slate-300">Students Mentored</div>
                </div>
                <div className="bg-white dark:bg-color-dark rounded-2xl p-6 sm:p-8 shadow-xl border border-color-primary/20 dark:border-color-secondary/30 text-center">
                    <BookOpen className="w-8 h-8 sm:w-10 sm:h-10 text-color-accent mx-auto mb-3" />
                    <div className="text-3xl sm:text-4xl font-bold text-slate-800 dark:text-slate-200 mb-1">6</div>
                    <div className="text-sm sm:text-base text-slate-600 dark:text-slate-300">Courses Supported</div>
                </div>
                <div className="bg-white dark:bg-color-dark rounded-2xl p-6 sm:p-8 shadow-xl border border-color-primary/20 dark:border-color-secondary/30 text-center">
                    <GraduationCap className="w-8 h-8 sm:w-10 sm:h-10 text-color-secondary mx-auto mb-3" />
                    <div className="text-3xl sm:text-4xl font-bold text-slate-800 dark:text-slate-200 mb-1">2+</div>
                    <div className="text-sm sm:text-base text-slate-600 dark:text-slate-300">Years Teaching</div>
                </div>
            </motion.div>

            {/* Teaching Positions */}
            <div className="space-y-6 sm:space-y-8">
                {teachingPositions.map((position, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-white dark:bg-color-dark rounded-2xl p-6 sm:p-8 shadow-xl border border-color-primary/20 dark:border-color-secondary/30"
                    >
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 sm:mb-6">
                            <div className="flex-1">
                                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-2">
                                    <h3 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-slate-200">
                                        {position.position}
                                    </h3>
                                    {position.current && (
                                        <Badge className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 w-fit">
                                            Current
                                        </Badge>
                                    )}
                                </div>
                                <div className="text-lg sm:text-xl font-semibold text-color-secondary dark:text-color-primary mb-3">
                                    {position.institution}
                                </div>
                                <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-sm sm:text-base text-slate-600 dark:text-slate-400">
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

                        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-4 sm:mb-6">
                            {position.description}
                        </p>

                        {/* Courses Taught */}
                        <div className="mb-4 sm:mb-6">
                            <h4 className="text-sm sm:text-base font-semibold text-slate-800 dark:text-slate-200 mb-3">
                                Courses Supported
                            </h4>
                            <div className="flex flex-wrap gap-2">
                                {position.courses.map((course, courseIndex) => (
                                    <Badge 
                                        key={courseIndex}
                                        className="bg-color-primary/10 dark:bg-color-primary/20 text-color-secondary dark:text-color-primary px-3 py-1.5 text-xs sm:text-sm"
                                    >
                                        {course}
                                    </Badge>
                                ))}
                            </div>
                        </div>

                        {/* Responsibilities */}
                        <div className="mb-4 sm:mb-6">
                            <h4 className="text-sm sm:text-base font-semibold text-slate-800 dark:text-slate-200 mb-3">
                                Key Responsibilities
                            </h4>
                            <ul className="space-y-2">
                                {position.responsibilities.map((responsibility, respIndex) => (
                                    <li 
                                        key={respIndex}
                                        className="flex items-start space-x-2 text-sm sm:text-base text-slate-600 dark:text-slate-300"
                                    >
                                        <span className="text-color-secondary dark:text-color-primary mt-1.5">•</span>
                                        <span>{responsibility}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Impact */}
                        <div className="bg-gradient-to-r from-color-primary/10 to-color-secondary/10 dark:from-color-primary/20 dark:to-color-secondary/20 rounded-xl p-4">
                            <div className="flex items-center space-x-2">
                                <Users className="w-5 h-5 text-color-secondary dark:text-color-primary" />
                                <span className="text-sm sm:text-base font-semibold text-slate-800 dark:text-slate-200">
                                    Impact: {position.impact}
                                </span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}
