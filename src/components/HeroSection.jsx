import React from 'react';
import { ArrowRight, Compass } from 'lucide-react';
import OrganicCanvas from './OrganicCanvas';

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-ivory bg-grain">
      {/* Interactive WebGL Organic 3D Canvas Background */}
      <div className="absolute inset-0 z-0 opacity-90">
        <OrganicCanvas variant="hero" />
      </div>

      {/* Subtle Ambient Radial Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sand/30 rounded-full blur-3xl pointer-events-none z-0" />

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col justify-between min-h-[80vh]">
        {/* Top Tagline Badge */}
        <div className="animate-fadeIn opacity-0 [animation-delay:400ms] [animation-fill-mode:forwards]">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sand/60 border border-forest/20 text-xs tracking-widest text-forest uppercase font-medium backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-coral animate-pulse" />
            <span>Biomimetic Systems Studio</span>
          </div>
        </div>

        {/* Oversized High-Contrast Editorial Typography */}
        <div className="my-auto py-12">
          <h1 className="font-editorial text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-light text-charcoal tracking-tight leading-[0.92] select-none">
            <span className="block opacity-0 animate-slideUp [animation-delay:600ms] [animation-fill-mode:forwards]">
              DESIGNING
            </span>
            <span className="block opacity-0 animate-slideUp [animation-delay:800ms] [animation-fill-mode:forwards] text-forest italic font-normal">
              WHAT COMES
            </span>
            <span className="block opacity-0 animate-slideUp [animation-delay:1000ms] [animation-fill-mode:forwards]">
              NEXT.
            </span>
          </h1>

          {/* Subtext and CTAs */}
          <div className="mt-8 md:mt-12 max-w-xl flex flex-col md:flex-row md:items-end justify-between gap-8 opacity-0 animate-fadeIn [animation-delay:1200ms] [animation-fill-mode:forwards]">
            <p className="text-base md:text-lg text-charcoal/70 font-light leading-relaxed">
              Where technology, design and natural systems meet. Aurelis engineers adaptive software, spatial computation, and living architecture.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4 opacity-0 animate-fadeIn [animation-delay:1400ms] [animation-fill-mode:forwards]">
            <a
              href="#work"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-forest text-ivory text-sm font-medium tracking-wider uppercase hover:bg-forest-dark transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <span>EXPLORE OUR WORK</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
            </a>

            <a
              href="#approach"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-sand/40 border border-forest/30 text-forest text-sm font-medium tracking-wider uppercase hover:bg-sand/80 transition-all duration-300"
            >
              <Compass className="w-4 h-4 text-coral" />
              <span>OUR APPROACH</span>
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex items-center justify-between text-xs tracking-widest text-charcoal/50 uppercase border-t border-sand/60 pt-6 opacity-0 animate-fadeIn [animation-delay:1600ms] [animation-fill-mode:forwards]">
          <div className="flex items-center gap-2">
            <span className="font-mono">01 / 10</span>
            <span className="w-8 h-[1px] bg-charcoal/30" />
            <span>EST. 2026</span>
          </div>
          <div className="flex items-center gap-2">
            <span>SCROLL TO EXPLORE</span>
            <div className="w-1.5 h-4 border border-charcoal/30 rounded-full flex justify-center p-0.5">
              <div className="w-0.5 h-1 bg-forest rounded-full animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
