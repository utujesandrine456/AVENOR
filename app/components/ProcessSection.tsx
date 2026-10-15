"use client";

import React from "react";
import { motion } from "framer-motion";
import { GitBranch } from "lucide-react";

export default function ProcessSection() {
  const steps = [
    {
      badge: "GET STARTED",
      number: "01",
      title: "Discover",
      description: "Understand the business, its users, its challenges, and the problem that needs solving.",
      bullets: [
        "Workflow & operational review",
        "User & stakeholder analysis",
        "Core problem mapping",
      ],
    },
    {
      badge: "SMART PLANNING",
      number: "02",
      title: "Plan & Design",
      description: "Define requirements, plan the system, and design a clear user experience.",
      bullets: [
        "System architecture plan",
        "UI/UX wireframes & flows",
        "Data schema specifications",
      ],
    },
    {
      badge: "HANDS-ON BUILDING",
      number: "03",
      title: "Develop",
      description: "Build the solution using suitable technologies, maintainable code, and a thoughtful implementation approach.",
      bullets: [
        "Modular codebase construction",
        "API & database engineering",
        "Security & validation rules",
      ],
    },
    {
      badge: "CERTIFIED DELIVERY",
      number: "04",
      title: "Test & Improve",
      description: "Test functionality, address issues, refine usability, and prepare the solution for deployment.",
      bullets: [
        "Edge case & logic verification",
        "Usability & speed tuning",
        "Production deployment prep",
      ],
    },
  ];

  return (
    <section
      id="process"
      className="relative py-28 bg-black border-b border-white/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-6 pb-8 border-b border-white/10"
        >
          <div>
            <div className="flex items-center gap-2 mb-2">
              <GitBranch className="w-4 h-4 text-white" />
              <span className="text-xs font-mono uppercase tracking-widest text-white/50">
                PROVEN METHODOLOGY
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              From Idea to Implementation.
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm sm:text-base text-white/60 max-w-md font-normal leading-relaxed">
            A structured engineering methodology ensuring every system delivers measurable
            business value, zero downtime, and reliable performance.
          </p>
        </motion.div>

        {/* Wave path + cards container */}
        <div className="relative pt-4">
          {/* SVG Wave Path */}
          <div className="hidden lg:block absolute top-0 left-0 right-0 h-32 pointer-events-none z-0">
            <svg
              className="w-full h-full"
              viewBox="0 0 1200 130"
              fill="none"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Glow shadow path */}
              <path
                d="M 30,85 C 160,20 310,115 460,55 C 610,-8 740,118 890,52 C 1010,-5 1110,90 1170,60"
                stroke="rgba(255,255,255,0.12)"
                strokeWidth="5"
                strokeLinecap="round"
              />
              {/* Main dashed wave */}
              <path
                d="M 30,85 C 160,20 310,115 460,55 C 610,-8 740,118 890,52 C 1010,-5 1110,90 1170,60"
                stroke="rgba(255,255,255,0.7)"
                strokeWidth="1.5"
                strokeDasharray="8 6"
                strokeLinecap="round"
              />
              {/* Modern diamond milestone markers */}
              <rect x="142" y="36" width="8" height="8" rx="1" fill="#fff" transform="rotate(45 146 40)" />
              <rect x="143" y="37" width="6" height="6" rx="0.5" fill="black" transform="rotate(45 146 40)" />
              <rect x="444" y="48" width="8" height="8" rx="1" fill="#fff" transform="rotate(45 448 52)" />
              <rect x="445" y="49" width="6" height="6" rx="0.5" fill="black" transform="rotate(45 448 52)" />
              <rect x="746" y="78" width="8" height="8" rx="1" fill="#fff" transform="rotate(45 750 82)" />
              <rect x="747" y="79" width="6" height="6" rx="0.5" fill="black" transform="rotate(45 750 82)" />
              <rect x="1048" y="46" width="8" height="8" rx="1" fill="#fff" transform="rotate(45 1052 50)" />
              <rect x="1049" y="47" width="6" height="6" rx="0.5" fill="black" transform="rotate(45 1052 50)" />
            </svg>
          </div>

          {/* Cards with Framer Motion staggered reveals */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 relative z-10 mt-20 lg:mt-24">
            {steps.map((step, idx) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className="group relative bg-[#09090b]/90 backdrop-blur-md border border-white/20 rounded-2xl p-7 flex flex-col justify-between cursor-pointer transition-all duration-300 hover:border-white hover:bg-white/4 hover:shadow-[0_15px_40px_rgba(255,255,255,0.08)] hover:-translate-y-2 active:scale-[0.98]"
              >
                <div>
                  {/* Pill Badge */}
                  <div className="mb-5">
                    <span className="inline-block px-3.5 py-1.5 rounded-full border border-white/25 bg-white/5 text-[10px] font-mono font-bold tracking-[0.15em] text-white/90 group-hover:border-white group-hover:bg-white/10 transition-all">
                      {step.badge}
                    </span>
                  </div>

                  {/* Accent rule */}
                  <div className="h-px w-6 bg-white/30 mb-4 group-hover:w-12 transition-all duration-500" />

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-3 tracking-tight group-hover:text-white transition-colors">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-white/60 leading-relaxed font-normal mb-7 group-hover:text-white/80 transition-colors">
                    {step.description}
                  </p>
                </div>

                {/* Bullet points */}
                <div className="pt-5 border-t border-white/10 space-y-2.5">
                  {step.bullets.map((bullet, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs text-white/50 group-hover:text-white/80 transition-colors">
                      <span className="w-3 h-px bg-white/40 shrink-0 group-hover:bg-white/80 transition-colors" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>

                {/* Step number badge */}
                <span className="absolute bottom-5 right-6 text-[10px] font-mono text-white/25 group-hover:text-white/50 transition-colors">
                  {step.number} / 04
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
