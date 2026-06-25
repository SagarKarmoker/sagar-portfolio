'use client'
import React from 'react'
import Image from 'next/image'
import { Particles } from '@/components/ui/particles'
import { BlurFade } from '@/components/ui/blur-fade'
import ProfilePic from '@/public/profile.jpg'

function Hero() {
    return (
        <section className="min-h-screen flex items-center relative overflow-hidden bg-[hsl(var(--color-dark))]">
            {/* Particles background */}
            <Particles
                className="absolute inset-0 z-0"
                quantity={150}
                color="#ffffff"
                size={0.3}
                staticity={30}
                ease={30}
            />

            {/* Subtle grid overlay */}
            <div className="absolute inset-0 opacity-[0.03] z-[1]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

            <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left: Text */}
                    <div className="text-white space-y-8">
                        <BlurFade delay={0} duration={0.6} offset={8}>
                            <div className="flex items-center gap-4 font-mono text-xs uppercase tracking-[0.2em] text-white/50">
                                <span className="w-8 h-[1px] bg-white/30" />
                                Researcher & Engineer
                            </div>
                        </BlurFade>

                        <BlurFade delay={0.15} duration={0.8} offset={12}>
                            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-serif leading-none">
                                Sagar
                                <br />
                                <span className="text-4xl sm:text-5xl lg:text-6xl italic text-white/70">Karmoker</span>
                            </h1>
                        </BlurFade>

                        <BlurFade delay={0.3} duration={0.8} offset={12}>
                            <p className="text-base sm:text-lg text-white/60 max-w-xl leading-relaxed">
                                Building at the intersection of <strong className="text-white/90">academic research</strong> and{' '}
                                <strong className="text-white/90">production engineering</strong> — distributed systems, blockchain infrastructure, and decentralized protocols.
                            </p>
                        </BlurFade>

                        {/* Role badges */}
                        <BlurFade delay={0.45} duration={0.6} offset={8}>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1.5 text-xs font-mono rounded-full border border-[hsl(180_55%_25%_/_0.4)] bg-[hsl(180_55%_25%_/_0.1)] text-[hsl(180_35%_60%)]">
                                    Blockchain Engineer
                                </span>
                                <span className="px-3 py-1.5 text-xs font-mono rounded-full border border-[hsl(180_55%_25%_/_0.4)] bg-[hsl(180_55%_25%_/_0.1)] text-[hsl(180_35%_60%)]">
                                    MSc Researcher
                                </span>
                                <span className="px-3 py-1.5 text-xs font-mono rounded-full border border-[hsl(180_55%_25%_/_0.4)] bg-[hsl(180_55%_25%_/_0.1)] text-[hsl(180_35%_60%)]">
                                    Backend Architect
                                </span>
                                <span className="px-3 py-1.5 text-xs font-mono rounded-full border border-[hsl(24_55%_54%_/_0.4)] bg-[hsl(24_55%_54%_/_0.1)] text-[hsl(24_55%_54%)]">
                                    PhD Aspirant
                                </span>
                                <span className="px-3 py-1.5 text-xs font-mono rounded-full border border-[hsl(180_55%_25%_/_0.4)] bg-[hsl(180_55%_25%_/_0.1)] text-[hsl(180_35%_60%)]">
                                    Smart Contract Dev
                                </span>
                            </div>
                        </BlurFade>

                        <BlurFade delay={0.6} duration={0.6} offset={8}>
                            <nav aria-label="Primary navigation" className="flex flex-wrap items-center gap-x-3 gap-y-2 pt-4 text-sm">
                                <a href="#research" className="text-white/40 hover:text-white/70 transition-colors duration-300 font-mono">Research</a>
                                <span className="text-white/20" aria-hidden="true">→</span>
                                <a href="#projects" className="text-white/40 hover:text-white/70 transition-colors duration-300 font-mono">Engineering</a>
                                <span className="text-white/20" aria-hidden="true">→</span>
                                <a
                                    href="/Sagar_Resume.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="relative text-white font-semibold font-mono after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-1 after:h-1 after:rounded-full after:bg-[hsl(var(--color-secondary))]"
                                >
                                    CV
                                </a>
                            </nav>
                        </BlurFade>
                    </div>

                    {/* Right: Photo */}
                    <BlurFade delay={0.3} duration={1} offset={20}>
                        <div className="flex justify-center lg:justify-end">
                            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[hsl(180_55%_25%_/_0.3)] to-[hsl(24_55%_54%_/_0.2)] blur-3xl animate-pulse" style={{ animationDuration: '6s' }} />
                                <div className="relative w-full h-full rounded-full overflow-hidden ring-2 ring-white/10">
                                    <Image
                                        src={ProfilePic}
                                        width={384}
                                        height={384}
                                        alt="Sagar Karmoker"
                                        className="w-full h-full object-cover"
                                        priority
                                    />
                                </div>
                                {/* Decorative rings */}
                                <div className="absolute -inset-4 rounded-full border border-white/10" />
                                <div className="absolute -inset-8 rounded-full border border-white/5" />
                            </div>
                        </div>
                    </BlurFade>
                </div>
            </div>
        </section>
    )
}

export default Hero
