import React from 'react'
import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Mail, Linkedin, Twitter, Github, MessageCircle, Send } from 'lucide-react'
import Link from 'next/link'
import contactData from '@/data/contact.json'
import { getIcon } from '@/lib/icons'

export default function Contact() {
    const contactMethods = contactData.map(method => ({
        ...method,
        icon: getIcon(method.icon)
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
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-color-secondary text-color-accent text-sm font-medium mb-6">
                    <span className="w-2 h-2 bg-color-accent rounded-full mr-2"></span>
                    Let's Connect
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                    Get in{' '}
                    <span className="bg-gradient-to-r from-color-accent to-color-secondary bg-clip-text text-transparent">
                        Touch
                    </span>
                </h2>
                <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                    I'm always open to discussing new opportunities, interesting projects, 
                    or just having a chat about technology and innovation.
                </p>
                <div className="w-24 h-1 bg-gradient-to-r from-color-accent to-color-secondary mx-auto rounded-full mt-6"></div>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
                {/* Contact Methods */}
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                >
                    <h3 className="text-2xl font-semibold text-slate-800 dark:text-slate-200 mb-8">
                        Connect with me
                    </h3>
                    <div className="grid gap-4">
                        {contactMethods.map((method, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <Link href={method.link} target="_blank" rel="noopener noreferrer">
                                    <div className="bg-white dark:bg-color-dark rounded-xl p-6 shadow-lg border border-color-primary/20 dark:border-color-secondary/30 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
                                        <div className="flex items-center space-x-4">
                                            <div className={`p-3 rounded-lg ${method.bgColor}`}>
                                                <div className={method.color}>
                                                    <method.icon className="w-6 h-6" />
                                                </div>
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-200">
                                                    {method.title}
                                                </h4>
                                                <p className="text-slate-600 dark:text-slate-300">
                                                    {method.description}
                                                </p>
                                            </div>
                                            <Send className="w-5 h-5 text-slate-400" />
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Contact Form */}
                <motion.div 
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="bg-white dark:bg-color-dark rounded-2xl p-8 shadow-xl border border-color-primary/20 dark:border-color-secondary/30"
                >
                    <h3 className="text-2xl font-semibold text-slate-800 dark:text-slate-200 mb-6">
                        Send me a message
                    </h3>
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                    First Name
                                </label>
                                <input 
                                    type="text" 
                                    className="w-full px-4 py-3 border border-color-primary/30 dark:border-color-secondary/30 rounded-lg bg-white dark:bg-color-dark text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-color-secondary focus:border-transparent transition-all duration-300"
                                    placeholder="John"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                    Last Name
                                </label>
                                <input 
                                    type="text" 
                                    className="w-full px-4 py-3 border border-color-primary/30 dark:border-color-secondary/30 rounded-lg bg-white dark:bg-color-dark text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-color-secondary focus:border-transparent transition-all duration-300"
                                    placeholder="Doe"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                Email
                            </label>
                            <input 
                                type="email" 
                                className="w-full px-4 py-3 border border-color-primary/30 dark:border-color-secondary/30 rounded-lg bg-white dark:bg-color-dark text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-color-secondary focus:border-transparent transition-all duration-300"
                                placeholder="john@example.com"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                Message
                            </label>
                            <textarea 
                                rows={4}
                                className="w-full px-4 py-3 border border-color-primary/30 dark:border-color-secondary/30 rounded-lg bg-white dark:bg-color-dark text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-color-secondary focus:border-transparent transition-all duration-300 resize-none"
                                placeholder="Tell me about your project or just say hello!"
                            ></textarea>
                        </div>
                        <Button className="w-full bg-gradient-to-r from-color-secondary to-color-accent hover:from-color-accent hover:to-color-secondary text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:-translate-y-1">
                            <MessageCircle className="w-5 h-5 mr-2" />
                            Send Message
                        </Button>
                    </form>
                </motion.div>
            </div>

            {/* Quick Contact Note */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center mt-16"
            >
                <div className="bg-gradient-to-r from-color-accent to-color-secondary rounded-2xl p-8 border border-color-primary/20 dark:border-color-secondary/30">
                    <p className="text-lg text-slate-700 dark:text-slate-300">
                        <span className="font-semibold text-slate-800 dark:text-slate-200">Quick tip:</span> 
                        For urgent matters or direct questions, feel free to reach out on{' '}
                        <Link 
                            href="https://www.linkedin.com/in/sagarkarmoker" 
                            target="_blank"
                            className="text-color-accent font-semibold hover:underline cursor-pointer"
                        >
                            LinkedIn
                        </Link>
                        . I'll respond as soon as possible!
                    </p>
                </div>
            </motion.div>
        </div>
    )
}
