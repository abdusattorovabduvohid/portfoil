import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { name: "Главная", href: "#" },
  { name: "О себе", href: "#about" },
  { name: "Образование", href: "#skills" }, // Yangi qo'shilgan link
  { name: "Портфолио", href: "#portfolio" },
  { name: "Контакты", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed py-[15px] w-full top-0 bg-black text-white z-50 border-b border-gray-900">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          
          {/* Logo */}
          <div className="text-4xl font-bold tracking-tighter">
            <span className="text-[#ff6b00]">A </span><span>A</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-gray-400 text-lg hover:text-white transition-colors relative group"
              >
                {link.name}
                {/* Hover bo'lganda tagiga chiziq chiqishi uchun (ixtiyoriy) */}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ff6b00] transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Hamburger Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-400 hover:text-white focus:outline-none z-50"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>

        </div>
      </nav>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Fonni xiralashtirish (Backdrop) */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 w-[280px] bg-[#0a0a0a] text-white z-50 md:hidden p-8 pt-24 shadow-2xl border-l border-gray-900"
            >
              <div className="flex flex-col gap-8 text-xl font-semibold">
                {navLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-gray-300 hover:text-[#ff6b00] transition-colors flex items-center justify-between group"
                  >
                    {link.name}
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-[#ff6b00]">→</span>
                  </a>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}