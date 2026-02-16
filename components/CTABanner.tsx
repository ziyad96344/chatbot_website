import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

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

const CTABanner: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();
    const visible = useScrollReveal(sectionRef);

    return (
        <section ref={sectionRef} className="relative py-16 px-6 md:px-12 overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#080811] via-[#071a12] to-[#080811]" />
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[60%] rounded-full bg-emerald-500/[0.06] blur-[150px]" />
            </div>

            <div className={`relative z-10 max-w-3xl mx-auto text-center transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                {/* Decorative line */}
                <div className="flex items-center justify-center gap-3 mb-8">
                    <div className="w-8 h-[1px] bg-emerald-500/40" />
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" style={{ boxShadow: '0 0 12px rgba(16,185,129,0.6)' }} />
                    <div className="w-8 h-[1px] bg-emerald-500/40" />
                </div>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter uppercase mb-5 leading-tight">
                    Ready to Transform Your<br /><span className="text-emerald-400">Customer Experience?</span>
                </h2>

                <p className="text-white/40 text-base md:text-lg max-w-xl mx-auto mb-10 font-light leading-relaxed">
                    Build your AI chatbot in under 5 minutes. No credit card required. No coding needed. Just paste your URL and go.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    {/* Primary CTA */}
                    <button
                        onClick={() => navigate('/get-access')}
                        className="group relative px-10 py-4 bg-emerald-500 rounded-full text-black font-bold uppercase tracking-[0.15em] text-sm overflow-hidden hover:shadow-[0_0_40px_rgba(16,185,129,0.4)] transition-all duration-500 hover:-translate-y-0.5 cursor-pointer"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                        <span className="relative z-10 flex items-center gap-2">
                            Get Started Free
                            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                        </span>
                    </button>

                    {/* Secondary CTA */}
                    <button
                        onClick={() => navigate('/contact')}
                        className="px-10 py-4 bg-transparent border border-white/15 rounded-full text-white/70 font-bold uppercase tracking-[0.15em] text-sm hover:border-white/30 hover:text-white transition-all duration-300 cursor-pointer"
                    >
                        Book a Demo
                    </button>
                </div>

                {/* Sub-note */}
                <p className="text-white/20 text-[11px] mt-6 uppercase tracking-widest">
                    Free plan • No credit card • Setup in 5 minutes
                </p>
            </div>
        </section>
    );
};

export default CTABanner;
