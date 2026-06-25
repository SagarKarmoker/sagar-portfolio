import React from 'react'
import { BlurFade } from '@/components/ui/blur-fade'
import { NumberTicker } from '@/components/ui/number-ticker'
import { Highlighter } from '@/components/ui/highlighter'
import { getIcon } from '@/lib/icons'

function About({ expertise: expertiseProp }) {
    const expertise = (expertiseProp || []).map(item => ({
        ...item,
        icon: getIcon(item.icon)
    }));

    const stats = [
        { value: 4, label: 'Publications', type: 'academic', suffix: '' },
        { value: 3, label: 'Years Industry', type: 'industry', suffix: '' },
        { value: 101, label: 'Blockchains', type: 'industry', suffix: '+' },
        { value: 250, label: 'Students Mentored', type: 'academic', suffix: '+' },
    ];

    return (
        <div className="py-12 sm:py-16 lg:py-20">
            <BlurFade delay={0.1} duration={0.6} offset={8}>
                <div className="section-academic">
                    <h2>
                        Bridging{' '}
                        <span className="text-[hsl(var(--color-accent))]">Research</span>
                        {' '}&amp;{' '}
                        <span className="text-[hsl(var(--color-secondary))]">Engineering</span>
                    </h2>
                    <p className="subtitle">
                        One foot in academia, one in production. I build distributed systems while publishing research on blockchain scalability — because theory without practice is empty, and practice without theory is blind.
                    </p>
                </div>
            </BlurFade>

            <div className="grid lg:grid-cols-5 gap-8 sm:gap-12">
                {/* Left — the bridge narrative (3/5) */}
                <div className="lg:col-span-3 space-y-6">
                    <BlurFade delay={0.2} duration={0.6} offset={12}>
                        <div className="bg-card rounded-2xl p-6 sm:p-8 shadow-sm border border-border">
                            <div className="space-y-5 text-foreground/80 leading-relaxed">
                                <p className="text-lg text-foreground font-serif italic">
                                    &ldquo;I refuse to choose between the <Highlighter color="#809fff">ivory tower</Highlighter> and the <Highlighter color="#c91b68">shipping dock</Highlighter>.&rdquo;
                                </p>
                                <p>
                                    I&apos;m <strong className="text-foreground">Sagar Karmoker</strong> — currently an MSc student, a{' '}
                                    <span className="text-[hsl(var(--color-secondary))] font-medium">Backend &amp; Blockchain Engineer</span> at Core Devs Ltd,
                                    and a former <span className="text-[hsl(var(--color-accent))] font-medium">Research Assistant</span> at BRAC University.
                                    My days oscillate between writing <Highlighter color="#c91b68">smart contracts</Highlighter> and <Highlighter color="#809fff">writing papers</Highlighter>.
                                </p>
                                <div className="border-l-2 border-[hsl(var(--color-accent)_/_0.3)] pl-4 italic text-foreground/70">
                                    <p>Research Assistant @ BRAC University &mdash; blockchain consensus, supply chain security, eKYC identity systems.</p>
                                    <p className="mt-2">Blockchain Developer @ AHOM Limited &mdash; multi-chain wallet infrastructure spanning 101+ chains.</p>
                                </div>
                                <p>
                                    I&apos;m actively <Highlighter color="#809fff">seeking PhD opportunities</Highlighter> in Computer Science,
                                    with research interests at the intersection of <Highlighter color="#c91b68">blockchain scalability</Highlighter>, distributed systems, and formal verification.
                                    My goal: <Highlighter color="#c91b68">bring the rigor of academia to the urgency of engineering</Highlighter>.
                                </p>
                            </div>
                        </div>
                    </BlurFade>

                    {/* Stats: animated number tickers */}
                    <BlurFade delay={0.3} duration={0.6} offset={8}>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                            {stats.map((stat, i) => (
                                <div
                                    key={stat.label}
                                    className={`bg-card rounded-xl p-4 text-center shadow-sm border ${
                                        stat.type === 'academic' ? 'border-[hsl(var(--color-accent)_/_0.2)]' : 'border-[hsl(var(--color-secondary)_/_0.2)]'
                                    }`}
                                >
                                    <div className={`text-2xl sm:text-3xl font-bold ${
                                        stat.type === 'academic' ? 'font-serif text-[hsl(var(--color-accent))]' : 'font-mono text-[hsl(var(--color-secondary))]'
                                    }`}>
                                        <NumberTicker value={stat.value} />
                                        {stat.suffix}
                                    </div>
                                    <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </BlurFade>
                </div>

                {/* Right — Expertise cards (2/5) */}
                <BlurFade delay={0.35} duration={0.6} offset={12} className="lg:col-span-2">
                    <div className="space-y-3">
                        {expertise.map((item, index) => (
                            <div
                                key={index}
                                className="group bg-card rounded-xl p-4 sm:p-5 shadow-sm border border-border hover:border-[hsl(var(--color-secondary)_/_0.3)] transition-all duration-300"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-9 h-9 rounded-lg bg-[hsl(var(--color-secondary)_/_0.1)] flex items-center justify-center text-[hsl(var(--color-secondary))] shrink-0 group-hover:bg-[hsl(var(--color-secondary)_/_0.15)] transition-colors">
                                        <item.icon className="w-4 h-4" />
                                    </div>
                                    <div className="min-w-0">
                                        <h3 className="text-sm font-semibold text-foreground">{item.title || 'Expertise'}</h3>
                                        <p className="text-xs text-muted-foreground leading-relaxed mt-1">{item.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </BlurFade>
            </div>
        </div>
    )
}

export default About
