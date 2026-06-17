'use client';

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TrendingUp, Zap, Bot, PieChart, Shield, Clock, DollarSign, Users, BarChart2, CheckCircle2, Star } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const SolutionGrowth: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);
    const barsRef = useRef<HTMLDivElement>(null);
    const chatRef = useRef<HTMLDivElement>(null);
    const linePathRef = useRef<SVGPathElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Main section fade up
            gsap.fromTo(sectionRef.current,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 75%",
                    }
                }
            );

            // Grid cards stagger
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

            // Animate bar chart
            if (barsRef.current) {
                gsap.fromTo(barsRef.current.children,
                    { height: '10%', opacity: 0.5 },
                    {
                        height: (index, target) => target.getAttribute('data-height') || '100%',
                        opacity: 1,
                        duration: 1.5,
                        stagger: 0.1,
                        ease: "power2.inOut",
                        repeat: -1,
                        yoyo: true,
                        scrollTrigger: {
                            trigger: barsRef.current,
                            start: "top 85%",
                        }
                    }
                );
            }

            // Animate chat bubbles
            if (chatRef.current) {
                const bubbles = chatRef.current.querySelectorAll('.chat-bubble');
                gsap.set(bubbles, { opacity: 0, y: 20, scale: 0.95 });
                
                const tl = gsap.timeline({
                    repeat: -1,
                    scrollTrigger: {
                        trigger: chatRef.current,
                        start: "top 85%",
                    }
                });

                tl.to(bubbles[0], { opacity: 1, y: 0, scale: 1, duration: 0.4, ease: "back.out(1.5)" })
                  .to(bubbles[1], { opacity: 1, y: 0, scale: 1, duration: 0.4, ease: "back.out(1.5)", delay: 0.6 })
                  .to(bubbles, { opacity: 0, y: 10, scale: 0.95, duration: 0.3, delay: 2 });
            }

            // Animate Line Graph
            if (linePathRef.current) {
                const length = linePathRef.current.getTotalLength();
                gsap.set(linePathRef.current, { strokeDasharray: length, strokeDashoffset: length });
                
                gsap.to(linePathRef.current, {
                    strokeDashoffset: 0,
                    duration: 2.5,
                    ease: "power2.inOut",
                    repeat: -1,
                    yoyo: true,
                    repeatDelay: 0.5,
                    scrollTrigger: {
                        trigger: linePathRef.current,
                        start: "top 90%",
                    }
                });
            }

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-24 px-6 md:px-12 bg-[#02050A] relative overflow-hidden flex flex-col items-center justify-center font-sans">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-900/10 blur-[150px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-900/10 blur-[120px] rounded-full pointer-events-none" />

            {/* Header Section */}
            <div className="max-w-6xl w-full relative z-10 text-center mb-14 mx-auto px-4">
                <div className="flex items-center justify-center gap-4 mb-4 text-emerald-500/80 tracking-[0.3em] text-[10px] md:text-xs font-mono uppercase font-bold">
                    <span className="w-10 h-[1px] bg-emerald-500/30" />
                    <span>THE SOLUTION</span>
                    <span className="w-10 h-[1px] bg-emerald-500/30" />
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight mb-6 leading-[1.1] text-white">
                    TURN VISITORS INTO CUSTOMERS<br />
                    <span className="inline-flex items-center gap-3 md:gap-4 mt-2">
                        <span className="inline-flex items-center justify-center px-4 py-1 rounded-xl border-2 border-emerald-500/40 bg-emerald-500/10 text-emerald-400 text-3xl md:text-5xl tracking-widest shadow-[0_0_30px_rgba(16,185,129,0.2)]">
                            AI
                        </span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-300">
                            AUTOMATICALLY
                        </span>
                    </span>
                </h2>
                <p className="text-slate-300 max-w-3xl mx-auto text-base md:text-lg font-light leading-relaxed">
                    Stop losing money on missed opportunities. XotBot chats with your visitors 24/7,<br />collects their info, and answers questions instantly — so you <span className="text-emerald-400 font-semibold">close more deals</span> without extra effort.
                </p>
            </div>

            {/* Main 2x2 Grid */}
            <div ref={gridRef} className="max-w-6xl w-full relative z-10 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mx-auto px-4 mb-8">
                
                {/* Card 1: 3x More Lead Capture */}
                <div className="group relative bg-[#040914]/80 backdrop-blur-xl border border-slate-800/80 rounded-3xl p-6 lg:p-8 overflow-hidden hover:border-emerald-500/30 transition-all duration-500 flex flex-col justify-between shadow-2xl h-[280px]">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                    
                    <div className="flex gap-4 relative z-10">
                        <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(16,185,129,0.1)]">
                            <TrendingUp className="w-6 h-6 text-emerald-400" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-white mb-1">3x More Lead Capture</h3>
                            <p className="text-slate-400 text-sm leading-relaxed max-w-[280px]">
                                XotBot captures more emails and numbers 24/7 across all pages.
                            </p>
                        </div>
                    </div>

                    <div className="relative z-10 flex justify-between items-end mt-6">
                        {/* Animated Bar Chart */}
                        <div ref={barsRef} className="flex gap-1.5 items-end h-20">
                            {[15, 25, 20, 35, 45, 60, 80, 100].map((h, i) => (
                                <div 
                                    key={i} 
                                    className="w-4 bg-gradient-to-t from-emerald-600/40 to-emerald-400 rounded-t-sm shadow-[0_0_10px_rgba(52,211,153,0.3)]" 
                                    data-height={`${h}%`}
                                />
                            ))}
                        </div>
                        <div className="text-right flex flex-col items-end">
                            <span className="text-[10px] text-slate-400 uppercase tracking-widest font-bold mb-1">New Leads</span>
                            <div className="flex items-center gap-1 mb-2">
                                <span className="text-4xl font-black text-emerald-400 tracking-tighter">426</span>
                                <TrendingUp className="w-6 h-6 text-emerald-400" />
                            </div>
                            <div className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-[10px] font-bold flex items-center gap-1 shadow-[0_0_10px_rgba(16,185,129,0.1)]">
                                &uarr; 300% vs. Manual
                            </div>
                        </div>
                    </div>
                </div>

                {/* Card 2: Instant 24/7 Replies */}
                <div className="group relative bg-[#040914]/80 backdrop-blur-xl border border-slate-800/80 rounded-3xl p-6 lg:p-8 overflow-hidden hover:border-cyan-500/30 transition-all duration-500 flex flex-col shadow-2xl h-[280px]">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                    
                    <div className="flex gap-4 relative z-10">
                        <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(6,182,212,0.1)]">
                            <Zap className="w-6 h-6 text-cyan-400" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-white mb-1">Instant 24/7 Replies</h3>
                            <p className="text-slate-400 text-sm leading-relaxed max-w-[280px]">
                                Customers get answers in milliseconds. Zero wait time.
                            </p>
                        </div>
                    </div>

                    <div className="relative z-10 flex-1 flex items-center justify-center mt-6">
                        <div className="bg-[#02050A] border border-cyan-500/20 rounded-2xl p-6 w-full flex items-center justify-between shadow-[inset_0_0_20px_rgba(6,182,212,0.05)]">
                            <div className="flex flex-col">
                                <span className="text-5xl font-black text-white font-mono tracking-tighter drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">0.3<span className="text-3xl text-cyan-400">s</span></span>
                                <span className="text-[10px] text-slate-400 uppercase tracking-[0.2em] font-bold mt-1">Avg Reply Time</span>
                            </div>
                            <div className="w-16 h-16 rounded-full border-2 border-cyan-900/50 flex items-center justify-center relative">
                                <Clock className="w-8 h-8 text-cyan-400 animate-[spin_4s_linear_infinite]" />
                                <div className="absolute inset-0 bg-cyan-500/10 rounded-full blur-md" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Card 3: Total Automation */}
                <div className="group relative bg-[#040914]/80 backdrop-blur-xl border border-slate-800/80 rounded-3xl p-6 lg:p-8 overflow-hidden hover:border-teal-500/30 transition-all duration-500 flex flex-col shadow-2xl h-[280px]">
                    <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                    
                    <div className="flex gap-4 relative z-10 mb-6">
                        <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(20,184,166,0.1)]">
                            <Bot className="w-6 h-6 text-teal-400" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-white mb-1">Total Automation</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                Handles chats, lead capture, FAQs, and follow-ups automatically.
                            </p>
                        </div>
                    </div>

                    <div ref={chatRef} className="relative z-10 flex flex-col gap-3 flex-1 justify-end pb-2">
                        <div className="chat-bubble bg-[#111827] border border-slate-800 rounded-2xl rounded-tl-sm px-4 py-3 text-sm text-slate-300 w-[80%] shadow-lg">
                            Where is my order?
                        </div>
                        <div className="chat-bubble flex gap-2 w-[90%] self-end">
                            <div className="w-8 h-8 rounded-full bg-teal-500/20 border border-teal-500/30 flex items-center justify-center shrink-0 mt-auto shadow-[0_0_10px_rgba(20,184,166,0.2)]">
                                <Bot className="w-4 h-4 text-teal-400" />
                            </div>
                            <div className="bg-teal-950/40 border border-teal-900/50 rounded-2xl rounded-br-sm px-4 py-3 text-sm text-teal-50 shadow-lg relative">
                                Your order #1234 is out for delivery and will arrive tomorrow.
                                <CheckCircle2 className="w-4 h-4 text-teal-400 absolute bottom-2 right-2 opacity-50" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Card 4: Full Business Analytics */}
                <div className="group relative bg-[#040914]/80 backdrop-blur-xl border border-slate-800/80 rounded-3xl p-6 lg:p-8 overflow-hidden hover:border-blue-500/30 transition-all duration-500 flex flex-col shadow-2xl h-[280px]">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                    
                    <div className="flex gap-4 relative z-10 mb-6">
                        <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(59,130,246,0.1)]">
                            <PieChart className="w-6 h-6 text-blue-400" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-white mb-1">Full Business Analytics</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                Track chats, interactions, and conversions in real-time.
                            </p>
                        </div>
                    </div>

                    <div className="relative z-10 grid grid-cols-2 gap-4 flex-1">
                        {/* CSAT Score */}
                        <div className="bg-[#02050A] border border-blue-900/30 rounded-2xl p-4 flex flex-col items-center justify-center shadow-inner">
                            <span className="text-3xl font-black text-white font-mono tracking-tight mb-2">4.9<span className="text-xl text-slate-500">/5</span></span>
                            <div className="flex gap-1 mb-2">
                                {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />)}
                            </div>
                            <span className="text-[9px] text-slate-400 uppercase tracking-widest font-bold">CSAT Score</span>
                        </div>
                        
                        {/* Conversions Line Chart */}
                        <div className="bg-[#02050A] border border-blue-900/30 rounded-2xl p-4 flex flex-col justify-between shadow-inner relative overflow-hidden">
                            <div className="text-center mt-2 relative z-10">
                                <span className="text-2xl font-black text-cyan-400 tracking-tight">+148%</span>
                            </div>
                            <div className="absolute bottom-0 left-0 w-full h-1/2">
                                <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 to-transparent" />
                                <svg viewBox="0 0 100 50" preserveAspectRatio="none" className="w-full h-full drop-shadow-[0_0_5px_rgba(6,182,212,0.5)]">
                                    <path 
                                        ref={linePathRef}
                                        d="M0,40 Q10,35 20,30 T40,25 T60,20 T80,10 T100,5" 
                                        fill="none" 
                                        stroke="#22d3ee" 
                                        strokeWidth="3" 
                                        strokeLinecap="round" 
                                    />
                                </svg>
                            </div>
                            <span className="text-[9px] text-slate-400 uppercase tracking-widest font-bold text-center mt-auto relative z-10 mb-1">Conversions</span>
                        </div>
                    </div>
                </div>

            </div>

            {/* Bottom Value Banner */}
            <div className="max-w-6xl w-full relative z-10 mx-auto px-4">
                <div className="bg-gradient-to-r from-[#0A1A24] via-[#050A0F] to-[#0A1A24] border border-cyan-900/40 rounded-2xl p-6 md:p-8 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-[0_0_40px_rgba(6,182,212,0.1)]">
                    
                    <div className="flex items-center gap-5">
                        <div className="w-14 h-14 rounded-full bg-cyan-500/10 border-2 border-cyan-500/30 flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(6,182,212,0.2)]">
                            <Shield className="w-7 h-7 text-cyan-400" />
                        </div>
                        <div className="text-lg md:text-xl text-slate-300 font-medium leading-tight">
                            More Conversations.<br />
                            <span className="text-cyan-400 font-bold">More Customers.</span> More Revenue.
                        </div>
                    </div>

                    <div className="flex flex-wrap md:flex-nowrap items-center gap-6 lg:gap-10">
                        <div className="flex flex-col items-center gap-2 text-center">
                            <Clock className="w-6 h-6 text-slate-400" />
                            <span className="text-[11px] text-slate-300 font-medium">Save 100+<br/>Team Hours</span>
                        </div>
                        <div className="flex flex-col items-center gap-2 text-center">
                            <DollarSign className="w-6 h-6 text-emerald-400" />
                            <span className="text-[11px] text-slate-300 font-medium">Increase<br/>Sales</span>
                        </div>
                        <div className="flex flex-col items-center gap-2 text-center">
                            <Users className="w-6 h-6 text-cyan-400" />
                            <span className="text-[11px] text-slate-300 font-medium">Better Customer<br/>Experience</span>
                        </div>
                        <div className="flex flex-col items-center gap-2 text-center">
                            <BarChart2 className="w-6 h-6 text-blue-400" />
                            <span className="text-[11px] text-slate-300 font-medium">Scalable<br/>Growth</span>
                        </div>
                    </div>

                </div>
            </div>

        </section>
    );
};

export default SolutionGrowth;
