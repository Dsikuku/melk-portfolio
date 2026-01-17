"use client";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-950 border-t border-white/5 py-12 text-center text-neutral-500">
      <div className="max-w-7xl mx-auto">
        {/* Large Contact Hook */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-slate-800 pb-16 mb-12">
          <div>
            <h2 className="text-5xl md:text-7xl font-bold mb-6 text-white">
              Have a project <br /> in mind?
            </h2>
            <a 
              href="mailto:hello@designer.com" 
              className="text-2xl md:text-3xl text-blue-400 hover:text-blue-300 transition-colors underline underline-offset-8"
            >
              hello@melk.com
            </a>
          </div>
          
          <div className="mt-10 md:mt-0 flex flex-col gap-4 text-right">
            <p className="text-white uppercase tracking-widest text-sm font-semibold">Socials</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-blue-400 transition-colors">Dribble</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Behance</a>
              <a href="#" className="hover:text-blue-400 transition-colors">LinkedIn</a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-sm">
          <p>© {currentYear} Melkzedek Portfolio.</p>
          <div className="flex gap-8">
            <a href="#work" className="hover:text-white transition-colors">Work</a>
            <a href="#" className="hover:text-white transition-colors">About</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}