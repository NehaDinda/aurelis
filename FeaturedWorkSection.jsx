import React, { useRef, useState } from 'react';
import { ArrowUpRight, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import { projects } from '../data/projects';

export default function FeaturedWorkSection({ onSelectProject }) {
  const scrollContainerRef = useRef(null);
  const [activeProjectIdx, setActiveProjectIdx] = useState(0);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -450, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 450, behavior: 'smooth' });
    }
  };

  return (
    <section id="work" className="py-32 bg-ivory text-charcoal border-t border-sand/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16">
        
        {/* Section Top Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-sand/60">
          <div>
            <span className="font-mono text-xs text-forest tracking-widest uppercase px-3 py-1 bg-sand/50 rounded-full border border-forest/10">
              04 / PORTFOLIO
            </span>
            <h2 className="font-editorial text-5xl sm:text-6xl md:text-7xl font-light text-charcoal tracking-tight mt-4">
              SELECTED WORK
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <p className="hidden md:block text-xs font-mono text-charcoal/50 uppercase tracking-widest">
              SLIDE TO EXPLORE PROJECTS
            </p>
            <div className="flex items-center gap-2">
              <button
                onClick={scrollLeft}
                className="w-12 h-12 rounded-full border border-sand hover:border-forest bg-sand/30 hover:bg-forest hover:text-ivory flex items-center justify-center transition-all"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={scrollRight}
                className="w-12 h-12 rounded-full border border-sand hover:border-forest bg-sand/30 hover:bg-forest hover:text-ivory flex items-center justify-center transition-all"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal Scroll Portfolio Track */}
      <div className="w-full pl-6 md:pl-12">
        <div
          ref={scrollContainerRef}
          className="flex items-stretch gap-8 overflow-x-auto no-scrollbar pb-12 pr-12 snap-x snap-mandatory"
        >
          {projects.map((project, idx) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              onMouseEnter={() => setActiveProjectIdx(idx)}
              className="group flex-none w-[85vw] sm:w-[500px] md:w-[620px] snap-start cursor-pointer select-none"
            >
              <div className="relative rounded-3xl overflow-hidden bg-sand/40 border border-sand/80 shadow-md group-hover:shadow-2xl transition-all duration-700">
                
                {/* Image Container with Zoom Effect */}
                <div className="relative h-[380px] sm:h-[450px] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />
                  
                  {/* Floating Badge */}
                  <div className="absolute top-6 left-6 px-4 py-1.5 rounded-full bg-ivory/90 backdrop-blur-sm border border-sand text-xs font-mono text-forest uppercase tracking-wider">
                    {project.category}
                  </div>

                  {/* Project Number Oversized Overlay */}
                  <div className="absolute top-4 right-6 font-editorial text-7xl font-light text-ivory/40 group-hover:text-coral transition-colors duration-500">
                    {project.id}
                  </div>

                  {/* Arrow Floating Button */}
                  <div className="absolute bottom-6 right-6 w-12 h-12 rounded-full bg-ivory/90 text-forest flex items-center justify-center group-hover:bg-coral group-hover:text-ivory transition-all duration-300 shadow-md group-hover:rotate-45">
                    <ArrowUpRight className="w-6 h-6" />
                  </div>
                </div>

                {/* Card Editorial Text Content */}
                <div className="p-8 bg-sand/20 backdrop-blur-sm space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono text-charcoal/60 uppercase">
                    <span>{project.client}</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="font-editorial text-3xl sm:text-4xl text-charcoal font-normal group-hover:text-forest transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm text-charcoal/70 font-light line-clamp-2 leading-relaxed">
                    {project.tagline}
                  </p>

                  <div className="pt-3 flex items-center gap-2 text-xs font-medium text-coral uppercase tracking-widest">
                    <span>VIEW CASE STUDY</span>
                    <Sparkles className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
