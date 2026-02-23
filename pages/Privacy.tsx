import React from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';

const sections = [
    {
        title: '1. Information We Collect',
        content: `We collect the following types of information when you use Xotbot:
        
• **Account Information:** Name, email address, phone number, company name when you register.
• **Usage Data:** How you interact with the platform, features used, chatbot configurations, and analytics data.
• **Chatbot Data:** Content you upload (documents, website URLs, custom Q&A) to train your AI chatbot.
• **Conversation Data:** Messages exchanged between your chatbot and your end users.
• **Payment Information:** Billing details processed securely through our payment partners (Razorpay/Stripe).
• **Technical Data:** IP address, browser type, device information, and cookies for platform optimization.`,
    },
    {
        title: '2. How We Use Your Information',
        content: `Your information is used to:

• Provide, maintain, and improve the Xotbot platform and AI services.
• Train and optimize your specific chatbot with your uploaded knowledge base.
• Process payments and manage your subscription.
• Send important service updates, security alerts, and support communications.
• Analyze usage patterns to improve features and user experience.
• Comply with legal obligations and prevent fraud.

**We do NOT sell your personal data to third parties.**`,
    },
    {
        title: '3. Data Storage & Security',
        content: `• All data is encrypted in transit (TLS 1.3) and at rest (AES-256).
• We use enterprise-grade cloud infrastructure with SOC2 compliance.
• Your chatbot's knowledge base and conversation data are isolated per tenant.
• Regular security audits and penetration testing are conducted.
• Backups are encrypted and retained for disaster recovery purposes.
• Access to production systems is restricted and monitored.`,
    },
    {
        title: '4. Third-Party Services',
        content: `We use the following third-party services:

• **AI Models:** Google Gemini for natural language processing (your data is not used to train Google's models).
• **Payment Processing:** Razorpay/Stripe for secure payment handling.
• **Cloud Infrastructure:** For hosting and data storage.
• **Analytics:** To understand platform usage and improve our services.

All third-party providers are selected for their security and privacy compliance.`,
    },
    {
        title: '5. Cookies',
        content: `We use essential cookies for:

• Authentication and session management.
• Remembering your preferences and settings.
• Platform security and fraud prevention.

We do not use third-party advertising or tracking cookies.`,
    },
    {
        title: '6. Your Rights',
        content: `You have the right to:

• **Access** your personal data stored on our platform.
• **Update** or correct your account information at any time.
• **Delete** your account and all associated data.
• **Export** your chatbot data and conversation logs.
• **Opt-out** of non-essential communications.

To exercise any of these rights, contact us at privacy@xotbot.com.`,
    },
    {
        title: '7. Data Retention',
        content: `• Active account data is retained as long as your subscription is active.
• Conversation logs are retained for 90 days by default (configurable per plan).
• Upon account deletion, all data is permanently removed within 30 days.
• Anonymized analytics data may be retained for service improvement.`,
    },
    {
        title: '8. Changes to This Policy',
        content: `We may update this privacy policy from time to time. We will notify you of any significant changes via email or through the platform. Continued use of Xotbot after changes constitutes acceptance of the updated policy.`,
    },
];

const PrivacyPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-[#0a0a0c] overflow-x-hidden">
            <SEO
                title="Privacy Policy — XotBot AI Chatbot Platform"
                description="Read XotBot's privacy policy. Learn how we handle your data, chatbot content, conversation logs, and personal information with enterprise-grade security."
                canonicalUrl="https://xotbot.com/privacy"
            />
            <section className="relative pt-20 pb-16 px-6 md:px-12">
                <div className="max-w-3xl mx-auto">
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                        className="text-[10px] uppercase tracking-[0.5em] text-emerald-400/60 mb-6 font-mono">
                        Legal
                    </motion.p>
                    <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                        Privacy Policy
                    </motion.h1>
                    <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                        className="text-white/30 text-sm font-mono">
                        Last updated: February 16, 2026
                    </motion.p>

                    <div className="mt-12 space-y-10">
                        {sections.map((s, i) => (
                            <motion.div key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-30px' }}
                                transition={{ delay: 0.05 * i }}>
                                <h2 className="text-lg font-bold text-white mb-4 tracking-tight">{s.title}</h2>
                                <div className="text-white/40 text-sm leading-relaxed whitespace-pre-line font-light prose-strong:text-white/60">
                                    {s.content.split('**').map((part, j) =>
                                        j % 2 === 1 ? <strong key={j} className="text-white/60">{part}</strong> : part
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                        className="mt-16 p-6 rounded-xl border border-white/[0.06] bg-white/[0.02]">
                        <p className="text-white/40 text-sm font-light">
                            Questions about our privacy practices? Contact us at{' '}
                            <a href="mailto:privacy@xotbot.com" className="text-emerald-400 hover:underline">privacy@xotbot.com</a>
                        </p>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default PrivacyPage;
