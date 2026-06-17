'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { User, Bot, ShoppingCart, BarChart3, Star, CheckCircle2, ArrowRight, HelpCircle, MessageSquareX, LogOut, Frown, ShoppingBag, Smile, Play, Minus, X, Send, Phone } from 'lucide-react';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

const painPoints = [
    {
        title: 'Visitors Leave Without Buying',
        description: "Most shoppers leave because they can't find the right product quickly.",
        metric: '70%',
        color: 'from-indigo-500/20 to-purple-500/5',
        icon: <Image src="/card icon/runner.png" alt="runner" width={28} height={28} className="object-contain drop-shadow-md" />,
        metricColor: 'text-indigo-400'
    },
    {
        title: 'Questions Stay Unanswered',
        description: 'Shipping, pricing and product questions stop customers from purchasing.',
        metric: '65%',
        color: 'from-cyan-500/20 to-teal-500/5',
        icon: <Image src="/card icon/messaging.png" alt="messaging" width={28} height={28} className="object-contain drop-shadow-md" />,
        metricColor: 'text-cyan-400'
    },
    {
        title: 'Sales Stop After Hours',
        description: 'Your store keeps getting visitors, but nobody is there to help them.',
        metric: '24/7',
        color: 'from-purple-500/20 to-fuchsia-500/5',
        icon: <Image src="/card icon/stop.png" alt="stop" width={28} height={28} className="object-contain drop-shadow-md" />,
        metricColor: 'text-purple-400'
    },
    {
        title: 'Lost Revenue',
        description: 'Every unanswered visitor is a potential sale lost to your competitors.',
        metric: '₹₹₹',
        color: 'from-indigo-500/20 to-blue-500/5',
        icon: <Image src="/card icon/revenue.png" alt="revenue" width={28} height={28} className="object-contain drop-shadow-md" />,
        metricColor: 'text-indigo-400'
    }
];

const flowWithout = [
    { label: 'Visitor', icon: <User className="w-5 h-5 text-rose-400" /> },
    { label: 'Asks Question', icon: <HelpCircle className="w-5 h-5 text-rose-400" /> },
    { label: 'No Answer', icon: <MessageSquareX className="w-5 h-5 text-rose-400" /> },
    { label: 'Leaves Site', icon: <LogOut className="w-5 h-5 text-rose-400" /> },
    { label: 'Lost Sale', icon: <Frown className="w-5 h-5 text-rose-400" /> },
];

const flowWith = [
    { label: 'Visitor', icon: <User className="w-5 h-5 text-emerald-400" /> },
    { label: 'XotBot Answers\nInstantly', icon: <Bot className="w-5 h-5 text-emerald-400" /> },
    { label: 'Recommends\nProducts', icon: <ShoppingBag className="w-5 h-5 text-emerald-400" /> },
    { label: 'Visitor Buys', icon: <ShoppingCart className="w-5 h-5 text-emerald-400" /> },
    { label: 'Sale\nConverted', icon: <Smile className="w-5 h-5 text-emerald-400" /> },
];

