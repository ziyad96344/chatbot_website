import React, { useEffect, useRef, useState, useCallback } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const voiceOptions = [
    { id: 'ezra', name: 'Ezra', description: 'AI Voice', audio: '/voices/ElevenLabs_2026-02-09T12_31_26_Ezra - Voice of AI Itself_pvc_sp100_s50_sb37_se0_b_m2.mp3' },
    { id: 'dave', name: 'Dave', description: 'Deep Male', audio: '/voices/ElevenLabs_2026-02-09T12_35_09_Dave - Male Deep Voice - for Media and AI_pvc_sp100_s100_sb90_se0_b_m2.mp3' },
    { id: 'monika', name: 'Monika', description: 'Warm & Supportive', audio: '/voices/ElevenLabs_2026-02-09T12_35_46_Monika Sogam - Warm and Supportive_pvc_sp100_s34_sb36_se0_b_m2.mp3' },
    { id: 'sapphire', name: 'Sapphire', description: 'Sweet & Youthful', audio: '/voices/ElevenLabs_2026-02-09T12_36_35_Sapphire - Sweet, Youthful, and Clear_pvc_sp109_s44_sb100_se0_b_m2.mp3' },
    { id: 'raju', name: 'Raju', description: 'Medical Assistant', audio: '/voices/ElevenLabs_2026-02-09T12_38_33_Raju - Medical Assistant_pvc_sp95_s54_sb75_se0_b_m2.mp3' },
];

interface CommandCenterProps {
    onInitialize?: () => void;
}

