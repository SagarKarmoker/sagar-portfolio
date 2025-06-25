import React from 'react'
import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Calendar, MapPin, Trophy, ExternalLink, Users, Award, Star } from 'lucide-react'
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
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-12 sm:mb-16"
            >
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                    Hackathon{' '}
                    <span className="bg-gradient-to-r from-color-secondary to-color-accent bg-clip-text text-transparent">
                        Experience
                    </span>
                </h2>
                <p className="text-base sm:text-lg lg:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto px-4">
                    My participation in various hackathons and coding competitions, showcasing innovation and problem-solving skills.
                </p>
                <div className="w-16 sm:w-20 lg:w-24 h-1 bg-gradient-to-r from-color-secondary to-color-accent mx-auto rounded-full mt-4 sm:mt-6"></div>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                {hackathons.map((hackathon, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30, scale: 0.95 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.7, delay: index * 0.2 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -8, scale: 1.02 }}
                        className="group bg-white dark:bg-color-dark rounded-2xl p-6 sm:p-8 shadow-xl border border-color-primary/20 dark:border-color-secondary/30 hover:shadow-2xl transition-all duration-500 overflow-visible relative"
                    >
                        {/* Background Pattern */}
                        <div className="absolute inset-0 bg-gradient-to-br from-color-primary/5 to-color-secondary/5 dark:from-color-primary/10 dark:to-color-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                        
                        {/* Achievement Badge */}
                        {hackathon.achievement && (
                            <motion.div 
                                className="absolute -top-3 sm:-top-4 right-4 sm:right-6 z-50"
                                initial={{ scale: 0, rotate: -180 }}
                                whileInView={{ scale: 1, rotate: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                                viewport={{ once: true }}
                            >
                                <Badge className={`${getAchievementColor(hackathon.achievement)} text-white px-3 sm:px-6 py-1.5 sm:py-2 border-0 shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-300 z-50 text-xs sm:text-sm`}>
                                    <Trophy className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                                    {hackathon.achievement}
                                </Badge>
                            </motion.div>
                        )}

                        <div className="relative z-10">
                            {/* Header Section */}
                            <div className="flex items-start justify-between mb-4 sm:mb-6">
                                <div className="flex-1">
                                    <motion.div 
                                        className="flex items-center space-x-3 sm:space-x-4 mb-3 sm:mb-4"
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.6, delay: index * 0.2 + 0.1 }}
                                        viewport={{ once: true }}
                                    >
                                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-color-primary/20 to-color-secondary/20 dark:from-color-primary/10 dark:to-color-secondary/10 rounded-2xl flex items-center justify-center text-lg sm:text-2xl border border-color-primary/30 dark:border-color-secondary/30 group-hover:border-color-accent/50 transition-all duration-300">
                                            {hackathon.icon}
                                        </div>
                                        <div className="min-w-0 flex-1">
                                            <h3 className="text-lg sm:text-xl font-semibold text-slate-800 dark:text-slate-200 group-hover:text-color-secondary dark:group-hover:text-color-primary transition-colors duration-300">
                                                {hackathon.title}
                                            </h3>
                                        </div>
                                    </motion.div>
                                    
                                    <motion.div 
                                        className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-2 sm:gap-4 text-slate-600 dark:text-slate-400"
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: index * 0.2 + 0.2 }}
                                        viewport={{ once: true }}
                                    >
                                        <div className="flex items-center bg-slate-100 dark:bg-slate-800 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg">
                                            <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5 sm:mr-2 text-color-secondary" />
                                            <span className="text-xs sm:text-sm font-medium">{hackathon.date}</span>
                                        </div>
                                        <div className="flex items-center bg-slate-100 dark:bg-slate-800 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg">
                                            <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5 sm:mr-2 text-color-accent" />
                                            <span className="text-xs sm:text-sm font-medium">{hackathon.location}</span>
                                        </div>
                                        <div className="flex items-center bg-slate-100 dark:bg-slate-800 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg">
                                            <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5 sm:mr-2 text-color-primary" />
                                            <span className="text-xs sm:text-sm font-medium">Hackathon</span>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>

                            {/* Description */}
                            <motion.div 
                                className="mb-4 sm:mb-6"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                                viewport={{ once: true }}
                            >
                                <div className="flex items-start space-x-2 sm:space-x-3">
                                    <div className="flex-shrink-0 mt-1">
                                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r from-color-secondary to-color-accent rounded-full"></div>
                                    </div>
                                    <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                                        {hackathon.description}
                                    </p>
                                </div>
                            </motion.div>

                            {/* Action Button */}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                                viewport={{ once: true }}
                                className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 sm:gap-0"
                            >
                                <div className="inline-flex items-center space-x-2 text-color-secondary dark:text-color-primary hover:text-color-accent transition-colors duration-300 cursor-pointer group/btn">
                                    <span className="font-medium text-sm sm:text-base">View Details</span>
                                    <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4 transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
                                </div>
                                
                                {/* Achievement Stars */}
                                {hackathon.achievement && (
                                    <div className="flex items-center space-x-1">
                                        <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-yellow-500 fill-current" />
                                        <span className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400">
                                            {hackathon.achievement === 'Finalist' ? 'Top Finalist' : 
                                             hackathon.achievement === 'Winner' ? 'Champion' : 
                                             hackathon.achievement === 'Participant' ? 'Active Participant' : hackathon.achievement}
                                        </span>
                                    </div>
                                )}
                            </motion.div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}
