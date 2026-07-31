"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { SKILLS_DATA } from "@/data/portfolioData";
import { Skill } from "@/lib/types";
import {
  Code,
  FileCode,
  Palette,
  Sparkles,
  Server,
  Cpu,
  Layers,
  Smartphone,
  Database,
  Zap,
  GitBranch,
  Cloud
} from "lucide-react";

export function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Frontend", "Backend", "Mobile & DB", "Tools & Cloud"];

  const filteredSkills =
    selectedCategory === "All"
      ? SKILLS_DATA
      : SKILLS_DATA.filter((s) => s.category === selectedCategory);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Code": return <Code className="w-5 h-5" />;
      case "FileCode": return <FileCode className="w-5 h-5" />;
      case "Palette": return <Palette className="w-5 h-5" />;
      case "Sparkles": return <Sparkles className="w-5 h-5" />;
      case "Server": return <Server className="w-5 h-5" />;
      case "Cpu": return <Cpu className="w-5 h-5" />;
      case "Layers": return <Layers className="w-5 h-5" />;
      case "Smartphone": return <Smartphone className="w-5 h-5" />;
      case "Database": return <Database className="w-5 h-5" />;
      case "Zap": return <Zap className="w-5 h-5" />;
      case "GitBranch": return <GitBranch className="w-5 h-5" />;
      case "Cloud": return <Cloud className="w-5 h-5" />;
      default: return <Code className="w-5 h-5" />;
    }
  };

  return (
    <section id="skills" className="py-24 px-6 lg:px-8 max-w-container mx-auto">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-12">
        <span className="text-xs font-mono text-tertiary uppercase tracking-widest mb-3">
          Capabilities
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-on-background tracking-tight mb-4">
          Technical Stack & <span className="text-primary italic">Proficiency</span>
        </h2>
        <p className="text-on-surface-variant max-w-xl text-base sm:text-lg">
          Mastered frameworks, programming languages, cloud systems, and specialized tools.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
              selectedCategory === cat
                ? "bg-primary text-on-primary font-bold shadow-[0_0_20px_rgba(173,198,255,0.4)] scale-105"
                : "glass-card text-on-surface-variant hover:text-white hover:border-white/30"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSkills.map((skill, idx) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            className="glass-card p-6 rounded-2xl border border-white/10 hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden"
          >
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  {getIcon(skill.iconName)}
                </div>
                <div>
                  <h3 className="font-bold text-on-background text-base">{skill.name}</h3>
                  <span className="text-[11px] font-mono text-tertiary uppercase tracking-wider">
                    {skill.level}
                  </span>
                </div>
              </div>
              <span className="text-sm font-mono font-bold text-primary">{skill.percentage}%</span>
            </div>

            {/* Animated Progress Bar */}
            <div className="w-full h-2 bg-surface-container-low/80 rounded-full overflow-hidden p-0.5 border border-white/5">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.percentage}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
                className="h-full rounded-full bg-gradient-to-r from-primary via-secondary to-tertiary shadow-[0_0_10px_rgba(173,198,255,0.6)]"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
