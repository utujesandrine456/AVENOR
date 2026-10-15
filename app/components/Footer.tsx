"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowUp, ArrowUpRight } from "lucide-react";
import { SERVICES, ServiceItem } from "../data/services";

interface FooterProps {
  onSelectService: (service: ServiceItem) => void;
}

export default function Footer({ onSelectService }: FooterProps) {
  const [currentYear, setCurrentYear] = useState(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const elem = document.querySelector(id);
    if (elem) elem.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative bg-black border-t border-white/15 pt-20 pb-12 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Company Brand Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3.5">
              <div className="relative w-12 h-12 bg-white border border-white/30 rounded-full flex items-center justify-center overflow-hidden">
                <Image
                  src="/logo.png"
                  alt="AVENOR 10X"
                  width={40}
                  height={40}
                  className="object-contain p-1.5"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl tracking-wider text-white">
                  AVENOR 10X
                </span>
                <span className="text-[10px] tracking-widest text-white/50 uppercase font-light">
                  Technologies
                </span>
              </div>
            </div>

            <p className="text-sm text-white/70 max-w-sm leading-relaxed font-normal">
              AVENOR 10X is an independent technology company founded in 2026,
              building software and delivering practical technology services that
              streamline operations, automate repetitive work, and solve
              business challenges.
            </p>

            <div className="pt-2">
              <p className="text-xl font-extrabold italic tracking-tight text-white font-serif">
                &ldquo;Every Sale. Accounted For.&rdquo;
              </p>
            </div>
          </div>

          {/* Core Services Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white/40 mb-4">
              Core Disciplines
            </h4>
            <ul className="space-y-2.5 text-sm">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <button
                    type="button"
                    onClick={() => onSelectService(s)}
                    className="text-white/70 hover:text-white transition-colors flex items-center gap-2 group text-left"
                  >
                    <span className="font-mono text-xs text-white/30 group-hover:text-white/70">
                      {s.number}
                    </span>
                    <span>{s.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white/40 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { name: "About", href: "#about" },
                { name: "Services", href: "#services" },
                { name: "Products", href: "#product" },
                { name: "Process", href: "#process" },
                { name: "Projects", href: "#projects" },
                { name: "Contact", href: "#contact" },
              ].map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.href)}
                    className="text-white/70 hover:text-white transition-colors flex items-center gap-1 group"
                  >
                    <span>{item.name}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Action / Back to Top Column */}
          <div className="lg:col-span-2 flex flex-col justify-between items-start lg:items-end">
            <div>
              <h4 className="text-xs font-mono uppercase tracking-widest text-white/40 mb-4">
                Initiate
              </h4>
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, "#contact")}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs uppercase font-bold tracking-widest text-black bg-white hover:bg-white/90 transition-colors"
              >
                <span>Let&apos;s Talk</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <button
              type="button"
              onClick={scrollToTop}
              className="mt-8 lg:mt-0 flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-white/60 hover:text-white p-2.5 border border-white/20 hover:border-white transition-colors"
              aria-label="Scroll back to top of page"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom Legal & Identity Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-white/50 space-y-4 sm:space-y-0">
          <div>
            <span>© {currentYear} AVENOR 10X. All rights reserved.</span>
          </div>

          <div className="text-center sm:text-right">
            <span className="text-white/70 font-semibold tracking-wider">
              Building Smarter Systems Since 2026.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
