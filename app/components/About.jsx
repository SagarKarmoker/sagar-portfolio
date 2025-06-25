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
        <div className="py-12 sm:py-16 lg:py-20">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-12 sm:mb-16"
            >
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                    About{' '}
                    <span className="bg-gradient-to-r from-color-secondary to-color-accent bg-clip-text text-transparent">
                        Me
                    </span>
                </h2>
                <div className="w-16 sm:w-20 lg:w-24 h-1 bg-gradient-to-r from-color-secondary to-color-accent mx-auto rounded-full"></div>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-start">
                {/* Left Content */}
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="space-y-4 sm:space-y-6 order-2 lg:order-1"
                >
                    <div className="bg-white dark:bg-color-dark rounded-2xl p-6 sm:p-8 shadow-xl border border-color-primary/20 dark:border-color-secondary/30">
                        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                            Welcome to my portfolio website! I&apos;m{' '}
                            <span className="font-semibold text-slate-800 dark:text-slate-200">Sagar Karmoker</span>, 
                            a passionate Computer Science and Engineering student at{' '}
                            <span className="text-color-secondary dark:text-color-primary font-semibold hover:underline cursor-pointer">
                                East West University
                            </span>{' '}
                            in Bangladesh.
                        </p>
                        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mt-3 sm:mt-4">
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
                    className="space-y-4 sm:space-y-6 order-1 lg:order-2"
                >
                    {expertise.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white dark:bg-color-dark rounded-xl p-4 sm:p-6 shadow-lg border border-color-primary/20 dark:border-color-secondary/30 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                        >
                            <div className="flex items-start space-x-3 sm:space-x-4">
                                <div className="p-2 sm:p-3 bg-gradient-to-r from-color-secondary to-color-accent rounded-lg text-white flex-shrink-0">
                                    <item.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 className="text-lg sm:text-xl font-semibold text-slate-800 dark:text-slate-200 mb-1.5 sm:mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
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