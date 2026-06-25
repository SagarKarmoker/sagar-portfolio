import React from 'react'
import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { BookOpen, Clock, ArrowRight, Calendar } from 'lucide-react'

export default function Blog() {
    const articles = [
        {
            title: "Building Scalable Wallet Management Systems: Lessons from 101 Blockchains",
            excerpt: "A deep dive into architecting multi-chain wallet infrastructure that handles 101+ blockchain networks, focusing on security, performance, and developer experience.",
            category: "Blockchain Engineering",
            readTime: "8 min read",
            date: "Coming Soon",
            tags: ["Blockchain", "System Design", "Wallet Management", "Multi-chain"],
            status: "draft"
        },
        {
            title: "Backend Architecture Patterns for DeFi Applications",
            excerpt: "Exploring microservices architecture, event-driven design, and caching strategies for building robust decentralized finance backend systems.",
            category: "Backend Engineering",
            readTime: "10 min read",
            date: "Coming Soon", 
            tags: ["DeFi", "Microservices", "Backend", "System Design"],
            status: "draft"
        },
        {
            title: "Research Insights: Blockchain Consensus Mechanisms and Scalability",
            excerpt: "Analyzing current consensus protocols, their trade-offs, and emerging solutions for blockchain scalability based on my research at BRAC University.",
            category: "Research",
            readTime: "12 min read",
            date: "Coming Soon",
            tags: ["Research", "Consensus", "Scalability", "Blockchain"],
            status: "draft"
        }
    ];

    return (
        <div className="py-12 sm:py-16 lg:py-20">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-12 sm:mb-16"
            >
                <div className="inline-flex items-center px-3 sm:px-4 py-2 rounded-full bg-color-primary/20 dark:bg-color-primary/30 text-slate-blue dark:text-color-primary text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                    <BookOpen className="w-4 h-4 mr-2" />
                    Technical Writing
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                    Latest{' '}
                    <span className="bg-gradient-to-r from-slate-blue to-crimson bg-clip-text text-transparent">
                        Articles
                    </span>
                </h2>
                <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
                    Sharing insights on blockchain engineering, backend architecture, and research findings. 
                    Articles coming soon as I document my learnings.
                </p>
                <div className="w-16 sm:w-20 lg:w-24 h-1 bg-gradient-to-r from-slate-blue to-crimson mx-auto rounded-full mt-4 sm:mt-6"></div>
            </motion.div>

            {/* Articles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {articles.map((article, index) => (
                    <motion.article
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-white dark:bg-color-dark rounded-2xl p-6 sm:p-8 shadow-xl border border-color-primary/20 dark:border-color-secondary/30 hover:shadow-2xl transition-all duration-300 group cursor-pointer"
                    >
                        {/* Category & Status */}
                        <div className="flex items-center justify-between mb-4">
                            <Badge className="bg-color-primary/10 dark:bg-color-primary/20 text-slate-blue dark:text-color-primary text-xs">
                                {article.category}
                            </Badge>
                            {article.status === 'draft' && (
                                <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400 text-xs">
                                    Coming Soon
                                </Badge>
                            )}
                        </div>

                        {/* Title */}
                        <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 group-hover:text-slate-blue dark:group-hover:text-color-primary transition-colors line-clamp-2">
                            {article.title}
                        </h3>

                        {/* Excerpt */}
                        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                            {article.excerpt}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-4">
                            {article.tags.slice(0, 3).map((tag, tagIndex) => (
                                <span 
                                    key={tagIndex}
                                    className="text-xs text-muted-foreground bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded"
                                >
                                    #{tag}
                                </span>
                            ))}
                        </div>

                        {/* Meta */}
                        <div className="flex items-center justify-between pt-4 border-t border-color-primary/10 dark:border-color-secondary/20">
                            <div className="flex items-center space-x-3 text-xs sm:text-sm text-muted-foreground">
                                <div className="flex items-center space-x-1">
                                    <Clock className="w-3.5 h-3.5" />
                                    <span>{article.readTime}</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                    <Calendar className="w-3.5 h-3.5" />
                                    <span>{article.date}</span>
                                </div>
                            </div>
                            <div className="flex items-center text-slate-blue dark:text-color-primary text-sm font-medium group-hover:translate-x-1 transition-transform">
                                <span>Read</span>
                                <ArrowRight className="w-4 h-4 ml-1" />
                            </div>
                        </div>
                    </motion.article>
                ))}
            </div>

            {/* View All CTA */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center mt-8 sm:mt-12"
            >
                <p className="text-muted-foreground mb-4">
                    More articles on blockchain engineering, backend systems, and research insights coming soon.
                </p>
                <a 
                    href="https://medium.com/@sagarkarmoker" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-slate-blue dark:text-color-primary hover:text-crimson dark:hover:text-crimson transition-colors font-medium"
                >
                    <span>Follow me on Medium</span>
                    <ArrowRight className="w-4 h-4" />
                </a>
            </motion.div>
        </div>
    )
}
