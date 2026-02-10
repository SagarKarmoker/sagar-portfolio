"use client"
import { useState } from "react"
import About from "./components/About";
import Awards from "./components/Awards";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Hackathon from "./components/Hackathon";
import Hero from "./components/Hero";
import MyProjects from "./components/MyProjects";
import Research from "./components/Research";
import ResearchStatement from "./components/ResearchStatement";
import Skills from "./components/Skills";
import WorkEx from "./components/WorkEx";
import Teaching from "./components/Teaching";
// import Blog from "./components/Blog"; // Commented out for future use
import { motion, AnimatePresence } from "framer-motion";
// import MyDock from "./components/MyDock";

export default function App() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    const mainNavItems = [
        { href: "#about", label: "About" },
        { href: "#research-statement", label: "Research" },
        { href: "#experience", label: "Experience" },
        { href: "#projects", label: "Projects" },
        { href: "#contact", label: "Contact" }
    ];
    
    const moreNavItems = [
        { href: "#teaching", label: "Teaching" },
        { href: "#education", label: "Education" },
        { href: "#skills", label: "Skills" },
        { href: "#awards", label: "Awards" },
        { href: "#hackathons", label: "Hackathons" }
        // { href: "#blog", label: "Blog" } // Commented out for future use
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-color-primary/20 via-color-secondary/10 to-color-accent/10 dark:from-color-dark dark:via-color-secondary/20 dark:to-color-dark">
            {/* Navigation */}
            <nav className="fixed top-0 w-full bg-white/90 dark:bg-color-dark/90 backdrop-blur-lg z-50 border-b border-color-primary/20 dark:border-color-secondary/30 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        {/* Logo */}
                        <motion.div 
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="flex items-center space-x-2 cursor-pointer group"
                        >
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-color-secondary to-color-accent flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                                SK
                            </div>
                            <div className="hidden sm:block">
                                <div className="text-lg font-bold bg-gradient-to-r from-color-secondary to-color-accent bg-clip-text text-transparent">
                                    Sagar Karmoker
                                </div>
                                <div className="text-xs text-slate-500 dark:text-slate-400 -mt-1">
                                    MSc Student | Seeking PhD
                                </div>
                            </div>
                        </motion.div>
                        
                        {/* Desktop Navigation */}
                        <motion.div 
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="hidden lg:flex items-center space-x-1"
                        >
                            {mainNavItems.map((item) => (
                                <a 
                                    key={item.href}
                                    href={item.href} 
                                    className="relative px-3 py-2 text-sm text-slate-600 dark:text-slate-300 hover:text-color-secondary dark:hover:text-color-primary transition-all duration-300 cursor-pointer font-medium rounded-lg hover:bg-color-primary/10 dark:hover:bg-color-primary/20 group"
                                >
                                    {item.label}
                                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-color-secondary to-color-accent group-hover:w-full transition-all duration-300 rounded-full"></span>
                                </a>
                            ))}
                            
                            {/* More Dropdown */}
                            <div className="relative group">
                                <button className="px-3 py-2 text-sm text-slate-600 dark:text-slate-300 hover:text-color-secondary dark:hover:text-color-primary transition-all duration-300 cursor-pointer font-medium rounded-lg hover:bg-color-primary/10 dark:hover:bg-color-primary/20 flex items-center space-x-1">
                                    <span>More</span>
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-color-dark rounded-xl shadow-xl border border-color-primary/20 dark:border-color-secondary/30 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                                    {moreNavItems.map((item) => (
                                        <a 
                                            key={item.href}
                                            href={item.href} 
                                            className="block px-4 py-2 text-sm text-slate-600 dark:text-slate-300 hover:text-color-secondary dark:hover:text-color-primary hover:bg-color-primary/10 dark:hover:bg-color-primary/20 first:rounded-t-xl last:rounded-b-xl transition-colors"
                                        >
                                            {item.label}
                                        </a>
                                    ))}
                                </div>
                            </div>
                            
                            {/* Download CV Button */}
                            <a 
                                href="/Sagar_Resume.pdf" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="ml-4 px-4 py-2 bg-gradient-to-r from-color-secondary to-color-accent text-white text-sm font-semibold rounded-xl hover:shadow-lg hover:shadow-color-accent/25 transition-all duration-300 transform hover:-translate-y-0.5"
                            >
                                Download CV
                            </a>
                        </motion.div>
                        
                        {/* Mobile Menu Button */}
                        <motion.div 
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="lg:hidden"
                        >
                            <button 
                                onClick={toggleMobileMenu}
                                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                                aria-expanded={isMobileMenuOpen}
                                className="p-3 rounded-xl bg-color-primary/10 dark:bg-color-primary/20 text-color-secondary dark:text-color-primary hover:bg-color-primary/20 dark:hover:bg-color-primary/30 transition-all duration-300 cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center touch-target"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    {isMobileMenuOpen ? (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    ) : (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                    )}
                                </svg>
                            </button>
                        </motion.div>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="lg:hidden bg-white/95 dark:bg-color-dark/95 backdrop-blur-lg border-t border-color-primary/20 dark:border-color-secondary/30 shadow-lg"
                        >
                            <div className="px-4 py-4 space-y-1">
                                {/* Main Navigation Items */}
                                {mainNavItems.map((item) => (
                                    <a
                                        key={item.href}
                                        href={item.href}
                                        onClick={closeMobileMenu}
                                        className="block px-4 py-4 text-slate-600 dark:text-slate-300 hover:text-color-secondary dark:hover:text-color-primary hover:bg-color-primary/10 dark:hover:bg-color-primary/20 rounded-xl transition-all duration-300 cursor-pointer font-medium min-h-[48px] flex items-center touch-target"
                                    >
                                        {item.label}
                                    </a>
                                ))}
                                
                                {/* Divider */}
                                <div className="border-t border-color-primary/10 dark:border-color-secondary/20 my-2"></div>
                                
                                {/* More Items */}
                                <div className="px-4 py-2 text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                                    More
                                </div>
                                {moreNavItems.map((item) => (
                                    <a
                                        key={item.href}
                                        href={item.href}
                                        onClick={closeMobileMenu}
                                        className="block px-4 py-3 text-sm text-slate-500 dark:text-slate-400 hover:text-color-secondary dark:hover:text-color-primary hover:bg-color-primary/10 dark:hover:bg-color-primary/20 rounded-xl transition-all duration-300 cursor-pointer min-h-[44px] flex items-center touch-target"
                                    >
                                        {item.label}
                                    </a>
                                ))}
                                
                                {/* Download CV Button */}
                                <div className="pt-2 border-t border-color-primary/10 dark:border-color-secondary/20 mt-2">
                                    <a 
                                        href="/Sagar_Resume.pdf" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        onClick={closeMobileMenu}
                                        className="block px-4 py-4 bg-gradient-to-r from-color-secondary to-color-accent text-white rounded-xl font-semibold text-center hover:shadow-lg transition-all duration-300 min-h-[48px] flex items-center justify-center touch-target"
                                    >
                                        Download CV
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>

            {/* Main Content */}
            <main className="pt-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
                    <div className="space-y-16 sm:space-y-20 lg:space-y-24">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <Hero />
                        </motion.div>
                        
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            id="about"
                        >
                            <About />
                        </motion.div>
                        
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            id="research-statement"
                        >
                            <ResearchStatement />
                        </motion.div>
                        
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            id="research"
                        >
                            <Research />
                        </motion.div>
                        
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            id="experience"
                        >
                            <WorkEx />
                        </motion.div>
                        
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            id="teaching"
                        >
                            <Teaching />
                        </motion.div>
                        
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            id="education"
                        >
                            <Education />
                        </motion.div>
                        
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            id="projects"
                        >
                            <MyProjects />
                        </motion.div>
                        
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            id="skills"
                        >
                            <Skills />
                        </motion.div>
                        
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            id="awards"
                        >
                            <Awards />
                        </motion.div>
                        
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            id="hackathons"
                        >
                            <Hackathon />
                        </motion.div>
                        
                        {/* Blog section commented out for future use
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            id="blog"
                        >
                            <Blog />
                        </motion.div>
                        */}
                        
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            id="contact"
                        >
                            <Contact />
                        </motion.div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-white dark:bg-color-dark border-t border-color-primary/20 dark:border-color-secondary/30 mt-16 sm:mt-20 lg:mt-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
                    <div className="text-center">
                        <blockquote className="mb-6 sm:mb-8">
                            <p className="text-base sm:text-lg lg:text-xl text-slate-700 dark:text-slate-300 italic font-medium max-w-2xl mx-auto leading-relaxed">
                                "The best way to predict the future is to invent it."
                            </p>
                            <cite className="text-sm sm:text-base text-color-secondary dark:text-color-primary mt-2 block not-italic font-semibold">
                                — Alan Kay
                            </cite>
                        </blockquote>
                        <div className="border-t border-color-primary/10 dark:border-color-secondary/20 pt-6 sm:pt-8">
                            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
                                © 2025 Sagar Karmoker. Crafted with passion, coffee, and code.
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
