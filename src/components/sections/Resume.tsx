"use client";

import React, { useState } from "react";

import confetti from "canvas-confetti";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { Download, FileText, CheckCircle2, Sparkles, Eye } from "lucide-react";

export function Resume() {
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = () => {
    // Trigger celebratory confetti burst
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.7 },
      colors: ["#adc6ff", "#d0bcff", "#4cd7f6"],
    });

    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 4000);

    // Dynamic mock PDF file trigger
    const link = document.createElement("a");
    link.href = "#";
    link.download = `Parmar_Rajnesh_Resume.pdf`;
    document.body.appendChild(link);
    // In real environment user receives generated PDF
  };

  return (
    <section id="resume" className="py-24 px-6 lg:px-8 max-w-container mx-auto">
      <div className="glass-card rounded-3xl p-8 sm:p-12 border border-white/10 relative overflow-hidden bg-gradient-to-br from-surface-container-high/60 via-background to-surface-container/60 shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Text & Specs */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-mono text-tertiary uppercase tracking-widest flex items-center gap-1.5">
              <FileText className="w-4 h-4" /> Curriculum Vitae
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-on-background tracking-tight">
              Download Full <span className="text-primary italic">Resume / CV</span>
            </h2>
            <p className="text-on-surface-variant text-base sm:text-lg leading-relaxed">
              Get an in-depth breakdown of my technical architectural achievements, client case studies, education history, and specialized tools.
            </p>

            {/* Feature Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2 text-sm text-on-surface-variant">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>2+ Years Software Dev Experience</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-on-surface-variant">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>BCA & MCA Computer Applications</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-on-surface-variant">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Full-Stack & Flutter Specialist</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-on-surface-variant">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Available for Immediate Role</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-6">
              <button
                onClick={handleDownload}
                className="bg-primary text-on-primary px-8 py-4 rounded-xl font-bold transition-all duration-300 hover:shadow-[0_0_30px_rgba(173,198,255,0.5)] active:scale-95 flex items-center gap-2 text-base shadow-lg"
              >
                <Download className="w-5 h-5" />
                {downloaded ? "Resume Downloaded!" : "Download Resume (PDF)"}
              </button>

              <a
                href={PERSONAL_INFO.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-4 rounded-xl font-bold border border-white/20 glass-card text-on-background hover:bg-white/10 transition-all active:scale-95 flex items-center gap-2 text-base"
              >
                <Eye className="w-5 h-5 text-tertiary" /> View LinkedIn Profile
              </a>
            </div>
          </div>

          {/* Graphic Document Mockup */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="w-full max-w-[340px] aspect-[1/1.3] glass-card rounded-2xl border border-white/20 p-6 shadow-2xl relative overflow-hidden group">
              <div className="flex justify-between items-center pb-4 border-b border-white/10 mb-4">
                <div>
                  <h4 className="font-bold text-on-background text-sm">{PERSONAL_INFO.name}</h4>
                  <span className="text-[10px] font-mono text-tertiary">{PERSONAL_INFO.roleTitle}</span>
                </div>
                <Sparkles className="w-4 h-4 text-primary" />
              </div>

              {/* Mock skeleton text lines */}
              <div className="space-y-3">
                <div className="w-3/4 h-2 bg-white/20 rounded-full" />
                <div className="w-full h-2 bg-white/10 rounded-full" />
                <div className="w-5/6 h-2 bg-white/10 rounded-full" />
                <div className="w-2/3 h-2 bg-white/10 rounded-full" />
                <div className="pt-2 border-t border-white/10 space-y-2">
                  <div className="w-1/2 h-2 bg-primary/40 rounded-full" />
                  <div className="w-full h-1.5 bg-white/10 rounded-full" />
                  <div className="w-4/5 h-1.5 bg-white/10 rounded-full" />
                </div>
              </div>

              {/* Hover Badge */}
              <div className="absolute inset-0 bg-background/80 backdrop-blur-sm flex flex-col items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <FileText className="w-10 h-10 text-primary animate-bounce" />
                <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                  Click Download to Save PDF
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
