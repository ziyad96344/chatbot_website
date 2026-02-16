import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import Hero from '../components/Hero';
import HowItWorksRedesign from '../components/HowItWorksRedesign';
import FeaturesGrid from '../components/FeaturesGrid';
import ScraperVoid from '../components/ScraperVoid';
import InteractionHub from '../components/InteractionHub';
import UseCases from '../components/UseCases';
import SocialProof from '../components/SocialProof';
import WhyChooseUs from '../components/WhyChooseUs';
import HomePricing from '../components/HomePricing';
import FloatingMatrix from '../components/FloatingMatrix';
import FAQ from '../components/FAQ';
import CTABanner from '../components/CTABanner';
import Footer from '../components/Footer';

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

        let rafId: number;

        const raf = (time: number) => {
            lenis.raf(time);
            rafId = requestAnimationFrame(raf);
        };

        rafId = requestAnimationFrame(raf);

        ScrollTrigger.defaults({
            scroller: document.body,
        });

        setTimeout(() => {
            ScrollTrigger.refresh();
        }, 100);

        return () => {
            cancelAnimationFrame(rafId);
            lenis.destroy();
            ScrollTrigger.killAll();
        };
    }, []);

    return (
        <>
            <section id="hero" className="snap-section w-full">
                <Hero />
            </section>

            <section id="how-it-works" className="w-full">
                <HowItWorksRedesign />
            </section>

            <section id="features" className="w-full">
                <FeaturesGrid />
            </section>

            <section id="scraper" className="w-full">
                <ScraperVoid />
            </section>

            <section id="hub" className="w-full">
                <InteractionHub />
            </section>

            <section id="use-cases" className="w-full">
                <UseCases />
            </section>

            <section id="social-proof" className="w-full">
                <SocialProof />
            </section>

            <section id="why-choose-us" className="w-full">
                <WhyChooseUs />
            </section>

            <section id="pricing" className="w-full">
                <HomePricing />
            </section>

            <section id="matrix" className="w-full">
                <FloatingMatrix />
            </section>

            <section id="faq" className="w-full">
                <FAQ />
            </section>

            <section id="cta" className="w-full">
                <CTABanner />
            </section>

            <Footer />
        </>
    );
};

export default HomePage;
