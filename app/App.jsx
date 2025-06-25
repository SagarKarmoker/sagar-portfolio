"use client"
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
import { motion } from "framer-motion";
// import MyDock from "./components/MyDock";

export default function App() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-color-primary/20 via-color-secondary/10 to-color-accent/10 dark:from-color-dark dark:via-color-secondary/20 dark:to-color-dark">
            {/* Navigation */}
            <nav className="fixed top-0 w-full bg-white/80 dark:bg-color-dark/80 backdrop-blur-md z-50 border-b border-color-primary/20 dark:border-color-secondary/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <motion.div 
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="text-xl font-bold bg-gradient-to-r from-color-secondary to-color-accent bg-clip-text text-transparent cursor-pointer"
                        >
                            Sagar Karmoker
                        </motion.div>
                        <motion.div 
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="hidden lg:flex space-x-8"
                        >
                            <a href="#about" className="text-slate-600 dark:text-slate-300 hover:text-color-secondary dark:hover:text-color-primary transition-colors cursor-pointer font-medium">About</a>
                            <a href="#experience" className="text-slate-600 dark:text-slate-300 hover:text-color-secondary dark:hover:text-color-primary transition-colors cursor-pointer font-medium">Experience</a>
                            <a href="#education" className="text-slate-600 dark:text-slate-300 hover:text-color-secondary dark:hover:text-color-primary transition-colors cursor-pointer font-medium">Education</a>
                            <a href="#awards" className="text-slate-600 dark:text-slate-300 hover:text-color-secondary dark:hover:text-color-primary transition-colors cursor-pointer font-medium">Awards</a>
                            <a href="#skills" className="text-slate-600 dark:text-slate-300 hover:text-color-secondary dark:hover:text-color-primary transition-colors cursor-pointer font-medium">Skills</a>
                            <a href="#projects" className="text-slate-600 dark:text-slate-300 hover:text-color-secondary dark:hover:text-color-primary transition-colors cursor-pointer font-medium">Projects</a>
                            <a href="#hackathons" className="text-slate-600 dark:text-slate-300 hover:text-color-secondary dark:hover:text-color-primary transition-colors cursor-pointer font-medium">Hackathons</a>
                            <a href="#research" className="text-slate-600 dark:text-slate-300 hover:text-color-secondary dark:hover:text-color-primary transition-colors cursor-pointer font-medium">Research</a>
                            <a href="#contact" className="text-slate-600 dark:text-slate-300 hover:text-color-secondary dark:hover:text-color-primary transition-colors cursor-pointer font-medium">Contact</a>
                        </motion.div>
                        
                        {/* Mobile Menu Button */}
                        <motion.div 
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="lg:hidden"
                        >
                            <button className="p-2 rounded-lg bg-color-primary/10 dark:bg-color-primary/20 text-color-secondary dark:text-color-primary hover:bg-color-primary/20 dark:hover:bg-color-primary/30 transition-colors cursor-pointer">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </motion.div>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <main className="pt-1">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="space-y-24">
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
            <footer className="bg-white dark:bg-color-dark border-t border-color-primary/20 dark:border-color-secondary/30 mt-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="text-center text-slate-600 dark:text-slate-400">
                        <p>© 2024 Sagar Karmoker. Built with Next.js and Tailwind CSS.</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}
