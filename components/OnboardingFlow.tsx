import React, { useEffect, useRef, useState, useCallback } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const voicePersonas = [
    { id: 'antoni', name: 'Antoni', label: 'Sophisticated', color: '#8b5cf6' },
    { id: 'adam', name: 'Adam', label: 'Deep & Professional', color: '#10b981' },
    { id: 'bella', name: 'Bella', label: 'Friendly & Warm', color: '#f59e0b' },
    { id: 'james', name: 'James', label: 'Authoritative', color: '#3b82f6' },
];

const OnboardingFlow: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const panelRef = useRef<HTMLDivElement>(null);
    const urlInputRef = useRef<HTMLDivElement>(null);
    const scanRingRef = useRef<HTMLDivElement>(null);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [websiteUrl, setWebsiteUrl] = useState('');
    const [isScanning, setIsScanning] = useState(false);
    const [selectedType, setSelectedType] = useState<'chat' | 'voice' | null>(null);
    const [selectedVoice, setSelectedVoice] = useState<string | null>(null);
    const [nameFocused, setNameFocused] = useState(false);
    const [emailFocused, setEmailFocused] = useState(false);
    const [urlFocused, setUrlFocused] = useState(false);

    // URL scanning animation
    useEffect(() => {
        if (websiteUrl.length > 10 && !isScanning) {
            setIsScanning(true);
            if (scanRingRef.current) {
                gsap.fromTo(scanRingRef.current,
                    { scale: 1, opacity: 0.6 },
                    {
                        scale: 1.15, opacity: 0, duration: 1.2, repeat: 2, ease: "power2.out",
                        onComplete: () => setIsScanning(false)
                    }
                );
            }
        }
    }, [websiteUrl, isScanning]);

    // Panel bobbing animation
    useEffect(() => {
        const ctx = gsap.context(() => {
            if (panelRef.current) {
                gsap.to(panelRef.current, {
                    y: "+=8", duration: 3.5, ease: "sine.inOut", repeat: -1, yoyo: true
                });
            }
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    // Entry animations
    useEffect(() => {
        const ctx = gsap.context(() => {
            if (!sectionRef.current || !panelRef.current) return;

            gsap.fromTo(panelRef.current,
                { y: 100, opacity: 0 },
                {
                    y: 0, opacity: 1, duration: 1.2, ease: "expo.out",
                    scrollTrigger: { trigger: sectionRef.current, start: "top 75%", toggleActions: "play none none reverse" }
                }
            );

            gsap.fromTo('.step-section',
                { y: 40, opacity: 0 },
                {
                    y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power3.out",
                    scrollTrigger: { trigger: sectionRef.current, start: "top 60%", toggleActions: "play none none reverse" }
                }
            );
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    // Card selection animation
    const handleTypeSelect = useCallback((type: 'chat' | 'voice') => {
        setSelectedType(type);
        if (type !== 'voice') setSelectedVoice(null);
    }, []);

    // Voice preview
    const handleVoiceSelect = useCallback((voiceId: string) => {
        setSelectedVoice(voiceId);
        // Would play 2-sec voice preview here
    }, []);

    // Button hover
    const handleButtonHover = useCallback((isHover: boolean, ref: HTMLButtonElement | null) => {
        if (!ref) return;
        gsap.to(ref, {
            scale: isHover ? 1.02 : 1,
            boxShadow: isHover
                ? '0 0 50px rgba(16,185,129,0.4), 0 0 100px rgba(16,185,129,0.2)'
                : '0 0 25px rgba(16,185,129,0.3)',
            duration: 0.3
        });
    }, []);

    return (
        <section ref={sectionRef} className="relative min-h-screen w-full bg-[#050505] py-20 px-4 overflow-hidden flex items-center justify-center">
            {/* Grain texture overlay */}
            <div className="absolute inset-0 opacity-[0.03]" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`
            }} />

            {/* Purple radial glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[800px] rounded-full blur-[250px] opacity-[0.06]"
                style={{ background: 'radial-gradient(ellipse, rgba(139,92,246,1) 0%, transparent 70%)' }} />

            {/* Dark vignette */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#050505_70%)]" />

            {/* Main Panel */}
            <div ref={panelRef} className="relative w-full max-w-2xl mx-auto backdrop-blur-3xl rounded-3xl p-8 md:p-10 border border-white/10"
                style={{ background: 'rgba(10,10,10,0.85)', boxShadow: '0 0 100px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.03)' }}>

                {/* Heading */}
                <div className="text-center mb-10">
                    <p className="text-[9px] uppercase tracking-[0.4em] text-emerald-400/50 mb-3">Initialize Your Intelligence</p>
                    <h2 className="text-2xl md:text-3xl font-bold text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                        Deploy Your AI Assistant<span className="text-emerald-400">.</span>
                    </h2>
                </div>

                {/* STEP 1: Identity */}
                <div className="step-section mb-8">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-6 h-6 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
                            <span className="text-[10px] font-bold text-emerald-400">1</span>
                        </div>
                        <span className="text-[10px] uppercase tracking-[0.2em] text-white/40">Identity & Target</span>
                    </div>

                    <div className="grid grid-cols-2 gap-3 mb-3">
                        {/* Name */}
                        <div className="relative">
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)}
                                onFocus={() => setNameFocused(true)} onBlur={() => setNameFocused(false)}
                                className="w-full h-12 bg-white/[0.02] border border-white/[0.08] rounded-xl px-4 pt-4 text-white text-sm focus:outline-none focus:border-emerald-500/40 transition-colors" />
                            <label className={`absolute left-4 transition-all duration-200 pointer-events-none ${nameFocused || name ? 'top-1.5 text-[9px] text-emerald-400/70' : 'top-1/2 -translate-y-1/2 text-xs text-white/30'}`}>Name</label>
                        </div>
                        {/* Email */}
                        <div className="relative">
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                                onFocus={() => setEmailFocused(true)} onBlur={() => setEmailFocused(false)}
                                className="w-full h-12 bg-white/[0.02] border border-white/[0.08] rounded-xl px-4 pt-4 text-white text-sm focus:outline-none focus:border-emerald-500/40 transition-colors" />
                            <label className={`absolute left-4 transition-all duration-200 pointer-events-none ${emailFocused || email ? 'top-1.5 text-[9px] text-emerald-400/70' : 'top-1/2 -translate-y-1/2 text-xs text-white/30'}`}>Email</label>
                        </div>
                    </div>

                    {/* Website URL with scan effect */}
                    <div ref={urlInputRef} className="relative">
                        <input type="url" value={websiteUrl} onChange={(e) => setWebsiteUrl(e.target.value)}
                            onFocus={() => setUrlFocused(true)} onBlur={() => setUrlFocused(false)}
                            className="w-full h-12 bg-white/[0.02] border border-white/[0.08] rounded-xl px-4 pt-4 text-white text-sm focus:outline-none focus:border-emerald-500/40 transition-colors" />
                        <label className={`absolute left-4 transition-all duration-200 pointer-events-none ${urlFocused || websiteUrl ? 'top-1.5 text-[9px] text-emerald-400/70' : 'top-1/2 -translate-y-1/2 text-xs text-white/30'}`}>Website URL</label>

                        {/* Scanning pulse ring */}
                        <div ref={scanRingRef} className="absolute inset-0 rounded-xl border-2 border-emerald-400 pointer-events-none opacity-0" />

                        {isScanning && (
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                <span className="text-[9px] uppercase tracking-wider text-emerald-400/70">Scanning...</span>
                            </div>
                        )}
                    </div>
                </div>

                {/* STEP 2: Core Selection */}
                <div className="step-section mb-8">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-6 h-6 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
                            <span className="text-[10px] font-bold text-emerald-400">2</span>
                        </div>
                        <span className="text-[10px] uppercase tracking-[0.2em] text-white/40">Select Your Bot Type</span>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        {/* Neural Chatbot */}
                        <button onClick={() => handleTypeSelect('chat')}
                            className={`relative p-5 rounded-2xl border transition-all duration-300 text-left group overflow-hidden ${selectedType === 'chat'
                                    ? 'border-emerald-500/50 bg-emerald-500/[0.08] scale-[1.02]'
                                    : 'border-white/[0.08] bg-white/[0.02] hover:border-white/[0.15] hover:scale-[1.01]'
                                }`}
                            style={{ boxShadow: selectedType === 'chat' ? '0 0 40px rgba(16,185,129,0.2)' : 'none' }}>

                            {/* Neon glow icon */}
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 transition-all duration-300 ${selectedType === 'chat' ? 'bg-emerald-500/20' : 'bg-white/[0.03]'
                                }`}>
                                <svg className={`w-6 h-6 transition-all duration-300 ${selectedType === 'chat' ? 'text-emerald-400' : 'text-white/40'}`}
                                    style={{ filter: selectedType === 'chat' ? 'drop-shadow(0 0 8px rgba(16,185,129,0.6))' : 'none' }}
                                    fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                </svg>
                            </div>

                            <h3 className={`text-base font-semibold mb-1 transition-colors ${selectedType === 'chat' ? 'text-emerald-300' : 'text-white'}`}>
                                Neural Chatbot
                            </h3>
                            <p className="text-white/40 text-[11px]">AI-powered website assistant</p>

                            {/* Checkmark */}
                            <div className={`absolute top-4 right-4 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${selectedType === 'chat' ? 'border-emerald-400 bg-emerald-400' : 'border-white/20'
                                }`}>
                                {selectedType === 'chat' && <svg className="w-3 h-3 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>}
                            </div>
                        </button>

                        {/* Voice Callbot */}
                        <button onClick={() => handleTypeSelect('voice')}
                            className={`relative p-5 rounded-2xl border transition-all duration-300 text-left group overflow-hidden ${selectedType === 'voice'
                                    ? 'border-emerald-500/50 bg-emerald-500/[0.08] scale-[1.02]'
                                    : 'border-white/[0.08] bg-white/[0.02] hover:border-white/[0.15] hover:scale-[1.01]'
                                }`}
                            style={{ boxShadow: selectedType === 'voice' ? '0 0 40px rgba(16,185,129,0.2)' : 'none' }}>

                            {/* Oscillating soundwave icon */}
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 transition-all duration-300 ${selectedType === 'voice' ? 'bg-emerald-500/20' : 'bg-white/[0.03]'
                                }`}>
                                <svg className={`w-6 h-6 transition-all duration-300 ${selectedType === 'voice' ? 'text-emerald-400' : 'text-white/40'}`}
                                    style={{ filter: selectedType === 'voice' ? 'drop-shadow(0 0 8px rgba(16,185,129,0.6))' : 'none' }}
                                    viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                                </svg>
                            </div>

                            <h3 className={`text-base font-semibold mb-1 transition-colors ${selectedType === 'voice' ? 'text-emerald-300' : 'text-white'}`}>
                                Voice Callbot
                            </h3>
                            <p className="text-white/40 text-[11px]">Intelligent phone AI system</p>

                            {/* Checkmark */}
                            <div className={`absolute top-4 right-4 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${selectedType === 'voice' ? 'border-emerald-400 bg-emerald-400' : 'border-white/20'
                                }`}>
                                {selectedType === 'voice' && <svg className="w-3 h-3 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>}
                            </div>
                        </button>
                    </div>
                </div>

                {/* STEP 3: Voice Persona (only if voice selected) */}
                {selectedType === 'voice' && (
                    <div className="step-section mb-8 animate-fadeIn">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-6 h-6 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
                                <span className="text-[10px] font-bold text-emerald-400">3</span>
                            </div>
                            <span className="text-[10px] uppercase tracking-[0.2em] text-white/40">Choose Voice Persona</span>
                        </div>

                        <div className="grid grid-cols-4 gap-3">
                            {voicePersonas.map((voice) => (
                                <button key={voice.id} onClick={() => handleVoiceSelect(voice.id)}
                                    className={`relative p-3 rounded-xl border transition-all duration-300 text-center group ${selectedVoice === voice.id
                                            ? 'border-emerald-500/50 bg-emerald-500/[0.08]'
                                            : 'border-white/[0.06] bg-white/[0.02] hover:border-white/[0.12]'
                                        }`}
                                    style={{ boxShadow: selectedVoice === voice.id ? `0 0 20px ${voice.color}30` : 'none' }}>

                                    {/* Avatar circle */}
                                    <div className={`w-10 h-10 mx-auto mb-2 rounded-full flex items-center justify-center text-lg font-bold transition-all ${selectedVoice === voice.id ? 'bg-emerald-500/20 text-emerald-400' : 'bg-white/[0.05] text-white/40'
                                        }`}
                                        style={{ boxShadow: selectedVoice === voice.id ? `0 0 15px ${voice.color}40` : 'none' }}>
                                        {voice.name[0]}
                                    </div>

                                    <p className={`text-[11px] font-medium transition-colors ${selectedVoice === voice.id ? 'text-emerald-300' : 'text-white/70'}`}>
                                        {voice.name}
                                    </p>
                                    <p className="text-[9px] text-white/30">{voice.label}</p>

                                    {/* Play indicator */}
                                    {selectedVoice === voice.id && (
                                        <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-emerald-400 flex items-center justify-center">
                                            <svg className="w-2 h-2 text-black" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M8 5v14l11-7z" />
                                            </svg>
                                        </div>
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {/* CTA Button */}
                <button
                    onMouseEnter={(e) => handleButtonHover(true, e.currentTarget)}
                    onMouseLeave={(e) => handleButtonHover(false, e.currentTarget)}
                    className="w-full h-14 bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 rounded-xl text-white font-bold text-sm uppercase tracking-[0.15em] relative overflow-hidden group"
                    style={{ boxShadow: '0 0 25px rgba(16,185,129,0.3)' }}>

                    {/* Liquid fill effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

                    <span className="relative z-10 flex items-center justify-center gap-2">
                        Initialize My Assistant
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </span>
                </button>

                <p className="text-center text-white/20 text-[10px] mt-4 tracking-wide">
                    Secure encryption • Setup in under 5 minutes
                </p>
            </div>
        </section>
    );
};

export default OnboardingFlow;
