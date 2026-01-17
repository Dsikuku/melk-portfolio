"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
  const skills = ["Graphic Design", "Branding", "Art Direction", "Interface Experiences", "Strategic Thinking"];

  return (
    <main className="min-h-screen bg-white pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl font-bold mb-8">Design that moves the needle.</h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-6">
              I’m a multidisciplinary designer based in Toronto. With over 3 years of experience, 
              I’ve helped startups and established brands find their visual voice.
            </p>
            <p className="text-xl text-gray-600 leading-relaxed">
              My philosophy is simple: Design shouldn't just look good; it should work. 
              I focus on creating systems that are functional, scalable, and memorable.
            </p>
          </motion.div>

          {/* Profile Image / Placeholder */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative aspect-square w-full max-w-[500px] mx-auto rounded-3xl overflow-hidden shadow-2xl shadow-black/10"
          >
            <Image 
              src="/profile.jpg" // This points to public/profile.jpg
              alt="Designer Profile Photo"
              fill // This makes the image fill the container
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
              priority // Tells Next.js to load this image immediately
            />
          </motion.div>
        </div>

        {/* Skills & Experience Section */}
        <div className="mt-32 border-t border-gray-100 pt-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-sm uppercase tracking-widest font-bold text-gray-400 mb-6">Core Services</h3>
              <ul className="space-y-4">
                {skills.map((skill) => (
                  <li key={skill} className="text-2xl font-medium text-slate-900">{skill}</li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-2">
              <h3 className="text-sm uppercase tracking-widest font-bold text-gray-400 mb-6">The Journey</h3>
              <div className="space-y-12">
                <div>
                  <h4 className="text-xl font-bold italic">2022 — Present</h4>
                  <p className="text-2xl mt-2 font-semibold">Lead Designer at Kipepeo Creative Studio</p>
                  <p className="text-gray-500 mt-2 italic">Leading brand strategy and digital transformation for Fortune 500 clients.</p>
                </div>
                <div>
                  <h4 className="text-xl font-bold italic">2018 — 2022</h4>
                  <p className="text-2xl mt-2 font-semibold">Designer at Creative Pulse</p>
                  <p className="text-gray-500 mt-2 italic">Focused on packaging design and physical brand experiences.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}