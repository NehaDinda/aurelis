import React, { useState } from 'react';
import { ArrowRight, ArrowUpRight, Zap, Shield, Compass, Sliders, CheckCircle2 } from 'lucide-react';

export default function AurelisExperienceSection({ onOpenContact }) {
  const [selectedExp, setSelectedExp] = useState('PERFORMANCE');

  const experiences = {
    PERFORMANCE: {
      id: 'PERFORMANCE',
      title: 'PERFORMANCE',
      tagline: 'UNBRIDLED AERODYNAMIC SYNTHESIS',
      subtitle: 'Instant torque vectoring engineered with biological murmuration physics.',
      description: 'Designed for track precision and effortless high-speed stabilization. Dual axial-flux motors deliver instantaneous throttle response while active bio-hygroscopic aerodynamic surfaces flex automatically to optimize downforce.',
      image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1600&q=85',
      badge: 'BIOMIMETIC SPEED ENGINE',
      accentColor: 'text-coral',
      accentBg: 'bg-coral',
      specs: [
        { label: 'PEAK OUTPUT', value: '1,420 HP' },
        { label: 'INSTANT TORQUE', value: '1,850 Nm' },
        { label: '0–100 KM/H', value: '1.97 s' },
        { label: 'TOP SPEED', value: '360 km/h' },
        { label: 'DRAG COEFF (Cd)', value: '0.18' },
      ],
      highlights: ['Dual Axial-Flux Motors', 'Active Aerodynamic Downforce Wings', 'Carbon-Chitin Monocoque Chassis']
    },
    LUXURY: {
      id: 'LUXURY',
      title: 'LUXURY',
      tagline: 'A SANCTUARY OF LIVING MATRICES',
      subtitle: 'Bespoke tactile intelligence attuned to human circadian rhythm.',
      description: 'Step into an acoustic cocoon wrapped in self-healing bio-synthetic leather and open-pore mycelial timber. Active noise-cancelling acoustic geometry adapts automatically to ambient speed and road harmonics.',
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=85',
      badge: 'ACOUSTIC BIO-COCOON',
      accentColor: 'text-forest',
      accentBg: 'bg-forest',
      specs: [
        { label: 'ULTRA RANGE', value: '780 km' },
        { label: '10–80% CHARGE', value: '15 min' },
        { label: 'AUDIO SYSTEM', value: '32 Speakers' },
        { label: 'AUTONOMOUS LEVEL', value: 'Level 4 GT' },
        { label: 'CABIN PURITY', value: '99.9% HEPA' },
      ],
      highlights: ['Bio-Synthetic Leather Interior', 'Circadian Light Modulation', 'Active Noise-Cancelling Facade']
    },
    FREEDOM: {
      id: 'FREEDOM',
      title: 'FREEDOM',
      tagline: 'BOUNDLESS ALL-TERRAIN ADAPTATION',
      subtitle: 'Autonomous route intelligence for untamed exploration.',
      description: 'Equipped with quad-motor independent torque vectoring and active ground-clearance suspension that reads terrain 1,000 times per second. Navigate off-grid landscapes with complete self-sustaining solar recovery skin.',
      image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1600&q=85',
      badge: 'OFF-GRID ALL-TERRAIN',
      accentColor: 'text-coral',
      accentBg: 'bg-coral',
      specs: [
        { label: 'SOLAR AUGMENTED RANGE', value: '920 km' },
        { label: 'ACTIVE SUSPENSION', value: '450 mm' },
        { label: 'OFF-GRID AUTONOMY', value: '100% Solar' },
        { label: 'DRIVE TOPOLOGY', value: 'Quad-Motor' },
        { label: 'WATER WADING', value: '1.2 Meters' },
      ],
      highlights: ['Solar Recovery Surface Skin', '1,000Hz Terrain Predictive Radar', 'Independent Quad Torque Vectoring']
    }
  };

  const current = experiences[selectedExp];

  return (
    <section id="experience" className="py-32 bg-forest text-ivory relative overflow-hidden">
      
      {/* Background Subtle Gradient & Grain Overlay */}
      <div className="absolute inset-0 bg-grain opacity-40 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-coral/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-8 border-b border-ivory/15">
          <div>
            <span className="font-mono text-xs text-coral tracking-widest uppercase px-3 py-1 bg-ivory/10 rounded-full border border-ivory/20">
              05 / AUTOMOTIVE INNOVATION
            </span>
            <h2 className="font-editorial text-5xl sm:text-6xl md:text-7xl font-light text-ivory tracking-tight mt-4">
              THE AURELIS EXPERIENCE
            </h2>
          </div>

          <p className="text-base text-ivory/70 font-light max-w-md">
            Biomimetic mobility designed for uncompromised performance, serene interior luxury, and off-grid freedom.
          </p>
        </div>

        {/* Interactive "Choose Your Experience" Selector Tabs */}
        <div className="flex items-center justify-between flex-wrap gap-4 border-b border-ivory/10 pb-6">
          <span className="text-xs font-mono text-ivory/60 uppercase tracking-widest">
            CHOOSE YOUR EXPERIENCE:
          </span>

          <div className="flex flex-wrap gap-3">
            {Object.keys(experiences).map((key) => {
              const isActive = selectedExp === key;
              return (
                <button
                  key={key}
                  onClick={() => setSelectedExp(key)}
                  onMouseEnter={() => setSelectedExp(key)}
                  className={`px-6 py-3 rounded-full text-xs font-mono tracking-widest uppercase transition-all duration-300 ${
                    isActive
                      ? 'bg-ivory text-forest font-semibold shadow-lg scale-105'
                      : 'bg-ivory/10 text-ivory/70 hover:bg-ivory/20 hover:text-ivory'
                  }`}
                >
                  {key}
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Cinematic Vehicle Visual & Specifications Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Cinematic Vehicle Image Showcase with Smooth Transition */}
          <div className="lg:col-span-7 relative group">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-ivory/20 aspect-[16/10] bg-forest-dark">
              <img
                key={current.id}
                src={current.image}
                alt={current.tagline}
                className="w-full h-full object-cover transition-all duration-1000 ease-out transform group-hover:scale-105 filter brightness-95 contrast-105"
              />

              {/* Gradient Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/90 via-transparent to-transparent" />

              {/* Badge Tag Overlay */}
              <div className="absolute top-6 left-6 px-4 py-1.5 rounded-full bg-ivory/90 text-forest text-xs font-mono tracking-wider font-semibold backdrop-blur-md">
                {current.badge}
              </div>

              {/* Vehicle Title Overlay on Bottom Left */}
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <div>
                  <span className="text-xs font-mono text-coral uppercase tracking-widest">AURELIS GT EDITION</span>
                  <h3 className="font-editorial text-3xl sm:text-4xl text-ivory font-light mt-1">
                    {current.title} MATRIX
                  </h3>
                </div>

                <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-forest-dark/80 text-ivory text-[10px] font-mono border border-ivory/20 backdrop-blur-sm">
                  <Sliders className="w-3 h-3 text-coral" />
                  <span>BIOMIMETIC VEHICLE CHASSIS</span>
                </div>
              </div>
            </div>
          </div>

          {/* Specifications & Editorial Content Column */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="inline-block font-mono text-xs text-coral tracking-widest uppercase">
                [{current.id} MODE ENGAGED]
              </div>

              <h3 className="font-editorial text-4xl sm:text-5xl text-ivory font-light leading-tight">
                {current.tagline}
              </h3>

              <p className="font-editorial text-2xl text-coral italic">
                “{current.subtitle}”
              </p>

              <p className="text-sm text-ivory/75 font-light leading-relaxed">
                {current.description}
              </p>
            </div>

            {/* Dynamic Specifications Grid */}
            <div className="pt-4 border-t border-ivory/15 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-4">
              {current.specs.map((spec) => (
                <div key={spec.label} className="p-3.5 rounded-2xl bg-ivory/5 border border-ivory/10 space-y-1">
                  <span className="text-[10px] font-mono text-ivory/50 uppercase tracking-wider block">
                    {spec.label}
                  </span>
                  <span className="text-lg font-editorial font-semibold text-ivory">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Highlights List */}
            <div className="space-y-2 pt-2">
              {current.highlights.map((item) => (
                <div key={item} className="flex items-center gap-2 text-xs font-mono text-ivory/80">
                  <CheckCircle2 className="w-3.5 h-3.5 text-coral shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Minimal CTA */}
            <div className="pt-4">
              <button
                onClick={onOpenContact}
                className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-ivory text-forest text-xs font-semibold tracking-widest uppercase hover:bg-sand transition-all duration-300 shadow-xl"
              >
                <span>EXPLORE AURELIS</span>
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <ArrowRight className="w-4 h-4 group-hover:hidden" />
                  <ArrowUpRight className="w-4 h-4 hidden group-hover:block" />
                </span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
