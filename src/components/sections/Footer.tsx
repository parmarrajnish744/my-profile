"use client";

import React from "react";
import Link from "next/link";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { Code2, Github, Linkedin, Twitter, Mail, MessageSquare, ArrowUp } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full py-16 border-t border-white/10 bg-surface-container-lowest/80 backdrop-blur-xl relative z-10 text-on-surface-variant">
      <div className="max-w-container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Col 1: Brand */}
          <div className="md:col-span-5 space-y-4">
            <Link href="#home" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center">
                <Code2 className="w-5 h-5 text-primary" />
              </div>
              <span className="font-bold text-xl text-on-background tracking-tight">
                {PERSONAL_INFO.name}
              </span>
            </Link>
            <p className="text-sm text-on-surface-variant max-w-sm leading-relaxed">
              {PERSONAL_INFO.tagline} Architecting scalable web systems, cross-platform Flutter apps, and WebGL graphics.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-primary font-bold">
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <a href="#home" className="hover:text-white transition-colors">Home</a>
              <a href="#about" className="hover:text-white transition-colors">About</a>
              <a href="#skills" className="hover:text-white transition-colors">Skills</a>
              <a href="#projects" className="hover:text-white transition-colors">Projects</a>
              <a href="#experience" className="hover:text-white transition-colors">Experience</a>
              <a href="#services" className="hover:text-white transition-colors">Services</a>
              <a href="#resume" className="hover:text-white transition-colors">Resume</a>
              <a href="#contact" className="hover:text-white transition-colors">Contact</a>
              <Link href="/blog" className="hover:text-tertiary transition-colors col-span-2">Blog Articles</Link>
            </div>
          </div>

          {/* Col 3: Social Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-primary font-bold">
              Social Links
            </h4>
            <div className="flex gap-3">
              <a
                href={PERSONAL_INFO.socials.github}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-on-surface-variant hover:text-primary transition-all hover:scale-110"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={PERSONAL_INFO.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-on-surface-variant hover:text-primary transition-all hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={PERSONAL_INFO.socials.twitter}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-on-surface-variant hover:text-primary transition-all hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href={PERSONAL_INFO.socials.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-on-surface-variant hover:text-emerald-400 transition-all hover:scale-110"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 gap-4 text-xs font-mono">
          <p>&copy; {currentYear} {PERSONAL_INFO.name}. Built with Next.js, React & Tailwind CSS.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-tertiary hover:text-white transition-colors cursor-pointer"
          >
            Back to Top <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