const PainSection: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    const mockupRef = useRef<HTMLDivElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);
    const flowRef = useRef<HTMLDivElement>(null);
    const ctaRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(sectionRef.current,
                { opacity: 0 },
                {
                    opacity: 1,
                    duration: 1,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 80%",
                    },
                }
            );

            if (headerRef.current) {
                gsap.fromTo(headerRef.current.children,
                    { opacity: 0, y: 30 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        stagger: 0.15,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: headerRef.current,
                            start: "top 85%",
                        },
                    }
                );
            }

            if (mockupRef.current) {
                gsap.fromTo(mockupRef.current,
                    { opacity: 0, y: 40, scale: 0.95 },
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        duration: 1,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: mockupRef.current,
                            start: "top 85%",
                        },
                    }
                );
            }

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

            if (flowRef.current) {
                gsap.fromTo(flowRef.current.children,
                    { opacity: 0, y: 30 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        stagger: 0.15,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: flowRef.current,
                            start: "top 85%",
                        },
                    }
                );
            }

            if (ctaRef.current) {
                gsap.fromTo(ctaRef.current.children,
                    { opacity: 0, y: 30 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        stagger: 0.15,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: ctaRef.current,
                            start: "top 90%",
                        },
                    }
                );
            }
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-24 px-6 md:px-12 bg-[#020617] relative overflow-hidden flex flex-col items-center justify-center font-sans">
            {/* Ambient background glow */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-cyan-900/10 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-emerald-900/10 blur-[100px] rounded-full pointer-events-none" />

            {/* 1. Header */}
            <div ref={headerRef} className="max-w-4xl w-full relative z-10 text-center mb-16 mx-auto px-4">
                <span className="text-emerald-400 font-mono text-xs md:text-sm tracking-[0.2em] uppercase mb-4 block font-semibold">
                    The Problem
                </span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight mb-6 leading-[1.1] text-white">
                    Your Store Is <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Losing Sales</span><br />While You Sleep
                </h2>
                <p className="text-slate-300 max-w-2xl mx-auto text-base md:text-lg font-light leading-relaxed">
                    Visitors ask questions, leave without buying, and never come back.<br />
                    XotBot answers instantly and <span className="text-emerald-400 font-medium">converts</span> them into customers.
                </p>
            </div>

            {/* 2. Chat & Product Mockup */}
            <div ref={mockupRef} className="relative w-full max-w-5xl mx-auto mb-20 z-10 px-4 md:px-0">
                {/* Floating Icons */}
                <div className="hidden md:flex absolute -left-12 top-1/4 w-16 h-16 bg-[#0B1221] border border-cyan-500/40 rounded-2xl rotate-[15deg] items-center justify-center shadow-[0_0_25px_rgba(6,182,212,0.2)] animate-[bounce_4s_infinite]">
                    <ShoppingCart className="w-7 h-7 text-cyan-400 -rotate-[15deg]" />
                </div>
                <div className="hidden md:flex absolute -right-12 top-1/3 w-16 h-16 bg-[#0B1221] border border-indigo-500/40 rounded-2xl -rotate-[15deg] items-center justify-center shadow-[0_0_25px_rgba(99,102,241,0.2)] animate-[bounce_5s_infinite_1s]">
                    <BarChart3 className="w-7 h-7 text-indigo-400 rotate-[15deg]" />
                </div>

                <div className="bg-[#0A101D]/90 backdrop-blur-2xl border border-slate-700/50 rounded-[2rem] p-6 md:p-12 shadow-[0_0_50px_rgba(6,182,212,0.1)] relative overflow-hidden">
                    {/* Inner glow */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 blur-[100px] pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 blur-[100px] pointer-events-none" />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center relative z-10">
                        {/* Chat Interface Widget */}
                        <div className="w-full max-w-[340px] mx-auto bg-[#080B09] border border-[#162A1F] rounded-[24px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col relative z-10 font-sans">
                            {/* Header */}
                            <div className="bg-[#0A1F16] px-5 py-4 flex items-center justify-between border-b border-[#162A1F]">
                                <div className="flex items-center gap-3.5">
                                    <div className="w-[42px] h-[42px] rounded-full bg-black border border-emerald-900/50 flex items-center justify-center overflow-hidden">
                                        <Bot className="w-[22px] h-[22px] text-emerald-400" />
                                    </div>
                                    <div className="flex flex-col justify-center gap-0.5">
                                        <span className="text-emerald-400 font-bold text-base leading-tight">XotBot</span>
                                        <div className="flex items-center gap-1.5">
                                            <span className="w-2 h-2 rounded-full bg-emerald-500" />
                                            <span className="text-slate-400 text-[11px] font-medium tracking-wide">Intelligence Unchained</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-2.5">
                                    <div className="w-8 h-8 rounded-[10px] bg-[#162A1F]/80 flex items-center justify-center hover:bg-[#1C3325] cursor-pointer transition-colors">
                                        <Minus className="w-[18px] h-[18px] text-slate-300" />
                                    </div>
                                    <div className="w-8 h-8 rounded-[10px] bg-[#162A1F]/80 flex items-center justify-center hover:bg-[#1C3325] cursor-pointer transition-colors">
                                        <X className="w-[18px] h-[18px] text-slate-300" />
                                    </div>
                                </div>
                            </div>
                            
                            {/* Chat Body */}
                            <div className="px-4 py-5 flex flex-col space-y-5 h-[270px] overflow-y-auto bg-gradient-to-b from-[#0A0A0A] to-[#0D1210]">
                                {/* Visitor Bubble */}
                                <div className="flex justify-end pt-1">
                                    <div className="bg-[#1A1A1A] border border-slate-800 rounded-2xl rounded-tr-[4px] p-3.5 text-[13px] text-slate-200 shadow-sm max-w-[85%]">
                                        Will this work on oily skin?
                                        <div className="text-right text-[10px] text-slate-500 mt-2 font-mono tracking-tighter">10:24 PM</div>
                                    </div>
                                </div>

                                {/* Bot Bubble */}
                                <div className="flex items-end gap-2.5">
                                    <div className="w-8 h-8 rounded-full bg-black border border-emerald-900/50 flex items-center justify-center flex-shrink-0">
                                        <Bot className="w-4 h-4 text-emerald-400" />
                                    </div>
                                    <div className="bg-emerald-950/20 border border-emerald-900/50 rounded-2xl rounded-bl-[4px] p-3.5 text-[13px] text-slate-200 shadow-sm max-w-[85%]">
                                        <p className="leading-relaxed">
                                            Yes! This product is specially formulated for oily skin. It has <strong className="text-white">4.8</strong><Star className="w-3.5 h-3.5 inline text-amber-400 mx-0.5 fill-amber-400 -mt-0.5" />ratings from 1,200+ verified customers.
                                        </p>
                                        <div className="text-right text-[10px] text-emerald-500/60 mt-2 font-mono tracking-tighter">10:24 PM</div>
                                    </div>
                                </div>
                            </div>

                            {/* Footer / Input area */}
                            <div className="p-3.5 border-t border-[#162A1F] bg-[#080B09]">
                                <div className="bg-[#101612] border border-[#162A1F] rounded-full pl-5 pr-2 py-2 flex items-center gap-3">
                                    <Smile className="w-5 h-5 text-slate-500 cursor-pointer hover:text-slate-400 transition-colors" />
                                    <input type="text" placeholder="Ask anything..." className="bg-transparent border-none outline-none text-[13px] text-slate-300 w-full placeholder:text-slate-600 font-medium" disabled />
                                    <div className="flex gap-2">
                                        <div className="w-9 h-9 rounded-full bg-[#10B981] flex items-center justify-center cursor-pointer flex-shrink-0 hover:bg-[#059669] transition-colors shadow-lg">
                                            <Send className="w-[18px] h-[18px] text-black ml-0.5" />
                                        </div>
                                        <div className="w-9 h-9 rounded-full bg-[#10B981] flex items-center justify-center cursor-pointer flex-shrink-0 hover:bg-[#059669] transition-colors shadow-lg">
                                            <Phone className="w-[18px] h-[18px] text-black" />
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center mt-3 mb-1">
                                    <span className="text-[11px] text-slate-500 font-medium">Powered by <span className="text-[#10B981] font-bold tracking-wide">XotBot</span></span>
                                </div>
                            </div>
                        </div>

                        {/* Vertical Divider */}
                        <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-px bg-gradient-to-b from-transparent via-slate-700/50 to-transparent" />

                        {/* Connection Line between Chat and Product */}
                        <div className="hidden md:block absolute left-[45%] top-[65%] w-[10%] h-px border-t border-dashed border-emerald-500/30 z-0" />

                        {/* Product Display */}
                        <div className="flex items-center justify-center md:pl-6 border-t md:border-t-0 md:border-none border-slate-800 pt-10 md:pt-0 relative z-10">
                            <div className="flex flex-col sm:flex-row gap-6 md:gap-8 items-center sm:items-start w-full max-w-sm">
                                {/* Product Image */}
                                <div className="relative w-32 h-32 md:w-36 md:h-36 rounded-2xl overflow-hidden border border-emerald-500/30 shadow-[0_0_30px_rgba(16,185,129,0.15)] flex-shrink-0 group">
                                    <div className="absolute inset-0 bg-emerald-500/10 mix-blend-overlay z-10 group-hover:bg-transparent transition-colors" />
                                    <Image
                                        src="/oil_control_face_wash.png"
                                        alt="Oil Control Face Wash"
                                        fill
                                        className="object-cover relative z-0 transform group-hover:scale-110 transition-transform duration-700"
                                    />
                                </div>
                                
                                {/* Product Details */}
                                <div className="flex flex-col items-center sm:items-start w-full">
                                    <h4 className="text-white font-bold text-lg mb-1.5 text-center sm:text-left">Oil Control Face Wash</h4>
                                    <div className="flex items-center gap-2 mb-5 text-xs">
                                        <span className="text-white font-semibold">4.8</span>
                                        <div className="flex gap-0.5">
                                            {[1,2,3,4,5].map(i => (
                                                <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                                            ))}
                                        </div>
                                        <span className="text-slate-400">(1,247)</span>
                                    </div>
                                    <ul className="space-y-2.5 mb-8 w-full">
                                        {['Reduces excess oil', 'Deep pore cleansing', 'Dermatologist Tested'].map((feat, i) => (
                                            <li key={i} className="flex items-start gap-2.5 text-[13px] text-slate-300">
                                                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                                                <span className="leading-snug">{feat}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <button className="w-full bg-gradient-to-r from-cyan-400 to-emerald-400 text-slate-950 font-bold py-3 px-6 rounded-xl text-sm shadow-[0_0_25px_rgba(16,185,129,0.4)] hover:shadow-[0_0_35px_rgba(16,185,129,0.6)] hover:from-cyan-300 hover:to-emerald-300 transition-all transform hover:-translate-y-0.5">
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 3. Metrics Grid */}
            <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 max-w-6xl w-full relative z-10 mx-auto px-4 mb-24">
                {painPoints.map((pain, idx) => (
                    <div
                        key={idx}
                        className="group relative bg-[#060A14]/80 backdrop-blur-xl border border-slate-800/80 rounded-[2rem] p-7 overflow-hidden hover:border-slate-600/50 hover:shadow-[0_0_40px_rgba(var(--tw-color-indigo-500),0.1)] transition-all duration-500 flex flex-col items-start shadow-xl"
                    >
                        <div className={`absolute inset-0 bg-gradient-to-br ${pain.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />
                        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                        <div className="flex items-center justify-between w-full mb-6 relative z-10">
                            <div className="w-14 h-14 rounded-2xl bg-[#0A101D] border border-slate-800 flex items-center justify-center text-2xl shadow-inner shrink-0 relative overflow-hidden group-hover:scale-110 transition-transform duration-500">
                                <div className={`absolute inset-0 bg-gradient-to-br ${pain.color} opacity-20`} />
                                {pain.icon}
                            </div>
                            <div className={`text-4xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-br ${pain.metricColor.replace('text-', 'from-').replace('-400', '-400')} to-slate-200`}>
                                {pain.metric}
                            </div>
                        </div>
                        <h3 className="text-lg font-bold text-white mb-3 tracking-tight relative z-10">
                            {pain.title}
                        </h3>
                        <p className="text-slate-400 text-[13px] leading-relaxed relative z-10 font-medium">
                            {pain.description}
                        </p>
                    </div>
                ))}
            </div>

            {/* 4. Flowchart Comparison */}
            <div ref={flowRef} className="w-full max-w-5xl mx-auto mb-20 relative z-10 px-4">
                <div className="bg-[#020408] border border-slate-800/80 rounded-[2rem] p-4 md:p-8 relative shadow-2xl overflow-hidden flex flex-col gap-6">
                    
                    {/* Background effects */}
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.03)_0%,transparent_100%)] pointer-events-none" />

                    {/* Without XotBot Strip */}
                    <div className="relative bg-gradient-to-r from-rose-950/30 via-[#0A0505] to-[#0A0505] border border-rose-900/30 rounded-3xl p-6 md:p-10 pt-14 md:pt-10 overflow-hidden shadow-inner">
                        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-rose-500/20 via-transparent to-transparent" />
                        
                        {/* Badge */}
                        <div className="absolute top-4 left-6 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse shadow-[0_0_10px_rgba(244,63,94,0.6)]" />
                            <span className="text-rose-400 font-mono text-[10px] tracking-widest uppercase font-bold">Without XotBot</span>
                        </div>

                        {/* Flowline behind */}
                        <div className="hidden md:block absolute top-1/2 left-12 right-12 h-[2px] bg-gradient-to-r from-rose-500/0 via-rose-500/20 to-rose-500/0 -translate-y-1/2 z-0" />

                        <div className="flex flex-wrap md:flex-nowrap items-center justify-between gap-4 relative z-10 w-full mt-4 md:mt-0">
                            {flowWithout.map((step, idx) => (
                                <React.Fragment key={`without-${idx}`}>
                                    <div className="flex flex-col items-center text-center gap-3 w-20 md:w-auto group z-10">
                                        <div className="w-14 h-14 rounded-2xl border border-rose-500/20 bg-[#0F0505] flex items-center justify-center relative shadow-[0_4px_20px_rgba(244,63,94,0.1)] group-hover:border-rose-500/50 group-hover:-translate-y-1 transition-all duration-300 group-hover:shadow-[0_10px_30px_rgba(244,63,94,0.2)]">
                                            <div className="absolute inset-0 bg-gradient-to-br from-rose-500/10 to-transparent rounded-2xl" />
                                            <div className="relative z-10">{step.icon}</div>
                                        </div>
                                        <span className="text-slate-300 text-xs font-semibold max-w-[90px] whitespace-pre-line leading-snug group-hover:text-rose-200 transition-colors">{step.label}</span>
                                    </div>
                                    {idx < flowWithout.length - 1 && (
                                        <div className="hidden md:flex items-center justify-center relative z-10">
                                            <div className="w-8 h-8 rounded-full bg-[#0F0505] border border-rose-900/50 flex items-center justify-center z-10">
                                                <ArrowRight className="w-4 h-4 text-rose-500/50" />
                                            </div>
                                        </div>
                                    )}
                                </React.Fragment>
                            ))}
                        </div>
                    </div>

                    {/* VS Badge */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
                        <div className="w-16 h-16 bg-[#020408] rounded-full border border-slate-700 flex items-center justify-center p-1.5 shadow-[0_0_50px_rgba(0,0,0,0.8)]">
                            <div className="w-full h-full rounded-full bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-600 flex items-center justify-center relative overflow-hidden">
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.2)_0%,transparent_100%)]" />
                                <span className="text-slate-200 font-black text-sm tracking-widest relative z-10">VS</span>
                            </div>
                        </div>
                    </div>

                    {/* With XotBot Strip */}
                    <div className="relative bg-gradient-to-r from-[#050A08] via-[#050A08] to-emerald-950/30 border border-emerald-900/30 rounded-3xl p-6 md:p-10 pb-14 md:pb-10 overflow-hidden shadow-inner mt-2">
                        <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-l from-emerald-500/20 via-transparent to-transparent" />
                        
                        {/* Badge */}
                        <div className="absolute bottom-4 right-6 flex items-center gap-2">
                            <span className="text-emerald-400 font-mono text-[10px] tracking-widest uppercase font-bold">With XotBot</span>
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.6)]" />
                        </div>

                        {/* Flowline behind */}
                        <div className="hidden md:block absolute top-1/2 left-12 right-12 h-[2px] bg-gradient-to-r from-emerald-500/0 via-emerald-500/30 to-emerald-500/0 -translate-y-1/2 z-0" />

                        <div className="flex flex-wrap md:flex-nowrap items-center justify-between gap-4 relative z-10 w-full mb-4 md:mb-0">
                            {flowWith.map((step, idx) => (
                                <React.Fragment key={`with-${idx}`}>
                                    <div className="flex flex-col items-center text-center gap-3 w-20 md:w-auto group z-10">
                                        <div className="w-14 h-14 rounded-2xl border border-emerald-500/30 bg-[#050F0A] flex items-center justify-center relative shadow-[0_4px_20px_rgba(16,185,129,0.1)] group-hover:border-emerald-400/80 group-hover:-translate-y-1 transition-all duration-300 group-hover:shadow-[0_10px_30px_rgba(16,185,129,0.3)]">
                                            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent rounded-2xl" />
                                            {idx === 4 && <div className="absolute inset-0 rounded-2xl shadow-[0_0_20px_rgba(16,185,129,0.4)] animate-pulse" />}
                                            <div className="relative z-10">{step.icon}</div>
                                        </div>
                                        <span className="text-slate-300 text-xs font-semibold max-w-[90px] whitespace-pre-line leading-snug group-hover:text-emerald-200 transition-colors">{step.label}</span>
                                    </div>
                                    {idx < flowWith.length - 1 && (
                                        <div className="hidden md:flex items-center justify-center relative z-10">
                                            <div className="w-8 h-8 rounded-full bg-[#050F0A] border border-emerald-900/50 flex items-center justify-center z-10">
                                                <ArrowRight className="w-4 h-4 text-emerald-500/60" />
                                            </div>
                                        </div>
                                    )}
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* 5. Bottom CTA */}
            <div ref={ctaRef} className="text-center w-full relative z-10">
                <p className="text-lg md:text-xl text-slate-200 mb-8 font-medium">
                    Every visitor is a potential customer. <span className="text-emerald-400">Stop losing them.</span>
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-6">
                    <Link href="/demo" className="w-full sm:w-auto group relative inline-flex items-center justify-center px-9 py-4 font-black tracking-wide text-[#020617] transition-all duration-300 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full shadow-[0_0_40px_rgba(16,185,129,0.3)] hover:shadow-[0_0_60px_rgba(16,185,129,0.5)] hover:-translate-y-1 hover:scale-105 border border-emerald-200/50 overflow-hidden">
                        <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 -translate-x-[150%] group-hover:translate-x-[250%] transition-transform duration-1000 ease-in-out" />
                        <span className="flex items-center gap-2 relative z-10">
                            <Play className="w-4 h-4 fill-current" />
                            SEE XOTBOT IN ACTION
                        </span>
                    </Link>
                    <Link href="/pricing" className="w-full sm:w-auto group inline-flex items-center justify-center px-9 py-4 font-bold tracking-wide text-slate-300 transition-all duration-300 bg-[#0B1221]/80 backdrop-blur-xl border border-slate-700 rounded-full hover:bg-[#0F172A] hover:text-emerald-400 hover:border-emerald-500/50 shadow-xl hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] hover:-translate-y-1 hover:scale-105">
                        <BarChart3 className="w-5 h-5 mr-2.5 transition-transform group-hover:scale-110" />
                        CALCULATE REVENUE IMPACT
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default PainSection;
