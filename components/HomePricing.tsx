import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import config from '../config/api';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Plan {
    id: number;
    name: string;
    slug: string;
    description: string;
    features: string[] | string;
    price_monthly: number | string;
    price_yearly: number | string;
    is_active: boolean;
}

const fallbackPlans: Plan[] = [
    {
        id: 1,
        name: 'Starter',
        slug: 'starter',
        description: 'Perfect for small websites to automate basic support.',
        features: ['1 Chatbot', '500 Messages/mo', 'Basic Analytics', 'Email Support'],
        price_monthly: 0,
        price_yearly: 0,
        is_active: true
    },
    {
        id: 2,
        name: 'Growth',
        slug: 'growth',
        description: 'Ideal for growing businesses needing omnichannel.',
        features: ['3 Chatbots', '5,000 Messages/mo', 'WhatsApp Integration', 'Priority Support'],
        price_monthly: 2999,
        price_yearly: 29990,
        is_active: true
    },
    {
        id: 3,
        name: 'Enterprise',
        slug: 'enterprise',
        description: 'Custom AI solutions for large-scale operations.',
        features: ['Unlimited Chatbots', 'Unlimited Messages', 'Custom LLM Training', 'Dedicated Manager'],
        price_monthly: 0,
        price_yearly: 0,
        is_active: true
    }
];

const HomePricing: React.FC = () => {
    const [plans, setPlans] = useState<Plan[]>([]);
    const [loading, setLoading] = useState(true);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const fetchPlans = async () => {
            try {
                const res = await fetch(`${config.API_BASE_URL}/plans`);
                const data = await res.json();
                if (data.success && data.data && data.data.length > 0) {
                    const parsed = data.data.map((p: any) => ({
                        ...p,
                        features: typeof p.features === 'string' ? JSON.parse(p.features) : (p.features || []),
                        price_monthly: p.price_monthly ? parseFloat(p.price_monthly) : 0,
                    }));
                    setPlans(parsed.slice(0, 4));
                } else {
                    setPlans(fallbackPlans);
                }
            } catch {
                // If API fails, load fallback data
                setPlans(fallbackPlans);
            } finally {
                setLoading(false);
            }
        };
        fetchPlans();
    }, []);

    useEffect(() => {
        if (!loading && plans.length > 0) {
            const ctx = gsap.context(() => {
                gsap.fromTo(sectionRef.current,
                    { opacity: 0, y: 40 },
                    {
                        opacity: 1, y: 0, duration: 1,
                        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" }
                    }
                );

                gsap.fromTo(".pricing-card",
                    { opacity: 0, y: 20 },
                    {
                        opacity: 1, y: 0, stagger: 0.1, duration: 0.8, delay: 0.2,
                        scrollTrigger: { trigger: sectionRef.current, start: "top 70%" }
                    }
                );
            }, sectionRef);
            return () => ctx.revert();
        }
    }, [loading, plans]);

    if (loading && plans.length === 0) return null;

    return (
        <section ref={sectionRef} className="relative py-24 px-6 md:px-12 bg-[#030303] overflow-hidden border-b border-white/[0.05]">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[500px] rounded-full bg-red-900/10 blur-[150px]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto w-full px-4">
                {/* Header */}
                <div className="text-center mb-16 max-w-4xl mx-auto">
                    <span className="text-red-500/90 font-mono text-[11px] md:text-sm tracking-[0.3em] uppercase mb-4 block font-bold">Pricing</span>
                    <h2 className="text-4xl md:text-5xl lg:text-5xl font-black uppercase tracking-tighter mb-4 leading-[1.1]" style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}>
                        Simple <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400">Pricing</span>
                    </h2>
                    <p className="text-white/70 max-w-[800px] mx-auto text-base md:text-lg font-light leading-relaxed">
                        Start free, scale as you grow. No hidden fees.
                    </p>
                </div>

                {/* Plan Cards */}
                <div className={`grid gap-6 ${plans.length <= 3 ? 'md:grid-cols-3' : 'md:grid-cols-4'} max-w-5xl mx-auto`}>
                    {plans.map((plan, i) => {
                        const isPopular = plan.slug === 'growth' || plan.slug === 'professional' || (plans.length >= 3 && i === 1);
                        const price = plan.price_monthly;
                        const features = Array.isArray(plan.features) ? plan.features.slice(0, 4) : [];

                        return (
                            <div key={plan.id}
                                className={`pricing-card group relative rounded-2xl p-6 md:p-8 border transition-all duration-500 ${isPopular
                                    ? 'bg-[#0a0505] border-red-500/30 hover:border-red-500/50 shadow-[0_0_30px_rgba(239,68,68,0.1)] hover:shadow-[0_0_40px_rgba(239,68,68,0.2)] hover:-translate-y-2'
                                    : 'bg-[#0a0a0a] border-white/5 hover:border-white/10 hover:-translate-y-2'
                                    }`}
                            >
                                {isPopular && (
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                                        <span className="text-[10px] uppercase tracking-widest bg-gradient-to-r from-red-500 to-orange-400 text-white font-bold px-4 py-1 rounded-full shadow-[0_0_10px_rgba(239,68,68,0.5)]">
                                            Most Popular
                                        </span>
                                    </div>
                                )}

                                <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}>{plan.name}</h3>
                                <p className="text-white/40 text-[12px] mb-6 font-light min-h-[36px]">{plan.description}</p>

                                <div className="mb-6">
                                    {price && price > 0 ? (
                                        <div className="flex items-baseline gap-1">
                                            <span className="text-3xl lg:text-4xl font-black text-white">₹{Number(price).toLocaleString('en-IN')}</span>
                                            <span className="text-white/40 text-[12px] font-mono">/mo</span>
                                        </div>
                                    ) : (
                                        <span className="text-3xl lg:text-4xl font-black text-white">{plan.slug === 'enterprise' ? 'Custom' : 'Free'}</span>
                                    )}
                                </div>

                                <div className={`h-[1px] mb-6 ${isPopular ? 'bg-gradient-to-r from-red-500/50 to-orange-400/50' : 'bg-white/10'}`} />

                                <ul className="space-y-3 mb-8">
                                    {features.map((f, j) => (
                                        <li key={j} className="flex items-center gap-3 text-[13px] text-white/70 font-light">
                                            <svg className={`w-4 h-4 ${isPopular ? 'text-red-500' : 'text-white/30'}`} viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                                
                                <button className={`w-full py-3 rounded-xl text-sm font-bold uppercase tracking-wider transition-all duration-300 ${isPopular ? 'bg-white text-black hover:bg-red-50 hover:text-red-600' : 'bg-white/5 text-white hover:bg-white/10'}`}>
                                    {plan.slug === 'enterprise' ? 'Contact Us' : 'Get Started'}
                                </button>
                            </div>
                        );
                    })}
                </div>

                {/* View All CTA */}
                <div className="text-center mt-12">
                    <Link to="/pricing"
                        className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-red-500/70 hover:text-red-500 transition-colors font-mono group font-bold">
                        Compare All Features
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default HomePricing;
