'use client';

import React, { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import Hero from '@/components/Hero';
import PainSection from '@/components/PainSection';
import SolutionGrowth from '@/components/SolutionGrowth';
import UseCasesValidation from '@/components/UseCasesValidation';
import OmnichannelHub from '@/components/OmnichannelHub';
import HowItWorksRedesign from '@/components/HowItWorksRedesign';

import Testimonials from '@/components/Testimonials';
import SecurityTrust from '@/components/SecurityTrust';
import HomePricing from '@/components/HomePricing';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

gsap.registerPlugin(ScrollTrigger);

const HomePage: React.FC = () => {
    const router = useRouter();
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
            {/* 1. Hero */}
            <section id="hero" className="snap-section w-full">
                <Hero />
            </section>

            {/* 2. Pain / Problem Awareness */}
            <section id="pain" className="w-full">
                <PainSection />
            </section>

            {/* 3. Solution & Growth Angle */}
            <section id="solution" className="w-full">
                <SolutionGrowth />
            </section>

            {/* 4. Social Validation (Use Cases) */}
            <section id="use-cases" className="w-full">
                <UseCasesValidation />
            </section>

            {/* 5. Omnichannel Trust */}
            <section id="omnichannel" className="w-full">
                <OmnichannelHub />
            </section>

            {/* 6. How It Works (Simple 4 Steps) */}
            <section id="how-it-works" className="w-full">
                <HowItWorksRedesign />
            </section>

            {/* 7. Pricing */}
            <section id="pricing" className="w-full">
                <HomePricing />
            </section>

            {/* 8. Testimonials & ROI */}
            <section id="testimonials" className="w-full">
                <Testimonials />
            </section>

            {/* 9. Security & Enterprise Trust */}
            <section id="security" className="w-full">
                <SecurityTrust />
            </section>

            {/* 10. FAQ (Objection Handling) */}
            <section id="faq" className="w-full">
                <FAQ />
            </section>

            {/* 11. Final Call To Action */}
            <section id="cta" className="w-full">
                <FinalCTA />
            </section>

            <Footer />
        </>
    );
};

export default HomePage;
