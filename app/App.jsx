"use client"
import About from "./components/About";
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
                            className="text-xl font-bold bg-gradient-to-r from-color-secondary to-color-accent bg-clip-text text-transparent"
                        >
                            Sagar Karmoker
                        </motion.div>
                        <motion.div 
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="hidden md:flex space-x-8"
                        >
                            <a href="#about" className="text-slate-600 dark:text-slate-300 hover:text-color-secondary dark:hover:text-color-primary transition-colors cursor-pointer">About</a>
                            <a href="#projects" className="text-slate-600 dark:text-slate-300 hover:text-color-secondary dark:hover:text-color-primary transition-colors cursor-pointer">Projects</a>
                            <a href="#skills" className="text-slate-600 dark:text-slate-300 hover:text-color-secondary dark:hover:text-color-primary transition-colors cursor-pointer">Skills</a>
                            <a href="#contact" className="text-slate-600 dark:text-slate-300 hover:text-color-secondary dark:hover:text-color-primary transition-colors cursor-pointer">Contact</a>
                        </motion.div>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <main className="pt-20">
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
                        >
                            <WorkEx />
                        </motion.div>
                        
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <Education />
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
                        >
                            <Hackathon />
                        </motion.div>
                        
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
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
