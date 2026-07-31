"use client";

import React, { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { STATS_DATA } from "@/data/portfolioData";

function CounterNumber({ value, suffix, prefix }: { value: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0);
  const ref = React.useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 2000;
    const steps = 60;
    const stepTime = duration / steps;
    const increment = value / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref} className="font-extrabold text-4xl sm:text-6xl text-primary tracking-tight">
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export function Statistics() {
  return (
    <section className="py-20 px-6 lg:px-8 max-w-container mx-auto">
      <div className="glass-card rounded-3xl p-8 sm:p-12 border border-white/10 relative overflow-hidden bg-surface-container-high/40 backdrop-blur-2xl">
        {/* Glow Blob */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 relative z-10 text-center">
          {STATS_DATA.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col items-center justify-center p-4"
            >
              <CounterNumber value={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
              <span className="mt-2 text-base font-bold text-on-background tracking-wide">
                {stat.label}
              </span>
              <span className="mt-1 text-xs text-on-surface-variant max-w-[160px]">
                {stat.description}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
