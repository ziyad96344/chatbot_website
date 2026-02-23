import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ProcessShowcase: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const step1Ref = useRef<HTMLDivElement>(null);
    const step2Ref = useRef<HTMLDivElement>(null);
    const step3Ref = useRef<HTMLDivElement>(null);
    const lineRef = useRef<HTMLDivElement>(null);

    const [activeStep, setActiveStep] = useState(0);

    // Auto-cycle through steps
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveStep(prev => (prev + 1) % 3);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    // Entry animations
    useEffect(() => {
        const ctx = gsap.context(() => {
            if (!sectionRef.current) return;

            // Container fade in
            gsap.fromTo(containerRef.current,
                { y: 80, opacity: 0 },
                {
                    y: 0, opacity: 1, duration: 1.2, ease: "expo.out",
                    scrollTrigger: { trigger: sectionRef.current, start: "top 70%", toggleActions: "play none none reverse" }
                }
            );

            // Progress line
            gsap.fromTo(lineRef.current,
                { scaleX: 0 },
                {
                    scaleX: 1, duration: 1.5, ease: "power2.inOut",
                    scrollTrigger: { trigger: sectionRef.current, start: "top 60%", toggleActions: "play none none reverse" }
                }
            );

            // Steps stagger
            const steps = [step1Ref.current, step2Ref.current, step3Ref.current];
            gsap.fromTo(steps.filter(Boolean),
                { y: 50, opacity: 0 },
                {
                    y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power3.out",
                    scrollTrigger: { trigger: sectionRef.current, start: "top 55%", toggleActions: "play none none reverse" }
                }
            );
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="relative min-h-screen w-full bg-[#050505] py-24 px-4 overflow-hidden flex items-center">
            {/* Grain texture */}
            <div className="absolute inset-0 opacity-[0.025]" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`
            }} />

            {/* Purple glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] rounded-full blur-[200px] opacity-[0.05]"
                style={{ background: 'radial-gradient(ellipse, rgba(139,92,246,1) 0%, transparent 70%)' }} />

            {/* Vignette */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#050505_75%)]" />

            <div ref={containerRef} className="relative max-w-5xl mx-auto w-full">
                {/* Header */}
                <div className="text-center mb-16">
                    <p className="text-[10px] uppercase tracking-[0.4em] text-emerald-400/50 mb-4">The Process</p>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                        Three Steps to Intelligence<span className="text-emerald-400">.</span>
                    </h2>
                    <p className="text-white/40 text-sm md:text-base max-w-lg mx-auto">
                        From your website to a fully trained AI assistant, powered by advanced neural networks.
                    </p>
                </div>

                {/* Steps Container */}
                <div className="relative">
                    {/* Connection Line */}
                    <div className="absolute top-[80px] left-[16%] right-[16%] h-[2px] bg-white/[0.05] hidden md:block">
                        <div ref={lineRef} className="h-full bg-gradient-to-r from-emerald-500/60 via-purple-500/40 to-emerald-500/60"
                            style={{ transformOrigin: 'left' }} />
                    </div>

                    {/* Steps Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">

                        {/* Step 1: Share URL */}
                        <div ref={step1Ref} className={`relative group transition-all duration-500 ${activeStep === 0 ? 'scale-105' : 'scale-100 opacity-70'}`}>
                            <div className="text-center">
                                {/* Icon Container */}
                                <div className={`relative w-40 h-40 mx-auto mb-6 rounded-full transition-all duration-500 ${activeStep === 0 ? 'bg-emerald-500/[0.08]' : 'bg-white/[0.02]'
                                    }`} style={{
                                        border: activeStep === 0 ? '1px solid rgba(16,185,129,0.3)' : '1px solid rgba(255,255,255,0.05)',
                                        boxShadow: activeStep === 0 ? '0 0 60px rgba(16,185,129,0.15)' : 'none'
                                    }}>
                                    {/* Pulsing ring */}
                                    {activeStep === 0 && (
                                        <div className="absolute inset-0 rounded-full border border-emerald-400/40 animate-ping" style={{ animationDuration: '2s' }} />
                                    )}

                                    {/* Icon */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <svg className={`w-12 h-12 transition-colors duration-500 ${activeStep === 0 ? 'text-emerald-400' : 'text-white/30'}`}
                                            fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                                        </svg>
                                    </div>

                                    {/* Step number */}
                                    <div className={`absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-500 ${activeStep === 0 ? 'bg-emerald-500 text-black' : 'bg-white/10 text-white/50'
                                        }`}>01</div>
                                </div>

                                <h3 className={`text-lg font-semibold mb-2 transition-colors duration-500 ${activeStep === 0 ? 'text-white' : 'text-white/60'}`}>
                                    Share Your URL
                                </h3>
                                <p className="text-white/40 text-sm max-w-[200px] mx-auto">
                                    Simply paste your website link. No coding required.
                                </p>
                            </div>
                        </div>

                        {/* Step 2: AI Trains */}
                        <div ref={step2Ref} className={`relative group transition-all duration-500 ${activeStep === 1 ? 'scale-105' : 'scale-100 opacity-70'}`}>
                            <div className="text-center">
                                <div className={`relative w-40 h-40 mx-auto mb-6 rounded-full transition-all duration-500 ${activeStep === 1 ? 'bg-purple-500/[0.08]' : 'bg-white/[0.02]'
                                    }`} style={{
                                        border: activeStep === 1 ? '1px solid rgba(139,92,246,0.3)' : '1px solid rgba(255,255,255,0.05)',
                                        boxShadow: activeStep === 1 ? '0 0 60px rgba(139,92,246,0.15)' : 'none'
                                    }}>
                                    {/* Spinning ring */}
                                    {activeStep === 1 && (
                                        <div className="absolute inset-2 rounded-full border-2 border-transparent border-t-purple-400/60 animate-spin" style={{ animationDuration: '2s' }} />
                                    )}

                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <svg className={`w-12 h-12 transition-colors duration-500 ${activeStep === 1 ? 'text-purple-400' : 'text-white/30'}`}
                                            fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                        </svg>
                                    </div>

                                    <div className={`absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-500 ${activeStep === 1 ? 'bg-purple-500 text-white' : 'bg-white/10 text-white/50'
                                        }`}>02</div>
                                </div>

                                <h3 className={`text-lg font-semibold mb-2 transition-colors duration-500 ${activeStep === 1 ? 'text-white' : 'text-white/60'}`}>
                                    AI Learns & Trains
                                </h3>
                                <p className="text-white/40 text-sm max-w-[200px] mx-auto">
                                    Neural networks scan and understand your entire content.
                                </p>
                            </div>
                        </div>

                        {/* Step 3: Go Live */}
                        <div ref={step3Ref} className={`relative group transition-all duration-500 ${activeStep === 2 ? 'scale-105' : 'scale-100 opacity-70'}`}>
                            <div className="text-center">
                                <div className={`relative w-40 h-40 mx-auto mb-6 rounded-full transition-all duration-500 ${activeStep === 2 ? 'bg-emerald-500/[0.08]' : 'bg-white/[0.02]'
                                    }`} style={{
                                        border: activeStep === 2 ? '1px solid rgba(16,185,129,0.3)' : '1px solid rgba(255,255,255,0.05)',
                                        boxShadow: activeStep === 2 ? '0 0 60px rgba(16,185,129,0.15)' : 'none'
                                    }}>
                                    {/* Glow pulse */}
                                    {activeStep === 2 && (
                                        <div className="absolute inset-0 rounded-full bg-emerald-400/10 animate-pulse" />
                                    )}

                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <svg className={`w-12 h-12 transition-colors duration-500 ${activeStep === 2 ? 'text-emerald-400' : 'text-white/30'}`}
                                            fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>

                                    <div className={`absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-500 ${activeStep === 2 ? 'bg-emerald-500 text-black' : 'bg-white/10 text-white/50'
                                        }`}>03</div>
                                </div>

                                <h3 className={`text-lg font-semibold mb-2 transition-colors duration-500 ${activeStep === 2 ? 'text-white' : 'text-white/60'}`}>
                                    Go Live Instantly
                                </h3>
                                <p className="text-white/40 text-sm max-w-[200px] mx-auto">
                                    Your AI assistant goes online 24/7, handling queries.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Step Indicators (Mobile) */}
                    <div className="flex justify-center gap-3 mt-10 md:hidden">
                        {[0, 1, 2].map((i) => (
                            <button key={i} onClick={() => setActiveStep(i)}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${activeStep === i ? 'bg-emerald-400 w-6' : 'bg-white/20'
                                    }`} />
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center mt-16">
                    <a href="#contact" className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-500 rounded-xl text-white font-semibold text-sm uppercase tracking-wider relative overflow-hidden group transition-transform hover:scale-[1.02]"
                        style={{ boxShadow: '0 0 30px rgba(16,185,129,0.25)' }}>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                        <span className="relative z-10">Start Building</span>
                        <svg className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                    <p className="text-white/25 text-[11px] mt-4">No credit card required • Setup in 5 minutes</p>
                </div>
            </div>
        </section>
    );
};

export default ProcessShowcase;
