import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
    {
        quote: "We used to lose 40% of leads because we couldn't reply to WhatsApp fast enough. XotBot now handles 80% of inquiries instantly. Our sales team only steps in for closing.",
        name: "Rahul Verma",
        role: "Founder, Zenith E-commerce",
        stats: {
            title: "Leads Increased By",
            value: "240%",
            color: "text-red-500"
        }
    },
    {
        quote: "The Voice AI is mind-blowing. Our clinic patients can literally call the phone number, and the AI books their appointment by checking our calendar. It's like having a 24/7 receptionist.",
        name: "Dr. Ananya Sharma",
        role: "Head Physician, CarePlus Clinic",
        stats: {
            title: "Admin Hours Saved",
            value: "60 hrs/mo",
            color: "text-orange-400"
        }
    },
    {
        quote: "Training the bot took exactly 2 minutes. I pasted my agency's URL, and it instantly knew all our pricing packages, case studies, and services. A game changer for B2B lead gen.",
        name: "Michael Chen",
        role: "Director, Apex Marketing",
        stats: {
            title: "Ticket Resolution",
            value: "Instant",
            color: "text-red-500"
        }
    },
    {
        quote: "Our customer satisfaction score jumped immediately. The AI handles basic product queries beautifully, freeing up our human agents for complex issues.",
        name: "Sarah Jenkins",
        role: "Customer Success Lead, TechGear",
        stats: {
            title: "Support CSAT",
            value: "+45%",
            color: "text-red-400"
        }
    },
    {
        quote: "From setup to deployment, everything was seamless. We connected it to our Shopify store and saw a direct 20% boost in conversion rates within a week.",
        name: "Rohan Gupta",
        role: "Growth Marketer, StyleHub",
        stats: {
            title: "Conversion Rate",
            value: "+20%",
            color: "text-orange-500"
        }
    }
];

