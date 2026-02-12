import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const InteractionHub: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const chatRef = useRef<HTMLDivElement>(null);
  const voiceRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!containerRef.current) return;

      // Chat section entrance
      gsap.from(chatRef.current?.querySelectorAll('.animate-in') || [], {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: chatRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        }
      });

      // Voice section entrance
      gsap.from(voiceRef.current?.querySelectorAll('.animate-in') || [], {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: voiceRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        }
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="w-full bg-[#080711]">

      {/* Module 1: Chat Interface */}
      <div ref={chatRef} className="min-h-screen flex items-center justify-center py-20 px-6 md:px-12">
        <div className="max-w-[1100px] w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-in">
            <span className="text-[10px] tracking-[0.4em] uppercase text-white/40 mb-4 block">Deployment 01</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter mb-5 uppercase">
              NEURAL<br />CHAT
            </h2>
            <p className="text-white/50 text-base leading-relaxed max-w-md font-light">
              Experience logic-driven conversation. High-fidelity responses derived from your specific data source.
            </p>
          </div>

          <div className="animate-in bg-[#0a0a0a] border border-white/10 rounded-2xl aspect-[4/5] p-5 shadow-2xl relative overflow-hidden">
            <div className="flex flex-col gap-3 h-full">
              <div className="w-full h-7 bg-white/5 rounded-lg flex items-center px-3">
                <div className="w-2 h-2 rounded-full bg-emerald-500 mr-2 animate-pulse" />
                <span className="text-[9px] text-white/30 uppercase tracking-widest">Bot Active</span>
              </div>
              <div className="bg-white/5 p-3 rounded-xl rounded-tl-none self-start max-w-[80%]">
                <p className="text-[11px] text-white/70">Scanning complete. How can I assist you with your knowledge base today?</p>
              </div>
              <div className="bg-white p-3 rounded-xl rounded-tr-none self-end max-w-[80%]">
                <p className="text-[11px] text-black">What are the pricing tiers for the Enterprise plan?</p>
              </div>
              <div className="bg-white/5 p-3 rounded-xl rounded-tl-none self-start max-w-[80%]">
                <div className="flex gap-1">
                  <div className="w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce" />
                  <div className="w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce [animation-delay:0.15s]" />
                  <div className="w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce [animation-delay:0.3s]" />
                </div>
              </div>
              <div className="mt-auto w-full h-10 bg-white/5 rounded-xl border border-white/5 flex items-center px-3 text-[9px] text-white/25 uppercase tracking-widest">
                Type message...
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Module 2: Voice Interface */}
      <div ref={voiceRef} className="min-h-screen flex items-center justify-center py-20 px-6 md:px-12">
        <div className="max-w-[1100px] w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          <div className="animate-in order-2 md:order-1 flex flex-col items-center">
            <div className="relative w-56 h-56 md:w-72 md:h-72 flex items-center justify-center">
              {/* Visualizer waves */}
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="absolute border border-white/10 rounded-full animate-ping"
                  style={{
                    width: `${100 - i * 18}%`,
                    height: `${100 - i * 18}%`,
                    animationDuration: `${3 + i * 0.5}s`,
                    opacity: 0.15
                  }}
                />
              ))}
              <div className="w-28 h-28 md:w-36 md:h-36 bg-white/5 backdrop-blur-3xl rounded-full border border-white/10 flex items-center justify-center relative z-10 overflow-hidden">
                <div className="flex items-end gap-1 h-10">
                  {[...Array(7)].map((_, i) => (
                    <div
                      key={i}
                      className="w-1 bg-white rounded-full animate-pulse"
                      style={{
                        height: `${20 + Math.random() * 60}%`,
                        animationDelay: `${i * 0.1}s`,
                        animationDuration: '0.8s'
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-10 text-center">
              <button className="px-10 py-3 bg-white text-black text-[10px] font-bold uppercase tracking-[0.3em] rounded-full hover:scale-105 transition-transform duration-500">
                Initiate Protocol
              </button>
            </div>
          </div>

          <div className="animate-in order-1 md:order-2">
            <span className="text-[10px] tracking-[0.4em] uppercase text-white/40 mb-4 block">Deployment 02</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter mb-5 uppercase">
              NATIVE<br />VOICE
            </h2>
            <p className="text-white/50 text-base leading-relaxed max-w-md font-light">
              Real-time low latency auditory response. Humanoid cadence with instantaneous retrieval capabilities.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default InteractionHub;
