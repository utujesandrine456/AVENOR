"use client";

import React from "react";
import { Code2, Cpu, Layout, Shield, Plus, ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ServiceItem } from "../data/services";

interface RotatingServiceCardsProps {
  onSelectService: (service: ServiceItem) => void;
}

const carouselServices = [
  {
    id: 1,
    serviceId: "software-development",
    title: "Software Development",
    subtitle: "APPS & SYSTEMS",
    description:
      "We design and develop custom software applications that solve business problems, support daily operations, and help organizations grow.",
    icon: Code2,
    number: "01",
    iconType: "code" as const,
    capabilities: [
      "Web application development",
      "Mobile application development",
      "Custom software systems",
      "API development and integration",
      "Database-driven applications",
    ],
    shortDescription: "We design and develop custom software applications that solve business problems, support daily operations, and help organizations grow.",
  },
  {
    id: 2,
    serviceId: "business-process-automation",
    title: "Process Automation",
    subtitle: "WORKFLOW & OPS",
    description:
      "We help businesses reduce repetitive manual work by automating workflows, organizing information, and connecting everyday business processes.",
    icon: Cpu,
    number: "02",
    iconType: "cpu" as const,
    capabilities: [
      "Workflow automation",
      "Automated sales and inventory processes",
      "Digital record management",
      "Automated reporting and notifications",
      "Integration of business tools and systems",
    ],
    shortDescription: "We help businesses reduce repetitive manual work by automating workflows, organizing information, and connecting everyday business processes.",
  },
  {
    id: 3,
    serviceId: "ui-ux-design",
    title: "UI/UX Design",
    subtitle: "EXPERIENCE",
    description:
      "We design intuitive, modern, and user-friendly digital experiences that make websites and applications easier to understand and use.",
    icon: Layout,
    number: "03",
    iconType: "layout" as const,
    capabilities: [
      "User interface design",
      "User experience design",
      "Website design",
      "Application interface design",
      "Wireframes and interactive prototypes",
    ],
    shortDescription: "We design intuitive, modern, and user-friendly digital experiences that make websites and applications easier to understand and use.",
  },
  {
    id: 4,
    serviceId: "it-consulting",
    title: "IT Consulting",
    subtitle: "ARCHITECTURE",
    description:
      "We help businesses make informed technology decisions, plan suitable systems, and identify practical ways to improve digital operations.",
    icon: Shield,
    number: "04",
    iconType: "compass" as const,
    capabilities: [
      "Technology recommendations",
      "Software and system planning",
      "Technical requirements analysis",
      "System architecture guidance",
      "Technology integration planning",
    ],
    shortDescription: "We help businesses make informed technology decisions, plan suitable systems, and identify practical ways to improve digital operations.",
  },
];

