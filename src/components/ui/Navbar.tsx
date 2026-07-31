"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { PERSONAL_INFO } from "@/data/portfolioData";
import {
  Code2,
  User,
  Briefcase,
  Layers,
  Mail,
  FileText,
  Menu,
  X,
  Sparkles,
  BookOpen
} from "lucide-react";

export function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const sections = [
        "home",
        "about",
        "skills",
        "projects",
        "experience",
        "services",
        "certificates",
        "testimonials",
        "resume",
        "contact",
      ];

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home", id: "home" },
    { name: "About", href: "#about", id: "about" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Experience", href: "#experience", id: "experience" },
    { name: "Services", href: "#services", id: "services" },
    { name: "Certificates", href: "#certificates", id: "certificates" },
    { name: "Resume", href: "#resume", id: "resume" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <>
      {/* Top Header Desktop Navigation */}
      <header
        className={`fixed top-0 w-full z-40 transition-all duration-300 ${
          scrolled
            ? "bg-surface/80 dark:bg-[#0b1326]/80 backdrop-blur-xl border-b border-white/10 shadow-lg py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="flex justify-between items-center px-6 lg:px-8 max-w-container mx-auto">
          {/* Logo */}
          <Link
            href="#home"
            className="flex items-center gap-2.5 group"
          >
            <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:scale-105 transition-transform">
              <Code2 className="w-5 h-5 text-primary" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg text-on-background tracking-tight group-hover:text-primary transition-colors">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-[10px] font-mono text-tertiary uppercase tracking-widest -mt-1">
                Portfolio
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 glass-card px-6 py-2 rounded-full border border-white/10">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-primary relative py-1 ${
                    isActive ? "text-primary font-semibold" : "text-on-surface-variant"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full" />
                  )}
                </a>
              );
            })}
            <Link
              href="/blog"
              className="text-sm font-medium text-tertiary hover:text-primary transition-colors flex items-center gap-1.5 ml-2"
            >
              <BookOpen className="w-4 h-4" />
              Blog
            </Link>
          </nav>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <ThemeToggle />
            <a
              href="#resume"
              className="bg-primary text-on-primary font-bold text-sm px-5 py-2.5 rounded-xl transition-all duration-300 hover:shadow-[0_0_25px_rgba(173,198,255,0.4)] active:scale-95 flex items-center gap-2"
            >
              <FileText className="w-4 h-4" />
              Resume
            </a>
          </div>

          {/* Mobile Menu Toggle button */}
          <div className="flex lg:hidden items-center gap-3">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl glass-card text-on-surface-variant hover:text-primary transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Panel */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-surface-container-high/95 backdrop-blur-2xl border-b border-white/10 px-6 py-6 transition-all animate-fadeIn">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base font-medium transition-colors ${
                    activeSection === link.id
                      ? "text-primary font-bold pl-2 border-l-2 border-primary"
                      : "text-on-surface-variant hover:text-primary"
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <Link
                href="/blog"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-tertiary flex items-center gap-2 pt-2 border-t border-white/10"
              >
                <BookOpen className="w-4 h-4" />
                Blog / Technical Articles
              </Link>
              <a
                href="#resume"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 w-full bg-primary text-on-primary font-bold text-center py-3 rounded-xl shadow-lg"
              >
                View Resume
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Floating Dock Mobile Navigation at Bottom */}
      <div className="lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-40 w-[90%] max-w-md">
        <div className="glass-card backdrop-blur-2xl bg-surface-container-high/80 border border-white/15 rounded-full px-4 py-3 shadow-2xl flex justify-around items-center">
          <a
            href="#home"
            className={`p-2 rounded-full transition-colors flex flex-col items-center gap-0.5 ${
              activeSection === "home" ? "text-primary bg-primary/10" : "text-on-surface-variant"
            }`}
          >
            <Code2 className="w-5 h-5" />
            <span className="text-[10px]">Home</span>
          </a>
          <a
            href="#about"
            className={`p-2 rounded-full transition-colors flex flex-col items-center gap-0.5 ${
              activeSection === "about" ? "text-primary bg-primary/10" : "text-on-surface-variant"
            }`}
          >
            <User className="w-5 h-5" />
            <span className="text-[10px]">About</span>
          </a>
          <a
            href="#projects"
            className={`p-2 rounded-full transition-colors flex flex-col items-center gap-0.5 ${
              activeSection === "projects" ? "text-primary bg-primary/10" : "text-on-surface-variant"
            }`}
          >
            <Briefcase className="w-5 h-5" />
            <span className="text-[10px]">Projects</span>
          </a>
          <a
            href="#services"
            className={`p-2 rounded-full transition-colors flex flex-col items-center gap-0.5 ${
              activeSection === "services" ? "text-primary bg-primary/10" : "text-on-surface-variant"
            }`}
          >
            <Layers className="w-5 h-5" />
            <span className="text-[10px]">Services</span>
          </a>
          <a
            href="#contact"
            className={`p-2 rounded-full transition-colors flex flex-col items-center gap-0.5 ${
              activeSection === "contact" ? "text-primary bg-primary/10" : "text-on-surface-variant"
            }`}
          >
            <Mail className="w-5 h-5" />
            <span className="text-[10px]">Contact</span>
          </a>
        </div>
      </div>
    </>
  );
}
