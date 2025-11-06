import React, { useState } from 'react'
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

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const { firstName, lastName, email, message } = formData;
        
        // Create mailto link with form data
        const subject = `Portfolio Contact from ${firstName} ${lastName}`;
        const body = `Name: ${firstName} ${lastName}\nEmail: ${email}\n\nMessage:\n${message}`;
        
        const mailtoLink = `mailto:sagarkarmoker.official@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        
        // Open default email client
        window.open(mailtoLink);
        
        // Reset form
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            message: ''
        });
    };

    return (
        <div className="py-12 sm:py-16 lg:py-20">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-12 sm:mb-16"
            >
                <div className="inline-flex items-center px-3 sm:px-4 py-2 rounded-full bg-color-secondary text-color-accent text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                    <span className="w-2 h-2 bg-color-accent rounded-full mr-2"></span>
                    Let&apos;s Connect
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                    Get in{' '}
                    <span className="bg-gradient-to-r from-color-accent to-color-secondary bg-clip-text text-transparent">
                        Touch
                    </span>
                </h2>
                <p className="text-base sm:text-lg lg:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto px-4">
                    I&apos;m always open to discussing new opportunities, interesting projects, 
                    or just having a chat about technology and innovation.
                </p>
                <div className="w-16 sm:w-20 lg:w-24 h-1 bg-gradient-to-r from-color-accent to-color-secondary mx-auto rounded-full mt-4 sm:mt-6"></div>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-start">
                {/* Contact Methods */}
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="space-y-4 sm:space-y-6 order-2 lg:order-1"
                >
                    <h3 className="text-xl sm:text-2xl font-semibold text-slate-800 dark:text-slate-200 mb-6 sm:mb-8">
                        Connect with me
                    </h3>
                    <div className="grid gap-3 sm:gap-4">
                        {contactMethods.map((method, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <Link href={method.link} target="_blank" rel="noopener noreferrer">
                                    <div className="bg-white dark:bg-color-dark rounded-xl p-4 sm:p-6 shadow-lg border border-color-primary/20 dark:border-color-secondary/30 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
                                        <div className="flex items-center space-x-3 sm:space-x-4">
                                            <div className={`p-2 sm:p-3 rounded-lg ${method.bgColor}`}>
                                                <div className={method.color}>
                                                    <method.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                                                </div>
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <h4 className="text-base sm:text-lg font-semibold text-slate-800 dark:text-slate-200 truncate">
                                                    {method.title}
                                                </h4>
                                                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 truncate">
                                                    {method.description}
                                                </p>
                                            </div>
                                            <Send className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400 flex-shrink-0" />
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
                    className="bg-white dark:bg-color-dark rounded-2xl p-6 sm:p-8 shadow-xl border border-color-primary/20 dark:border-color-secondary/30 order-1 lg:order-2"
                >
                    <h3 className="text-xl sm:text-2xl font-semibold text-slate-800 dark:text-slate-200 mb-4 sm:mb-6">
                        Send me a message
                    </h3>
                    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5 sm:mb-2">
                                    First Name
                                </label>
                                <input 
                                    type="text" 
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-color-primary/30 dark:border-color-secondary/30 rounded-lg bg-white dark:bg-color-dark text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-color-secondary focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                                    placeholder="John"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5 sm:mb-2">
                                    Last Name
                                </label>
                                <input 
                                    type="text" 
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-color-primary/30 dark:border-color-secondary/30 rounded-lg bg-white dark:bg-color-dark text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-color-secondary focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                                    placeholder="Doe"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5 sm:mb-2">
                                Email
                            </label>
                            <input 
                                type="email" 
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-color-primary/30 dark:border-color-secondary/30 rounded-lg bg-white dark:bg-color-dark text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-color-secondary focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                                placeholder="john@example.com"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5 sm:mb-2">
                                Message
                            </label>
                            <textarea 
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                required
                                rows={4}
                                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-color-primary/30 dark:border-color-secondary/30 rounded-lg bg-white dark:bg-color-dark text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-color-secondary focus:border-transparent transition-all duration-300 resize-none text-sm sm:text-base"
                                placeholder="Tell me about your project or just say hello!"
                            ></textarea>
                        </div>
                        <Button 
                            type="submit"
                            className="w-full bg-gradient-to-r from-color-secondary to-color-accent hover:from-color-accent hover:to-color-secondary text-white font-semibold py-2.5 sm:py-3 rounded-lg transition-all duration-300 transform hover:-translate-y-1 text-sm sm:text-base"
                        >
                            <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                            Send Message
                        </Button>
                    </form>
                </motion.div>
            </div>
        </div>
    )
}
