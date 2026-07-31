"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show custom cursor on fine pointer devices (desktop/laptop)
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    if (isTouchDevice) return;

    setIsVisible(true);

    const onMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a") ||
        target.getAttribute("role") === "button" ||
        target.classList.contains("interactive")
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseover", onMouseOver);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", onMouseOver);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer ambient spotlight glow */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-30 rounded-full blur-[80px] bg-primary/20"
        animate={{
          x: mousePosition.x - 150,
          y: mousePosition.y - 150,
          scale: isHovered ? 1.4 : 1,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 200, mass: 0.5 }}
        style={{ width: 300, height: 300 }}
      />

      {/* Inner precise cursor dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 rounded-full border border-primary/60 bg-primary/20 backdrop-blur-[2px]"
        animate={{
          x: mousePosition.x - (isHovered ? 24 : 8),
          y: mousePosition.y - (isHovered ? 24 : 8),
          width: isHovered ? 48 : 16,
          height: isHovered ? 48 : 16,
          backgroundColor: isHovered ? "rgba(173, 198, 255, 0.25)" : "rgba(173, 198, 255, 0.15)",
        }}
        transition={{ type: "spring", damping: 25, stiffness: 350, mass: 0.2 }}
      />
    </>
  );
}
