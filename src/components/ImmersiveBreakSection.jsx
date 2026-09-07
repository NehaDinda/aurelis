import React from 'react';
import OrganicCanvas from './OrganicCanvas';

export default function ImmersiveBreakSection() {
  return (
    <section className="relative w-full h-screen bg-forest text-ivory flex items-center justify-center overflow-hidden">
      {/* Background WebGL 3D Sculpture Canvas */}
      <div className="absolute inset-0 z-0 opacity-85">
        <OrganicCanvas variant="immersive" />
      </div>

      {/* Subtle Grain Overlay */}
      <div className="absolute inset-0 bg-grain pointer-events-none z-0" />

      {/* Floating Center Overlay Text */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-8 select-none">
        <div className="inline-block px-4 py-1.5 rounded-full bg-ivory/10 border border-ivory/20 backdrop-blur-md font-mono text-xs text-ivory uppercase tracking-widest">
          05 / IMMERSIVE EXPERIMENT
        </div>

        <h2 className="font-editorial text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-light tracking-tight leading-none text-ivory">
          SYSTEMS THAT LEARN. <br />
          <span className="italic text-coral font-normal">SYSTEMS THAT ADAPT.</span>
        </h2>

        <p className="max-w-xl mx-auto text-base sm:text-lg text-ivory/70 font-light leading-relaxed">
          Intelligence is not coded into fixed rules; it emerges from continuous organic resonance between software, physical substrate, and ambient ecosystem.
        </p>

        <div className="pt-4 flex justify-center">
          <div className="w-12 h-12 rounded-full border border-ivory/30 flex items-center justify-center animate-pulse">
            <div className="w-2 h-2 rounded-full bg-coral" />
          </div>
        </div>
      </div>
    </section>
  );
}
