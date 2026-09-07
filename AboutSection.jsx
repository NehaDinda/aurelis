import React from 'react';
import { Leaf, Sparkles, ShieldCheck } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-36 bg-ivory text-charcoal relative overflow-hidden border-t border-sand/60">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Top Tagline */}
        <div className="mb-12">
          <span className="font-mono text-xs text-forest tracking-widest uppercase px-3 py-1 bg-sand/50 rounded-full border border-forest/10">
            09 / MANIFESTO & STUDIO
          </span>
        </div>

        {/* Unconventional Layout with Overlapping Typography & Imagery */}
        <div className="relative">
          
          {/* Large Statement Typography Layer */}
          <div className="relative z-20 max-w-4xl">
            <h2 className="font-editorial text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-light text-charcoal tracking-tight leading-[0.93] select-none">
              WE BELIEVE <br />
              <span className="text-forest italic font-normal">THE BEST TECHNOLOGY</span> <br />
              FEELS ALMOST NATURAL.
            </h2>
          </div>

          {/* Overlapping Visual Media Block */}
          <div className="mt-12 lg:-mt-24 lg:ml-auto lg:w-3/5 relative z-10">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-ivory">
              <img
                src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=85"
                alt="Aurelis Studio Ecosystem"
                className="w-full h-[450px] md:h-[550px] object-cover filter contrast-[1.05]"
              />
              
              {/* Floating Overlaid Editorial Card */}
              <div className="absolute bottom-8 left-8 right-8 md:right-auto md:max-w-md bg-ivory/95 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-sand shadow-lg space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono text-coral uppercase tracking-widest">
                  <Leaf className="w-4 h-4 text-forest" />
                  <span>BIOSPHERIC SYNTHESIS</span>
                </div>
                
                <p className="text-sm text-charcoal/80 font-light leading-relaxed">
                  Founded in Zurich and Tokyo, Aurelis operates at the intersection of bio-computation, spatial engineering, and material physics. Our cross-disciplinary lab unites computational architects, organic chemists, and software engineers.
                </p>

                <div className="pt-2 flex items-center justify-between text-xs font-mono text-forest border-t border-sand">
                  <span>FOUNDED: 2026</span>
                  <span>ZURICH / TOKYO</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 3 Core Values Cards below */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-sand/30 p-8 rounded-2xl border border-sand space-y-3">
            <Sparkles className="w-6 h-6 text-coral" />
            <h3 className="font-editorial text-2xl text-charcoal font-normal">Tactile Computation</h3>
            <p className="text-xs text-charcoal/70 font-light leading-relaxed">
              Moving beyond flat glass screens into responsive physical textures and natural light modulation.
            </p>
          </div>

          <div className="bg-sand/30 p-8 rounded-2xl border border-sand space-y-3">
            <ShieldCheck className="w-6 h-6 text-forest" />
            <h3 className="font-editorial text-2xl text-charcoal font-normal">Ecological Symbiosis</h3>
            <p className="text-xs text-charcoal/70 font-light leading-relaxed">
              Technology designed not to conquer or dominate natural systems, but to enrich and harmonize with them.
            </p>
          </div>

          <div className="bg-sand/30 p-8 rounded-2xl border border-sand space-y-3">
            <Leaf className="w-6 h-6 text-coral" />
            <h3 className="font-editorial text-2xl text-charcoal font-normal">Perpetual Adaptation</h3>
            <p className="text-xs text-charcoal/70 font-light leading-relaxed">
              Continuous learning loops embedded directly into hardware materials and decentralized software nodes.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
