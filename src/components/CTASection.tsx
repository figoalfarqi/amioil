"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight, FaHandshake } from "react-icons/fa";

export default function CTASection() {
  return (
    <section className="bg-[#092b3c] text-white py-16 sm:py-20 border-t border-[#183d52] relative overflow-hidden">
      {/* Background Accent Subtle Glow */}
      <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-[#bb964e]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -left-20 -top-20 w-96 h-96 bg-[#18516b]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-center justify-between gap-8"
        >
          <div className="max-w-2xl">
            <span className="text-[11px] sm:text-[12px] font-bold tracking-[0.2em] text-[#c8b177] uppercase block mb-3">
              LET’S BUILD THE SUPPLY CHAIN
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Your next supply partnership <br className="hidden sm:inline" />
              starts with a conversation.
            </h2>
            <p className="text-[#c1d3dc] text-base mt-4 max-w-xl">
              Connect directly with our commercial desk to discuss specifications, trial cargoes, long-term procurement, or export opportunities.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Link
              href="/rfq"
              className="inline-flex items-center justify-center gap-2.5 bg-white text-[#092b3c] hover:bg-[#f2f6f7] px-6 py-4 font-bold text-sm tracking-wide transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              <span>Request supply</span>
              <FaArrowRight size={13} />
            </Link>
            <Link
              href="/supplier"
              className="inline-flex items-center justify-center gap-2.5 bg-transparent border border-[#91a7b2] text-white hover:bg-white/10 hover:border-white px-6 py-4 font-bold text-sm tracking-wide transition-all hover:-translate-y-0.5"
            >
              <FaHandshake size={15} className="text-[#c8b177]" />
              <span>Partner as a supplier</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
