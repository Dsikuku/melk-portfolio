"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ProjectGallery({ images }: { images: string[] }) {
  if (!images || images.length === 0) return null;

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <h3 className="text-sm uppercase tracking-widest font-bold text-gray-400 mb-12">
        Project Gallery
      </h3>
      
      <div className="columns-1 md:columns-2 gap-8 space-y-8">
        {images.map((src, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative w-full rounded-2xl overflow-hidden shadow-sm"
          >
            <img
              src={src}
              alt={`Gallery image ${index + 1}`}
              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}