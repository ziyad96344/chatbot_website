import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Code, Plug, HelpCircle, Terminal, Globe, MessageSquare, FileText, ArrowRight } from 'lucide-react';
import Footer from '../components/Footer';

const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const sections = [
    {
        icon: BookOpen, title: 'Getting Started', color: 'emerald',
        items: [
            { title: 'Create Your Account', desc: 'Sign up and set up your first workspace in under 2 minutes.' },
            { title: 'Create a Chatbot', desc: 'Name your bot, set its personality, and configure basic settings.' },
            { title: 'Train with Your Data', desc: 'Scrape your website or upload documents to build the knowledge base.' },
            { title: 'Embed on Your Site', desc: 'Copy the embed code and paste it into your website HTML.' },
        ],
    },
    {
        icon: Plug, title: 'Integrations', color: 'blue',
        items: [
            { title: 'WordPress', desc: 'Install our WordPress plugin for one-click chatbot embedding.' },
            { title: 'Shopify', desc: 'Add Xotbot to your Shopify store via the theme editor.' },
            { title: 'WhatsApp Business', desc: 'Connect your WhatsApp Business account to enable messaging.' },
            { title: 'Custom Website', desc: 'Use our JavaScript embed code on any HTML page.' },
        ],
    },
    {
        icon: Code, title: 'API Reference', color: 'purple',
        items: [
            { title: 'Authentication', desc: 'Learn how to authenticate API requests with your API key.' },
            { title: 'Chat Endpoints', desc: 'Send messages and receive AI responses programmatically.' },
            { title: 'Knowledge Base API', desc: 'Manage training data, documents, and scraping via API.' },
            { title: 'Webhooks', desc: 'Receive real-time notifications for new leads and conversations.' },
        ],
    },
    {
        icon: HelpCircle, title: 'Troubleshooting', color: 'amber',
        items: [
            { title: 'Bot Not Responding', desc: 'Check knowledge base status and ensure the chatbot is published.' },
            { title: 'Widget Not Showing', desc: 'Verify the embed code is placed before the closing </body> tag.' },
            { title: 'Incorrect Answers', desc: 'Retrain your bot with updated content or add custom Q&A pairs.' },
            { title: 'Rate Limits', desc: 'Understand plan limits and how to upgrade for higher usage.' },
        ],
    },
];

const DocsPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-[#0a0a0c] overflow-x-hidden">
            <div className="fixed inset-0 pointer-events-none opacity-[0.03]"
                style={{
                    backgroundImage: `radial-gradient(circle at 20% 30%, rgba(16,185,129,0.12) 0%, transparent 50%)`,
                }}
            />

            {/* Hero */}
            <section className="relative pt-20 pb-16 px-6 md:px-12">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                        className="text-[10px] uppercase tracking-[0.5em] text-emerald-400/60 mb-6 font-mono">
                        Documentation
                    </motion.p>
                    <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                        Learn, Build,{' '}
                        <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">Deploy</span>
                        <span className="text-emerald-400">.</span>
                    </motion.h1>
                    <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                        className="text-base text-white/40 max-w-lg mx-auto font-light">
                        Everything you need to get your AI chatbot up and running.
                    </motion.p>
                </div>
            </section>

            {/* Quick Links */}
            <section className="px-6 md:px-12 pb-12">
                <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
                    className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3">
                    {[
                        { icon: Terminal, label: 'Quick Start' },
                        { icon: Globe, label: 'Embed Widget' },
                        { icon: MessageSquare, label: 'WhatsApp Setup' },
                        { icon: FileText, label: 'API Docs' },
                    ].map((q, i) => (
                        <motion.div key={i} variants={fadeUp}
                            className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-emerald-500/20 cursor-pointer transition-all group">
                            <q.icon size={16} className="text-emerald-400 shrink-0" />
                            <span className="text-white/50 text-xs uppercase tracking-widest group-hover:text-white/80 transition-colors">{q.label}</span>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* Doc Sections */}
            <section className="px-6 md:px-12 pb-24">
                <div className="max-w-4xl mx-auto space-y-12">
                    {sections.map((section, i) => (
                        <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }} variants={stagger}>
                            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
                                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                                    <section.icon size={14} className="text-emerald-400" />
                                </div>
                                <h2 className="text-xl font-bold text-white tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                                    {section.title}
                                </h2>
                            </motion.div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {section.items.map((item, j) => (
                                    <motion.div key={j} variants={fadeUp}
                                        className="group p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-emerald-500/15 hover:bg-emerald-500/[0.02] transition-all cursor-pointer">
                                        <div className="flex items-center justify-between mb-1.5">
                                            <h4 className="text-white text-sm font-semibold">{item.title}</h4>
                                            <ArrowRight size={12} className="text-white/10 group-hover:text-emerald-400/50 transition-colors" />
                                        </div>
                                        <p className="text-white/30 text-xs leading-relaxed font-light">{item.desc}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="px-6 md:px-12 pb-24">
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                    className="max-w-3xl mx-auto text-center p-8 rounded-xl border border-white/[0.06] bg-white/[0.02]">
                    <h3 className="text-xl font-bold text-white mb-3">Need Help?</h3>
                    <p className="text-white/40 text-sm mb-6 font-light">Can't find what you're looking for? Our team is here to help.</p>
                    <a href="/contact" className="inline-block px-6 py-3 bg-white/[0.06] border border-white/[0.1] text-white text-xs uppercase tracking-[0.2em] rounded-full hover:bg-white/[0.1] transition-colors">
                        Contact Support
                    </a>
                </motion.div>
            </section>

            <Footer />
        </div>
    );
};

export default DocsPage;
