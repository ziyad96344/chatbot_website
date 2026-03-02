import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const clients = [
    {
        name: 'Shopify Store A',
        industry: 'E-commerce',
        logo: (
            <svg className="w-8 h-8 md:w-10 md:h-10 text-orange-400 group-hover:text-red-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
        )
    },
    {
        name: 'CarePlus Dental',
        industry: 'Clinics & Healthcare',
        logo: (
            <svg className="w-8 h-8 md:w-10 md:h-10 text-orange-400 group-hover:text-red-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
        )
    },
    {
        name: 'Apex Academy',
        industry: 'Coaching Institutes',
        logo: (
            <svg className="w-8 h-8 md:w-10 md:h-10 text-orange-400 group-hover:text-red-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14v7m0-7l9-5-9-5-9 5 9 5z" />
            </svg>
        )
    },
    {
        name: 'GrowthGen.io',
        industry: 'Marketing Agencies',
        logo: (
            <svg className="w-8 h-8 md:w-10 md:h-10 text-orange-400 group-hover:text-red-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
        )
    },
    {
        name: 'Luxe Resorts',
        industry: 'Hotels & Resorts',
        logo: (
            <svg className="w-8 h-8 md:w-10 md:h-10 text-orange-400 group-hover:text-red-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
        )
    },
    {
        name: 'Elite Legal',
        industry: 'Law Firms',
        logo: (
            <svg className="w-8 h-8 md:w-10 md:h-10 text-orange-400 group-hover:text-red-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
            </svg>
        )
    },
    {
        name: 'Urban Estates',
        industry: 'Real Estate',
        logo: (
            <svg className="w-8 h-8 md:w-10 md:h-10 text-orange-400 group-hover:text-red-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
        )
    },
    {
        name: 'SyncSaaS Inc.',
        industry: 'Technology',
        logo: (
            <svg className="w-8 h-8 md:w-10 md:h-10 text-orange-400 group-hover:text-red-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
            </svg>
        )
    }
];

const UseCasesValidation: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const marqueeRef1 = useRef<HTMLDivElement>(null);
    const marqueeRef2 = useRef<HTMLDivElement>(null);

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
                        start: "top 80%",
                    }
                }
            );

            // Container fade animation
            if (marqueeRef1.current) {
                gsap.fromTo(marqueeRef1.current,
                    { opacity: 0, y: 30 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1.2,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: marqueeRef1.current,
                            start: "top 85%",
                        }
                    }
                );
            }
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    // Removed marquee arrays as we will render a static grid

    return (
        <section ref={sectionRef} className="py-12 bg-gradient-to-br from-[#1c0808] via-[#050101] to-[#030303] relative overflow-hidden flex flex-col items-center justify-center border-y border-white/[0.05]">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[500px] bg-red-900/10 blur-[150px] rounded-[100%] pointer-events-none" />
            </div>

            <div className="max-w-4xl w-full relative z-10 text-center mb-16 mx-auto px-4">
                <span className="text-red-500/90 font-mono text-[11px] md:text-sm tracking-[0.3em] uppercase mb-4 block font-bold">
                    Social Validation
                </span>
                <h2 
                    className="text-4xl md:text-5xl lg:text-5xl font-black uppercase tracking-tighter mb-4 leading-[1.1]"
                    style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
                >
                    Trusted By <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400">Modern Businesses</span>
                </h2>
                <p className="text-white/70 max-w-[800px] mx-auto text-base md:text-lg font-light leading-relaxed">
                    From local clinics to enterprise e-commerce, XotBot adapts to your industry's specific needs instantly.
                </p>
            </div>

            <div ref={marqueeRef1} className="w-full relative z-10 overflow-hidden mx-auto py-4">
                <div className="flex w-max gap-4 marquee-container px-4">
                {[...clients, ...clients].map((client, idx) => (
                    <div 
                        key={idx} 
                        className="w-[280px] md:w-[320px] shrink-0 group relative bg-[#030303] border border-orange-500/20 rounded-[20px] p-6 lg:p-7 min-h-[140px] md:min-h-[160px] shadow-[0_4px_30px_rgba(249,115,22,0.05)] hover:border-orange-500/50 hover:shadow-[0_0_40px_rgba(249,115,22,0.1)] transition-all duration-500 flex flex-col items-start text-left overflow-hidden justify-center hover:-translate-y-1"
                    >
                        {/* Soft Top Glow that sweeps on hover */}
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                        
                        <div className="flex items-center gap-4 relative z-10 w-full">
                            <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-[#0a0a0a] border border-white/10 flex items-center justify-center group-hover:bg-red-500/10 group-hover:border-red-500/20 transition-all duration-300 relative shrink-0">
                                <span className="relative z-10">{client.logo}</span>
                            </div>
                            <div className="flex-1">
                                <h3 
                                    className="text-lg md:text-xl font-bold text-white/90 tracking-tight leading-tight mb-1"
                                    style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
                                >
                                    {client.name}
                                </h3>
                                {/* Small subtle industry badge */}
                                <div className="flex items-center gap-1.5">
                                    <span className="text-[10px] uppercase tracking-wider text-white/40 font-mono bg-white/5 py-0.5 px-2 rounded-full border border-white/10">{client.industry}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                </div>
            </div>

            <style>{`
                @keyframes marquee-scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(calc(-50% - 0.5rem)); }
                }
                .marquee-container {
                    animation: marquee-scroll 45s linear infinite;
                }
                .marquee-container:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </section>
    );
};

export default UseCasesValidation;
