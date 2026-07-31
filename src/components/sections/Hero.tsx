"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { PERSONAL_INFO } from "@/data/portfolioData";
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Twitter,
  Mail,
  MessageSquare,
  CheckCircle2,
  Terminal,
  Code2
} from "lucide-react";

export function Hero() {
  const [typingIndex, setTypingIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayedText, setDisplayedText] = useState("");

  const titles = PERSONAL_INFO.typingTitles;

  useEffect(() => {
    const currentTitle = titles[typingIndex];
    let timer: NodeJS.Timeout;

    if (isDeleting) {
      if (charIndex > 0) {
        timer = setTimeout(() => {
          setDisplayedText(currentTitle.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        }, 40);
      } else {
        setIsDeleting(false);
        setTypingIndex((prev) => (prev + 1) % titles.length);
      }
    } else {
      if (charIndex < currentTitle.length) {
        timer = setTimeout(() => {
          setDisplayedText(currentTitle.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        }, 80);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
      }
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, typingIndex, titles]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-6 lg:px-8 max-w-container mx-auto"
    >
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Bio & CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 flex flex-col items-start"
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/25 mb-6 backdrop-blur-md">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-xs font-mono text-primary font-medium tracking-wide uppercase">
              {PERSONAL_INFO.status}
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-on-background tracking-tight leading-[1.1] mb-6">
            Hi, I&apos;m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-tertiary">
              {PERSONAL_INFO.name}
            </span>
          </h1>

          {/* Dynamic Typing Title */}
          <div className="h-12 mb-6 flex items-center">
            <p className="text-xl sm:text-2xl font-mono text-on-surface-variant font-medium flex items-center gap-1">
              <Terminal className="w-5 h-5 text-tertiary" />
              <span>{displayedText}</span>
              <span className="w-2.5 h-6 bg-primary animate-pulse ml-0.5" />
            </p>
          </div>

          {/* Bio paragraph */}
          <p className="text-base sm:text-lg text-on-surface-variant mb-10 max-w-2xl leading-relaxed font-normal">
            {PERSONAL_INFO.bioShort}
          </p>

          {/* CTA Action Buttons */}
          <div className="flex flex-wrap gap-4 items-center mb-12">
            <a
              href="#contact"
              className="bg-primary text-on-primary px-8 py-4 rounded-xl font-bold transition-all duration-300 hover:shadow-[0_0_30px_rgba(173,198,255,0.5)] active:scale-95 flex items-center gap-2 text-base group"
            >
              Hire Me
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#projects"
              className="px-8 py-4 rounded-xl font-bold border border-white/20 glass-card text-on-background hover:bg-white/10 transition-all duration-300 active:scale-95 text-base"
            >
              View Projects
            </a>

            <a
              href="#resume"
              className="px-6 py-4 rounded-xl font-bold text-tertiary hover:text-white transition-colors flex items-center gap-2 text-base"
            >
              <Download className="w-5 h-5" />
              Resume
            </a>
          </div>

          {/* Social Icons Bar */}
          <div className="flex items-center gap-6 pt-6 border-t border-white/10 w-full">
            <span className="text-xs font-mono uppercase tracking-widest text-on-surface-variant">
              Connect
            </span>
            <div className="h-px w-10 bg-white/15" />
            <div className="flex items-center gap-3">
              <a
                href={PERSONAL_INFO.socials.github}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-on-surface-variant hover:text-primary hover:scale-110 transition-all"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={PERSONAL_INFO.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-on-surface-variant hover:text-primary hover:scale-110 transition-all"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={PERSONAL_INFO.socials.twitter}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-on-surface-variant hover:text-primary hover:scale-110 transition-all"
                aria-label="Twitter Profile"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href={PERSONAL_INFO.socials.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-on-surface-variant hover:text-emerald-400 hover:scale-110 transition-all"
                aria-label="WhatsApp Chat"
              >
                <MessageSquare className="w-5 h-5" />
              </a>
              <a
                href={PERSONAL_INFO.socials.email}
                className="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-on-surface-variant hover:text-tertiary hover:scale-110 transition-all"
                aria-label="Send Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Hero Profile Image & Ambient Halo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 relative flex justify-center"
        >
          {/* Animated Background Ring */}
          <div className="absolute -inset-6 bg-gradient-to-tr from-primary via-secondary to-tertiary rounded-full opacity-30 blur-3xl animate-pulse" />

          {/* Profile Frame Container */}
          <div className="relative w-full max-w-[440px] aspect-square rounded-[36px] overflow-hidden border border-white/20 glass-card shadow-2xl group">
            <Image
              src={PERSONAL_INFO.avatarUrl}
              alt={PERSONAL_INFO.name}
              fill
              sizes="(max-width: 768px) 100vw, 440px"
              priority
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Vignette Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent pointer-events-none" />

            {/* Floating Info Pills */}
            <div className="absolute bottom-6 left-6 right-6 flex flex-col gap-2 pointer-events-none">
              <div className="self-start px-4 py-2 rounded-xl glass-card backdrop-blur-xl border border-white/20 flex items-center gap-2 shadow-lg">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-mono text-white font-medium">
                  Full-Stack & Mobile Specialist
                </span>
              </div>

              <div className="self-end px-4 py-2 rounded-xl glass-card backdrop-blur-xl border border-white/20 flex items-center gap-2 shadow-lg">
                <Code2 className="w-4 h-4 text-tertiary" />
                <span className="text-xs font-mono text-white font-medium">
                  2+ Yrs Industry Exp
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
