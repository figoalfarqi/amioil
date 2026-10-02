"use client";

import { motion } from "framer-motion";

interface PageIntroProps {
  eyebrow: string;
  title: string | React.ReactNode;
  description: string;
  badge?: string;
}

export default function PageIntro({
  eyebrow,
  title,
  description,
  badge,
}: PageIntroProps) {
  return (
    <section className="bg-[#f2f6f7] border-b border-[#dce4e8] py-16 sm:py-24 relative overflow-hidden">
      {/* Decorative accent geometry */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#bb964e]/10 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-64 h-24 bg-[#092b3c]/5 pointer-events-none blur-2xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[11px] sm:text-[12px] font-bold tracking-[0.2em] text-[#bb964e] uppercase">
              {eyebrow}
            </span>
            {badge && (
              <span className="bg-[#092b3c] text-white text-[10px] font-semibold tracking-wider uppercase px-2.5 py-0.5 rounded-full">
                {badge}
              </span>
            )}
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#092b3c] leading-[1.08] mb-6">
            {title}
          </h1>

          <p className="text-lg sm:text-xl text-[#60717b] max-w-3xl leading-relaxed">
            {description}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
