"use client";

import React from "react";
import { ArrowRight, ArrowUpRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import RotatingServiceCards from "./RotatingServiceCards";
import { ServiceItem } from "../data/services";

interface HeroSectionProps {
  onSelectService: (service: ServiceItem) => void;
}

export default function HeroSection({ onSelectService }: HeroSectionProps) {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const elem = document.querySelector(id);
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center pt-28 pb-16 overflow-hidden bg-black bg-grid-pattern border-b border-white/10"
    >
      {/* Subtle Architectural Horizontal and Vertical Grid Guides */}
      <div className="absolute inset-y-0 left-1/4 w-px bg-white/3 pointer-events-none" />
      <div className="absolute inset-y-0 left-2/4 w-px bg-white/3 pointer-events-none" />
      <div className="absolute inset-y-0 left-3/4 w-px bg-white/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Side: Company Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col justify-center text-left"
          >
            {/* Pill Indicator */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/15 bg-white/3 text-xs font-mono text-white/70 mb-6 w-fit">
              <Sparkles className="w-3.5 h-3.5 text-white" />
              <span>TECHNOLOGY WITH PURPOSE</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.08] mb-6">
              Building Smarter Systems for Business.
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-white/70 max-w-xl leading-relaxed mb-8 font-normal">
              AVENOR 10X builds software and delivers practical technology services
              that help businesses streamline operations, eliminate record discrepancies,
              and solve real-world problems.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              <a
                href="#services"
                onClick={(e) => scrollToSection(e, "#services")}
                className="group inline-flex items-center justify-center gap-3 px-7 py-3.5 text-xs uppercase font-bold tracking-widest text-black bg-white rounded-md hover:bg-black hover:text-white border border-white transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.15)] cursor-pointer"
              >
                <span>Explore What We Do</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, "#contact")}
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs uppercase font-bold tracking-widest text-white bg-black rounded-md border border-white/30 hover:border-white hover:bg-white/10 transition-all duration-300 cursor-pointer"
              >
                <span>Let&apos;s Talk</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            {/* Micro Details Anchor */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10 max-w-md">
              <div>
                <p className="text-[10px] uppercase font-mono tracking-widest text-white/40 mb-1">
                  Pillars
                </p>
                <p className="text-xs font-semibold text-white tracking-wider">
                  4 Core Disciplines
                </p>
              </div>
              <div>
                <p className="text-[10px] uppercase font-mono tracking-widest text-white/40 mb-1">
                  Engineering
                </p>
                <p className="text-xs font-semibold text-white tracking-wider">
                  Purpose-Built
                </p>
              </div>
              <div>
                <p className="text-[10px] uppercase font-mono tracking-widest text-white/40 mb-1">
                  Motto
                </p>
                <p className="text-xs font-semibold italic text-white tracking-wider truncate">
                  &ldquo;Every Sale. Accounted For.&rdquo;
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Interactive 360° Framer Motion Service Carousel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 flex flex-col items-center justify-center"
          >
            <RotatingServiceCards onSelectService={onSelectService} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
