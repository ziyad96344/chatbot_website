import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const platforms = [
  // Left Column Apps (1-4)
  { 
    name: 'WhatsApp Business', 
    desc: 'Deep WhatsApp API integration.',
    icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>, 
    color: 'from-green-500/20 to-green-500/5', 
    borderColor: 'border-green-500/20', 
    text: 'text-green-500' 
  },
  { 
    name: 'Instagram', 
    desc: 'DMs & Comment automation.',
    icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>, 
    color: 'from-pink-500/20 to-purple-500/5', 
    borderColor: 'border-pink-500/20', 
    text: 'text-pink-500' 
  },
  { 
    name: 'Telegram', 
    desc: 'Instant bot deployment.',
    icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0C5.346 0 0 5.346 0 11.944c0 6.598 5.346 11.944 11.944 11.944 6.598 0 11.944-5.346 11.944-11.944C23.888 5.346 18.542 0 11.944 0zm5.203 8.312l-1.748 8.24c-.131.579-.474.721-.96.446l-2.664-1.963-1.285 1.237c-.143.143-.262.262-.536.262l.19-2.704 4.919-4.444c.214-.19-.048-.297-.333-.107l-6.078 3.827-2.623-.82c-.571-.178-.583-.571.119-.845l10.25-3.948c.476-.178.893.107.747.864z"/></svg>, 
    color: 'from-blue-400/20 to-blue-600/5', 
    borderColor: 'border-blue-400/20', 
    text: 'text-blue-400' 
  },
  { 
    name: 'Messenger', 
    desc: 'Facebook & Meta sync.',
    icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.372 0 0 4.984 0 11.12c0 3.497 1.744 6.617 4.479 8.653v3.528l3.344-1.836a13.33 13.33 0 004.177.675c6.628 0 12-4.984 12-11.12C24 4.984 18.628 0 12 0zm1.31 14.502l-3.054-3.26-5.95 3.26 6.551-6.96 3.125 3.26 5.878-3.26-6.55 6.96z"/></svg>, 
    color: 'from-blue-500/20 to-indigo-500/5', 
    borderColor: 'border-blue-500/20', 
    text: 'text-blue-500' 
  },

  // Right Column Apps (5-8)
  { 
    name: 'Slack', 
    desc: 'Workplace bot integration.',
    icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.528 2.528 0 0 1 2.522-2.523h2.52v2.523zm1.261 0a2.528 2.528 0 0 1 2.52-2.523 2.528 2.528 0 0 1 2.522 2.523v6.313A2.528 2.528 0 0 1 8.822 24 2.528 2.528 0 0 1 6.303 21.478v-6.313zM8.822 5.042a2.528 2.528 0 0 1-2.52-2.52A2.528 2.528 0 0 1 8.822 0a2.528 2.528 0 0 1 2.522 2.522v2.52h-2.522zm0 1.261a2.528 2.528 0 0 1 2.522 2.52a2.528 2.528 0 0 1-2.522 2.523H2.522A2.528 2.528 0 0 1 0 8.822 2.528 2.528 0 0 1 2.522 6.303h6.3zm10.136 3.781a2.528 2.528 0 0 1 2.522-2.523 2.528 2.528 0 0 1 2.52 2.523 2.528 2.528 0 0 1-2.52 2.522h-2.522v-2.522zm-1.261 0a2.528 2.528 0 0 1-2.522 2.522 2.528 2.528 0 0 1-2.52-2.522V3.781A2.528 2.528 0 0 1 15.178 1.26 2.528 2.528 0 0 1 17.697 3.78v6.304zm-2.52 10.136a2.528 2.528 0 0 1 2.52-2.522 2.528 2.528 0 0 1 2.522 2.522 2.528 2.528 0 0 1-2.522 2.52h-2.52v-2.52zm0-1.261a2.528 2.528 0 0 1-2.52-2.522 2.528 2.528 0 0 1 2.52-2.52h6.307A2.528 2.528 0 0 1 24 15.178a2.528 2.528 0 0 1-2.523 2.522h-6.304v-6.304z"/></svg>, 
    color: 'from-orange-500/20 to-red-500/5', 
    borderColor: 'border-orange-500/20', 
    text: 'text-orange-500' 
  },
  { 
    name: 'WordPress', 
    desc: 'One-click plugin solution.',
    icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12.158 12.786l-2.698 7.84c.806.236 1.657.365 2.54.365 1.047 0 2.051-.181 2.986-.51-.102-.164-.204-.338-.285-.512l-2.543-7.183zm6.124-6.223c.311.515.549 1.162.549 1.954 0 .806-.149 1.698-.598 2.766L15.36 19.337c2.618-1.464 4.4-4.265 4.4-7.487 0-1.921-.632-3.69-1.693-5.116-.062-.158-.124-.316-.185-.471zM12 0C5.373 0 0 5.373 0 12c0 3.197 1.253 6.1 3.295 8.244L8.747 5.093c.189-.502.189-1.121-.088-1.554-.236-.316-.549-.365-.776-.402C8.381 2.915 10.098 2.66 12 2.66c1.657 0 3.228.192 4.63.535-.1-.01-.205-.01-.307-.01-.84 0-1.439.511-1.439 1.229 0 .584.361 1.096.793 1.838.384.664.793 1.551.793 2.721 0 .977-.442 2.151-1.046 3.612l-2.887 8.019c-1.393.438-2.871.678-4.407.678-1.614 0-3.167-.265-4.606-.75L9.61 6.892l2.548 5.894z"/></svg>, 
    color: 'from-blue-500/20 to-blue-500/5', 
    borderColor: 'border-blue-500/20', 
    text: 'text-blue-500' 
  },
  { 
    name: 'Shopify', 
    desc: 'Native theme integration.',
    icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M4.195 21.012l.605-11.458-3.033-1.026-.068.73s-.632 7.009-.691 10.966c-.059 3.961.325 3.7.837 3.662.51-.036 1.834-.029 1.834-.029l.516-2.845zm15.115-11.336L14.71 1.472C14.39.873 13.843.518 13.18.513c-.027-.001-.054 0-.081 0-.66.002-1.223.36-1.545.962L6.963 9.421c-.052.096-.063.208-.03.31l.033.097 10.16 3.444.137-.179c1.077-1.407 2.046-2.67 2.046-2.67.147-.21.218-.465.21-.718a1.278 1.278 0 00-.209-.729zm-1.097 5.766l-.119.155s-3.037 3.996-3.791 4.965c-.754.969-.884 2.872.261 3.5.347.191.956.347 1.815.347.387 0 .809-.033 1.255-.1.867-.129.589-3.9 1.056-10.45l-2.477 1.583z"/></svg>, 
    color: 'from-emerald-500/20 to-emerald-500/5', 
    borderColor: 'border-emerald-500/20', 
    text: 'text-emerald-500' 
  },
  { 
    name: 'Custom Website', 
    desc: 'JS Snippet integration.',
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>, 
    color: 'from-gray-500/20 to-gray-500/5', 
    borderColor: 'border-gray-500/20', 
    text: 'text-gray-400' 
  }
];

