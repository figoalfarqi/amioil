"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import PageIntro from "@/components/PageIntro";
import CTASection from "@/components/CTASection";
import { PRODUCTS, ProductItem } from "@/data/products";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

interface ProductDetailContainerProps {
  slug: string;
}

export default function ProductDetailContainer({
  slug,
}: ProductDetailContainerProps) {
  const product: ProductItem | undefined = PRODUCTS.find(
    (p) => p.slug.toLowerCase() === slug.toLowerCase()
  );

  if (!product) {
    notFound();
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
  };

  return (
    <div className="flex flex-col">
      {/* Back to Commodities Link */}
      <div className="bg-[#f2f6f7] pt-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <Link
          href="/products"
          className="inline-flex items-center gap-2 text-xs font-bold text-[#60717b] hover:text-[#092b3c] transition-colors"
        >
          <FaArrowLeft size={10} />
          <span>All Commodities</span>
        </Link>
      </div>

      {/* Page Intro */}
      <PageIntro
        eyebrow={product.category}
        title={product.title}
        description={product.description}
        badge="Commodity Specification"
      />

      {/* SECTION: APPLICATIONS */}
      <section className="py-20 lg:py-24 border-b border-[#dce4e8] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start"
          >
            <div className="lg:col-span-4">
              <span className="text-[12px] font-bold tracking-[0.18em] text-[#60717b] uppercase block">
                APPLICATIONS
              </span>
            </div>

            <div className="lg:col-span-8 max-w-2xl">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#092b3c] leading-[1.14] mb-6">
                For your industry.
              </h2>
              <p className="text-xl sm:text-2xl text-[#35515f] leading-relaxed mb-6 font-normal">
                {product.applications}
              </p>
              {product.details && (
                <p className="text-base text-[#60717b] leading-relaxed">
                  {product.details}
                </p>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION: SUPPLY REQUIREMENTS */}
      <section className="py-20 lg:py-24 border-b border-[#dce4e8] bg-[#f8fafb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start"
          >
            <div className="lg:col-span-4">
              <span className="text-[12px] font-bold tracking-[0.18em] text-[#60717b] uppercase block">
                SUPPLY REQUIREMENTS
              </span>
            </div>

            <div className="lg:col-span-8 max-w-2xl">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#092b3c] leading-[1.14] mb-6">
                Start with the specification.
              </h2>
              <div className="bg-white p-6 border-l-4 border-[#bb964e] border-y border-r border-[#dce4e8] mb-6 shadow-sm">
                <span className="text-xs font-bold text-[#bb964e] tracking-wider uppercase block mb-1">
                  Required Parameters
                </span>
                <p className="text-base text-[#102f3e] font-medium leading-relaxed">
                  {product.supplyRequirements}
                </p>
              </div>

              <p className="text-base text-[#60717b] leading-relaxed mb-8">
                Share your quantity, destination port or terminal, delivery window and preferred commercial terms. Inspection, origin, documentation and payment arrangements are established for each contract.
              </p>

              <Link
                href={`/rfq?product=${product.slug}`}
                className="inline-flex items-center gap-2.5 bg-[#092b3c] hover:bg-[#123d53] text-white px-8 py-4 font-bold text-sm tracking-wide transition-all shadow-md hover:shadow-lg"
              >
                <span>Enquire about {product.title}</span>
                <FaArrowRight size={12} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION: COMMERCIAL APPROACH */}
      <section className="py-20 lg:py-24 border-b border-[#dce4e8] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start"
          >
            <div className="lg:col-span-4">
              <span className="text-[12px] font-bold tracking-[0.18em] text-[#60717b] uppercase block">
                COMMERCIAL APPROACH
              </span>
            </div>

            <div className="lg:col-span-8 max-w-2xl">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#092b3c] leading-[1.14] mb-6">
                Supply evaluated
                <br />
                on a transaction basis.
              </h2>
              <p className="text-base text-[#60717b] leading-relaxed">
                Products are subject to source availability, supplier qualification, destination requirements, licensing, logistics suitability and final agreement. Product listings describe our sourcing focus and do not constitute a binding offer or confirmed inventory.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA SECTION */}
      <CTASection />
    </div>
  );
}