const CommandCenter: React.FC<CommandCenterProps> = ({ onInitialize }) => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const scanOverlayRef = useRef<HTMLDivElement>(null);
    const shockwaveRef = useRef<HTMLDivElement>(null);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const [phase, setPhase] = useState(1);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [url, setUrl] = useState('');
    const [nameLocked, setNameLocked] = useState(false);
    const [emailLocked, setEmailLocked] = useState(false);
    const [urlLocked, setUrlLocked] = useState(false);
    const [selectedMode, setSelectedMode] = useState<'chat' | 'voice' | null>(null);
    const [selectedVoice, setSelectedVoice] = useState<string | null>(null);
    const [isScanning, setIsScanning] = useState(false);
    const [activeLine, setActiveLine] = useState<'name' | 'email' | 'url' | null>('name');

    // Lock name
    const lockName = useCallback(() => {
        if (name.length > 1) {
            setNameLocked(true);
            setActiveLine('email');
        }
    }, [name]);

    // Lock email
    const lockEmail = useCallback(() => {
        if (email.includes('@')) {
            setEmailLocked(true);
            setActiveLine('url');
            setTimeout(() => setPhase(2), 500);
        }
    }, [email]);

    // Trigger scan animation
    const triggerScan = useCallback(() => {
        if (url.length > 5 && !urlLocked) {
            setIsScanning(true);
            setUrlLocked(true);
            setActiveLine(null);

            if (scanOverlayRef.current) {
                gsap.timeline()
                    .to(scanOverlayRef.current, { opacity: 1, duration: 0.3 })
                    .to(scanOverlayRef.current, { opacity: 0, duration: 0.5, delay: 1.5 })
                    .add(() => {
                        setIsScanning(false);
                        setPhase(3);
                    });
            }
        }
    }, [url, urlLocked]);

    // Shockwave effect
    const triggerShockwave = useCallback((mode: 'chat' | 'voice', e: React.MouseEvent) => {
        setSelectedMode(mode);

        if (shockwaveRef.current) {
            const rect = (e.target as HTMLElement).getBoundingClientRect();
            const x = rect.left + rect.width / 2;
            const y = rect.top + rect.height / 2;

            shockwaveRef.current.style.left = `${x}px`;
            shockwaveRef.current.style.top = `${y}px`;

            gsap.fromTo(shockwaveRef.current,
                { scale: 0, opacity: 0.6 },
                { scale: 8, opacity: 0, duration: 0.8, ease: "power2.out" }
            );
        }

        if (mode === 'chat') {
            setTimeout(() => setPhase(5), 600);
        } else {
            setTimeout(() => setPhase(4), 600);
        }
    }, []);

    // Floating animation
    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.utils.toArray('.float-element').forEach((el: any, i) => {
                gsap.to(el, {
                    y: `+=${8 + i * 2}`,
                    duration: 3 + i * 0.5,
                    ease: "sine.inOut",
                    repeat: -1,
                    yoyo: true
                });
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    // Neural network lines animation
    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.utils.toArray('.neural-line').forEach((el: any) => {
                gsap.to(el, {
                    opacity: gsap.utils.random(0.1, 0.4),
                    duration: gsap.utils.random(1, 3),
                    repeat: -1,
                    yoyo: true
                });
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="relative min-h-screen w-full bg-[#0d0d12] py-20 px-4 overflow-hidden flex items-center justify-center">
            {/* Ambient background glows */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-emerald-500/5 blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-slate-500/5 blur-[100px]" />
            </div>
            {/* Neural network background */}
            <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none">
                {[...Array(15)].map((_, i) => (
                    <line key={i} className="neural-line"
                        x1={`${(i * 7) % 100}%`} y1={`${(i * 13) % 100}%`}
                        x2={`${((i * 11) + 20) % 100}%`} y2={`${((i * 17) + 30) % 100}%`}
                        stroke="rgba(16,185,129,0.3)" strokeWidth="1" />
                ))}
                {[...Array(20)].map((_, i) => (
                    <circle key={`node-${i}`} className="neural-line"
                        cx={`${(i * 5) % 100}%`} cy={`${(i * 7) % 100}%`}
                        r="2" fill="rgba(16,185,129,0.4)" />
                ))}
            </svg>

            {/* Scan overlay */}
            <div ref={scanOverlayRef} className="fixed inset-0 z-50 pointer-events-none opacity-0"
                style={{ background: 'linear-gradient(180deg, transparent 0%, rgba(16,185,129,0.1) 50%, transparent 100%)' }}>
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                        <div className="w-32 h-32 mx-auto mb-4 rounded-full border-2 border-emerald-400/50 relative">
                            <div className="absolute inset-0 rounded-full border-t-2 border-emerald-400 animate-spin" />
                            <div className="absolute inset-2 rounded-full border border-emerald-400/30" />
                        </div>
                        <p className="text-emerald-400 text-sm uppercase tracking-[0.3em] animate-pulse">Scanning Neural Pathways...</p>
                    </div>
                </div>
                {/* Scan line */}
                <div className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent animate-scan" />
            </div>

            {/* Shockwave */}
            <div ref={shockwaveRef} className="fixed w-20 h-20 rounded-full border-2 border-emerald-400 pointer-events-none z-40"
                style={{ transform: 'translate(-50%, -50%) scale(0)' }} />

            {/* Main Container */}
            <div className="relative max-w-3xl w-full mx-auto float-element">
                {/* Terminal Header */}
                <div className="flex items-center gap-2 mb-8">
                    <div className="w-3 h-3 rounded-full bg-red-500/60" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/60" />
                    <span className="ml-4 text-white/30 text-xs uppercase tracking-widest">OTTOBOTS COMMAND CENTER</span>
                </div>

                {/* Phase 1: Identity */}
                {phase >= 1 && (
                    <div className="mb-8 float-element">
                        <p className="text-emerald-400/70 text-xs font-mono mb-4">[SYSTEM] Enter target identity...</p>

                        {/* Name Line */}
                        <div className="mb-4">
                            <div className="flex items-center gap-4">
                                <span className="text-white/40 text-xs w-16 uppercase tracking-wider">Name</span>
                                <div className="flex-1 relative">
                                    <div className={`absolute bottom-0 left-0 right-0 h-[1px] transition-colors duration-300 ${nameLocked ? 'bg-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.5)]' : 'bg-white/20'
                                        }`} />
                                    <input
                                        type="text"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        onKeyDown={(e) => e.key === 'Enter' && lockName()}
                                        onBlur={lockName}
                                        disabled={nameLocked}
                                        autoFocus={activeLine === 'name'}
                                        className={`w-full bg-transparent border-none outline-none text-lg py-2 font-light tracking-wide ${nameLocked ? 'text-emerald-400' : 'text-white'
                                            }`}
                                        placeholder=""
                                    />
                                    {activeLine === 'name' && !nameLocked && (
                                        <span className="absolute right-0 top-1/2 -translate-y-1/2 text-emerald-400 animate-pulse text-xl">_</span>
                                    )}
                                </div>
                                {nameLocked && <span className="text-emerald-400 text-xs">●</span>}
                            </div>
                        </div>

                        {/* Email Line */}
                        <div className="mb-4">
                            <div className="flex items-center gap-4">
                                <span className="text-white/40 text-xs w-16 uppercase tracking-wider">Email</span>
                                <div className="flex-1 relative">
                                    <div className={`absolute bottom-0 left-0 right-0 h-[1px] transition-colors duration-300 ${emailLocked ? 'bg-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.5)]' : 'bg-white/20'
                                        }`} />
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        onKeyDown={(e) => e.key === 'Enter' && lockEmail()}
                                        onBlur={lockEmail}
                                        disabled={emailLocked || !nameLocked}
                                        className={`w-full bg-transparent border-none outline-none text-lg py-2 font-light tracking-wide ${emailLocked ? 'text-emerald-400' : 'text-white'
                                            } ${!nameLocked ? 'opacity-30' : ''}`}
                                    />
                                    {activeLine === 'email' && !emailLocked && nameLocked && (
                                        <span className="absolute right-0 top-1/2 -translate-y-1/2 text-emerald-400 animate-pulse text-xl">_</span>
                                    )}
                                </div>
                                {emailLocked && <span className="text-emerald-400 text-xs">●</span>}
                            </div>
                        </div>
                    </div>
                )}

                {/* Phase 2: Target URL */}
                {phase >= 2 && (
                    <div className="mb-8 float-element">
                        <p className="text-emerald-400/70 text-xs font-mono mb-4">[SYSTEM] Define source domain...</p>

                        <div className="flex items-center gap-4">
                            <span className="text-white/40 text-xs w-16 uppercase tracking-wider">URL</span>
                            <div className="flex-1 relative">
                                <div className={`absolute bottom-0 left-0 right-0 h-[1px] transition-colors duration-300 ${urlLocked ? 'bg-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.5)]' : 'bg-white/20'
                                    }`} />
                                <input
                                    type="url"
                                    value={url}
                                    onChange={(e) => setUrl(e.target.value)}
                                    onKeyDown={(e) => e.key === 'Enter' && triggerScan()}
                                    onBlur={triggerScan}
                                    disabled={urlLocked}
                                    autoFocus={activeLine === 'url'}
                                    className={`w-full bg-transparent border-none outline-none text-lg py-2 font-light tracking-wide ${urlLocked ? 'text-emerald-400' : 'text-white'
                                        }`}
                                    placeholder=""
                                />
                                {activeLine === 'url' && !urlLocked && (
                                    <span className="absolute right-0 top-1/2 -translate-y-1/2 text-emerald-400 animate-pulse text-xl">_</span>
                                )}
                            </div>
                            {urlLocked && <span className="text-emerald-400 text-xs">●</span>}
                        </div>
                    </div>
                )}

                {/* Phase 3: Mode Selection */}
                {phase >= 3 && (
                    <div className="mb-8 float-element">
                        <p className="text-emerald-400/70 text-xs font-mono mb-6">[SYSTEM] Select neural interface mode...</p>

                        <div className="flex justify-center gap-12">
                            {/* Chat Mode */}
                            <button onClick={(e) => triggerShockwave('chat', e)}
                                className={`relative group transition-all duration-500 ${selectedMode === 'chat' ? 'scale-110' : 'hover:scale-105'}`}>
                                <div className={`w-28 h-28 rounded-2xl flex items-center justify-center transition-all duration-300 ${selectedMode === 'chat'
                                    ? 'bg-emerald-500/20 border-2 border-emerald-400 shadow-[0_0_40px_rgba(16,185,129,0.3)]'
                                    : 'bg-white/[0.03] border border-white/10 group-hover:border-white/20'
                                    }`}>
                                    {/* 3D Chat Icon */}
                                    <div className="relative">
                                        <div className={`w-12 h-10 rounded-xl transition-colors ${selectedMode === 'chat' ? 'bg-emerald-400' : 'bg-white/20'}`}
                                            style={{ transform: 'perspective(100px) rotateX(-5deg) rotateY(5deg)' }} />
                                        <div className={`absolute -bottom-1 -left-1 w-4 h-4 rounded-full transition-colors ${selectedMode === 'chat' ? 'bg-emerald-300' : 'bg-white/10'}`} />
                                    </div>
                                </div>
                                <p className={`text-center mt-3 text-sm uppercase tracking-wider transition-colors ${selectedMode === 'chat' ? 'text-emerald-400' : 'text-white/50'
                                    }`}>Chat</p>
                            </button>

                            {/* Voice Mode */}
                            <button onClick={(e) => triggerShockwave('voice', e)}
                                className={`relative group transition-all duration-500 ${selectedMode === 'voice' ? 'scale-110' : 'hover:scale-105'}`}>
                                <div className={`w-28 h-28 rounded-2xl flex items-center justify-center transition-all duration-300 ${selectedMode === 'voice'
                                    ? 'bg-emerald-500/20 border-2 border-emerald-400 shadow-[0_0_40px_rgba(16,185,129,0.3)]'
                                    : 'bg-white/[0.03] border border-white/10 group-hover:border-white/20'
                                    }`}>
                                    {/* 3D Voice Icon - Soundwave */}
                                    <div className="flex items-center gap-1">
                                        {[0.4, 0.7, 1, 0.7, 0.4].map((h, i) => (
                                            <div key={i} className={`w-2 rounded-full transition-colors ${selectedMode === 'voice' ? 'bg-emerald-400' : 'bg-white/20'}`}
                                                style={{ height: `${h * 40}px`, animation: selectedMode === 'voice' ? `wave 0.5s ease-in-out ${i * 0.1}s infinite alternate` : 'none' }} />
                                        ))}
                                    </div>
                                </div>
                                <p className={`text-center mt-3 text-sm uppercase tracking-wider transition-colors ${selectedMode === 'voice' ? 'text-emerald-400' : 'text-white/50'
                                    }`}>Voice</p>
                            </button>
                        </div>
                    </div>
                )}

                {/* Phase 4: Voice Selection Cards */}
                {phase >= 4 && selectedMode === 'voice' && (
                    <div className="mb-8 float-element">
                        <p className="text-emerald-400/70 text-xs font-mono mb-6 text-center">[SYSTEM] Select voice persona...</p>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-w-xl mx-auto">
                            {voiceOptions.map((voice) => (
                                <button
                                    key={voice.id}
                                    onClick={() => {
                                        setSelectedVoice(voice.id);
                                        // Stop previous audio if playing
                                        if (audioRef.current) {
                                            audioRef.current.pause();
                                            audioRef.current.currentTime = 0;
                                        }
                                        // Play new audio sample
                                        const audio = new Audio(voice.audio);
                                        audioRef.current = audio;
                                        audio.play().catch(() => { });
                                    }}
                                    className={`relative p-4 rounded-xl transition-all duration-300 text-left group ${selectedVoice === voice.id
                                        ? 'bg-emerald-500/20 border-2 border-emerald-400 shadow-[0_0_30px_rgba(16,185,129,0.3)]'
                                        : 'bg-white/[0.03] border border-white/10 hover:border-white/20 hover:bg-white/[0.05]'
                                        }`}
                                >
                                    {/* Play Icon */}
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-3 transition-all ${selectedVoice === voice.id
                                        ? 'bg-emerald-400 text-black'
                                        : 'bg-white/10 text-white/50 group-hover:bg-white/20'
                                        }`}>
                                        <svg className="w-4 h-4 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </div>

                                    {/* Voice Name */}
                                    <h4 className={`font-bold text-sm mb-1 transition-colors ${selectedVoice === voice.id ? 'text-emerald-400' : 'text-white/80'
                                        }`}>
                                        {voice.name}
                                    </h4>

                                    {/* Description */}
                                    <p className="text-[10px] text-white/40 uppercase tracking-wider">
                                        {voice.description}
                                    </p>

                                    {/* Selected Indicator */}
                                    {selectedVoice === voice.id && (
                                        <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                                    )}
                                </button>
                            ))}
                        </div>

                        {selectedVoice && (
                            <p className="text-center text-emerald-400 text-sm mt-6 font-medium">
                                ✓ {voiceOptions.find(v => v.id === selectedVoice)?.name} Selected
                            </p>
                        )}
                    </div>
                )}

                {/* Initialize Button */}
                {((phase >= 4 && selectedMode === 'voice' && selectedVoice) || (phase >= 5 && selectedMode === 'chat')) && (
                    <div className="text-center mt-12 float-element">
                        <button
                            onClick={onInitialize}
                            className="relative px-10 py-5 bg-transparent border-2 border-emerald-400 rounded-lg text-emerald-400 font-bold uppercase tracking-[0.2em] overflow-hidden group"
                            style={{ animation: 'heartbeat 1.5s ease-in-out infinite' }}>
                            <div className="absolute inset-0 bg-emerald-400/10" />
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-400/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                            <span className="relative z-10">[ Initialize Neural Link ]</span>
                        </button>
                    </div>
                )}
            </div>

            <style>{`
        @keyframes scan {
          0% { top: 0; }
          100% { top: 100%; }
        }
        .animate-scan {
          animation: scan 2s linear infinite;
        }
        @keyframes wave {
          from { transform: scaleY(0.5); }
          to { transform: scaleY(1.2); }
        }
        @keyframes heartbeat {
          0%, 100% { transform: scale(1); box-shadow: 0 0 20px rgba(16,185,129,0.3); }
          50% { transform: scale(1.03); box-shadow: 0 0 40px rgba(16,185,129,0.5); }
        }
      `}</style>
        </section>
    );
};

export default CommandCenter;
