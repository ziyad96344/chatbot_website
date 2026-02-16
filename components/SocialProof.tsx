import React, { useEffect, useRef, useState } from 'react';
import { ShieldCheck, Globe, Lock, Activity } from 'lucide-react';

const stats = [
    { value: 10000, suffix: '+', label: 'Conversations Handled', prefix: '' },
    { value: 500, suffix: '+', label: 'Bots Deployed', prefix: '' },
    { value: 99.9, suffix: '%', label: 'Uptime Guarantee', decimals: 1, prefix: '' },
    { value: 50, prefix: '<', suffix: 'ms', label: 'Response Time' },
];

const trustBadges = [
    { label: 'SOC2 Compliant', icon: ShieldCheck },
    { label: 'GDPR Ready', icon: Globe },
    { label: '256-bit Encryption', icon: Lock },
    { label: '24/7 Monitoring', icon: Activity },
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

// Simple counter animation using requestAnimationFrame
function useCountUp(target: number, duration: number, start: boolean, decimals = 0) {
    const [value, setValue] = useState(0);
    useEffect(() => {
        if (!start) return;
        let startTime: number | null = null;
        let raf: number;
        const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
            setValue(parseFloat((eased * target).toFixed(decimals)));
            if (progress < 1) raf = requestAnimationFrame(step);
        };
        raf = requestAnimationFrame(step);
        return () => cancelAnimationFrame(raf);
    }, [start, target, duration, decimals]);
    return value;
}

const StatItem: React.FC<{ stat: typeof stats[0]; started: boolean }> = ({ stat, started }) => {
    const count = useCountUp(stat.value, 2000, started, stat.decimals || 0);
    const display = stat.decimals
        ? count.toFixed(stat.decimals)
        : Math.floor(count).toLocaleString();

    return (
        <div className="text-center">
            <div className="text-3xl md:text-4xl font-black text-white tracking-tight mb-1">
                {stat.prefix || ''}{display}{stat.suffix}
            </div>
            <p className="text-white/30 text-[11px] uppercase tracking-widest font-medium">{stat.label}</p>
        </div>
    );
};

const SocialProof: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const visible = useScrollReveal(sectionRef);

    return (
        <section ref={sectionRef} className="relative min-h-[80vh] flex flex-col justify-center py-20 px-6 md:px-12 bg-[#060610] overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50%] h-[50%] rounded-full bg-emerald-500/[0.04] blur-[150px]" />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto">
                {/* Heading */}
                <div className={`text-center mb-14 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <span className="text-[10px] tracking-[0.4em] uppercase text-emerald-400/70 mb-3 block font-mono">Trusted Worldwide</span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter uppercase mb-4">
                        Numbers That <span className="text-emerald-400">Speak</span>
                    </h2>
                    <p className="text-white/40 text-sm md:text-base max-w-md mx-auto font-light">
                        Businesses trust Xotbot to power their customer engagement every single day.
                    </p>
                </div>

                {/* Stats Counter */}
                <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 mb-14 transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    {stats.map((stat, i) => (
                        <StatItem key={i} stat={stat} started={visible} />
                    ))}
                </div>

                {/* Divider */}
                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mb-14" />

                {/* Trust Badges */}
                <div className={`flex flex-wrap justify-center gap-4 transition-all duration-700 delay-400 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                    {trustBadges.map((badge, i) => (
                        <div
                            key={i}
                            className="flex items-center gap-2.5 px-5 py-3 bg-white/[0.03] border border-white/[0.06] rounded-full hover:border-emerald-500/20 transition-all duration-300"
                            style={{ transitionDelay: `${500 + i * 80}ms` }}
                        >
                            <span className="text-emerald-400">
                                <badge.icon size={16} />
                            </span>
                            <span className="text-[11px] text-white/50 uppercase tracking-widest font-medium">{badge.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SocialProof;
