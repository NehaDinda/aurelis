import React, { useState } from 'react';
import { X, Palette, Type, LayoutGrid, Box, ArrowRight, Layers } from 'lucide-react';

export default function DesignSystemDrawer({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('colors');

  if (!isOpen) return null;

  const colors = [
    { name: 'Warm Ivory', hex: '#F5F1E8', role: 'Primary Background & Negative Space', bg: 'bg-[#F5F1E8]', text: 'text-charcoal' },
    { name: 'Soft Sand', hex: '#DED5C5', role: 'Secondary Cards & Structural Borders', bg: 'bg-[#DED5C5]', text: 'text-charcoal' },
    { name: 'Deep Forest Green', hex: '#163D32', role: 'Primary Accent & Hero Brand Mark', bg: 'bg-[#163D32]', text: 'text-ivory' },
    { name: 'Warm Coral', hex: '#D9785B', role: 'Secondary Accent & Interactive Highlights', bg: 'bg-[#D9785B]', text: 'text-ivory' },
    { name: 'Deep Charcoal', hex: '#171717', role: 'High-Contrast Editorial Typography', bg: 'bg-[#171717]', text: 'text-ivory' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-charcoal/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-ivory text-charcoal w-full max-w-2xl h-full overflow-y-auto shadow-2xl border-l border-sand p-8 space-y-8">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-sand pb-6">
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 rounded-full bg-coral" />
            <div>
              <h2 className="font-editorial text-3xl font-normal text-forest">AURELIS Design Tokens</h2>
              <p className="text-xs font-mono text-charcoal/60">Biomimetic Design System & Tokens</p>
            </div>
          </div>
          
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-sand/50 hover:bg-forest hover:text-ivory flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex gap-2 border-b border-sand pb-4">
          <button
            onClick={() => setActiveTab('colors')}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-mono transition-all ${
              activeTab === 'colors' ? 'bg-forest text-ivory' : 'bg-sand/40 hover:bg-sand'
            }`}
          >
            <Palette className="w-3.5 h-3.5" />
            <span>Colors & Swatches</span>
          </button>

          <button
            onClick={() => setActiveTab('typography')}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-mono transition-all ${
              activeTab === 'typography' ? 'bg-forest text-ivory' : 'bg-sand/40 hover:bg-sand'
            }`}
          >
            <Type className="w-3.5 h-3.5" />
            <span>Typography</span>
          </button>

          <button
            onClick={() => setActiveTab('components')}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-mono transition-all ${
              activeTab === 'components' ? 'bg-forest text-ivory' : 'bg-sand/40 hover:bg-sand'
            }`}
          >
            <Box className="w-3.5 h-3.5" />
            <span>UI Components</span>
          </button>
        </div>

        {/* Tab 1: Colors */}
        {activeTab === 'colors' && (
          <div className="space-y-6">
            <h3 className="text-sm font-mono uppercase text-forest tracking-wider">Color Palette Swatches</h3>
            <div className="grid grid-cols-1 gap-4">
              {colors.map(c => (
                <div key={c.hex} className="p-4 rounded-2xl border border-sand/80 bg-sand/20 flex items-center gap-4">
                  <div className={`w-16 h-16 rounded-xl ${c.bg} shadow-md border border-black/10 flex items-center justify-center font-mono text-xs ${c.text}`}>
                    {c.hex}
                  </div>
                  <div>
                    <h4 className="font-editorial text-2xl text-charcoal">{c.name}</h4>
                    <p className="text-xs text-charcoal/60 font-mono">{c.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 2: Typography */}
        {activeTab === 'typography' && (
          <div className="space-y-8">
            <div>
              <span className="text-xs font-mono text-coral uppercase tracking-widest">DISPLAY SERIF</span>
              <h4 className="font-editorial text-5xl font-light text-charcoal mt-1">Cormorant Garamond</h4>
              <p className="text-xs font-mono text-charcoal/60 mt-1">Used for high-contrast magazine headlines and section statements.</p>
            </div>

            <div className="pt-4 border-t border-sand">
              <span className="text-xs font-mono text-coral uppercase tracking-widest">BODY & MONO SANS</span>
              <h4 className="font-sans text-2xl font-normal text-charcoal mt-1">Plus Jakarta Sans</h4>
              <p className="text-xs font-mono text-charcoal/60 mt-1">Clean modern sans-serif for readable body copy and technical tags.</p>
            </div>

            <div className="p-6 bg-sand/30 rounded-2xl border border-sand space-y-4">
              <h5 className="text-xs font-mono text-forest uppercase">Oversized Headline Preview</h5>
              <div className="font-editorial text-4xl text-charcoal leading-none">
                DESIGNING FOR WHAT COMES NEXT.
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: UI Components */}
        {activeTab === 'components' && (
          <div className="space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-mono text-forest uppercase">Button States</span>
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 rounded-full bg-forest text-ivory text-xs font-mono">
                  Primary Button →
                </button>
                <button className="px-6 py-3 rounded-full bg-sand/60 border border-forest/30 text-forest text-xs font-mono">
                  Secondary Pill
                </button>
                <button className="px-6 py-3 rounded-full bg-coral text-ivory text-xs font-mono">
                  Accent Coral Action
                </button>
              </div>
            </div>

            <div className="space-y-3 pt-4 border-t border-sand">
              <span className="text-xs font-mono text-forest uppercase">Category Tag Pills</span>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-forest text-ivory rounded-full text-xs font-mono">BIO-SPATIAL</span>
                <span className="px-3 py-1 bg-sand/80 text-charcoal rounded-full text-xs font-mono">SWARM ROBOTICS</span>
                <span className="px-3 py-1 bg-coral text-ivory rounded-full text-xs font-mono">RESEARCH</span>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
