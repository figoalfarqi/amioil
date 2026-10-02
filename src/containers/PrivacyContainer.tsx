"use client";

import { motion } from "framer-motion";
import PageIntro from "@/components/PageIntro";

export default function PrivacyContainer() {
  return (
    <div className="flex flex-col">
      {/* Page Intro */}
      <PageIntro
        eyebrow="ENQUIRY INFORMATION"
        title={
          <>
            Your information.
            <br />
            Your choice.
          </>
        }
        description="How this website handles commercial enquiries."
      />

      {/* SECTION: EMAIL ENQUIRIES */}
      <section className="py-20 lg:py-28 border-b border-[#dce4e8] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start"
          >
            <div className="lg:col-span-4">
              <span className="text-[12px] font-bold tracking-[0.18em] text-[#60717b] uppercase block">
                EMAIL ENQUIRIES
              </span>
            </div>

            <div className="lg:col-span-8 max-w-2xl space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#092b3c] leading-[1.14]">
                Review before sending.
              </h2>
              <p className="text-lg text-[#35515f] leading-relaxed">
                The buyer and supplier forms prepare an email draft using the information you enter. This website does not store or submit the enquiry to a server. Sending the email is a separate action you take in your email application.
              </p>
              <p className="text-base text-[#60717b] leading-relaxed">
                Any email you send is handled by your email provider and the recipient’s email service. Only include information you are comfortable sharing by email. Do not include banking credentials, identity documents or sensitive commercial documents in the initial enquiry.
              </p>
              <p className="text-base text-[#60717b] leading-relaxed">
                This website does not use analytics or tracking cookies. Please contact{" "}
                <a
                  href="mailto:office@amioil.id"
                  className="text-[#092b3c] font-semibold underline hover:text-[#bb964e]"
                >
                  office@amioil.id
                </a>{" "}
                with questions about an enquiry.
              </p>

              <div className="p-6 bg-[#f2f6f7] border-l-4 border-[#bb964e] mt-8">
                <h4 className="text-sm font-bold text-[#092b3c] uppercase tracking-wider mb-2">
                  Transparent Data Practice
                </h4>
                <p className="text-xs text-[#60717b] leading-relaxed">
                  PT Ami Mandiri Sejahtera strictly respects client confidentiality. Initial commercial parameters submitted via web forms remain exclusively in your local browser session until you voluntarily send them via verified corporate email.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
