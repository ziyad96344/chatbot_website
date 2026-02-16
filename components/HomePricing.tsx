import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import config from '../config/api';

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

const HomePricing: React.FC = () => {
    const [plans, setPlans] = useState<Plan[]>([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const fetchPlans = async () => {
            try {
                const res = await fetch(`${config.API_BASE_URL}/plans`);
                const data = await res.json();
                if (data.success && data.data) {
                    const parsed = data.data.map((p: any) => ({
                        ...p,
                        features: typeof p.features === 'string' ? JSON.parse(p.features) : (p.features || []),
                        price_monthly: p.price_monthly ? parseFloat(p.price_monthly) : 0,
                    }));
                    setPlans(parsed.slice(0, 4)); // Show max 4 plans
                }
            } catch {
                // Silently fail on home page
            } finally {
                setLoading(false);
            }
        };
        fetchPlans();
    }, []);

    if (loading || plans.length === 0) return null;

    return (
        <section className="relative py-20 px-6 md:px-12 bg-[#060610] overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50%] h-[50%] rounded-full bg-emerald-500/[0.03] blur-[120px]" />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <span className="text-[10px] tracking-[0.4em] uppercase text-emerald-400/70 mb-3 block font-mono">Pricing</span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter uppercase mb-3">
                        Simple <span className="text-emerald-400">Pricing</span>
                    </h2>
                    <p className="text-white/40 text-sm max-w-md mx-auto font-light">
                        Start free, scale as you grow. No hidden fees.
                    </p>
                </div>

                {/* Plan Cards */}
                <div className={`grid gap-4 ${plans.length <= 3 ? 'md:grid-cols-3' : 'md:grid-cols-4'} max-w-5xl mx-auto`}>
                    {plans.map((plan, i) => {
                        const isPopular = plan.slug === 'professional' || (plans.length >= 3 && i === 2);
                        const price = plan.price_monthly;
                        const features = Array.isArray(plan.features) ? plan.features.slice(0, 4) : [];

                        return (
                            <div key={plan.id}
                                className={`relative rounded-xl p-5 border transition-all duration-300 ${isPopular
                                    ? 'bg-white/[0.04] border-emerald-500/20'
                                    : 'bg-white/[0.02] border-white/[0.06] hover:border-white/[0.12]'
                                    }`}
                            >
                                {isPopular && (
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                                        <span className="text-[8px] uppercase tracking-widest bg-emerald-500 text-black font-bold px-3 py-1 rounded-full">
                                            Popular
                                        </span>
                                    </div>
                                )}

                                <h3 className="text-white font-bold text-sm mb-1">{plan.name}</h3>
                                <p className="text-white/30 text-[11px] mb-3 font-light min-h-[28px]">{plan.description}</p>

                                <div className="mb-4">
                                    {price && price > 0 ? (
                                        <div className="flex items-baseline gap-1">
                                            <span className="text-2xl font-bold text-white">₹{Number(price).toLocaleString('en-IN')}</span>
                                            <span className="text-white/30 text-[10px]">/mo</span>
                                        </div>
                                    ) : (
                                        <span className="text-2xl font-bold text-white">{plan.slug === 'enterprise' ? 'Custom' : 'Free'}</span>
                                    )}
                                </div>

                                <div className="h-[1px] bg-white/[0.06] mb-3" />

                                <ul className="space-y-1.5 mb-4">
                                    {features.map((f, j) => (
                                        <li key={j} className="flex items-center gap-2 text-[11px] text-white/40 font-light">
                                            <div className="w-1 h-1 rounded-full bg-emerald-500/50" />
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        );
                    })}
                </div>

                {/* View All CTA */}
                <div className="text-center mt-8">
                    <Link to="/pricing"
                        className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-emerald-400/70 hover:text-emerald-400 transition-colors font-mono group">
                        View All Plans
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default HomePricing;
