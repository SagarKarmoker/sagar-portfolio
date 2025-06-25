import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Laptop, MapPin, Calendar, Trophy } from "lucide-react"
import { motion } from 'framer-motion'

export default function Hacks({ events }) {
    return (
        <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
                {events.map((event, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <Card className="relative bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-xl transition-all duration-300">
                            {/* Achievement Badge */}
                            {event.achievement && (
                                <div className="absolute -top-3 right-6">
                                    <Badge className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-1">
                                        <Trophy className="w-4 h-4 mr-1" />
                                        {event.achievement}
                                    </Badge>
                                </div>
                            )}
                            
                            <CardContent className="p-8">
                                <div className="flex items-start space-x-6">
                                    {/* Icon */}
                                    <div className="flex-shrink-0">
                                        <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 rounded-2xl flex items-center justify-center text-2xl border border-purple-200 dark:border-purple-800">
                                            {event.icon}
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-3">
                                            {event.title}
                                        </h3>
                                        
                                        <div className="flex flex-wrap items-center gap-4 mb-4 text-slate-600 dark:text-slate-400">
                                            <div className="flex items-center">
                                                <Calendar className="w-4 h-4 mr-2" />
                                                <span className="text-sm font-medium">{event.date}</span>
                                            </div>
                                            <div className="flex items-center">
                                                <MapPin className="w-4 h-4 mr-2" />
                                                <span className="text-sm font-medium">{event.location}</span>
                                            </div>
                                        </div>
                                        
                                        <div className="flex items-start">
                                            <Laptop className="w-5 h-5 mr-3 mt-1 flex-shrink-0 text-blue-600 dark:text-blue-400" />
                                            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                                                {event.description}
                                            </p>
                                        </div>
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