"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "About", id: "#about" },
    { name: "Vision", id: "#vision" },
    { name: "Operation", id: "#operation" },
    { name: "Values", id: "#values" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    element?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setOpen(false);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src="/iconheaderamioil.png" className="h-10" />
          <h1 className="font-bold text-xl text-[#0B2A5B]">
            AMS OIL & GAS TRADING
          </h1>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 font-semibold text-[#0B2A5B]">
          {links.map((link, i) => (
            <motion.a
              key={i}
              className="relative group cursor-pointer"
              whileHover={{ y: -2 }}
              onClick={() => scrollToSection(link.id)}
            >
              {link.name}

              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
            </motion.a>
          ))}
        </nav>

        {/* Hamburger Button */}
        <button
          className="md:hidden text-[#0B2A5B] text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-inner"
          >
            <div className="flex flex-col items-center gap-6 py-6 font-semibold text-[#0B2A5B]">

              {links.map((link, i) => (
                <button
                  key={i}
                  onClick={() => scrollToSection(link.id)}
                  className="hover:text-yellow-500 transition"
                >
                  {link.name}
                </button>
              ))}

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}