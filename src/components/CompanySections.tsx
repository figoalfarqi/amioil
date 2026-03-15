"use client";

import { motion } from "framer-motion";
import { FaShip, FaChartLine, FaUsers } from "react-icons/fa";

export default function CompanySections() {
  const sections = [
    {
      title: "Fleet",
      icon: <FaShip size={40} />,
      text: `Placing special experienced technicians and performing regular maintenance on cars and ships transporting equipment so as to support time in fuel delivery.`,
    },

    {
      title: "Business Plan",
      icon: <FaChartLine size={40} />,
      text: `Adding more optimal transportation facilities and rejuvenating transportation equipment. Improving services by prioritizing the quality of HR team work with more reliable training and workshops. Create wider job opportunities.`,
    },

    {
      title: "Human Resources",
      icon: <FaUsers size={40} />,
      text: `Supported by reliable and skilled human resources and supported by up-to-date computing, agile in carrying out tasks, and professional in carrying out all operational activities in order to provide the best service for customers.`,
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-[#0B2A5B] mb-16">
          Company Strength
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {sections.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition"
            >
              <div className="text-yellow-500 mb-6">{item.icon}</div>

              <h3 className="text-xl font-bold text-[#0B2A5B] mb-4">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
