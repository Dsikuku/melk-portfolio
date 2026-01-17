"use client";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Left Side: Text & Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold text-slate-900 mb-8 leading-tight">
              Let’s build <br /> something <br /> <span className="text-blue-600 font-serif italic">great.</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-md mb-12">
              Currently accepting new projects and collaborations. Drop me a line and let's discuss your vision.
            </p>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-sm uppercase tracking-widest font-bold text-gray-400 mb-2">Email</h3>
                <a href="mailto:hello@designer.com" className="text-2xl font-medium hover:text-blue-600 transition-colors">
                  hello@melkzedek.com
                </a>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-widest font-bold text-gray-400 mb-2">Socials</h3>
                <div className="flex gap-6 text-xl font-medium">
                  <a href="#" className="hover:text-blue-600 transition-colors">Instagram</a>
                  <a href="#" className="hover:text-blue-600 transition-colors">TikTok</a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gray-50 p-8 md:p-12 rounded-3xl"
          >
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold uppercase tracking-wider text-gray-500">Name</label>
                  <input type="text" placeholder="John Doe" className="bg-transparent border-b border-gray-300 py-3 focus:border-blue-600 outline-none transition-colors" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold uppercase tracking-wider text-gray-500">Email</label>
                  <input type="email" placeholder="john@example.com" className="bg-transparent border-b border-gray-300 py-3 focus:border-blue-600 outline-none transition-colors" />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold uppercase tracking-wider text-gray-500">Subject</label>
                <select className="bg-transparent border-b border-gray-300 py-3 focus:border-blue-600 outline-none transition-colors cursor-pointer">
                  <option>Graphic Design</option>
                  <option>Branding</option>
                  <option>Art Direction</option>
                  <option>Interface Experiences</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold uppercase tracking-wider text-gray-500">Message</label>
                <textarea rows={4} placeholder="Tell me about your project..." className="bg-transparent border-b border-gray-300 py-3 focus:border-blue-600 outline-none transition-colors resize-none" />
              </div>

              <button className="w-full bg-slate-900 text-white py-5 rounded-full font-bold hover:bg-blue-600 transition-all duration-300 transform hover:-translate-y-1">
                Send Inquiry
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </main>
  );
}