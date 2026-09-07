import React from 'react';
import { X, Clock, User, Share2 } from 'lucide-react';

export default function JournalModal({ article, onClose }) {
  if (!article) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-charcoal/80 backdrop-blur-md animate-fadeIn">
      <div className="bg-ivory text-charcoal w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl border border-sand shadow-2xl relative">
        
        {/* Sticky Top Header */}
        <div className="sticky top-0 bg-ivory/95 backdrop-blur-md px-8 py-6 border-b border-sand flex items-center justify-between z-20">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-forest uppercase tracking-widest px-2.5 py-1 bg-sand/50 rounded-full border border-forest/10">
              {article.category}
            </span>
            <span className="font-mono text-xs text-charcoal/50 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {article.readTime}
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
        <div className="p-8 md:p-12 space-y-8">
          
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs font-mono text-charcoal/50">
              <span>PUBLISHED: {article.date}</span>
              <span>AUTHOR: {article.author}</span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-5xl text-charcoal font-normal leading-tight">
              {article.title}
            </h2>
          </div>

          <div className="relative rounded-2xl overflow-hidden aspect-[16/9] shadow-md border border-sand">
            <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
          </div>

          <div className="space-y-6 text-base text-charcoal/80 font-light leading-relaxed font-sans">
            <p className="font-editorial text-2xl text-forest font-light italic leading-snug">
              “{article.excerpt}”
            </p>

            <div className="w-12 h-0.5 bg-coral rounded-full" />

            <div className="whitespace-pre-line space-y-4">
              {article.content}
            </div>
          </div>

          <div className="pt-8 border-t border-sand flex items-center justify-between">
            <span className="text-xs font-mono text-charcoal/50">AURELIS EDITORIAL JOURNAL</span>
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-full bg-forest text-ivory text-xs font-mono tracking-widest uppercase hover:bg-forest-dark transition-colors"
            >
              CLOSE ESSAY
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
