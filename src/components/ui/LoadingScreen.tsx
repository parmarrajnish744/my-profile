"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Sparkles } from "lucide-react";

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1600);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0b1326] text-on-background selection:bg-primary/30"
        >
          <div className="relative flex flex-col items-center">
            {/* Glowing background ring */}
            <div className="absolute -inset-8 bg-primary/20 rounded-full blur-3xl animate-pulse" />

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="w-16 h-16 rounded-2xl bg-surface-container-high border border-white/10 flex items-center justify-center shadow-2xl mb-6 backdrop-blur-xl"
            >
              <Code2 className="w-8 h-8 text-primary animate-pulse" />
            </motion.div>

            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-2xl font-bold tracking-tight text-on-background flex items-center gap-2"
            >
              Parmar Rajnesh
              <Sparkles className="w-4 h-4 text-tertiary" />
            </motion.h1>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-xs uppercase tracking-widest text-on-surface-variant mt-2 font-mono"
            >
              Engineering Digital Experiences
            </motion.p>

            {/* Progress bar loader */}
            <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden mt-8">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 1.4, ease: "easeInOut" }}
                className="w-full h-full bg-gradient-to-r from-primary via-secondary to-tertiary shadow-[0_0_10px_rgba(173,198,255,0.8)]"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
