import { Badge } from '@/components/ui/badge'
import React from 'react'
import { motion } from 'framer-motion'
import { Trophy, Calendar, MapPin } from 'lucide-react'
import Hacks from './Hacks'

export default function Hackathon() {
    const events = [
        {
            icon: "🟣",
            date: "September, 2024",
            title: "The 5th Bangladesh Blockchain Olympiad",
            location: "Dhaka, Bangladesh",
            description: "Developed a blockchain-based supply chain management system that enhances transparency and traceability in logistics.",
            achievement: "Finalist"
        },
        {
            icon: "🔵",
            date: "October, 2024",
            title: "NASA Space Apps Challenge 2024 (Grant Event)",
            location: "AIUB Dhaka, Bangladesh",
            description: "Developed a SDG Classroom is an educational platform designed to revolutionize high school science education by integrating Sustainable Development Goals (SDGs) directly into the curriculum using augmented reality (AR) technology, NASAs API, and many interactive games and videos.",
            achievement: "Participant"
        },
        // {
        //     icon: "⚪",
        //     date: "March 23rd - 24th, 2018",
        //     title: "FirstNet Public Safety Hackathon",
        //     location: "San Francisco, California",
        //     description: "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital."
        // }
    ]

    return (
        <div className="py-20">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm font-medium mb-6">
                    <Trophy className="w-4 h-4 mr-2" />
                    Hackathons & Contests
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                    Building{' '}
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        Innovation
                    </span>
                </h2>
                <p className="text-xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto mb-6">
                    I love building products and exploring new technologies. During my university years, 
                    I participated in hackathons where people from across the nation gathered to rapidly 
                    develop innovative solutions over 2-3 days.
                </p>
                <p className="text-lg text-slate-500 dark:text-slate-400 max-w-3xl mx-auto">
                    It was truly inspiring to witness how a group of driven and enthusiastic individuals 
                    could bring a myriad of possibilities to life in such a short time.
                </p>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mt-6"></div>
            </motion.div>

            <div>
                <Hacks events={events} />
            </div>
        </div>
    )
}
