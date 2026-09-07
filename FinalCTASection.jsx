import React from 'react';
import { ArrowRight, ArrowUpRight, Mail, Sparkles } from 'lucide-react';
import OrganicCanvas from './OrganicCanvas';

export default function FinalCTASection({ onOpenContact }) {
  return (
    <section className="relative w-full py-36 bg-forest text-ivory overflow-hidden border-t border-forest-dark">
      {/* Background Slowly Morphing Abstract Organic WebGL Sculpture */}
      <div className="absolute inset-0 z-0 opacity-40">
        <OrganicCanvas variant="cta" />
      </div>

      {/* Grain overlay */}
      <div className="absolute inset-0 bg-grain pointer-events-none z-0" />

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center space-y-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-ivory/10 border border-ivory/20 backdrop-blur-sm text-xs font-mono text-ivory uppercase tracking-widest">
          <Sparkles className="w-3.5 h-3.5 text-coral" />
          <span>10 / INITIATE COLLABORATION</span>
        </div>

        {/* Oversized Ivory Editorial Typography */}
        <h2 className="font-editorial text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-light text-ivory tracking-tight leading-[0.92] select-none">
          LET'S BUILD <br />
          <span className="italic text-coral font-normal">WHAT'S NEXT.</span>
        </h2>

        <p className="max-w-xl mx-auto text-base sm:text-lg text-ivory/70 font-light leading-relaxed">
          Whether you are developing adaptive spatial architecture, biomimetic software, or bio-synthetic materials, let's explore what's possible together.
        </p>

        {/* CTA Button */}
        <div className="pt-4 flex justify-center">
          <button
            onClick={onOpenContact}
            className="group relative inline-flex items-center gap-3 px-9 py-5 rounded-full bg-ivory text-forest text-sm font-semibold tracking-wider uppercase hover:bg-sand transition-all duration-300 shadow-2xl hover:scale-105"
          >
            <Mail className="w-4 h-4 text-coral" />
            <span>START A CONVERSATION</span>
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              <ArrowRight className="w-4 h-4 group-hover:hidden" />
              <ArrowUpRight className="w-4 h-4 hidden group-hover:block" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
