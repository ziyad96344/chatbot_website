import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Bot, ShieldCheck } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const FinalCTA: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            if (!contentRef.current) return;
            
            gsap.fromTo(contentRef.current.children,
                { opacity: 0, scale: 0.95, y: 40 },
                {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: "back.out(1.5)",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 80%",
                    }
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-24 px-6 md:px-12 relative overflow-hidden bg-[#060806] flex items-center justify-center border-t border-white/[0.05]">
            
            {/* Ambient Background Focus - Premium Glows */}
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                <div className="w-[800px] h-[400px] bg-emerald-600/15 blur-[130px] rounded-full translate-y-20" />
                <div className="w-[1000px] h-[500px] bg-teal-600/8 blur-[160px] rounded-full -translate-y-20" />
            </div>

            <div 
                ref={contentRef} 
                className="max-w-5xl w-full relative z-10 text-center flex flex-col items-center bg-[#0a0c0a] border border-white/[0.08] rounded-[2.5rem] p-10 md:p-16 shadow-[0_0_100px_rgba(16,185,129,0.08)] backdrop-blur-3xl overflow-hidden group"
            >
                {/* Subtle Inner Highlight */}
                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/[0.03] to-transparent pointer-events-none" />

                <h2 className="text-3xl md:text-4xl lg:text-4xl font-black uppercase tracking-tighter mb-4 leading-[1.1]" style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}>
                    Stop Losing Customers.<br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-400 to-teal-300">Let AI Handle It.</span>
                </h2>

                <p className="text-white/70 max-w-[650px] mx-auto text-sm md:text-base font-light leading-relaxed mb-10">
                    Transform your business with intelligent AI that works 24/7. Set up your custom-trained assistant in under <span className="text-white font-medium">5 minutes</span>. No credit card required.
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-5 w-full justify-center">
                    <button className="w-full sm:w-auto px-7 md:px-9 py-3.5 bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white font-black uppercase tracking-widest text-[10px] md:text-xs rounded-full shadow-[0_12px_40px_rgba(16,185,129,0.3)] hover:shadow-[0_15px_50px_rgba(16,185,129,0.5)] hover:-translate-y-1.5 active:scale-95 transition-all duration-300 flex items-center justify-center gap-3">
                        <span style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}>Start Free Trial</span>
                        <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-500" />
                    </button>
                    
                    <button className="w-full sm:w-auto px-7 md:px-9 py-3.5 bg-white/5 hover:bg-white/10 text-white font-bold uppercase tracking-widest text-[10px] md:text-xs rounded-full border border-white/10 hover:border-white/20 hover:-translate-y-1 active:scale-95 transition-all duration-300" style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}>
                        Book a Live Demo
                    </button>
                </div>

                <div className="mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-[10px] md:text-[11px] text-white/30 uppercase tracking-[0.25em] font-bold font-mono">
                    <span className="flex items-center gap-2.5">
                        <ShieldCheck size={16} className="text-emerald-500/80"/> 
                        14-Day Free Trial
                    </span>
                    <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-white/20" />
                    <span className="flex items-center gap-2.5">
                        <ShieldCheck size={16} className="text-emerald-500/80"/> 
                        No Credit Card Needed
                    </span>
                </div>
            </div>
        </section>
    );
};

export default FinalCTA;
