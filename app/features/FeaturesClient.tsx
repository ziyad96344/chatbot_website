'use client';

import React, { useRef, useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { Bot, Globe, FileText, Users, MessageCircle, Mic, Code, Palette, Languages, BarChart3, Zap, Shield, BrainCircuit, Webhook, ArrowRight } from 'lucide-react';
import Footer from '@/components/Footer';

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] } },
};

const stagger: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

function SpotlightCard({ children, className = '' }: { children: React.ReactNode, className?: string }) {
    const divRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!divRef.current) return;
        const rect = divRef.current.getBoundingClientRect();
        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    return (
        <div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setOpacity(1)}
            onMouseLeave={() => setOpacity(0)}
            className={`relative overflow-hidden bg-[#091114] border border-white/5 rounded-3xl group transition-colors duration-500 hover:border-white/10 ${className}`}
        >
            <div
                className="pointer-events-none absolute -inset-px transition-opacity duration-300 rounded-3xl z-0"
                style={{
                    opacity,
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(16,185,129,0.15), transparent 40%)`,
                }}
            />
            <div className="relative z-10 h-full p-8 flex flex-col">
                {children}
            </div>
        </div>
    );
}

const bentoFeatures = [
    // Block 1
    { size: 'large', icon: '/features/scrap.png', title: 'Instant Website Scraping', desc: 'Automatically crawl and index your entire website to build a comprehensive knowledge base instantly. We turn complex HTML, products, and policies into structured data for your AI.', hasVisual: 'scraping' },
    { size: 'small', icon: '/features/empathy.png', title: 'Context-Aware AI', desc: 'Intelligent conversations powered by advanced AI models that understand context and intent beautifully.' },
    { size: 'small', icon: '/features/lead (2).png', title: 'Lead Capture', desc: 'Capture visitor information automatically during conversations and export to your CRM.' },
    
    // Block 2
    { size: 'large', icon: '/features/analysis.png', title: 'Real-time Analytics', desc: 'Track conversations, leads, satisfaction scores, and bot performance in real-time with our beautiful, comprehensive dashboard.', hasVisual: 'analytics' },
    { size: 'small', icon: '/features/custom branding.png', title: 'Custom Branding', desc: 'Match your brand colors, logo, and style perfectly. Remove Xotbot branding entirely on premium plans.' },
    { size: 'small', icon: '/features/api.png', title: 'API Access', desc: 'Full REST API access to integrate your Xotbot into any custom application or workflow.' },
    { size: 'small', icon: '/features/secure.png', title: 'Enterprise Security', desc: '256-bit encryption, SOC2 compliance, and GDPR ready. Your data is always secure and private.' },
    { size: 'small', icon: '/features/instant.png', title: 'Instant Deployment', desc: 'Go live in under 5 minutes with a single line of embed code on literally any website builder.' },
    { size: 'small', icon: '/features/documentation.png', title: 'Document Upload', desc: 'Upload PDFs, Word docs, and spreadsheets. Your bot learns from them instantly without extra training.' },
    
    // Last row (Wide Cards)
    { size: 'small', icon: '/features/multi lang.png', title: 'Multi-Language', desc: 'Support customers in 50+ languages with automatic detection and seamless translation.' },
    { size: 'large', icon: '/features/whatsapp.png', title: 'WhatsApp Integration', desc: 'Deploy your AI chatbot on WhatsApp. Meet your customers where they already are with rich media, voice notes, and quick replies.', hasVisual: 'whatsapp' },
];

const deepDives = [
    {
        icon: BrainCircuit,
        tag: 'AI Engine',
        title: 'Context-Aware Intelligence',
        desc: 'Xotbot doesn\'t just match keywords — it understands the full context of every conversation. Built on state-of-the-art language models, it delivers accurate, helpful responses that feel completely human.',
        points: ['Contextual memory across sessions', 'Intent recognition & entity extraction', 'Fallback handling with graceful escalation', 'Continuous learning from interactions'],
        image: '/features/context awre intel.png'
    },
    {
        tag: 'Data Ingestion',
        icon: Globe,
        title: 'Smart Knowledge Extraction',
        desc: 'Feed your bot with data from any source. Our crawler intelligently parses websites, documents, and structured data to build a massive knowledge graph your AI can query instantly.',
        points: ['Recursive website crawling', 'PDF, DOCX, and TXT file parsing', 'Structured FAQ import', 'Real-time knowledge updates'],
        image: '/features/knowledge-extracttion.png'
    },
    {
        tag: 'Omnichannel',
        icon: Webhook,
        title: 'Deploy Everywhere',
        desc: 'One bot, every channel. Embed on your website, connect to WhatsApp Business API, or integrate via REST API. Your customers get consistent, instant support wherever they are.',
        points: ['Web widget with 1-line embed', 'WhatsApp Business integration', 'REST API for custom apps', 'WordPress & Shopify plugins'],
        image: '/features/deploy everywhere.png'
    },
];

const FeaturesPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-[#050B10] overflow-x-hidden font-sans selection:bg-emerald-500/30 selection:text-emerald-200">
            
            {/* Ambient Background Mesh */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-emerald-600/10 blur-[120px] rounded-full opacity-50 mix-blend-screen" />
                <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-teal-900/10 blur-[150px] rounded-full opacity-40 mix-blend-screen" />
            </div>

            {/* Hero Section */}
            <section className="relative pt-32 pb-24 px-6 md:px-12 z-10 flex flex-col items-center justify-center min-h-[60vh]">
                <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#091114] border border-white/10 mb-8 shadow-[0_0_20px_rgba(16,185,129,0.1)]"
                    >
                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-xs font-semibold text-emerald-400 tracking-wider uppercase">Platform Capabilities</span>
                    </motion.div>
                    
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.7 }}
                        className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 tracking-tight leading-[1.1]"
                    >
                        Everything you need to build{' '}
                        <span className="relative inline-block">
                            <span className="absolute -inset-2 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 blur-xl rounded-full" />
                            <span className="relative bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-500 bg-clip-text text-transparent">
                                powerful AI Chatbots
                            </span>
                        </span>
                    </motion.h1>
                    
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7 }}
                        className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed"
                    >
                        From automated knowledge ingestion to omnichannel deployment. Xotbot gives you the complete, enterprise-grade toolkit to create intelligent assistants in minutes.
                    </motion.p>
                </div>
            </section>

            {/* Core Features Grid */}
            <section className="px-6 md:px-12 pb-32 relative z-10">
                <motion.div
                    variants={stagger}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                    className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-5"
                >
                    {bentoFeatures.map((f, i) => {
                        const isMiddleRow = f.title === 'Multi-Language' || f.title === 'WhatsApp Integration';
                        return (
                            <motion.div
                                key={i}
                                variants={fadeUp}
                                className={`col-span-1 md:col-span-1 ${isMiddleRow ? 'lg:col-span-3' : 'lg:col-span-2'}`}
                            >
                                <SpotlightCard className="h-full p-6">
                                <div className="flex flex-col h-full">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(16,185,129,0.15)] group-hover:scale-110 transition-transform duration-500 overflow-hidden p-1.5">
                                            {typeof f.icon === 'string' ? (
                                                <img src={f.icon as string} alt={f.title} className="w-full h-full object-contain" />
                                            ) : (() => {
                                                const IconComp = f.icon as React.ElementType;
                                                return <IconComp size={20} className="text-emerald-400" />;
                                            })()}
                                        </div>
                                        <h3 className="font-bold text-white tracking-tight text-base leading-tight">
                                            {f.title}
                                        </h3>
                                    </div>
                                    <p className="text-slate-400 font-light leading-relaxed text-sm">
                                        {f.desc}
                                    </p>
                                </div>
                            </SpotlightCard>
                        </motion.div>
                    )})}
                </motion.div>
            </section>

            {/* Deep Dives Section with Glassmorphism */}
            <section className="px-6 md:px-12 pb-32 relative z-10">
                <div className="max-w-6xl mx-auto space-y-32">
                    {deepDives.map((item, i) => (
                        <motion.div
                            key={i}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: '-100px' }}
                            variants={stagger}
                            className={`flex flex-col lg:flex-row gap-16 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                        >
                            {/* Text Content */}
                            <motion.div variants={fadeUp} className="flex-1">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                                        <item.icon size={18} className="text-emerald-400" />
                                    </div>
                                    <span className="text-xs font-semibold uppercase tracking-widest text-emerald-400/80">{item.tag}</span>
                                </div>
                                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
                                    {item.title}
                                </h3>
                                <p className="text-slate-400 text-lg leading-relaxed mb-8 font-light">{item.desc}</p>
                                <ul className="space-y-4">
                                    {item.points.map((p, j) => (
                                        <li key={j} className="flex items-center gap-4 text-slate-300">
                                            <div className="w-6 h-6 rounded-full bg-[#091114] border border-white/10 flex items-center justify-center shrink-0">
                                                <div className="w-2 h-2 rounded-full bg-emerald-500" />
                                            </div>
                                            <span className="font-medium">{p}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>

                            {/* 3D Glassmorphic Image Container */}
                            <motion.div variants={fadeUp} className="flex-1 w-full relative">
                                <div className="absolute inset-0 bg-emerald-500/10 blur-[100px] rounded-full" />
                                <div className="relative group p-2 rounded-3xl bg-white/[0.02] border border-white/5 shadow-2xl backdrop-blur-sm overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="relative z-10 w-full h-auto rounded-2xl border border-white/10 shadow-inner transition-transform duration-700 group-hover:scale-[1.03]"
                                    />
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Premium CTA */}
            <section className="px-6 md:px-12 pb-32 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto relative"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-teal-600/20 blur-[80px] rounded-[100px]" />
                    <div className="relative bg-[#091114] border border-white/10 rounded-[40px] p-12 md:p-20 text-center overflow-hidden flex flex-col items-center">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-50" />
                        
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                            Ready to Build Your <span className="text-emerald-400">AI Assistant</span>?
                        </h2>
                        <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto font-light">
                            Join thousands of forward-thinking companies using Xotbot to automate customer support and capture more leads.
                        </p>
                        <a
                            href="https://app.xotbot.com/"
                            className="group inline-flex items-center gap-3 px-8 py-4 bg-emerald-500 text-black font-bold text-sm uppercase tracking-wider rounded-full hover:bg-emerald-400 transition-all duration-300 shadow-[0_0_40px_rgba(16,185,129,0.3)] hover:shadow-[0_0_60px_rgba(16,185,129,0.5)] hover:scale-105"
                        >
                            Get Started Free
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <p className="mt-6 text-sm text-slate-500">No credit card required • 14-day free trial on premium plans</p>
                    </div>
                </motion.div>
            </section>

            <Footer />
        </div>
    );
};

export default FeaturesPage;
