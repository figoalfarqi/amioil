"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import PageIntro from "@/components/PageIntro";
import CTASection from "@/components/CTASection";
import { FaArrowRight } from "react-icons/fa";

export default function SourcingContainer() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
  };

  return (
    <div className="flex flex-col">
      {/* Page Intro */}
      <PageIntro
        eyebrow="GLOBAL SOURCING"
        title={
          <>
            From qualified sources.
            <br />
            To connected markets.
          </>
        }
        description="AMS is building relationships across international energy and commodity supply chains."
      />

      {/* SECTION: OUR SOURCING NETWORK */}
      <section className="py-20 lg:py-28 border-b border-[#dce4e8] bg-white">
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
                OUR SOURCING NETWORK
              </span>
            </div>

            <div className="lg:col-span-8 max-w-2xl">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#092b3c] leading-[1.14] mb-6">
                A closer connection
                <br />
                to the source.
              </h2>
              <p className="text-xl sm:text-2xl text-[#35515f] leading-relaxed mb-6 font-normal">
                We evaluate opportunities with refineries, gas processors, sulfur producers, authorized exporters and established trading houses.
              </p>
              <p className="text-[#60717b] text-base leading-relaxed">
                Our objective is to shorten the commercial chain where practical while maintaining source verification, documentation and sound transaction controls. Relationships and supply capacity are assessed for each opportunity.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3 SOURCING STEPS */}
      <section className="py-20 lg:py-24 bg-[#f8fafb] border-b border-[#dce4e8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-[11px] sm:text-[12px] font-bold tracking-[0.2em] text-[#bb964e] uppercase block mb-2">
              EVALUATION PROCESS
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#092b3c]">
              Structuring sustainable supply channels.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                num: "01",
                title: "Source assessment",
                desc: "Product, origin, authority to sell and availability.",
              },
              {
                num: "02",
                title: "Commercial review",
                desc: "Pricing basis, contract volume and delivery terms.",
              },
              {
                num: "03",
                title: "Execution planning",
                desc: "Inspection, shipping and documentation requirements.",
              },
            ].map((step, idx) => (
              <motion.article
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-8 border border-[#dce4e8] shadow-sm hover:border-[#bb964e] transition-all"
              >
                <span className="text-sm font-extrabold text-[#bb964e] block mb-3">
                  {step.num}
                </span>
                <h3 className="text-2xl font-bold text-[#092b3c] mb-3">
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

      {/* SECTION: SUPPLIER PARTNERSHIPS */}
      <section className="py-20 lg:py-28 border-b border-[#dce4e8] bg-white">
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
                SUPPLIER PARTNERSHIPS
              </span>
            </div>

            <div className="lg:col-span-8 max-w-2xl">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#092b3c] leading-[1.14] mb-6">
                Bring your supply
                <br />
                to the conversation.
              </h2>
              <p className="text-[#35515f] text-lg leading-relaxed mb-6">
                We welcome qualified producers and suppliers seeking Indonesian market opportunities. Tell us your product, source, available volume, specifications and export terms.
              </p>
              <Link
                href="/supplier"
                className="inline-flex items-center gap-2.5 bg-[#092b3c] hover:bg-[#123d53] text-white px-7 py-3.5 text-sm font-bold tracking-wide transition-all shadow-md hover:shadow-lg"
              >
                <span>Supplier enquiry</span>
                <FaArrowRight size={12} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA SECTION */}
      <CTASection />
    </div>
  );
}
