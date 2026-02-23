import React, { useState } from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { Play, Calendar, MessageSquare, Zap, Shield, Globe } from 'lucide-react';
import Footer from '../components/Footer';
import config from '../config/api';

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const highlights = [
    { icon: Zap, title: 'Live in 5 Minutes', desc: 'See your AI chatbot come to life in real-time during the demo.' },
    { icon: MessageSquare, title: 'Custom Walkthrough', desc: 'We tailor the demo to your specific industry and use case.' },
    { icon: Globe, title: 'Multi-Channel Preview', desc: 'See how your bot works on web, WhatsApp, and voice channels.' },
    { icon: Shield, title: 'No Commitment', desc: 'Free demo with no strings attached. See the value before you decide.' },
];

const DemoPage: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');



    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        try {
            const res = await fetch(`${config.API_BASE_URL}/website/demo-request`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
                body: JSON.stringify(formData),
            });
            const data = await res.json();
            if (data.success) {
                setSubmitted(true);
            } else {
                setError(data.message || 'Something went wrong');
            }
        } catch {
            setError('Failed to submit. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#0a0a0c] overflow-x-hidden">
            <SEO
                title="Try XotBot Demo — See AI Chatbot in Action"
                description="Book a personalized demo and see how XotBot's AI chatbot can transform your customer engagement. Live setup in 5 minutes, multi-channel preview, no commitment."
                keywords="AI chatbot demo, try AI chatbot, chatbot live demo, XotBot demo, book AI chatbot demo"
                canonicalUrl="https://xotbot.com/demo"
            />
            <div className="fixed inset-0 pointer-events-none opacity-[0.03]"
                style={{
                    backgroundImage: `radial-gradient(circle at 40% 30%, rgba(16,185,129,0.15) 0%, transparent 50%),
                    radial-gradient(circle at 60% 70%, rgba(139,92,246,0.1) 0%, transparent 50%)`,
                }}
            />

            {/* Hero */}
            <section className="relative pt-20 pb-16 px-6 md:px-12">
                <div className="max-w-5xl mx-auto text-center">
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-[10px] uppercase tracking-[0.5em] text-emerald-400/60 mb-6 font-mono">
                        See It In Action
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                        Experience the{' '}
                        <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">Power</span>
                        <span className="text-emerald-400">.</span>
                    </motion.h1>
                    <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                        className="text-lg text-white/40 max-w-xl mx-auto font-light">
                        Book a personalized demo and see how Xotbot can transform your customer engagement in minutes.
                    </motion.p>
                </div>
            </section>

            {/* Demo Content */}
            <section className="px-6 md:px-12 pb-24">
                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 items-start">
                    {/* Left: Highlights + Video Preview */}
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
                        className="flex-1 space-y-8">

                        {/* Video Preview */}
                        <motion.div variants={fadeUp}
                            className="relative rounded-xl overflow-hidden border border-white/[0.06] bg-white/[0.02] aspect-video flex items-center justify-center group cursor-pointer">
                            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/[0.05] to-transparent" />
                            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center group-hover:bg-emerald-500/30 group-hover:scale-110 transition-all duration-300">
                                <Play size={24} className="text-emerald-400 ml-1" />
                            </div>
                            <span className="absolute bottom-4 left-4 text-[10px] uppercase tracking-widest text-white/30 font-mono">Product Preview</span>
                        </motion.div>

                        {/* Highlight Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {highlights.map((h, i) => (
                                <motion.div key={i} variants={fadeUp}
                                    className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-emerald-500/20 transition-colors">
                                    <div className="flex items-center gap-3 mb-2">
                                        <h.icon size={16} className="text-emerald-400" />
                                        <h4 className="text-white text-sm font-semibold">{h.title}</h4>
                                    </div>
                                    <p className="text-white/35 text-xs leading-relaxed font-light">{h.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right: Book Demo Form */}
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                        className="w-full lg:w-[420px] lg:sticky lg:top-28">
                        <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-xl p-6 md:p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <Calendar size={18} className="text-emerald-400" />
                                <h3 className="text-white font-bold text-lg">Book a Demo</h3>
                            </div>

                            {!submitted ? (
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <input type="text" placeholder="Your Name" required value={formData.name}
                                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full px-4 py-3 rounded-lg bg-white/[0.04] border border-white/[0.08] text-white text-sm placeholder:text-white/25 focus:border-emerald-500/40 focus:outline-none transition-colors" />
                                    <input type="email" placeholder="Work Email" required value={formData.email}
                                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full px-4 py-3 rounded-lg bg-white/[0.04] border border-white/[0.08] text-white text-sm placeholder:text-white/25 focus:border-emerald-500/40 focus:outline-none transition-colors" />
                                    <input type="text" placeholder="Company Name" value={formData.company}
                                        onChange={e => setFormData({ ...formData, company: e.target.value })}
                                        className="w-full px-4 py-3 rounded-lg bg-white/[0.04] border border-white/[0.08] text-white text-sm placeholder:text-white/25 focus:border-emerald-500/40 focus:outline-none transition-colors" />
                                    <textarea placeholder="Tell us about your use case..." rows={3} value={formData.message}
                                        onChange={e => setFormData({ ...formData, message: e.target.value })}
                                        className="w-full px-4 py-3 rounded-lg bg-white/[0.04] border border-white/[0.08] text-white text-sm placeholder:text-white/25 focus:border-emerald-500/40 focus:outline-none transition-colors resize-none" />
                                    <button type="submit" disabled={loading}
                                        className="w-full py-3.5 bg-emerald-500 text-black font-bold text-xs uppercase tracking-[0.2em] rounded-lg hover:bg-emerald-400 transition-colors shadow-[0_0_20px_rgba(16,185,129,0.2)] disabled:opacity-50 disabled:cursor-not-allowed">
                                        {loading ? 'Submitting...' : 'Schedule Demo'}
                                    </button>
                                    {error && <p className="text-red-400 text-[11px] text-center">{error}</p>}
                                    <p className="text-white/20 text-[10px] text-center font-mono">Usually responds within 2 hours</p>
                                </form>
                            ) : (
                                <div className="text-center py-8">
                                    <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-4">
                                        <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <h4 className="text-white font-bold text-lg mb-2">Demo Booked!</h4>
                                    <p className="text-white/40 text-sm font-light">We'll reach out to {formData.email} shortly.</p>
                                </div>
                            )}
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default DemoPage;
