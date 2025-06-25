import React from 'react'
import { motion } from 'framer-motion'
import Work from './Work'
import ewu from '@/public/ewu.png'
import ewucsc from '@/public/ewucsc.jpg'

export default function WorkEx() {
    const workex = [
        {
            image: ewu,
            org: "East West University",
            position: "Undergraduate Teaching Assistant (UTA)",
            time: "October 2023 - Present",
            description: "Assisting professors in teaching computer science courses and mentoring students in programming and software development concepts."
        },
        {
            image: ewucsc,
            org: "EWU Cyber Security Club",
            position: "Web Development Lead",
            time: "October 2024 - Present",
            description: "Leading web development initiatives and managing the club's online presence while mentoring junior developers."
        }
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
                <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                    Work{' '}
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        Experience
                    </span>
                </h2>
                <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                    My professional journey in academia and technology leadership.
                </p>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mt-6"></div>
            </motion.div>

            <div className="space-y-8">
                {workex.map((work, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <Work details={work} />
                    </motion.div>
                ))}
            </div>
        </div>
    )
}