'use client';

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CheckCircle2, MessageSquare, TrendingUp, Clock, DollarSign, Bot, Zap, Code2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const platformsLeft = [
  { 
    name: 'WhatsApp Business', 
    desc: 'Deep WhatsApp API integration for real-time conversations.',
    icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>,
    iconBg: 'bg-emerald-500/10 text-emerald-500' 
  },
  { 
    name: 'Instagram', 
    desc: 'Automate DMs, story replies and comments.',
    icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>,
    iconBg: 'bg-gradient-to-tr from-yellow-500/20 via-pink-500/20 to-purple-500/20 text-pink-500' 
  },
  { 
    name: 'Telegram', 
    desc: 'Instant bot deployment and automation.',
    icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0C5.346 0 0 5.346 0 11.944c0 6.598 5.346 11.944 11.944 11.944 6.598 0 11.944-5.346 11.944-11.944C23.888 5.346 18.542 0 11.944 0zm5.203 8.312l-1.748 8.24c-.131.579-.474.721-.96.446l-2.664-1.963-1.285 1.237c-.143.143-.262.262-.536.262l.19-2.704 4.919-4.444c.214-.19-.048-.297-.333-.107l-6.078 3.827-2.623-.82c-.571-.178-.583-.571.119-.845l10.25-3.948c.476-.178.893.107.747.864z"/></svg>,
    iconBg: 'bg-blue-500/10 text-blue-400' 
  },
  { 
    name: 'Messenger', 
    desc: 'Seamless Facebook Messenger bot integration.',
    icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.372 0 0 4.984 0 11.12c0 3.497 1.744 6.617 4.479 8.653v3.528l3.344-1.836a13.33 13.33 0 004.177.675c6.628 0 12-4.984 12-11.12C24 4.984 18.628 0 12 0zm1.31 14.502l-3.054-3.26-5.95 3.26 6.551-6.96 3.125 3.26 5.878-3.26-6.55 6.96z"/></svg>,
    iconBg: 'bg-blue-600/10 text-blue-500' 
  }
];

