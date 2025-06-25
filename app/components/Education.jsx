import React from 'react'
import { motion } from 'framer-motion'
import Work from './Work'
import ewu from '@/public/ewu.png'

export default function Education() {
    const myedu = [
        {
            image: ewu,
            org: "East West University",
            position: "B.Sc in Computer Science and Engineering",
            time: "2020 - 2024",
            description: "Focused on software engineering, algorithms, data structures, and emerging technologies including blockchain and artificial intelligence."
        },
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
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        Education
                    </span>
                </h2>
                <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                    My academic background and educational achievements.
                </p>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mt-6"></div>
            </motion.div>

            <div className="space-y-8">
                {myedu.map((work, index) => (
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