import React, { useEffect, useRef, useState } from 'react';

const steps = [
    {
        number: '01',
        title: 'Paste Your URL',
        description: 'Drop your website link and our AI instantly scans every page — products, pricing, FAQs, policies — learning your entire business.',
        visual: (
            <div className="relative w-full h-full flex items-center justify-center">
                <div className="w-full max-w-[260px] bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden">
                    <div className="flex items-center gap-1.5 p-2.5 border-b border-white/5">
                        <div className="w-2 h-2 rounded-full bg-red-500/50" />
                        <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                        <div className="w-2 h-2 rounded-full bg-green-500/50" />
                    </div>
                    <div className="p-4">
                        <div className="flex items-center gap-2 bg-white/5 rounded-lg px-3 py-2.5 border border-emerald-500/30">
                            <svg className="w-3.5 h-3.5 text-emerald-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-1.102-4.243a4 4 0 015.656 0l4 4a4 4 0 01-5.656 5.656l-1.1-1.1" /></svg>
                            <span className="text-[11px] text-emerald-400 font-mono">https://yoursite.com</span>
                        </div>
                        <div className="mt-3 space-y-1.5">
                            <div className="h-1.5 bg-emerald-500/20 rounded-full w-full animate-pulse" />
                            <div className="h-1.5 bg-emerald-500/10 rounded-full w-3/4 animate-pulse" style={{ animationDelay: '0.2s' }} />
                            <div className="h-1.5 bg-emerald-500/10 rounded-full w-1/2 animate-pulse" style={{ animationDelay: '0.4s' }} />
                        </div>
                        <p className="text-[9px] text-emerald-400/60 mt-3 font-mono">✓ 47 pages scanned...</p>
                    </div>
                </div>
            </div>
        ),
    },
    {
        number: '02',
        title: 'Customize Your Bot',
        description: 'Choose the look, personality, and voice of your AI assistant. Match your brand colors, tone, and style in a few clicks.',
        visual: (
            <div className="relative w-full h-full flex items-center justify-center">
                <div className="w-full max-w-[260px] space-y-3">
                    <div className="bg-[#0a0a0a] border border-white/10 rounded-xl p-4">
                        <p className="text-[9px] text-white/40 uppercase tracking-widest mb-3">Bot Appearance</p>
                        <div className="flex gap-2 mb-3">
                            {['#10b981', '#3b82f6', '#f59e0b', '#ef4444', '#8b5cf6'].map((c, i) => (
                                <div key={i} className={`w-7 h-7 rounded-full cursor-pointer transition-transform hover:scale-110 ${i === 0 ? 'ring-2 ring-white/30 ring-offset-2 ring-offset-[#0a0a0a]' : ''}`} style={{ backgroundColor: c }} />
                            ))}
                        </div>
                        <div className="flex gap-2">
                            <div className="flex-1 h-8 bg-white/5 rounded-lg flex items-center justify-center text-[9px] text-white/50 border border-white/10">Friendly</div>
                            <div className="flex-1 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center text-[9px] text-emerald-400 border border-emerald-500/30">Professional</div>
                        </div>
                    </div>
                    <div className="bg-[#0a0a0a] border border-white/10 rounded-xl p-3 flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center">
                            <svg className="w-3.5 h-3.5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>
                        </div>
                        <div>
                            <p className="text-[10px] text-white/70 font-medium">Voice: Sapphire</p>
                            <p className="text-[8px] text-white/30">Sweet & Youthful</p>
                        </div>
                        <div className="ml-auto flex gap-0.5 items-end h-4">
                            {[0.3, 0.6, 1, 0.7, 0.4].map((h, i) => (
                                <div key={i} className="w-1 bg-emerald-400 rounded-full animate-pulse" style={{ height: `${h * 16}px`, animationDelay: `${i * 0.1}s` }} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        ),
    },
    {
        number: '03',
        title: 'Go Live in Minutes',
        description: 'Copy one embed code, paste it into your site, and your AI assistant is live — answering questions 24/7, capturing leads, and learning.',
        visual: (
            <div className="relative w-full h-full flex items-center justify-center">
                <div className="w-full max-w-[260px]">
                    <div className="bg-[#0a0a0a] border border-white/10 rounded-xl p-4">
                        <p className="text-[9px] text-white/40 uppercase tracking-widest mb-3">Embed Code</p>
                        <div className="bg-black/50 rounded-lg p-3 font-mono text-[10px] text-emerald-400/80 leading-relaxed border border-emerald-500/10">
                            <span className="text-white/30">&lt;</span>
                            <span className="text-purple-400">script</span>
                            <span className="text-white/30"> </span>
                            <span className="text-blue-400">src</span>
                            <span className="text-white/30">=</span>
                            <span className="text-emerald-400">"xotbot.js"</span>
                            <span className="text-white/30">&gt;&lt;/</span>
                            <span className="text-purple-400">script</span>
                            <span className="text-white/30">&gt;</span>
                        </div>
                        <button className="mt-3 w-full py-2 bg-emerald-500/20 border border-emerald-500/30 rounded-lg text-[10px] text-emerald-400 uppercase tracking-widest hover:bg-emerald-500/30 transition-colors">
                            Copy Code
                        </button>
                    </div>
                    <div className="mt-3 flex items-center gap-2 justify-center">
                        <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" style={{ boxShadow: '0 0 8px rgba(16,185,129,0.6)' }} />
                        <span className="text-[10px] text-emerald-400/70 font-medium">Bot is LIVE on your site</span>
                    </div>
                </div>
            </div>
        ),
    },
];

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
        <section ref={sectionRef} className="relative py-28 px-6 md:px-12 bg-[#080811] overflow-hidden">
            {/* Ambient */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[40%] rounded-full bg-emerald-500/[0.03] blur-[120px]" />
            </div>

            <div className={`relative z-10 max-w-6xl mx-auto transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                {/* Heading */}
                <div className="text-center mb-16">
                    <span className="text-[10px] tracking-[0.4em] uppercase text-emerald-400/70 mb-3 block font-mono">How It Works</span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter uppercase mb-4">
                        Three Steps to<br /><span className="text-emerald-400">Intelligence</span>
                    </h2>
                    <p className="text-white/40 text-sm md:text-base max-w-lg mx-auto font-light leading-relaxed">
                        From zero to a fully trained AI assistant in under 5 minutes. No coding, no complexity.
                    </p>
                </div>

                {/* Steps Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 relative">
                    {/* Desktop connectors */}
                    <div className={`hidden md:block absolute top-[120px] left-[33%] w-[5%] h-[2px] bg-gradient-to-r from-emerald-500/40 to-emerald-500/10 origin-left transition-transform duration-700 delay-500 ${visible ? 'scale-x-100' : 'scale-x-0'}`} />
                    <div className={`hidden md:block absolute top-[120px] left-[62%] w-[5%] h-[2px] bg-gradient-to-r from-emerald-500/40 to-emerald-500/10 origin-left transition-transform duration-700 delay-700 ${visible ? 'scale-x-100' : 'scale-x-0'}`} />

                    {steps.map((step, idx) => (
                        <div
                            key={step.number}
                            className={`group transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                            style={{ transitionDelay: `${200 + idx * 150}ms` }}
                        >
                            <div className="relative bg-white/[0.02] border border-white/5 rounded-2xl p-6 hover:border-emerald-500/20 hover:bg-emerald-500/[0.02] transition-all duration-500 h-full">
                                {/* Step Number */}
                                <div className="flex items-center gap-3 mb-5">
                                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 font-mono text-sm font-bold group-hover:bg-emerald-500/20 transition-colors">
                                        {step.number}
                                    </div>
                                    <h3 className="text-lg font-bold text-white tracking-tight">{step.title}</h3>
                                </div>

                                {/* Visual */}
                                <div className="h-[200px] mb-5">
                                    {step.visual}
                                </div>

                                {/* Description */}
                                <p className="text-white/40 text-sm leading-relaxed font-light">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorksRedesign;
