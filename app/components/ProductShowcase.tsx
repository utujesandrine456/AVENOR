"use client";

import React, { useState } from "react";
import {
  ArrowRight,
  AlertTriangle,
  CheckCircle2,
  Clock,
  RefreshCw,
  Search,
  Filter,
  Check,
} from "lucide-react";

interface RecordItem {
  id: string;
  item: string;
  workerA: { name: string; qty: number; value: number };
  workerB: { name: string; qty: number; value: number };
  status: "matched" | "discrepancy" | "approved";
  time: string;
}

export default function ProductShowcase() {
  const [filterMode, setFilterMode] = useState<"all" | "discrepancy" | "matched">("all");
  const [records, setRecords] = useState<RecordItem[]>([
    {
      id: "TX-4091",
      item: "Industrial Valve Unit B-14",
      workerA: { name: "Worker J. Reyes", qty: 14, value: 4200 },
      workerB: { name: "Worker M. Vance", qty: 12, value: 3600 },
      status: "discrepancy",
      time: "09:42 AM",
    },
    {
      id: "TX-4092",
      item: "Heavy Duty Actuator Series X",
      workerA: { name: "Worker J. Reyes", qty: 8, value: 3200 },
      workerB: { name: "Worker M. Vance", qty: 8, value: 3200 },
      status: "matched",
      time: "10:15 AM",
    },
    {
      id: "TX-4093",
      item: "Pneumatic Control Relay 24V",
      workerA: { name: "Worker J. Reyes", qty: 25, value: 2500 },
      workerB: { name: "Worker M. Vance", qty: 20, value: 2000 },
      status: "discrepancy",
      time: "11:04 AM",
    },
    {
      id: "TX-4094",
      item: "Hydraulic Seal Kit (Pack of 50)",
      workerA: { name: "Worker J. Reyes", qty: 5, value: 1750 },
      workerB: { name: "Worker M. Vance", qty: 5, value: 1750 },
      status: "approved",
      time: "11:30 AM",
    },
  ]);

  const [notification, setNotification] = useState<string | null>(null);

  const handleApprove = (id: string) => {
    setRecords((prev) =>
      prev.map((rec) =>
        rec.id === id ? { ...rec, status: "approved" as const } : rec
      )
    );
    showNotice(`Record ${id} approved by Administrator. Stock updated.`);
  };

  const handleResolveDiscrepancy = (id: string, chosenQty: number) => {
    setRecords((prev) =>
      prev.map((rec) =>
        rec.id === id
          ? {
              ...rec,
              status: "approved" as const,
              workerB: { ...rec.workerB, qty: chosenQty },
            }
          : rec
      )
    );
    showNotice(
      `Discrepancy in ${id} resolved. Confirmed quantity: ${chosenQty} units.`
    );
  };

  const showNotice = (msg: string) => {
    setNotification(msg);
    setTimeout(() => {
      setNotification(null);
    }, 4000);
  };

  const filteredRecords = records.filter((r) => {
    if (filterMode === "discrepancy") return r.status === "discrepancy";
    if (filterMode === "matched") return r.status === "matched" || r.status === "approved";
    return true;
  });

  const workflowSteps = [
    {
      step: "01",
      title: "Worker Submission",
      desc: "Workers record sales independently across floor shifts.",
    },
    {
      step: "02",
      title: "Automated Cross-Check",
      desc: "The system compares the submitted records automatically.",
    },
    {
      step: "03",
      title: "Admin Review",
      desc: "Matching records are reviewed and approved by an administrator.",
    },
    {
      step: "04",
      title: "Discrepancy Flagging",
      desc: "Variances are highlighted for supervisory investigation.",
    },
    {
      step: "05",
      title: "Inventory Update",
      desc: "Administrator confirms figures and updates inventory accurately.",
    },
  ];

  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const elem = document.querySelector("#contact");
    if (elem) elem.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="product"
      className="relative py-28 bg-black bg-grid-pattern border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-6">
            Clearer Sales. More Accurate Stock.
          </h2>

          <p className="text-base sm:text-lg text-white/70 leading-relaxed font-normal">
            Our sales and inventory management application helps businesses compare
            sales records submitted by different workers, identify discrepancies,
            and maintain accurate stock records through administrator review and
            approval.
          </p>
        </div>

        {/* 5-Step Workflow Pipeline */}
        <div className="mb-16 pb-12 border-b border-white/10">
          <div className="mb-6 flex items-center justify-between">
            <span className="text-xs font-mono uppercase tracking-widest text-white/40">
              CORE WORKFLOW ENGINE // 5-STAGE VALIDATION PIPELINE
            </span>
            <span className="text-xs font-mono text-white/60">
              SYSTEM STANDARD
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {workflowSteps.map((ws, i) => (
              <div
                key={ws.step}
                className="relative bg-black border border-white/15 p-5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4 pb-2 border-b border-white/10">
                    <span className="font-mono text-xs font-bold text-white">
                      STAGE {ws.step}
                    </span>
                    {i < 4 && (
                      <span className="hidden md:inline text-white/30 text-xs">
                        →
                      </span>
                    )}
                  </div>
                  <h4 className="text-sm font-bold text-white mb-2">
                    {ws.title}
                  </h4>
                  <p className="text-xs text-white/60 leading-relaxed">
                    {ws.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Software Mockup */}
        <div className="border border-white/20 bg-black shadow-[0_0_50px_rgba(255,255,255,0.06)] overflow-hidden">
          {/* Mockup Window Titlebar */}
          <div className="bg-black border-b border-white/15 px-4 sm:px-6 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex space-x-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-white/20 border border-white/40"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-white/20 border border-white/40"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-white/20 border border-white/40"></span>
              </div>
              <span className="text-xs font-mono text-white/60 hidden sm:inline">
                AVENOR 10X — Sales &amp; Inventory Management System v2.6
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
              <span className="text-[11px] font-mono text-white/70 uppercase tracking-widest">
                LIVE AUDIT ENGINE
              </span>
            </div>
          </div>

          {/* Toast Notification Banner */}
          {notification && (
            <div className="bg-white text-black px-6 py-2.5 text-xs font-mono flex items-center justify-between transition-all">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-black" />
                <span>{notification}</span>
              </div>
              <span className="text-[10px] uppercase font-bold tracking-widest">
                [SYSTEM ACTION CONFIRMED]
              </span>
            </div>
          )}

          {/* Software Inner Dashboard */}
          <div className="p-4 sm:p-8 bg-black space-y-8">
            {/* Top Metric Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 border border-white/15 bg-white/2">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono uppercase text-white/50 tracking-wider">
                    Total Submissions
                  </span>
                  <Clock className="w-3.5 h-3.5 text-white/40" />
                </div>
                <div className="text-2xl font-bold text-white font-mono">
                  {records.length} Batches
                </div>
                <span className="text-[10px] text-white/50">
                  Real-time worker sync
                </span>
              </div>

              <div className="p-4 border border-white/15 bg-white/2">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono uppercase text-white/50 tracking-wider">
                    Flagged Discrepancies
                  </span>
                  <AlertTriangle className="w-3.5 h-3.5 text-white" />
                </div>
                <div className="text-2xl font-bold text-white font-mono">
                  {records.filter((r) => r.status === "discrepancy").length} Items
                </div>
                <span className="text-[10px] text-white/50">
                  Requires supervisory sign-off
                </span>
              </div>

              <div className="p-4 border border-white/15 bg-white/2">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono uppercase text-white/50 tracking-wider">
                    Approved &amp; Synced
                  </span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-white/40" />
                </div>
                <div className="text-2xl font-bold text-white font-mono">
                  {records.filter((r) => r.status === "approved").length} Records
                </div>
                <span className="text-[10px] text-white/50">
                  Inventory accurately debited
                </span>
              </div>

              <div className="p-4 border border-white/15 bg-white/2">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono uppercase text-white/50 tracking-wider">
                    Ledger Status
                  </span>
                  <RefreshCw className="w-3.5 h-3.5 text-white/40" />
                </div>
                <div className="text-2xl font-bold text-white font-mono">
                  Verified
                </div>
                <span className="text-[10px] text-white/50">
                  Admin approval required
                </span>
              </div>
            </div>

            {/* Filter and Action Bar */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
              <div className="flex items-center space-x-2">
                <Filter className="w-4 h-4 text-white/40" />
                <button
                  type="button"
                  onClick={() => setFilterMode("all")}
                  className={`px-3 py-1 text-xs font-mono tracking-wider transition-colors border ${
                    filterMode === "all"
                      ? "bg-white text-black border-white font-bold"
                      : "bg-black text-white/60 border-white/20 hover:border-white"
                  }`}
                >
                  All ({records.length})
                </button>
                <button
                  type="button"
                  onClick={() => setFilterMode("discrepancy")}
                  className={`px-3 py-1 text-xs font-mono tracking-wider transition-colors border ${
                    filterMode === "discrepancy"
                      ? "bg-white text-black border-white font-bold"
                      : "bg-black text-white/60 border-white/20 hover:border-white"
                  }`}
                >
                  Discrepancies ({records.filter((r) => r.status === "discrepancy").length})
                </button>
                <button
                  type="button"
                  onClick={() => setFilterMode("matched")}
                  className={`px-3 py-1 text-xs font-mono tracking-wider transition-colors border ${
                    filterMode === "matched"
                      ? "bg-white text-black border-white font-bold"
                      : "bg-black text-white/60 border-white/20 hover:border-white"
                  }`}
                >
                  Matched / Approved
                </button>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-white/50">
                <Search className="w-3.5 h-3.5" />
                <span>Worker Comparison Table (Interactive Mockup)</span>
              </div>
            </div>

            {/* Comparison Table */}
            <div className="overflow-x-auto border border-white/10">
              <table className="w-full text-left text-xs font-mono">
                <thead>
                  <tr className="border-b border-white/15 bg-white/3 text-white/50 uppercase tracking-wider">
                    <th className="py-3 px-4">Record ID</th>
                    <th className="py-3 px-4">Inventory Item</th>
                    <th className="py-3 px-4">Worker A Entry</th>
                    <th className="py-3 px-4">Worker B Entry</th>
                    <th className="py-3 px-4">Variance / Status</th>
                    <th className="py-3 px-4 text-right">Administrator Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {filteredRecords.map((r) => {
                    const diff = Math.abs(r.workerA.qty - r.workerB.qty);
                    const isDiscrepancy = r.status === "discrepancy";

                    return (
                      <tr
                        key={r.id}
                        className={`transition-colors ${
                          isDiscrepancy ? "bg-white/4" : "hover:bg-white/2"
                        }`}
                      >
                        <td className="py-3.5 px-4 font-bold text-white">
                          {r.id}
                        </td>
                        <td className="py-3.5 px-4 text-white/90">
                          {r.item}
                        </td>
                        <td className="py-3.5 px-4 text-white/80">
                          <span className="text-white font-bold">{r.workerA.qty} units</span>
                          <span className="text-[10px] text-white/40 block">
                            {r.workerA.name}
                          </span>
                        </td>
                        <td className="py-3.5 px-4 text-white/80">
                          <span className="text-white font-bold">{r.workerB.qty} units</span>
                          <span className="text-[10px] text-white/40 block">
                            {r.workerB.name}
                          </span>
                        </td>
                        <td className="py-3.5 px-4">
                          {r.status === "discrepancy" ? (
                            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 border border-white text-white bg-black text-[10px] font-bold uppercase tracking-wider">
                              <AlertTriangle className="w-3 h-3 text-white" />
                              Δ {diff} unit variance
                            </span>
                          ) : r.status === "approved" ? (
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 border border-white/30 text-white/80 text-[10px] uppercase tracking-wider">
                              <Check className="w-3 h-3 text-white" />
                              Approved &amp; Synced
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 border border-white/20 text-white/60 text-[10px] uppercase tracking-wider">
                              <Clock className="w-3 h-3 text-white/60" />
                              Exact Match
                            </span>
                          )}
                        </td>
                        <td className="py-3.5 px-4 text-right">
                          {r.status === "discrepancy" ? (
                            <div className="inline-flex items-center gap-1.5">
                              <button
                                type="button"
                                onClick={() =>
                                  handleResolveDiscrepancy(r.id, r.workerA.qty)
                                }
                                className="px-2 py-1 text-[10px] uppercase font-bold tracking-wider bg-white text-black hover:bg-black hover:text-white border border-white transition-colors"
                                title="Confirm Worker A quantity"
                              >
                                Accept ({r.workerA.qty})
                              </button>
                              <button
                                type="button"
                                onClick={() =>
                                  handleResolveDiscrepancy(r.id, r.workerB.qty)
                                }
                                className="px-2 py-1 text-[10px] uppercase font-bold tracking-wider border border-white/40 hover:border-white text-white transition-colors"
                                title="Confirm Worker B quantity"
                              >
                                Accept ({r.workerB.qty})
                              </button>
                            </div>
                          ) : r.status === "matched" ? (
                            <button
                              type="button"
                              onClick={() => handleApprove(r.id)}
                              className="px-3 py-1 text-[10px] uppercase font-bold tracking-wider bg-white text-black hover:bg-white/80 transition-colors"
                            >
                              Approve Record
                            </button>
                          ) : (
                            <span className="text-[10px] text-white/40 font-mono">
                              Stock Updated
                            </span>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Note & CTA bar */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 border-t border-white/10">
              <span className="text-[11px] font-mono text-white/40">
                * Simulated software preview demonstrating the discrepancy comparison
                and approval engine.
              </span>

              <a
                href="#contact"
                onClick={scrollToContact}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-xs uppercase font-bold tracking-widest text-black bg-white hover:bg-black hover:text-white border border-white transition-all duration-300"
              >
                <span>Discuss a Similar System</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
