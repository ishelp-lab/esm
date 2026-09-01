import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturesGrid } from './components/FeaturesGrid';
import { CatalogSection } from './components/CatalogSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ScrollReveal } from './components/ScrollReveal';

export default function App() {
  return (
    <div className="min-h-screen bg-[#fcfaf7] text-[#46484a] flex flex-col selection:bg-[#b46f34] selection:text-white">
      {/* Sticky Navigation Bar */}
      <Navbar />

      {/* Main Sections */}
      <main className="flex-grow">
        {/* Section 1: Hero */}
        <Hero />
        
        {/* Section 2: Pillars of Trust & Authority */}
        <ScrollReveal>
          <FeaturesGrid />
        </ScrollReveal>
        
        {/* Section 2: Interactive Product Catalog */}
        <ScrollReveal>
          <CatalogSection />
        </ScrollReveal>
        
        {/* Section 3: Contact Form & Info */}
        <ScrollReveal>
          <ContactSection />
        </ScrollReveal>
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Button */}
      <FloatingWhatsApp />
    </div>
  );
}