const platformsRight = [
  { 
    name: 'Slack', 
    desc: 'Workplace bot for team and customer support.',
    icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none"><path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.528 2.528 0 0 1 2.522-2.523h2.52v2.523zm1.261 0a2.528 2.528 0 0 1 2.52-2.523 2.528 2.528 0 0 1 2.522 2.523v6.313A2.528 2.528 0 0 1 8.822 24 2.528 2.528 0 0 1 6.303 21.478v-6.313z" fill="#E01E5A"/><path d="M8.822 5.042a2.528 2.528 0 0 1-2.52-2.52A2.528 2.528 0 0 1 8.822 0a2.528 2.528 0 0 1 2.522 2.522v2.52h-2.522zm0 1.261a2.528 2.528 0 0 1 2.522 2.52a2.528 2.528 0 0 1-2.522 2.523H2.522A2.528 2.528 0 0 1 0 8.822 2.528 2.528 0 0 1 2.522 6.303h6.3zm10.136 3.781a2.528 2.528 0 0 1 2.522-2.523 2.528 2.528 0 0 1 2.52 2.523 2.528 2.528 0 0 1-2.52 2.522h-2.522v-2.522zm-1.261 0a2.528 2.528 0 0 1-2.522 2.522 2.528 2.528 0 0 1-2.52-2.522V3.781A2.528 2.528 0 0 1 15.178 1.26 2.528 2.528 0 0 1 17.697 3.78v6.304zm-2.52 10.136a2.528 2.528 0 0 1 2.52-2.522 2.528 2.528 0 0 1 2.522 2.522 2.528 2.528 0 0 1-2.522 2.52h-2.52v-2.52zm0-1.261a2.528 2.528 0 0 1-2.52-2.522 2.528 2.528 0 0 1 2.52-2.52h6.307A2.528 2.528 0 0 1 24 15.178a2.528 2.528 0 0 1-2.523 2.522h-6.304v-6.304z" fill="#ECB22E"/></svg>,
    iconBg: 'bg-white/5' 
  },
  { 
    name: 'WordPress', 
    desc: 'One-click plugin to add chatbot to your site.',
    icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M21.469 6.825c.84 1.537 1.318 3.3 1.318 5.175 0 3.979-2.156 7.456-5.363 9.325l3.295-9.527c.615-1.539.82-2.771.82-3.864 0-.397-.026-.765-.07-1.109m-7.981.105c.647-.034 1.23-.1 1.23-.1.579-.068.51-.92-.069-.886 0 0-1.742.137-2.865.137-1.056 0-2.83-.137-2.83-.137-.579-.034-.647.852-.068.886 0 0 .549.063 1.128.1l1.676 4.594-2.354 7.06-3.92-11.654c.649-.034 1.233-.1 1.233-.1.579-.068.51-.92-.069-.886 0 0-1.742.137-2.865.137-.201 0-.44-.005-.697-.015C4.085 3.607 7.783 1.573 12 1.573c3.14 0 6.001 1.2 8.143 3.166-.052-.003-.103-.01-.156-.01-1.056 0-1.803.918-1.803 1.907 0 .886.51 1.635 1.056 2.521.408.71.886 1.621.886 2.938 0 .912-.35 1.971-.813 3.446l-1.064 3.558-3.862-11.48M12 22.427c-1.269 0-2.49-.217-3.623-.616l3.848-11.177 3.943 10.799c.026.063.057.122.088.178a10.389 10.389 0 01-4.256.816m-9.577-4.52a10.39 10.39 0 01-1.21-4.907c0-2.55.924-4.887 2.451-6.693l4.015 11.003-5.256.597M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0"/></svg>,
    iconBg: 'bg-blue-600/10 text-blue-500' 
  },
  { 
    name: 'Shopify', 
    desc: 'Native integration for stores to sell more.',
    icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M15.337 23.979l7.216-1.561s-2.604-17.613-2.625-17.73c-.018-.116-.125-.192-.209-.192s-1.783-.072-1.783-.072-1.166-1.152-1.309-1.283c-.04-.037-.073-.058-.109-.074l-.846 19.075.665 1.837zm-2.635-18.143s-.565-.299-1.255-.299c-1.019 0-1.07.64-1.07.801 0 .878 2.294 1.216 2.294 3.274 0 1.619-1.027 2.662-2.414 2.662-1.664 0-2.513-1.035-2.513-1.035l.445-1.471s.874.749 1.613.749c.482 0 .678-.38.678-.657 0-1.147-1.883-1.199-1.883-3.084 0-1.586 1.139-3.122 3.435-3.122.884 0 1.321.253 1.321.253l-.651 1.929zm2.185-3.352c.147.173.294.44.389.794l-1.605.489c.157-.596.462-1.134.839-1.444.078.034.225.082.377.161zm-.964-.478c.129 0 .264.018.399.059-.468.429-.967 1.201-1.169 2.342l-1.226.375c.339-1.489 1.182-2.776 1.996-2.776zm-.594 7.564l-.467 1.418s-.655-.348-1.452-.348c-1.172 0-1.23.734-1.23.919 0 1.009 2.634 1.396 2.634 3.759 0 1.859-1.18 3.056-2.771 3.056-1.909 0-2.886-1.188-2.886-1.188l.511-1.688s1.003.861 1.851.861c.554 0 .778-.436.778-.755 0-1.318-2.162-1.376-2.162-3.543 0-1.822 1.307-3.583 3.946-3.583 1.013 0 1.515.291 1.515.291l.733.601z"/></svg>,
    iconBg: 'bg-emerald-500/10 text-emerald-500' 
  },
  { 
    name: 'Custom Website', 
    desc: 'Add to any website with simple JS snippet.',
    icon: <Code2 className="w-6 h-6" />,
    iconBg: 'bg-white/10 text-slate-300' 
  }
];

