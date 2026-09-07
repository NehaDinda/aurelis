import React, { useState, useEffect } from 'react';
import { ArrowRight, ArrowUpRight, Menu, X, Sliders } from 'lucide-react';

export default function Navbar({ onOpenContact, onOpenDesignSystem }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Work', href: '#work' },
    { name: 'Approach', href: '#approach' },
    { name: 'Technology', href: '#technology' },
    { name: 'Studio', href: '#about' },
    { name: 'Journal', href: '#journal' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled
          ? 'bg-ivory/85 backdrop-blur-md py-4 border-b border-sand/60 shadow-sm'
          : 'bg-transparent py-7'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          className="group flex items-center gap-3 text-charcoal focus:outline-none"
        >
          <div className="w-4 h-4 rounded-full border border-forest bg-coral/80 group-hover:scale-125 transition-transform duration-300" />
          <span className="font-editorial text-2xl md:text-3xl tracking-widest font-semibold text-forest">
            AURELIS
          </span>
        </a>

        {/* Center Links - Desktop */}
        <nav className="hidden md:flex items-center space-x-9 text-sm font-medium tracking-wider text-charcoal/80">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-forest link-hover-effect transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden md:flex items-center space-x-5">
          {/* Design System Token Showcase Button */}
          <button
            onClick={onOpenDesignSystem}
            className="flex items-center gap-1.5 text-xs tracking-wider uppercase px-3 py-1.5 rounded-full border border-forest/30 text-forest hover:bg-forest/5 transition-all duration-200"
            title="Inspect Design System Tokens & Components"
          >
            <Sliders className="w-3.5 h-3.5" />
            <span className="font-mono">Tokens</span>
          </button>

          {/* Let's Talk Button */}
          <button
            onClick={onOpenContact}
            className="group relative inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-forest text-ivory text-sm font-medium tracking-wide hover:bg-forest-dark transition-all duration-300 shadow-sm overflow-hidden"
          >
            <span>Let's Talk</span>
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              <ArrowRight className="w-4 h-4 group-hover:hidden" />
              <ArrowUpRight className="w-4 h-4 hidden group-hover:block" />
            </span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={onOpenDesignSystem}
            className="p-2 rounded-full border border-forest/30 text-forest"
            aria-label="Design System Tokens"
          >
            <Sliders className="w-4 h-4" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-charcoal focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-ivory border-b border-sand px-6 py-8 space-y-6 animate-fadeIn">
          <div className="flex flex-col space-y-4 text-lg font-editorial">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-charcoal hover:text-forest transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-4 border-t border-sand/60 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-forest text-ivory text-sm font-medium"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
