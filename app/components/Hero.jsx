import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Twitter } from 'lucide-react'
import ProfilePic from '@/public/profile.jpg'

function Hero() {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                {/* Left Content */}
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-8"
                >
                    <div className="space-y-4">
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="inline-flex items-center px-4 py-2 rounded-full bg-color-primary/20 dark:bg-color-primary/30 text-color-secondary dark:text-color-primary text-sm font-medium"
                        >
                            <span className="w-2 h-2 bg-color-secondary rounded-full mr-2 animate-pulse"></span>
                            Available for opportunities
                        </motion.div>
                        
                        <motion.h1 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className="text-5xl lg:text-7xl font-bold leading-tight"
                        >
                            Hi, I'm{' '}
                            <span className="bg-gradient-to-r from-color-secondary via-color-accent to-color-orange bg-clip-text text-transparent">
                                Sagar
                            </span>
                            <br />
                            <span className="text-slate-600 dark:text-slate-300 animate-pulse">
                                👋
                            </span>
                        </motion.h1>
                        
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.6 }}
                            className="text-xl lg:text-2xl text-slate-600 dark:text-slate-300 leading-relaxed"
                        >
                            Full Stack Developer passionate about{' '}
                            <span className="font-semibold text-slate-800 dark:text-slate-200">
                                creating innovative solutions
                            </span>
                            . I specialize in building scalable web applications and turning ideas into reality. Always eager to{' '}
                            <span className="text-color-secondary dark:text-color-primary font-semibold">
                                learn and grow
                            </span>
                            .
                        </motion.p>
                    </div>

                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.6 }}
                        className="flex flex-wrap gap-4"
                    >
                        <button className="px-8 py-4 bg-gradient-to-r from-color-secondary to-color-accent text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-color-accent/25 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
                            View My Work
                        </button>
                        <button className="px-8 py-4 border-2 border-color-primary/30 dark:border-color-secondary/30 text-slate-700 dark:text-slate-300 rounded-xl font-semibold hover:border-color-secondary dark:hover:border-color-primary hover:text-color-secondary dark:hover:text-color-primary transition-all duration-300 cursor-pointer">
                            Download CV
                        </button>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 0.6 }}
                        className="flex space-x-6"
                    >
                        <a href="#" className="p-3 bg-white dark:bg-color-dark rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
                            <Github className="w-6 h-6 text-slate-700 dark:text-slate-300" />
                        </a>
                        <a href="#" className="p-3 bg-white dark:bg-color-dark rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
                            <Linkedin className="w-6 h-6 text-color-secondary" />
                        </a>
                        <a href="#" className="p-3 bg-white dark:bg-color-dark rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
                            <Twitter className="w-6 h-6 text-color-accent" />
                        </a>
                    </motion.div>
                </motion.div>

                {/* Right Content - Profile Image */}
                <motion.div 
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex justify-center lg:justify-end"
                >
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-color-secondary to-color-accent rounded-full blur-3xl opacity-20 animate-pulse"></div>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                            className="relative"
                        >
                            <Image
                                src={ProfilePic}
                                width={500}
                                height={500}
                                alt="Sagar Karmoker"
                                className="rounded-full shadow-2xl"
                                priority
                            />
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.6 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="flex flex-col items-center space-y-2 text-slate-600 dark:text-slate-400"
                >
                    <span className="text-sm font-medium">Scroll down</span>
                    <ArrowDown className="w-5 h-5" />
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Hero