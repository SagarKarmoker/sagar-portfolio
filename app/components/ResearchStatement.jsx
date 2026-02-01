import React from 'react'
import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { BookOpen, Target, Lightbulb, GraduationCap, ArrowRight } from 'lucide-react'

export default function ResearchStatement() {
    return (
        <div className="py-12 sm:py-16 lg:py-20">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-12 sm:mb-16"
            >
                <div className="inline-flex items-center px-3 sm:px-4 py-2 rounded-full bg-color-primary/20 dark:bg-color-primary/30 text-color-secondary dark:text-color-primary text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                    <BookOpen className="w-4 h-4 mr-2" />
                    Research Focus & PhD Aspirations
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                    Research{' '}
                    <span className="bg-gradient-to-r from-color-secondary to-color-accent bg-clip-text text-transparent">
                        Statement
                    </span>
                </h2>
                <div className="w-16 sm:w-20 lg:w-24 h-1 bg-gradient-to-r from-color-secondary to-color-accent mx-auto rounded-full mt-4 sm:mt-6"></div>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
                {/* Research Interests */}
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                >
                    <div className="bg-white dark:bg-color-dark rounded-2xl p-6 sm:p-8 shadow-xl border border-color-primary/20 dark:border-color-secondary/30">
                        <div className="flex items-center space-x-3 mb-4">
                            <div className="p-2 bg-gradient-to-r from-color-secondary to-color-accent rounded-lg text-white">
                                <Lightbulb className="w-5 h-5 sm:w-6 sm:h-6" />
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-slate-200">
                                Research Interests
                            </h3>
                        </div>
                        
                        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                            My research interests lie at the intersection of <span className="text-color-secondary dark:text-color-primary font-semibold">blockchain technology</span>, 
                            <span className="text-color-secondary dark:text-color-primary font-semibold"> distributed systems</span>, and 
                            <span className="text-color-secondary dark:text-color-primary font-semibold"> backend infrastructure</span>. 
                            I am particularly fascinated by the challenges of building scalable, secure, and efficient decentralized systems 
                            that can handle real-world enterprise workloads.
                        </p>

                        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                            During my time as a Research Assistant at BRAC University and my industry experience at Core Devs Ltd and AHOM Limited, 
                            I have developed deep expertise in blockchain consensus mechanisms, smart contract security, and multi-chain wallet management systems. 
                            My work has focused on practical applications of blockchain in supply chain security, identity verification (eKYC), and decentralized finance (DeFi) infrastructure.
                        </p>

                        <div className="flex flex-wrap gap-2">
                            {[
                                "Blockchain Scalability",
                                "Consensus Mechanisms", 
                                "Smart Contract Security",
                                "Distributed Systems",
                                "DeFi Infrastructure",
                                "Multi-chain Architecture"
                            ].map((interest, index) => (
                                <Badge 
                                    key={index}
                                    className="bg-color-primary/10 dark:bg-color-primary/20 text-color-secondary dark:text-color-primary px-3 py-1.5 text-xs sm:text-sm"
                                >
                                    {interest}
                                </Badge>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* PhD Goals & Motivation */}
                <motion.div 
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                >
                    <div className="bg-white dark:bg-color-dark rounded-2xl p-6 sm:p-8 shadow-xl border border-color-primary/20 dark:border-color-secondary/30">
                        <div className="flex items-center space-x-3 mb-4">
                            <div className="p-2 bg-gradient-to-r from-color-secondary to-color-accent rounded-lg text-white">
                                <Target className="w-5 h-5 sm:w-6 sm:h-6" />
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-slate-200">
                                PhD Aspirations & Goals
                            </h3>
                        </div>
                        
                        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                            I am seeking PhD opportunities in Computer Science to deepen my understanding of blockchain scalability and contribute 
                            to solving fundamental challenges in distributed systems. My goal is to bridge the gap between theoretical research 
                            and practical implementation, developing protocols and architectures that can power the next generation of decentralized applications.
                        </p>

                        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                            Specifically, I aim to explore novel consensus mechanisms that balance security, decentralization, and scalability— 
                            the classic blockchain trilemma. My industry experience building wallet management systems across 101+ blockchain networks 
                            has given me unique insights into the practical limitations of current protocols and motivated me to pursue research-driven solutions.
                        </p>

                        <div className="bg-gradient-to-r from-color-primary/10 to-color-secondary/10 dark:from-color-primary/20 dark:to-color-secondary/20 rounded-xl p-4 sm:p-6">
                            <div className="flex items-center space-x-2 mb-3">
                                <GraduationCap className="w-5 h-5 text-color-secondary dark:text-color-primary" />
                                <span className="font-semibold text-slate-800 dark:text-slate-200">Research Direction</span>
                            </div>
                            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
                                I am particularly interested in researching Layer 2 scaling solutions, cross-chain interoperability protocols, 
                                and formal verification methods for smart contracts. I believe these areas hold the key to mainstream blockchain adoption 
                                and I am eager to contribute to their advancement through rigorous academic research.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Collaboration CTA */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="mt-12 sm:mt-16 text-center"
            >
                <div className="bg-gradient-to-r from-color-secondary to-color-accent rounded-2xl p-6 sm:p-8 text-white shadow-xl">
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4">
                        Interested in Collaboration?
                    </h3>
                    <p className="text-base sm:text-lg opacity-90 mb-6 max-w-2xl mx-auto">
                        I am actively seeking PhD opportunities and research collaborations in blockchain technology and distributed systems. 
                        If your research aligns with my interests, I would love to discuss potential opportunities.
                    </p>
                    <a 
                        href="mailto:sagarkarmoker.official@gmail.com?subject=PhD%20Opportunity%20-%20Collaboration%20Inquiry"
                        className="inline-flex items-center space-x-2 bg-white text-color-secondary px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:bg-opacity-90 transition-all duration-300 group"
                    >
                        <span>Discuss PhD Opportunities</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>
            </motion.div>
        </div>
    )
}
