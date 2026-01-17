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
        className="flex items-center gap-8 px-8 py-4 bg-white/70 backdrop-blur-md border border-white/20 rounded-full shadow-lg shadow-black/5"
      >
        {/* Designer Logo/Name */}
        <Link href="/" className="font-bold text-lg tracking-tighter hover:text-blue-600 transition-colors">
          MELK<span className="text-blue-600">.</span>
        </Link>

        {/* Vertical Divider */}
        <div className="w-[1px] h-4 bg-gray-200"></div>

        {/* Links */}
        <div className="flex gap-6">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link 
                key={link.name} 
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                  isActive ? "text-blue-600" : "text-gray-500"
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