"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({ project }: { project: any }) {
  return (
    <Link href={`/projects/${project.id}`}>
      <motion.div 
        whileHover={{ y: -10 }}
        className={`relative group overflow-hidden rounded-3xl bg-gray-100 ${project.gridSpan}`}
      >
        {/* Image Container */}
        <div className="relative h-full w-full">
          <img 
            src={project.image} 
            alt={project.title}
            className="object-cover h-full w-full transition-transform duration-500 group-hover:scale-110"
          />
          
          {/* Overlay - appears on hover */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8 text-white">
            <p className="text-sm font-medium uppercase tracking-widest mb-2">{project.category}</p>
            <h3 className="text-2xl font-bold">{project.title}</h3>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}