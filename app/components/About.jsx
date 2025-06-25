import React from 'react'
import { motion } from 'framer-motion'
import { User, Code, Smartphone, Database } from 'lucide-react'
import expertiseData from '@/data/expertise.json'
import { getIcon } from '@/lib/icons'

function About() {
    const expertise = expertiseData.map(item => ({
        ...item,
        icon: getIcon(item.icon)
    }));

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
                    <span className="bg-gradient-to-r from-color-secondary to-color-accent bg-clip-text text-transparent">
                        Me
                    </span>
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-color-secondary to-color-accent mx-auto rounded-full"></div>
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
                    <div className="bg-white dark:bg-color-dark rounded-2xl p-8 shadow-xl border border-color-primary/20 dark:border-color-secondary/30">
                        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                            Welcome to my portfolio website! I&apos;m{' '}
                            <span className="font-semibold text-slate-800 dark:text-slate-200">Sagar Karmoker</span>, 
                            a passionate Computer Science and Engineering student at{' '}
                            <span className="text-color-secondary dark:text-color-primary font-semibold hover:underline cursor-pointer">
                                East West University
                            </span>{' '}
                            in Bangladesh.
                        </p>
                        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mt-4">
                            I enjoy exploring new technologies and solving real-world problems through{' '}
                            <span className="text-color-secondary dark:text-color-primary font-semibold cursor-pointer">software development</span>{' '}
                            and{' '}
                            <span className="text-color-secondary dark:text-color-primary font-semibold cursor-pointer">blockchain</span>{' '}
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
                            className="bg-white dark:bg-color-dark rounded-xl p-6 shadow-lg border border-color-primary/20 dark:border-color-secondary/30 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                        >
                            <div className="flex items-start space-x-4">
                                <div className="p-3 bg-gradient-to-r from-color-secondary to-color-accent rounded-lg text-white">
                                    <item.icon className="w-6 h-6" />
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