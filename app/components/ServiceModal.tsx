"use client";

import React, { useEffect } from "react";
import { X, Check, ArrowRight, Code, Cpu, Layout, Compass } from "lucide-react";
import { ServiceItem } from "../data/services";

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onInquire: (serviceTitle: string) => void;
}

export default function ServiceModal({
  service,
  onClose,
  onInquire,
}: ServiceModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (service) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [service, onClose]);

  if (!service) return null;

  const getIcon = (type: ServiceItem["iconType"]) => {
    switch (type) {
      case "code":
        return <Code className="w-6 h-6 text-white" />;
      case "cpu":
        return <Cpu className="w-6 h-6 text-white" />;
      case "layout":
        return <Layout className="w-6 h-6 text-white" />;
      case "compass":
        return <Compass className="w-6 h-6 text-white" />;
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Backdrop click */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Card */}
      <div className="relative w-full max-w-2xl bg-black border border-white/20 p-6 sm:p-10 z-10 shadow-[0_0_50px_rgba(255,255,255,0.1)]">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-white/60 hover:text-white border border-white/20 hover:border-white transition-colors"
          aria-label="Close service modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Identification */}
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2.5 border border-white/20 bg-white/5">
            {getIcon(service.iconType)}
          </div>
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-white/50">
              SERVICE {service.number} // 2026 SPECIFICATION
            </span>
            <h2 id="modal-title" className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {service.title}
            </h2>
          </div>
        </div>

        {/* Description */}
        <div className="mb-8 pb-6 border-b border-white/10">
          <h4 className="text-xs uppercase tracking-widest font-mono text-white/40 mb-2">
            Overview &amp; Purpose
          </h4>
          <p className="text-sm sm:text-base text-white/80 leading-relaxed font-normal">
            {service.description}
          </p>
        </div>

        {/* Capabilities */}
        <div className="mb-8">
          <h4 className="text-xs uppercase tracking-widest font-mono text-white/40 mb-4">
            Key Capabilities &amp; Deliverables
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {service.capabilities.map((capability, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2.5 p-3 border border-white/10 bg-white/2"
              >
                <div className="mt-0.5 p-0.5 border border-white/30 text-white">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <span className="text-xs sm:text-sm text-white/90">
                  {capability}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-6 border-t border-white/10">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-3 text-xs uppercase tracking-widest text-white/60 hover:text-white border border-white/20 hover:border-white transition-colors"
          >
            Back to Services
          </button>

          <button
            type="button"
            onClick={() => {
              onInquire(service.title);
              onClose();
            }}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 text-xs uppercase font-bold tracking-widest text-black bg-white hover:bg-black hover:text-white border border-white transition-all duration-300"
          >
            <span>Inquire About {service.title}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
