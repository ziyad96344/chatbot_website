import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const painPoints = [
    {
        title: 'Missed Leads',
        description: '70% of website visitors leave without taking any action or leaving contact info.',
        metric: '70%',
        color: 'from-orange-500/20 to-red-500/5',
        icon: (
            <svg className="w-6 h-6 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
        )
    },
    {
        title: 'Slow Replies',
        description: 'Customers message on WhatsApp, but wait hours for a simple response.',
        metric: 'Hours',
        color: 'from-amber-500/20 to-orange-500/5',
        icon: (
            <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        )
    },
    {
        title: 'No 24/7 Availability',
        description: 'Your business stops generating leads the moment your team goes to sleep.',
        metric: '0',
        color: 'from-rose-500/20 to-pink-500/5',
        icon: (
            <svg className="w-6 h-6 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
        )
    },
    {
        title: 'Lost Queries',
        description: 'Visitors leave your site because they couldn\'t find the answer instantly.',
        metric: 'Bounce',
        color: 'from-red-500/20 to-rose-500/5',
        icon: (
            <svg className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
            </svg>
        )
    }
];

const PainSection: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Section entrance
            gsap.fromTo(sectionRef.current,
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 80%",
                    },
                }
            );

            // Grid items stagger
            if (gridRef.current) {
                gsap.fromTo(gridRef.current.children,
                    { opacity: 0, y: 30 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        stagger: 0.15,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: gridRef.current,
                            start: "top 85%",
                        },
                    }
                );
            }
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="min-h-screen py-20 px-6 md:px-12 bg-[#030303] relative overflow-hidden flex flex-col items-center justify-center">
            {/* Ambient background glow for 'Danger/Pain' */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-red-900/10 blur-[150px] rounded-[100%] pointer-events-none" />

            <div className="max-w-4xl w-full relative z-10 text-center mb-16 mx-auto px-4">
                <span className="text-red-500/90 font-mono text-[11px] md:text-sm tracking-[0.3em] uppercase mb-4 block font-bold">
                    The Reality Outline
                </span>
                <h2 
                    className="text-4xl md:text-5xl lg:text-5xl font-black uppercase tracking-tighter mb-4 leading-[1.1]"
                    style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
                >
                    Your Website Is <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400">Losing Customers</span><br />Every Single Day.
                </h2>
                <p className="text-white/70 max-w-[800px] mx-auto text-base md:text-lg font-light leading-relaxed">
                    Traffic is expensive. But what happens when visitors actually land on your site? Most of them leave without you ever knowing who they were.
                </p>
            </div>

            <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4 md:gap-5 max-w-7xl w-full relative z-10 mx-auto px-4">
                {painPoints.map((pain, idx) => (
                    <div
                        key={idx}
                        className="group relative bg-[#130b0b] border border-red-500/20 shadow-[0_0_30px_rgba(239,68,68,0.05)] rounded-2xl p-6 lg:p-6 xl:p-8 overflow-hidden hover:border-red-500/50 hover:shadow-[0_0_50px_rgba(239,68,68,0.15)] transition-all duration-500 flex flex-col items-start"
                    >
                        {/* Hover Gradient Background */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${pain.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />

                        <div className="flex flex-col relative z-10 h-full w-full">
                            <div className="w-14 h-14 rounded-2xl bg-red-500/20 border border-red-500/30 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-red-500/30 transition-all duration-300">
                                {pain.icon}
                            </div>
                            <h3 
                                className="text-lg font-bold text-white mb-2 tracking-tight"
                                style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
                            >
                                {pain.title}
                            </h3>
                            <p className="text-white/80 text-sm leading-relaxed font-light mb-2 relative z-10">
                                {pain.description}
                            </p>
                            
                            {/* Faded Background Metric */}
                            <div className="absolute right-0 top-0 text-3xl lg:text-3xl xl:text-4xl font-black text-red-500/[0.08] group-hover:text-red-500/[0.15] transition-colors duration-500 pointer-events-none select-none z-0">
                                {pain.metric}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
            <div className="mt-16 text-center w-full relative z-10">
                <div className="inline-flex items-center justify-center space-x-2 bg-red-500/10 border border-red-500/20 rounded-full px-6 py-3">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                    <span className="text-red-400 text-sm font-medium tracking-wide">Are you leaking revenue right now?</span>
                </div>
            </div>
        </section>
    );
};

export default PainSection;
