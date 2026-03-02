import React, { useEffect, useRef, useState } from 'react';

const steps = [
    {
        number: '01',
        title: 'Enter your website URL',
        description: 'Drop your website link and our AI instantly scans every page — products, pricing, FAQs, policies — learning your entire business in seconds.',
        visual: (
            <div className="relative w-full h-full flex items-center justify-center">
                <div className="w-full max-w-[260px] bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden">
                    <div className="flex items-center gap-1.5 p-2.5 border-b border-white/5">
                        <div className="w-2 h-2 rounded-full bg-red-500/50" />
                        <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                        <div className="w-2 h-2 rounded-full bg-green-500/50" />
                    </div>
                    <div className="p-4">
                        <div className="flex items-center gap-2 bg-white/5 rounded-lg px-3 py-2.5 border border-red-500/30">
                            <span className="text-[11px] text-red-500 font-mono">https://yoursite.com</span>
                            <div className="ml-auto w-3.5 h-3.5 border-2 border-red-500/30 border-t-red-500 rounded-full animate-spin" />
                        </div>
                        <div className="mt-3 space-y-1.5">
                            <div className="h-1.5 bg-red-500/20 rounded-full w-full animate-pulse" />
                            <div className="h-1.5 bg-red-500/10 rounded-full w-3/4 animate-pulse" style={{ animationDelay: '0.2s' }} />
                        </div>
                    </div>
                </div>
            </div>
        ),
    },
    {
        number: '02',
        title: 'AI learns your business',
        description: 'The core engine automatically structures your data perfectly to ensure 100% accurate, hallucination-free answers.',
        visual: (
            <div className="relative w-full h-full flex items-center justify-center">
                <div className="w-32 h-32 rounded-full border border-orange-500/30 flex items-center justify-center relative bg-[#0a0a0a] shadow-[0_0_30px_rgba(249,115,22,0.1)]">
                     <div className="absolute inset-2 border border-dashed border-orange-500/20 rounded-full animate-[spin_10s_linear_infinite]" />
                     <div className="text-orange-400 font-mono text-[10px] uppercase text-center">
                        <div>Building</div>
                        <div>Knowledge</div>
                        <div>Graph</div>
                     </div>
                </div>
            </div>
        ),
    },
    {
        number: '03',
        title: 'Customize design',
        description: 'Match your brand identity with pixel-perfect precision. Colors, tones, and avatars that look and feel like you.',
        visual: (
            <div className="relative w-full h-full flex items-center justify-center">
                <div className="w-full max-w-[260px] space-y-3">
                    <div className="bg-[#0a0a0a] border border-white/10 rounded-xl p-4">
                        <div className="flex gap-2 mb-3">
                            {['#ef4444', '#f97316', '#f59e0b', '#10b981', '#3b82f6'].map((c, i) => (
                                <div key={i} className={`w-6 h-6 rounded-full ${i === 0 ? 'ring-2 ring-white/30 ring-offset-2 ring-offset-[#0a0a0a]' : ''}`} style={{ backgroundColor: c }} />
                            ))}
                        </div>
                        <div className="flex gap-2">
                            <div className="flex-1 h-6 bg-white/5 rounded-md flex items-center justify-center text-[8px] text-white/50 border border-white/10">Friendly</div>
                            <div className="flex-1 h-6 bg-red-500/20 rounded-md flex items-center justify-center text-[8px] text-red-500 border border-red-500/30">Professional</div>
                        </div>
                    </div>
                </div>
            </div>
        ),
    },
    {
        number: '04',
        title: 'Embed & Go Live',
        description: 'Copy one embed code, paste it into your site, and your AI assistant is live — answering questions 24/7.',
        visual: (
             <div className="relative w-full h-full flex items-center justify-center">
                <div className="w-full max-w-[260px]">
                    <div className="bg-[#0a0a0a] border border-white/10 rounded-xl p-4">
                        <div className="bg-black/50 rounded-lg p-3 font-mono text-[9px] text-red-400/80 leading-relaxed border border-red-500/10">
                            <span className="text-white/30">&lt;</span><span className="text-orange-400">script</span><span className="text-white/30"> </span><span className="text-red-400">src</span><span className="text-white/30">=</span><span className="text-orange-400">"xotbot.js"</span><span className="text-white/30">&gt;</span><br/><span className="text-white/30">&lt;/</span><span className="text-orange-400">script</span><span className="text-white/30">&gt;</span>
                        </div>
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
        <section ref={sectionRef} className="min-h-screen relative py-20 px-6 md:px-12 bg-[#030303] overflow-hidden flex flex-col items-center justify-center">
            {/* Ambient */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[40%] rounded-full bg-red-900/10 blur-[150px]" />
            </div>

            <div className={`relative z-10 max-w-7xl mx-auto w-full transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                {/* Heading */}
                <div className="max-w-4xl text-center mb-16 mx-auto px-4">
                    <span className="text-red-500/90 font-mono text-[11px] md:text-sm tracking-[0.3em] uppercase mb-4 block font-bold">Simplicity</span>
                    <h2 
                        className="text-4xl md:text-5xl lg:text-5xl font-black uppercase tracking-tighter mb-4 leading-[1.1]"
                        style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
                    >
                        How XotBot Works in <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400">4 Simple Steps</span>
                    </h2>
                    
                    {/* Authority Badges */}
                    <div className="flex flex-wrap justify-center gap-4 mb-6">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full">
                            <span className="text-xs text-white/70">Powered by</span>
                            <span className="text-sm font-bold text-white tracking-tight">Google Gemini AI</span>
                        </div>
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full">
                            <span className="text-xs text-white/70">Vector Search by</span>
                            <span className="text-sm font-bold text-white tracking-tight">Qdrant</span>
                        </div>
                    </div>
                    
                    <p className="text-white/70 max-w-[800px] mx-auto text-base md:text-lg font-light leading-relaxed">
                        From zero to a fully trained AI assistant in under 5 minutes. No coding, no complexity.
                    </p>
                </div>

                {/* Steps Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-4 relative mx-auto">
                    {/* Desktop connectors */}
                    <div className={`hidden lg:block absolute top-[120px] left-[22%] w-[6%] h-[2px] bg-gradient-to-r from-red-500/40 to-red-500/10 origin-left transition-transform duration-700 delay-500 ${visible ? 'scale-x-100' : 'scale-x-0'}`} />
                    <div className={`hidden lg:block absolute top-[120px] left-[47%] w-[6%] h-[2px] bg-gradient-to-r from-red-500/40 to-red-500/10 origin-left transition-transform duration-700 delay-700 ${visible ? 'scale-x-100' : 'scale-x-0'}`} />
                    <div className={`hidden lg:block absolute top-[120px] left-[72%] w-[6%] h-[2px] bg-gradient-to-r from-red-500/40 to-red-500/10 origin-left transition-transform duration-700 delay-900 ${visible ? 'scale-x-100' : 'scale-x-0'}`} />

                    {steps.map((step, idx) => (
                        <div
                            key={step.number}
                            className={`group transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                            style={{ transitionDelay: `${200 + idx * 150}ms` }}
                        >
                            <div className="relative bg-[#130b0b] border border-red-500/20 rounded-2xl p-6 hover:border-red-500/50 hover:bg-[#1a0f0f] transition-all duration-500 h-full shadow-[0_0_30px_rgba(239,68,68,0.05)] hover:shadow-[0_0_50px_rgba(239,68,68,0.15)] flex flex-col items-start group-hover:scale-[1.02]">
                                {/* Step Number */}
                                <div className="flex items-center gap-3 mb-5 w-full">
                                    <div className="w-10 h-10 rounded-xl bg-red-500/20 border border-red-500/30 flex items-center justify-center text-red-500 font-mono text-sm font-bold group-hover:bg-red-500/30 transition-colors">
                                        {step.number}
                                    </div>
                                    <h3 
                                        className="text-lg font-bold text-white tracking-tight leading-tight flex-1 group-hover:text-red-400 transition-colors"
                                        style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
                                    >
                                        {step.title}
                                    </h3>
                                </div>

                                {/* Visual */}
                                <div className="h-[120px] mb-5">
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
