import React, { useState } from 'react';
import { ArrowUpRight, BookOpen, Clock } from 'lucide-react';
import { articles } from '../data/articles';

export default function JournalSection({ onSelectArticle }) {
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  const categories = ["ALL", "DESIGN", "TECHNOLOGY", "RESEARCH", "CULTURE"];

  const filteredArticles = selectedCategory === "ALL"
    ? articles
    : articles.filter(a => a.category === selectedCategory);

  return (
    <section id="journal" className="py-32 bg-ivory text-charcoal border-t border-sand/60 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Top Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 pb-8 border-b border-sand/60">
          <div>
            <span className="font-mono text-xs text-forest tracking-widest uppercase px-3 py-1 bg-sand/50 rounded-full border border-forest/10">
              08 / EDITORIAL JOURNAL
            </span>
            <h2 className="font-editorial text-5xl sm:text-6xl md:text-7xl font-light text-charcoal tracking-tight mt-4">
              THINKING OUT LOUD
            </h2>
          </div>

          {/* Category Filter Buttons */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-mono tracking-wider transition-all duration-300 ${
                  selectedCategory === cat
                    ? 'bg-forest text-ivory shadow-sm'
                    : 'bg-sand/40 text-charcoal/70 hover:bg-sand/80'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Magazine Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {filteredArticles.map((article) => (
            <article
              key={article.id}
              onClick={() => onSelectArticle(article)}
              className="group cursor-pointer space-y-6 bg-sand/20 rounded-3xl p-6 border border-sand/60 hover:bg-sand/50 transition-all duration-500 shadow-sm hover:shadow-xl"
            >
              {/* Article Image Container */}
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-sand">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-ivory/90 backdrop-blur-sm border border-sand text-[10px] font-mono text-forest uppercase tracking-wider">
                  {article.category}
                </div>

                {/* Arrow indicator on hover */}
                <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-ivory/90 text-forest flex items-center justify-center group-hover:bg-coral group-hover:text-ivory transition-all duration-300 group-hover:rotate-45">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>

              {/* Article Editorial Meta & Title */}
              <div className="space-y-3 px-2">
                <div className="flex items-center gap-4 text-xs font-mono text-charcoal/50 uppercase">
                  <span>{article.date}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {article.readTime}
                  </span>
                  <span>•</span>
                  <span>BY {article.author}</span>
                </div>

                <h3 className="font-editorial text-3xl sm:text-4xl text-charcoal font-normal group-hover:text-forest transition-all duration-300 group-hover:translate-x-1">
                  {article.title}
                </h3>

                <p className="text-sm text-charcoal/70 font-light leading-relaxed line-clamp-2">
                  {article.excerpt}
                </p>

                <div className="pt-2 flex items-center gap-2 text-xs font-mono text-coral font-medium uppercase tracking-wider">
                  <span>READ ARTICLE</span>
                  <BookOpen className="w-3.5 h-3.5" />
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
