import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ComingSoonModal from './ComingSoonModal';

const MenuIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);
const XIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

const Navbar: React.FC = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navLinks = [
    { label: 'About', to: '/about' },
    { label: 'Pricing', to: '/pricing' },
    { label: 'Contact', to: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
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
            <img src="/logo/logo1.png" alt="Xotbot" className="h-20 md:h-28 w-auto object-contain group-hover:brightness-110 transition-all duration-300 -mt-2 md:-mt-6" />
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
          <div className="hidden md:flex items-center gap-6 -mt-6">
            <button
              onClick={() => setIsModalOpen(true)}
              className="group relative px-5 py-2.5 rounded-full overflow-hidden transition-colors duration-300 border border-white/20 hover:border-white/40"
            >
              <span className="relative z-10 text-[9px] uppercase tracking-[0.3em] font-semibold transition-colors duration-300 text-white/80 group-hover:text-black">
                Get Access
              </span>
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            className="md:hidden text-white p-2 z-50 relative"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <XIcon /> : <MenuIcon />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 bg-black/95 backdrop-blur-xl z-40 transition-all duration-500 flex flex-col items-center justify-center gap-8 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
            }`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-2xl uppercase tracking-[0.2em] font-light transition-colors duration-300 ${isActive(link.to) ? 'text-emerald-400' : 'text-white/60 hover:text-white'
                }`}
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              setIsModalOpen(true);
            }}
            className="mt-4 px-8 py-3 rounded-full border border-white/20 text-white text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-300"
          >
            Get Access
          </button>
        </div>
      </nav>

      <ComingSoonModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Navbar;
