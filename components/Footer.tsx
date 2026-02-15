import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="py-12 px-8 border-t border-white/[0.05] bg-[#050505] relative z-10">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                {/* Brand & Credit */}
                <div className="flex flex-col gap-2 md:text-left text-center">
                    <div className="flex items-center justify-center md:justify-start gap-2">
                        <div className="w-2 h-2 rounded-full bg-emerald-500" />
                        <span className="text-xs font-mono text-white/40 tracking-[0.2em] uppercase">
                            Xotbot AI Systems
                        </span>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                        <span className="text-[9px] font-mono text-white/20 tracking-widest uppercase">
                            A Product by
                        </span>
                        <a href="https://ottomern.com" target="_blank" rel="noopener noreferrer" className="text-[9px] font-mono text-white/40 tracking-widest uppercase hover:text-emerald-400 transition-colors border-b border-white/10 hover:border-emerald-400/50 pb-px">
                            Ottomern Technologies
                        </a>
                    </div>
                </div>

                {/* Links */}
                <div className="flex gap-8 text-[10px] font-mono text-white/30 tracking-widest uppercase">
                    <a href="#" className="hover:text-emerald-400 transition-colors duration-300">Terms</a>
                    <a href="#" className="hover:text-emerald-400 transition-colors duration-300">Privacy</a>
                    <a href="#" className="hover:text-emerald-400 transition-colors duration-300">Docs</a>
                </div>

                {/* Copyright */}
                <div className="text-[10px] font-mono text-white/20">
                    &copy; 2026
                </div>
            </div>
        </footer>
    );
};

export default Footer;
