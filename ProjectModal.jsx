import React from 'react';
import { X, Sparkles, ArrowUpRight, CheckCircle2, ShieldAlert } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-charcoal/80 backdrop-blur-md animate-fadeIn">
      <div className="bg-ivory text-charcoal w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl border border-sand shadow-2xl relative">
        
        {/* Sticky Top Header */}
        <div className="sticky top-0 bg-ivory/95 backdrop-blur-md px-8 py-6 border-b border-sand flex items-center justify-between z-20">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-coral font-bold">[{project.id}]</span>
            <span className="font-mono text-xs text-forest uppercase tracking-widest px-2.5 py-1 bg-sand/50 rounded-full border border-forest/10">
              {project.category}
            </span>
          </div>
          
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-sand/50 hover:bg-forest hover:text-ivory flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-8 md:p-12 space-y-10">
          
          {/* Main Title & Hero Image */}
          <div className="space-y-4">
            <div className="flex items-center justify-between text-xs font-mono text-charcoal/50">
              <span>CLIENT: {project.client}</span>
              <span>DEPLOYED: {project.year}</span>
            </div>
            <h2 className="font-editorial text-4xl sm:text-6xl text-forest font-light leading-tight">
              {project.title}
            </h2>
            <p className="font-editorial text-2xl text-charcoal/80 italic">
              “{project.tagline}”
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden aspect-[16/9] shadow-lg border border-sand">
            <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
          </div>

          {/* Deep Story & Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-4">
            
            <div className="md:col-span-8 space-y-6">
              <h3 className="font-editorial text-3xl text-charcoal">Case Study Overview</h3>
              <p className="text-base text-charcoal/80 font-light leading-relaxed">
                {project.fullStory}
              </p>
              <p className="text-sm text-charcoal/70 font-light leading-relaxed">
                {project.description}
              </p>

              <div className="pt-4 space-y-3">
                <h4 className="font-mono text-xs text-forest uppercase tracking-wider">APPLIED TECHNOLOGIES</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map(tech => (
                    <span key={tech} className="px-3 py-1 bg-sand/60 rounded-full text-xs font-mono text-charcoal border border-sand">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="md:col-span-4 bg-sand/30 rounded-2xl p-6 border border-sand space-y-6 h-fit">
              <div>
                <span className="text-[10px] font-mono text-coral uppercase tracking-widest">NATURAL INSPIRATION</span>
                <p className="text-sm font-editorial text-forest font-medium mt-1">{project.naturalInspiration}</p>
              </div>

              <div className="pt-4 border-t border-sand">
                <span className="text-[10px] font-mono text-coral uppercase tracking-widest">VERIFIED IMPACT</span>
                <p className="text-sm font-semibold text-charcoal mt-1">{project.keyImpact}</p>
              </div>

              <button
                onClick={onClose}
                className="w-full py-3 rounded-full bg-forest text-ivory text-xs font-mono tracking-widest uppercase hover:bg-forest-dark transition-colors"
              >
                CLOSE CASE STUDY
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
