import React, { useState, useEffect, useRef } from 'react';

const faqs = [
    {
        question: 'What is Xotbot?',
        answer: 'Xotbot is an AI-powered chatbot and voice agent platform. It learns from your website data and provides instant, accurate answers to your customers — 24/7. No coding knowledge required.',
    },
    {
        question: 'How does the AI learn from my website?',
        answer: 'Simply paste your website URL. Our AI crawler scans every page — products, pricing, FAQs, policies — and builds a knowledge base. It continuously updates as your site changes.',
    },
    {
        question: 'Do I need technical knowledge to set it up?',
        answer: 'Not at all. The entire setup takes under 5 minutes: paste your URL, customize the look, and copy a single embed code to your website. We handle all the AI complexity behind the scenes.',
    },
    {
        question: 'What languages does Xotbot support?',
        answer: 'Xotbot supports 50+ languages out of the box, including English, Hindi, Spanish, French, Arabic, Chinese, and more. It auto-detects the visitor\'s language and responds accordingly.',
    },
    {
        question: 'Can I customize the chatbot\'s appearance?',
        answer: 'Yes! You can fully customize colors, fonts, avatar, welcome messages, and even the bot\'s personality. Match it perfectly to your brand identity using our visual customizer.',
    },
    {
        question: 'How does the Voice AI work?',
        answer: 'Voice AI lets your customers have real-time spoken conversations with your bot. Choose from multiple voice personas with different tones. It uses natural language processing for human-like conversations.',
    },
    {
        question: 'What platforms does Xotbot integrate with?',
        answer: 'Xotbot works on any website — Shopify, WordPress, Wix, Webflow, Squarespace, Framer, and custom sites. Just paste one line of code. We also offer WhatsApp integration and a REST API.',
    },
    {
        question: 'Is my data secure?',
        answer: 'Absolutely. We use 256-bit encryption, are SOC2 compliant, and GDPR ready. Your data is processed securely and never shared with third parties. You maintain full control over your knowledge base.',
    },
];

const FAQItem: React.FC<{ faq: typeof faqs[0]; isOpen: boolean; onToggle: () => void }> = ({ faq, isOpen, onToggle }) => {
    const contentRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        if (contentRef.current) {
            setHeight(isOpen ? contentRef.current.scrollHeight : 0);
        }
    }, [isOpen]);

    return (
        <div className={`border border-white/[0.06] rounded-xl overflow-hidden transition-all duration-300 ${isOpen ? 'bg-emerald-500/[0.04] border-emerald-500/15' : 'bg-white/[0.02] hover:bg-white/[0.04]'}`}>
            <button
                onClick={onToggle}
                className="w-full flex items-center justify-between gap-4 p-5 text-left cursor-pointer"
            >
                <span className={`font-medium text-sm md:text-[15px] transition-colors ${isOpen ? 'text-emerald-400' : 'text-white/80'}`}>
                    {faq.question}
                </span>
                <div className={`w-6 h-6 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${isOpen ? 'border-emerald-500/40 bg-emerald-500/10 rotate-45' : 'border-white/10'}`}>
                    <svg className={`w-3 h-3 transition-colors ${isOpen ? 'text-emerald-400' : 'text-white/40'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                </div>
            </button>
            <div
                style={{ height: `${height}px` }}
                className="transition-all duration-300 ease-out overflow-hidden"
            >
                <div ref={contentRef} className="px-5 pb-5">
                    <p className="text-white/45 text-[13px] leading-relaxed font-light">{faq.answer}</p>
                </div>
            </div>
        </div>
    );
};

function useScrollReveal(ref: React.RefObject<HTMLElement | null>, threshold = 0.1) {
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) { setVisible(true); obs.disconnect(); }
        }, { threshold });
        obs.observe(el);
        return () => obs.disconnect();
    }, [ref, threshold]);
    return visible;
}

const FAQ: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const visible = useScrollReveal(sectionRef);

    return (
        <section ref={sectionRef} className="relative py-16 px-6 md:px-12 bg-[#080811] overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-emerald-500/[0.03] blur-[100px]" />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto">
                {/* Heading */}
                <div className={`text-center mb-14 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <span className="text-[10px] tracking-[0.4em] uppercase text-emerald-400/70 mb-3 block font-mono">FAQ</span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter uppercase mb-4">
                        Got <span className="text-emerald-400">Questions?</span>
                    </h2>
                    <p className="text-white/40 text-sm md:text-base max-w-md mx-auto font-light">
                        Everything you need to know about Xotbot, answered.
                    </p>
                </div>

                {/* FAQ List */}
                <div className={`grid grid-cols-1 md:grid-cols-2 gap-3 transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    {faqs.map((faq, i) => (
                        <FAQItem
                            key={i}
                            faq={faq}
                            isOpen={openIndex === i}
                            onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
