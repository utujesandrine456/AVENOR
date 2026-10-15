"use client";

import React, { useState, useRef } from "react";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize2,
  ExternalLink,
  Smartphone,
  Star,
  CheckCircle2,
} from "lucide-react";
import { motion } from "framer-motion";

export default function ProjectsSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [videoError, setVideoError] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const toggleFullscreen = () => {
    if (!videoRef.current) return;
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      videoRef.current.requestFullscreen();
    }
  };

  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="projects"
      className="relative py-28 bg-black border-b border-white/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-white/10"
        >
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-white/50 block mb-2">
              SHIPPED PRODUCTS
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Solutions in Practice.
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm sm:text-base text-white/60 max-w-md font-normal leading-relaxed">
            Real enterprise software applications designed, engineered, and shipped
            to solve concrete business operational challenges.
          </p>
        </motion.div>

        {/* KWIZERA Shop Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7 }}
          className="border border-white/20 rounded-3xl bg-neutral-950 overflow-hidden hover:border-white/40 transition-colors duration-300 shadow-[0_20px_60px_rgba(0,0,0,0.8)]"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between px-6 sm:px-8 py-4 border-b border-white/10 bg-white/2">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-white/30" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/30" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/30" />
              </div>
              <span className="text-xs font-mono text-white/60 ml-2">
                KWIZERA SHOP · FLAGSHIP MOBILE APP
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[11px] font-mono text-white/80 uppercase tracking-widest">
                Live On Google Play
              </span>
            </div>
          </div>

          {/* Main Content Grid: Left Description + Right Mobile Smartphone Mockup */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Left Column: Description & CTAs */}
            <div className="lg:col-span-7 p-8 sm:p-12 md:p-14 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/10">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="px-3 py-1 rounded-full bg-white text-black text-[10px] font-mono font-bold uppercase tracking-wider">
                    Enterprise Mobile App
                  </span>
                  <span className="text-xs font-mono text-white/50">
                    SALES & INVENTORY RECONCILIATION
                  </span>
                </div>

                <h3 className="text-3xl sm:text-5xl font-extrabold text-white mb-6 tracking-tight leading-tight">
                  KWIZERA Shop
                </h3>

                <p className="text-base sm:text-lg text-white/80 leading-relaxed mb-8 font-light">
                  A high-integrity mobile sales and inventory management application
                  engineered for enterprises that demand 100% accountability. Multiple workers
                  submit sales and stock movements independently — an automated reconciliation
                  engine detects discrepancies instantly before inventory is updated.
                </p>

                {/* Feature checklist */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {[
                    "Multi-worker independent sales entry",
                    "Automated discrepancy detection engine",
                    "Administrator approval workflow",
                    "Real-time cloud inventory sync",
                    "Granular role-based access control",
                    "Daily financial reconciliation logs",
                  ].map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-white/70">
                      <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Google Play Store Card */}
                <div className="p-5 border border-white/15 rounded-2xl bg-white/3 flex items-center justify-between mb-8 hover:border-white/30 transition-colors">
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center">
                      <Smartphone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white">Google Play Store</p>
                      <p className="text-xs text-white/50 font-mono">
                        Android Application · Production Release
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="w-3.5 h-3.5 fill-white text-white" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-white/10">
                <a
                  href="https://play.google.com/store/search?q=kwizera+shop&c=apps"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs uppercase font-bold tracking-widest text-black bg-white rounded-xl hover:bg-black hover:text-white border border-white transition-all duration-300 cursor-pointer shadow-[0_0_20px_rgba(255,255,255,0.15)]"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Download on Play Store</span>
                </a>
                <a
                  href="#contact"
                  onClick={scrollToContact}
                  className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs uppercase font-bold tracking-widest text-white bg-black rounded-xl border border-white/30 hover:border-white hover:bg-white/10 transition-all duration-300 cursor-pointer"
                >
                  <span>Build A Custom App</span>
                </a>
              </div>
            </div>

            {/* Right Column: Realistic Vertical Mobile Smartphone Mockup */}
            <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col items-center justify-center bg-linear-to-b from-white/4 via-black to-black relative">
              <div className="mb-4 text-center">
                <span className="text-[11px] font-mono uppercase tracking-widest text-white/50">
                  INTERACTIVE MOBILE APP DEMO
                </span>
              </div>

              {/* Smartphone Frame — Native 9:19.5 aspect ratio so entire screen is visible */}
              <div className="relative w-full max-w-70 sm:max-w-77.5 aspect-9/19 rounded-[48px] bg-neutral-950 border-[7px] border-neutral-800 shadow-[0_25px_60px_-15px_rgba(255,255,255,0.12),0_0_0_1px_rgba(255,255,255,0.15)] p-2 flex flex-col items-center overflow-hidden group/phone">
                {/* Dynamic Island / Speaker Pill */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-4 bg-black rounded-full border border-white/10 z-30 flex items-center justify-center gap-2 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-neutral-800 border border-white/20" />
                </div>

                {/* Smartphone Screen Area */}
                <div className="w-full h-full rounded-[38px] overflow-hidden bg-black relative flex items-center justify-center">
                  {!videoError ? (
                    <video
                      ref={videoRef}
                      src="/Avenor-Video.mp4"
                      className="w-full h-full object-contain bg-black"
                      autoPlay
                      muted={isMuted}
                      loop
                      playsInline
                      onError={() => setVideoError(true)}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-neutral-900 text-center p-4">
                      <div>
                        <Smartphone className="w-10 h-10 text-white/30 mx-auto mb-2" />
                        <p className="text-xs text-white/50 font-mono">
                          Video preview unavailable
                        </p>
                      </div>
                    </div>
                  )}

                  {/* On-screen controls overlay (visible on hover or tap) */}
                  {!videoError && (
                    <div className="absolute inset-0 flex flex-col justify-between p-4 bg-linear-to-b from-black/40 via-transparent to-black/60 opacity-0 group-hover/phone:opacity-100 transition-opacity duration-300 z-20">
                      <div className="pt-5 flex items-center justify-between">
                        <span className="text-[10px] font-mono text-white/80 bg-black/60 px-2 py-0.5 rounded-full border border-white/10">
                          KWIZERA
                        </span>
                        <button
                          type="button"
                          onClick={toggleFullscreen}
                          className="p-1.5 rounded-full bg-black/60 border border-white/20 text-white hover:bg-white hover:text-black transition-colors cursor-pointer"
                          aria-label="Fullscreen"
                        >
                          <Maximize2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Center Play/Pause button */}
                      <div className="flex items-center justify-center">
                        <button
                          type="button"
                          onClick={togglePlay}
                          className="w-14 h-14 rounded-full bg-white/20 border-2 border-white/80 backdrop-blur-md flex items-center justify-center hover:bg-white hover:text-black text-white transition-all cursor-pointer shadow-lg"
                          aria-label={isPlaying ? "Pause" : "Play"}
                        >
                          {isPlaying ? (
                            <Pause className="w-6 h-6" />
                          ) : (
                            <Play className="w-6 h-6 ml-0.5" />
                          )}
                        </button>
                      </div>

                      {/* Bottom row sound toggle */}
                      <div className="pb-3 flex items-center justify-between">
                        <button
                          type="button"
                          onClick={toggleMute}
                          className="flex items-center gap-1.5 text-[11px] font-mono bg-black/70 border border-white/20 text-white px-3 py-1 rounded-full cursor-pointer hover:bg-white hover:text-black transition-colors"
                        >
                          {isMuted ? (
                            <>
                              <VolumeX className="w-3.5 h-3.5" />
                              <span>Unmute</span>
                            </>
                          ) : (
                            <>
                              <Volume2 className="w-3.5 h-3.5" />
                              <span>Mute</span>
                            </>
                          )}
                        </button>
                        <span className="text-[10px] font-mono text-white/60">
                          1080x1920
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Bottom Home Indicator Bar */}
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-28 h-1 bg-white/30 rounded-full z-10 pointer-events-none" />
                </div>
              </div>

              {/* Quick toggle pill below phone */}
              <div className="mt-4 flex items-center gap-3">
                <button
                  type="button"
                  onClick={togglePlay}
                  className="flex items-center gap-1.5 text-xs font-mono text-white/70 hover:text-white px-3 py-1.5 rounded-full border border-white/15 bg-white/3 transition-colors cursor-pointer"
                >
                  {isPlaying ? (
                    <>
                      <Pause className="w-3.5 h-3.5" />
                      <span>Pause Demo</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-3.5 h-3.5" />
                      <span>Play Demo</span>
                    </>
                  )}
                </button>
                <button
                  type="button"
                  onClick={toggleMute}
                  className="flex items-center gap-1.5 text-xs font-mono text-white/70 hover:text-white px-3 py-1.5 rounded-full border border-white/15 bg-white/3 transition-colors cursor-pointer"
                >
                  {isMuted ? (
                    <>
                      <VolumeX className="w-3.5 h-3.5" />
                      <span>Sound Off</span>
                    </>
                  ) : (
                    <>
                      <Volume2 className="w-3.5 h-3.5" />
                      <span>Sound On</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
