"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Sparkles } from "lucide-react";

interface TestimonialItem {
  id: number;
  quote: string;
  name: string;
  role: string;
  organization: string;
  avatar: string;
}

const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 0,
    name: "KAYIRANGA SIMBI Kelia",
    role: "Software Engineer",
    organization: "",
    quote:
      "AVENOR 10X brought a level of structure and reliability to our project that made a real difference. Their team understood our needs, translated our ideas into practical solutions, and delivered with impressive attention to detail. Working with them has been a genuinely valuable experience.",
    avatar: "/Simbi Kelia.png",
  },
  {
    id: 1,
    name: "TETA Angel Bless",
    role: "Design Lead",
    organization: "EntelonAI",
    quote:
      "AVENOR 10X translated complex business requirements into a robust, reliable, and technically sound solution. Their engineering rigor, attention to detail, and focus on purposeful design were instrumental in delivering a high-quality outcome.",
    avatar: "/Bless.png",
  },
  {
    id: 2,
    name: "CYUBAHIRO Don Don Durkheim",
    role: "Co-founder & President",
    organization: "Entelon",
    quote:
      "Banks reconcile their books every night. Most shops never do. AVENOR 10X brought bank-grade reconciliation to the shop counter: every worker’s sales get checked against each other before a single item leaves inventory.",
    avatar: "/don.jpg",
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto cycle every 7 seconds if not interacting
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const getCardStyle = (index: number) => {
    const diff = (index - currentIndex + TESTIMONIALS.length) % TESTIMONIALS.length;

    if (diff === 0) {
      // Center / Active card
      return {
        zIndex: 20,
        opacity: 1,
        scale: 1,
        x: "0%",
        filter: "blur(0px)",
        pointerEvents: "auto" as const,
      };
    } else if (diff === 1 || (diff === -2 && TESTIMONIALS.length === 3)) {
      // Right card
      return {
        zIndex: 10,
        opacity: 0.35,
        scale: 0.88,
        x: "55%",
        filter: "blur(1px)",
        pointerEvents: "auto" as const,
      };
    } else {
      // Left card
      return {
        zIndex: 10,
        opacity: 0.35,
        scale: 0.88,
        x: "-55%",
        filter: "blur(1px)",
        pointerEvents: "auto" as const,
      };
    }
  };

  return (
    <section
      id="testimonials"
      className="relative py-28 bg-black border-b border-white/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/15 bg-white/3 text-xs font-mono text-white/70 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-white" />
            <span>ENDORSEMENTS & IMPACT</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Trusted By Innovators.
          </h2>
          <p className="text-sm sm:text-base text-white/60 font-light">
            Hear from industry leaders and technology partners who have transformed their operations with AVENOR 10X.
          </p>
        </motion.div>

        {/* 3D Layered Carousel Container (Matching Image 4) */}
        <div className="relative h-105 sm:h-95 max-w-4xl mx-auto flex items-center justify-center">
          {TESTIMONIALS.map((item, index) => {
            const style = getCardStyle(index);
            const isCenter = index === currentIndex;

            return (
              <motion.div
                key={item.id}
                animate={{
                  x: style.x,
                  scale: style.scale,
                  opacity: style.opacity,
                  filter: style.filter,
                  zIndex: style.zIndex,
                }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => {
                  if (!isCenter) setCurrentIndex(index);
                }}
                className={`absolute w-full max-w-145 p-8 sm:p-10 rounded-tl-md rounded-tr-none rounded-br-none rounded-bl-none bg-[#09090b]/95 border-t border-l border-r-0 border-b-0 ${
                  isCenter
                    ? "border-white/35 shadow-[0_25px_60px_rgba(0,0,0,0.9)]"
                    : "border-white/15 hover:border-white/25 cursor-pointer"
                } flex flex-col justify-between transition-colors select-none`}
              >
                {/* Quote Text */}
                <div className="mb-8">
                  <Quote className="w-7 h-7 text-white/30 mb-4" />
                  <p className="text-base sm:text-lg text-white/90 leading-relaxed font-light">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-4 pt-5 border-t border-white/10">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-white/50 bg-neutral-900 shrink-0 shadow-[0_0_15px_rgba(255,255,255,0.18)]">
                    <Image
                      src={item.avatar}
                      alt={item.name}
                      fill
                      className="object-cover object-center brightness-110 contrast-105"
                      sizes="56px"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-white tracking-tight">
                      {item.name}
                    </h4>
                    <p className="text-xs text-white/50 font-mono">
                      {item.organization ? `${item.role} · ${item.organization}` : item.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Carousel Controls: Arrows + Indicator Pills (Image 4) */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6">
          {/* Left Arrow */}
          <button
            type="button"
            onClick={handlePrev}
            className="w-10 h-10 rounded-full border border-white/20 bg-white/3 text-white flex items-center justify-center hover:bg-white hover:text-black hover:border-white transition-all cursor-pointer shadow-sm"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Indicator Pills (matching Image 4 active pill) */}
          <div className="flex items-center gap-2">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setCurrentIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  currentIndex === i
                    ? "w-8 h-1.5 bg-white shadow-[0_0_8px_rgba(255,255,255,0.6)]"
                    : "w-1.5 h-1.5 bg-white/30 hover:bg-white/60"
                }`}
              />
            ))}
          </div>

          {/* Right Arrow */}
          <button
            type="button"
            onClick={handleNext}
            className="w-10 h-10 rounded-full border border-white/20 bg-white/3 text-white flex items-center justify-center hover:bg-white hover:text-black hover:border-white transition-all cursor-pointer shadow-sm"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
