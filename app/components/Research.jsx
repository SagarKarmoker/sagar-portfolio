import React from 'react'
import { motion } from 'framer-motion'
import { BookOpen, FileText, TrendingUp } from 'lucide-react'

export default function Research() {
    return (
        <div className="py-20">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm font-medium mb-6">
                    <BookOpen className="w-4 h-4 mr-2" />
                    Research & Publications
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                    Academic{' '}
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        Research
                    </span>
                </h2>
                <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                    Exploring cutting-edge technologies and contributing to the advancement of knowledge in computer science.
                </p>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mt-6"></div>
            </motion.div>

            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center"
            >
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-12 border border-blue-200 dark:border-blue-800 max-w-2xl mx-auto">
                    <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                        <TrendingUp className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-4">
                        Research in Progress
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                        I'm currently working on research projects focused on blockchain technology, 
                        decentralized systems, and their applications in real-world scenarios. 
                        Publications and detailed research findings will be shared here soon.
                    </p>
                    <div className="flex items-center justify-center text-slate-500 dark:text-slate-400">
                        <FileText className="w-5 h-5 mr-2" />
                        <span className="text-sm font-medium">Coming Soon</span>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}
