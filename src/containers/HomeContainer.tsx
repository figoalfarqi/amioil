"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { PRODUCTS } from "@/data/products";
import CTASection from "@/components/CTASection";
import { FaArrowRight } from "react-icons/fa";

export default function HomeContainer() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  return (
    <div className="flex flex-col">
      {/* HERO SECTION */}
      <section
        className="relative min-h-[680px] lg:min-h-[760px] flex items-center bg-[#092638] text-white overflow-hidden"
        style={{
          backgroundImage: `url('/hero.jpg')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        {/* Cinematic Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#051b29]/95 via-[#051b29]/80 to-[#051b29]/30" />
        <div className="absolute inset-0 bg-radial-at-t from-transparent via-transparent to-[#051b29]/50" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <span className="inline-block text-[11px] sm:text-[12px] font-bold tracking-[0.25em] text-[#c8b177] uppercase mb-4">
              INTERNATIONAL ENERGY & COMMODITY TRADING
            </span>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.04] mb-6">
              Global supply.
              <br />
              Indonesian
              <br />
              <em className="text-[#d5b974] not-italic font-normal">opportunity.</em>
            </h1>

            <p className="text-lg sm:text-xl text-[#e0e9ed] max-w-xl font-normal leading-relaxed mb-8">
              Connecting global energy and industrial commodities with the needs of Indonesia’s growing markets.
            </p>

            <div className="flex flex-wrap items-center gap-5 sm:gap-7">
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2.5 bg-white text-[#092b3c] hover:bg-[#f2f6f7] px-7 py-4 font-bold text-sm tracking-wide transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                <span>Explore our commodities</span>
                <FaArrowRight size={13} />
              </Link>
              <Link
                href="/rfq"
                className="text-sm font-semibold text-white/90 hover:text-white border-b border-[#94abb6] hover:border-white pb-1 transition-all"
              >
                Discuss your requirements
              </Link>
            </div>
          </motion.div>

          {/* Bottom Right Hero Note */}
          <div className="mt-16 sm:mt-24 lg:mt-0 lg:absolute lg:bottom-12 lg:right-8 text-left lg:text-right">
            <span className="block text-[10px] tracking-[0.22em] text-[#a0b5c0] uppercase font-semibold">
              GLOBAL SOURCING / INDONESIAN MARKET ACCESS
            </span>
            <span className="block text-base sm:text-lg font-medium text-white/90 mt-1">
              Energy. Industry. Partnership.
            </span>
          </div>
        </div>
      </section>

      {/* TICKER STRIP */}
      <div className="bg-[#092b3c] text-white py-4 sm:py-5 border-y border-[#18394a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4 text-[11px] sm:text-[12px] font-bold tracking-[0.16em] uppercase text-[#bacbd3]">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#bb964e]" />
              PETROLEUM PRODUCTS
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#bb964e]" />
              GAS & NGL
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#bb964e]" />
              SULFUR & INDUSTRIAL COMMODITIES
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#bb964e]" />
              PETROCHEMICAL FEEDSTOCKS
            </span>
          </div>
        </div>
      </div>

      {/* SECTION 01: THE AMS APPROACH */}
      <section className="py-20 lg:py-28 border-b border-[#dce4e8] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeInUp}
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16"
          >
            <div className="lg:col-span-4">
              <span className="text-[12px] font-bold tracking-[0.18em] text-[#60717b] uppercase block">
                01 / THE AMS APPROACH
              </span>
            </div>

            <div className="lg:col-span-8 max-w-2xl">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#092b3c] leading-[1.14] mb-6">
                A commercial bridge.
                <br />
                A shared ambition.
              </h2>
              <p className="text-xl sm:text-2xl text-[#35515f] leading-relaxed mb-6 font-normal">
                PT Ami Mandiri Sejahtera is an Indonesian energy and commodity trading company developing supply connections between qualified international producers and Indonesian customers.
              </p>
              <p className="text-[#60717b] text-base leading-relaxed mb-8">
                We evaluate sourcing, import and distribution opportunities around product specifications, reliable supply, commercial discipline and the requirements of each transaction.
              </p>
              <Link
                href="/about"
                className="link-gold inline-flex items-center gap-2 text-sm font-bold text-[#092b3c] group"
              >
                <span>Get to know AMS</span>
                <FaArrowRight className="text-[11px] text-[#bb964e] transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 02: OUR COMMODITIES */}
      <section className="py-20 lg:py-24 bg-[#f2f6f7] border-b border-[#dce4e8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Heading */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-[11px] sm:text-[12px] font-bold tracking-[0.2em] text-[#bb964e] uppercase block mb-2">
                02 / OUR COMMODITIES
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#092b3c] leading-tight">
                Essential resources.
                <br />
                Connected markets.
              </h2>
            </div>
            <Link
              href="/products"
              className="link-gold inline-flex items-center gap-2 text-sm font-bold text-[#092b3c] group"
            >
              <span>View the full portfolio</span>
              <FaArrowRight className="text-[11px] text-[#bb964e] transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Product Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {PRODUCTS.map((prod) => (
              <motion.div
                key={prod.slug}
                variants={fadeInUp}
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
                    className="text-[11px] text-[#8e9fa7] hover:text-[#092b3c] underline"
                  >
                    RFQ
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 03: SULFUR SOURCING */}
      <section className="py-20 lg:py-28 border-b border-[#dce4e8] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeInUp}
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center"
          >
            <div className="lg:col-span-4">
              <span className="text-[12px] font-bold tracking-[0.18em] text-[#60717b] uppercase block">
                03 / SULFUR SOURCING
              </span>
            </div>

            <div className="lg:col-span-8 max-w-2xl">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#092b3c] leading-[1.14] mb-6">
                A focus on sulfur.
                <br />
                A connection to industry.
              </h2>
              <p className="text-xl sm:text-2xl text-[#35515f] leading-relaxed mb-6 font-normal">
                Refinery and gas-processing by-products can become essential inputs for Indonesian industry.
              </p>
              <p className="text-[#60717b] text-base leading-relaxed mb-8">
                AMS is developing sulfur sourcing relationships for granules and other agreed forms of elemental sulfur, serving fertilizer, sulfuric acid, chemical and mineral-processing demand.
              </p>
              <Link
                href="/products/sulfur"
                className="inline-flex items-center gap-2.5 bg-[#092b3c] hover:bg-[#123d53] text-white px-7 py-3.5 text-sm font-bold tracking-wide transition-all shadow-md hover:shadow-lg"
              >
                <span>Explore sulfur supply</span>
                <FaArrowRight size={12} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 04: FROM SOURCE TO DESTINATION */}
      <section className="py-20 lg:py-24 bg-white border-b border-[#dce4e8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-[11px] sm:text-[12px] font-bold tracking-[0.2em] text-[#bb964e] uppercase block mb-2">
              04 / FROM SOURCE TO DESTINATION
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#092b3c] leading-tight">
              A considered approach
              <br />
              to every cargo.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                num: "01",
                title: "Define",
                desc: "Product, specification, volume and destination.",
              },
              {
                num: "02",
                title: "Qualify",
                desc: "Counterparty, source and transaction review.",
              },
              {
                num: "03",
                title: "Structure",
                desc: "Commercial terms, inspection and payment.",
              },
              {
                num: "04",
                title: "Coordinate",
                desc: "Shipping, documentation and delivery partners.",
              },
            ].map((step, idx) => (
              <motion.article
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="border-t-2 border-[#dce4e8] pt-6 hover:border-[#bb964e] transition-colors"
              >
                <span className="text-sm font-extrabold text-[#bb964e] block mb-2">
                  {step.num}
                </span>
                <h3 className="text-xl font-bold text-[#092b3c] mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-[#60717b] leading-relaxed">
                  {step.desc}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <CTASection />
    </div>
  );
}
