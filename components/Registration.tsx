import React, { useEffect, useRef, useState, useCallback } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Registration: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const panelRef = useRef<HTMLDivElement>(null);
    const headingRef = useRef<HTMLHeadingElement>(null);
    const step1Ref = useRef<HTMLDivElement>(null);
    const step2Ref = useRef<HTMLDivElement>(null);
    const step3Ref = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const scanBarRef = useRef<HTMLDivElement>(null);

    const [websiteUrl, setWebsiteUrl] = useState('');
    const [isScanning, setIsScanning] = useState(false);
    const [scanComplete, setScanComplete] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [nameFocused, setNameFocused] = useState(false);
    const [emailFocused, setEmailFocused] = useState(false);

    const toggleOption = useCallback((option: string) => {
        setSelectedOptions(prev =>
            prev.includes(option)
                ? prev.filter(o => o !== option)
                : [...prev, option]
        );
    }, []);

    const handleScanSite = useCallback(() => {
        if (!websiteUrl || isScanning) return;
        setIsScanning(true);
        setScanComplete(false);
        if (scanBarRef.current) {
            gsap.fromTo(scanBarRef.current,
                { scaleX: 0, transformOrigin: 'left' },
                {
                    scaleX: 1,
                    duration: 2.5,
                    ease: "power2.inOut",
                    onComplete: () => {
                        setIsScanning(false);
                        setScanComplete(true);
                    }
                }
            );
        }
    }, [websiteUrl, isScanning]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            if (!sectionRef.current || !panelRef.current) return;

            gsap.fromTo(panelRef.current,
                { y: 80, opacity: 0 },
                {
                    y: 0, opacity: 1, duration: 1.2, ease: "expo.out",
                    scrollTrigger: { trigger: sectionRef.current, start: "top 80%", toggleActions: "play none none reverse" }
                }
            );

            const elements = [headingRef.current, step1Ref.current, step2Ref.current, step3Ref.current, buttonRef.current];
            gsap.fromTo(elements.filter(Boolean),
                { y: 30, opacity: 0 },
                {
                    y: 0, opacity: 1, duration: 0.7, stagger: 0.12, ease: "power3.out",
                    scrollTrigger: { trigger: sectionRef.current, start: "top 60%", toggleActions: "play none none reverse" }
                }
            );
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    const handleButtonHover = useCallback((isHover: boolean) => {
        if (!buttonRef.current) return;
        gsap.to(buttonRef.current, {
            boxShadow: isHover
                ? '0 0 30px rgba(16, 185, 129, 0.4), 0 0 60px rgba(16, 185, 129, 0.2)'
                : '0 0 15px rgba(16, 185, 129, 0.25)',
            scale: isHover ? 1.01 : 1,
            duration: 0.3
        });
    }, []);

    return (
        <section ref={sectionRef} className="relative min-h-screen w-full bg-[#030303] py-16 px-4 overflow-hidden flex items-center justify-center">
            {/* Subtle grid */}
            <div className="absolute inset-0 opacity-[0.02]" style={{
                backgroundImage: 'linear-gradient(rgba(16,185,129,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.3) 1px, transparent 1px)',
                backgroundSize: '80px 80px'
            }} />

            {/* Dark vignette */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#030303_70%)]" />

            {/* Panel - Compact & Dark */}
            <div ref={panelRef} className="relative w-full max-w-lg mx-auto backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-white/[0.06]"
                style={{ background: 'rgba(10,10,10,0.9)', boxShadow: '0 0 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.02)' }}>

                {/* Heading */}
                <h2 ref={headingRef} className="text-2xl md:text-3xl font-bold text-white text-center mb-8" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    Deploy Your Intelligence<span className="text-emerald-400">.</span>
                </h2>

                {/* Step 1 */}
                <div ref={step1Ref} className="mb-6">
                    <label className="text-[9px] uppercase tracking-[0.25em] text-white/30 mb-2 block">Step 1 — Website URL</label>
                    <div className="relative">
                        <input type="url" value={websiteUrl} onChange={(e) => setWebsiteUrl(e.target.value)} placeholder="https://yourwebsite.com"
                            className="w-full h-11 bg-white/[0.02] border border-white/[0.08] rounded-lg px-4 pr-24 text-white placeholder-white/20 text-sm focus:outline-none focus:border-emerald-500/40 transition-colors" />
                        <button onClick={handleScanSite} disabled={!websiteUrl || isScanning}
                            className={`absolute right-1.5 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-md text-[10px] uppercase tracking-wider font-medium transition-all ${websiteUrl && !isScanning ? 'bg-emerald-500/15 text-emerald-400 hover:bg-emerald-500/25 border border-emerald-500/30' : 'bg-white/[0.03] text-white/20 cursor-not-allowed border border-white/[0.05]'
                                }`}>
                            {isScanning ? '...' : scanComplete ? '✓' : 'Scan'}
                        </button>
                        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-white/[0.03] overflow-hidden">
                            <div ref={scanBarRef} className="h-full bg-gradient-to-r from-emerald-500 to-cyan-400" style={{ transform: 'scaleX(0)', transformOrigin: 'left' }} />
                        </div>
                    </div>
                </div>

                {/* Step 2 - Compact Cards */}
                <div ref={step2Ref} className="mb-6">
                    <label className="text-[9px] uppercase tracking-[0.25em] text-white/30 mb-3 block">Step 2 — Choose Integration</label>
                    <div className="grid grid-cols-2 gap-3">
                        {/* Chatbot */}
                        <button onClick={() => toggleOption('chatbot')}
                            className={`relative p-4 rounded-xl border transition-all duration-200 text-left ${selectedOptions.includes('chatbot') ? 'border-emerald-500/40 bg-emerald-500/[0.06]' : 'border-white/[0.06] bg-white/[0.01] hover:border-white/[0.12]'
                                }`}
                            style={{ boxShadow: selectedOptions.includes('chatbot') ? '0 0 20px rgba(16,185,129,0.15)' : 'none' }}>
                            <div className={`w-8 h-8 rounded-lg flex items-center justify-center mb-2 ${selectedOptions.includes('chatbot') ? 'bg-emerald-500/15' : 'bg-white/[0.03]'}`}>
                                <svg className={`w-4 h-4 ${selectedOptions.includes('chatbot') ? 'text-emerald-400' : 'text-white/40'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                </svg>
                            </div>
                            <h3 className={`text-sm font-medium ${selectedOptions.includes('chatbot') ? 'text-emerald-300' : 'text-white/80'}`}>Chatbot</h3>
                            <p className="text-white/30 text-[10px] mt-0.5">Website AI chat</p>
                            <div className={`absolute top-3 right-3 w-4 h-4 rounded-full border flex items-center justify-center transition-all ${selectedOptions.includes('chatbot') ? 'border-emerald-400 bg-emerald-400' : 'border-white/20'
                                }`}>
                                {selectedOptions.includes('chatbot') && <svg className="w-2.5 h-2.5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>}
                            </div>
                        </button>

                        {/* Voice */}
                        <button onClick={() => toggleOption('voice')}
                            className={`relative p-4 rounded-xl border transition-all duration-200 text-left ${selectedOptions.includes('voice') ? 'border-emerald-500/40 bg-emerald-500/[0.06]' : 'border-white/[0.06] bg-white/[0.01] hover:border-white/[0.12]'
                                }`}
                            style={{ boxShadow: selectedOptions.includes('voice') ? '0 0 20px rgba(16,185,129,0.15)' : 'none' }}>
                            <div className={`w-8 h-8 rounded-lg flex items-center justify-center mb-2 ${selectedOptions.includes('voice') ? 'bg-emerald-500/15' : 'bg-white/[0.03]'}`}>
                                <svg className={`w-4 h-4 ${selectedOptions.includes('voice') ? 'text-emerald-400' : 'text-white/40'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                            </div>
                            <h3 className={`text-sm font-medium ${selectedOptions.includes('voice') ? 'text-emerald-300' : 'text-white/80'}`}>Voice AI</h3>
                            <p className="text-white/30 text-[10px] mt-0.5">Smart call handling</p>
                            <div className={`absolute top-3 right-3 w-4 h-4 rounded-full border flex items-center justify-center transition-all ${selectedOptions.includes('voice') ? 'border-emerald-400 bg-emerald-400' : 'border-white/20'
                                }`}>
                                {selectedOptions.includes('voice') && <svg className="w-2.5 h-2.5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>}
                            </div>
                        </button>
                    </div>
                </div>

                {/* Step 3 - Compact Inputs */}
                <div ref={step3Ref} className="mb-6">
                    <label className="text-[9px] uppercase tracking-[0.25em] text-white/30 mb-3 block">Step 3 — Your Details</label>
                    <div className="grid grid-cols-2 gap-3">
                        <div className="relative">
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} onFocus={() => setNameFocused(true)} onBlur={() => setNameFocused(false)}
                                className="w-full h-11 bg-white/[0.02] border border-white/[0.08] rounded-lg px-4 pt-4 text-white text-sm focus:outline-none focus:border-emerald-500/40 transition-colors" />
                            <label className={`absolute left-4 transition-all duration-200 pointer-events-none ${nameFocused || name ? 'top-1 text-[9px] text-emerald-400/70' : 'top-1/2 -translate-y-1/2 text-xs text-white/30'}`}>Name</label>
                        </div>
                        <div className="relative">
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} onFocus={() => setEmailFocused(true)} onBlur={() => setEmailFocused(false)}
                                className="w-full h-11 bg-white/[0.02] border border-white/[0.08] rounded-lg px-4 pt-4 text-white text-sm focus:outline-none focus:border-emerald-500/40 transition-colors" />
                            <label className={`absolute left-4 transition-all duration-200 pointer-events-none ${emailFocused || email ? 'top-1 text-[9px] text-emerald-400/70' : 'top-1/2 -translate-y-1/2 text-xs text-white/30'}`}>Email</label>
                        </div>
                    </div>
                </div>

                {/* Button */}
                <button ref={buttonRef} onMouseEnter={() => handleButtonHover(true)} onMouseLeave={() => handleButtonHover(false)}
                    className="w-full h-11 bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 rounded-lg text-white font-medium text-sm uppercase tracking-wider relative overflow-hidden group"
                    style={{ boxShadow: '0 0 15px rgba(16,185,129,0.25)' }}>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
                    <span className="relative z-10">Initialize Bot</span>
                </button>

                <p className="text-center text-white/20 text-[10px] mt-4 tracking-wide">By continuing, you agree to our Terms & Privacy</p>
            </div>
        </section>
    );
};

export default Registration;
