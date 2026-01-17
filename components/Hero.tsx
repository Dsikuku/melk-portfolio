"use client";

import { motion } from "framer-motion";

export default function Hero() {
  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  return (
    <section className="relative flex flex-col justify-center min-h-[70vh] py-20 px-6 max-w-7xl mx-auto overflow-hidden">
      
      {/* 1. Animated Availability Badge */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="flex items-center gap-2 mb-6"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
        </span>
        <span className="text-sm font-medium tracking-wide uppercase text-neutral-500">
          Available for new projects
        </span>
      </motion.div>

      {/* 2. Animated Headline */}
      {/* @ts-ignore */}
      <motion.h1 
        initial="initial"
        animate="animate"
        variants={fadeInUp}
        className="text-6xl md:text-8xl font-bold tracking-tight text-white leading-[1.1]"
      >
        Crafting <span className="text-blue-600">visual identities</span> <br /> 
        that define our future.
      </motion.h1>

      {/* 3. Animated Sub-headline */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="mt-8 max-w-2xl"
      >
        <p className="text-xl md:text-2xl text-neutral-400 leading-relaxed">
          I’m Melkzedek Makokha, a Graphic Designer specializing in brand strategy, 
          digital experiences, and high-impact visual storytelling.
        </p>
      </motion.div>

      {/* 4. Animated Buttons */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="mt-10 flex flex-wrap gap-4"
      >
        <a href="#work" className="px-8 py-4 bg-white text-black rounded-full font-medium hover:bg-blue-600 hover:text-white transition-all duration-300">
          View My Work
        </a>
        <a href="/contact" className="px-8 py-4 border border-neutral-700 text-white rounded-full font-medium hover:bg-neutral-800 transition-colors">
          Get in Touch
        </a>
      </motion.div>
    </section>
  );
}