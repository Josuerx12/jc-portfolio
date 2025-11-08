"use client";
import { motion } from "framer-motion";

const AboutLight = () => {
  return (
    <motion.div
      className="-z-10
          absolute pointer-events-none rounded-full mix-blend-screen
          bg-[radial-gradient(circle_at_center,theme(colors.secondary.DEFAULT)_0%,transparent_70%)]
          blur-2xl opacity-20
          sm:w-[500px] sm:h-[500px] sm:top-[200px] sm:-left-[150px]
          md:w-[800px] md:h-[800px] md:top-[400px] md:-left-[300px]
          lg:w-[1000px] lg:h-[1000px] lg:top-[500px] lg:-left-[400px]
        "
      animate={{
        opacity: [0.15, 0.25, 0.15],
        scale: [1, 1.1, 1],
        x: [0, 15, -15, 0],
        y: [0, -10, 10, 0],
      }}
      transition={{
        duration: 14,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
};

export default AboutLight;
