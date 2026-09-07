import React, { useState } from 'react';
import { ArrowUpRight, Eye, RefreshCw, GitBranch } from 'lucide-react';

export default function ApproachSection() {
  const [activeCard, setActiveCard] = useState(null);

  const approachCards = [
    {
      id: "01",
      title: "OBSERVE",
      icon: Eye,
      subtitle: "Understand systems before changing them.",
      description: "We map physical microclimates, cognitive flow states, and biological equilibrium before placing a single line of software or structural blueprint.",
      accent: "coral",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "02",
      title: "ADAPT",
      icon: RefreshCw,
      subtitle: "Build technology that responds to its environment.",
      description: "Static interfaces decay. We build bio-synthetic algorithms and hydro-reactive physical facades that flex, heal, and recalibrate in real time.",
      accent: "forest",
      image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "03",
      title: "EVOLVE",
      icon: GitBranch,
      subtitle: "Continuously improve through iteration.",
      description: "Natural evolution has no final version. Our systems embed continuous feedback loops so every iteration becomes smarter than the last.",
      accent: "coral",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="approach" className="py-32 bg-ivory text-charcoal relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 pb-8 border-b border-sand/60">
          <div>
            <span className="font-mono text-xs text-forest tracking-widest uppercase px-3 py-1 bg-sand/50 rounded-full border border-forest/10">
              03 / METHODOLOGY
            </span>
            <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-light text-charcoal tracking-tight mt-4">
              OUR APPROACH
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-base md:text-lg text-charcoal/70 font-light max-w-md">
            Three principles guiding how we synthesize digital intelligence with living ecological structures.
          </p>
        </div>

        {/* 3 Large Editorial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {approachCards.map((card, idx) => {
            const Icon = card.icon;
            const isHovered = activeCard === card.id;

            return (
              <div
                key={card.id}
                onMouseEnter={() => setActiveCard(card.id)}
                onMouseLeave={() => setActiveCard(null)}
                className={`group relative rounded-3xl p-8 md:p-10 transition-all duration-500 cursor-pointer overflow-hidden border flex flex-col justify-between min-h-[460px] ${
                  isHovered
                    ? 'bg-sand/70 border-forest/40 shadow-xl -translate-y-2'
                    : 'bg-sand/30 border-sand/70'
                }`}
              >
                {/* Background Subtle Organic Image Overlay on Hover */}
                <div
                  className={`absolute inset-0 z-0 bg-cover bg-center transition-opacity duration-700 ${
                    isHovered ? 'opacity-15 scale-110' : 'opacity-0 scale-100'
                  }`}
                  style={{ backgroundImage: `url(${card.image})` }}
                />

                {/* Card Top */}
                <div className="relative z-10 space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs tracking-widest text-forest font-semibold">
                      [{card.id}]
                    </span>
                    
                    {/* Hover Arrow Micro-interaction */}
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isHovered ? 'bg-forest text-ivory rotate-45 scale-110' : 'bg-sand text-charcoal/60'
                      }`}
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="inline-flex p-3 rounded-2xl bg-ivory text-forest border border-sand shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3
                    className={`font-editorial text-4xl lg:text-5xl font-normal tracking-tight transition-transform duration-300 ${
                      isHovered ? 'text-forest translate-x-2' : 'text-charcoal'
                    }`}
                  >
                    {card.title}
                  </h3>

                  <p className="font-editorial text-2xl text-charcoal/90 font-light leading-tight">
                    “{card.subtitle}”
                  </p>
                </div>

                {/* Card Bottom Description */}
                <div className="relative z-10 pt-8 border-t border-sand/60 mt-6">
                  <p className="text-sm text-charcoal/70 font-light leading-relaxed">
                    {card.description}
                  </p>
                  
                  <div className="mt-4 flex items-center gap-2 text-xs font-mono text-coral font-medium uppercase tracking-wider">
                    <span>EXPLORE FRAMEWORK</span>
                    <span className={`transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`}>→</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
