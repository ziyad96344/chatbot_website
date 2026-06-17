'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Footer from '@/components/Footer';

const sections = [
    {
        title: '1. Service Description',
        content: `Xotbot is an AI-powered chatbot platform ("Service") provided by Ottomern Technologies ("Company", "we", "us"). The Service allows you to create, train, and deploy AI chatbots on your website, WhatsApp, and other channels.

By using Xotbot, you agree to these Terms of Service. If you do not agree, please do not use the Service.`,
    },
    {
        title: '2. Account Registration',
        content: `â€¢ You must provide accurate and complete information when creating an account.
â€¢ You are responsible for maintaining the security of your account credentials.
â€¢ You must be at least 18 years old to use the Service.
â€¢ One person or entity may not maintain more than one free account.
â€¢ You are responsible for all activity that occurs under your account.`,
    },
    {
        title: '3. Subscription & Payments',
        content: `â€¢ Paid plans are billed monthly or annually, as selected during subscription.
â€¢ Payments are processed securely through Razorpay/Stripe.
â€¢ Prices are listed in INR (â‚¹) and are exclusive of applicable taxes.
â€¢ Subscription renewals are automatic unless cancelled before the renewal date.
â€¢ Refunds are available within 7 days of purchase if less than 100 messages have been used.
â€¢ We reserve the right to modify pricing with 30 days advance notice.`,
    },
    {
        title: '4. Acceptable Use',
        content: `You agree NOT to use Xotbot to:

â€¢ Generate or distribute harmful, misleading, or illegal content.
â€¢ Impersonate individuals, organizations, or government entities.
â€¢ Collect personal data without proper consent or legal basis.
â€¢ Send unsolicited messages (spam) through the chatbot.
â€¢ Attempt to reverse engineer, decompile, or extract the AI models.
â€¢ Overwhelm systems with automated requests beyond plan limits.
â€¢ Violate any applicable local, national, or international law.`,
    },
    {
        title: '5. Your Content & Data',
        content: `â€¢ You retain ownership of all content you upload to train your chatbot.
â€¢ You grant us a limited license to process your content solely to provide the Service.
â€¢ You are responsible for ensuring you have the right to use the content you upload.
â€¢ We do not claim ownership of your training data or conversation logs.
â€¢ Upon account deletion, your content is permanently removed within 30 days.`,
    },
    {
        title: '6. Intellectual Property',
        content: `â€¢ The Xotbot platform, including its design, code, AI models, and brand assets, is owned by Ottomern Technologies.
â€¢ You may not copy, modify, or distribute any part of the Service without written permission.
â€¢ The "Xotbot" name, logo, and branding are trademarks of Ottomern Technologies.
â€¢ Your use of the Service does not grant you any IP rights in the platform itself.`,
    },
    {
        title: '7. Service Availability',
        content: `â€¢ We strive for 99.9% uptime but do not guarantee uninterrupted service.
â€¢ Scheduled maintenance windows will be communicated in advance when possible.
â€¢ We are not liable for downtime caused by factors beyond our control (force majeure).
â€¢ We may modify, suspend, or discontinue features with reasonable notice.`,
    },
    {
        title: '8. Limitation of Liability',
        content: `â€¢ The Service is provided "as is" without warranties of any kind.
â€¢ We are not liable for AI-generated responses that may be inaccurate or incomplete.
â€¢ Our total liability is limited to the amount you paid in the 12 months preceding the claim.
â€¢ We are not responsible for any indirect, incidental, or consequential damages.
â€¢ You acknowledge that AI responses should not substitute professional advice (legal, medical, financial).`,
    },
    {
        title: '9. Termination',
        content: `â€¢ You may cancel your subscription at any time from your account settings.
â€¢ We may suspend or terminate accounts that violate these Terms.
â€¢ Upon termination, your access to the platform will cease immediately.
â€¢ Your data will be retained for 30 days post-termination, then permanently deleted.
â€¢ Provisions regarding IP, liability, and indemnification survive termination.`,
    },
    {
        title: '10. Governing Law',
        content: `These Terms are governed by the laws of India. Any disputes will be resolved in the courts of [Your City], India. By using the Service, you consent to the exclusive jurisdiction of these courts.`,
    },
    {
        title: '11. Changes to Terms',
        content: `We may update these Terms from time to time. Material changes will be communicated via email or platform notification at least 15 days before they take effect. Continued use constitutes acceptance.`,
    },
];

const TermsPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-[#0a0a0c] overflow-x-hidden">
            
            <section className="relative pt-20 pb-16 px-6 md:px-12">
                <div className="max-w-3xl mx-auto">
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                        className="text-[10px] uppercase tracking-[0.5em] text-emerald-400/60 mb-6 font-mono">
                        Legal
                    </motion.p>
                    <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                        Terms of Service
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
                                <div className="text-white/40 text-sm leading-relaxed whitespace-pre-line font-light">
                                    {s.content}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                        className="mt-16 p-6 rounded-xl border border-white/[0.06] bg-white/[0.02]">
                        <p className="text-white/40 text-sm font-light">
                            Questions about our terms? Contact us at{' '}
                            <a href="mailto:legal@xotbot.com" className="text-emerald-400 hover:underline">legal@xotbot.com</a>
                        </p>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default TermsPage;


