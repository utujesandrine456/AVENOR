"use client";

import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import ServiceModal from "./components/ServiceModal";
import AboutSection from "./components/AboutSection";
import ProcessSection from "./components/ProcessSection";
import ProjectsSection from "./components/ProjectsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import { ServiceItem } from "./data/services";

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero");
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [contactServicePreset, setContactServicePreset] = useState<string>("");
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const sectionIds = [
      "hero",
      "about",
      "services",
      "process",
      "projects",
      "testimonials",
      "contact",
    ];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-25% 0px -65% 0px" }
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Show back-to-top after scrolling past hero
  useEffect(() => {
    const onScroll = () => setShowBackToTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const handleInquireFromModal = (serviceTitle: string) => {
    setContactServicePreset(serviceTitle);
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-white selection:text-black">
      {/* Navigation Header */}
      <Header activeSection={activeSection} />

      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero — grid background lives inside HeroSection only */}
        <HeroSection onSelectService={(s) => setSelectedService(s)} />

        {/* All other sections: pure black background with rich motion reveals */}
        <AboutSection />
        <ServicesSection onSelectService={(s) => setSelectedService(s)} />
        <ProcessSection />
        <ProjectsSection />
        <TestimonialsSection />
        <ContactSection selectedServicePreset={contactServicePreset} />
      </main>

      {/* Footer */}
      <Footer onSelectService={(s) => setSelectedService(s)} />

      {/* Service Detail Modal */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onInquire={handleInquireFromModal}
      />

      {/* Fixed Floating Back-to-Top Button — visible across all sections */}
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Scroll back to top"
        className={`fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-white text-black flex items-center justify-center shadow-[0_8px_30px_rgba(255,255,255,0.25)] border border-white/50 hover:bg-black hover:text-white hover:border-white hover:shadow-[0_8px_30px_rgba(255,255,255,0.15)] transition-all duration-300 cursor-pointer ${
          showBackToTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </div>
  );
}