export default function RotatingServiceCards({
  onSelectService,
}: RotatingServiceCardsProps) {
  const slidesRef = useRef<HTMLDivElement>(null);
  const isPausedRef = useRef(false);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [activeId, setActiveId] = useState<number | null>(null);

  useEffect(() => {
    if (!slidesRef.current) return;
    let animationId: number;
    let rotation = 0;
    let lastTime = performance.now();

    const animate = (currentTime: number) => {
      if (!isPausedRef.current) {
        const deltaTime = currentTime - lastTime;
        lastTime = currentTime;
        rotation += (360 / 18000) * deltaTime;
        if (slidesRef.current) {
          slidesRef.current.style.transform = `rotateY(${rotation}deg)`;
        }
      } else {
        lastTime = currentTime;
      }
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => { if (animationId) cancelAnimationFrame(animationId); };
  }, []);

  const handleCardClick = (service: typeof carouselServices[0]) => {
    setActiveId(service.id);
    onSelectService({
      id: service.serviceId,
      number: service.number,
      title: service.title,
      shortDescription: service.shortDescription,
      description: service.description,
      capabilities: service.capabilities,
      iconType: service.iconType,
    });
  };

  return (
    <div className="relative w-full h-120 md:h-135 flex items-center justify-center overflow-visible select-none">
      <div
        className="relative w-75 h-55 md:w-90 md:h-65"
        style={{ perspective: "2000px" }}
      >
        <div
          ref={slidesRef}
          className="absolute w-full h-full"
          style={{ transformStyle: "preserve-3d", transform: "rotateY(0deg)" }}
        >
          {carouselServices.map((service, index) => {
            const angle = (360 / carouselServices.length) * index;
            const radius = 230;
            const isHovered = hoveredId === service.id;
            const isActive = activeId === service.id;

            return (
              <div
                key={service.id}
                className="absolute"
                style={{
                  width: "270px",
                  height: "360px",
                  left: "50%",
                  top: "50%",
                  marginLeft: "-135px",
                  marginTop: "-180px",
                  transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                  transformStyle: "preserve-3d",
                  cursor: "pointer",
                }}
                onMouseEnter={() => {
                  isPausedRef.current = true;
                  setHoveredId(service.id);
                }}
                onMouseLeave={() => {
                  isPausedRef.current = false;
                  setHoveredId(null);
                }}
                onClick={() => handleCardClick(service)}
              >
                <motion.div
                  className={`relative w-full h-full rounded-2xl border overflow-hidden backdrop-blur-xl transition-all duration-500 ${
                    isActive
                      ? "bg-white border-white shadow-[0_0_50px_rgba(255,255,255,0.3)] scale-[1.06]"
                      : isHovered
                      ? "bg-black/90 border-white shadow-[0_20px_50px_rgba(255,255,255,0.18)] scale-[1.04]"
                      : "bg-black/80 border-white/15 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
                  }`}
                >
                  {/* Top progress bar */}
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-white/10 overflow-hidden">
                    <motion.div
                      className={`h-full ${isActive ? "bg-black" : "bg-white"}`}
                      initial={{ width: 0 }}
                      animate={{ width: isHovered || isActive ? "100%" : "20%" }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>

                  <div className="relative z-10 flex flex-col h-full p-6 justify-between">
                    <div>
                      <div className="flex items-start justify-between mb-5">
                        <div className="flex flex-col">
                          <span className={`text-[10px] tracking-[0.25em] mb-1 font-bold ${isActive ? "text-black/70" : "text-white/60"}`}>
                            {service.subtitle}
                          </span>
                          <div className={`h-px w-8 ${isActive ? "bg-black/30" : "bg-white/25"}`} />
                        </div>
                        <Plus size={14} className={isActive ? "text-black/40" : "text-white/30"} />
                      </div>

                      {/* Icon */}
                      <div className="flex justify-center mb-5">
                        <div className="relative">
                          <motion.div
                            className={`absolute inset-0 blur-2xl rounded-full ${isActive ? "bg-black/20" : "bg-white/15"}`}
                            animate={{
                              scale: isHovered || isActive ? [1, 1.3, 1.1] : 1,
                              opacity: isHovered || isActive ? 0.4 : 0.08,
                            }}
                            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                          />
                          <div className={`relative w-20 h-20 rounded-2xl flex items-center justify-center backdrop-blur-md border transition-all duration-500 ${
                            isActive
                              ? "bg-black/10 border-black/20"
                              : "bg-white/6 border-white/20"
                          }`}>
                            <service.icon
                              size={34}
                              className={`transition-all duration-500 ${isActive ? "text-black" : "text-white"}`}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col items-center">
                        <h3 className={`text-lg font-bold mb-2 text-center tracking-tight ${isActive ? "text-black" : "text-white"}`}>
                          {service.title}
                        </h3>
                        <p className={`text-[12px] text-center leading-relaxed font-light line-clamp-4 ${isActive ? "text-black/70" : "text-white/60"}`}>
                          {service.description}
                        </p>
                      </div>
                    </div>

                    {/* Footer */}
                    <div className={`pt-3 border-t flex items-center justify-between ${isActive ? "border-black/15" : "border-white/10"}`}>
                      <span className={`text-[10px] font-mono ${isActive ? "text-black/50" : "text-white/40"}`}>
                        {service.number} // 04
                      </span>
                      <div className={`flex items-center gap-1 text-[11px] font-semibold ${isActive ? "text-black" : "text-white/80"}`}>
                        <span>{isActive ? "Selected" : "Explore"}</span>
                        <ArrowRight size={12} />
                      </div>
                    </div>
                  </div>

                  <div className={`absolute top-4 right-4 text-[9px] font-mono ${isActive ? "text-black/25" : "text-white/20"}`}>
                    {service.number}
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
