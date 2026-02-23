import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, Globe, BarChart3, Palette, Check, X, Clock, DollarSign, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const WhyChooseUs = () => {
    return (
        <section className="relative py-24 px-6 md:px-12 overflow-hidden bg-[#0a0a0c]">
            {/* Background Gradients */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* 1. Headline Block */}
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] uppercase tracking-widest font-mono mb-6"
                    >
                        <Zap size={12} />
                        <span>Work Smarter, Not Harder</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                        Hire Your Best Employee <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">
                            For Just $20/Month.
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-white/40 max-w-2xl mx-auto font-light leading-relaxed"
                    >
                        Automate your support, cut costs by 90%, and never miss a lead again.
                        No hiring. No training. No overhead. Just results.
                    </motion.p>
                </div>

                {/* 2. What We Provide (4 Feature Cards) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
                    {[
                        { icon: BrainCircuit, title: "Smart AI Training", desc: "Instantly learns from your website & docs. No manual setup needed." },
                        { icon: Globe, title: "Multi-Platform", desc: "Works everywhere: Website widget, WhatsApp, and API integrations." },
                        { icon: BarChart3, title: "Deep Analytics", desc: "Track every conversation, lead, and user sentiment in real-time." },
                        { icon: Palette, title: "Fully Customizable", desc: "Match your brand's look & feel. Your bot, your rules." }
                    ].map((feature, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 * i }}
                            className="group p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.04] hover:border-emerald-500/30 transition-all duration-300"
                        >
                            <div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-4 group-hover:bg-emerald-500/20 transition-colors">
                                <feature.icon className="text-emerald-400" size={24} />
                            </div>
                            <h3 className="text-white font-bold text-lg mb-2">{feature.title}</h3>
                            <p className="text-white/40 text-sm leading-relaxed">{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* 3. Cost Comparison Table */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="mb-24 rounded-3xl overflow-hidden border border-white/[0.08] bg-white/[0.01]"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        {/* Traditional Support */}
                        <div className="p-10 border-b lg:border-b-0 lg:border-r border-white/[0.08] bg-white/[0.01]">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="p-2 rounded-lg bg-red-500/10 text-red-400">
                                    <Clock size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-white">Traditional Support</h3>
                            </div>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3 text-white/60">
                                    <X size={18} className="text-red-400 shrink-0" />
                                    <span>Cost: <strong className="text-white">$3,000+/mo</strong> per agent</span>
                                </li>
                                <li className="flex items-center gap-3 text-white/60">
                                    <X size={18} className="text-red-400 shrink-0" />
                                    <span>Availability: 9-5 only (missed leads)</span>
                                </li>
                                <li className="flex items-center gap-3 text-white/60">
                                    <X size={18} className="text-red-400 shrink-0" />
                                    <span>Training: Weeks of onboarding</span>
                                </li>
                                <li className="flex items-center gap-3 text-white/60">
                                    <X size={18} className="text-red-400 shrink-0" />
                                    <span>Response Time: Minutes to hours</span>
                                </li>
                            </ul>
                        </div>

                        {/* AI Bot */}
                        <div className="p-10 bg-gradient-to-br from-emerald-500/[0.05] to-transparent relative">
                            <div className="absolute top-0 right-0 p-3 bg-emerald-500 text-black text-xs font-bold uppercase tracking-wider rounded-bl-xl">
                                Recommended
                            </div>
                            <div className="flex items-center gap-3 mb-8">
                                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                                    <Zap size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-white">Xotbot AI Agent</h3>
                            </div>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3 text-white">
                                    <Check size={18} className="text-emerald-400 shrink-0" />
                                    <span>Cost: <strong className="text-emerald-400">$20/mo</strong> flat rate</span>
                                </li>
                                <li className="flex items-center gap-3 text-white">
                                    <Check size={18} className="text-emerald-400 shrink-0" />
                                    <span>Availability: 24/7/365 instant availability</span>
                                </li>
                                <li className="flex items-center gap-3 text-white">
                                    <Check size={18} className="text-emerald-400 shrink-0" />
                                    <span>Training: Instant (upload docs & go)</span>
                                </li>
                                <li className="flex items-center gap-3 text-white">
                                    <Check size={18} className="text-emerald-400 shrink-0" />
                                    <span>Response Time: &lt; 1 second</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="p-4 text-center bg-white/[0.02] border-t border-white/[0.08]">
                        <p className="text-sm font-medium text-emerald-400">
                            Result: Save up to 90% on support costs while increasing coverage.
                        </p>
                    </div>
                </motion.div>

                {/* 4. Business Impact & ROI */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
                    {[
                        { title: "More Leads", desc: "Capture every visitor, even while you sleep. No lead left behind.", stat: "+40%" },
                        { title: "Higher Conversion", desc: "Instant answers keep visitors engaged and ready to buy.", stat: "2x" },
                        { title: "Time Saved", desc: "Focus on growing your business, not answering 'pricing?' emails.", stat: "20hrs/wk" }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 * i }}
                            className="text-center"
                        >
                            <h4 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-white/20 mb-2 font-mono">
                                {item.stat}
                            </h4>
                            <h5 className="text-white font-bold text-lg mb-2">{item.title}</h5>
                            <p className="text-white/40 text-sm max-w-xs mx-auto">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* 5. Simple ROI Justification */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto text-center bg-gradient-to-br from-emerald-900/20 to-transparent p-8 rounded-2xl border border-emerald-500/20 mb-16"
                >
                    <div className="flex justify-center mb-4 text-emerald-400">
                        <DollarSign size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">The ROI Math is Simple</h3>
                    <p className="text-white/60 text-lg">
                        "If the bot brings just <span className="text-emerald-400 font-bold">one extra sale</span> per month, it already pays for itself."
                    </p>
                </motion.div>

                {/* 6. Mini CTA Block */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <h2 className="text-3xl font-bold text-white mb-8 tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                        Ready to automate your growth?
                    </h2>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            to="/pricing"
                            className="px-8 py-4 bg-emerald-500 text-black font-bold text-sm uppercase tracking-widest rounded-full hover:bg-emerald-400 transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] transform hover:-translate-y-1"
                        >
                            Start for $20/Month
                        </Link>
                        <Link
                            to="/pricing"
                            className="px-8 py-4 bg-transparent border border-white/10 text-white font-bold text-sm uppercase tracking-widest rounded-full hover:bg-white/5 transition-all"
                        >
                            Try Free
                        </Link>
                    </div>
                    <p className="mt-6 text-white/30 text-xs">
                        14-day free trial • No credit card required • Cancel anytime
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
