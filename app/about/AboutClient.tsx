'use client';

import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, AnimatePresence } from 'framer-motion';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

// Stagger animation variants for Framer Motion
const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
        },
    },
};

const fadeUpVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number],
        },
    },
};

const scaleInVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.6,
            ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number],
        },
    },
};

// Obsolete concepts that will dissolve
const obsoleteConcepts = [
    'Manual Chat Support',
    'Dead Links',
    'Slow Response Times',
    'Generic FAQs',
    'Lost Customers',
    'Missed Opportunities',
];

// Node data extracted outside component to avoid re-creation
const nodeData = [
    { 
        id: '01', 
        title: 'ETHICAL_AI', 
        delay: 0,
        desc: 'Built on foundations of transparency and uncompromised data privacy. We ensure AI empowers without exploiting.'
    },
    { 
        id: '02', 
        title: 'INNOVATION', 
        delay: 0.1,
        desc: 'Relentlessly pushing the boundaries of cognitive models to deliver solutions that redefine customer interaction.'
    },
    { 
        id: '03', 
        title: 'PARTNERSHIP', 
        delay: 0.2,
        desc: 'We don\'t just provide tools; we align our neural architecture with your business goals for compounding growth.'
    },
    { 
        id: '04', 
        title: 'INTELLIGENCE', 
        delay: 0.3,
        desc: 'Moving beyond scripted bots to true contextual understanding, delivering human-like empathy at machine scale.'
    },
    { 
        id: '05', 
        title: 'HUMANITY', 
        delay: 0.4,
        desc: 'Technology designed to elevate human potential, automating the mundane so your team can focus on what matters.'
    },
    { 
        id: '06', 
        title: 'EVOLUTION', 
        delay: 0.5,
        desc: 'Our models are not static. They continuously learn, adapt, and scale seamlessly as your enterprise expands.'
    },
];

// Process steps for the solution section
const processSteps = [
    {
        phase: '01',
        title: 'DEEP SCAN',
        subtitle: 'Domain Intelligence',
        description: 'We crawl every page, form, and interaction on your site — extracting the full knowledge architecture.',
        status: 'complete' as const,
        metrics: ['2,847 pages indexed', '148ms avg response'],
    },
    {
        phase: '02',
        title: 'NEURAL MAPPING',
        subtitle: 'Cognitive Modeling',
        description: 'Raw data transforms into structured intent maps — your AI learns how your business thinks.',
        status: 'active' as const,
        metrics: ['347 intents mapped', '99.2% accuracy'],
    },
    {
        phase: '03',
        title: 'DEPLOYMENT',
        subtitle: 'Live Integration',
        description: 'One line of code. Your cognitive AI goes live — learning, responding, converting.',
        status: 'pending' as const,
        metrics: ['< 50ms latency', 'Zero downtime'],
    },
];

// Terminal lines for the live extraction visualization
const terminalLines = [
    { type: 'comment' as const, text: '// Xotbot Neural Extraction Engine v4.2' },
    { type: 'blank' as const, text: '' },
    { type: 'keyword' as const, text: 'const', rest: ' cortex = await XotCortex.init({' },
    { type: 'property' as const, text: '  target:', rest: ' "https://your-domain.com",' },
    { type: 'property' as const, text: '  depth:', rest: ' "full-recursive",' },
    { type: 'property' as const, text: '  mode:', rest: ' "cognitive-extraction",' },
    { type: 'normal' as const, text: '});' },
    { type: 'blank' as const, text: '' },
    { type: 'output' as const, text: '✓ Connected to domain — 2,847 pages detected' },
    { type: 'output' as const, text: '✓ Knowledge graph built — 347 intent nodes' },
    { type: 'output' as const, text: '✓ Neural pathways optimized — 99.2% confidence' },
    { type: 'active' as const, text: '⟳ Deploying cognitive model...' },
];

import Footer from '@/components/Footer';

