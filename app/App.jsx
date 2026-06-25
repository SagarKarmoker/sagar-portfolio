"use client"
import { useState, useEffect } from "react"
import { Pointer } from "@/components/ui/pointer"
import { Dock, DockIcon } from "@/components/ui/dock"
import { Home, User, FlaskConical, Briefcase, FolderGit2, Mail } from "lucide-react"
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
import { motion, AnimatePresence } from "framer-motion";

export default function App({ cmsData }) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        setIsDesktop(!('ontouchstart' in window || navigator.maxTouchPoints > 0));
    }, []);

    const toggleMobileMenu = () => setIsMobileMenuOpen(p => !p);
    const closeMobileMenu = () => setIsMobileMenuOpen(false);

    const sections = [
        { href: "#hero", label: "Home", icon: Home },
        { href: "#about", label: "About", icon: User },
        { href: "#research", label: "Research", icon: FlaskConical },
        { href: "#experience", label: "Experience", icon: Briefcase },
        { href: "#projects", label: "Projects", icon: FolderGit2 },
        { href: "#contact", label: "Contact", icon: Mail },
    ];

    const mobileNavLinks = [
        { href: "#about", label: "About" },
        { href: "#research", label: "Research" },
        { href: "#experience", label: "Experience" },
        { href: "#projects", label: "Projects" },
        { href: "#contact", label: "Contact" },
    ];

    return (
        <div className="min-h-screen relative">
            {isDesktop && <Pointer />}
            {/* Grain overlay via layout */}

            {/* Mobile top bar */}
            <nav className="lg:hidden fixed top-0 left-0 right-0 z-50 mix-blend-difference">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 sm:h-20">
                        <a href="#hero" className="text-white text-lg font-mono font-semibold tracking-tight">
                            SK<span className="opacity-50">()</span>
                        </a>
                        <div className="lg:hidden">
                            <button
                                onClick={toggleMobileMenu}
                                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                                aria-expanded={isMobileMenuOpen}
                                className="relative w-10 h-10 flex items-center justify-center text-white touch-target"
                            >
                                <div className="w-5 flex flex-col gap-[5px]">
                                    <span className={`block h-[1.5px] bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-[6.5px]' : ''}`} />
                                    <span className={`block h-[1.5px] bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
                                    <span className={`block h-[1.5px] bg-white transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-[6.5px]' : ''}`} />
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile overlay — separate from nav to avoid mix-blend */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-[hsl(var(--color-dark))] z-40 flex items-center justify-center lg:hidden"
                    >
                        <div className="flex flex-col items-center gap-8">
                            {mobileNavLinks.map((item) => (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    onClick={closeMobileMenu}
                                    className="text-white/80 hover:text-white text-xl font-mono uppercase tracking-widest transition-all duration-300"
                                >
                                    {item.label}
                                </a>
                            ))}
                            <a
                                href="/Sagar_Resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={closeMobileMenu}
                                className="mt-4 px-6 py-3 text-sm font-medium text-white border border-white/30 rounded-full hover:bg-white hover:text-black transition-all duration-300"
                            >
                                Download CV ↗
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Desktop Dock — hidden on < lg */}
            <div className="hidden lg:flex fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
                <Dock className="bg-background/80 backdrop-blur-lg border border-border shadow-lg">
                    {sections.map((item) => {
                        const Icon = item.icon;
                        return (
                            <DockIcon key={item.href} label={item.label}>
                                <a
                                    href={item.href}
                                    className="w-full h-full flex items-center justify-center text-foreground/70 hover:text-foreground transition-colors"
                                    aria-label={item.label || "Home"}
                                >
                                    <Icon className="w-5 h-5" />
                                </a>
                            </DockIcon>
                        );
                    })}
                    <DockIcon label="Resume">
                        <a
                            href="/Sagar_Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full h-full flex items-center justify-center text-foreground/70 hover:text-foreground transition-colors"
                            aria-label="Resume"
                        >
                            <span className="text-xs font-bold font-mono">CV</span>
                        </a>
                    </DockIcon>
                </Dock>
            </div>

            {/* Main Content — full-width sections */}
            <main>
                <div id="hero">
                    <Hero />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-8 sm:space-y-12" id="about">
                        <About expertise={cmsData.expertise} />
                    </div>

                    <div className="bridge-divider" />

                    <div className="space-y-8 sm:space-y-12" id="research">
                        <ResearchStatement />
                        <Research publications={cmsData.research?.publications} />
                    </div>

                    <div className="bridge-divider" />

                    <div className="space-y-8 sm:space-y-12" id="experience">
                        <WorkEx jobs={cmsData.workExperience} />
                        <Teaching />
                    </div>

                    <div className="bridge-divider" />

                    <div className="space-y-8 sm:space-y-12" id="education">
                        <Education schools={cmsData.education} />
                    </div>

                    <div className="bridge-divider" />

                    <div className="space-y-8 sm:space-y-12" id="projects">
                        <MyProjects projects={cmsData.projects} />
                        <Skills categories={cmsData.skills?.skillCategories} logos={cmsData.logos} />
                    </div>

                    <div className="bridge-divider" />

                    <div className="space-y-8 sm:space-y-12" id="awards">
                        <Awards items={cmsData.awards} />
                        <Hackathon items={cmsData.hackathons} />
                    </div>

                    <div className="space-y-8 sm:space-y-12" id="contact">
                        <Contact methods={cmsData.contact} />
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="relative mt-16 sm:mt-24 border-t border-border pb-24 lg:pb-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
                    <div className="grid sm:grid-cols-3 gap-8 sm:gap-12">
                        <div>
                            <p className="text-lg font-serif text-foreground mb-2">Sagar Karmoker</p>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Researcher &amp; Engineer<br />
                                Building at the intersection of<br />
                                academic rigor &amp; production engineering.
                            </p>
                        </div>
                        <div>
                            <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4">Navigate</p>
                            <div className="flex flex-col gap-2">
                                {mobileNavLinks.map((item) => (
                                    <a key={item.href} href={item.href} className="text-sm text-foreground/70 hover:text-foreground transition-colors">
                                        {item.label}
                                    </a>
                                ))}
                            </div>
                        </div>
                        <div>
                            <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4">Connect</p>
                            <div className="flex gap-3">
                                <a href="https://github.com/SagarKarmoker" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground/70 hover:text-foreground hover:border-foreground/50 transition-all duration-300">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
                                </a>
                                <a href="https://www.linkedin.com/in/sagarkarmoker" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground/70 hover:text-foreground hover:border-foreground/50 transition-all duration-300">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                                </a>
                                <a href="mailto:sagarkarmoker.official@gmail.com" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground/70 hover:text-foreground hover:border-foreground/50 transition-all duration-300">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                                </a>
                            </div>
                            <p className="text-xs text-muted-foreground/60 mt-4 font-mono">
                                © {new Date().getFullYear()} Sagar Karmoker
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
