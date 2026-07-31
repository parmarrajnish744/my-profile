"use client";

import React from "react";
import { motion } from "framer-motion";
import { EXPERIENCE_DATA } from "@/data/portfolioData";
import { Calendar, MapPin, CheckCircle2, Sparkles } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6 lg:px-8 max-w-container mx-auto">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <span className="text-xs font-mono text-tertiary uppercase tracking-widest mb-3 flex items-center gap-1">
          <Sparkles className="w-4 h-4" /> Career Journey
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-on-background tracking-tight mb-4">
          Professional <span className="text-primary italic">Experience</span>
        </h2>
        <p className="text-on-surface-variant max-w-xl text-base sm:text-lg">
          My track record leading engineering initiatives, building full-stack platforms, and scaling teams.
        </p>
      </div>

      {/* Vertical Timeline */}
      <div className="relative pl-6 sm:pl-8 lg:pl-12 border-l-2 border-white/10 space-y-12">
        {EXPERIENCE_DATA.map((exp, idx) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            className="relative"
          >
            {/* Timeline Dot Indicator */}
            <div className="absolute -left-[31px] sm:-left-[39px] lg:-left-[55px] top-1.5 w-5 h-5 rounded-full bg-primary border-4 border-background shadow-[0_0_15px_rgba(173,198,255,0.8)]" />

            {/* Content Glass Card */}
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-white/10 hover:border-primary/40 transition-all duration-300 shadow-xl">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4 pb-4 border-b border-white/10">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-on-background">
                    {exp.role}
                  </h3>
                  <div className="flex flex-wrap items-center gap-3 mt-1 text-sm">
                    <span className="text-primary font-bold">{exp.company}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                    <span className="text-on-surface-variant flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-tertiary" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 font-mono text-xs text-tertiary flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {exp.duration}
                  </span>
                </div>
              </div>

              {/* Role Description */}
              <p className="text-on-surface-variant text-base mb-6 leading-relaxed">
                {exp.description}
              </p>

              {/* Achievements Bullet Points */}
              <div className="space-y-2.5 mb-6">
                <h4 className="text-xs font-mono uppercase tracking-widest text-primary font-bold">
                  Key Achievements & Impact:
                </h4>
                {exp.achievements.map((ach, aIdx) => (
                  <div key={aIdx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                    <span className="text-sm text-on-surface-variant leading-relaxed">
                      {ach}
                    </span>
                  </div>
                ))}
              </div>

              {/* Tech Stack Chips */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                {exp.techStack.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-3 py-1 rounded-lg bg-surface-container-low border border-white/5 text-xs font-mono text-on-surface-variant"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