const OmnichannelHub: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const centralBrainRef = useRef<HTMLDivElement>(null);

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
            start: "top 80%",
          }
        });

      gsap.fromTo(".platform-hub-card", 
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.8,
          scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 70%",
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-6 md:px-12 bg-[#030303] relative overflow-hidden flex flex-col items-center justify-center border-b border-white/[0.05]">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[500px] bg-red-900/10 blur-[150px] rounded-[100%] pointer-events-none" />

      <div className="max-w-4xl w-full relative z-10 text-center mb-16 mx-auto">
        <span className="text-red-500/90 font-mono text-[11px] md:text-sm tracking-[0.3em] uppercase mb-4 block font-bold">
          Omnichannel Deployment
        </span>
        <h2 
          className="text-4xl md:text-5xl lg:text-5xl font-black uppercase tracking-tighter mb-4 leading-[1.1]"
          style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
        >
          Meet Your Customers <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400">Everywhere</span>
        </h2>
        <p className="text-white/70 max-w-[900px] lg:max-w-none mx-auto text-base md:text-lg font-light leading-relaxed lg:whitespace-nowrap">
          One intelligence, multiple bodies. Deploy your trained chatbot across all major platforms effortlessly.
        </p>
      </div>

      {/* Main Hub Grid */}
      <div className="relative w-full max-w-[1200px] mx-auto flex flex-col items-center justify-center z-10">
        
        {/* Top/Middle Section with Core and Left/Right columns on Desktop */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 w-full">
            {/* Left Column Platforms */}
            <div className="flex flex-col gap-4 w-full md:w-[320px] items-center md:items-end">
            {platforms.slice(0, 4).map((platform, idx) => (
                <PlatformCard key={`left-${idx}`} platform={platform} />
            ))}
            </div>

            {/* Central Core */}
            <div className="relative w-48 h-48 md:w-56 md:h-56 flex items-center justify-center flex-shrink-0 my-8 md:my-0">
                {/* Connection Lines (Static Decorative) */}
                <div className="hidden md:block absolute inset-0 -inset-x-44 -z-0 pointer-events-none opacity-20">
                    <svg className="w-full h-full overflow-visible" viewBox="0 0 400 300" fill="none">
                        <circle cx="200" cy="150" r="160" stroke="white" strokeWidth="0.5" strokeDasharray="4 4" />
                        <circle cx="200" cy="150" r="100" stroke="red" strokeWidth="0.5" opacity="0.3" />
                    </svg>
                </div>

                <div ref={centralBrainRef} className="relative w-32 h-32 md:w-44 md:h-44 rounded-full bg-[#0a0505] border border-red-500/30 flex items-center justify-center z-20 shadow-[0_0_100px_rgba(239,68,68,0.2)] group transition-all duration-500 hover:border-red-500/50">
                    <div className="absolute inset-2 rounded-full border border-dashed border-red-500/20 animate-[spin_30s_linear_infinite]" />
                    <div className="absolute inset-5 rounded-full border border-orange-500/20 bg-gradient-to-b from-orange-500/10 to-transparent backdrop-blur-xl flex items-center justify-center">
                        <svg className="w-12 h-12 md:w-16 md:h-16 text-red-500 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                    </div>
                    
                    <div className="absolute -bottom-16 whitespace-nowrap flex flex-col items-center">
                        <div className="flex items-center gap-2 mb-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" />
                            <span className="text-[10px] font-mono text-white/50 uppercase tracking-widest">Active Hub</span>
                        </div>
                        <div className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400 uppercase tracking-widest" style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}>
                            Xotbot Engine
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Column Platforms */}
            <div className="flex flex-col gap-4 w-full md:w-[320px] items-center md:items-start">
            {platforms.slice(4, 8).map((platform, idx) => (
                <PlatformCard key={`right-${idx}`} platform={platform} />
            ))}
            </div>
        </div>
      </div>
      
      <style>{`
        .platform-hub-card {
            box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.03), 0 10px 30px -10px rgba(0, 0, 0, 0.5);
        }
        .platform-hub-card:hover {
            box-shadow: 0 0 0 1px rgba(239, 68, 68, 0.2), 0 15px 40px -10px rgba(239, 68, 68, 0.1);
            transform: translateY(-2px);
        }
      `}</style>
    </section>
  );
};

