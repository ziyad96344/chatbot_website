import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const steps = [
    {
        number: '01',
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
        ),
        title: 'Share Your URL',
        description: 'Just paste your website link. No code, no complex setup.'
    },
    {
        number: '02',
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
        title: 'AI Scans Everything',
        description: 'Our AI reads your entire site, learning your brand voice and content.'
    },
    {
        number: '03',
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
        ),
        title: 'Bot Trains Itself',
        description: 'Your custom AI bot learns and adapts to answer like a human expert.'
    },
    {
        number: '04',
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
        title: 'Go Live Instantly',
        description: 'One embed code. Your AI assistant is live 24/7, handling queries.'
    }
];

const HowItWorks: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const headingRef = useRef<HTMLDivElement>(null);
    const stepsRef = useRef<HTMLDivElement>(null);
    const lineRef = useRef<HTMLDivElement>(null);
    const ctaRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            if (!sectionRef.current) return;

            // Heading animation
            gsap.fromTo(headingRef.current,
                { y: 60, opacity: 0 },
                {
                    y: 0, opacity: 1, duration: 1, ease: "expo.out",
                    scrollTrigger: { trigger: sectionRef.current, start: "top 75%", toggleActions: "play none none reverse" }
                }
            );

            // Progress line animation
            gsap.fromTo(lineRef.current,
                { scaleX: 0, transformOrigin: 'left' },
                {
                    scaleX: 1, duration: 1.5, ease: "power2.inOut",
                    scrollTrigger: { trigger: stepsRef.current, start: "top 60%", toggleActions: "play none none reverse" }
                }
            );

            // Steps stagger
            const stepCards = stepsRef.current?.querySelectorAll('.step-card');
            if (stepCards) {
                gsap.fromTo(stepCards,
                    { y: 50, opacity: 0, scale: 0.95 },
                    {
                        y: 0, opacity: 1, scale: 1, duration: 0.8, stagger: 0.15, ease: "power3.out",
                        scrollTrigger: { trigger: stepsRef.current, start: "top 65%", toggleActions: "play none none reverse" }
                    }
                );
            }

            // CTA animation
            gsap.fromTo(ctaRef.current,
                { y: 40, opacity: 0 },
                {
                    y: 0, opacity: 1, duration: 0.8, ease: "power3.out",
                    scrollTrigger: { trigger: ctaRef.current, start: "top 85%", toggleActions: "play none none reverse" }
                }
            );

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="relative min-h-screen w-full bg-[#030303] py-24 px-4 overflow-hidden flex flex-col items-center justify-center border-b border-white/[0.05]">
            {/* Background Ambience */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[900px] h-[600px] bg-red-900/10 blur-[150px] rounded-[100%] pointer-events-none" />

            {/* Dark vignette */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#030303_85%)]" />

            <div className="relative max-w-6xl mx-auto">
                {/* Heading */}
                <div ref={headingRef} className="text-center mb-16 mx-auto px-4">
                    <span className="text-red-500/90 font-mono text-[11px] md:text-sm tracking-[0.4em] uppercase mb-4 block font-bold">Process</span>
                    <h2 
                        className="text-4xl md:text-5xl lg:text-5xl font-black uppercase tracking-tighter mb-4 leading-[1.1]"
                        style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
                    >
                        The <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400">Path To Simplicity</span>
                    </h2>
                    <p className="text-white/70 max-w-[800px] mx-auto text-base md:text-lg font-light leading-relaxed">
                        From your website to a fully trained AI assistant in minutes.
                    </p>
                </div>

                {/* Steps Container */}
                <div ref={stepsRef} className="relative">
                    {/* Connection Line (Desktop) */}
                    <div className="hidden md:block absolute top-[60px] left-[12%] right-[12%] h-[1px] bg-white/[0.06]">
                        <div ref={lineRef} className="h-full bg-gradient-to-r from-red-500/50 via-orange-400/30 to-red-500/50" style={{ transform: 'scaleX(0)' }} />
                    </div>

                    {/* Steps Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-4">
                        {steps.map((step, index) => (
                            <div key={index} className="step-card relative group">
                                {/* Step Number Circle */}
                                <div className="relative z-10 w-[120px] h-[120px] mx-auto mb-6 rounded-full bg-[#030303] border border-orange-500/20 flex items-center justify-center transition-all duration-500 group-hover:border-orange-500/50"
                                    style={{ boxShadow: '0 0 40px rgba(0,0,0,0.6)' }}>
                                    {/* Glow ring on hover */}
                                    <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                        style={{ boxShadow: '0 0 30px rgba(239,68,68,0.15), inset 0 0 20px rgba(239,68,68,0.05)' }} />

                                    {/* Icon */}
                                    <div className="text-red-500/70 group-hover:text-red-500 transition-colors">
                                        {step.icon}
                                    </div>

                                    {/* Step number badge */}
                                    <div className="absolute -top-1 -right-1 w-8 h-8 rounded-full bg-[#030303] border border-orange-500/30 flex items-center justify-center shadow-lg">
                                        <span className="text-[11px] font-bold text-red-500">{step.number}</span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="text-center px-2">
                                    <h3 
                                        className="text-white font-bold text-lg mb-2 group-hover:text-red-400 transition-colors"
                                        style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
                                    >
                                        {step.title}
                                    </h3>
                                    <p className="text-white/60 text-sm leading-relaxed font-light">
                                        {step.description}
                                    </p>
                                </div>

                                {/* Arrow (Mobile) */}
                                {index < steps.length - 1 && (
                                    <div className="md:hidden flex justify-center my-6">
                                        <svg className="w-5 h-5 text-red-500/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                        </svg>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <div ref={ctaRef} className="mt-16 text-center">
                    <a href="#contact" className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-red-600 to-orange-500 rounded-xl text-white font-bold text-sm uppercase tracking-wider relative overflow-hidden group transition-transform hover:scale-[1.02]"
                        style={{ boxShadow: '0 0 25px rgba(239,68,68,0.2)' }}>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                        <span className="relative z-10">Get Early Access</span>
                        <svg className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                    <p className="text-white/25 text-[11px] mt-4 tracking-wide font-mono uppercase">No credit card required • Setup in 5 minutes</p>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
