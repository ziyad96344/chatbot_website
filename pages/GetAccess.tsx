import React, { useState } from 'react';
import SEO from '../components/SEO';
import { useNavigate } from 'react-router-dom';

const GetAccessPage: React.FC = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        website: '',
        useCase: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        setTimeout(() => {
            navigate('/thank-you');
        }, 1500);
    };

    return (
        <div className="pt-20 pb-20 px-6 md:px-12 max-w-2xl mx-auto relative">
            <SEO
                title="Get Early Access — XotBot AI Chatbot"
                description="Join the XotBot waitlist for early access to India's most powerful AI chatbot platform."
                canonicalUrl="https://xotbot.com/get-access"
                noindex={true}
            />
            {/* Background Effects */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/5 rounded-full blur-[150px]" />
            </div>

            {/* Hero */}
            <div className="text-center mb-12 relative z-10">
                <p className="text-emerald-400 text-xs uppercase tracking-[0.3em] mb-4 font-mono">[EARLY ACCESS]</p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter uppercase mb-6">
                    JOIN THE<br />
                    <span className="text-emerald-400">WAITLIST</span>
                </h1>
                <p className="text-white/50 text-sm md:text-base max-w-lg mx-auto">
                    Be among the first to experience the future of AI automation. Limited spots available.
                </p>
            </div>

            {/* Form */}
            <div className="relative z-10 border border-white/10 rounded-2xl p-8 md:p-10 bg-white/[0.02] backdrop-blur-sm">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label className="text-[10px] uppercase tracking-widest text-white/40 mb-2 block">Full Name *</label>
                            <input
                                type="text"
                                required
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:border-emerald-400 focus:outline-none transition-colors"
                                placeholder="John Doe"
                            />
                        </div>
                        <div>
                            <label className="text-[10px] uppercase tracking-widest text-white/40 mb-2 block">Work Email *</label>
                            <input
                                type="email"
                                required
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:border-emerald-400 focus:outline-none transition-colors"
                                placeholder="john@company.com"
                            />
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label className="text-[10px] uppercase tracking-widest text-white/40 mb-2 block">Company</label>
                            <input
                                type="text"
                                value={formData.company}
                                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:border-emerald-400 focus:outline-none transition-colors"
                                placeholder="Acme Inc."
                            />
                        </div>
                        <div>
                            <label className="text-[10px] uppercase tracking-widest text-white/40 mb-2 block">Website</label>
                            <input
                                type="url"
                                value={formData.website}
                                onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                                className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:border-emerald-400 focus:outline-none transition-colors"
                                placeholder="https://example.com"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="text-[10px] uppercase tracking-widest text-white/40 mb-2 block">How do you plan to use Xotbot?</label>
                        <textarea
                            rows={3}
                            value={formData.useCase}
                            onChange={(e) => setFormData({ ...formData, useCase: e.target.value })}
                            className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:border-emerald-400 focus:outline-none transition-colors resize-none"
                            placeholder="Tell us about your use case..."
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full py-4 font-bold uppercase tracking-widest rounded-lg transition-all duration-300 ${isSubmitting
                            ? 'bg-emerald-400/50 text-black/50 cursor-not-allowed'
                            : 'bg-emerald-400 text-black hover:bg-emerald-300'
                            }`}
                    >
                        {isSubmitting ? (
                            <span className="flex items-center justify-center gap-2">
                                <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                </svg>
                                Processing...
                            </span>
                        ) : (
                            'Request Access'
                        )}
                    </button>
                </form>

                <p className="text-center text-white/30 text-xs mt-6">
                    By submitting, you agree to our Terms of Service and Privacy Policy.
                </p>
            </div>

            {/* Benefits */}
            <div className="relative z-10 mt-12 grid grid-cols-3 gap-4">
                {[
                    { icon: '🚀', label: 'Early Access' },
                    { icon: '💎', label: 'Exclusive Pricing' },
                    { icon: '🎯', label: 'Priority Support' },
                ].map((benefit, i) => (
                    <div key={i} className="text-center">
                        <div className="text-2xl mb-2">{benefit.icon}</div>
                        <div className="text-[10px] uppercase tracking-widest text-white/40">{benefit.label}</div>
                    </div>
                ))}
            </div>

            {/* Corner Brackets */}
            <div className="fixed top-24 left-8 w-12 h-12 border-l-2 border-t-2 border-emerald-400/20 pointer-events-none" />
            <div className="fixed top-24 right-8 w-12 h-12 border-r-2 border-t-2 border-emerald-400/20 pointer-events-none" />
            <div className="fixed bottom-8 left-8 w-12 h-12 border-l-2 border-b-2 border-emerald-400/20 pointer-events-none" />
            <div className="fixed bottom-8 right-8 w-12 h-12 border-r-2 border-b-2 border-emerald-400/20 pointer-events-none" />
        </div>
    );
};

export default GetAccessPage;
