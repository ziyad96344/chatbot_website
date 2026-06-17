'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
    CheckCircle2, 
    Globe, 
    Database, 
    BrainCircuit, 
    Bot, 
    Zap, 
    Shield, 
    Code2, 
    MessageSquare, 
    Check, 
    Copy 
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// Simple hook: returns true once element is scrolled into view
function useScrollReveal(ref: React.RefObject<HTMLElement | null>, threshold = 0.15) {
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) { setVisible(true); obs.disconnect(); }
        }, { threshold });
        obs.observe(el);
        return () => obs.disconnect();
    }, [ref, threshold]);
    return visible;
}

const HowItWorksRedesign: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const visible = useScrollReveal(sectionRef, 0.1);

    return (
        <section ref={sectionRef} className="relative py-24 px-6 md:px-12 bg-[#050B10] overflow-hidden flex flex-col items-center border-t border-white/[0.05]">
            {/* Ambient Background */}
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                <div className="w-[800px] h-[800px] rounded-full bg-emerald-900/10 blur-[150px]" />
            </div>

            <div className={`relative z-10 w-full max-w-[1400px] mx-auto transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h3 className="text-emerald-500 font-bold uppercase tracking-widest text-xs mb-4 flex items-center justify-center gap-2">
                        How Xotbot Works <span className="text-emerald-500 text-sm">→</span>
                    </h3>
                    <h2 
                        className="text-4xl md:text-5xl font-black text-white mb-5 tracking-tight leading-[1.1]"
                        style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
                    >
                        Get Your AI Chatbot Live in <br />
                        <span className="text-emerald-500">3 Simple Steps</span>
                    </h2>
                    <p className="text-slate-300 max-w-2xl mx-auto text-base font-light leading-relaxed">
                        Just add your website and we'll handle the rest. XotBot will learn everything about your business and be ready to chat with your visitors 24/7.
                    </p>
                </div>

                {/* 3 Steps Header */}
                <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl mx-auto mb-8 gap-6 md:gap-4 relative">
                    {/* Step 1 */}
                    <div className="flex items-center gap-4 flex-1">
                        <div className="w-12 h-12 rounded-full border border-emerald-500/30 flex items-center justify-center bg-[#050B10] text-emerald-500 font-bold text-lg shrink-0 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                            1
                        </div>
                        <div>
                            <h4 className="text-white font-bold text-sm">Add Your Website</h4>
                            <p className="text-slate-400 text-xs mt-0.5 max-w-[200px]">Enter your website URL and let XotBot do the magic.</p>
                        </div>
                    </div>

                    {/* Arrow */}
                    <div className="hidden md:block text-emerald-500/40 text-lg tracking-[0.2em] px-4 font-light">------→</div>

                    {/* Step 2 */}
                    <div className="flex items-center gap-4 flex-1">
                        <div className="w-12 h-12 rounded-full border border-emerald-500/30 flex items-center justify-center bg-[#050B10] text-emerald-500 font-bold text-lg shrink-0 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                            2
                        </div>
                        <div>
                            <h4 className="text-white font-bold text-sm">We Scrape, Train & Build</h4>
                            <p className="text-slate-400 text-xs mt-0.5 max-w-[200px]">Our bot scrapes your website, creates a database, and trains itself to understand your business.</p>
                        </div>
                    </div>

                    {/* Arrow */}
                    <div className="hidden md:block text-emerald-500/40 text-lg tracking-[0.2em] px-4 font-light">------→</div>

                    {/* Step 3 */}
                    <div className="flex items-center gap-4 flex-1">
                        <div className="w-12 h-12 rounded-full border border-emerald-500/30 flex items-center justify-center bg-[#050B10] text-emerald-500 font-bold text-lg shrink-0 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                            3
                        </div>
                        <div>
                            <h4 className="text-white font-bold text-sm">Get Embed Code</h4>
                            <p className="text-slate-400 text-xs mt-0.5 max-w-[200px]">Copy the embed code and paste it in your website header.</p>
                        </div>
                    </div>
                </div>

                {/* 3 Mockup Cards Container */}
                <div className="flex flex-col lg:flex-row gap-6 w-full mx-auto mb-8">
                    
                    {/* Card 1: Add Website */}
                    <div className="w-full lg:w-[280px] shrink-0 bg-[#091114] border border-white/5 rounded-2xl p-6 shadow-2xl flex flex-col relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="flex items-center gap-1.5 mb-8 relative z-10">
                            <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                            <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                            <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                        </div>
                        <div className="flex-1 flex flex-col justify-center relative z-10">
                            <label className="text-sm text-white mb-2 block font-medium">Enter your website URL</label>
                            <div className="relative mb-5">
                                <input 
                                    type="text" 
                                    value="https://yourwebsite.com" 
                                    readOnly 
                                    className="w-full bg-[#050B10] border border-emerald-500/30 rounded-lg pl-3 pr-10 py-3 text-white text-sm focus:outline-none" 
                                />
                                <CheckCircle2 className="w-4 h-4 text-emerald-500 absolute right-3 top-1/2 -translate-y-1/2" />
                            </div>
                            <button className="w-full bg-[#094d35] hover:bg-[#065f40] text-white/90 text-sm font-bold py-3.5 rounded-lg transition-colors border border-emerald-500/20">
                                Submit & Train
                            </button>
                        </div>
                    </div>

                    {/* Card 2: Scrape, Train, Build */}
                    <div className="flex-1 w-full bg-[#091114] border border-white/5 rounded-2xl p-6 lg:p-8 flex flex-col lg:flex-row items-center justify-between shadow-2xl relative overflow-hidden group">
                        {/* Background ambient */}
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-emerald-900/10 opacity-50" />

                        {/* Left side checklist */}
                        <div className="flex flex-col gap-5 relative z-10 w-full lg:w-auto lg:max-w-[200px] mb-8 lg:mb-0">
                            <div className="flex gap-3 items-start">
                                <div className="w-8 h-8 rounded-full bg-[#050B10] border border-white/5 flex items-center justify-center shrink-0 mt-0.5">
                                    <Globe className="w-4 h-4 text-emerald-500" />
                                </div>
                                <div>
                                    <h5 className="text-white text-sm font-bold flex items-center gap-2 mb-0.5">Scraping pages <CheckCircle2 className="w-3 h-3 text-emerald-500" /></h5>
                                    <p className="text-slate-400 text-xs leading-snug">Products, services, policies & more</p>
                                </div>
                            </div>
                            <div className="flex gap-3 items-start">
                                <div className="w-8 h-8 rounded-full bg-[#050B10] border border-white/5 flex items-center justify-center shrink-0 mt-0.5">
                                    <Database className="w-4 h-4 text-emerald-500" />
                                </div>
                                <div>
                                    <h5 className="text-white text-sm font-bold flex items-center gap-2 mb-0.5">Building database <CheckCircle2 className="w-3 h-3 text-emerald-500" /></h5>
                                    <p className="text-slate-400 text-xs leading-snug">Organized & optimized for accurate answers</p>
                                </div>
                            </div>
                            <div className="flex gap-3 items-start">
                                <div className="w-8 h-8 rounded-full bg-[#050B10] border border-white/5 flex items-center justify-center shrink-0 mt-0.5">
                                    <BrainCircuit className="w-4 h-4 text-emerald-500" />
                                </div>
                                <div>
                                    <h5 className="text-white text-sm font-bold flex items-center gap-2 mb-0.5">Training AI <CheckCircle2 className="w-3 h-3 text-emerald-500" /></h5>
                                    <p className="text-slate-400 text-xs leading-snug">Learning your content to give perfect replies</p>
                                </div>
                            </div>
                        </div>

                        {/* Center Graphic */}
                        <div className="relative w-full lg:w-auto flex items-center justify-center z-10 py-6 lg:py-0">
                            <div className="absolute inset-0 flex items-center justify-center">
                                {/* Faint outer track */}
                                <div className="absolute w-[180px] h-[180px] border border-white/5 rounded-full" />
                                
                                {/* Fast orbiting data dot */}
                                <div className="absolute w-[180px] h-[180px] animate-spin" style={{ animationDuration: '4s' }}>
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-emerald-400 rounded-full shadow-[0_0_12px_3px_rgba(16,185,129,0.8)]" />
                                </div>

                                {/* Slow counter-rotating mechanical dashed ring */}
                                <div className="absolute w-[150px] h-[150px] border-[1.5px] border-dashed border-emerald-500/30 rounded-full animate-spin" style={{ animationDuration: '20s', animationDirection: 'reverse' }} />
                                
                                {/* Inner scanner beam */}
                                <div className="absolute w-[120px] h-[120px] rounded-full animate-spin border border-emerald-500/20" 
                                     style={{ animationDuration: '6s', background: 'conic-gradient(from 0deg, transparent 0%, transparent 75%, rgba(16, 185, 129, 0.2) 100%)' }} />

                                {/* Ambient center glow */}
                                <div className="absolute w-24 h-24 bg-emerald-500/20 blur-2xl rounded-full" />
                            </div>
                            <div className="flex flex-col items-center relative z-20">
                                <div className="w-12 h-12 bg-[#050B10] rounded-xl border border-emerald-500 flex items-center justify-center mb-1 z-[60] shadow-[0_0_25px_rgba(16,185,129,0.4)]">
                                    <Image src="/logo/logo1.png" alt="Xotbot" width={40} height={40} className="object-contain opacity-90" />
                                </div>
                                {/* Stacked disks */}
                                <div className="flex flex-col items-center relative z-10">
                                    <div className="w-[70px] h-[22px] bg-[#032e1f] border border-emerald-500/80 rounded-[50%] flex items-center justify-center shadow-[0_4px_0_rgba(16,185,129,0.3)] relative z-[50]" />
                                    <div className="w-[70px] h-[22px] bg-[#032e1f] border border-emerald-500/80 rounded-[50%] flex items-center justify-center shadow-[0_4px_0_rgba(16,185,129,0.3)] -mt-[14px] relative z-[45]" />
                                    <div className="w-[70px] h-[22px] bg-[#032e1f] border border-emerald-500/80 rounded-[50%] flex items-center justify-center shadow-[0_4px_0_rgba(16,185,129,0.3)] -mt-[14px] relative z-[40]" />
                                    <div className="w-[70px] h-[22px] bg-[#032e1f] border border-emerald-500/80 rounded-[50%] flex items-center justify-center shadow-[0_4px_0_rgba(16,185,129,0.3)] -mt-[14px] relative z-[35]" />
                                    <div className="w-[70px] h-[22px] bg-[#032e1f] border border-emerald-500/80 rounded-[50%] flex items-center justify-center shadow-[0_4px_0_rgba(16,185,129,0.3)] -mt-[14px] relative z-[30]" />
                                    <div className="w-[70px] h-[22px] bg-[#032e1f] border border-emerald-500/80 rounded-[50%] flex items-center justify-center shadow-[0_4px_0_rgba(16,185,129,0.3)] -mt-[14px] relative z-[25]" />
                                    <div className="w-[70px] h-[22px] bg-[#032e1f] border border-emerald-500/80 rounded-[50%] flex items-center justify-center shadow-[0_4px_0_rgba(16,185,129,0.3)] -mt-[14px] relative z-[20]" />
                                    <div className="w-[70px] h-[22px] bg-[#032e1f] border border-emerald-500/80 rounded-[50%] flex items-center justify-center shadow-[0_4px_0_rgba(16,185,129,0.3)] -mt-[14px] relative z-[15]" />
                                </div>
                            </div>
                        </div>

                        {/* Right side list */}
                        <div className="w-full lg:w-auto relative z-10 flex justify-end mt-6 lg:mt-0">
                            <div className="bg-[#050B10] border border-white/5 rounded-xl p-4 w-full lg:w-[180px]">
                                <h5 className="text-white text-sm font-bold mb-3">Training Progress</h5>
                                <ul className="flex flex-col gap-2.5">
                                    {[
                                        'Scanning Website', 
                                        'Extracting Data', 
                                        'Creating Database', 
                                        'Training AI Model', 
                                        'Ready to Deploy'
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center justify-between text-xs text-slate-300">
                                            {item} <Check className="w-3.5 h-3.5 text-emerald-500" />
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Card 3: Embed Code */}
                    <div className="w-full lg:w-[280px] shrink-0 bg-[#091114] border border-white/5 rounded-2xl p-6 shadow-2xl flex flex-col justify-between relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-bl from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative z-10">
                            <h4 className="text-white font-bold text-base mb-1.5">Your Embed Code</h4>
                            <p className="text-slate-400 text-xs mb-5 leading-relaxed">Copy and paste this code in the <span className="text-white/60 bg-white/5 px-1 py-0.5 rounded">&lt;head&gt;</span> section of your website.</p>
                            
                            <div className="bg-[#050B10] border border-white/5 rounded-lg p-4 relative">
                                <code className="text-emerald-400/80 text-xs leading-[1.6] block font-mono break-all">
                                    <span className="text-slate-400">&lt;</span><span className="text-[#e2b93d]">script</span> <span className="text-[#a0c567]">src</span><span className="text-slate-400">=</span><span className="text-[#db8b69]">"https://cdn.xotbot.ai/embed.js"</span><br/>
                                    <span className="text-[#a0c567] ml-2">data-bot-id</span><span className="text-slate-400">=</span><span className="text-[#db8b69]">"your-bot-id"</span><span className="text-slate-400">&gt;</span><br/>
                                    <span className="text-slate-400">&lt;/</span><span className="text-[#e2b93d]">script</span><span className="text-slate-400">&gt;</span>
                                </code>
                                <button className="absolute top-2.5 right-2.5 p-1.5 bg-[#091114] rounded hover:bg-white/10 border border-white/5 transition-colors">
                                    <Copy className="w-3.5 h-3.5 text-emerald-500/80" />
                                </button>
                            </div>
                        </div>
                        <div className="mt-6 text-xs text-slate-400 relative z-10">
                            Need help? <a href="#" className="text-emerald-400 hover:text-emerald-300 font-medium ml-1">View Integration Guide →</a>
                        </div>
                    </div>
                </div>

                {/* Bottom Banner List */}
                <div className="w-full mx-auto bg-[#091114] border border-white/5 rounded-2xl p-6 lg:p-5 flex flex-wrap lg:flex-nowrap items-center justify-between gap-6 lg:gap-4 shadow-2xl relative z-10">
                    
                    {/* Item 1 */}
                    <div className="flex items-center gap-3 flex-1 min-w-[200px] lg:min-w-0">
                        <div className="w-10 h-10 rounded-full bg-[#050B10] flex items-center justify-center border border-white/5 shrink-0 shadow-[0_0_10px_rgba(16,185,129,0.1)]">
                            <Zap className="w-4 h-4 text-emerald-500" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-white text-sm font-bold mb-0.5">Go Live in Minutes</span>
                            <span className="text-slate-400 text-xs leading-snug">No coding. No complexity.</span>
                        </div>
                    </div>
                    
                    <div className="hidden lg:block w-[1px] h-8 bg-white/5" />
                    
                    {/* Item 2 */}
                    <div className="flex items-center gap-3 flex-1 min-w-[200px] lg:min-w-0">
                        <div className="w-10 h-10 rounded-full bg-[#050B10] flex items-center justify-center border border-white/5 shrink-0 shadow-[0_0_10px_rgba(16,185,129,0.1)]">
                            <Database className="w-4 h-4 text-emerald-500" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-white text-sm font-bold mb-0.5">Trained on Your Data</span>
                            <span className="text-slate-400 text-xs leading-snug">Every website gets its own database and AI model.</span>
                        </div>
                    </div>
                    
                    <div className="hidden lg:block w-[1px] h-8 bg-white/5" />
                    
                    {/* Item 3 */}
                    <div className="flex items-center gap-3 flex-1 min-w-[200px] lg:min-w-0">
                        <div className="w-10 h-10 rounded-full bg-[#050B10] flex items-center justify-center border border-white/5 shrink-0 shadow-[0_0_10px_rgba(16,185,129,0.1)]">
                            <Shield className="w-4 h-4 text-emerald-500" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-white text-sm font-bold mb-0.5">Secure & Private</span>
                            <span className="text-slate-400 text-xs leading-snug">Your data is safe and never shared with anyone.</span>
                        </div>
                    </div>
                    
                    <div className="hidden lg:block w-[1px] h-8 bg-white/5" />
                    
                    {/* Item 4 */}
                    <div className="flex items-center gap-3 flex-1 min-w-[200px] lg:min-w-0">
                        <div className="w-10 h-10 rounded-full bg-[#050B10] flex items-center justify-center border border-white/5 shrink-0 shadow-[0_0_10px_rgba(16,185,129,0.1)]">
                            <Code2 className="w-4 h-4 text-emerald-500" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-white text-sm font-bold mb-0.5">Easy Integration</span>
                            <span className="text-slate-400 text-xs leading-snug">One line of code to add XotBot to your website.</span>
                        </div>
                    </div>
                    
                    <div className="hidden lg:block w-[1px] h-8 bg-white/5" />
                    
                    {/* Item 5 */}
                    <div className="flex items-center gap-3 flex-1 min-w-[200px] lg:min-w-0">
                        <div className="w-10 h-10 rounded-full bg-[#050B10] flex items-center justify-center border border-white/5 shrink-0 shadow-[0_0_10px_rgba(16,185,129,0.1)]">
                            <MessageSquare className="w-4 h-4 text-emerald-500" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-white text-sm font-bold mb-0.5">Always Ready</span>
                            <span className="text-slate-400 text-xs leading-snug">AI chatbot works 24/7 to answer and convert visitors.</span>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default HowItWorksRedesign;
