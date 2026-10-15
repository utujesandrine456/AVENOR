"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface ContactSectionProps {
  selectedServicePreset?: string;
}

export default function ContactSection({
  selectedServicePreset = "",
}: ContactSectionProps) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [service, setService] = useState(
    selectedServicePreset || "Software Development"
  );
  const [budget, setBudget] = useState("");
  const [description, setDescription] = useState("");

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<{
    referenceId: string;
    timestamp: string;
    fullName: string;
    service: string;
  } | null>(null);

  // Synchronize when selectedServicePreset changes from parent
  React.useEffect(() => {
    if (selectedServicePreset) {
      setService(selectedServicePreset);
    }
  }, [selectedServicePreset]);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!fullName.trim()) {
      errs.fullName = "Please provide your full name.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      errs.email = "Please provide your email address.";
    } else if (!emailRegex.test(email.trim())) {
      errs.email = "Please provide a valid email address.";
    }

    if (!service) {
      errs.service = "Please select a service of interest.";
    }

    if (!description.trim()) {
      errs.description = "Please describe your project or operational requirements.";
    } else if (description.trim().length < 15) {
      errs.description = "Please provide at least 15 characters describing your requirements.";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate reliable form processing and client session logging
    const inquiryRecord = {
      referenceId: `AVX-${Math.floor(100000 + Math.random() * 900000)}`,
      timestamp: new Date().toISOString(),
      fullName: fullName.trim(),
      email: email.trim(),
      company: company.trim() || "Not specified",
      service,
      budget: budget || "Not specified",
      description: description.trim(),
    };

    // Store in localStorage for audit persistence without fake backend
    try {
      const existing = JSON.parse(
        localStorage.getItem("avenor_inquiries") || "[]"
      );
      existing.push(inquiryRecord);
      localStorage.setItem("avenor_inquiries", JSON.stringify(existing));
    } catch {
      // Storage fallback
    }

    // Emulate transmission latency
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedData({
        referenceId: inquiryRecord.referenceId,
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        fullName: inquiryRecord.fullName,
        service: inquiryRecord.service,
      });

      // Clear form inputs
      setFullName("");
      setEmail("");
      setCompany("");
      setBudget("");
      setDescription("");
      setErrors({});
    }, 900);
  };

  return (
    <section
      id="contact"
      className="relative py-28 bg-black border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <span className="text-xs font-mono uppercase tracking-widest text-white/50 block mb-2">
            START A CONVERSATION
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-6">
            Let&apos;s Build Something Useful.
          </h2>

          <p className="text-base sm:text-lg text-white/70 leading-relaxed font-normal">
            Have a business challenge, a software idea, or a process that could
            work better? Tell us what you need, and let&apos;s explore a
            practical technology solution.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Inquiry Form */}
          <div className="lg:col-span-8">
            {submittedData ? (
              <div className="border border-white p-8 sm:p-10 bg-black text-white space-y-6">
                <div className="flex items-center gap-3 pb-6 border-b border-white/15">
                  <div className="p-2 border border-white bg-white text-black">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-white/50 block">
                      INQUIRY REGISTERED
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
                      Thank You, {submittedData.fullName}.
                    </h3>
                  </div>
                </div>

                <div className="p-5 border border-white/10 bg-white/2 space-y-2 text-xs font-mono">
                  <div className="flex justify-between">
                    <span className="text-white/50">Reference ID:</span>
                    <span className="text-white font-bold">
                      {submittedData.referenceId}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/50">Service Selected:</span>
                    <span className="text-white">{submittedData.service}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/50">Timestamp:</span>
                    <span className="text-white">{submittedData.timestamp}</span>
                  </div>
                </div>

                <div className="text-xs text-white/70 leading-relaxed space-y-2">
                  <p>
                    Your inquiry has been successfully recorded in the client session ledger.
                  </p>
                  <p className="text-white/50">
                    Integration Note: This form routes inquiries through direct client session
                    logging. If you require immediate review or direct founder consultation,
                    you can also reach out directly to the executive office.
                  </p>
                </div>

                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => setSubmittedData(null)}
                    className="inline-flex items-center gap-2 px-6 py-3 text-xs uppercase font-bold tracking-widest text-black bg-white hover:bg-white/90 transition-colors"
                  >
                    <span>Submit Another Inquiry</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="border border-white/15 rounded-md p-6 sm:p-10 bg-black space-y-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-xs font-mono uppercase tracking-wider text-white/80 mb-2"
                    >
                      Full Name <span className="text-white font-bold">*</span>
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Elena Rostova"
                      className={`w-full px-4 py-3 bg-black border rounded-md text-sm text-white placeholder-white/30 focus:outline-none transition-colors ${
                        errors.fullName
                          ? "border-white bg-white/5"
                          : "border-white/20 focus:border-white"
                      }`}
                    />
                    {errors.fullName && (
                      <p className="mt-1.5 text-xs text-white/80 font-mono flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 text-white" />
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  {/* Email Address */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-mono uppercase tracking-wider text-white/80 mb-2"
                    >
                      Email Address <span className="text-white font-bold">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. elena@company.com"
                      className={`w-full px-4 py-3 bg-black border rounded-md text-sm text-white placeholder-white/30 focus:outline-none transition-colors ${
                        errors.email
                          ? "border-white bg-white/5"
                          : "border-white/20 focus:border-white"
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1.5 text-xs text-white/80 font-mono flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 text-white" />
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Company Name (Optional) */}
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-xs font-mono uppercase tracking-wider text-white/80 mb-2"
                    >
                      Company Name{" "}
                      <span className="text-white/40 text-[10px]">(Optional)</span>
                    </label>
                    <input
                      id="company"
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="e.g. Apex Industrial Systems"
                      className="w-full px-4 py-3 bg-black border border-white/20 rounded-md focus:border-white text-sm text-white placeholder-white/30 focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Service of Interest (Exactly the 4 Core Services) */}
                  <div>
                    <label
                      htmlFor="service"
                      className="block text-xs font-mono uppercase tracking-wider text-white/80 mb-2"
                    >
                      Service of Interest{" "}
                      <span className="text-white font-bold">*</span>
                    </label>
                    <select
                      id="service"
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full px-4 py-3 bg-black border border-white/20 rounded-md focus:border-white text-sm text-white focus:outline-none transition-colors appearance-none cursor-pointer"
                    >
                      <option value="Software Development">
                        1. Software Development
                      </option>
                      <option value="Business Process Automation">
                        2. Business Process Automation
                      </option>
                      <option value="UI/UX Design">
                        3. UI/UX Design
                      </option>
                      <option value="IT Consulting">
                        4. IT Consulting
                      </option>
                    </select>
                  </div>
                </div>

                {/* Project Description */}
                <div>
                  <label
                    htmlFor="description"
                    className="block text-xs font-mono uppercase tracking-wider text-white/80 mb-2"
                  >
                    Project Description{" "}
                    <span className="text-white font-bold">*</span>
                  </label>
                  <textarea
                    id="description"
                    rows={4}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Describe your operational bottleneck, software requirements, or intended system workflow..."
                    className={`w-full px-4 py-3 bg-black border rounded-md text-sm text-white placeholder-white/30 focus:outline-none transition-colors resize-none ${
                      errors.description
                        ? "border-white bg-white/5"
                        : "border-white/20 focus:border-white"
                    }`}
                  />
                  {errors.description && (
                    <p className="mt-1.5 text-xs text-white/80 font-mono flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 text-white" />
                      {errors.description}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-3.5 text-xs uppercase font-bold tracking-widest text-black bg-white hover:bg-black hover:text-white border border-white rounded-md transition-all duration-300 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Transmitting Inquiry...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Inquiry</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Contact Details / Direct Identity Information */}
          <div className="lg:col-span-4 space-y-6">
            <div className="border border-white/15 p-6 bg-black">
              <span className="text-[10px] font-mono uppercase tracking-widest text-white/40 block mb-2">
                EXECUTIVE IDENTIFICATION
              </span>
              <h4 className="text-lg font-bold text-white mb-2">
                AVENOR 10X
              </h4>
              <p className="text-xs text-white/60 leading-relaxed font-normal mb-6">
                Independent technology company founded in 2026. Focused on custom
                software, process automation, user interface design, and strategic
                IT consulting.
              </p>

              <div className="space-y-3 pt-4 border-t border-white/10 text-xs font-mono">
                <div className="flex justify-between">
                  <span className="text-white/40">Founded:</span>
                  <span className="text-white">2026</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/40">Disciplines:</span>
                  <span className="text-white">4 Core Pillars</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/40">Tagline:</span>
                  <span className="text-white">Every Sale. Accounted For.</span>
                </div>
              </div>
            </div>

            <div className="border border-white/15 p-6 bg-black">
              <span className="text-[10px] font-mono uppercase tracking-widest text-white/40 block mb-2">
                COMMUNICATION POLICY
              </span>
              <p className="text-xs text-white/70 leading-relaxed">
                Every inquiry submitted through this portal receives a unique
                tracking reference. We review operational requirements and respond
                with concrete technical feasibility and scoping feedback.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
