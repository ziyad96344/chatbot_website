import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const securityFeatures = [
    {
        title: "End-to-End Encryption",
        desc: "All data at rest and in transit is encrypted using AES-256 and TLS 1.3 standards. Your business data is completely shielded.",
        icon: (
            <svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
        )
    },
    {
        title: "Strict Tenant Isolation",
        desc: "Your vector database and AI models are physically isolated. Your data is NEVER used to train shared or public models.",
        icon: (
            <svg className="w-5 h-5 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
        )
    },
    {
        title: "Domain Whitelisting",
        desc: "Prevent unauthorized usage. Your bot will only load on the specific domain URLs you explicitly whitelist in your dashboard.",
        icon: (
            <svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
        )
    },
    {
        title: "GDPR & CCPA Ready",
        desc: "Built-in compliance tools including 1-click user data export and deletion requests. We do not store PII longer than requested.",
        icon: (
            <svg className="w-5 h-5 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        )
    }
];

const SecurityTrust: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const boxRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(sectionRef.current,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 75%",
                    }
                }
            );

            if (boxRef.current && textRef.current) {
                gsap.fromTo(boxRef.current.children,
                    { opacity: 0, x: -30 },
                    {
                        opacity: 1,
                        x: 0,
                        stagger: 0.1,
                        duration: 0.8,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: boxRef.current,
                            start: "top 80%",
                        }
                    }
                );

                gsap.fromTo(textRef.current,
                    { opacity: 0, x: 30 },
                    {
                        opacity: 1,
                        x: 0,
                        duration: 0.8,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: textRef.current,
                            start: "top 80%",
                        }
                    }
                );
            }
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="min-h-screen py-20 px-6 md:px-12 bg-[#060806] relative overflow-hidden flex flex-col items-center justify-center border-t border-white/[0.05]">
            
            {/* Dark Security Ambient Lighting */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[600px] bg-emerald-900/15 blur-[150px] rounded-full" />
            </div>

            <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center relative z-10 mx-auto">
                
                {/* Security Features List */}
                <div ref={boxRef} className="order-2 lg:order-1 flex flex-col gap-4">
                    {securityFeatures.map((feat, idx) => (
                        <div key={idx} className="bg-[#060806] border border-emerald-500/25 rounded-xl max-w-lg p-5 flex gap-4 hover:border-emerald-500/50 hover:bg-white/[0.03] transition-all duration-300">
                            <div className="w-10 h-10 shrink-0 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mt-1">
                                {feat.icon}
                            </div>
                            <div>
                                <h4 className="text-white font-bold text-base mb-1 tracking-tight" style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}>{feat.title}</h4>
                                <p className="text-white/60 text-sm leading-relaxed font-light">{feat.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Main Text Content */}
                <div ref={textRef} className="order-1 lg:order-2 text-center lg:text-left">
                    <span className="text-emerald-500/90 font-mono text-[11px] md:text-sm tracking-[0.3em] uppercase mb-4 block font-bold">
                        Enterprise-Grade Security
                    </span>
                    <h2 
                        className="text-4xl md:text-5xl lg:text-5xl font-black uppercase tracking-tighter mb-4 leading-[1.1]"
                        style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
                    >
                        Your Data Is <br className="hidden lg:block"/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">Never Compromised</span>
                    </h2>
                    <p className="text-white/80 max-w-lg mx-auto lg:mx-0 text-base md:text-lg font-light leading-relaxed mb-8">
                        We don't take shortcuts with your business intelligence. Our infrastructure is built from the ground up to meet strict modern security, privacy, and compliance standards.
                    </p>
                    
                    <div className="inline-flex items-center gap-2 px-5 py-3 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-xs font-bold text-emerald-500 uppercase tracking-widest">
                       <span className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center mr-1 shadow-[0_0_15px_rgba(16,185,129,0.4)]">
                           <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                           </svg>
                       </span>
                       Bank-Level Security Included
                    </div>
                </div>

            </div>
        </section>
    );
};

export default SecurityTrust;
