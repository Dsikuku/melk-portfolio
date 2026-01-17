"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Work", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6">
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        // Changed bg-white/70 to bg-neutral-900/50 and border to white/10
        className="flex items-center gap-8 px-8 py-4 bg-neutral-900/50 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl shadow-black"
      >
        {/* Designer Logo/Name */}
        <Link href="/" className="font-bold text-lg tracking-tighter text-white hover:text-blue-500 transition-colors">
          MELK<span className="text-blue-500">.</span>
        </Link>

        {/* Vertical Divider - Changed to a darker shade for dark mode */}
        <div className="w-[1px] h-4 bg-white/10"></div>

        {/* Links */}
        <div className="flex gap-6">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link 
                key={link.name} 
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-white ${
                  isActive ? "text-blue-500" : "text-neutral-400"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      </motion.div>
    </nav>
  );
}