import React, { useState } from 'react';
import { Microscope, Cpu, Activity, RefreshCw, Rocket, CheckCircle2 } from 'lucide-react';

export default function TechnologySection() {
  const [activeStage, setActiveStage] = useState(0);

  const timelineStages = [
    {
      id: "RESEARCH",
      num: "01",
      icon: Microscope,
      title: "RESEARCH",
      subtitle: "Biomimetic Taxonomy & Systems Observation",
      details: "We analyze natural organisms—from botanical water channels to avian flock vectors—translating organic dynamics into computational topologies.",
      deliverable: "Mathematical Biomimicry Maps"
    },
    {
      id: "PROTOTYPE",
      num: "02",
      icon: Cpu,
      title: "PROTOTYPE",
      subtitle: "Bio-Synthetic Hardware & Shader Synthetics",
      details: "Rapid iteration using 3D micro-fabrication, hydro-active polymer matrices, and custom spatial simulation engines.",
      deliverable: "Functional Material Prototypes"
    },
    {
      id: "TEST",
      num: "03",
      icon: Activity,
      title: "TEST",
      subtitle: "Microclimate & Stress Feedback Loops",
      details: "Subjecting physical facades and algorithmic networks to extreme environmental stressors to observe organic self-healing limits.",
      deliverable: "Stress & Resilience Telemetry"
    },
    {
      id: "ADAPT",
      num: "04",
      icon: RefreshCw,
      title: "ADAPT",
      subtitle: "Algorithmic Recalibration",
      details: "Embedding continuous machine learning weights so deployed structures adapt dynamically to solar vectors and humidity cycles.",
      deliverable: "Adaptive Neural Weight Sets"
    },
    {
      id: "DEPLOY",
      num: "05",
      icon: Rocket,
      title: "DEPLOY",
      subtitle: "Ecological Integration & Long-term Equilibrium",
      details: "Full installation into urban architecture or software ecosystems with real-time biological telemetry monitors.",
      deliverable: "Autonomous Living Deployment"
    }
  ];

  return (
    <section id="technology" className="py-32 bg-ivory text-charcoal relative border-t border-sand/60">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 pb-8 border-b border-sand/60">
          <div>
            <span className="font-mono text-xs text-forest tracking-widest uppercase px-3 py-1 bg-sand/50 rounded-full border border-forest/10">
              06 / ARCHITECTURE
            </span>
            <h2 className="font-editorial text-5xl sm:text-6xl md:text-7xl font-light text-charcoal tracking-tight mt-4">
              BUILT WITH INTENTION.
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-base md:text-lg text-charcoal/70 font-light max-w-md">
            Our five-stage lifecycle transforms natural biological phenomena into resilient technological products.
          </p>
        </div>

        {/* Vertical Growing Line Timeline Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Timeline Nav Column with Organic Connecting Stem Line */}
          <div className="lg:col-span-6 relative pl-8 border-l-2 border-sand">
            {/* Active Highlight Line Stem */}
            <div
              className="absolute left-[-2px] top-0 w-0.5 bg-forest transition-all duration-500"
              style={{
                height: `${((activeStage + 1) / timelineStages.length) * 100}%`
              }}
            />

            <div className="space-y-6">
              {timelineStages.map((stage, idx) => {
                const Icon = stage.icon;
                const isActive = activeStage === idx;

                return (
                  <div
                    key={stage.id}
                    onMouseEnter={() => setActiveStage(idx)}
                    onClick={() => setActiveStage(idx)}
                    className={`group relative p-6 rounded-2xl transition-all duration-300 cursor-pointer border ${
                      isActive
                        ? 'bg-sand/60 border-forest shadow-md translate-x-2'
                        : 'bg-sand/20 border-transparent hover:bg-sand/40'
                    }`}
                  >
                    {/* Timeline Node Dot */}
                    <div
                      className={`absolute -left-[41px] top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                        isActive
                          ? 'bg-coral border-forest scale-125'
                          : 'bg-ivory border-sand group-hover:border-forest'
                      }`}
                    />

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <span className="font-mono text-xs text-coral font-bold">
                          [{stage.num}]
                        </span>
                        <h3 className={`font-editorial text-3xl transition-colors ${isActive ? 'text-forest font-medium' : 'text-charcoal'}`}>
                          {stage.title}
                        </h3>
                      </div>
                      <Icon className={`w-5 h-5 ${isActive ? 'text-forest' : 'text-charcoal/40'}`} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Active Detail Display Card Column */}
          <div className="lg:col-span-6 sticky top-28">
            <div className="bg-sand/40 rounded-3xl p-8 md:p-12 border border-sand/80 shadow-lg space-y-8 min-h-[440px] flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 text-xs font-mono text-coral uppercase tracking-widest mb-3">
                  <CheckCircle2 className="w-4 h-4 text-forest" />
                  <span>STAGE {timelineStages[activeStage].num} SPECIFICATION</span>
                </div>

                <h3 className="font-editorial text-4xl sm:text-5xl text-forest font-light">
                  {timelineStages[activeStage].title}
                </h3>

                <p className="font-editorial text-2xl text-charcoal/80 mt-2 italic">
                  “{timelineStages[activeStage].subtitle}”
                </p>

                <p className="text-base text-charcoal/70 font-light leading-relaxed mt-6">
                  {timelineStages[activeStage].details}
                </p>
              </div>

              <div className="pt-6 border-t border-sand/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-charcoal/50 block">STAGE OUTPUT</span>
                  <span className="text-sm font-semibold text-forest">{timelineStages[activeStage].deliverable}</span>
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-forest text-ivory text-xs font-mono">
                  <span>STATUS: ACTIVE</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
