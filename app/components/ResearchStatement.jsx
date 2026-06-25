import React from 'react'
import { BlurFade } from '@/components/ui/blur-fade'
import { MagicCard } from '@/components/ui/magic-card'
import { Badge } from '@/components/ui/badge'
import { Target, Lightbulb, GraduationCap, ArrowRight } from 'lucide-react'

export default function ResearchStatement() {
    return (
        <div className="py-12 sm:py-16 lg:py-20">
            <BlurFade delay={0.1} duration={0.6} offset={8}>
                <div className="section-academic">
                    <h2>
                        Research{' '}
                        <span className="text-[hsl(var(--color-accent))]">Statement</span>
                    </h2>
                    <p className="subtitle">
                        My research interests at the intersection of blockchain scalability, distributed systems, and decentralized infrastructure — and why I&apos;m pursuing a PhD.
                    </p>
                </div>
            </BlurFade>

            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
                {/* Research Interests */}
                <BlurFade delay={0.2} duration={0.6} offset={12}>
                    <MagicCard
                        className="rounded-2xl p-6 sm:p-8 h-full"
                        gradientColor="hsl(24 55% 54% / 0.15)"
                        gradientFrom="hsl(24 55% 54% / 0.08)"
                        gradientTo="hsl(180 55% 25% / 0.05)"
                        gradientOpacity={0.8}
                    >
                        <div className="flex items-center gap-3 mb-5">
                            <div className="w-8 h-8 rounded-lg bg-[hsl(var(--color-accent)_/_0.1)] flex items-center justify-center text-[hsl(var(--color-accent))]">
                                <Lightbulb className="w-4 h-4" />
                            </div>
                            <h3 className="text-lg font-serif text-foreground">Research Interests</h3>
                        </div>

                        <div className="space-y-4 text-foreground/80 leading-relaxed text-sm sm:text-base">
                            <p>
                                My research lies at the intersection of <span className="text-[hsl(var(--color-accent))] font-medium">blockchain technology</span>,
                                {' '}<span className="text-[hsl(var(--color-secondary))] font-medium">distributed systems</span>, and
                                {' '}<span className="text-[hsl(var(--color-accent))] font-medium">backend infrastructure</span>.
                                I am fascinated by the challenges of building scalable, secure, and efficient decentralized systems
                                that can handle real-world enterprise workloads.
                            </p>

                            <p>
                                During my time as a Research Assistant at BRAC University and my industry experience at Core Devs Ltd and AHOM Limited,
                                I have developed deep expertise in blockchain consensus mechanisms, smart contract security, and multi-chain wallet management systems.
                                My work has focused on practical applications of blockchain in supply chain security, identity verification (eKYC), and decentralized finance (DeFi) infrastructure.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-2 mt-6">
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
                                    className="bg-[hsl(var(--color-accent)_/_0.08)] text-[hsl(var(--color-accent))] hover:bg-[hsl(var(--color-accent)_/_0.15)] border-0 px-3 py-1.5 text-xs"
                                >
                                    {interest}
                                </Badge>
                            ))}
                        </div>
                    </MagicCard>
                </BlurFade>

                {/* PhD Goals */}
                <BlurFade delay={0.35} duration={0.6} offset={12}>
                    <MagicCard
                        className="rounded-2xl p-6 sm:p-8 h-full"
                        gradientColor="hsl(180 55% 25% / 0.15)"
                        gradientFrom="hsl(180 55% 25% / 0.08)"
                        gradientTo="hsl(24 55% 54% / 0.05)"
                        gradientOpacity={0.8}
                    >
                        <div className="flex items-center gap-3 mb-5">
                            <div className="w-8 h-8 rounded-lg bg-[hsl(var(--color-secondary)_/_0.1)] flex items-center justify-center text-[hsl(var(--color-secondary))]">
                                <Target className="w-4 h-4" />
                            </div>
                            <h3 className="text-lg font-serif text-foreground">PhD Aspirations</h3>
                        </div>

                        <div className="space-y-4 text-foreground/80 leading-relaxed text-sm sm:text-base">
                            <p>
                                I am seeking PhD opportunities in Computer Science to deepen my understanding of blockchain scalability and contribute
                                to solving fundamental challenges in distributed systems. My goal is to bridge the gap between theoretical research
                                and practical implementation, developing protocols and architectures that can power the next generation of decentralized applications.
                            </p>

                            <p>
                                Specifically, I aim to explore novel consensus mechanisms that balance security, decentralization, and scalability—
                                the classic blockchain trilemma. My industry experience building wallet management systems across 101+ blockchain networks
                                has given me unique insights into the practical limitations of current protocols and motivated me to pursue research-driven solutions.
                            </p>
                        </div>

                        <div className="mt-6 p-4 rounded-xl bg-[hsl(var(--color-accent)_/_0.05)] border border-[hsl(var(--color-accent)_/_0.15)]">
                            <div className="flex items-center gap-2 mb-3">
                                <GraduationCap className="w-4 h-4 text-[hsl(var(--color-accent))]" />
                                <span className="text-sm font-medium text-foreground">Research Direction</span>
                            </div>
                            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                                Layer 2 scaling solutions, cross-chain interoperability protocols,
                                and formal verification methods for smart contracts. These areas hold the key to mainstream blockchain adoption.
                            </p>
                        </div>
                    </MagicCard>
                </BlurFade>
            </div>

            {/* Collaboration CTA */}
            <BlurFade delay={0.5} duration={0.6} offset={12}>
                <div className="mt-12 sm:mt-16">
                    <div className="relative bg-[hsl(var(--color-dark))] rounded-2xl p-6 sm:p-8 text-white overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(180_55%_25%_/_0.2)] to-[hsl(24_55%_54%_/_0.1)]" />
                        <div className="relative">
                            <h3 className="text-xl sm:text-2xl font-serif mb-3">
                                Seeking PhD Position &amp; Research Collaboration
                            </h3>
                            <p className="text-sm sm:text-base text-white/70 max-w-2xl mb-6 leading-relaxed">
                                If your research aligns with blockchain scalability, distributed systems, or decentralized infrastructure,
                                I would love to discuss potential opportunities.
                            </p>
                            <a
                                href="mailto:sagarkarmoker.official@gmail.com?subject=PhD%20Opportunity%20-%20Collaboration%20Inquiry"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-sm border border-white/20 hover:bg-white/20 transition-all duration-300 group"
                            >
                                <span>Discuss Opportunities</span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    </div>
                </div>
            </BlurFade>
        </div>
    )
}
