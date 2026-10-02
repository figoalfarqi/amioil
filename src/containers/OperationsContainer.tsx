"use client";

import { motion } from "framer-motion";
import PageIntro from "@/components/PageIntro";
import CTASection from "@/components/CTASection";

export default function OperationsContainer() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
  };

  return (
    <div className="flex flex-col">
      {/* Page Intro */}
      <PageIntro
        eyebrow="TRADING & LOGISTICS"
        title={
          <>
            Every cargo starts
            <br />
            with a clear plan.
          </>
        }
        description="Commercial structuring and physical supply coordination, aligned with the requirements of each transaction."
      />

      {/* SECTION: TRADING SOLUTIONS */}
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
                TRADING SOLUTIONS
              </span>
            </div>

            <div className="lg:col-span-8 max-w-2xl">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#092b3c] leading-[1.14] mb-6">
                Spot opportunities.
                <br />
                Longer-term partnerships.
              </h2>
              <p className="text-xl sm:text-2xl text-[#35515f] leading-relaxed mb-6 font-normal">
                AMS evaluates international procurement, import supply, domestic trading, trial cargoes and recurring contract requirements.
              </p>
              <p className="text-[#60717b] text-base leading-relaxed">
                Volumes, delivery schedules, commercial terms and payment mechanisms are agreed between qualified counterparties. TT, documentary LC and SKBDN may be considered where appropriate and accepted by the relevant banks.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4 CARGO COORDINATION STEPS */}
      <section className="py-20 lg:py-24 bg-[#f8fafb] border-b border-[#dce4e8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-[11px] sm:text-[12px] font-bold tracking-[0.2em] text-[#bb964e] uppercase block mb-2">
              PHYSICAL COORDINATION
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#092b3c]">
              From terminal origin to discharge port.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                num: "01",
                title: "Producer & terminal",
                desc: "Source confirmation and loading arrangements.",
              },
              {
                num: "02",
                title: "Inspection & documents",
                desc: "Contractually agreed quantity and quality verification.",
              },
              {
                num: "03",
                title: "Ocean transport",
                desc: "Vessel and shipping coordination with qualified partners.",
              },
              {
                num: "04",
                title: "Destination delivery",
                desc: "Terminal, discharge and distribution arrangements.",
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

      {/* SECTION: LOGISTICS PARTNERS */}
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
                LOGISTICS PARTNERS
              </span>
            </div>

            <div className="lg:col-span-8 max-w-2xl">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#092b3c] leading-[1.14] mb-6">
                Coordinating the physical
                <br />
                supply chain.
              </h2>
              <p className="text-[#35515f] text-lg leading-relaxed mb-4">
                We seek cooperation with shipping companies, terminal operators, storage providers, independent inspectors and domestic logistics partners. FOB, CFR, CIF or other suitable delivery terms may be evaluated according to the commodity and contract.
              </p>
              <p className="text-[#60717b] text-base leading-relaxed">
                Assets and services are arranged through transaction-specific partners; availability is assessed before commitment.
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
