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
import Skills from "./components/Skills";
import WorkEx from "./components/WorkEx";
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

    const navigationItems = [
        { href: "#about", label: "About" },
        { href: "#experience", label: "Experience" },
        { href: "#education", label: "Education" },
        { href: "#awards", label: "Awards" },
        { href: "#skills", label: "Skills" },
        { href: "#projects", label: "Projects" },
        { href: "#hackathons", label: "Hackathons" },
        { href: "#research", label: "Research" },
        { href: "#contact", label: "Contact" }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-color-primary/20 via-color-secondary/10 to-color-accent/10 dark:from-color-dark dark:via-color-secondary/20 dark:to-color-dark">
            {/* Navigation */}
            <nav className="fixed top-0 w-full bg-white/80 dark:bg-color-dark/80 backdrop-blur-md z-50 border-b border-color-primary/20 dark:border-color-secondary/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <motion.div 
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="text-lg sm:text-xl font-bold bg-gradient-to-r from-color-secondary to-color-accent bg-clip-text text-transparent cursor-pointer"
                        >
                            Sagar Karmoker
                        </motion.div>
                        
                        {/* Desktop Navigation */}
                        <motion.div 
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="hidden lg:flex space-x-8"
                        >
                            {navigationItems.map((item) => (
                                <a 
                                    key={item.href}
                                    href={item.href} 
                                    className="text-slate-600 dark:text-slate-300 hover:text-color-secondary dark:hover:text-color-primary transition-colors cursor-pointer font-medium"
                                >
                                    {item.label}
                                </a>
                            ))}
                        </motion.div>
                        
                        {/* Mobile Menu Button */}
                        <motion.div 
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="lg:hidden"
                        >
                            <button 
                                onClick={toggleMobileMenu}
                                className="p-2 rounded-lg bg-color-primary/10 dark:bg-color-primary/20 text-color-secondary dark:text-color-primary hover:bg-color-primary/20 dark:hover:bg-color-primary/30 transition-colors cursor-pointer"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                            className="lg:hidden bg-white/95 dark:bg-color-dark/95 backdrop-blur-md border-t border-color-primary/20 dark:border-color-secondary/30"
                        >
                            <div className="px-4 py-4 space-y-2">
                                {navigationItems.map((item) => (
                                    <a
                                        key={item.href}
                                        href={item.href}
                                        onClick={closeMobileMenu}
                                        className="block px-4 py-3 text-slate-600 dark:text-slate-300 hover:text-color-secondary dark:hover:text-color-primary hover:bg-color-primary/10 dark:hover:bg-color-primary/20 rounded-lg transition-colors cursor-pointer font-medium"
                                    >
                                        {item.label}
                                    </a>
                                ))}
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
                            id="experience"
                        >
                            <WorkEx />
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
                            id="awards"
                        >
                            <Awards />
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
                            id="projects"
                        >
                            <MyProjects />
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
                            id="contact"
                        >
                            <Contact />
                        </motion.div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-white dark:bg-color-dark border-t border-color-primary/20 dark:border-color-secondary/30 mt-16 sm:mt-20 lg:mt-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
                    <div className="text-center text-slate-600 dark:text-slate-400">
                        <p className="text-sm sm:text-base">© 2025 Sagar Karmoker. Built with Next.js and Tailwind CSS.</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}