interface PlatformCardProps {
    platform: typeof platforms[0];
}

const PlatformCard: React.FC<PlatformCardProps> = ({ platform }) => (
    <div className="platform-hub-card group relative flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-xl bg-[#0a0a0a] border border-white/5 transition-all duration-300 hover:border-red-500/20 w-full max-w-[280px]">
        <div className={`absolute inset-0 bg-gradient-to-br ${platform.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none rounded-xl`} />
        
        <div className={`w-9 h-9 md:w-10 md:h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center ${platform.text} group-hover:scale-110 group-hover:bg-white/10 transition-all duration-500 shrink-0`}>
            {platform.icon}
        </div>
        
        <div className="flex flex-col min-w-0">
            <span className="text-[12px] md:text-[14px] font-bold text-white tracking-tight" style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}>
                {platform.name}
            </span>
            <span className="text-[8px] md:text-[9px] text-white/40 font-mono uppercase tracking-widest mt-0.5 truncate">
                {platform.desc}
            </span>
        </div>

        <div className="ml-auto shrink-0 flex items-center pl-2">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500/50 group-hover:bg-green-500 group-hover:shadow-[0_0_8px_rgba(34,197,94,0.8)] transition-all duration-300" />
        </div>
    </div>
);

export default OmnichannelHub;
