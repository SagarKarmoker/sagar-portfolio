import React, { useState, useRef } from 'react'
import { BlurFade } from '@/components/ui/blur-fade'
import { MagicCard } from '@/components/ui/magic-card'
import { AnimatedGradientText } from '@/components/ui/animated-gradient-text'
import { Confetti } from '@/components/ui/confetti'
import { Button } from '@/components/ui/button'
import { MessageCircle, ArrowUpRight, Mail } from 'lucide-react'
import Link from 'next/link'
import { getIcon } from '@/lib/icons'

function ContactIcon({ icon: Icon, className }) {
    return <Icon className={className} />
}

export default function Contact({ methods }) {
    const contactMethods = (methods || []).map(method => ({
        ...method,
        icon: getIcon(method.icon)
    }));

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    });

    const [showConfetti, setShowConfetti] = useState(false);
    const confettiRef = useRef(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setShowConfetti(true);
        if (confettiRef.current) confettiRef.current.fire();

        const { firstName, lastName, email, message } = formData;
        const subject = `Portfolio Contact from ${firstName} ${lastName}`;
        const body = `Name: ${firstName} ${lastName}\nEmail: ${email}\n\nMessage:\n${message}`;
        const mailtoLink = `mailto:sagarkarmoker.official@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        setTimeout(() => window.open(mailtoLink), 500);

        setFormData({ firstName: '', lastName: '', email: '', message: '' });
    };

    return (
        <div className="py-12 sm:py-16 lg:py-20">
            {showConfetti && (
                <Confetti
                    ref={confettiRef}
                    className="fixed inset-0 w-full h-full pointer-events-none z-[9999]"
                    options={{
                        particleCount: 150,
                        spread: 70,
                        origin: { y: 0.6 },
                        colors: ['#c91b68', '#809fff', '#0d0f12', '#c7cacc']
                    }}
                    manualstart
                />
            )}

            <BlurFade delay={0.1} duration={0.6} offset={8}>
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[hsl(var(--color-secondary)_/_0.1)] border border-[hsl(var(--color-secondary)_/_0.2)] text-[hsl(var(--color-secondary))] text-xs font-mono uppercase tracking-wider mb-6">
                        <Mail className="w-3.5 h-3.5" />
                        04 · Connect
                    </div>
                    <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
                        Get in{' '}
                        <AnimatedGradientText
                            colorFrom="hsl(335 76% 45%)"
                            colorTo="hsl(224 100% 75%)"
                            speed={1.5}
                            className="text-4xl sm:text-5xl font-bold"
                        >
                            Touch
                        </AnimatedGradientText>
                    </h2>
                    <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        Open to discussing research collaborations, engineering opportunities, or just talking tech.
                    </p>
                </div>
            </BlurFade>

            <div className="max-w-5xl mx-auto">
                <div className="grid lg:grid-cols-5 gap-8 items-stretch">
                    {/* Contact Methods — 2/5 */}
                    <div className="lg:col-span-2 space-y-4 order-2 lg:order-1">
                        {contactMethods.map((method, index) => (
                            <BlurFade key={index} delay={0.2 + index * 0.1} duration={0.5} offset={8}>
                                <Link href={method.link} target="_blank" rel="noopener noreferrer" className="block group">
                                    <MagicCard
                                        className="rounded-xl"
                                        gradientColor="hsl(335 76% 45% / 0.08)"
                                        gradientFrom="hsl(335 76% 45% / 0.04)"
                                        gradientTo="hsl(224 100% 75% / 0.04)"
                                        gradientOpacity={0.4}
                                    >
                                        <div className="p-5 relative z-40">
                                            <div className="flex items-center gap-4">
                                                <div className={`w-12 h-12 rounded-xl ${method.bgColor} flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300`}>
                                                    <ContactIcon icon={method.icon} className={`w-5 h-5 ${method.color}`} />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <h4 className="text-sm font-semibold text-foreground">{method.title}</h4>
                                                    <p className="text-xs text-muted-foreground mt-0.5">{method.description}</p>
                                                </div>
                                                <ArrowUpRight className="w-4 h-4 text-muted-foreground/40 group-hover:text-[hsl(var(--color-secondary))] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 flex-shrink-0" />
                                            </div>
                                        </div>
                                    </MagicCard>
                                </Link>
                            </BlurFade>
                        ))}
                    </div>

                    {/* Form — 3/5 */}
                    <BlurFade delay={0.3} duration={0.6} offset={8} className="lg:col-span-3 order-1 lg:order-2">
                        <MagicCard
                            className="rounded-2xl h-full"
                            gradientColor="hsl(335 76% 45% / 0.1)"
                            gradientFrom="hsl(335 76% 45% / 0.05)"
                            gradientTo="hsl(224 100% 75% / 0.03)"
                            gradientOpacity={0.5}
                        >
                            <div className="p-6 sm:p-8 relative z-40">
                                <h3 className="text-xl font-semibold text-foreground mb-6">
                                    Send a message
                                </h3>
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        <div>
                                            <input
                                                type="text"
                                                name="firstName"
                                                value={formData.firstName}
                                                onChange={handleInputChange}
                                                required
                                                placeholder="First name"
                                                className="w-full px-4 py-3 rounded-xl bg-[hsl(var(--muted))] border border-border text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--color-secondary)_/_0.3)] focus:border-transparent transition-all duration-300 text-sm"
                                            />
                                        </div>
                                        <div>
                                            <input
                                                type="text"
                                                name="lastName"
                                                value={formData.lastName}
                                                onChange={handleInputChange}
                                                required
                                                placeholder="Last name"
                                                className="w-full px-4 py-3 rounded-xl bg-[hsl(var(--muted))] border border-border text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--color-secondary)_/_0.3)] focus:border-transparent transition-all duration-300 text-sm"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                            placeholder="your@email.com"
                                            className="w-full px-4 py-3 rounded-xl bg-[hsl(var(--muted))] border border-border text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--color-secondary)_/_0.3)] focus:border-transparent transition-all duration-300 text-sm"
                                        />
                                    </div>
                                    <div>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            required
                                            rows={5}
                                            placeholder="Tell me about your project or research..."
                                            className="w-full px-4 py-3 rounded-xl bg-[hsl(var(--muted))] border border-border text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--color-secondary)_/_0.3)] focus:border-transparent transition-all duration-300 resize-none text-sm"
                                        />
                                    </div>
                                    <Button
                                        type="submit"
                                        className="w-full bg-gradient-to-r from-[hsl(335_76%_45%)] to-[hsl(224_100%_75%)] hover:from-[hsl(224_100%_75%)] hover:to-[hsl(335_76%_45%)] text-white font-semibold py-3.5 rounded-xl transition-all duration-300 transform hover:-translate-y-0.5 text-sm shadow-lg shadow-[hsl(335_76%_45%_/_0.2)]"
                                    >
                                        <MessageCircle className="w-4 h-4 mr-2" />
                                        Send Message
                                    </Button>
                                </form>
                            </div>
                        </MagicCard>
                    </BlurFade>
                </div>
            </div>
        </div>
    )
}
