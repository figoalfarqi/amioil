"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src="/aboutPage.png"
            alt="About AMS Oil & Gas Trading"
            className="rounded-xl shadow-xl w-full object-cover"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-[#0B2A5B] mb-6">
            About Us
          </h2>

          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            Ami Mandiri Sejahtera is an Indonesian company focused on oil and
            gas trading activities. Our operational area covers all Indonesia
            and regional markets.
          </p>

          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            We collaborate with credible refinery partners to supply petroleum
            products and provide reliable trading solutions for our customers.
          </p>

          <p className="text-lg leading-relaxed text-gray-700">
            Our goal is to meet both domestic and international energy demands
            by delivering efficient supply chains, professional services, and
            trusted partnerships in the oil and gas industry.
          </p>
        </motion.div>

      </div>
    </section>
  );
}