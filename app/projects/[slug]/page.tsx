"use client";
import { useParams } from "next/navigation";
import { projects } from "@/data/projects";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import ProjectGallery from "@/components/ProjectsGallery";

export default function ProjectDetails() {
  const params = useParams();
  
  // Find the project based on the ID or Slug
  // For now, we'll match by ID since your data uses numbers
  const project = projects.find((p) => p.id.toString() === params.slug);

  if (!project) return <div className="pt-40 text-center">Project not found.</div>;

  //Find the index of the current project
  const currentIndex = projects.findIndex((p) => p.id.toString() === params.slug);

  //Calculate the next project (looping back to the start if at the end)
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <main className="min-h-screen bg-white">
      {/* 1. Project Hero Section */}
      <section className="relative h-[70vh] w-full bg-gray-100">
        <Image 
          src={project.image} 
          alt={project.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/20" />
      </section>

      {/* 2. Content Section */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link href="/" className="text-sm font-bold uppercase tracking-widest text-blue-600 hover:text-blue-800 transition-colors mb-8 block">
            ← Back to Gallery
          </Link>
          
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-4">
            {project.title}
          </h1>
          <p className="text-xl text-gray-400 font-medium mb-12">
            {project.category}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-gray-100 pt-12">
            <div className="md:col-span-2">
              <h3 className="text-sm uppercase tracking-widest font-bold text-gray-400 mb-4">The Challenge</h3>
              <p className="text-xl text-gray-700 leading-relaxed">
                This is where the designer describes the problem they solved. In graphic design, 
                context is everything. You can add specific details about the brand strategy, 
                color theory, and the client's goals here.
              </p>
            </div>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-sm uppercase tracking-widest font-bold text-gray-400 mb-2">Role</h3>
                <p className="text-lg font-medium">Lead Visual Designer</p>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-widest font-bold text-gray-400 mb-2">Deliverables</h3>
                <p className="text-lg font-medium text-slate-600 leading-relaxed">
                  Brand Identity, Logo Design, Style Guide, Social Assets
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* The Gallery Section */}
      <ProjectGallery images={project.gallery || []} />

      {/* Adding a spacing div at the bottom */}
      <div className="h-20" />

      {/* Next Project Link */}
        <section className="border-t border-gray-100 mt-20">
            <Link href={`/projects/${nextProject.id}`} className="group">
                <div className="flex flex-col items-center justify-center py-32 bg-gray-50 hover:bg-slate-900 transition-colors duration-500">
                <span className="text-sm uppercase tracking-[0.2em] text-gray-400 group-hover:text-blue-400 transition-colors mb-4">
                    Next Project
                </span>
                <h2 className="text-4xl md:text-6xl font-bold text-slate-900 group-hover:text-white transition-colors">
                    {nextProject.title}
                </h2>
                <div className="mt-8 overflow-hidden rounded-full px-8 py-3 border border-slate-200 group-hover:border-blue-500 group-hover:text-white transition-all">
                    View Project →
                </div>
                </div>
            </Link>
        </section>
    </main>
  );
}