"use client";

import React from "react";
import { Code, Cpu, Layout, Compass, ArrowUpRight, Check, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { SERVICES, ServiceItem } from "../data/services";

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
}

export default function ServicesSection({
  onSelectService,
}: ServicesSectionProps) {
  const getIcon = (type: ServiceItem["iconType"]) => {
    switch (type) {
      case "code":
        return <Code className="w-5 h-5 transition-colors" />;
      case "cpu":
        return <Cpu className="w-5 h-5 transition-colors" />;
      case "layout":
        return <Layout className="w-5 h-5 transition-colors" />;
      case "compass":
        return <Compass className="w-5 h-5 transition-colors" />;
    }
  };

  const serviceMetrics = [
    { label: "Architecture", value: "Cloud-Native" },
    { label: "Efficiency", value: "10x Automation" },
    { label: "Usability", value: "Intuitive UI/UX" },
    { label: "Advisory", value: "Strategic Roadmap" },
  ];

  return (
    <section
      id="services"
      className="relative py-24 bg-black border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/10"
        >
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-4 h-4 text-white" />
              <span className="text-xs font-mono uppercase tracking-widest text-white/50">
                WHAT WE DO · CORE SERVICES
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Engineered To Scale.
            </h2>
          </div>
          <p className="mt-3 md:mt-0 text-sm sm:text-base text-white/70 max-w-md font-normal leading-relaxed">
            Scroll down to explore our vertical disciplines. Each solution is
            architected to eliminate friction and ensure data integrity.
          </p>
        </motion.div>

        {/* Vertical Stacking Cards Sequence on Scroll — Compact, Simple, rounded-md */}
        <div className="relative pb-12 space-y-8">
          {SERVICES.map((service, index) => {
            // Progressive sticky top offset for stacking effect
            const topOffsetClass =
              index === 0
                ? "top-24 sm:top-28"
                : index === 1
                ? "top-28 sm:top-32"
                : index === 2
                ? "top-32 sm:top-36"
                : "top-36 sm:top-40";

            return (
              <div
                key={service.id}
                className={`sticky ${topOffsetClass} transition-all duration-300`}
                style={{ zIndex: 10 + index }}
              >
                <div
                  onClick={() => onSelectService(service)}
                  className="group relative w-full max-w-4xl mx-auto rounded-md bg-[#09090b]/98 backdrop-blur-xl border border-white/20 p-6 sm:p-8 shadow-[0_-15px_35px_rgba(0,0,0,0.85),0_20px_45px_rgba(0,0,0,0.7)] hover:border-white/50 transition-all duration-300 cursor-pointer overflow-hidden"
                >
                  {/* Subtle top border highlight */}
                  <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/30 to-transparent" />

                  {/* Card Header Row */}
                  <div className="flex flex-wrap items-center justify-between gap-4 pb-5 mb-6 border-b border-white/10">
                    <div className="flex items-center gap-3.5">
                      {/* Rounded-full icon frame with visible icon on hover */}
                      <div className="w-11 h-11 rounded-full bg-white/4 border border-white/25 flex items-center justify-center text-white group-hover:scale-105 group-hover:bg-white group-hover:text-black group-hover:border-white transition-all duration-300 shadow-sm">
                        {getIcon(service.iconType)}
                      </div>
                      <div>
                        <span className="font-mono text-[11px] uppercase tracking-widest text-white/50 block">
                          CORE DISCIPLINE {service.number}
                        </span>
                        <span className="text-xs font-mono text-white/80">
                          {serviceMetrics[index]?.label}: {serviceMetrics[index]?.value}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 rounded-full border border-white/15 bg-white/3 text-[11px] font-mono text-white/70">
                        0{index + 1} / 0{SERVICES.length}
                      </span>
                      <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-mono text-white/40 uppercase tracking-widest group-hover:text-white transition-colors">
                        Scroll To Continue &darr;
                      </span>
                    </div>
                  </div>

                  {/* Card Body Grid — Compact 2-column layout */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                    <div className="md:col-span-7">
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3 tracking-tight leading-snug group-hover:translate-x-1 transition-transform">
                        {service.title}
                      </h3>
                      <p className="text-sm text-white/75 leading-relaxed font-light mb-6">
                        {service.description}
                      </p>

                      <div>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            onSelectService(service);
                          }}
                          className="inline-flex items-center gap-2 px-5 py-2.5 text-xs uppercase font-bold tracking-widest text-black bg-white rounded-md hover:bg-black hover:text-white border border-white transition-all duration-300 cursor-pointer shadow-[0_0_15px_rgba(255,255,255,0.12)]"
                        >
                          <span>Explore Full Service Scope</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    {/* Capabilities & Scope List */}
                    <div className="md:col-span-5 bg-white/2 border border-white/10 rounded-md p-4 sm:p-5">
                      <h4 className="text-[11px] font-mono uppercase tracking-widest text-white/50 mb-3 pb-2 border-b border-white/10">
                        Included Deliverables
                      </h4>
                      <ul className="space-y-2">
                        {service.capabilities.map((cap, i) => (
                          <li
                            key={i}
                            className="flex items-center gap-2 text-xs text-white/80 group-hover:text-white transition-colors"
                          >
                            <div className="w-3.5 h-3.5 rounded-full bg-white/10 border border-white/20 flex items-center justify-center shrink-0">
                              <Check className="w-2 h-2 text-white" />
                            </div>
                            <span className="font-light truncate">{cap}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
