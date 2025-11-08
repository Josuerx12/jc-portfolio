"use client";
import React from "react";
import { motion } from "framer-motion";

const HeroLight = () => {
  return (
    <motion.div
      className="
          absolute pointer-events-none rounded-full
          bg-[radial-gradient(circle_at_center,var(--color-primary)_0%,transparent_70%)]
          blur-3xl opacity-30
          w-[600px] h-[600px] -top-[200px] -right-[200px]
          sm:w-[800px] sm:h-[400px] sm:-top-[300px] sm:-right-[300px]
          md:w-[1000px] md:h-[600px] md:-top-[400px] md:-right-[400px]
          lg:w-[1400px] lg:h-[1000px] lg:-top-[500px] lg:-right-[500px]
        "
      animate={{
        opacity: [0.25, 0.35, 0.25],
        scale: [1, 1.05, 1],
        x: [0, -10, 10, 0],
        y: [0, 10, -10, 0],
      }}
      transition={{
        duration: 12,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
};

export default HeroLight;
