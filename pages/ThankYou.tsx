import React from 'react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';

const ThankYouPage: React.FC = () => {
    return (
        <div className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
            <SEO
                title="Thank You — XotBot"
                description="Your request has been received. We will connect with you shortly."
                noindex={true}
            />
            {/* Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[150px]" />
                <div className="absolute inset-0 opacity-5"
                    style={{
                        backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                        backgroundSize: '50px 50px'
                    }}
                />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center max-w-lg">
                {/* Success Icon */}
                <div className="w-24 h-24 mx-auto mb-8 relative">
                    <div className="absolute inset-0 rounded-full bg-emerald-500/20 animate-ping" />
                    <div className="relative w-full h-full rounded-full bg-emerald-500/20 border-2 border-emerald-400 flex items-center justify-center">
                        <svg className="w-12 h-12 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                </div>

                {/* Heading */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter uppercase mb-6 text-white">
                    NEURAL LINK<br />
                    <span className="text-emerald-400">ESTABLISHED</span>
                </h1>

                {/* Subtext */}
                <p className="text-white/50 text-sm md:text-base leading-relaxed mb-8 max-w-md mx-auto">
                    Your request has been received. Our neural network is processing your information.
                    We'll connect with you shortly.
                </p>

                {/* Status */}
                <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/[0.03] border border-white/10 mb-8">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-emerald-400/80 text-xs uppercase tracking-[0.2em] font-mono">
                        SYNC STATUS: ACTIVE
                    </span>
                </div>

                {/* Back Button */}
                <div>
                    <Link
                        to="/"
                        className="group relative inline-block px-8 py-4 bg-transparent border border-white/20 rounded-full overflow-hidden transition-all duration-300 hover:border-white/40"
                    >
                        <span className="relative z-10 text-xs uppercase tracking-[0.3em] font-semibold text-white/70 group-hover:text-black transition-colors duration-300">
                            ← Back to Home
                        </span>
                        <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                    </Link>
                </div>
            </div>

            {/* Corner Brackets */}
            <div className="fixed top-24 left-8 w-12 h-12 border-l-2 border-t-2 border-emerald-400/30 pointer-events-none" />
            <div className="fixed top-24 right-8 w-12 h-12 border-r-2 border-t-2 border-emerald-400/30 pointer-events-none" />
            <div className="fixed bottom-8 left-8 w-12 h-12 border-l-2 border-b-2 border-emerald-400/30 pointer-events-none" />
            <div className="fixed bottom-8 right-8 w-12 h-12 border-r-2 border-b-2 border-emerald-400/30 pointer-events-none" />
        </div>
    );
};

export default ThankYouPage;
