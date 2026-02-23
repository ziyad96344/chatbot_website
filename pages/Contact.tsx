import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import config from '../config/api';

const InputField = ({ label, name, type = 'text', placeholder, value, onChange, focusedField, setFocusedField }: any) => (
    <div className="relative group">
        <label className="text-[10px] uppercase tracking-widest text-gray-400 mb-2 block font-mono font-bold">
            {label}
        </label>
        <div className={`relative transition-colors duration-300 ${focusedField === name ? 'bg-white/[0.08]' : 'bg-white/[0.03]'} rounded-lg`}>
            {type === 'textarea' ? (
                <textarea
                    value={value}
                    onChange={onChange}
                    onFocus={() => setFocusedField(name)}
                    onBlur={() => setFocusedField(null)}
                    rows={4}
                    className="w-full bg-transparent border-none text-white placeholder-white/30 focus:outline-none resize-none text-sm px-4 py-3.5"
                    placeholder={placeholder}
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                />
            ) : (
                <input
                    type={type}
                    value={value}
                    onChange={onChange}
                    onFocus={() => setFocusedField(name)}
                    onBlur={() => setFocusedField(null)}
                    className="w-full bg-transparent border-none text-white placeholder-white/30 focus:outline-none text-sm px-4 py-3.5"
                    placeholder={placeholder}
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                />
            )}

            {/* Active Glowing Line at Bottom */}
            <motion.div
                initial={{ width: '0%' }}
                animate={{ width: focusedField === name ? '100%' : '0%' }}
                transition={{ duration: 0.4, ease: "circOut" }}
                className="absolute bottom-0 left-0 h-[2px] bg-[#00ff00] shadow-[0_0_10px_#00ff00] rounded-full"
            />
        </div>
    </div>
);

