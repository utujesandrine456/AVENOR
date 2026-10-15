"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Info,
  Layers,
  GitBranch,
  FolderGit2,
  MessageSquareQuote,
  Mail,
  Menu,
  X,
  ArrowUpRight,
} from "lucide-react";

interface HeaderProps {
  activeSection?: string;
}

export default function Header({ activeSection = "hero" }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about", icon: Info },
    { name: "Services", href: "#services", icon: Layers },
    { name: "Process", href: "#process", icon: GitBranch },
    { name: "Projects", href: "#projects", icon: FolderGit2 },
    { name: "Testimonials", href: "#testimonials", icon: MessageSquareQuote },
    { name: "Contact", href: "#contact", icon: Mail },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/92 backdrop-blur-lg border-b border-white/10 py-3"
          : "bg-black/60 backdrop-blur-md border-b border-white/5 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between">
          {/* Logo & Brand */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, "#hero")}
            className="group flex items-center gap-4 focus:outline-none"
            aria-label="AVENOR 10X Home"
          >
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 bg-white border border-white/40 rounded-full flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:scale-105 shadow-sm">
              <Image
                src="/logo.png"
                alt="AVENOR 10X"
                width={50}
                height={50}
                className="object-contain p-2"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl sm:text-2xl tracking-wider text-white leading-tight">
                AVENOR 10X
              </span>
              <span className="text-[10px] tracking-widest text-white/50 uppercase font-light">
                Technologies
              </span>
            </div>
          </a>

          {/* Desktop Navigation — increased length, gap, and rounded-full icon frames */}
          <nav
            className="hidden md:flex items-center gap-4 sm:gap-6 border border-white/20 rounded-md px-8 sm:px-10 py-3 bg-black/80 backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.6)]"
            aria-label="Primary navigation"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              const IconComponent = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="group relative flex items-center justify-center cursor-pointer"
                  aria-label={link.name}
                  title={link.name}
                >
                  <div
                    className={`w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isActive
                        ? "bg-white text-black shadow-[0_0_16px_rgba(255,255,255,0.45)] scale-105"
                        : "bg-white/4 border border-white/15 text-white/70 hover:bg-white hover:text-black hover:border-white hover:scale-105 hover:shadow-[0_0_14px_rgba(255,255,255,0.25)]"
                    }`}
                  >
                    <IconComponent className="w-5 h-5" />
                  </div>

                  {/* Tooltip */}
                  <span className="absolute -bottom-9 left-1/2 -translate-x-1/2 px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider bg-black border border-white/20 text-white rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50 shadow-lg">
                    {link.name}
                  </span>
                </a>
              );
            })}
          </nav>

          {/* Let's Talk CTA */}
          <div className="hidden md:flex items-center">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="group inline-flex items-center gap-2 px-6 py-2.5 text-xs uppercase font-bold tracking-widest text-black bg-white rounded-md hover:bg-black hover:text-white border border-white transition-all duration-300 cursor-pointer shadow-[0_0_15px_rgba(255,255,255,0.15)]"
            >
              <span>Let&apos;s Talk</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-11 h-11 rounded-full border border-white/20 text-white hover:bg-white hover:text-black transition-colors flex items-center justify-center cursor-pointer"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-6 pt-3 bg-black/95 rounded-2xl px-6 py-4 border border-white/15 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="grid grid-cols-3 gap-3 py-3">
              {navLinks.map((link) => {
                const IconComponent = link.icon;
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`flex flex-col items-center gap-2 p-3 rounded-xl border text-center transition-all ${
                      isActive
                        ? "border-white bg-white text-black"
                        : "border-white/15 text-white/80 bg-white/3 hover:border-white hover:text-white"
                    }`}
                  >
                    <IconComponent className="w-5 h-5" />
                    <span className="text-[11px] font-mono uppercase tracking-wider">
                      {link.name}
                    </span>
                  </a>
                );
              })}
            </div>
            <div className="mt-4 pt-4 border-t border-white/10">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-xs uppercase font-bold tracking-widest text-black bg-white rounded-md hover:bg-white/90 transition-colors"
              >
                <span>Let&apos;s Talk</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
