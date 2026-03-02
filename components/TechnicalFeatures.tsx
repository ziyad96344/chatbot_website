import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TechFeature = ({ title, desc, icon, colSpan, bgGradient, glowColor }: any) => (
    <div className={`relative group bg-[#0a0a09] border border-white/[0.06] rounded-2xl p-6 ${colSpan} overflow-hidden hover:border-white/20 transition-all duration-500`}>
        {/* Glow Hover */}
        <div className={`absolute inset-0 bg-gradient-to-br ${bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />
        
        {/* Top-right tech accent */}
        <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl ${glowColor} blur-[60px] opacity-20 pointer-events-none group-hover:opacity-40 transition-opacity duration-500`} />

        <div className="relative z-10 h-full flex flex-col justify-between">
            <div className={`w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-300`}>
                {icon}
            </div>
            <div>
                <h3 className="text-white font-bold text-lg mb-2 tracking-tight">{title}</h3>
                <p className="text-white/40 text-sm leading-relaxed font-light">{desc}</p>
            </div>
        </div>
    </div>
);

const TechnicalFeatures: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(sectionRef.current,
                { opacity: 0, y: 40 },
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
                    { scale: 0.95, opacity: 0, y: 20 },
                    {
                        scale: 1,
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
        <section ref={sectionRef} className="min-h-screen py-20 px-6 md:px-12 bg-[#020202] relative overflow-hidden flex flex-col items-center justify-center">
            
            {/* Ambient Background Grid */}
            <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '50px 50px' }}>
                <div className="absolute inset-0 bg-gradient-to-b from-[#020202] via-transparent to-[#020202]" />
            </div>

            <div className="max-w-6xl w-full relative z-10 text-center md:text-left mb-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-end mx-auto">
                <div>
                    <span className="text-blue-400/80 font-mono text-[11px] md:text-xs tracking-[0.3em] uppercase mb-4 block">
                        Engine Architecture
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter mb-6 leading-[1.1]">
                        Advanced Tools for <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Serious Growth</span>
                    </h2>
                </div>
                <div className="text-left md:mb-6">
                    <p className="text-white/40 text-base md:text-xl font-light border-l border-white/10 pl-6 leading-relaxed">
                        Under the hood, XotBot is powered by industry-leading infrastructure designed to scale with your business while maintaining perfect accuracy and speed.
                    </p>
                </div>
            </div>

            {/* Bento Grid layout */}
            <div ref={gridRef} className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 relative z-10 mx-auto">
                
                {/* 1. RAG Architecture (Wide) */}
                <TechFeature 
                    colSpan="col-span-1 md:col-span-2 lg:col-span-2"
                    bgGradient="from-blue-500/10 to-indigo-500/5"
                    glowColor="from-blue-500 to-transparent"
                    title="RAG Architecture (Retrieval-Augmented)"
                    desc="Combines real-time search across your custom database with generative AI, ensuring zero hallucinations and absolute fidelity to your brand guidelines."
                    icon={
                        <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                        </svg>
                    }
                />

                {/* 2. Contextual AI Memory */}
                <TechFeature 
                    colSpan="col-span-1 md:col-span-1 lg:col-span-1"
                    bgGradient="from-purple-500/10 to-fuchsia-500/5"
                    glowColor="from-purple-500 to-transparent"
                    title="Contextual Memory"
                    desc="Remembers users across multiple sessions. Handoffs to humans retain 100% of the conversation history seamlessly."
                    icon={
                        <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                    }
                />

                {/* 3. Multi-language */}
                <TechFeature 
                    colSpan="col-span-1 md:col-span-1 lg:col-span-1"
                    bgGradient="from-cyan-500/10 to-teal-500/5"
                    glowColor="from-cyan-500 to-transparent"
                    title="100+ Languages"
                    desc="Native, flawless translation on the fly. Chat effectively with global customers without training separate linguistic models."
                    icon={
                        <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                        </svg>
                    }
                />

                {/* 4. Voice AI Calling (Wide) */}
                <TechFeature 
                    colSpan="col-span-1 md:col-span-2 lg:col-span-2"
                    bgGradient="from-emerald-500/10 to-green-500/5"
                    glowColor="from-emerald-500 to-transparent"
                    title="Real-Time Voice AI"
                    desc="Powered by Google Cloud TTS models. Let your customers literally call and speak to your knowledge base with sub-second latency."
                    icon={
                        <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                        </svg>
                    }
                />

                {/* 5. API Access */}
                <TechFeature 
                    colSpan="col-span-1 md:col-span-1 lg:col-span-1"
                    bgGradient="from-orange-500/10 to-amber-500/5"
                    glowColor="from-orange-500 to-transparent"
                    title="Headless REST API"
                    desc="Pull XotBot's intelligence directly into your own iOS, Android, or custom apps with our robust developer API."
                    icon={
                        <svg className="w-6 h-6 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                    }
                />

                {/* 6. Lead CRM Dashboard */}
                <TechFeature 
                    colSpan="col-span-1 md:col-span-1 lg:col-span-1"
                    bgGradient="from-rose-500/10 to-pink-500/5"
                    glowColor="from-rose-500 to-transparent"
                    title="Lead CRM Engine"
                    desc="Every captured lead auto-populates in a structured CRM with chat history. Export to CSV or sync via webhooks instantly."
                    icon={
                        <svg className="w-6 h-6 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                    }
                />
            </div>
        </section>
    );
};

export default TechnicalFeatures;
