"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import PageIntro from "@/components/PageIntro";
import CTASection from "@/components/CTASection";
import { PRODUCTS, CATEGORIES } from "@/data/products";
import { FaArrowRight } from "react-icons/fa";

export default function ProductsContainer() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredProducts =
    activeCategory === "All"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <div className="flex flex-col">
      {/* Page Intro */}
      <PageIntro
        eyebrow="OUR COMMODITIES"
        title={
          <>
            A portfolio connected
            <br />
            to essential industries.
          </>
        }
        description="Explore the commodities AMS evaluates for sourcing and supply. Availability and execution depend on the agreed transaction and required approvals."
      />

      {/* FILTER BUTTONS */}
      <section className="bg-white border-b border-[#dce4e8] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-3" role="group" aria-label="Filter commodities">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  aria-pressed={isActive}
                  className={`px-5 py-2.5 text-xs sm:text-sm font-bold tracking-wider uppercase transition-all border ${
                    isActive
                      ? "bg-[#092b3c] text-white border-[#092b3c] shadow-sm"
                      : "bg-white text-[#102f3e] border-[#dce4e8] hover:border-[#bb964e] hover:text-[#bb964e]"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* COMMODITY GRID */}
      <section className="py-16 sm:py-24 bg-[#f2f6f7] border-b border-[#dce4e8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence>
              {filteredProducts.map((prod) => (
                <motion.div
                  key={prod.slug}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ y: -5 }}
                  className="bg-white border border-[#dce4e8] p-8 flex flex-col justify-between transition-all duration-300 hover:border-[#bb964e] hover:shadow-xl group"
                >
                  <div>
                    <span className="text-[10px] font-bold tracking-[0.16em] uppercase text-[#6d7f87] block mb-4">
                      {prod.category}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#092b3c] mb-3 group-hover:text-[#bb964e] transition-colors">
                      {prod.title}
                    </h3>
                    <p className="text-sm text-[#60717b] leading-relaxed mb-6">
                      {prod.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#f2f6f7] flex items-center justify-between">
                    <Link
                      href={`/products/${prod.slug}`}
                      className="inline-flex items-center gap-2 text-xs font-bold text-[#092b3c] group-hover:text-[#bb964e] transition-colors"
                    >
                      <span>Explore product</span>
                      <FaArrowRight className="text-[10px] text-[#bb964e] transition-transform group-hover:translate-x-1" />
                    </Link>
                    <Link
                      href={`/rfq?product=${prod.slug}`}
                      className="text-[11px] font-semibold text-[#8e9fa7] hover:text-[#092b3c] underline"
                    >
                      Request supply
                    </Link>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* CTA SECTION */}
      <CTASection />
    </div>
  );
}
