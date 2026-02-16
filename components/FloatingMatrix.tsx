
import React from 'react';

const FloatingMatrix: React.FC = () => {
  const platforms = [
    { name: 'Shopify', logo: '/logo/shopify.png', invert: false },
    { name: 'Wix', logo: '/logo/wix.png', invert: true },
    { name: 'WordPress', logo: '/logo/wordpress.png', invert: false },
    { name: 'Webflow', logo: '/logo/webflow.svg', invert: false },
    { name: 'Custom', icon: 'API', invert: false },
    { name: 'Notion', logo: '/logo/notion.svg', invert: true },
    { name: 'Framer', logo: '/logo/framer.png', invert: true },
    { name: 'Squarespace', logo: '/logo/squarespace.png', invert: false }
  ];

  return (
    <div className="min-h-screen py-24 px-6 md:px-16 bg-[#111113] flex flex-col items-center justify-center relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-emerald-500/[0.03] blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-500/[0.03] blur-[100px]" />
      </div>
      <div className="z-10 text-center mb-12 max-w-2xl">
        <span className="text-[10px] tracking-[0.4em] uppercase text-emerald-400/70 mb-3 block font-mono">Integrations</span>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-6 uppercase">Works Everywhere<br />You Do</h2>
        <p className="text-white/40 text-sm md:text-base max-w-lg mx-auto font-light leading-relaxed">One bot. Every platform. Deploy your AI assistant on any website builder with a single line of code.</p>
      </div>

      <div className="relative w-full max-w-3xl grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {platforms.map((p, i) => (
          <div
            key={p.name}
            className="group relative h-28 md:h-36 bg-white/[0.02] border border-white/5 rounded-2xl backdrop-blur-md flex flex-col items-center justify-center hover:bg-white/[0.05] transition-all duration-700 cursor-pointer animate-float"
            style={{
              animationDelay: `${i * 0.2}s`,
              animationDuration: `${3 + (i % 3) * 0.5}s`
            }}
          >
            <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl flex items-center justify-center mb-2 group-hover:scale-110 transition-all duration-700">
              {p.logo ? (
                <img
                  src={p.logo}
                  alt={p.name}
                  className="w-8 h-8 md:w-10 md:h-10 object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ filter: p.invert ? 'invert(1) brightness(2)' : 'none' }}
                />
              ) : (
                <span className="text-lg md:text-xl font-black text-white/70 group-hover:text-white transition-colors duration-500">
                  {p.icon}
                </span>
              )}
            </div>
            <span className="text-[8px] md:text-[9px] uppercase tracking-[0.2em] font-medium text-white/30 group-hover:text-white transition-colors duration-500">{p.name}</span>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 border border-white/20 rounded-2xl transition-opacity duration-700 pointer-events-none scale-105"></div>
          </div>
        ))}
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] font-black text-white/[0.02] pointer-events-none select-none tracking-tighter">
        MATRIX
      </div>

      <div className="mt-32">
        <button className="group relative px-10 py-5 bg-transparent overflow-hidden rounded-full border border-white/20">
          <span className="relative z-10 text-xs uppercase tracking-[0.4em] font-bold group-hover:text-black transition-colors duration-500">Initialize Integration</span>
          <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
        </button>
      </div>
    </div>
  );
};

export default FloatingMatrix;

