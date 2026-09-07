import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer({ onOpenContact }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-forest-dark text-ivory/80 py-20 border-t border-forest">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-ivory/10">
          
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-6">
            <a href="#" className="flex items-center gap-3 text-ivory">
              <div className="w-4 h-4 rounded-full bg-coral" />
              <span className="font-editorial text-3xl tracking-widest font-semibold">
                AURELIS
              </span>
            </a>

            <p className="font-editorial text-xl italic text-coral">
              “Technology, naturally evolved.”
            </p>

            <p className="text-xs text-ivory/60 font-light max-w-sm leading-relaxed">
              Synthesizing natural biological dynamics with advanced computational systems, living architecture, and organic material physics.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-mono text-xs text-ivory uppercase tracking-widest">
              NAVIGATION
            </h4>
            <ul className="space-y-2.5 text-sm font-light">
              <li><a href="#work" className="hover:text-coral transition-colors">Work</a></li>
              <li><a href="#approach" className="hover:text-coral transition-colors">Approach</a></li>
              <li><a href="#technology" className="hover:text-coral transition-colors">Technology</a></li>
              <li><a href="#about" className="hover:text-coral transition-colors">Studio</a></li>
              <li><a href="#journal" className="hover:text-coral transition-colors">Journal</a></li>
              <li><button onClick={onOpenContact} className="hover:text-coral transition-colors">Contact</button></li>
            </ul>
          </div>

          {/* Socials Column */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-mono text-xs text-ivory uppercase tracking-widest">
              CONNECT & JOURNAL
            </h4>
            <ul className="space-y-2.5 text-sm font-light">
              <li><a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-coral transition-colors">LinkedIn ↗</a></li>
              <li><a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-coral transition-colors">X / Twitter ↗</a></li>
              <li><a href="https://arena.na" target="_blank" rel="noreferrer" className="hover:text-coral transition-colors">Are.na Research Channel ↗</a></li>
              <li><a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-coral transition-colors">GitHub Repositories ↗</a></li>
              <li><a href="https://substack.com" target="_blank" rel="noreferrer" className="hover:text-coral transition-colors">Substack Editorial ↗</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Legal & Back to top */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-ivory/50 gap-4">
          <div>
            © {new Date().getFullYear()} AURELIS LABS INC. ALL RIGHTS RESERVED.
          </div>

          <div className="flex items-center space-x-6">
            <a href="#" className="hover:text-ivory transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-ivory transition-colors">Terms of Service</a>
            
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-ivory/20 hover:border-coral hover:text-coral transition-all"
            >
              <span>TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
