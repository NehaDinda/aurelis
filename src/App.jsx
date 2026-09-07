import React, { useState } from 'react';
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import HeroSection from './components/HeroSection';
import IdeaSection from './components/IdeaSection';
import ApproachSection from './components/ApproachSection';
import FeaturedWorkSection from './components/FeaturedWorkSection';
import AurelisExperienceSection from './components/AurelisExperienceSection';
import TechnologySection from './components/TechnologySection';
import NumbersSection from './components/NumbersSection';
import JournalSection from './components/JournalSection';
import AboutSection from './components/AboutSection';
import FinalCTASection from './components/FinalCTASection';
import Footer from './components/Footer';

// Modals
import ProjectModal from './components/ProjectModal';
import JournalModal from './components/JournalModal';
import ContactModal from './components/ContactModal';
import DesignSystemDrawer from './components/DesignSystemDrawer';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [contactOpen, setContactOpen] = useState(false);
  const [designSystemOpen, setDesignSystemOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-ivory text-charcoal font-sans antialiased overflow-x-hidden selection:bg-forest selection:text-ivory">
      {/* Custom Fluid Cursor */}
      <CustomCursor />

      {/* Navigation Bar */}
      <Navbar
        onOpenContact={() => setContactOpen(true)}
        onOpenDesignSystem={() => setDesignSystemOpen(true)}
      />

      {/* 1. Full Screen Interactive Hero Section */}
      <HeroSection />

      {/* 2. Section 2: The Idea (Growing Stem SVG Line) */}
      <IdeaSection />

      {/* 3. Section 3: Our Approach (Observe, Adapt, Evolve) */}
      <ApproachSection />

      {/* 4. Section 4: Featured Work (Horizontal Scroll Portfolio) */}
      <FeaturedWorkSection onSelectProject={(p) => setSelectedProject(p)} />

      {/* 5. Section 5: THE AURELIS EXPERIENCE (Futuristic Automotive Showcase) */}
      <AurelisExperienceSection onOpenContact={() => setContactOpen(true)} />

      {/* 6. Section 6: The Technology (Vertical Growing Timeline) */}
      <TechnologySection />

      {/* 7. Section 7: Impact Numbers (Animated Stats) */}
      <NumbersSection />

      {/* 8. Section 8: Journal (Magazine Grid) */}
      <JournalSection onSelectArticle={(a) => setSelectedArticle(a)} />

      {/* 9. Section 9: About (Manifesto & Overlapping Artwork) */}
      <AboutSection />

      {/* 10. Section 10: Final CTA (Forest Green Container) */}
      <FinalCTASection onOpenContact={() => setContactOpen(true)} />

      {/* Footer */}
      <Footer onOpenContact={() => setContactOpen(true)} />

      {/* Modals & Drawers */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      <JournalModal article={selectedArticle} onClose={() => setSelectedArticle(null)} />
      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
      <DesignSystemDrawer isOpen={designSystemOpen} onClose={() => setDesignSystemOpen(false)} />
    </div>
  );
}
