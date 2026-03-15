"use client";

import { motion } from "framer-motion";
import {
  FaShip,
  FaIndustry,
  FaHandshake,
  FaNetworkWired,
  FaChartLine,
} from "react-icons/fa";

export default function Operations() {
  const operations = [
    {
      icon: <FaHandshake />,
      text: "Local trading using TT / SKBDN (Local LC)",
    },
    {
      icon: <FaIndustry />,
      text: "Import trading using TT / LC at Sight",
    },
    {
      icon: <FaNetworkWired />,
      text: "Cooperation with ministry and custom laboratory for quality control",
    },
    {
      icon: <FaShip />,
      text: "Integrated supply chain from refinery to shipping",
    },
    {
      icon: <FaChartLine />,
      text: "Scalable trading volume based on consumer demand",
    },
  ];

  const topRow = operations.slice(0, 3);
  const bottomRow = operations.slice(3);

  return (
    <section id="operation" className="py-24 bg-white">
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
            Trade Operation
          </h2>

          <p className="text-gray-600 mt-3">
            Efficient trading operations supported by integrated logistics and reliable partners.
          </p>
        </motion.div>

        {/* Top Row */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topRow.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-xl transition"
            >
              <div className="text-yellow-500 text-3xl mb-4">{item.icon}</div>

              <p className="text-gray-700 text-lg leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Row (center) */}
        <div className="flex justify-center gap-8 mt-8 flex-wrap">
          {bottomRow.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-xl transition max-w-sm"
            >
              <div className="text-yellow-500 text-3xl mb-4">{item.icon}</div>

              <p className="text-gray-700 text-lg leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}