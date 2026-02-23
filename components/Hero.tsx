import React, { useEffect, useRef, useState, useCallback, useMemo } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const isMobileDevice = () => {
  if (typeof window === 'undefined') return false;
  return window.innerWidth < 768 || /Android|iPhone|iPad|iPod|webOS|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const robotContainerRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const botCardRef = useRef<HTMLDivElement>(null);
  const userCardRef = useRef<HTMLDivElement>(null);
  const soundWaveRef = useRef<SVGSVGElement>(null);
  const micIconRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  const waveAnimationsRef = useRef<gsap.core.Tween[]>([]);
  const hasTriggeredRef = useRef(false);
  const audioPlayedRef = useRef(false);

  const isMobile = useMemo(() => isMobileDevice(), []);
  const [splineLoaded, setSplineLoaded] = useState(false);
  const [splineReady, setSplineReady] = useState(!isMobile); // Desktop: load immediately, Mobile: defer
  const [menuOpen, setMenuOpen] = useState(false);
  const [displayedText, setDisplayedText] = useState('');
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [showUserPrompt, setShowUserPrompt] = useState(false);
  const [showAudioHint, setShowAudioHint] = useState(false);
  const [isHeroVisible, setIsHeroVisible] = useState(true);

  const greetingText = "Hello, I am your customized AI bot for your website. How may I assist you?";

  // Start wave animation
  const startWave = useCallback(() => {
    if (!soundWaveRef.current) return;
    const bars = soundWaveRef.current.querySelectorAll('.wave-bar');
    waveAnimationsRef.current.forEach(t => t.kill());
    waveAnimationsRef.current = [];
    bars.forEach((bar, i) => {
      const tween = gsap.to(bar, {
        scaleY: () => gsap.utils.random(0.3, 1.8),
        duration: () => gsap.utils.random(0.08, 0.15),
        repeat: -1, yoyo: true, ease: "power1.inOut", delay: i * 0.02,
      });
      waveAnimationsRef.current.push(tween);
    });
  }, []);

  // Stop wave
  const stopWave = useCallback(() => {
    waveAnimationsRef.current.forEach(t => t.kill());
    waveAnimationsRef.current = [];
    if (soundWaveRef.current) {
      soundWaveRef.current.querySelectorAll('.wave-bar').forEach((bar, i) => {
        gsap.to(bar, { scaleY: 0.1, duration: 0.6, delay: i * 0.03, ease: "power2.out" });
      });
    }
  }, []);

  // Play audio function
  const playAudio = useCallback(() => {
    const audio = audioRef.current;
    if (!audio || audioPlayedRef.current) return;

    audio.currentTime = 0;
    audio.volume = 1;
    audio.play().then(() => {
      audioPlayedRef.current = true;
      setIsAudioPlaying(true);
      setShowAudioHint(false);

      // Restart wave animation synced with audio
      startWave();
      if (botCardRef.current) {
        gsap.to(botCardRef.current, { boxShadow: '0 0 60px rgba(16,185,129,0.35), 0 0 120px rgba(16,185,129,0.15)', duration: 0.5 });
      }
    }).catch(() => { });
  }, [startWave]);

  // Play experience (visuals)
  const playExperience = useCallback(() => {
    if (hasTriggeredRef.current) return;
    hasTriggeredRef.current = true;

    const audio = audioRef.current;
    const duration = audio?.duration || 4;

    // Start visuals
    startWave();
    setIsAudioPlaying(true);
    if (botCardRef.current) {
      gsap.to(botCardRef.current, { boxShadow: '0 0 60px rgba(16,185,129,0.35), 0 0 120px rgba(16,185,129,0.15)', duration: 0.5 });
    }

    // Typewriter
    const obj = { progress: 0 };
    gsap.to(obj, {
      progress: 1, duration, ease: "none",
      onUpdate: () => setDisplayedText(greetingText.slice(0, Math.floor(obj.progress * greetingText.length))),
      onComplete: () => { setDisplayedText(greetingText); setIsTypingComplete(true); }
    });

    // Try to play audio - if blocked, show hint
    if (audio) {
      audio.currentTime = 0;
      audio.volume = 1;
      audio.play().then(() => {
        audioPlayedRef.current = true;
      }).catch(() => {
        // Audio blocked - show subtle hint
        setShowAudioHint(true);
      });
    }

    // End handler
    setTimeout(() => {
      setIsAudioPlaying(false);
      stopWave();
      if (botCardRef.current) {
        gsap.to(botCardRef.current, { boxShadow: '0 0 30px rgba(16,185,129,0.15), 0 0 60px rgba(16,185,129,0.08)', duration: 0.8 });
      }
      setTimeout(() => {
        setShowUserPrompt(true);
        if (userCardRef.current) {
          gsap.to(userCardRef.current, { boxShadow: '0 0 40px rgba(16,185,129,0.25), 0 0 80px rgba(16,185,129,0.1)', duration: 0.6 });
        }
      }, 500);
    }, duration * 1000 + 500);

  }, [startWave, stopWave]);

  // Trigger on mousemove
  useEffect(() => {
    const trigger = () => playExperience();
    document.addEventListener('mousemove', trigger, { once: true });
    return () => document.removeEventListener('mousemove', trigger);
  }, [playExperience]);

  // Handle click anywhere to play audio
  useEffect(() => {
    const handleClick = () => {
      playAudio();
    };
    document.addEventListener('click', handleClick);
    document.addEventListener('touchstart', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
      document.removeEventListener('touchstart', handleClick);
    };
  }, [playAudio]);

  // Scroll fade
  useEffect(() => {
    const handleScroll = () => {
      const audio = audioRef.current;
      if (!audio || audio.paused) return;
      const fade = Math.min(Math.max((window.scrollY - window.innerHeight * 0.3) / (window.innerHeight * 0.4), 0), 1);
      audio.volume = 1 - fade;
      if (fade >= 1) { audio.pause(); setIsAudioPlaying(false); }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Magnetic mic
  const handleMicHover = useCallback((e: React.MouseEvent) => {
    if (!micIconRef.current) return;
    const rect = micIconRef.current.getBoundingClientRect();
    gsap.to(micIconRef.current, { x: (e.clientX - rect.left - rect.width / 2) * 0.35, y: (e.clientY - rect.top - rect.height / 2) * 0.35, duration: 0.25 });
  }, []);
  const handleMicLeave = useCallback(() => {
    if (micIconRef.current) gsap.to(micIconRef.current, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1, 0.4)" });
  }, []);

  // Hide the Spline iframe via CSS when hero scrolls offscreen (render only once)
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHeroVisible(entry.isIntersecting);
      },
      { threshold: 0 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Bobbing
  useEffect(() => {
    const ctx = gsap.context(() => {
      if (robotContainerRef.current) gsap.to(robotContainerRef.current, { y: "+=10", duration: 5, ease: "sine.inOut", repeat: -1, yoyo: true });
      if (botCardRef.current) gsap.to(botCardRef.current, { y: "+=16", duration: 2.8, ease: "sine.inOut", repeat: -1, yoyo: true });
      if (userCardRef.current) gsap.to(userCardRef.current, { y: "+=12", duration: 3.2, ease: "sine.inOut", repeat: -1, yoyo: true, delay: 0.6 });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  // Defer Spline load on mobile by 3s, and listen for menu open/close events
  useEffect(() => {
    if (isMobile) {
      const timer = setTimeout(() => setSplineReady(true), 3000);
      const handleMenuOpen = () => setMenuOpen(true);
      const handleMenuClose = () => setMenuOpen(false);
      window.addEventListener('mobile-menu-open', handleMenuOpen);
      window.addEventListener('mobile-menu-close', handleMenuClose);
      return () => {
        clearTimeout(timer);
        window.removeEventListener('mobile-menu-open', handleMenuOpen);
        window.removeEventListener('mobile-menu-close', handleMenuClose);
      };
    }
  }, [isMobile]);

  // Main animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!containerRef.current || !heroContentRef.current || !textRef.current || !robotContainerRef.current) return;
      gsap.to(heroContentRef.current, { opacity: 0.2, scale: 0.96, ease: "none", scrollTrigger: { trigger: containerRef.current, start: "top top", end: "bottom top", scrub: 1.5 } });
      gsap.to(textRef.current, { yPercent: 35, ease: "none", scrollTrigger: { trigger: containerRef.current, start: "top top", end: "bottom top", scrub: 1.5 } });
      gsap.to(robotContainerRef.current, { yPercent: -30, scale: 0.7, opacity: 0, ease: "none", scrollTrigger: { trigger: containerRef.current, start: "top top", end: "60% top", scrub: 1 } });
      gsap.to(subtitleRef.current, { yPercent: -40, opacity: 0, ease: "none", scrollTrigger: { trigger: containerRef.current, start: "top top", end: "45% top", scrub: 1.5 } });
      if (botCardRef.current) gsap.to(botCardRef.current, { yPercent: -70, xPercent: -25, opacity: 0, scale: 0.85, rotate: -4, ease: "none", scrollTrigger: { trigger: containerRef.current, start: "top top", end: "75% top", scrub: 1.5 } });
      if (userCardRef.current) gsap.to(userCardRef.current, { yPercent: -50, xPercent: 25, opacity: 0, scale: 0.88, rotate: 3, ease: "none", scrollTrigger: { trigger: containerRef.current, start: "top top", end: "65% top", scrub: 1.8 } });

      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
      tl.from(textRef.current, { y: 80, opacity: 0, duration: 1.3 })
        .from(robotContainerRef.current, { y: 100, opacity: 0, scale: 0.92, duration: 1.4 }, "-=1")
        .from(botCardRef.current, { x: -80, opacity: 0, duration: 1.1 }, "-=0.9")
        .from(userCardRef.current, { x: 80, opacity: 0, duration: 1.1 }, "-=1")
        .from(".hero-subtitle", { y: 30, opacity: 0, duration: 0.9, stagger: 0.1 }, "-=0.7")
        .from(".scroll-indicator", { y: 20, opacity: 0, duration: 0.7 }, "-=0.4")
        .from(".corner-accent", { scale: 0, opacity: 0, duration: 0.4, stagger: 0.06 }, "-=0.3");
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative h-screen w-full overflow-hidden bg-[#050505]" style={{ minHeight: '100vh', maxHeight: '100vh' }}>
      <audio ref={audioRef} src="/voice.mp3" preload="auto" />

      {/* Subtle audio hint */}
      {showAudioHint && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 animate-pulse">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-sm">
            <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
            </svg>
            <span className="text-[10px] uppercase tracking-widest text-emerald-400/80">Click for audio</span>
          </div>
        </div>
      )}

      <div ref={heroContentRef} className="absolute inset-0 max-w-screen-2xl mx-auto" style={{ willChange: 'transform, opacity' }}>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.03)_0%,transparent_50%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#050505_70%)] pointer-events-none z-10" />

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
          <h1 ref={textRef} className="text-[28vw] md:text-[24vw] lg:text-[20vw] font-black leading-none tracking-[-0.04em] text-white/[0.03] select-none whitespace-nowrap uppercase" style={{ fontFamily: "'Space Grotesk', sans-serif", willChange: 'transform' }}>XOTBOT</h1>
        </div>

        <div ref={botCardRef} className="absolute left-[3%] md:left-[6%] lg:left-[8%] top-[22%] md:top-[26%] z-30" style={{ willChange: 'transform', boxShadow: isAudioPlaying ? '0 0 60px rgba(16,185,129,0.35), 0 0 120px rgba(16,185,129,0.15)' : '0 0 30px rgba(16,185,129,0.15), 0 0 60px rgba(16,185,129,0.08)' }}>
          <div className="relative backdrop-blur-xl rounded-2xl p-5 md:p-6 w-[280px] md:w-[300px] lg:w-[320px] border border-emerald-500/20" style={{ background: 'rgba(16,185,129,0.06)' }}>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full bg-emerald-400 ${isAudioPlaying ? 'animate-pulse' : ''}`} style={{ boxShadow: '0 0 10px rgba(52,211,153,0.8)' }} />
                <span className="text-[10px] uppercase tracking-[0.25em] text-emerald-400 font-semibold">Xot Speaking</span>
              </div>
              <svg ref={soundWaveRef} viewBox="0 0 72 20" className="w-[72px] h-5">
                {[...Array(14)].map((_, i) => (<rect key={i} className="wave-bar" x={i * 5 + 1} y="8" width="3" height="4" rx="1.5" fill="#10b981" style={{ transformOrigin: 'center', transform: 'scaleY(0.1)', filter: 'drop-shadow(0 0 6px rgba(16,185,129,0.8))' }} />))}
              </svg>
            </div>
            <div className="min-h-[65px]">
              <p className="text-[13px] md:text-[14px] text-white/90 leading-relaxed font-light">
                {displayedText}
                {!isTypingComplete && displayedText.length > 0 && <span className="inline-block w-[2px] h-[15px] bg-emerald-400 ml-0.5 align-middle animate-pulse" />}
              </p>
            </div>
          </div>
        </div>

        <div ref={userCardRef} className="absolute right-[3%] md:right-[6%] lg:right-[8%] bottom-[20%] md:bottom-[26%] z-30" style={{ willChange: 'transform', boxShadow: showUserPrompt ? '0 0 40px rgba(16,185,129,0.25), 0 0 80px rgba(16,185,129,0.1)' : '0 0 20px rgba(0,0,0,0.3)' }}>
          <div className={`relative backdrop-blur-xl rounded-2xl p-4 md:p-5 w-[220px] md:w-[240px] lg:w-[260px] border ${showUserPrompt ? 'border-emerald-500/30' : 'border-white/10'}`} style={{ background: 'rgba(255,255,255,0.03)' }}>
            <div className="mb-3"><span className={`text-[9px] uppercase tracking-[0.25em] font-medium ${showUserPrompt ? 'text-emerald-400/70' : 'text-white/50'}`}>Your Message</span></div>
            <div className="relative">
              <div className={`w-full h-11 rounded-xl flex items-center px-4 ${showUserPrompt ? 'bg-emerald-500/5 border-emerald-500/20' : 'bg-white/5 border-white/10'} border`}>
                <span className={`text-[11px] uppercase tracking-wider ${showUserPrompt ? 'text-emerald-400/50' : 'text-white/30'}`}>Ask Xot anything...</span>
              </div>
              <div ref={micIconRef} className="absolute right-3 top-1/2 -translate-y-1/2 w-7 h-7 flex items-center justify-center cursor-pointer group" onMouseMove={handleMicHover} onMouseLeave={handleMicLeave}>
                <svg viewBox="0 0 24 24" className={`w-4 h-4 ${showUserPrompt ? 'text-emerald-400' : 'text-white/40 group-hover:text-emerald-400'}`} fill="currentColor">
                  <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z" />
                  <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div ref={robotContainerRef} className="absolute inset-0 flex items-center justify-center z-20" style={{ willChange: isMobile ? 'auto' : 'transform' }}>
          <div className="relative w-[95vw] md:w-[70vw] lg:w-[60vw] max-w-[900px]" style={{ aspectRatio: '1/1' }}>
            {splineReady && (
              <div
                className="spline-wrapper absolute inset-0 overflow-hidden"
                style={{
                  clipPath: 'inset(0 0 60px 0)',
                  visibility: (isHeroVisible && !menuOpen) ? 'visible' : 'hidden',
                  pointerEvents: (isHeroVisible && !menuOpen) ? 'auto' : 'none',
                }}
              >
                <iframe src="https://my.spline.design/nexbotrobotcharacterconcept-SBwuKfTaYpl7fPn5dfSBifkb/" frameBorder="0" width="100%" className={`w-full transition-opacity duration-700 ${splineLoaded ? 'opacity-100' : 'opacity-0'}`} style={{ background: 'transparent', border: 'none', height: 'calc(100% + 60px)' }} title="Xotbot" loading="lazy" onLoad={() => setSplineLoaded(true)} />
              </div>
            )}
            {!splineLoaded && <div className="absolute inset-0 flex items-center justify-center"><div className="w-10 h-10 border-2 border-white/10 border-t-emerald-400/60 rounded-full animate-spin" /></div>}
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-[50%] h-[50%] ${isMobile ? 'blur-[40px]' : 'blur-[120px]'} rounded-full ${isAudioPlaying ? 'opacity-25' : 'opacity-10'}`} style={{ background: 'radial-gradient(circle, rgba(16,185,129,1) 0%, transparent 70%)' }} />
          </div>
        </div>

        <div ref={subtitleRef} className="absolute inset-x-0 bottom-0 flex flex-col items-center pb-[10vh] pointer-events-none z-30">
          <p className="hero-subtitle text-[10px] md:text-[11px] uppercase tracking-[0.5em] text-white/50 font-medium mb-3">AI-Powered Chatbot & Voice Agent</p>
          <p className="hero-subtitle text-[10px] md:text-[11px] tracking-[0.15em] text-white/30 font-light mb-3 normal-case">Turn your website into an intelligent assistant — in minutes, not months</p>
          <div className="hero-subtitle flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" style={{ boxShadow: '0 0 10px rgba(52,211,153,0.7)' }} />
            <span className="text-[9px] uppercase tracking-[0.35em] text-white/40 font-light">Systems Online</span>
          </div>
        </div>

        <div className="scroll-indicator absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center z-30">
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/30 to-transparent" />
          <span className="text-[7px] uppercase tracking-[0.4em] text-white/20 mt-2">Scroll</span>
        </div>

        <div className="corner-accent absolute top-6 left-6 w-20 h-[1px] bg-gradient-to-r from-white/15 to-transparent z-40" />
        <div className="corner-accent absolute top-6 left-6 w-[1px] h-20 bg-gradient-to-b from-white/15 to-transparent z-40" />
        <div className="corner-accent absolute top-6 right-6 w-20 h-[1px] bg-gradient-to-l from-white/15 to-transparent z-40" />
        <div className="corner-accent absolute top-6 right-6 w-[1px] h-20 bg-gradient-to-b from-white/15 to-transparent z-40" />
        <div className="corner-accent absolute bottom-6 left-6 w-20 h-[1px] bg-gradient-to-r from-white/10 to-transparent z-40" />
        <div className="corner-accent absolute bottom-6 left-6 w-[1px] h-20 bg-gradient-to-t from-white/10 to-transparent z-40" />
        <div className="corner-accent absolute bottom-6 right-6 w-20 h-[1px] bg-gradient-to-l from-white/10 to-transparent z-40" />
        <div className="corner-accent absolute bottom-6 right-6 w-[1px] h-20 bg-gradient-to-t from-white/10 to-transparent z-40" />
      </div>
    </div>
  );
};

export default Hero;
