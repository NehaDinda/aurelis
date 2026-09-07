import React, { useEffect, useRef, useState } from 'react';

export default function IdeaSection() {
  const sectionRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate scroll progress through section (0 to 1)
      const totalDist = rect.height + windowHeight;
      const currentDist = windowHeight - rect.top;
      const progress = Math.min(Math.max(currentDist / totalDist, 0), 1);
      
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate SVG stroke Dashoffset based on scroll
  const strokeDashoffset = 1000 - scrollProgress * 950;

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-32 bg-ivory text-charcoal overflow-hidden border-t border-sand/50"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Headline & Statement */}
          <div className="lg:col-span-8 space-y-8">
            <div className="inline-block font-mono text-xs text-forest tracking-widest uppercase px-3 py-1 bg-sand/50 rounded-full border border-forest/10">
              02 / THE IDEA
            </div>

            <h2 className="font-editorial text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-charcoal tracking-tight leading-[0.95]">
              NATURE DOESN'T <br />
              <span className="text-forest italic font-normal">STAND STILL.</span>
            </h2>

            <p className="text-xl md:text-3xl font-editorial font-light text-charcoal/80 max-w-2xl leading-snug">
              “Neither should the way we build technology.”
            </p>

            <div className="w-16 h-0.5 bg-coral rounded-full" />

            <p className="text-base md:text-lg text-charcoal/65 font-light leading-relaxed max-w-2xl">
              Traditional machines are built static and rigid, decaying from the moment they leave the factory. Natural systems work in reverse—they adapt to pressure, heal from fractures, and grow stronger through continuous environmental feedback loops.
            </p>
          </div>

          {/* Animated Growing Organic Line SVG Illustration */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center relative">
            <div className="w-full max-w-xs aspect-square relative flex items-center justify-center bg-sand/30 rounded-3xl p-8 border border-sand">
              
              <svg
                viewBox="0 0 200 400"
                className="w-full h-full text-forest overflow-visible"
                fill="none"
              >
                {/* Background Guide Line */}
                <path
                  d="M100 10 C 180 80, 20 160, 100 230 C 180 300, 40 370, 100 390"
                  stroke="#DED5C5"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                />
                
                {/* Animated Growing Organic Line */}
                <path
                  d="M100 10 C 180 80, 20 160, 100 230 C 180 300, 40 370, 100 390"
                  stroke="#163D32"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeDasharray="1000"
                  strokeDashoffset={strokeDashoffset}
                  className="transition-all duration-150 ease-out"
                />

                {/* Pulsing Leaf/Growth Node at path tip */}
                <circle
                  cx={100 + Math.sin(scrollProgress * Math.PI * 3) * 40}
                  cy={10 + scrollProgress * 380}
                  r="6"
                  fill="#D9785B"
                  className="animate-ping opacity-75"
                />
                <circle
                  cx={100 + Math.sin(scrollProgress * Math.PI * 3) * 40}
                  cy={10 + scrollProgress * 380}
                  r="5"
                  fill="#163D32"
                />
              </svg>

              {/* Dynamic Scroll Label */}
              <div className="absolute bottom-4 right-4 bg-ivory/90 px-3 py-1 rounded-md text-[10px] font-mono text-forest border border-sand">
                GROWTH: {Math.round(scrollProgress * 100)}%
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
