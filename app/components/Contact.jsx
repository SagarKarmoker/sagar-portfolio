import React from 'react'
import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Mail, Linkedin, Twitter, Github, MessageCircle, Send } from 'lucide-react'
import Link from 'next/link'

export default function Contact() {
    const contactMethods = [
        {
            icon: <Linkedin className="w-6 h-6" />,
            title: "LinkedIn",
            description: "Connect with me professionally",
            link: "https://www.linkedin.com/in/sagarkarmoker",
            color: "text-blue-600 dark:text-blue-400",
            bgColor: "bg-blue-100 dark:bg-blue-900/30"
        },
        {
            icon: <Twitter className="w-6 h-6" />,
            title: "Twitter",
            description: "Follow me for updates",
            link: "#",
            color: "text-blue-400 dark:text-blue-300",
            bgColor: "bg-blue-100 dark:bg-blue-900/30"
        },
        {
            icon: <Github className="w-6 h-6" />,
            title: "GitHub",
            description: "Check out my code",
            link: "#",
            color: "text-slate-700 dark:text-slate-300",
            bgColor: "bg-slate-100 dark:bg-slate-700"
        },
        {
            icon: <Mail className="w-6 h-6" />,
            title: "Email",
            description: "Send me a message",
            link: "mailto:sagar@example.com",
            color: "text-red-600 dark:text-red-400",
            bgColor: "bg-red-100 dark:bg-red-900/30"
        }
    ];

    return (
        <div className="py-20">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-6">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    Let's Connect
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                    Get in{' '}
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        Touch
                    </span>
                </h2>
                <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                    I'm always open to discussing new opportunities, interesting projects, 
                    or just having a chat about technology and innovation.
                </p>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mt-6"></div>
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
                                    <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
                                        <div className="flex items-center space-x-4">
                                            <div className={`p-3 rounded-lg ${method.bgColor}`}>
                                                <div className={method.color}>
                                                    {method.icon}
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
                    className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl border border-slate-200 dark:border-slate-700"
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
                                    className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                    placeholder="John"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                    Last Name
                                </label>
                                <input 
                                    type="text" 
                                    className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
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
                                className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                placeholder="john@example.com"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                Message
                            </label>
                            <textarea 
                                rows={4}
                                className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                                placeholder="Tell me about your project or just say hello!"
                            ></textarea>
                        </div>
                        <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:-translate-y-1">
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
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 border border-blue-200 dark:border-blue-800">
                    <p className="text-lg text-slate-700 dark:text-slate-300">
                        <span className="font-semibold text-slate-800 dark:text-slate-200">Quick tip:</span> 
                        For urgent matters or direct questions, feel free to reach out on{' '}
                        <Link 
                            href="https://www.linkedin.com/in/sagarkarmoker" 
                            target="_blank"
                            className="text-blue-600 dark:text-blue-400 font-semibold hover:underline cursor-pointer"
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