const OmnichannelHub: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const elementsRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // General section entrance
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

      // Staggered cards and elements
      if (elementsRef.current) {
          gsap.fromTo(elementsRef.current.querySelectorAll('.gsap-fade-up'), 
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              stagger: 0.1,
              duration: 0.8,
              ease: "power2.out",
              scrollTrigger: {
                  trigger: elementsRef.current,
                  start: "top 70%",
              }
            }
          );
      }

      // Continuous slow rotation for the orbit
      if (orbitRef.current) {
        gsap.to(orbitRef.current, {
          rotation: 360,
          duration: 40,
          ease: "none",
          repeat: -1
        });
        
        // Reverse rotate icons to keep them upright
        gsap.to(orbitRef.current.querySelectorAll('.orbit-icon'), {
          rotation: -360,
          duration: 40,
          ease: "none",
          repeat: -1
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-6 md:px-12 bg-[#050B10] relative overflow-hidden flex flex-col items-center justify-center font-sans border-t border-white/[0.05]">
      {/* Deep Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-900/10 blur-[200px] rounded-[100%] pointer-events-none" />

      <div ref={elementsRef} className="max-w-6xl w-full relative z-10 flex flex-col items-center">
        
        {/* Header */}
        <div className="text-center mb-16 flex flex-col items-center gsap-fade-up">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-6">
            OMNICHANNEL DEPLOYMENT
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight mb-4 text-white leading-[1.1]">
            MEET YOUR CUSTOMERS <span className="text-emerald-400">EVERYWHERE</span>
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-base md:text-lg font-light leading-relaxed">
            One intelligence, multiple bodies. Deploy your trained chatbot across all major platforms effortlessly.
          </p>
        </div>

        {/* Main Hub Grid */}
        <div className="relative w-full flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-8 mb-16 mt-8">
            
            {/* Left Column Platforms */}
            <div className="flex flex-col gap-4 w-full md:w-[320px] lg:w-[360px] z-10">
            {platformsLeft.map((platform, idx) => (
                <div key={idx} className="gsap-fade-up bg-[#090F14] border border-white/5 rounded-2xl p-4 flex items-center gap-4 transition-all duration-300 hover:border-emerald-500/30 shadow-[0_4px_20px_rgba(0,0,0,0.5)] group relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border border-white/5 relative z-10 ${platform.iconBg}`}>
                        {platform.icon}
                    </div>
                    <div className="flex flex-col flex-1 relative z-10">
                        <span className="text-white font-bold text-sm tracking-tight">{platform.name}</span>
                        <span className="text-slate-400 text-xs mt-0.5 leading-snug pr-2">{platform.desc}</span>
                    </div>
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 relative z-10 opacity-80 group-hover:opacity-100 transition-opacity" />
                </div>
            ))}
            </div>

            {/* Central Core */}
            <div className="gsap-fade-up relative w-[320px] h-[320px] md:w-[400px] md:h-[400px] flex flex-col items-center justify-center flex-shrink-0 my-8 lg:my-0 z-20 scale-90 md:scale-100">
                
                {/* Orbit Container that rotates */}
                <div ref={orbitRef} className="absolute inset-0 w-full h-full z-10">
                    {/* Dashed Lines */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40" viewBox="0 0 400 400" fill="none">
                        <g stroke="#10b981" strokeWidth="1.5" strokeDasharray="6 6">
                            {/* 0 deg (Top) */}
                            <line x1="200" y1="110" x2="200" y2="40" />
                            {/* 45 deg (Top Right) */}
                            <line x1="263.6" y1="136.4" x2="313.1" y2="86.9" />
                            {/* 90 deg (Right) */}
                            <line x1="290" y1="200" x2="360" y2="200" />
                            {/* 135 deg (Bottom Right) */}
                            <line x1="263.6" y1="263.6" x2="313.1" y2="313.1" />
                            {/* 180 deg (Bottom) */}
                            <line x1="200" y1="290" x2="200" y2="360" />
                            {/* 225 deg (Bottom Left) */}
                            <line x1="136.4" y1="263.6" x2="86.9" y2="313.1" />
                            {/* 270 deg (Left) */}
                            <line x1="110" y1="200" x2="40" y2="200" />
                            {/* 315 deg (Top Left) */}
                            <line x1="136.4" y1="136.4" x2="86.9" y2="86.9" />
                        </g>
                    </svg>

                    {/* Orbiting Icons */}
                    {/* 0 deg - WhatsApp */}
                    <div className="absolute" style={{ top: '40px', left: '200px', transform: 'translate(-50%, -50%)' }}>
                        <div className="orbit-icon w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg">
                            <svg className="w-6 h-6 text-[#25D366]" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                        </div>
                    </div>
                    
                    {/* 45 deg - Slack */}
                    <div className="absolute" style={{ top: '86.9px', left: '313.1px', transform: 'translate(-50%, -50%)' }}>
                        <div className="orbit-icon w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg">
                            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none"><path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.528 2.528 0 0 1 2.522-2.523h2.52v2.523zm1.261 0a2.528 2.528 0 0 1 2.52-2.523 2.528 2.528 0 0 1 2.522 2.523v6.313A2.528 2.528 0 0 1 8.822 24 2.528 2.528 0 0 1 6.303 21.478v-6.313z" fill="#E01E5A"/><path d="M8.822 5.042a2.528 2.528 0 0 1-2.52-2.52A2.528 2.528 0 0 1 8.822 0a2.528 2.528 0 0 1 2.522 2.522v2.52h-2.522zm0 1.261a2.528 2.528 0 0 1 2.522 2.52a2.528 2.528 0 0 1-2.522 2.523H2.522A2.528 2.528 0 0 1 0 8.822 2.528 2.528 0 0 1 2.522 6.303h6.3z" fill="#36C5F0"/><path d="M18.958 8.822a2.528 2.528 0 0 1 2.522-2.523 2.528 2.528 0 0 1 2.52 2.523 2.528 2.528 0 0 1-2.52 2.522h-2.522v-2.522zm-1.261 0a2.528 2.528 0 0 1-2.522 2.522 2.528 2.528 0 0 1-2.52-2.522V3.781A2.528 2.528 0 0 1 15.178 1.26 2.528 2.528 0 0 1 17.697 3.78v6.304z" fill="#2EB67D"/><path d="M15.178 18.958a2.528 2.528 0 0 1 2.52-2.522 2.528 2.528 0 0 1 2.522 2.522 2.528 2.528 0 0 1-2.522 2.52h-2.52v-2.52zm0-1.261a2.528 2.528 0 0 1-2.52-2.522 2.528 2.528 0 0 1 2.52-2.52h6.307A2.528 2.528 0 0 1 24 15.178a2.528 2.528 0 0 1-2.523 2.522h-6.304v-6.304z" fill="#ECB22E"/></svg>
                        </div>
                    </div>

                    {/* 90 deg - WordPress */}
                    <div className="absolute" style={{ top: '200px', left: '360px', transform: 'translate(-50%, -50%)' }}>
                        <div className="orbit-icon w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg">
                            <svg className="w-6 h-6 text-[#21759B]" viewBox="0 0 24 24" fill="currentColor"><path d="M21.469 6.825c.84 1.537 1.318 3.3 1.318 5.175 0 3.979-2.156 7.456-5.363 9.325l3.295-9.527c.615-1.539.82-2.771.82-3.864 0-.397-.026-.765-.07-1.109m-7.981.105c.647-.034 1.23-.1 1.23-.1.579-.068.51-.92-.069-.886 0 0-1.742.137-2.865.137-1.056 0-2.83-.137-2.83-.137-.579-.034-.647.852-.068.886 0 0 .549.063 1.128.1l1.676 4.594-2.354 7.06-3.92-11.654c.649-.034 1.233-.1 1.233-.1.579-.068.51-.92-.069-.886 0 0-1.742.137-2.865.137-.201 0-.44-.005-.697-.015C4.085 3.607 7.783 1.573 12 1.573c3.14 0 6.001 1.2 8.143 3.166-.052-.003-.103-.01-.156-.01-1.056 0-1.803.918-1.803 1.907 0 .886.51 1.635 1.056 2.521.408.71.886 1.621.886 2.938 0 .912-.35 1.971-.813 3.446l-1.064 3.558-3.862-11.48M12 22.427c-1.269 0-2.49-.217-3.623-.616l3.848-11.177 3.943 10.799c.026.063.057.122.088.178a10.389 10.389 0 01-4.256.816m-9.577-4.52a10.39 10.39 0 01-1.21-4.907c0-2.55.924-4.887 2.451-6.693l4.015 11.003-5.256.597M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0"/></svg>
                        </div>
                    </div>

                    {/* 135 deg - Shopify */}
                    <div className="absolute" style={{ top: '313.1px', left: '313.1px', transform: 'translate(-50%, -50%)' }}>
                        <div className="orbit-icon w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg">
                            <svg className="w-6 h-6 text-[#95BF47]" viewBox="0 0 24 24" fill="currentColor"><path d="M15.337 23.979l7.216-1.561s-2.604-17.613-2.625-17.73c-.018-.116-.125-.192-.209-.192s-1.783-.072-1.783-.072-1.166-1.152-1.309-1.283c-.04-.037-.073-.058-.109-.074l-.846 19.075.665 1.837zm-2.635-18.143s-.565-.299-1.255-.299c-1.019 0-1.07.64-1.07.801 0 .878 2.294 1.216 2.294 3.274 0 1.619-1.027 2.662-2.414 2.662-1.664 0-2.513-1.035-2.513-1.035l.445-1.471s.874.749 1.613.749c.482 0 .678-.38.678-.657 0-1.147-1.883-1.199-1.883-3.084 0-1.586 1.139-3.122 3.435-3.122.884 0 1.321.253 1.321.253l-.651 1.929zm2.185-3.352c.147.173.294.44.389.794l-1.605.489c.157-.596.462-1.134.839-1.444.078.034.225.082.377.161zm-.964-.478c.129 0 .264.018.399.059-.468.429-.967 1.201-1.169 2.342l-1.226.375c.339-1.489 1.182-2.776 1.996-2.776zm-.594 7.564l-.467 1.418s-.655-.348-1.452-.348c-1.172 0-1.23.734-1.23.919 0 1.009 2.634 1.396 2.634 3.759 0 1.859-1.18 3.056-2.771 3.056-1.909 0-2.886-1.188-2.886-1.188l.511-1.688s1.003.861 1.851.861c.554 0 .778-.436.778-.755 0-1.318-2.162-1.376-2.162-3.543 0-1.822 1.307-3.583 3.946-3.583 1.013 0 1.515.291 1.515.291l.733.601z"/></svg>
                        </div>
                    </div>

                    {/* 180 deg - Telegram */}
                    <div className="absolute" style={{ top: '360px', left: '200px', transform: 'translate(-50%, -50%)' }}>
                        <div className="orbit-icon w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg">
                            <svg className="w-6 h-6 text-[#26A5E4]" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0C5.346 0 0 5.346 0 11.944c0 6.598 5.346 11.944 11.944 11.944 6.598 0 11.944-5.346 11.944-11.944C23.888 5.346 18.542 0 11.944 0zm5.203 8.312l-1.748 8.24c-.131.579-.474.721-.96.446l-2.664-1.963-1.285 1.237c-.143.143-.262.262-.536.262l.19-2.704 4.919-4.444c.214-.19-.048-.297-.333-.107l-6.078 3.827-2.623-.82c-.571-.178-.583-.571.119-.845l10.25-3.948c.476-.178.893.107.747.864z"/></svg>
                        </div>
                    </div>

                    {/* 225 deg - Custom Website */}
                    <div className="absolute" style={{ top: '313.1px', left: '86.9px', transform: 'translate(-50%, -50%)' }}>
                        <div className="orbit-icon w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg">
                            <Code2 className="w-6 h-6 text-[#333]" />
                        </div>
                    </div>

                    {/* 270 deg - Messenger */}
                    <div className="absolute" style={{ top: '200px', left: '40px', transform: 'translate(-50%, -50%)' }}>
                        <div className="orbit-icon w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg">
                            <svg className="w-6 h-6 text-[#0084FF]" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.372 0 0 4.984 0 11.12c0 3.497 1.744 6.617 4.479 8.653v3.528l3.344-1.836a13.33 13.33 0 004.177.675c6.628 0 12-4.984 12-11.12C24 4.984 18.628 0 12 0zm1.31 14.502l-3.054-3.26-5.95 3.26 6.551-6.96 3.125 3.26 5.878-3.26-6.55 6.96z"/></svg>
                        </div>
                    </div>

                    {/* 315 deg - Instagram */}
                    <div className="absolute" style={{ top: '86.9px', left: '86.9px', transform: 'translate(-50%, -50%)' }}>
                        <div className="orbit-icon w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg">
                            <svg className="w-6 h-6 text-[#E4405F]" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                        </div>
                    </div>
                </div>

                {/* Rings */}
                {/* Inner Dashed Ring */}
                <div className="absolute w-[180px] h-[180px] rounded-full border-2 border-dashed border-emerald-500/40 pointer-events-none z-0" />
                {/* Outer faint rings */}
                <div className="absolute w-[240px] h-[240px] rounded-full border-[1px] border-emerald-500/20 pointer-events-none z-0" />
                <div className="absolute w-[300px] h-[300px] rounded-full border-[0.5px] border-emerald-500/10 pointer-events-none z-0" />

                {/* Center Bot */}
                <div className="relative w-28 h-28 rounded-full bg-[#091114] border-2 border-emerald-500/50 flex items-center justify-center shadow-[0_0_80px_rgba(16,185,129,0.2)] z-20 group">
                    <div className="absolute inset-0 rounded-full bg-emerald-500/10 blur-xl group-hover:bg-emerald-500/20 transition-all duration-500" />
                    <img src="/logo/logo1.png" alt="Xotbot" className="w-20 h-auto object-contain relative z-10 opacity-90" />
                </div>

                {/* Sub Pill */}
                <div className="absolute -bottom-8 md:-bottom-10 bg-[#091114] border border-emerald-500/30 rounded-full px-4 py-2 flex items-center gap-2 whitespace-nowrap shadow-lg z-30">
                    <Zap className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-xs font-bold text-white">All Channels. One Inbox.</span>
                    <span className="text-xs text-slate-400">Powered by <span className="text-emerald-400 font-bold">XotBot Engine</span></span>
                </div>
            </div>

            {/* Right Column Platforms */}
            <div className="flex flex-col gap-4 w-full md:w-[320px] lg:w-[360px] z-10">
            {platformsRight.map((platform, idx) => (
                <div key={idx} className="gsap-fade-up bg-[#090F14] border border-white/5 rounded-2xl p-4 flex items-center gap-4 transition-all duration-300 hover:border-emerald-500/30 shadow-[0_4px_20px_rgba(0,0,0,0.5)] group relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-emerald-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border border-white/5 relative z-10 ${platform.iconBg}`}>
                        {platform.icon}
                    </div>
                    <div className="flex flex-col flex-1 relative z-10">
                        <span className="text-white font-bold text-sm tracking-tight">{platform.name}</span>
                        <span className="text-slate-400 text-xs mt-0.5 leading-snug pr-2">{platform.desc}</span>
                    </div>
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 relative z-10 opacity-80 group-hover:opacity-100 transition-opacity" />
                </div>
            ))}
            </div>
        </div>

        {/* Bottom Banner */}
        <div className="gsap-fade-up w-full max-w-6xl mt-12 bg-[#090F14] border border-white/5 rounded-2xl p-8 flex flex-col lg:flex-row items-center justify-between gap-10 shadow-2xl">
            
            <div className="flex flex-col gap-1 text-center lg:text-left">
                <h3 className="text-2xl font-bold text-white tracking-tight">One Bot. Every Channel.</h3>
                <p className="text-xl font-bold text-emerald-400">More Conversations. More Revenue.</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                <div className="flex flex-col items-center text-center gap-3">
                    <MessageSquare className="w-8 h-8 text-emerald-400 opacity-80" />
                    <span className="text-xs text-slate-300 font-medium max-w-[120px]">Consistent Customer Experience</span>
                </div>
                <div className="flex flex-col items-center text-center gap-3">
                    <TrendingUp className="w-8 h-8 text-emerald-400 opacity-80" />
                    <span className="text-xs text-slate-300 font-medium max-w-[120px]">Higher Engagement Across Platforms</span>
                </div>
                <div className="flex flex-col items-center text-center gap-3">
                    <Clock className="w-8 h-8 text-emerald-400 opacity-80" />
                    <span className="text-xs text-slate-300 font-medium max-w-[120px]">Save Time with Automation</span>
                </div>
                <div className="flex flex-col items-center text-center gap-3">
                    <DollarSign className="w-8 h-8 text-emerald-400 opacity-80" />
                    <span className="text-xs text-slate-300 font-medium max-w-[120px]">Increase Sales & Conversions</span>
                </div>
            </div>

        </div>

      </div>
    </section>
  );
};

export default OmnichannelHub;
