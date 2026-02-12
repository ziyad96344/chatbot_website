import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';

interface SubscriptionPlan {
    id: number;
    name: string;
    slug: string;
    description: string;
    features: string[] | string;
    price_monthly: number | string;
    price_yearly: number | string;
    is_active: boolean;
    sort_order: number;
    chatbot_limit: number;
    message_limit: number;
    voice_enabled: boolean;
    whatsapp_enabled: boolean;
    api_access: boolean;
    priority_support: boolean;
    branding_removable: boolean;
}

// Backend API URL
const API_BASE_URL = 'http://localhost:8000/api';

// Chatbot Frontend URL (for registration redirect)
const CHATBOT_FRONTEND_URL = 'http://localhost:3000';

const PricingPage: React.FC = () => {
    const navigate = useNavigate();
    const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
    const cardsRef = useRef<HTMLDivElement>(null);
    const [plans, setPlans] = useState<SubscriptionPlan[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Fetch plans from backend
    useEffect(() => {
        const fetchPlans = async () => {
            try {
                setLoading(true);
                setError(null);
                const response = await fetch(`${API_BASE_URL}/plans`);
                const data = await response.json();

                if (data.success && data.data) {
                    // Parse features if they come as JSON string
                    const parsedPlans = data.data.map((plan: any) => ({
                        ...plan,
                        features: typeof plan.features === 'string' ? JSON.parse(plan.features) : (plan.features || []),
                        price_monthly: plan.price_monthly ? parseFloat(plan.price_monthly) : null,
                        price_yearly: plan.price_yearly ? parseFloat(plan.price_yearly) : null,
                    }));
                    setPlans(parsedPlans);
                } else {
                    setError('Failed to load pricing plans');
                }
            } catch (err) {
                console.error('Error fetching plans:', err);
                setError('Unable to connect to server');
            } finally {
                setLoading(false);
            }
        };

        fetchPlans();
    }, []);

    // GSAP Floating Physics (Subtle float to keep it readable)
    useEffect(() => {
        if (!cardsRef.current || loading) return;
        const floaters = cardsRef.current.querySelectorAll('.floating-wrapper');

        floaters.forEach((el, i) => {
            gsap.to(el, {
                y: i % 2 === 0 ? -8 : 8,
                duration: 4 + i * 0.5,
                ease: 'sine.inOut',
                yoyo: true,
                repeat: -1,
                delay: i * 0.2,
                force3D: true
            });
        });
    }, [loading, plans]);

    // Determine which plan is "popular" (Professional or the 3rd plan)
    const getIsPopular = (plan: SubscriptionPlan, index: number) => {
        return plan.slug === 'professional' || (plans.length >= 3 && index === 2);
    };

    // Handle plan selection — redirect to chatbot frontend registration
    const handleSelectPlan = (plan: SubscriptionPlan) => {
        // Enterprise / custom pricing — go to contact page
        if (plan.slug === 'enterprise' || (plan.price_monthly === 0 && plan.slug !== 'free-trial')) {
            navigate('/contact');
            return;
        }

        // Redirect to chatbot frontend registration with plan slug
        window.location.href = `${CHATBOT_FRONTEND_URL}?plan=${plan.slug}`;
    };

    // Get display price
    const getDisplayPrice = (plan: SubscriptionPlan) => {
        const price = billingCycle === 'monthly' ? plan.price_monthly : plan.price_yearly;
        if (!price || price === 0) return null;
        // For yearly, show per-month price
        if (billingCycle === 'yearly' && typeof price === 'number') {
            return Math.round(price / 12);
        }
        return price;
    };

    // Get button text
    const getButtonText = (plan: SubscriptionPlan) => {
        if (plan.slug === 'enterprise') return 'Contact Us';
        if (plan.price_monthly === 0 || plan.slug === 'free-trial') return 'Start Free Trial';
        return 'Select Plan';
    };

    // Calculate yearly savings percentage
    const getYearlySavings = (plan: SubscriptionPlan) => {
        if (!plan.price_monthly || !plan.price_yearly) return 0;
        const monthlyTotal = Number(plan.price_monthly) * 12;
        const yearlyTotal = Number(plan.price_yearly);
        if (monthlyTotal <= 0) return 0;
        return Math.round(((monthlyTotal - yearlyTotal) / monthlyTotal) * 100);
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { type: 'spring', stiffness: 100, damping: 20 }
        }
    };

    return (
        <div className="min-h-screen bg-[#050505] overflow-x-hidden overflow-y-auto flex flex-col relative font-sans">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-20%] left-[20%] w-[400px] h-[400px] bg-purple-900/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-[-20%] right-[20%] w-[400px] h-[400px] bg-[#00ff00]/5 rounded-full blur-[100px]" />
            </div>

            <div className="w-full max-w-[1400px] mx-auto px-6 relative z-10 flex flex-col pt-24 md:pt-36 pb-20">
                {/* Header - Very Compact */}
                <div className="flex flex-col items-center mb-8 md:mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-4 mb-2"
                    >
                        <span className="text-[#00ff00] text-[10px] font-mono uppercase tracking-[0.3em]">
                            [ Pricing Matrix ]
                        </span>
                        <div className="h-[1px] w-8 bg-[#00ff00]/30" />
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tighter text-center leading-none"
                        style={{ fontFamily: "'Syne', sans-serif" }}
                    >
                        Transparent{' '}
                        <span className="bg-gradient-to-r from-white via-gray-400 to-gray-600 bg-clip-text text-transparent">
                            Intelligence
                        </span>.
                    </motion.h1>

                    {/* Compact Toggle */}
                    <div className="flex items-center gap-4 bg-white/5 px-4 py-1.5 rounded-full border border-white/5 backdrop-blur-sm">
                        <span className={`text-[11px] tracking-widest uppercase cursor-pointer transition-colors ${billingCycle === 'monthly' ? 'text-white font-bold' : 'text-gray-500'}`} onClick={() => setBillingCycle('monthly')}>Monthly</span>

                        <div
                            className="w-10 h-5 bg-black/50 rounded-full p-0.5 cursor-pointer relative"
                            onClick={() => setBillingCycle(prev => prev === 'monthly' ? 'yearly' : 'monthly')}
                        >
                            <motion.div
                                className="w-4 h-4 bg-[#00ff00] rounded-full shadow-[0_0_10px_#00ff00]"
                                animate={{ x: billingCycle === 'monthly' ? 0 : 20 }}
                                transition={{ type: "spring", stiffness: 600, damping: 25 }}
                            />
                        </div>

                        <span className={`text-[11px] tracking-widest uppercase cursor-pointer transition-colors ${billingCycle === 'yearly' ? 'text-white font-bold' : 'text-gray-500'}`} onClick={() => setBillingCycle('yearly')}>
                            Yearly <span className="text-[#00ff00] text-[9px] ml-0.5">Save More</span>
                        </span>
                    </div>
                </div>

                {/* Loading State */}
                {loading && (
                    <div className="flex items-center justify-center py-20">
                        <div className="flex flex-col items-center gap-4">
                            <div className="w-10 h-10 border-2 border-[#00ff00]/30 border-t-[#00ff00] rounded-full animate-spin" />
                            <span className="text-gray-500 text-xs uppercase tracking-widest">Loading Plans...</span>
                        </div>
                    </div>
                )}

                {/* Error State */}
                {error && !loading && (
                    <div className="flex items-center justify-center py-20">
                        <div className="flex flex-col items-center gap-4 text-center">
                            <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center">
                                <span className="text-red-400 text-xl">⚠</span>
                            </div>
                            <p className="text-gray-400 text-sm">{error}</p>
                            <button
                                onClick={() => window.location.reload()}
                                className="text-[#00ff00] text-xs uppercase tracking-widest hover:text-[#00ff00]/80 transition-colors"
                            >
                                Retry
                            </button>
                        </div>
                    </div>
                )}

                {/* Pricing Cards - Dense Grid */}
                {!loading && !error && plans.length > 0 && (
                    <motion.div
                        ref={cardsRef}
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className={`grid gap-4 lg:gap-6 items-stretch perspective-[1000px] w-full max-w-6xl mx-auto ${plans.length <= 3 ? 'md:grid-cols-3' : 'md:grid-cols-4'
                            }`}
                    >
                        {plans.map((plan, i) => {
                            const isPopular = getIsPopular(plan, i);
                            const displayPrice = getDisplayPrice(plan);
                            const yearlySavings = getYearlySavings(plan);

                            return (
                                <motion.div
                                    key={plan.id}
                                    variants={cardVariants}
                                    whileHover={{ scale: 1.02 }}
                                    className={`relative group rounded-2xl p-0.5 transition-all duration-500 ${isPopular ? 'z-10' : 'z-0'}`}
                                >
                                    {/* Inner wrapper for independent GSAP float */}
                                    <div className="floating-wrapper h-full">
                                        {/* Purple Glow for Popular Plan */}
                                        {isPopular && (
                                            <div className="absolute inset-0 bg-purple-600/10 blur-[40px] rounded-full -z-10" />
                                        )}

                                        {/* Glass Card */}
                                        <div className="relative h-full bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-xl p-5 lg:p-6 overflow-hidden hover:border-[#00ff00]/30 transition-colors duration-500 flex flex-col">

                                            {/* Shine Effect */}
                                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-[-20deg] translate-x-[-200%] group-hover:animate-shine pointer-events-none" />

                                            {isPopular && (
                                                <div className="absolute top-0 right-0 bg-[#00ff00] px-3 py-1 rounded-bl-xl shadow-[0_0_15px_rgba(0,255,0,0.3)]">
                                                    <p className="text-black text-[9px] font-bold uppercase tracking-widest">Popular</p>
                                                </div>
                                            )}

                                            <div className="mb-4">
                                                <h3 className="text-lg font-bold text-white mb-1 font-syne">{plan.name}</h3>
                                                <p className="text-gray-400 text-xs font-light leading-tight min-h-[32px]">{plan.description}</p>
                                            </div>

                                            <div className="mb-4">
                                                {displayPrice !== null ? (
                                                    <div className="flex items-baseline gap-1">
                                                        <span className="text-4xl lg:text-5xl font-bold text-white tracking-tighter leading-none">
                                                            ₹
                                                            <AnimatePresence mode='wait'>
                                                                <motion.span
                                                                    key={billingCycle}
                                                                    initial={{ opacity: 0, y: 10 }}
                                                                    animate={{ opacity: 1, y: 0 }}
                                                                    exit={{ opacity: 0, y: -10 }}
                                                                    transition={{ duration: 0.2 }}
                                                                    className="inline-block"
                                                                >
                                                                    {Number(displayPrice).toLocaleString('en-IN')}
                                                                </motion.span>
                                                            </AnimatePresence>
                                                        </span>
                                                        <span className="text-gray-500 text-xs">/mo</span>
                                                        {billingCycle === 'yearly' && yearlySavings > 0 && (
                                                            <span className="text-[#00ff00] text-[9px] ml-1 bg-[#00ff00]/10 px-2 py-0.5 rounded-full">
                                                                -{yearlySavings}%
                                                            </span>
                                                        )}
                                                    </div>
                                                ) : plan.price_monthly === 0 || plan.slug === 'free-trial' ? (
                                                    <div className="text-3xl lg:text-4xl font-bold text-white tracking-tighter leading-none">Free</div>
                                                ) : (
                                                    <div className="text-3xl lg:text-4xl font-bold text-white tracking-tighter leading-none">Custom</div>
                                                )}
                                            </div>

                                            <div className="h-[1px] w-full bg-white/5 mb-4" />

                                            <ul className="space-y-2.5 mb-6 flex-grow">
                                                {(Array.isArray(plan.features) ? plan.features : []).map((feature: string, j: number) => (
                                                    <motion.li
                                                        key={j}
                                                        className="flex items-center gap-2.5 text-xs text-gray-300 font-light"
                                                    >
                                                        <div className="w-1 h-1 rounded-full bg-[#00ff00] shadow-[0_0_5px_#00ff00]" />
                                                        {feature}
                                                    </motion.li>
                                                ))}
                                            </ul>

                                            <button
                                                onClick={() => handleSelectPlan(plan)}
                                                className={`w-full py-3 rounded-lg font-bold text-[10px] uppercase tracking-[0.2em] relative overflow-hidden group/btn ${isPopular
                                                    ? 'bg-[#00ff00] text-black shadow-[0_0_20px_rgba(0,255,0,0.2)] hover:shadow-[0_0_30px_rgba(0,255,0,0.4)]'
                                                    : 'bg-white/5 text-white border border-white/10 hover:bg-white/10'
                                                    } transition-all duration-300 mt-auto`}
                                            >
                                                <span className="relative z-10">{getButtonText(plan)}</span>
                                                {isPopular && (
                                                    <div className="absolute inset-0 bg-white/40 skew-x-[-20deg] translate-x-[-200%] animate-shine-slow pointer-events-none" />
                                                )}
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                )}

                {/* Footer Info - Absolute bottom */}
                <div className="absolute bottom-6 left-0 w-full text-center pointer-events-auto">
                    <p className="text-white/20 text-[10px] tracking-widest uppercase">
                        Secure 256-bit Encryption • Global CDN • 99.99% Uptime
                    </p>
                    <div className="flex items-center justify-center gap-3 mt-1.5 opacity-40 hover:opacity-100 transition-opacity duration-500">
                        <span className="text-[9px] font-mono text-white/30 tracking-widest uppercase">
                            A Product by
                        </span>
                        <a href="https://ottomern.com" target="_blank" rel="noopener noreferrer" className="text-[9px] font-mono text-white/50 tracking-widest uppercase hover:text-emerald-400 transition-colors border-b border-white/10 hover:border-emerald-400 pb-px">
                            Ottomern Technologies
                        </a>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes shine {
                    0% { transform: translateX(-200%) skewX(-20deg); }
                    100% { transform: translateX(200%) skewX(-20deg); }
                }
                .animate-shine {
                    animation: shine 1.5s ease-in-out infinite;
                }
                .animate-shine-slow {
                    animation: shine 3s ease-in-out infinite;
                }
                .font-syne {
                    font-family: 'Syne', sans-serif;
                }
            `}
            </style>
        </div>
    );
};

export default PricingPage;
