import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TOTAL_FRAMES = 151;
const FRAME_RATE = 30; // fps

const ScraperVoid: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const orbRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const currentFrameRef = useRef(1);

  // Generate frame path
  const getFramePath = (frame: number) => {
    const paddedFrame = frame.toString().padStart(3, '0');
    return `/orb/ezgif-frame-${paddedFrame}.jpg`;
  };

  // Preload all frames into memory once
  useEffect(() => {
    let loadedCount = 0;
    const images: HTMLImageElement[] = [];

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = getFramePath(i);
      img.onload = () => {
        loadedCount++;
        if (loadedCount === TOTAL_FRAMES) {
          imagesRef.current = images;
          setImagesLoaded(true);
        }
      };
      images.push(img);
    }
  }, []);

  // Frame animation loop using canvas - no network requests after preload
  useEffect(() => {
    if (!imagesLoaded || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size based on first image
    if (imagesRef.current[0]) {
      canvas.width = imagesRef.current[0].naturalWidth;
      canvas.height = imagesRef.current[0].naturalHeight;
    }

    const interval = setInterval(() => {
      currentFrameRef.current = (currentFrameRef.current % TOTAL_FRAMES) + 1;
      const img = imagesRef.current[currentFrameRef.current - 1];
      if (img && ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0);
      }
    }, 1000 / FRAME_RATE);

    // Draw first frame immediately
    const firstImg = imagesRef.current[0];
    if (firstImg) {
      ctx.drawImage(firstImg, 0, 0);
    }

    return () => clearInterval(interval);
  }, [imagesLoaded]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!sectionRef.current || !contentRef.current) return;

      // Section slides up seamlessly from below
      gsap.from(contentRef.current, {
        y: 80,
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%",
          end: "top 50%",
          scrub: 1.5,
        }
      });

      // Staggered entrance for elements
      gsap.from(contentRef.current.querySelectorAll('.animate-in'), {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        }
      });

      // Beam animation
      gsap.to(".beam", {
        x: "350%",
        duration: 3.5,
        repeat: -1,
        ease: "power2.inOut",
      });

      // Orb floating animation
      if (orbRef.current) {
        gsap.to(orbRef.current, {
          y: "+=15",
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut"
        });
      }

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="min-h-screen bg-[#000000] flex items-center justify-center overflow-hidden py-24"
      style={{ willChange: 'transform' }}
    >
      {/* Ambient background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[40%] h-[60%] rounded-full bg-blue-500/[0.03] blur-[120px]" />
        <div className="absolute bottom-1/4 left-0 w-[30%] h-[50%] rounded-full bg-indigo-500/[0.03] blur-[100px]" />
      </div>
      <div
        ref={contentRef}
        className="max-w-[1100px] w-full px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center relative"
        style={{ willChange: 'transform, opacity' }}
      >

        {/* Browser mockup with content */}
        <div className="animate-in relative group">
          <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/15 to-purple-500/15 rounded-2xl blur-xl opacity-40" />
          <div className="relative bg-[#0a0a0a] border border-white/[0.08] rounded-xl aspect-[4/3] overflow-hidden shadow-2xl">
            {/* Browser header */}
            <div className="flex items-center gap-2 p-3 border-b border-white/5 bg-[#080808]">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
              <div className="ml-4 flex-1 h-5 bg-white/[0.03] rounded-md flex items-center px-3">
                <span className="text-[9px] text-white/30 font-mono">ottosystems.ai</span>
              </div>
            </div>

            {/* Code content */}
            <div className="p-4 font-mono text-[10px] leading-relaxed space-y-1 overflow-hidden">
              <div className="flex gap-2">
                <span className="text-purple-400">const</span>
                <span className="text-blue-300">data</span>
                <span className="text-white/50">=</span>
                <span className="text-orange-300">await</span>
                <span className="text-yellow-300">scrape</span>
                <span className="text-white/30">(</span>
              </div>
              <div className="flex gap-2 pl-4">
                <span className="text-emerald-400">"products"</span>
                <span className="text-white/30">,</span>
              </div>
              <div className="flex gap-2 pl-4">
                <span className="text-emerald-400">"pricing"</span>
                <span className="text-white/30">,</span>
              </div>
              <div className="flex gap-2 pl-4">
                <span className="text-emerald-400">"features"</span>
              </div>
              <div className="text-white/30">);</div>
              <div className="h-2" />
              <div className="flex gap-2">
                <span className="text-purple-400">export</span>
                <span className="text-blue-300">neural_sync</span>
                <span className="text-white/30">(data);</span>
              </div>
              <div className="h-3" />
              <div className="h-2 w-3/4 bg-white/[0.03] rounded animate-pulse" />
              <div className="h-2 w-1/2 bg-white/[0.03] rounded animate-pulse" style={{ animationDelay: '0.2s' }} />
            </div>

            {/* Scanning beam */}
            <div className="beam absolute top-0 -left-1/2 w-1/4 h-full bg-gradient-to-r from-transparent via-emerald-400/10 to-transparent skew-x-[-20deg]" />
          </div>

          <p className="absolute -bottom-8 left-0 text-[9px] uppercase tracking-[0.3em] text-white/25">
            Targeting Domain: ottosystems.ai
          </p>

          {/* Sand-like data particles flowing to text */}
          {[...Array(40)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                width: `${1 + Math.random() * 2}px`,
                height: `${1 + Math.random() * 2}px`,
                backgroundColor: `rgba(255, 255, 255, ${0.2 + Math.random() * 0.4})`,
                right: `${-5 - Math.random() * 10}%`,
                top: `${10 + Math.random() * 70}%`,
                animation: `floatToText ${1.5 + Math.random() * 2}s ease-out infinite`,
                animationDelay: `${Math.random() * 3}s`,
              }}
            />
          ))}
        </div>

        {/* Content side with Animated Orb */}
        <div className="animate-in flex flex-col items-center justify-center relative">
          {/* Animated Orb - Larger size, no glow for seamless merge */}
          <div ref={orbRef} className="relative w-96 h-96 md:w-[36rem] md:h-[36rem]">
            {/* Orb frame - using canvas for efficient rendering without network requests */}
            {!imagesLoaded && (
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-10 h-10 border-2 border-white/10 border-t-emerald-400/60 rounded-full animate-spin" />
              </div>
            )}
            <canvas
              ref={canvasRef}
              className={`w-full h-full object-contain relative z-10 ${imagesLoaded ? 'opacity-100' : 'opacity-0'}`}
            />
          </div>

          <div className="-mt-48 text-center relative z-20">
            <h2 className="animate-in text-2xl md:text-3xl lg:text-4xl font-black mb-4 tracking-tighter uppercase">
              DATA EXTRACTION
            </h2>
            <p className="animate-in text-white/40 text-sm max-w-xs leading-relaxed font-light mx-auto">
              Autonomous agents scrape, parse, and synchronize web data into a single neural network.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScraperVoid;