const ContactPage: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        message: '',
    });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [focusedField, setFocusedField] = useState<string | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const leftNodeRef = useRef<HTMLDivElement>(null);
    const rightNodeRef = useRef<HTMLDivElement>(null);

    // Initial Entry & Floating Physics
    useEffect(() => {
        const tl = gsap.timeline();

        // Entry Animation
        tl.fromTo(
            [leftNodeRef.current, rightNodeRef.current],
            { opacity: 0, y: 100, scale: 0.9, filter: 'blur(10px)' },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                filter: 'blur(0px)',
                duration: 1.5,
                stagger: 0.2,
                ease: 'power3.out'
            }
        );

        // Floating Physics (Anti-Gravity)
        gsap.to(leftNodeRef.current, {
            y: '-=15',
            rotation: 0.5,
            duration: 4,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: 1.5
        });

        gsap.to(rightNodeRef.current, {
            y: '+=20',
            rotation: -0.5,
            duration: 5,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: 1.5
        });
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);

        // Validate required fields
        if (!formData.name || !formData.email || !formData.message) {
            setError('Please fill in all required fields');
            return;
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setError('Please enter a valid email address');
            return;
        }

        setLoading(true);

        try {
            const response = await fetch(`${config.API_BASE_URL}/website/contact`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Failed to submit form');
            }

            // Success - show success animation
            setSubmitted(true);

            // Reset form after 5 seconds
            setTimeout(() => {
                setFormData({ name: '', email: '', company: '', message: '' });
                setSubmitted(false);
            }, 5000);

        } catch (err: any) {
            setError(err.message || 'Something went wrong. Please try again.');
            console.error('Contact form error:', err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="h-screen bg-[#050505] relative overflow-hidden flex flex-col items-center justify-center">
            {/* Ambient Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute top-0 right-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]" />

                {/* Ghost Text - Lower opacity */}
                <div className="absolute top-[15%] left-0 w-full overflow-hidden opacity-[0.03] pointer-events-none">
                    <motion.div
                        animate={{ x: [0, -1000] }}
                        transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
                        className="whitespace-nowrap text-[12vw] font-black text-white font-mono"
                    >
                        DIRECT_LINK_ESTABLISHED SECURE_CHANNEL_OPEN
                    </motion.div>
                </div>
            </div>

            {/* Main Content Hub - Shifted slightly down */}
            <div ref={containerRef} className="max-w-6xl w-full px-6 relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-24 items-center mt-8 md:mt-10">

                {/* Left Node: Transmission Form */}
                <div ref={leftNodeRef} className="relative">
                    <div className="absolute -top-20 -left-20 pointer-events-none">
                        <h1 className="text-8xl lg:text-9xl font-bold text-white/[0.03] select-none" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                            TOUCH
                        </h1>
                    </div>

                    <div className="relative bg-white/[0.05] backdrop-blur-3xl border border-white/20 rounded-2xl p-8 lg:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
                        {/* Signal Indicator on Card */}
                        <div className="absolute top-4 right-4 flex items-center gap-2">
                            <span className="text-[9px] text-gray-400 font-mono tracking-wider">SIGNAL_READY</span>
                            <div className="w-1.5 h-1.5 rounded-full bg-[#00ff00] animate-pulse shadow-[0_0_5px_#00ff00]" />
                        </div>

                        <div className="mb-8">
                            <h2 className="text-3xl font-bold text-white mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                                Transmission Node
                            </h2>
                            <p className="text-gray-400 text-sm font-mono">
                                Establish distinct connection.
                            </p>
                        </div>

                        <AnimatePresence mode='wait'>
                            {submitted ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="h-[300px] flex flex-col items-center justify-center text-center font-mono"
                                >
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ type: "spring", stiffness: 200, damping: 10 }}
                                        className="w-16 h-16 rounded-full border border-[#00ff00] flex items-center justify-center mb-6 relative"
                                    >
                                        <div className="w-10 h-10 bg-[#00ff00]/20 rounded-full animate-ping absolute" />
                                        <svg className="w-6 h-6 text-[#00ff00]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </motion.div>
                                    <h3 className="text-[#00ff00] text-lg mb-2">DATA_UPLOAD_COMPLETE</h3>
                                    <p className="text-gray-500 text-xs">Our neural network will respond shortly.</p>
                                </motion.div>
                            ) : (
                                <motion.form
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    onSubmit={handleSubmit}
                                    className="space-y-6"
                                >
                                    <div className="grid grid-cols-2 gap-6">
                                        <InputField
                                            label="NAME"
                                            name="name"
                                            placeholder="Enter your name"
                                            value={formData.name}
                                            onChange={(e: any) => setFormData({ ...formData, name: e.target.value })}
                                            focusedField={focusedField}
                                            setFocusedField={setFocusedField}
                                        />
                                        <InputField
                                            label="EMAIL ADDRESS"
                                            name="email"
                                            type="email"
                                            placeholder="name@example.com"
                                            value={formData.email}
                                            onChange={(e: any) => setFormData({ ...formData, email: e.target.value })}
                                            focusedField={focusedField}
                                            setFocusedField={setFocusedField}
                                        />
                                    </div>
                                    <InputField
                                        label="COMPANY"
                                        name="company"
                                        placeholder="Company name"
                                        value={formData.company}
                                        onChange={(e: any) => setFormData({ ...formData, company: e.target.value })}
                                        focusedField={focusedField}
                                        setFocusedField={setFocusedField}
                                    />
                                    <InputField
                                        label="MESSAGE"
                                        name="message"
                                        type="textarea"
                                        placeholder="How can we help you?"
                                        value={formData.message}
                                        onChange={(e: any) => setFormData({ ...formData, message: e.target.value })}
                                        focusedField={focusedField}
                                        setFocusedField={setFocusedField}
                                    />

                                    {error && (
                                        <div className="text-red-500 text-xs font-mono mb-4 bg-red-500/10 p-3 rounded border border-red-500/20">
                                            ERROR: {error}
                                        </div>
                                    )}

                                    <motion.button
                                        whileHover={{ scale: loading ? 1 : 1.02 }}
                                        whileTap={{ scale: loading ? 1 : 0.98 }}
                                        type="submit"
                                        disabled={loading}
                                        className={`w-full py-4 mt-2 bg-[#00ff00] text-black font-bold uppercase tracking-[0.2em] text-xs relative overflow-hidden group shadow-[0_0_20px_rgba(0,255,0,0.3)] hover:shadow-[0_0_40px_rgba(0,255,0,0.5)] transition-shadow duration-300 rounded-sm ${loading ? 'opacity-70 cursor-wait' : ''}`}
                                    >
                                        <span className="relative z-10">{loading ? 'TRANSMITTING...' : 'Send Message'}</span>
                                        {/* Shine Effect */}
                                        {!loading && <div className="absolute inset-0 bg-white/40 skew-x-[-20deg] translate-x-[-200%] group-hover:animate-shine pointer-events-none" />}
                                    </motion.button>
                                </motion.form>
                            )}
                        </AnimatePresence>
                    </div>
                </div>

                {/* Right Node: Connection Info */}
                <div ref={rightNodeRef} className="relative space-y-8">
                    {/* Massive Header "GET IN" positioned behind */}
                    <div className="absolute -top-32 -right-10 pointer-events-none z-0 mix-blend-overlay">
                        <h1 className="text-9xl font-black text-white/[0.05] leading-none" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                            GET<br />IN
                        </h1>
                    </div>

                    {/* Info Card */}
                    <div className="relative z-10 bg-black/40 backdrop-blur-md border border-white/10 rounded-xl p-8 hover:border-[#00ff00]/20 transition-colors duration-500 group shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
                        <div className="flex items-start justify-between mb-6">
                            <div>
                                <h3 className="text-white font-bold text-lg mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Digital Coordinates</h3>
                                <p className="text-gray-500 text-xs font-mono">Location & Direct Line</p>
                            </div>
                            <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#00ff00]/10 transition-colors">
                                <div className="w-2 h-2 bg-gray-500 rounded-full group-hover:bg-[#00ff00] transition-colors shadow-[0_0_0_0_rgba(0,255,0,0)] group-hover:shadow-[0_0_10px_2px_rgba(0,255,0,0.4)]" />
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <p className="text-[10px] uppercase tracking-widest text-[#00ff00]/60 mb-1">Email_Relay</p>
                                <a href="mailto:sales@xotbot.com" className="text-xl text-white hover:text-[#00ff00] transition-colors font-light">
                                    sales@xotbot.com
                                </a>
                            </div>
                            <div>
                                <p className="text-[10px] uppercase tracking-widest text-purple-400/60 mb-1">Base_Station</p>
                                <p className="text-white/60 text-sm leading-relaxed font-light">
                                    Tech Hub,<br />
                                    India
                                </p>
                            </div>
                        </div>

                        {/* Decor Code */}
                        <div className="absolute bottom-4 right-4 text-[8px] text-white/10 font-mono text-right">
                            COORD: 20.5937° N, 78.9629° E<br />
                            STATUS: ACTIVE<br />
                            PING: 12ms
                        </div>
                    </div>

                    {/* Social Links as "Ports" */}
                    <div className="flex gap-4">
                        {['Twitter', 'LinkedIn', 'GitHub'].map((social, i) => (
                            <a
                                key={social}
                                href="#"
                                className="h-12 px-6 flex items-center justify-center bg-white/[0.05] border border-white/10 rounded-lg text-white/40 text-xs uppercase tracking-wider hover:bg-[#00ff00]/5 hover:text-[#00ff00] hover:border-[#00ff00]/30 transition-all duration-300"
                            >
                                <span className="mr-2 opacity-50">0{i + 1} //</span> {social}
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            <style>{`
                ::selection {
                    background: #00ff00;
                    color: black;
                }
                @keyframes shine {
                    0% { transform: translateX(-200%) skewX(-20deg); }
                    100% { transform: translateX(200%) skewX(-20deg); }
                }
                .animate-shine {
                    animation: shine 1.5s ease-in-out infinite;
                }
            `}</style>
        </div>
    );
};

export default ContactPage;