const AboutPage: React.FC = () => {
    const [activeNode, setActiveNode] = useState<string | null>(null);
    const heroRef = useRef<HTMLDivElement>(null);
    const problemRef = useRef<HTMLDivElement>(null);
    const solutionRef = useRef<HTMLDivElement>(null);
    const teamRef = useRef<HTMLDivElement>(null);
    const neuralLineRef = useRef<HTMLDivElement>(null);
    const neuralGlowRef = useRef<HTMLDivElement>(null);

    // Lenis smooth scroll + GSAP ScrollTrigger animations
    useEffect(() => {
        // Initialize Lenis smooth scroll
        const lenis = new Lenis({
            duration: 1.4,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            touchMultiplier: 1.5,
            infinite: false,
            autoResize: true,
        });

        // Connect Lenis → GSAP ScrollTrigger
        lenis.on('scroll', ScrollTrigger.update);

        let rafId: number;
        const raf = (time: number) => {
            lenis.raf(time);
            rafId = requestAnimationFrame(raf);
        };
        rafId = requestAnimationFrame(raf);

        // Tell ScrollTrigger to use the default body scroller
        ScrollTrigger.defaults({ scroller: document.body });

        const ctx = gsap.context(() => {
            // Hero neural line glow pulse
            gsap.to(neuralGlowRef.current, {
                opacity: 0.8,
                duration: 2,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut',
            });

            // Hero floating accents parallax
            gsap.to('.hero-accent', {
                y: -150,
                stagger: 0.1,
                ease: 'none',
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true,
                },
            });

            // Problem section - Pinned Dissolving
            const obsoleteElements = document.querySelectorAll('.obsolete-item');

            const problemTl = gsap.timeline({
                scrollTrigger: {
                    trigger: problemRef.current,
                    start: 'top top',
                    end: '+=150%',
                    scrub: 1,
                    pin: true,
                    anticipatePin: 1,
                }
            });

            problemTl.to('.dark-overlay', {
                opacity: 0.8,
                duration: 1
            });

            problemTl.to(obsoleteElements, {
                x: -60,
                opacity: 0,
                stagger: 0.5,
                ease: 'power1.inOut',
                duration: 2
            }, "-=0.5");

            // Team section parallax
            gsap.to('.principle-circle', {
                y: -20,
                stagger: 0.1,
                ease: 'none',
                scrollTrigger: {
                    trigger: teamRef.current,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true,
                },
            });
        });

        setTimeout(() => {
            ScrollTrigger.refresh();
        }, 100);

        return () => {
            cancelAnimationFrame(rafId);
            lenis.destroy();
            ctx.revert();
            ScrollTrigger.killAll();
        };
    }, []);

    return (
        <div className="relative bg-[#0a0a0c] min-h-screen overflow-x-hidden">
            
            {/* Background Pattern */}
            <div
                className="fixed inset-0 pointer-events-none opacity-[0.03]"
                style={{
                    backgroundImage: `
            radial-gradient(circle at 20% 20%, rgba(16, 185, 129, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(139, 92, 246, 0.1) 0%, transparent 50%),
            linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
          `,
                    backgroundSize: '100% 100%, 100% 100%, 80px 80px, 80px 80px',
                    willChange: 'auto',
                }}
            />

            {/* ============ HERO SECTION ============ */}
            <section
                ref={heroRef}
                className="snap-section relative h-screen flex items-center justify-center px-6"
            >
                {/* Vibrant ambient light leaks */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-emerald-500/10 blur-[120px] animate-pulse" />
                    <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-500/10 blur-[120px] animate-pulse" />
                </div>
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#0a0a0c_80%)] pointer-events-none" />

                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                    className="relative z-10 text-center max-w-4xl mx-auto"
                >
                    <motion.div variants={fadeUpVariant} className="flex justify-center mb-12">
                        <div className="relative">
                            <div
                                ref={neuralLineRef}
                                className="w-32 h-[2px] bg-gradient-to-r from-transparent via-emerald-400 to-transparent rounded-full"
                            />
                            <div
                                ref={neuralGlowRef}
                                className="absolute inset-0 w-32 h-[2px] rounded-full opacity-40"
                                style={{
                                    background: 'rgba(16, 185, 129, 0.6)',
                                    filter: 'blur(8px)',
                                    transform: 'translateZ(0)',
                                }}
                            />
                        </div>
                    </motion.div>

                    <motion.h1
                        variants={fadeUpVariant}
                        className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                        The Genesis of
                        <br />
                        <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-500 bg-clip-text text-transparent">
                            Intelligent Conversation
                        </span>
                        <span className="text-emerald-400">.</span>
                    </motion.h1>

                    <motion.p
                        variants={fadeUpVariant}
                        className="text-lg md:text-xl text-white/50 font-light max-w-xl mx-auto"
                    >
                        From raw data to a fully cognitive AI assistant.
                    </motion.p>

                    <motion.div
                        variants={fadeUpVariant}
                        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center"
                    >
                        <div className="w-[1px] h-16 bg-gradient-to-b from-emerald-400/50 to-transparent" />
                        <span className="text-[9px] uppercase tracking-[0.3em] text-white/30 mt-3">
                            Scroll
                        </span>
                    </motion.div>
                </motion.div>

                <div className="hero-accent absolute top-20 left-10 w-20 h-20 border border-emerald-500/10 rounded-full" style={{ transform: 'translateZ(0)' }} />
                <div className="hero-accent absolute bottom-32 right-16 w-12 h-12 border border-purple-500/10 rotate-45" style={{ transform: 'translateZ(0)' }} />
                <div className="hero-accent absolute top-1/3 right-20 w-2 h-2 bg-emerald-400/30 rounded-full" style={{ transform: 'translateZ(0)' }} />
            </section>

            {/* ============ PROBLEM SECTION ============ */}
            <section ref={problemRef} className="snap-section relative h-screen py-20 px-6 flex flex-col justify-center">
                <div
                    className="dark-overlay absolute inset-0 pointer-events-none"
                    style={{
                        background: `repeating-linear-gradient(
              0deg,
              transparent,
              transparent 2px,
              rgba(0,0,0,0.3) 2px,
              rgba(0,0,0,0.3) 4px
            )`,
                    }}
                />

                <div className="relative z-10 max-w-5xl mx-auto">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-100px' }}
                        variants={staggerContainer}
                    >
                        <motion.p
                            variants={fadeUpVariant}
                            className="text-[10px] uppercase tracking-[0.5em] text-red-400/60 mb-6 text-center"
                        >
                            The Problem
                        </motion.p>

                        <motion.h2
                            variants={fadeUpVariant}
                            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-8"
                            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                        >
                            Static Websites Are{' '}
                            <span className="line-through text-white/30">Obsolete</span>
                            <span className="text-red-400">.</span>
                        </motion.h2>

                        <motion.p
                            variants={fadeUpVariant}
                            className="text-white/40 text-center max-w-2xl mx-auto mb-16 text-lg"
                        >
                            Traditional web interactions leave customers frustrated.
                            <br />
                            Your visitors deserve better than automated dead-ends.
                        </motion.p>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                            {obsoleteConcepts.map((concept) => (
                                <motion.div
                                    key={concept}
                                    variants={scaleInVariant}
                                    className="obsolete-item relative p-6 rounded-xl border border-red-500/20 bg-red-500/[0.03]"
                                    style={{
                                        willChange: 'transform, opacity',
                                        transform: 'translateZ(0)',
                                    }}
                                >
                                    <div className="flex items-center gap-3">
                                        <span className="w-2 h-2 rounded-full bg-red-400/60" />
                                        <span className="text-white/60 text-sm font-medium">{concept}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                <div className="absolute top-1/4 left-8 text-red-500/20 text-4xl">✕</div>
                <div className="absolute bottom-1/3 right-12 text-red-500/20 text-2xl">✕</div>
            </section>

            {/* ============ SOLUTION SECTION — REDESIGNED ============ */}
            <section ref={solutionRef} className="snap-section relative h-screen py-20 px-6 overflow-hidden flex flex-col justify-center">
                {/* Ambient background glow */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-emerald-500/[0.03]" style={{ filter: 'blur(120px)' }} />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto">
                    {/* Section Header — Centered */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-80px' }}
                        variants={staggerContainer}
                        className="text-center mb-10 md:mb-12"
                    >
                        <motion.div variants={fadeUpVariant} className="flex items-center justify-center gap-4 mb-8">
                            <div className="h-[1px] w-12 bg-emerald-500/50" />
                            <p className="text-[10px] uppercase tracking-[0.5em] text-emerald-400/70 font-mono">
                                How It Works
                            </p>
                            <div className="h-[1px] w-12 bg-emerald-500/50" />
                        </motion.div>

                        <motion.h2
                            variants={fadeUpVariant}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
                            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                        >
                            The Neural{' '}
                            <span className="bg-gradient-to-r from-emerald-300 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
                                Extraction
                            </span>
                            <span className="text-emerald-400">.</span>
                        </motion.h2>

                        <motion.p variants={fadeUpVariant} className="text-white/40 text-lg max-w-2xl mx-auto font-light">
                            We don't just scrape — we dissect your domain's architecture to construct
                            a living, breathing cognitive model in three precision phases.
                        </motion.p>
                    </motion.div>

                    {/* Two Column: Process Steps + Terminal */}
                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">

                        {/* Left: Process Steps */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: '-50px' }}
                            variants={staggerContainer}
                            className="w-full lg:w-5/12"
                        >
                            <div className="relative">
                                {/* Vertical connecting line */}
                                <div className="absolute left-[19px] top-8 bottom-8 w-[1px] bg-gradient-to-b from-emerald-500/30 via-emerald-500/10 to-transparent" />
                                <div className="space-y-6 md:space-y-8">
                                    {processSteps.map((step, i) => (
                                        <motion.div
                                            key={step.phase}
                                            variants={fadeUpVariant}
                                            className="relative flex gap-6 group"
                                        >
                                            {/* Phase indicator */}
                                            <div className="relative z-10 flex-shrink-0">
                                                <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-500 ${step.status === 'complete'
                                                    ? 'border-emerald-400 bg-emerald-500/20'
                                                    : step.status === 'active'
                                                        ? 'border-emerald-400 bg-emerald-500/10'
                                                        : 'border-white/10 bg-white/[0.02]'
                                                    }`}>
                                                    {step.status === 'complete' ? (
                                                        <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                        </svg>
                                                    ) : step.status === 'active' ? (
                                                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" style={{ animation: 'about-float 2s ease-in-out infinite' }} />
                                                    ) : (
                                                        <span className="text-[10px] font-mono text-white/30">{step.phase}</span>
                                                    )}
                                                </div>
                                            </div>

                                            {/* Content */}
                                            <div className="flex-1 pb-2">
                                                <div className="flex items-center gap-3 mb-1.5">
                                                    <span className="text-[10px] font-mono text-emerald-400/60 tracking-widest">{step.phase}</span>
                                                    <span className={`text-[9px] font-mono px-2 py-0.5 rounded-full ${step.status === 'complete'
                                                        ? 'bg-emerald-500/10 text-emerald-400'
                                                        : step.status === 'active'
                                                            ? 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/20'
                                                            : 'bg-white/[0.03] text-white/30'
                                                        }`}>
                                                        {step.status === 'complete' ? 'COMPLETE' : step.status === 'active' ? 'IN PROGRESS' : 'QUEUED'}
                                                    </span>
                                                </div>

                                                <h3 className="text-lg md:text-xl font-bold text-white mb-0.5 tracking-wide" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                                                    {step.title}
                                                </h3>
                                                <p className="text-[10px] md:text-xs text-emerald-400/50 font-mono mb-1.5 tracking-wider">{step.subtitle}</p>
                                                <p className="text-white/40 text-sm leading-relaxed mb-2 line-clamp-2 md:line-clamp-none">{step.description}</p>

                                                {/* Metrics */}
                                                <div className="flex gap-4">
                                                    {step.metrics.map((metric, j) => (
                                                        <div key={j} className="flex items-center gap-2">
                                                            <div className={`w-1 h-1 rounded-full ${step.status !== 'pending' ? 'bg-emerald-400/60' : 'bg-white/20'}`} />
                                                            <span className={`text-[11px] font-mono ${step.status !== 'pending' ? 'text-white/50' : 'text-white/20'}`}>
                                                                {metric}
                                                            </span>
                                                        </div>
                                                    ))}
                                                </div>

                                                {/* Progress bar for active step */}
                                                {step.status === 'active' && (
                                                    <div className="mt-4 h-[2px] w-full bg-white/[0.06] rounded-full overflow-hidden">
                                                        <motion.div
                                                            className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full"
                                                            initial={{ width: '0%' }}
                                                            whileInView={{ width: '68%' }}
                                                            viewport={{ once: true }}
                                                            transition={{ duration: 2, delay: 0.8, ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number] }}
                                                        />
                                                    </div>
                                                )}
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* Right: Terminal Window */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="w-full lg:w-7/12 lg:sticky lg:top-32"
                        >
                            <div
                                className="rounded-xl overflow-hidden border border-white/[0.06]"
                                style={{
                                    background: 'linear-gradient(145deg, rgba(255,255,255,0.03) 0%, rgba(0,0,0,0.4) 100%)',
                                    boxShadow: '0 25px 60px rgba(0,0,0,0.5), 0 0 80px rgba(16,185,129,0.04)',
                                }}
                            >
                                {/* Terminal Header */}
                                <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/[0.06] bg-white/[0.02]">
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 rounded-full bg-red-500/70" />
                                        <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                                        <div className="w-3 h-3 rounded-full bg-emerald-500/70" />
                                    </div>
                                    <span className="text-[10px] font-mono text-white/25 tracking-wider">xot_cortex — neural_extraction</span>
                                    <div className="flex items-center gap-1.5">
                                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400/80" style={{ animation: 'about-float 2s ease-in-out infinite' }} />
                                        <span className="text-[9px] font-mono text-emerald-400/60">LIVE</span>
                                    </div>
                                </div>

                                {/* Terminal Body */}
                                <div className="p-4 md:p-6 font-mono text-[11px] md:text-[13px] leading-relaxed overflow-hidden">
                                    <motion.div
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                        variants={{
                                            hidden: { opacity: 0 },
                                            visible: {
                                                opacity: 1,
                                                transition: { staggerChildren: 0.08, delayChildren: 0.5 },
                                            },
                                        }}
                                    >
                                        {terminalLines.map((line, i) => (
                                            <motion.div
                                                key={i}
                                                variants={{
                                                    hidden: { opacity: 0, x: -10 },
                                                    visible: { opacity: 1, x: 0 },
                                                }}
                                                className={`${line.type === 'blank' ? 'h-4' : 'mb-1'}`}
                                            >
                                                {line.type === 'comment' && (
                                                    <span className="text-white/20">{line.text}</span>
                                                )}
                                                {line.type === 'keyword' && (
                                                    <span>
                                                        <span className="text-purple-400">{line.text}</span>
                                                        <span className="text-white/60">{line.rest}</span>
                                                    </span>
                                                )}
                                                {line.type === 'property' && (
                                                    <span>
                                                        <span className="text-emerald-300/70">{line.text}</span>
                                                        <span className="text-amber-300/60">{line.rest}</span>
                                                    </span>
                                                )}
                                                {line.type === 'normal' && (
                                                    <span className="text-white/60">{line.text}</span>
                                                )}
                                                {line.type === 'output' && (
                                                    <span className="text-emerald-400/80">{line.text}</span>
                                                )}
                                                {line.type === 'active' && (
                                                    <span className="text-emerald-300 inline-flex items-center gap-2">
                                                        {line.text}
                                                        <span className="inline-block w-1.5 h-4 bg-emerald-400/70" style={{ animation: 'cursor-blink 0.8s step-end infinite' }} />
                                                    </span>
                                                )}
                                            </motion.div>
                                        ))}
                                    </motion.div>
                                </div>

                                {/* Terminal Footer — Status Bar */}
                                <div className="flex items-center justify-between px-5 py-2.5 border-t border-white/[0.04] bg-white/[0.01]">
                                    <div className="flex items-center gap-4">
                                        <span className="text-[9px] font-mono text-white/20">UTF-8</span>
                                        <span className="text-[9px] font-mono text-white/20">TypeScript</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="h-[3px] w-16 bg-white/[0.06] rounded-full overflow-hidden">
                                            <motion.div
                                                className="h-full bg-emerald-500/60 rounded-full"
                                                initial={{ width: '0%' }}
                                                whileInView={{ width: '72%' }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 2.5, delay: 1.5, ease: 'easeOut' }}
                                            />
                                        </div>
                                        <span className="text-[9px] font-mono text-white/20">72%</span>
                                    </div>
                                </div>
                            </div>

                            {/* Reflection / ambient light below terminal */}
                            <div className="mt-6 flex justify-center">
                                <div className="w-2/3 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/15 to-transparent" />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ============ TEAM/PHILOSOPHY SECTION (Neural Accordion) ============ */}
            <section ref={teamRef} className="snap-section relative py-32 px-6 bg-[#0a0a0c] min-h-screen flex flex-col justify-center">
                <div className="relative z-10 max-w-6xl mx-auto w-full">
                    
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="mb-20 md:mb-32"
                    >
                        <motion.p
                            variants={fadeUpVariant}
                            className="text-[10px] uppercase tracking-[0.5em] text-emerald-400/60 mb-6 font-mono font-semibold"
                        >
                            00_PHILOSOPHY_MATRIX
                        </motion.p>

                        <motion.h2
                            variants={fadeUpVariant}
                            className="text-4xl md:text-5xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1]"
                            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                        >
                            The Core Principles of<br />
                            <span className="text-white/30">Neural Architecture</span><span className="text-emerald-400">.</span>
                        </motion.h2>
                    </motion.div>

                    {/* Accordion Container */}
                    <div className="border-t border-white/10">
                        {nodeData.map((node, i) => (
                            <motion.div 
                                key={node.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: i * 0.1 }}
                                className="border-b border-white/10 group cursor-pointer"
                                onClick={() => setActiveNode(activeNode === node.id ? null : node.id)}
                            >
                                <div className={`py-8 md:py-12 transition-all duration-700 ease-out flex items-center gap-6 md:gap-12 px-2 md:px-8 hover:bg-white/[0.02] ${activeNode === node.id ? 'bg-white/[0.02]' : ''}`}>
                                    <span className={`font-mono text-sm md:text-xl transition-colors duration-500 ${activeNode === node.id ? 'text-emerald-400' : 'text-white/20 group-hover:text-emerald-400/50'}`}>
                                        {node.id}
                                    </span>
                                    <h3 
                                        className={`text-3xl md:text-5xl lg:text-7xl font-bold uppercase tracking-tighter flex-1 transition-all duration-500 ${activeNode === node.id ? 'text-white translate-x-2 md:translate-x-8' : 'text-white/40 group-hover:text-white/70 group-hover:translate-x-2'}`}
                                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                                    >
                                        {node.title}
                                    </h3>
                                    <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full border border-white/10 group-hover:border-white/30 transition-colors">
                                        <motion.div 
                                            animate={{ rotate: activeNode === node.id ? 45 : 0 }}
                                            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                            className="relative w-4 h-4"
                                        >
                                            <div className={`absolute top-1/2 left-0 w-full h-[2px] -translate-y-1/2 transition-colors duration-500 ${activeNode === node.id ? 'bg-emerald-400' : 'bg-white/50 group-hover:bg-white'}`} />
                                            <div className={`absolute top-0 left-1/2 w-[2px] h-full -translate-x-1/2 transition-colors duration-500 ${activeNode === node.id ? 'bg-emerald-400' : 'bg-white/50 group-hover:bg-white'}`} />
                                        </motion.div>
                                    </div>
                                </div>
                                
                                <AnimatePresence>
                                    {activeNode === node.id && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                            className="overflow-hidden"
                                        >
                                            <div className="pb-12 md:pb-16 px-4 md:px-8 pl-[4rem] md:pl-[8.5rem]">
                                                <div className="w-12 h-[2px] bg-emerald-500 mb-6" />
                                                <p className="text-slate-300 text-lg md:text-3xl font-light leading-relaxed max-w-4xl">
                                                    {node.desc}
                                                </p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ============ FOOTER ============ */}
            <Footer />
        </div>
    );
};

export default AboutPage;
