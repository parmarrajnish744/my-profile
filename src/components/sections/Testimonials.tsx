"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { TESTIMONIALS_DATA } from "@/data/portfolioData";
import { Star, ChevronLeft, ChevronRight, Quote, Sparkles } from "lucide-react";

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? TESTIMONIALS_DATA.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  const current = TESTIMONIALS_DATA[currentIndex];

  return (
    <section id="testimonials" className="py-24 px-6 lg:px-8 max-w-container mx-auto">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <span className="text-xs font-mono text-tertiary uppercase tracking-widest mb-3 flex items-center gap-1">
          <Sparkles className="w-4 h-4" /> Endorsements
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-on-background tracking-tight mb-4">
          Client & Peer <span className="text-primary italic">Testimonials</span>
        </h2>
        <p className="text-on-surface-variant max-w-xl text-base sm:text-lg">
          Feedback from startup founders, product managers, and engineering leaders I&apos;ve collaborated with.
        </p>
      </div>

      {/* Carousel Container */}
      <div className="relative max-w-4xl mx-auto">
        <div className="glass-card rounded-3xl p-8 sm:p-12 border border-white/10 relative overflow-hidden shadow-2xl min-h-[320px] flex flex-col justify-between">
          <Quote className="absolute top-6 right-8 w-20 h-20 text-primary/10 pointer-events-none" />

          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-6 relative z-10"
            >
              {/* Star Rating */}
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400" />
                ))}
              </div>

              {/* Quote Text */}
              <p className="text-lg sm:text-2xl text-on-background font-normal leading-relaxed italic">
                &ldquo;{current.quote}&rdquo;
              </p>

              {/* Author Details */}
              <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-primary">
                  <Image
                    src={current.avatar}
                    alt={current.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-on-background text-base sm:text-lg">
                    {current.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-tertiary font-mono">
                    {current.role} &bull; <span className="text-on-surface-variant">{current.company}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex justify-between items-center pt-6 mt-6 border-t border-white/5 relative z-10">
            {/* Indicators */}
            <div className="flex items-center gap-2">
              {TESTIMONIALS_DATA.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === currentIndex
                      ? "w-8 bg-primary shadow-[0_0_10px_rgba(173,198,255,0.8)]"
                      : "w-2 bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="p-3 rounded-xl glass-card text-on-surface-variant hover:text-primary transition-all active:scale-95"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="p-3 rounded-xl glass-card text-on-surface-variant hover:text-primary transition-all active:scale-95"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