const Testimonials: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [visibleCount, setVisibleCount] = useState(3);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) setVisibleCount(1);
            else if (window.innerWidth < 1024) setVisibleCount(2);
            else setVisibleCount(3);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const maxIndex = Math.max(0, testimonials.length - visibleCount);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(sectionRef.current,
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 75%",
                    }
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    useEffect(() => {
        if (!isAutoPlaying) return;
        
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
        }, 5000); // 5 seconds per slide
        
        return () => clearInterval(interval);
    }, [isAutoPlaying, maxIndex]);

    const handleNext = () => {
        setIsAutoPlaying(false);
        setActiveIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    };

    const handlePrev = () => {
        setIsAutoPlaying(false);
        setActiveIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
    };

    const handleDotClick = (index: number) => {
        setIsAutoPlaying(false);
        setActiveIndex(index);
    };

    return (
        <section ref={sectionRef} className="py-16 px-6 md:px-12 bg-[#030303] relative overflow-hidden flex flex-col items-center justify-center border-b border-white/[0.05]">
            {/* Ambient Lighting */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-[-10%] w-[40%] h-[40%] bg-red-600/10 blur-[150px] rounded-full" />
                <div className="absolute bottom-0 left-[-10%] w-[40%] h-[40%] bg-orange-600/10 blur-[150px] rounded-full" />
            </div>

            <div className="max-w-4xl w-full relative z-10 text-center mb-16 mx-auto px-4">
                <span className="text-red-500/90 font-mono text-[11px] md:text-sm tracking-[0.3em] uppercase mb-4 block font-bold">
                    Proven Results
                </span>
                <h2 
                    className="text-4xl md:text-5xl lg:text-5xl font-black uppercase tracking-tighter mb-4 leading-[1.1]"
                    style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
                >
                    What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400">Customers Say</span>
                </h2>
                <p className="text-white/70 max-w-[800px] mx-auto text-base md:text-lg font-light leading-relaxed md:whitespace-nowrap">
                    Real businesses seeing real ROI. Here's how XotBot is transforming customer engagement.
                </p>
            </div>

            {/* Carousel Container */}
            <div className="max-w-7xl w-full relative z-10 mx-auto" 
                 onMouseEnter={() => setIsAutoPlaying(false)} 
                 onMouseLeave={() => setIsAutoPlaying(true)}>
                
                <div className="overflow-hidden relative -mx-4">
                    <div className="flex transition-transform duration-700 ease-in-out"
                         style={{ transform: `translateX(-${activeIndex * (100 / visibleCount)}%)` }}>
                        
                        {testimonials.map((test, idx) => (
                            <div key={idx} className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4">
                                <div className="bg-[#0a0a0a] border border-white/5 rounded-2xl p-6 flex flex-col transition-all duration-500 hover:border-red-500/30 hover:shadow-[0_0_30px_rgba(239,68,68,0.1)] relative group cursor-default h-full min-h-[280px]">
                                    
                                    {/* Hover Gradient Effect */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" />

                                    {/* Quote Mark Icon */}
                                    <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-30 group-hover:text-red-500 transition-all duration-500">
                                        <Quote size={32} />
                                    </div>

                                    {/* Stats Banner */}
                                    <div className="mb-4 pb-4 border-b border-white/10 group-hover:border-red-500/20 transition-colors duration-500 relative z-10">
                                        <p className="text-[10px] text-white/50 uppercase tracking-[0.2em] mb-1 font-bold font-mono group-hover:text-red-400 transition-colors duration-500">
                                            {test.stats.title}
                                        </p>
                                        <p className={`text-3xl md:text-4xl font-black tracking-tighter ${test.stats.color} drop-shadow-[0_0_15px_rgba(239,68,68,0.3)]`} style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}>
                                            {test.stats.value}
                                        </p>
                                    </div>

                                    {/* Quote Content */}
                                    <p className="text-white/70 text-[13px] md:text-sm leading-relaxed font-light flex-1 mb-6 relative z-10 group-hover:text-white/90 transition-colors duration-500">
                                        "{test.quote}"
                                    </p>

                                    {/* Author Info */}
                                    <div className="flex items-center gap-3 mt-auto relative z-10">
                                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-500/20 to-orange-500/20 border border-red-500/30 flex items-center justify-center text-white font-bold text-base overflow-hidden group-hover:scale-110 group-hover:border-red-500/50 transition-all duration-500 shadow-[0_0_15px_rgba(239,68,68,0.2)]">
                                            {test.name.charAt(0)}
                                        </div>
                                        <div>
                                            <h4 className="text-white font-bold text-sm tracking-tight" style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}>{test.name}</h4>
                                            <p className="text-[9px] text-white/40 uppercase tracking-wider font-mono mt-0.5">{test.role}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Navigation and Indicators */}
                <div className="flex flex-col sm:flex-row items-center justify-between mt-8 px-4 gap-6">
                    {/* Dots */}
                    <div className="flex gap-3 items-center order-2 sm:order-1">
                        {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => handleDotClick(idx)}
                                className={`h-1.5 rounded-full transition-all duration-500 ${
                                    activeIndex === idx 
                                    ? 'w-8 bg-gradient-to-r from-red-500 to-orange-400 shadow-[0_0_10px_rgba(239,68,68,0.5)]' 
                                    : 'w-1.5 bg-white/20 hover:bg-white/40'
                                }`}
                                aria-label={`Go to slide ${idx + 1}`}
                            />
                        ))}
                    </div>

                    {/* Arrows */}
                    <div className="flex gap-3 order-1 sm:order-2">
                        <button 
                            onClick={handlePrev}
                            className="w-9 h-9 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 hover:border-red-500/20 hover:scale-105 transition-all duration-300"
                            aria-label="Previous testimonial"
                        >
                            <ChevronLeft size={18} />
                        </button>
                        <button 
                            onClick={handleNext}
                            className="w-9 h-9 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 hover:border-red-500/20 hover:scale-105 transition-all duration-300"
                            aria-label="Next testimonial"
                        >
                            <ChevronRight size={18} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
