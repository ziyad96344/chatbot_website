import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const location = useLocation();

  const navLinks = [
    { label: 'About', to: '/about' },
    { label: 'Pricing', to: '/pricing' },
    { label: 'Contact', to: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-6">
      {/* Vignette/Gradient Background with Mask */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-transparent backdrop-blur-md -z-10"
        style={{
          maskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)'
        }}
      />

      <div className="flex items-center justify-between max-w-[1800px] mx-auto relative z-10">
        {/* Logo */}
        <Link to="/" className="group flex items-center gap-3">
          <div className="w-2 h-2 bg-white rounded-full group-hover:bg-emerald-400 transition-colors duration-300" />
          <span className="text-[10px] md:text-[11px] uppercase tracking-[0.4em] font-semibold text-white/80 group-hover:text-white transition-colors duration-300">
            Ottobots
          </span>
        </Link>

        {/* Center Navigation Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className={`text-[9px] uppercase tracking-[0.35em] font-medium transition-all duration-300 relative group ${isActive(link.to) ? 'text-white' : 'text-white/40 hover:text-white'
                }`}
            >
              {link.label}
              {/* Underline - always visible if active, animate on hover if not */}
              <span
                className={`absolute -bottom-1 left-0 h-[1px] bg-emerald-400 transition-all duration-300 ${isActive(link.to) ? 'w-full' : 'w-0 group-hover:w-full bg-white/50'
                  }`}
              />
            </Link>
          ))}
        </div>

        {/* Right Side - CTA */}
        <div className="flex items-center gap-6">
          <a
            href="http://localhost:3000"
            className="group relative px-5 py-2.5 rounded-full overflow-hidden transition-colors duration-300 border border-white/20 hover:border-white/40"
          >
            <span className="relative z-10 text-[9px] uppercase tracking-[0.3em] font-semibold transition-colors duration-300 text-white/80 group-hover:text-black">
              Get Access
            </span>
            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
