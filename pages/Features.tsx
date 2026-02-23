import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Globe, FileText, Users, MessageCircle, Mic, Code, Palette, Languages, BarChart3, Zap, Shield, BrainCircuit, Webhook } from 'lucide-react';
import Footer from '../components/Footer';

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] } },
};

const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
};

const coreFeatures = [
    { icon: Bot, title: 'AI-Powered Chat', desc: 'Intelligent conversations powered by advanced AI models that understand context and intent.' },
    { icon: Globe, title: 'Website Scraping', desc: 'Automatically crawl and index your entire website to build a comprehensive knowledge base.' },
    { icon: FileText, title: 'Knowledge Base', desc: 'Upload PDFs, docs, and files. Your bot learns everything about your business instantly.' },
    { icon: Users, title: 'Lead Capture', desc: 'Capture visitor information automatically during conversations and export to your CRM.' },
    { icon: MessageCircle, title: 'WhatsApp Integration', desc: 'Deploy your AI chatbot on WhatsApp to reach customers on their preferred channel.' },
    { icon: Mic, title: 'Voice AI', desc: 'Enable voice-based interactions with natural text-to-speech and speech recognition.' },
    { icon: Code, title: 'API Access', desc: 'Full REST API access to integrate Xotbot into any application or workflow.' },
    { icon: Palette, title: 'Custom Branding', desc: 'Match your brand colors, logo, and style. Remove Xotbot branding on premium plans.' },
    { icon: Languages, title: 'Multi-Language', desc: 'Support customers in multiple languages with automatic detection and translation.' },
    { icon: BarChart3, title: 'Analytics Dashboard', desc: 'Track conversations, leads, satisfaction scores, and bot performance in real-time.' },
    { icon: Zap, title: 'Instant Deployment', desc: 'Go live in under 5 minutes with a single line of embed code on any website.' },
    { icon: Shield, title: 'Enterprise Security', desc: '256-bit encryption, SOC2 compliance, GDPR ready. Your data is always secure.' },
];

const deepDives = [
    {
        icon: BrainCircuit,
        tag: 'AI Engine',
        title: 'Context-Aware Intelligence',
        desc: 'Xotbot doesn\'t just match keywords — it understands the full context of every conversation. Built on state-of-the-art language models, it delivers accurate, helpful responses that feel human.',
        points: ['Contextual memory across sessions', 'Intent recognition & entity extraction', 'Fallback handling with graceful escalation', 'Continuous learning from interactions'],
    },
    {
        tag: 'Data Ingestion',
        icon: Globe,
        title: 'Smart Knowledge Extraction',
        desc: 'Feed your bot with data from any source. Our crawler intelligently parses websites, documents, and structured data to build a knowledge graph your AI can query instantly.',
        points: ['Recursive website crawling', 'PDF, DOCX, and TXT file parsing', 'Structured FAQ import', 'Real-time knowledge updates'],
    },
    {
        tag: 'Omnichannel',
        icon: Webhook,
        title: 'Deploy Everywhere',
        desc: 'One bot, every channel. Embed on your website, connect to WhatsApp Business API, or integrate via REST API. Your customers get consistent support wherever they are.',
        points: ['Web widget with 1-line embed', 'WhatsApp Business integration', 'REST API for custom apps', 'WordPress & Shopify plugins'],
    },
];

const FeaturesPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-[#0a0a0c] overflow-x-hidden">
            {/* Background */}
            <div className="fixed inset-0 pointer-events-none opacity-[0.03]"
                style={{
                    backgroundImage: `radial-gradient(circle at 30% 20%, rgba(16,185,129,0.15) 0%, transparent 50%),
                    radial-gradient(circle at 70% 80%, rgba(139,92,246,0.1) 0%, transparent 50%)`,
                }}
            />

            {/* Hero Section */}
            <section className="relative pt-20 pb-20 px-6 md:px-12">
                <div className="max-w-5xl mx-auto text-center">
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-[10px] uppercase tracking-[0.5em] text-emerald-400/60 mb-6 font-mono">
                        Platform Capabilities
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                        Everything You Need to Build{' '}
                        <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-500 bg-clip-text text-transparent">
                            AI Chatbots
                        </span>
                        <span className="text-emerald-400">.</span>
                    </motion.h1>
                    <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                        className="text-lg text-white/40 max-w-2xl mx-auto font-light">
                        From knowledge ingestion to omnichannel deployment — Xotbot gives you the complete toolkit to create intelligent, branded AI assistants.
                    </motion.p>
                </div>
            </section>

            {/* Core Features Grid */}
            <section className="px-6 md:px-12 pb-24">
                <motion.div
                    variants={stagger}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                    className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
                >
                    {coreFeatures.map((f, i) => (
                        <motion.div
                            key={i}
                            variants={fadeUp}
                            className="group relative p-5 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-emerald-500/20 hover:bg-emerald-500/[0.03] transition-all duration-500"
                        >
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
                                    <f.icon size={16} className="text-emerald-400" />
                                </div>
                                <h3 className="text-white font-semibold text-sm tracking-tight">{f.title}</h3>
                            </div>
                            <p className="text-white/35 text-xs leading-relaxed font-light">{f.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* Deep Dive Sections */}
            <section className="px-6 md:px-12 pb-24">
                <div className="max-w-5xl mx-auto space-y-20">
                    {deepDives.map((item, i) => (
                        <motion.div
                            key={i}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: '-80px' }}
                            variants={stagger}
                            className={`flex flex-col lg:flex-row gap-10 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                        >
                            {/* Text Content */}
                            <motion.div variants={fadeUp} className="flex-1">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                                        <item.icon size={14} className="text-emerald-400" />
                                    </div>
                                    <span className="text-[9px] uppercase tracking-[0.3em] text-emerald-400/60 font-mono">{item.tag}</span>
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                                    {item.title}
                                </h3>
                                <p className="text-white/40 text-sm leading-relaxed mb-6 font-light">{item.desc}</p>
                                <ul className="space-y-2.5">
                                    {item.points.map((p, j) => (
                                        <li key={j} className="flex items-center gap-3 text-white/50 text-sm">
                                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/50 shrink-0" />
                                            {p}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>

                            {/* Visual Placeholder */}
                            <motion.div variants={fadeUp} className="flex-1 w-full flex justify-center">
                                <div className="relative group w-full">
                                    {/* Glow Effect */}
                                    <div className="absolute -inset-4 bg-emerald-500/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                                    {/* Image */}
                                    <img
                                        src={
                                            i === 0 ? "/features/context awre intel.png" :
                                                i === 1 ? "/features/knowledge-extracttion.png" :
                                                    "/features/deploy everywhere.png"
                                        }
                                        alt={item.title}
                                        className="relative z-10 w-full h-auto rounded-xl border border-white/10 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
                                    />
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="px-6 md:px-12 pb-24">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                        Ready to Build Your <span className="text-emerald-400">AI Assistant</span>?
                    </h2>
                    <p className="text-white/40 text-sm mb-8 font-light">Start for free. No credit card required.</p>
                    <a
                        href="https://app.xotbot.com/"
                        className="inline-block px-8 py-3.5 bg-emerald-500 text-black font-bold text-xs uppercase tracking-[0.2em] rounded-full hover:bg-emerald-400 transition-colors shadow-[0_0_30px_rgba(16,185,129,0.3)]"
                    >
                        Get Started Free
                    </a>
                </motion.div>
            </section>

            <Footer />
        </div>
    );
};

export default FeaturesPage;
