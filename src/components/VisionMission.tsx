"use client";

import { motion } from "framer-motion";
import { FaBullseye, FaRocket } from "react-icons/fa";

export default function VisionMission() {
  return (
    <section id="vision" className="py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#0B2A5B]">
            Vision & Mission
          </h2>
          <p className="text-gray-600 mt-3">
            Our commitment to becoming a reliable energy trading company.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-white p-10 rounded-xl shadow-lg"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-yellow-400 p-4 rounded-lg text-white text-2xl">
                <FaBullseye />
              </div>

              <h3 className="text-2xl font-bold text-[#0B2A5B]">
                Our Vision
              </h3>
            </div>

            <p className="text-gray-700 text-lg leading-relaxed">
              To be one of the leading independent oil trading, development
              and production oil companies in the region where we operate.
            </p>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-white p-10 rounded-xl shadow-lg"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-yellow-400 p-4 rounded-lg text-white text-2xl">
                <FaRocket />
              </div>

              <h3 className="text-2xl font-bold text-[#0B2A5B]">
                Our Mission
              </h3>
            </div>

            <ul className="space-y-4 text-gray-700">

              <li className="flex items-start gap-3">
                <span className="text-yellow-500 text-xl">•</span>
                Secure and reliable supplier of petroleum products
              </li>

              <li className="flex items-start gap-3">
                <span className="text-yellow-500 text-xl">•</span>
                Managing operations with world-class HSSE standards
              </li>

              <li className="flex items-start gap-3">
                <span className="text-yellow-500 text-xl">•</span>
                Building an integrated corporate organization
              </li>

              <li className="flex items-start gap-3">
                <span className="text-yellow-500 text-xl">•</span>
                Becoming a positive role model for Indonesian oil companies
              </li>

            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}