'use client';

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Building2, Scale, Home, Cloud, ShoppingBag, ShoppingCart, ShieldCheck, Users, MessageSquare, TrendingUp, Clock, Shield, Globe, Lock, Loader } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const industries = [
    {
        name: 'Luxe Resorts',
        desc: 'Personalized guest support and booking assistance.',
        icon: Building2,
        borderClass: 'border-cyan-500/40',
        glowClass: 'shadow-[0_0_40px_rgba(6,182,212,0.15)] group-hover:shadow-[0_0_60px_rgba(6,182,212,0.25)]',
        textClass: 'text-cyan-400',
        bgClass: 'bg-cyan-500/10',
        tags: ['Bookings', 'Amenities', 'Offers']
    },
    {
        name: 'Elite Legal',
        desc: 'Instant client support and case-related queries.',
        icon: Scale,
        borderClass: 'border-emerald-500/40',
        glowClass: 'shadow-[0_0_40px_rgba(16,185,129,0.15)] group-hover:shadow-[0_0_60px_rgba(16,185,129,0.25)]',
        textClass: 'text-emerald-400',
        bgClass: 'bg-emerald-500/10',
        tags: ['Consultation', 'Case Status', 'Documents']
    },
    {
        name: 'Urban Estates',
        desc: 'Lead capture and property inquiry management.',
        icon: Home,
        borderClass: 'border-blue-500/40',
        glowClass: 'shadow-[0_0_40px_rgba(59,130,246,0.15)] group-hover:shadow-[0_0_60px_rgba(59,130,246,0.25)]',
        textClass: 'text-blue-400',
        bgClass: 'bg-blue-500/10',
        tags: ['Property Info', 'Site Visit', 'Payments']
    },
    {
        name: 'SyncSaaS Inc.',
        desc: 'Automate customer support and feature guidance.',
        icon: Cloud,
        borderClass: 'border-purple-500/40',
        glowClass: 'shadow-[0_0_40px_rgba(168,85,247,0.15)] group-hover:shadow-[0_0_60px_rgba(168,85,247,0.25)]',
        textClass: 'text-purple-400',
        bgClass: 'bg-purple-500/10',
        tags: ['Integrations', 'Billing', 'Support']
    },
    {
        name: 'Shopify Store Apps',
        desc: 'Boost sales with AI shopping assistants.',
        icon: ShoppingBag,
        borderClass: 'border-amber-500/40',
        glowClass: 'shadow-[0_0_40px_rgba(245,158,11,0.15)] group-hover:shadow-[0_0_60px_rgba(245,158,11,0.25)]',
        textClass: 'text-amber-400',
        bgClass: 'bg-amber-500/10',
        tags: ['Product Help', 'Orders', 'Returns']
    },
    {
        name: 'Global E-Commerce',
        desc: 'Recover abandoned carts and handle global support.',
        icon: ShoppingCart,
        borderClass: 'border-rose-500/40',
        glowClass: 'shadow-[0_0_40px_rgba(244,63,94,0.15)] group-hover:shadow-[0_0_60px_rgba(244,63,94,0.25)]',
        textClass: 'text-rose-400',
        bgClass: 'bg-rose-500/10',
        tags: ['Cart Recovery', 'Recommendations', 'Shipping']
    }
];

const stats = [
    { value: '500+', label: 'Businesses', sub: 'Trust XotBot', icon: Users },
    { value: '2M+', label: 'Conversions', sub: 'Handled Every Month', icon: MessageSquare }, // Note: Using Conversations to match text, even though label says Conversions in plan, screenshot says 'Conversations'
    { value: '98%', label: 'Customer Satisfaction', sub: 'Across Industries', icon: TrendingUp },
    { value: '24/7', label: 'Support & Automation', sub: 'No Business Hours', icon: Clock }
];

