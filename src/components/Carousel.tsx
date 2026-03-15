"use client";

import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1624397640148-949b1732bb0a",
    text: "Global Oil & Gas Trading Partner",
  },
  {
    image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780",
    text: "Reliable Petroleum Supply Chain",
  },
  {
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69",
    text: "Professional Energy Trading Company",
  },
];

export default function Carousel() {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[600px] w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.img
          key={index}
          src={slides[index].image}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute w-full h-full object-cover"
        />
      </AnimatePresence>

      {/* overlay */}
      <div className="absolute inset-0 bg-black/50 flex items-center justify-center px-6">
        <AnimatePresence mode="wait">
          <motion.h2
            key={slides[index].text}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -60 }}
            transition={{ duration: 0.8 }}
            className="text-white text-4xl md:text-5xl font-bold text-center max-w-4xl"
          >
            {slides[index].text}
          </motion.h2>
        </AnimatePresence>
      </div>

      {/* arrows */}

      <button
        onClick={prev}
        className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md p-3 rounded-full text-white hover:bg-yellow-500 transition"
      >
        <FaChevronLeft size={20} />
      </button>

      <button
        onClick={next}
        className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md p-3 rounded-full text-white hover:bg-yellow-500 transition"
      >
        <FaChevronRight size={20} />
      </button>

      {/* indicator */}

      <div className="absolute bottom-8 w-full flex justify-center gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
              i === index ? "bg-yellow-400 w-8" : "bg-white/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
