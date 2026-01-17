"use client";
import { useParams } from "next/navigation";
import { projects } from "@/data/projects";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import ProjectGallery from "@/components/ProjectsGallery";

export default function ProjectDetails() {
  const params = useParams();
  
  const project = projects.find((p) => p.id.toString() === params.slug);

  if (!project) return <div className="pt-40 text-center text-white">Project not found.</div>;

  const currentIndex = projects.findIndex((p) => p.id.toString() === params.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    // Changed bg-white to bg-transparent (to show global CSS dark background)
    <main className="min-h-screen bg-transparent">
      {/* 1. Project Hero Section */}
      <section className="relative h-[70vh] w-full bg-neutral-900">
        <Image 
          src={project.image} 
          alt={project.title}
          fill
          className="object-cover opacity-80"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60" />
      </section>

      {/* 2. Content Section */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link href="/" className="text-sm font-bold uppercase tracking-widest text-blue-500 hover:text-white transition-colors mb-8 block">
            ← Back to Gallery
          </Link>
          
          {/* Changed text-blue-900 to text-white */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tighter">
            {project.title}
          </h1>
          <p className="text-xl text-neutral-400 font-medium mb-12 uppercase tracking-wide">
            {project.category}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/10 pt-12">
            <div className="md:col-span-2">
              <h3 className="text-sm uppercase tracking-widest font-bold text-blue-500 mb-4">The Challenge</h3>
              <p className="text-xl text-neutral-200 leading-relaxed">
                This is where the designer describes the problem they solved. In graphic design, 
                context is everything. You can add specific details about the brand strategy, 
                color theory, and the client's goals here.
              </p>
            </div>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-sm uppercase tracking-widest font-bold text-neutral-500 mb-2">Role</h3>
                <p className="text-lg font-medium text-white">Lead Visual Designer</p>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-widest font-bold text-neutral-500 mb-2">Deliverables</h3>
                <p className="text-lg font-medium text-neutral-300 leading-relaxed">
                  Brand Identity, Logo Design, Style Guide, Social Assets
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* The Gallery Section */}
      <ProjectGallery images={project.gallery || []} />

      <div className="h-20" />

      {/* 3. Next Project Link */}
      <section className="border-t border-white/10 mt-20">
        <Link href={`/projects/${nextProject.id}`} className="group">
          {/* Swapped bg-gray-50 for neutral-900/50 */}
          <div className="flex flex-col items-center justify-center py-32 bg-neutral-900/50 hover:bg-neutral-900 transition-colors duration-500">
            <span className="text-sm uppercase tracking-[0.2em] text-neutral-500 group-hover:text-blue-500 transition-colors mb-4">
                Next Project
            </span>
            <h2 className="text-4xl md:text-6xl font-bold text-white group-hover:scale-105 transition-all duration-500 tracking-tighter">
                {nextProject.title}
            </h2>
            <div className="mt-8 overflow-hidden rounded-full px-8 py-3 border border-white/10 group-hover:border-blue-500 text-neutral-400 group-hover:text-white transition-all">
                View Project →
            </div>
          </div>
        </Link>
      </section>
    </main>
  );
}