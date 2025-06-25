import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Laptop, MapPin, Calendar, Trophy, ExternalLink, Users, Award } from "lucide-react"
import { motion } from 'framer-motion'
import hackathonsData from '@/data/hackathons.json'

export default function Hacks() {
    const events = hackathonsData;

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
        <div className="max-w-5xl mx-auto">
            <div className="grid gap-8">
                {events.map((event, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30, scale: 0.95 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.7, delay: index * 0.2 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -8, scale: 1.02 }}
                        className="group"
                    >
                        <Card className="relative bg-white dark:bg-color-dark border border-color-primary/20 dark:border-color-secondary/30 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
                            {/* Background Pattern */}
                            <div className="absolute inset-0 bg-gradient-to-br from-color-primary/5 to-color-secondary/5 dark:from-color-primary/10 dark:to-color-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            
                            {/* Achievement Badge */}
                            {event.achievement && (
                                <motion.div 
                                    className="absolute -top-4 right-6 z-10"
                                    initial={{ scale: 0, rotate: -180 }}
                                    whileInView={{ scale: 1, rotate: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                                    viewport={{ once: true }}
                                >
                                    <Badge className={`${getAchievementColor(event.achievement)} text-white px-6 py-2 border-0 shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300`}>
                                        <Trophy className="w-4 h-4 mr-2" />
                                        {event.achievement}
                                    </Badge>
                                </motion.div>
                            )}
                            
                            <CardContent className="p-8 relative z-10">
                                <div className="flex flex-col lg:flex-row items-start space-y-6 lg:space-y-0 lg:space-x-8">
                                    {/* Icon Section */}
                                    <motion.div 
                                        className="flex-shrink-0"
                                        whileHover={{ rotate: 5, scale: 1.1 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="w-20 h-20 bg-gradient-to-br from-color-primary/20 to-color-secondary/20 dark:from-color-primary/10 dark:to-color-secondary/10 rounded-3xl flex items-center justify-center text-3xl border-2 border-color-primary/30 dark:border-color-secondary/30 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:border-color-accent/50">
                                            {event.icon}
                                        </div>
                                    </motion.div>

                                    {/* Content Section */}
                                    <div className="flex-1 space-y-4">
                                        <motion.h3 
                                            className="text-2xl lg:text-3xl font-bold text-slate-800 dark:text-slate-200 group-hover:text-color-secondary dark:group-hover:text-color-primary transition-colors duration-300"
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.6, delay: index * 0.2 + 0.1 }}
                                            viewport={{ once: true }}
                                        >
                                            {event.title}
                                        </motion.h3>
                                        
                                        {/* Event Details */}
                                        <motion.div 
                                            className="flex flex-wrap items-center gap-6 text-slate-600 dark:text-slate-400"
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.6, delay: index * 0.2 + 0.2 }}
                                            viewport={{ once: true }}
                                        >
                                            <div className="flex items-center bg-slate-100 dark:bg-slate-800 px-3 py-2 rounded-lg">
                                                <Calendar className="w-4 h-4 mr-2 text-color-secondary" />
                                                <span className="text-sm font-medium">{event.date}</span>
                                            </div>
                                            <div className="flex items-center bg-slate-100 dark:bg-slate-800 px-3 py-2 rounded-lg">
                                                <MapPin className="w-4 h-4 mr-2 text-color-accent" />
                                                <span className="text-sm font-medium">{event.location}</span>
                                            </div>
                                            <div className="flex items-center bg-slate-100 dark:bg-slate-800 px-3 py-2 rounded-lg">
                                                <Users className="w-4 h-4 mr-2 text-color-primary" />
                                                <span className="text-sm font-medium">Hackathon</span>
                                            </div>
                                        </motion.div>
                                        
                                        {/* Description */}
                                        <motion.div 
                                            className="flex items-start space-x-3"
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                                            viewport={{ once: true }}
                                        >
                                            <div className="flex-shrink-0 mt-1">
                                                <div className="w-2 h-2 bg-gradient-to-r from-color-secondary to-color-accent rounded-full"></div>
                                            </div>
                                            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
                                                {event.description}
                                            </p>
                                        </motion.div>

                                        {/* Action Button */}
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                                            viewport={{ once: true }}
                                        >
                                            <div className="inline-flex items-center space-x-2 text-color-secondary dark:text-color-primary hover:text-color-accent transition-colors duration-300 cursor-pointer group/btn">
                                                <span className="font-medium">View Details</span>
                                                <ExternalLink className="w-4 h-4 transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
                                            </div>
                                        </motion.div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}