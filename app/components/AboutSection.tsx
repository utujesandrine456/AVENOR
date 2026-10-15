"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, Layers, Target, Quote } from "lucide-react";

export default function AboutSection() {
  const principles = [
    {
      number: "01",
      title: "Practical Innovation",
      description:
        "We build solutions designed around actual business workflows rather than speculative trends. Every system solves a concrete operational need.",
      icon: <Target className="w-5 h-5 text-white" />,
    },
    {
      number: "02",
      title: "Thoughtful Engineering",
      description:
        "Codebases and architectures crafted for reliability, maintainability, and clean data integrity. Systems engineered to operate accurately under daily business use.",
      icon: <Layers className="w-5 h-5 text-white" />,
    },
    {
      number: "03",
      title: "Business-Focused Technology",
      description:
        "Bridging executive decision-making with technical execution. We ensure software investments directly reduce friction, automate tasks, and protect bottom-line accuracy.",
      icon: <ShieldCheck className="w-5 h-5 text-white" />,
    },
  ];

  const leaders = [
    {
      name: "UWASE UTUJE Sandrine",
      role: "CEO & Founder",
      image: "/Sandrine.jpg",
      quote:
        "At AVENOR 10X, we believe software shouldn't just exist to look modern — it must eliminate operational friction, guarantee accuracy, and deliver measurable 10x value from day one.",
      highlights: ["Strategic Leadership", "Enterprise Systems Architecture"],
    },
    {
      name: "UWASE Sonia",
      role: "Co-founder & Product Lead",
      image: "/Sonia.png",
      quote:
        "We bridge complex engineering with effortless user workflows. When workers have intuitive tools and management has real-time integrity, businesses scale without fear of discrepancies.",
      highlights: ["Product Architecture", "Operations & Workflow Automation"],
    },
  ];

  return (
    <section
      id="about"
      className="relative py-28 bg-black border-b border-white/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14 items-start"
        >
          <div className="lg:col-span-5">
            <span className="text-xs font-mono uppercase tracking-widest text-white/50 block mb-3">
              ABOUT AVENOR 10X
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Technology With Purpose.
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="text-base sm:text-lg text-white/80 leading-relaxed font-light mb-8">
              AVENOR 10X is a technology company founded in 2026, focused on developing
              robust software and delivering practical engineering solutions. Through
              custom enterprise applications, business process automation, and intelligent
              mobile tools, we solve daily operational bottlenecks and protect bottom-line
              integrity.
            </p>

            {/* Bold, Italic Tagline in Quotes without 'Company Tagline' label */}
            <div className="relative p-6 sm:p-8 border border-white/20 rounded-2xl bg-linear-to-r from-white/5 via-white/2 to-transparent overflow-hidden group hover:border-white/40 transition-colors duration-300">
              <div className="flex items-center gap-4 sm:gap-6">
                <div className="w-12 h-12 rounded-full border border-white/20 bg-white/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Quote className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold italic tracking-tight text-white leading-tight">
                    &ldquo;Every Sale. Accounted For.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Leadership & Founders Section */}
        <div className="mb-20 pt-10 border-t border-white/10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-white/50 block mb-2">
                EXECUTIVE LEADERSHIP
              </span>
              <h3 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
                The Minds Behind AVENOR 10X.
              </h3>
            </div>
            <p className="mt-2 sm:mt-0 text-sm text-white/60 max-w-sm">
              Founded on deep technical rigor, practical business acumen, and relentless execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {leaders.map((leader, idx) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="group relative bg-neutral-950/80 border border-white/15 rounded-2xl p-8 sm:p-10 flex flex-col justify-between hover:border-white/40 hover:shadow-[0_10px_35px_rgba(255,255,255,0.05)] transition-all duration-300"
              >
                <div>
                  {/* Top profile header */}
                  <div className="flex items-center gap-5 pb-6 mb-6 border-b border-white/10">
                    <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-white/30 bg-neutral-900 shrink-0 group-hover:border-white transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                      <Image
                        src={leader.image}
                        alt={leader.name}
                        fill
                        className="object-cover object-top filter grayscale contrast-110 group-hover:grayscale-0 transition-all duration-500"
                        sizes="(max-w-768px) 100vw, 150px"
                      />
                    </div>
                    <div>
                      <span className="inline-block px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider bg-white text-black font-bold mb-2">
                        {leader.role}
                      </span>
                      <h4 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                        {leader.name}
                      </h4>
                      <p className="text-xs font-mono text-white/50 tracking-wider">
                        AVENOR 10X TECHNOLOGIES
                      </p>
                    </div>
                  </div>

                  {/* Words in quotes */}
                  <div className="relative pl-6 mb-6 border-l-2 border-white/40">
                    <p className="text-sm sm:text-base text-white/80 italic leading-relaxed font-light">
                      &ldquo;{leader.quote}&rdquo;
                    </p>
                  </div>
                </div>

                {/* Highlights tags */}
                <div className="pt-4 border-t border-white/10 flex flex-wrap gap-2">
                  {leader.highlights.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-md text-[11px] font-mono text-white/60 bg-white/4 border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Three Core Principles */}
        <div className="pt-10 border-t border-white/10">
          <div className="mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-white/50 block mb-2">
              OUR FOUNDATION
            </span>
            <h3 className="text-xl sm:text-3xl font-bold tracking-tight text-white">
              Guiding Principles
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {principles.map((principle, i) => (
              <motion.div
                key={principle.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative bg-black border border-white/15 rounded-xl p-7 flex flex-col justify-between hover:border-white transition-all duration-300 group cursor-default"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/10">
                    <span className="font-mono text-xs text-white/50 tracking-widest">
                      PRINCIPLE {principle.number}
                    </span>
                    <div className="p-2 border border-white/20 rounded-lg bg-white/5 group-hover:border-white transition-colors">
                      {principle.icon}
                    </div>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2 tracking-tight">
                    {principle.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-normal">
                    {principle.description}
                  </p>
                </div>
                <div className="mt-6 pt-3 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-white/30">
                    AVENOR STANDARD
                  </span>
                  <span className="text-white/40 text-xs font-mono">0{principle.number}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
