"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { PROJECTS_DATA } from "@/data/portfolioData";
import { Project } from "@/lib/types";
import { Modal } from "../ui/Modal";
import {
  ExternalLink,
  Github,
  Sparkles,
  CheckCircle2,
  Maximize2
} from "lucide-react";

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = ["All", "Full Stack", "Mobile", "Web / UI", "Systems"];

  const filteredProjects =
    selectedCategory === "All"
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 px-6 lg:px-8 max-w-container mx-auto">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-12">
        <span className="text-xs font-mono text-tertiary uppercase tracking-widest mb-3 flex items-center gap-1">
          <Sparkles className="w-4 h-4" /> Portfolio Showcase
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-on-background tracking-tight mb-4">
          Featured <span className="text-primary italic">Projects</span>
        </h2>
        <p className="text-on-surface-variant max-w-2xl text-base sm:text-lg">
          A curated selection of production applications, custom WebGL graphics, cross-platform mobile products, and backend systems.
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

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="glass-card rounded-3xl overflow-hidden flex flex-col h-full border border-white/10 hover:border-primary/40 transition-all duration-500 hover:-translate-y-2 group shadow-xl"
          >
            {/* Image Container */}
            <div className="relative h-56 w-full overflow-hidden bg-surface-container-low">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 380px"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

              {/* Top Category Badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className="px-3 py-1 rounded-full bg-background/80 backdrop-blur-md border border-white/20 text-[11px] font-mono font-medium text-tertiary">
                  {project.category}
                </span>
              </div>

              {/* Quick View Lightbox trigger button */}
              <button
                onClick={() => setActiveModalProject(project)}
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-background/80 backdrop-blur-md border border-white/20 text-on-surface-variant hover:text-white flex items-center justify-center transition-transform active:scale-95"
                title="View Full Details"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>

            {/* Content Container */}
            <div className="p-6 sm:p-8 flex flex-col flex-grow">
              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.slice(0, 3).map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-1 rounded-lg bg-primary/10 border border-primary/20 text-primary text-[11px] font-mono uppercase tracking-wider"
                  >
                    {tag}
                  </span>
                ))}
                {project.tags.length > 3 && (
                  <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-on-surface-variant text-[11px] font-mono">
                    +{project.tags.length - 3}
                  </span>
                )}
              </div>

              {/* Title & Description */}
              <h3
                onClick={() => setActiveModalProject(project)}
                className="text-xl font-bold text-on-background mb-3 hover:text-primary transition-colors cursor-pointer"
              >
                {project.title}
              </h3>
              <p className="text-on-surface-variant text-sm mb-6 flex-grow leading-relaxed line-clamp-3">
                {project.description}
              </p>

              {/* Metrics pill if present */}
              {project.metrics && (
                <div className="mb-6 p-2.5 rounded-xl bg-surface-container-low/80 border border-white/5 text-xs font-mono text-tertiary flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  {project.metrics}
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4 border-t border-white/10 mt-auto">
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 bg-primary text-on-primary py-2.5 rounded-xl font-bold text-xs sm:text-sm text-center transition-all duration-300 hover:shadow-[0_0_20px_rgba(173,198,255,0.4)] active:scale-95 flex items-center justify-center gap-1.5"
                >
                  Live Demo <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2.5 rounded-xl glass-card text-on-surface hover:text-white transition-all active:scale-95 flex items-center justify-center gap-1.5 text-xs sm:text-sm"
                >
                  <Github className="w-4 h-4" /> Code
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Detail Lightbox Modal */}
      {activeModalProject && (
        <Modal
          isOpen={!!activeModalProject}
          onClose={() => setActiveModalProject(null)}
          title={activeModalProject.title}
        >
          <div className="space-y-6">
            <div className="relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden border border-white/10">
              <Image
                src={activeModalProject.image}
                alt={activeModalProject.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {activeModalProject.tags.map((t, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-mono"
                >
                  {t}
                </span>
              ))}
            </div>

            <p className="text-on-surface-variant text-base leading-relaxed">
              {activeModalProject.fullDescription}
            </p>

            {activeModalProject.highlights && (
              <div className="space-y-2">
                <h4 className="text-sm font-bold text-primary uppercase font-mono tracking-wider">
                  Key Technical Accomplishments:
                </h4>
                <ul className="space-y-1.5">
                  {activeModalProject.highlights.map((h, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-on-surface-variant">
                      <CheckCircle2 className="w-4 h-4 text-tertiary shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="flex gap-4 pt-4 border-t border-white/10">
              <a
                href={activeModalProject.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="bg-primary text-on-primary font-bold px-6 py-3 rounded-xl text-sm flex items-center gap-2"
              >
                Launch Live Demo <ExternalLink className="w-4 h-4" />
              </a>
              <a
                href={activeModalProject.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="glass-card text-on-surface font-bold px-6 py-3 rounded-xl text-sm flex items-center gap-2"
              >
                <Github className="w-4 h-4" /> View GitHub Repository
              </a>
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
}
