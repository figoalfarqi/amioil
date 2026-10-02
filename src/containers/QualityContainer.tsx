"use client";

import { motion } from "framer-motion";
import PageIntro from "@/components/PageIntro";
import CTASection from "@/components/CTASection";

export default function QualityContainer() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
  };

  return (
    <div className="flex flex-col">
      {/* Page Intro */}
      <PageIntro
        eyebrow="QUALITY & COMPLIANCE"
        title={
          <>
            Confidence begins
            <br />
            with the details.
          </>
        }
        description="Specifications, source verification and clear documentation support responsible commodity trading."
      />

      {/* SECTION: PRODUCT INTEGRITY */}
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
                PRODUCT INTEGRITY
              </span>
            </div>

            <div className="lg:col-span-8 max-w-2xl">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#092b3c] leading-[1.14] mb-6">
                Agree the standard.
                <br />
                Verify the cargo.
              </h2>
              <p className="text-xl sm:text-2xl text-[#35515f] leading-relaxed mb-6 font-normal">
                Each transaction begins with agreed specifications, sampling and inspection requirements.
              </p>
              <p className="text-[#60717b] text-base leading-relaxed">
                Independent quantity and quality inspection can be arranged according to the contract. Documentation may include certificates of quality, quantity and origin, analysis, safety data sheets, bills of lading, commercial invoices and applicable customs documents.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3 COMPLIANCE PILLARS */}
      <section className="py-20 lg:py-24 bg-[#f8fafb] border-b border-[#dce4e8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-[11px] sm:text-[12px] font-bold tracking-[0.2em] text-[#bb964e] uppercase block mb-2">
              DUE DILIGENCE PILLARS
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#092b3c]">
              Rigorous transaction verification.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                num: "01",
                title: "Know the counterparty",
                desc: "Identity, authority and corporate documentation.",
              },
              {
                num: "02",
                title: "Know the product",
                desc: "Source, specification and agreed inspection.",
              },
              {
                num: "03",
                title: "Know the transaction",
                desc: "Banking, vessel, applicable trade restrictions and import requirements.",
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

      {/* SECTION: TRANSACTION REVIEW */}
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
                TRANSACTION REVIEW
              </span>
            </div>

            <div className="lg:col-span-8 max-w-2xl">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#092b3c] leading-[1.14] mb-6">
                A disciplined commercial approach.
              </h2>
              <p className="text-[#35515f] text-lg leading-relaxed mb-4">
                AMS evaluates counterparties, product origin, documentation, banking arrangements and shipping information before proceeding. Applicable sanctions screening, destination regulations and customs requirements are part of transaction planning.
              </p>
              <p className="text-[#60717b] text-base leading-relaxed">
                Due diligence requirements and responsibilities are established for the specific transaction.
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
