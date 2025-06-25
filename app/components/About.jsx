import React from 'react'
import { motion } from 'framer-motion'
import { User, Code, Smartphone, Database } from 'lucide-react'

function About() {
    const expertise = [
        {
            icon: <Database className="w-6 h-6" />,
            title: "Blockchain Development",
            description: "Specialized in developing decentralized applications (dApps) using Solidity, Ethers.js, and smart contracts. Building secure and efficient blockchain solutions."
        },
        {
            icon: <Code className="w-6 h-6" />,
            title: "Web & Mobile Development",
            description: "Proficient in React, Vite, Tailwind CSS for front-end, and Node.js for back-end. Skilled in mobile development with Kotlin and Jetpack Compose."
        },
        {
            icon: <Smartphone className="w-6 h-6" />,
            title: "Programming Languages",
            description: "Experienced in C, C++, Java, Python, and more, with a solid foundation in data structures, algorithms, and software engineering concepts."
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
                    About{' '}
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        Me
                    </span>
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                >
                    <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl border border-slate-200 dark:border-slate-700">
                        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                            Welcome to my portfolio website! I'm{' '}
                            <span className="font-semibold text-slate-800 dark:text-slate-200">Sagar Karmoker</span>, 
                            a passionate Computer Science and Engineering student at{' '}
                            <span className="text-blue-600 dark:text-blue-400 font-semibold hover:underline cursor-pointer">
                                East West University
                            </span>{' '}
                            in Bangladesh.
                        </p>
                        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mt-4">
                            I enjoy exploring new technologies and solving real-world problems through{' '}
                            <span className="text-blue-600 dark:text-blue-400 font-semibold cursor-pointer">software development</span>{' '}
                            and{' '}
                            <span className="text-blue-600 dark:text-blue-400 font-semibold cursor-pointer">blockchain</span>{' '}
                            innovation.
                        </p>
                    </div>
                </motion.div>

                {/* Right Content - Expertise Cards */}
                <motion.div 
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                >
                    {expertise.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                        >
                            <div className="flex items-start space-x-4">
                                <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white">
                                    {item.icon}
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    )
}

export default About