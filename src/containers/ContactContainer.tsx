"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import PageIntro from "@/components/PageIntro";
import { FaArrowRight, FaEnvelope, FaBuilding } from "react-icons/fa";

export default function ContactContainer() {
  return (
    <div className="flex flex-col">
      {/* Page Intro */}
      <PageIntro
        eyebrow="CONTACT AMS"
        title={
          <>
            A conversation today.
            <br />
            A partnership tomorrow.
          </>
        }
        description="Speak with AMS about sourcing, supply and strategic partnerships."
      />

      {/* CONTACT GRID: BUYERS & SUPPLIERS */}
      <section className="py-20 lg:py-24 bg-white border-b border-[#dce4e8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Buyer Card */}
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="border border-[#dce4e8] p-8 sm:p-12 bg-white flex flex-col justify-between hover:border-[#bb964e] hover:shadow-xl transition-all"
            >
              <div>
                <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#bb964e] block mb-3">
                  BUYERS
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-[#092b3c] mb-4">
                  Source with AMS.
                </h2>
                <p className="text-base text-[#60717b] leading-relaxed mb-8">
                  Discuss product specifications, quantities and delivery requirements with our trading desk.
                </p>
              </div>
              <Link
                href="/rfq"
                className="inline-flex items-center justify-center gap-2.5 bg-[#092b3c] hover:bg-[#123d53] text-white px-7 py-4 text-sm font-bold tracking-wide transition-all shadow-md self-start"
              >
                <span>Request supply</span>
                <FaArrowRight size={12} />
              </Link>
            </motion.article>

            {/* Supplier Card */}
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="border border-[#dce4e8] p-8 sm:p-12 bg-white flex flex-col justify-between hover:border-[#bb964e] hover:shadow-xl transition-all"
            >
              <div>
                <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#bb964e] block mb-3">
                  SUPPLIERS
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-[#092b3c] mb-4">
                  Supply with AMS.
                </h2>
                <p className="text-base text-[#60717b] leading-relaxed mb-8">
                  Introduce your source, products and export opportunities to connect with Indonesian market demand.
                </p>
              </div>
              <Link
                href="/supplier"
                className="inline-flex items-center justify-center gap-2.5 bg-[#092b3c] hover:bg-[#123d53] text-white px-7 py-4 text-sm font-bold tracking-wide transition-all shadow-md self-start"
              >
                <span>Supplier enquiry</span>
                <FaArrowRight size={12} />
              </Link>
            </motion.article>
          </div>
        </div>
      </section>

      {/* SECTION: GET IN TOUCH */}
      <section className="py-20 lg:py-28 border-b border-[#dce4e8] bg-[#f8fafb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-4">
              <span className="text-[12px] font-bold tracking-[0.18em] text-[#60717b] uppercase block">
                GET IN TOUCH
              </span>
            </div>

            <div className="lg:col-span-8 max-w-2xl space-y-8">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#092b3c] mb-2">
                  PT Ami Mandiri Sejahtera
                </h2>
                <span className="text-sm font-semibold tracking-wider text-[#bb964e] uppercase block">
                  International Energy & Commodity Trading
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
                <div className="bg-white p-6 border border-[#dce4e8] shadow-sm">
                  <div className="flex items-center gap-2.5 text-[#bb964e] mb-2">
                    <FaEnvelope size={15} />
                    <h3 className="text-sm font-bold uppercase tracking-wider text-[#092b3c]">
                      Commercial enquiries
                    </h3>
                  </div>
                  <a
                    href="mailto:sales@amioil.id"
                    className="text-lg font-semibold text-[#092b3c] hover:text-[#bb964e] transition-colors"
                  >
                    sales@amioil.id
                  </a>
                  <p className="text-xs text-[#82939c] mt-1">
                    Commodity supply, cargo offers & RFQs
                  </p>
                </div>

                <div className="bg-white p-6 border border-[#dce4e8] shadow-sm">
                  <div className="flex items-center gap-2.5 text-[#bb964e] mb-2">
                    <FaBuilding size={15} />
                    <h3 className="text-sm font-bold uppercase tracking-wider text-[#092b3c]">
                      General enquiries
                    </h3>
                  </div>
                  <a
                    href="mailto:office@amioil.id"
                    className="text-lg font-semibold text-[#092b3c] hover:text-[#bb964e] transition-colors"
                  >
                    office@amioil.id
                  </a>
                  <p className="text-xs text-[#82939c] mt-1">
                    Corporate correspondence & partnerships
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-[#dce4e8] text-sm text-[#60717b] flex flex-wrap gap-4 items-center">
                <span>Indonesia</span>
                <span>·</span>
                <a
                  href="https://amioil.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#092b3c] underline hover:text-[#bb964e]"
                >
                  amioil.id
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
