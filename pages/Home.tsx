import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import Hero from '../components/Hero';
import CommandCenter from '../components/CommandCenter';
import ScraperVoid from '../components/ScraperVoid';
import InteractionHub from '../components/InteractionHub';
import FloatingMatrix from '../components/FloatingMatrix';

gsap.registerPlugin(ScrollTrigger);

const HomePage: React.FC = () => {
    const navigate = useNavigate();
    const lenisRef = useRef<Lenis | null>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);

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

        lenisRef.current = lenis;

        lenis.on('scroll', ScrollTrigger.update);

        const raf = (time: number) => {
            lenis.raf(time);
            requestAnimationFrame(raf);
        };

        requestAnimationFrame(raf);

        ScrollTrigger.defaults({
            scroller: document.body,
        });

        // Section snap — snap to the TOP of each section
        const sections = gsap.utils.toArray<HTMLElement>('.snap-section');
        if (sections.length > 1) {
            const getSnapPositions = () => {
                const totalScroll = document.body.scrollHeight - window.innerHeight;
                return sections.map((s) => s.offsetTop / totalScroll);
            };

            ScrollTrigger.create({
                snap: {
                    snapTo: (progress) => {
                        const positions = getSnapPositions();
                        // Find closest position in the scroll direction
                        let closest = positions[0];
                        let minDist = Math.abs(progress - closest);
                        for (const pos of positions) {
                            const dist = Math.abs(progress - pos);
                            if (dist < minDist) {
                                minDist = dist;
                                closest = pos;
                            }
                        }
                        return closest;
                    },
                    duration: { min: 0.25, max: 0.8 },
                    delay: 0.1,
                    ease: 'power2.inOut',
                    directional: true,
                },
            });
        }

        setTimeout(() => {
            ScrollTrigger.refresh();
        }, 100);

        return () => {
            lenis.destroy();
            ScrollTrigger.killAll();
        };
    }, []);

    return (
        <>
            <section id="hero" className="snap-section w-full">
                <Hero />
            </section>

            <section id="command-center" className="snap-section w-full">
                <CommandCenter onInitialize={() => navigate('/thank-you')} />
            </section>

            <section id="scraper" className="snap-section w-full">
                <ScraperVoid />
            </section>

            <section id="hub" className="snap-section w-full">
                <InteractionHub />
            </section>

            <section id="matrix" className="snap-section w-full">
                <FloatingMatrix />
            </section>

            <footer className="py-16 px-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] text-white/40 tracking-widest font-light uppercase">
                <div>© 2024 OTTOBOTS AI SYSTEMS</div>
                <div className="flex gap-8 mt-4 md:mt-0">
                    <a href="#" className="hover:text-white transition-colors duration-300">Terms</a>
                    <a href="#" className="hover:text-white transition-colors duration-300">Privacy</a>
                    <a href="#" className="hover:text-white transition-colors duration-300">Docs</a>
                </div>
            </footer>
        </>
    );
};

export default HomePage;
