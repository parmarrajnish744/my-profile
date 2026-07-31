"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { PERSONAL_INFO, EDUCATION_DATA } from "@/data/portfolioData";
import {
  UserCheck,
  GraduationCap,
  Languages,
  MapPin,
  Briefcase,
  Sparkles,
  CheckCircle2
} from "lucide-react";

export function About() {
  const [activeTab, setActiveTab] = useState<"bio" | "education" | "languages">("bio");

  return (
    <section id="about" className="py-24 px-6 lg:px-8 max-w-container mx-auto relative">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <span className="text-xs font-mono text-tertiary uppercase tracking-widest mb-3 flex items-center gap-1.5">
          <Sparkles className="w-4 h-4" /> About Me
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-on-background tracking-tight mb-4">
          Engineering Excellence & <span className="text-primary italic">Technical Precision</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-tertiary rounded-full" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Col: Core Story & Highlights */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-6 flex flex-col gap-6"
        >
          <div className="glass-card p-8 rounded-3xl border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl pointer-events-none" />
            <h3 className="text-2xl font-bold text-on-background mb-4">
              Designing Scalable Digital Products
            </h3>
            <p className="text-on-surface-variant text-base sm:text-lg leading-relaxed mb-6">
              {PERSONAL_INFO.bioLong}
            </p>

            {/* Quick Specs Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-surface-container-low/60 border border-white/5 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs font-mono text-on-surface-variant uppercase">Location</span>
                  <span className="text-sm font-semibold text-on-background">{PERSONAL_INFO.location}</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-surface-container-low/60 border border-white/5 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-tertiary/10 flex items-center justify-center text-tertiary">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs font-mono text-on-surface-variant uppercase">Experience</span>
                  <span className="text-sm font-semibold text-on-background">2+ Years Experience</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Col: Tabbed Detail Switcher */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-6"
        >
          {/* Tab buttons */}
          <div className="flex gap-2 p-1.5 rounded-2xl glass-card border border-white/10 mb-6">
            <button
              onClick={() => setActiveTab("bio")}
              className={`flex-1 py-3 rounded-xl text-sm font-bold transition-all flex items-center justify-center gap-2 ${
                activeTab === "bio"
                  ? "bg-primary text-on-primary shadow-lg"
                  : "text-on-surface-variant hover:text-white"
              }`}
            >
              <UserCheck className="w-4 h-4" /> Philosophy
            </button>
            <button
              onClick={() => setActiveTab("education")}
              className={`flex-1 py-3 rounded-xl text-sm font-bold transition-all flex items-center justify-center gap-2 ${
                activeTab === "education"
                  ? "bg-primary text-on-primary shadow-lg"
                  : "text-on-surface-variant hover:text-white"
              }`}
            >
              <GraduationCap className="w-4 h-4" /> Education
            </button>
            <button
              onClick={() => setActiveTab("languages")}
              className={`flex-1 py-3 rounded-xl text-sm font-bold transition-all flex items-center justify-center gap-2 ${
                activeTab === "languages"
                  ? "bg-primary text-on-primary shadow-lg"
                  : "text-on-surface-variant hover:text-white"
              }`}
            >
              <Languages className="w-4 h-4" /> Languages
            </button>
          </div>

          {/* Tab Content Box */}
          <div className="glass-card p-8 rounded-3xl border border-white/10 min-h-[320px] flex flex-col justify-center">
            {activeTab === "bio" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-4"
              >
                <h4 className="text-xl font-bold text-primary">Core Engineering Values</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-tertiary shrink-0 mt-0.5" />
                    <span className="text-on-surface-variant text-sm sm:text-base">
                      <strong className="text-on-background">Clean Architecture:</strong> Prioritizing modular, type-safe, maintainable code over quick hacks.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-tertiary shrink-0 mt-0.5" />
                    <span className="text-on-surface-variant text-sm sm:text-base">
                      <strong className="text-on-background">Performance-First:</strong> Optimizing layout shifts, bundle sizes, and 60FPS UI renders on all client devices.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-tertiary shrink-0 mt-0.5" />
                    <span className="text-on-surface-variant text-sm sm:text-base">
                      <strong className="text-on-background">Continuous Growth:</strong> Staying ahead of modern WebGL, cloud microservices, and AI-driven workflows.
                    </span>
                  </li>
                </ul>
              </motion.div>
            )}

            {activeTab === "education" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                {EDUCATION_DATA.map((edu, idx) => (
                  <div key={idx} className="border-l-2 border-primary/40 pl-4 space-y-1">
                    <div className="flex justify-between items-start">
                      <h4 className="text-base font-bold text-on-background">{edu.degree}</h4>
                      <span className="text-xs font-mono text-tertiary">{edu.duration}</span>
                    </div>
                    <p className="text-xs font-medium text-primary">{edu.institution}</p>
                    <p className="text-xs text-on-surface-variant">{edu.details}</p>
                  </div>
                ))}
              </motion.div>
            )}

            {activeTab === "languages" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                {PERSONAL_INFO.languages.map((lang, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-surface-container-low/60 border border-white/5">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-bold text-on-background text-sm">{lang.name}</span>
                    </div>
                    <span className="text-xs text-tertiary font-mono">{lang.proficiency}</span>
                  </div>
                ))}
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
