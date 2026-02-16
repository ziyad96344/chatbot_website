import React, { useEffect, useRef, useState } from 'react';

const useCases = [
    {
        icon: '/industries/ecommerce.png',
        industry: 'E-Commerce',
        headline: 'Sell More, Support Less',
        points: [
            'Answer product questions instantly',
            'Recommend products based on context',
            'Handle returns & order tracking',
            'Capture abandoned cart leads',
        ],
    },
    {
        icon: '/industries/tech.png',
        industry: 'SaaS & Tech',
        headline: 'Scale Support Without Headcount',
        points: [
            'Onboard new users automatically',
            'Reduce ticket volume by 70%',
            'Provide 24/7 technical support',
            'Surface relevant docs instantly',
        ],
    },
    {
        icon: '/industries/healthcare.png',
        industry: 'Healthcare',
        headline: 'Patient Care, Automated',
        points: [
            'Answer patient FAQs 24/7',
            'Help with appointment scheduling',
            'Provide symptom guidance',
            'Reduce front-desk call volume',
        ],
    },
    {
        icon: '/industries/education.png',
        industry: 'Education',
        headline: 'Smart Campus Assistant',
        points: [
            'Handle student queries at scale',
            'Admissions info on demand',
            'Course guidance & enrollment help',
            'Faculty & campus navigation',
        ],
    },
    {
        icon: '/industries/realestate.png',
        industry: 'Real Estate',
        headline: 'Never Miss a Lead',
        points: [
            'Answer property inquiries 24/7',
            'Schedule tours automatically',
            'Qualify leads before handoff',
            'Share listings & neighborhood info',
        ],
    },
    {
        icon: '/industries/enterprice.png',
        industry: 'Enterprise',
        headline: 'Internal Knowledge Base',
        points: [
            'HR policy Q&A for employees',
            'IT helpdesk automation',
            'Onboarding new team members',
            'Reduce internal support tickets',
        ],
    },
];

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

const UseCases: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const visible = useScrollReveal(sectionRef);

    return (
        <section ref={sectionRef} className="relative py-8 md:py-10 px-6 md:px-12 bg-[#080811] overflow-hidden">
            {/* Ambient */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-[40%] rounded-full bg-emerald-500/[0.03] blur-[120px]" />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto">
                {/* Heading */}
                <div className={`text-center mb-8 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <span className="text-[10px] tracking-[0.4em] uppercase text-emerald-400/70 mb-2 block font-mono">Use Cases</span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter uppercase mb-2">
                        Built for <span className="text-emerald-400">Every</span> Industry
                    </h2>
                    <p className="text-white/40 text-sm md:text-base max-w-lg mx-auto font-light leading-relaxed">
                        From startups to enterprises, Xotbot adapts to your business — no matter the industry.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {useCases.map((uc, i) => (
                        <div
                            key={i}
                            className={`group relative bg-white/[0.03] border border-white/[0.06] rounded-2xl p-4 hover:border-emerald-500/20 hover:bg-emerald-500/[0.03] transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                            style={{ transitionDelay: `${200 + i * 100}ms`, transitionDuration: '600ms' }}
                        >
                            {/* Emoji & Industry */}
                            <div className="flex items-center gap-3 mb-2">
                                <img src={uc.icon} alt={uc.industry} className="w-10 h-10 object-contain p-1" />
                                <div>
                                    <p className="text-[9px] text-white/30 uppercase tracking-widest">{uc.industry}</p>
                                    <h3 className="text-white font-bold text-base tracking-tight">{uc.headline}</h3>
                                </div>
                            </div>

                            {/* Bullet Points */}
                            <ul className="space-y-1.5">
                                {uc.points.map((point, j) => (
                                    <li key={j} className="flex items-start gap-2.5">
                                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/50 mt-1.5 shrink-0" />
                                        <span className="text-white/45 text-[13px] font-light leading-relaxed">{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UseCases;
