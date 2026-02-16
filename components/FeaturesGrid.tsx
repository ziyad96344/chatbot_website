import React, { useEffect, useRef, useState } from 'react';

const features = [
    {
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
        ),
        title: 'AI Chatbot Builder',
        description: 'Build a custom AI chatbot trained on your website data — no coding required. Live in minutes.',
        accent: 'emerald',
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
            </svg>
        ),
        title: 'Voice AI Agent',
        description: 'Human-like voice conversations powered by your data. Customers can literally talk to your business.',
        accent: 'sky',
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
            </svg>
        ),
        title: 'Live Handoff',
        description: 'Seamlessly transfer complex queries from AI to a human agent — no conversation context lost.',
        accent: 'amber',
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
        ),
        title: 'Analytics Dashboard',
        description: 'Track conversations, satisfaction scores, and bot performance with real-time analytics and insights.',
        accent: 'violet',
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
        ),
        title: 'Website Scraping',
        description: 'AI auto-learns from your website, PDFs, and docs. Your knowledge base stays up-to-date automatically.',
        accent: 'rose',
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
            </svg>
        ),
        title: 'Multi-Platform Deploy',
        description: 'One bot, every platform. Works on Shopify, WordPress, Wix, Webflow, or any custom website.',
        accent: 'cyan',
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
        ),
        title: 'Lead Capture',
        description: 'Automatically collect visitor info and convert conversations into qualified leads for your sales team.',
        accent: 'orange',
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
        ),
        title: 'API & WhatsApp',
        description: 'Extend your bot to WhatsApp, connect via REST API, and integrate with any system you already use.',
        accent: 'lime',
    },
];

const accentMap: Record<string, { bg: string; border: string; text: string }> = {
    emerald: { bg: 'bg-emerald-500/10', border: 'border-emerald-500/20', text: 'text-emerald-400' },
    sky: { bg: 'bg-sky-500/10', border: 'border-sky-500/20', text: 'text-sky-400' },
    amber: { bg: 'bg-amber-500/10', border: 'border-amber-500/20', text: 'text-amber-400' },
    violet: { bg: 'bg-violet-500/10', border: 'border-violet-500/20', text: 'text-violet-400' },
    rose: { bg: 'bg-rose-500/10', border: 'border-rose-500/20', text: 'text-rose-400' },
    cyan: { bg: 'bg-cyan-500/10', border: 'border-cyan-500/20', text: 'text-cyan-400' },
    orange: { bg: 'bg-orange-500/10', border: 'border-orange-500/20', text: 'text-orange-400' },
    lime: { bg: 'bg-lime-500/10', border: 'border-lime-500/20', text: 'text-lime-400' },
};

function useScrollReveal(ref: React.RefObject<HTMLElement | null>, threshold = 0.1) {
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

const FeaturesGrid: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const visible = useScrollReveal(sectionRef);

    return (
        <section ref={sectionRef} className="relative py-28 px-6 md:px-12 bg-[#060610] overflow-hidden">
            {/* Ambient */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[-15%] right-[-10%] w-[50%] h-[50%] rounded-full bg-emerald-500/[0.03] blur-[120px]" />
                <div className="absolute bottom-[-15%] left-[-10%] w-[40%] h-[40%] rounded-full bg-violet-500/[0.03] blur-[100px]" />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto">
                {/* Heading */}
                <div className={`text-center mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <span className="text-[10px] tracking-[0.4em] uppercase text-emerald-400/70 mb-3 block font-mono">Features</span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter uppercase mb-4">
                        Everything You Need<br />to <span className="text-emerald-400">Automate</span> Support
                    </h2>
                    <p className="text-white/40 text-sm md:text-base max-w-lg mx-auto font-light leading-relaxed">
                        One platform. AI chat, voice, analytics, lead capture, and integrations — all out of the box.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {features.map((feat, i) => {
                        const colors = accentMap[feat.accent];
                        return (
                            <div
                                key={i}
                                className={`group relative bg-white/[0.03] border border-white/[0.06] rounded-2xl p-5 hover:border-white/15 transition-all duration-500 hover:bg-white/[0.05] cursor-default ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                                style={{ transitionDelay: `${200 + i * 80}ms`, transitionDuration: '600ms' }}
                            >
                                {/* Icon */}
                                <div className={`w-11 h-11 rounded-xl ${colors.bg} ${colors.border} border flex items-center justify-center ${colors.text} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                    {feat.icon}
                                </div>

                                {/* Title */}
                                <h3 className="text-white font-bold text-[15px] mb-2 tracking-tight">{feat.title}</h3>

                                {/* Description */}
                                <p className="text-white/40 text-[13px] leading-relaxed font-light">{feat.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default FeaturesGrid;
