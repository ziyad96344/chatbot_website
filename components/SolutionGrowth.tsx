import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const solutions = [
    {
        title: '3x More Lead Capture',
        description: 'Instantly collect names, emails, and numbers 24/7 without forms.',
        bg: 'from-emerald-500/20 to-teal-500/5',
        border: 'border-emerald-500/20',
        hoverBorder: 'hover:border-emerald-500/40',
        iconColor: 'bg-emerald-500/10 text-emerald-400',
        icon: (
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
        ),
        colSpan: 'md:col-span-2',
        visual: (
            <div className="mt-3 lg:mt-4 bg-black/40 border border-white/5 rounded-xl p-3 lg:p-4 w-full relative overflow-hidden backdrop-blur-sm">
                <div className="flex justify-between items-end">
                    <div className="flex gap-1.5 items-end h-12 lg:h-14">
                        {[0.3, 0.4, 0.35, 0.5, 0.6, 0.8, 1].map((h, i) => (
                            <div key={i} className="w-3 md:w-5 bg-emerald-500 rounded-t-sm animate-pulse" style={{ height: `${h * 100}%`, animationDelay: `${i * 0.15}s` }} />
                        ))}
                    </div>
                    <div className="text-right">
                        <p className="text-[9px] text-white/50 uppercase tracking-[0.2em] leading-tight mb-1">New Leads</p>
                        <p className="text-2xl lg:text-3xl font-black text-emerald-400">426</p>
                    </div>
                </div>
            </div>
        )
    },
    {
        title: 'Instant 24/7 Replies',
        description: 'Customers get answers in milliseconds. Zero wait time.',
        bg: 'from-green-500/20 to-emerald-500/5',
        border: 'border-green-500/20',
        hoverBorder: 'hover:border-green-500/40',
        iconColor: 'bg-green-500/10 text-green-400',
        icon: (
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
        colSpan: 'md:col-span-1',
        visual: (
            <div className="mt-3 lg:mt-4 bg-black/40 border border-white/5 rounded-xl p-3 w-full h-full min-h-[100px] lg:min-h-[120px] flex items-center justify-center relative overflow-hidden backdrop-blur-sm">
                <div className="absolute inset-0 bg-green-500/5 pulse-bg" />
                <div className="text-center relative z-10">
                    <p className="text-4xl lg:text-5xl font-black text-white/90 font-mono tracking-tighter">0.3<span className="text-xl text-green-400">s</span></p>
                    <p className="text-[9px] uppercase tracking-[0.2em] text-white/50 mt-1">Avg Resp Time</p>
                </div>
            </div>
        )
    },
    {
        title: 'Total Automation',
        description: 'Resolves 80% of support tickets automatically.',
        bg: 'from-cyan-500/20 to-teal-500/5',
        border: 'border-cyan-500/20',
        hoverBorder: 'hover:border-cyan-500/40',
        iconColor: 'bg-cyan-500/10 text-cyan-400',
        icon: (
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        ),
        colSpan: 'md:col-span-1',
        visual: (
           <div className="mt-3 lg:mt-4 flex flex-col gap-2 h-full justify-end">
               <div className="bg-white/[0.03] border border-white/5 rounded-lg p-2.5 w-[85%] backdrop-blur-sm">
                   <div className="w-3/4 h-1.5 bg-white/10 rounded mb-2" />
                   <div className="w-1/2 h-1.5 bg-white/10 rounded" />
               </div>
               <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-lg p-2.5 w-[90%] self-end backdrop-blur-sm">
                   <div className="flex items-center gap-2 mb-2">
                       <div className="w-3.5 h-3.5 rounded-full bg-cyan-400 flex items-center justify-center">
                           <span className="text-[#0a0a0a] text-[7px] font-bold">AI</span>
                       </div>
                       <div className="w-1/2 h-1.5 bg-cyan-400/50 rounded" />
                   </div>
                   <div className="w-full h-1.5 bg-cyan-400/30 rounded" />
               </div>
           </div>
        )
    },
    {
        title: 'Full Business Analytics',
        description: 'Track CSAT, interactions, and conversion rates effortlessly.',
        bg: 'from-blue-500/20 to-indigo-500/5',
        border: 'border-blue-500/20',
        hoverBorder: 'hover:border-blue-500/40',
        iconColor: 'bg-blue-500/10 text-blue-400',
        icon: (
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
            </svg>
        ),
        colSpan: 'md:col-span-2',
        visual: (
            <div className="mt-3 lg:mt-4 grid grid-cols-2 gap-2 lg:gap-3 h-full">
               <div className="bg-black/40 border border-white/5 rounded-xl p-3 flex flex-col justify-center items-center backdrop-blur-sm">
                   <p className="text-xl lg:text-2xl font-black text-white">4.9/5</p>
                   <p className="text-[9px] uppercase tracking-[0.2em] text-white/50 text-center mt-1">CSAT Score</p>
               </div>
               <div className="bg-black/40 border border-white/5 rounded-xl p-3 flex flex-col justify-center items-center backdrop-blur-sm">
                   <p className="text-xl lg:text-2xl font-black text-blue-400">+148%</p>
                   <p className="text-[9px] uppercase tracking-[0.2em] text-white/50 text-center mt-1">Conversions</p>
               </div>
            </div>
        )
    }
];

const SolutionGrowth: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(sectionRef.current,
                { opacity: 0, y: 50 },
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

            if (gridRef.current) {
                gsap.fromTo(gridRef.current.children,
                    { opacity: 0, y: 30 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        stagger: 0.1,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: gridRef.current,
                            start: "top 80%",
                        }
                    }
                );
            }
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="min-h-screen py-20 px-6 md:px-12 bg-[#050505] relative overflow-hidden flex flex-col items-center justify-center">
            {/* Ambient Growth Glow */}
            <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-emerald-500/10 blur-[150px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-blue-500/10 blur-[150px] rounded-full pointer-events-none" />

            <div className="max-w-4xl w-full relative z-10 text-center mb-16 mx-auto px-4">
                <span className="text-emerald-500/90 font-mono text-[11px] md:text-sm tracking-[0.3em] uppercase mb-4 block font-bold">
                    The Solution
                </span>
                <h2 
                    className="text-4xl md:text-5xl lg:text-5xl font-black uppercase tracking-tighter mb-4 leading-[1.1]"
                    style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
                >
                    Turn Visitors Into Customers<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">— Automatically</span>
                </h2>
                <p className="text-white/70 max-w-[800px] mx-auto text-base md:text-lg font-light leading-relaxed">
                    Stop losing money on missed opportunities. Deploy an AI agent that works 24/7, captures leads, and drives exponential revenue growth.
                </p>
            </div>

            <div ref={gridRef} className="max-w-5xl w-full relative z-10 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 mx-auto px-4">
                {solutions.map((item, idx) => (
                    <div 
                        key={idx}
                        className={`group relative bg-[#070b09] border ${item.border} rounded-2xl p-5 lg:p-6 shadow-[0_0_30px_rgba(16,185,129,0.03)] overflow-hidden hover:border-emerald-500/40 hover:shadow-[0_0_50px_rgba(16,185,129,0.1)] transition-all duration-500 ${item.colSpan} flex flex-col h-full`}
                    >
                        {/* Hover Gradient */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${item.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />

                        <div className="relative z-10 flex flex-col md:flex-row items-start gap-4 mb-2">
                            <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center shrink-0 border border-white/10 ${item.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                                {item.icon}
                            </div>
                            <div className="mt-1 md:mt-0">
                                <h3 
                                    className="text-lg md:text-xl font-bold text-white mb-1.5 tracking-tight leading-tight"
                                    style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
                                >
                                    {item.title}
                                </h3>
                                <p className="text-white/70 text-xs md:text-sm font-light leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </div>

                        {/* Visual block attached to bottom */}
                        <div className="relative z-10 mt-auto flex-1 flex flex-col">
                            {item.visual}
                        </div>
                    </div>
                ))}
            </div>
            
            <style>{`
                @keyframes slowPulse {
                    0%, 100% { opacity: 0.3; }
                    50% { opacity: 0.6; }
                }
                .pulse-bg {
                    animation: slowPulse 3s ease-in-out infinite;
                }
            `}</style>
        </section>
    );
};

export default SolutionGrowth;
