import React, { useEffect, useRef, useState } from 'react';

export default function NumbersSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { number: "24+", label: "Projects Completed", description: "Deployed bio-spatial & intelligent systems across Europe & Asia." },
    { number: "12", label: "Global Markets", description: "Active installations in architecture, mobility, and material science." },
    { number: "8", label: "Research Areas", description: "Interdisciplinary labs spanning mycelial computing to hydro-dynamics." },
    { number: "94%", label: "Client Satisfaction", description: "Long-term partnership retention across industrial and municipal clients." }
  ];

  return (
    <section ref={sectionRef} className="py-36 bg-ivory text-charcoal relative border-t border-sand/60">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Top Tagline */}
        <div className="mb-20 text-center space-y-4">
          <span className="font-mono text-xs text-forest tracking-widest uppercase px-3 py-1 bg-sand/50 rounded-full border border-forest/10">
            07 / IMPACT IN NUMBERS
          </span>
          <h2 className="font-editorial text-4xl sm:text-5xl font-light text-charcoal tracking-tight">
            MEASURED BY EQUILIBRIUM.
          </h2>
        </div>

        {/* 4 Oversized Statistics Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {stats.map((stat, idx) => (
            <div
              key={stat.label}
              className={`space-y-4 transition-all duration-1000 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${idx * 200}ms` }}
            >
              {/* Oversized Number Typography */}
              <div className="font-editorial text-7xl sm:text-8xl lg:text-9xl font-light text-forest tracking-tighter leading-none select-none">
                {stat.number}
              </div>

              <div className="w-12 h-0.5 bg-coral rounded-full" />

              <h3 className="font-editorial text-2xl font-normal text-charcoal">
                {stat.label}
              </h3>

              <p className="text-xs text-charcoal/60 font-light leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
