"use client";

import React from "react";
import { motion } from "framer-motion";
import { SERVICES_DATA } from "@/data/portfolioData";
import {
  Layout,
  Smartphone,
  Globe,
  Sparkles,
  Server,
  ShieldCheck,
  CheckCircle2,
  ArrowUpRight
} from "lucide-react";

export function Services() {
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case "Layout": return <Layout className="w-8 h-8 text-primary" />;
      case "Smartphone": return <Smartphone className="w-8 h-8 text-secondary" />;
      case "Globe": return <Globe className="w-8 h-8 text-tertiary" />;
      case "Sparkles": return <Sparkles className="w-8 h-8 text-primary" />;
      case "Server": return <Server className="w-8 h-8 text-secondary" />;
      case "ShieldCheck": return <ShieldCheck className="w-8 h-8 text-tertiary" />;
      default: return <Layout className="w-8 h-8 text-primary" />;
    }
  };

  return (
    <section id="services" className="py-24 px-6 lg:px-8 max-w-container mx-auto">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <span className="text-xs font-mono text-tertiary uppercase tracking-widest mb-3 flex items-center gap-1">
          <Sparkles className="w-4 h-4" /> Solutions Offered
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-on-background tracking-tight mb-4">
          Technical <span className="text-primary italic">Services</span>
        </h2>
        <p className="text-on-surface-variant max-w-xl text-base sm:text-lg">
          Custom software engineering solutions tailored to scale businesses, drive revenue, and impress users.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SERVICES_DATA.map((service, idx) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="glass-card rounded-3xl p-8 border border-white/10 hover:border-primary/40 transition-all duration-500 hover:-translate-y-2 group shadow-xl flex flex-col justify-between"
          >
            <div>
              {/* Icon Container */}
              <div className="w-16 h-16 rounded-2xl bg-surface-container-high border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(173,198,255,0.3)] transition-all">
                {getServiceIcon(service.icon)}
              </div>

              {/* Title & Description */}
              <h3 className="text-2xl font-bold text-on-background mb-3 group-hover:text-primary transition-colors flex items-center justify-between">
                {service.title}
                <ArrowUpRight className="w-5 h-5 text-on-surface-variant opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </h3>
              <p className="text-on-surface-variant text-sm mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Feature List */}
              <div className="space-y-2 mb-6 pt-4 border-t border-white/10">
                {service.features.map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-center gap-2.5 text-xs font-mono text-on-surface-variant">
                    <CheckCircle2 className="w-4 h-4 text-tertiary shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom CTA Action Link */}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-xs font-bold text-primary hover:text-white uppercase tracking-wider transition-colors pt-4 border-t border-white/5"
            >
              Request Service &rarr;
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
