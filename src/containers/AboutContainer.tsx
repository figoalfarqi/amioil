"use client";

import { motion } from "framer-motion";
import PageIntro from "@/components/PageIntro";
import CTASection from "@/components/CTASection";

export default function AboutContainer() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
  };

  return (
    <div className="flex flex-col">
      {/* Page Intro */}
      <PageIntro
        eyebrow="ABOUT AMS"
        title={
          <>
            Indonesian roots.
            <br />
            International perspective.
          </>
        }
        description="We connect energy and industrial supply opportunities with the requirements of qualified customers."
      />

      {/* SECTION: OUR COMPANY */}
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
                OUR COMPANY
              </span>
            </div>

            <div className="lg:col-span-8 max-w-2xl">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#092b3c] leading-[1.14] mb-6">
                Built around commercial partnership.
              </h2>
              <p className="text-xl sm:text-2xl text-[#35515f] leading-relaxed mb-6 font-normal">
                PT Ami Mandiri Sejahtera (AMS) is an Indonesian energy and commodity trading company focused on developing international sourcing and domestic market access.
              </p>
              <p className="text-[#60717b] text-base leading-relaxed">
                Our focus encompasses petroleum products, selected gas and NGL products, sulfur and other refinery commodities. We work to identify qualified sources and coordinate transaction-specific supply solutions with producers, trading houses and logistics partners.
              </p>

              {/* Visual Showcase Card */}
              <div className="mt-10 p-6 bg-[#f2f6f7] border-l-4 border-[#bb964e]">
                <h4 className="text-sm font-bold text-[#092b3c] uppercase tracking-wider mb-2">
                  Market Reach & Focus
                </h4>
                <p className="text-sm text-[#60717b]">
                  Bridging certified global supply terminals across the Middle East, Southeast Asia, and Asia-Pacific directly to Indonesian industrial distribution networks.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION: OUR DIRECTION (VISION & MISSION) */}
      <section className="py-20 lg:py-28 border-b border-[#dce4e8] bg-[#f8fafb]">
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
                OUR DIRECTION
              </span>
            </div>

            <div className="lg:col-span-8 max-w-2xl">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#092b3c] leading-[1.14] mb-10">
                A stronger connection
                <br />
                between resources and markets.
              </h2>

              <div className="space-y-8">
                <div className="bg-white p-8 border border-[#dce4e8] shadow-sm">
                  <h3 className="text-xl font-bold text-[#092b3c] mb-3 flex items-center gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#bb964e]" />
                    Vision
                  </h3>
                  <p className="text-base text-[#60717b] leading-relaxed">
                    To become a trusted Indonesian international energy and commodity trading company connecting global resources with the requirements of Indonesia and the wider Asian market.
                  </p>
                </div>

                <div className="bg-white p-8 border border-[#dce4e8] shadow-sm">
                  <h3 className="text-xl font-bold text-[#092b3c] mb-3 flex items-center gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#bb964e]" />
                    Mission
                  </h3>
                  <p className="text-base text-[#60717b] leading-relaxed">
                    Develop reliable supplier relationships, strengthen access to competitive supply, conduct business transparently and build resilient commercial partnerships.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CORE VALUES / STEPS */}
      <section className="py-20 lg:py-24 bg-white border-b border-[#dce4e8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-[11px] sm:text-[12px] font-bold tracking-[0.2em] text-[#bb964e] uppercase block mb-2">
              OUR PRINCIPLES
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#092b3c]">
              Built on enduring standards.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                num: "01",
                title: "Integrity",
                desc: "Clear communication and transparent commercial terms.",
              },
              {
                num: "02",
                title: "Discipline",
                desc: "Specifications, documentation and due diligence.",
              },
              {
                num: "03",
                title: "Partnership",
                desc: "Mutually beneficial, lasting supply relationships.",
              },
            ].map((val, idx) => (
              <motion.article
                key={val.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="border-t-2 border-[#dce4e8] pt-6 hover:border-[#bb964e] transition-colors"
              >
                <span className="text-sm font-extrabold text-[#bb964e] block mb-2">
                  {val.num}
                </span>
                <h3 className="text-2xl font-bold text-[#092b3c] mb-3">
                  {val.title}
                </h3>
                <p className="text-sm text-[#60717b] leading-relaxed">
                  {val.desc}
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