const UseCasesValidation: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(contentRef.current?.children || [],
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    stagger: 0.15,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 75%",
                    }
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-24 bg-[#020509] relative overflow-hidden flex flex-col items-center justify-center font-sans border-y border-white/[0.05]">
            {/* Ambient Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[600px] bg-emerald-900/10 blur-[150px] rounded-full pointer-events-none" />
            </div>

            <div ref={contentRef} className="max-w-[1400px] w-full relative z-10 px-4 md:px-8 flex flex-col items-center">
                
                {/* Header Section */}
                <div className="text-center flex flex-col items-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-6">
                        <ShieldCheck className="w-4 h-4" />
                        Trusted Industries
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight mb-4 leading-[1.1] text-white">
                        TRUSTED BY <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-300">MODERN BUSINESSES</span>
                    </h2>
                    <p className="text-slate-300 max-w-2xl mx-auto text-base md:text-lg font-light leading-relaxed">
                        From local clinics to enterprise e-commerce, XotBot adapts to your industry's specific needs instantly.
                    </p>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-5xl mb-24">
                    {stats.map((stat, idx) => (
                        <div key={idx} className="flex items-center gap-4">
                            <div className="w-14 h-14 rounded-full bg-[#081216] border border-emerald-900/40 flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(16,185,129,0.05)]">
                                <stat.icon className="w-6 h-6 text-emerald-400" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-3xl font-black text-emerald-400 tracking-tight leading-none mb-1">{stat.value}</span>
                                <span className="text-sm font-bold text-white leading-tight">{stat.label === 'Conversions' ? 'Conversations' : stat.label}</span>
                                <span className="text-[10px] text-slate-400 mt-0.5">{stat.sub}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Divider */}
                <div className="flex items-center gap-4 w-full max-w-2xl mb-12">
                    <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-emerald-500/20 to-emerald-500/50" />
                    <span className="text-emerald-400 text-xs font-bold tracking-[0.3em] uppercase">Industries We Serve</span>
                    <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-emerald-500/20 to-emerald-500/50" />
                </div>

                {/* Industries Grid */}
                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
                    {industries.map((item, idx) => (
                        <div 
                            key={idx} 
                            className={`group relative bg-[#060A0E] border border-white/5 rounded-3xl p-6 flex flex-col items-center text-center transition-all duration-500 ${item.glowClass} hover:-translate-y-1`}
                        >
                            {/* Accent Top Border Glow */}
                            <div className={`absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-current to-transparent opacity-50 ${item.textClass}`} />
                            
                            <div className={`w-16 h-16 rounded-2xl ${item.bgClass} border ${item.borderClass} flex items-center justify-center mb-5 relative`}>
                                <item.icon className={`w-8 h-8 ${item.textClass} relative z-10`} />
                                <div className={`absolute inset-0 blur-xl opacity-40 ${item.bgClass}`} />
                            </div>
                            
                            <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{item.name}</h3>
                            <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">
                                {item.desc}
                            </p>

                            <div className="w-full flex items-center gap-2 mb-4">
                                <div className="h-[1px] flex-1 bg-slate-800" />
                                <span className="text-[9px] uppercase tracking-widest text-slate-500 font-bold">Popular Use Cases</span>
                                <div className="h-[1px] flex-1 bg-slate-800" />
                            </div>

                            <div className="flex flex-wrap justify-center gap-2">
                                {item.tags.map((tag, tIdx) => (
                                    <span 
                                        key={tIdx} 
                                        className={`text-[9px] uppercase tracking-wider font-semibold py-1 px-2.5 rounded-full bg-[#0B1118] border border-white/5 ${item.textClass}`}
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Security Banner */}
                <div className="w-full max-w-6xl bg-[#06090E] border border-white/10 rounded-2xl p-8 flex flex-col lg:flex-row items-center justify-between gap-10 shadow-2xl">
                    <div className="flex items-center gap-6">
                        <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                            <ShieldCheck className="w-8 h-8 text-emerald-400" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-white mb-1 tracking-tight">Enterprise Grade Security & Compliance</h3>
                            <p className="text-sm text-slate-400">Your data is secure with industry-standard encryption and compliance.</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="flex items-center gap-3">
                            <Loader className="w-6 h-6 text-slate-400" />
                            <div className="flex flex-col">
                                <span className="text-sm font-bold text-white leading-tight">GDPR</span>
                                <span className="text-[10px] text-slate-400 uppercase tracking-wider">Compliant</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <Shield className="w-6 h-6 text-emerald-400" />
                            <div className="flex flex-col">
                                <span className="text-sm font-bold text-white leading-tight">SOC 2</span>
                                <span className="text-[10px] text-slate-400 uppercase tracking-wider">Type II Certified</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <Globe className="w-6 h-6 text-slate-400" />
                            <div className="flex flex-col">
                                <span className="text-sm font-bold text-white leading-tight">ISO 27001</span>
                                <span className="text-[10px] text-slate-400 uppercase tracking-wider">Certified</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <Lock className="w-6 h-6 text-slate-400" />
                            <div className="flex flex-col">
                                <span className="text-sm font-bold text-white leading-tight">SSL</span>
                                <span className="text-[10px] text-slate-400 uppercase tracking-wider">Encrypted</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default UseCasesValidation;
