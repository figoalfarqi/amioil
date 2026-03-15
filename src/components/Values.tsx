"use client";

import { motion } from "framer-motion";
import {
  FaShieldAlt,
  FaUsers,
  FaCheckCircle,
  FaHandshake,
  FaUserTie,
} from "react-icons/fa";

export default function Values() {

  const values = [
    {
      icon: <FaShieldAlt />,
      title: "Integrity",
    },
    {
      icon: <FaCheckCircle />,
      title: "Safety",
    },
    {
      icon: <FaUserTie />,
      title: "Discipline",
    },
    {
      icon: <FaHandshake />,
      title: "Customer Focus",
    },
    {
      icon: <FaUsers />,
      title: "Team Work",
    },
  ];

  return (
    <section id="values" className="bg-[#0B2A5B] text-white py-24">

      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <motion.div
          initial={{opacity:0,y:40}}
          whileInView={{opacity:1,y:0}}
          transition={{duration:0.7}}
          viewport={{once:true}}
          className="text-center mb-14"
        >
          <h2 className="text-4xl font-bold">Our Core Values</h2>
          <p className="text-gray-300 mt-3">
            Principles that guide our operations and corporate culture.
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center">

          {values.map((item,index)=>(
            
            <motion.div
              key={index}
              initial={{opacity:0,y:40}}
              whileInView={{opacity:1,y:0}}
              transition={{duration:0.6, delay:index*0.1}}
              viewport={{once:true}}
              whileHover={{y:-6}}
              className="bg-[#123a78] p-8 rounded-xl shadow-lg hover:shadow-2xl transition"
            >

              <div className="text-yellow-400 text-4xl mb-4 flex justify-center">
                {item.icon}
              </div>

              <h3 className="font-semibold text-lg">
                {item.title}
              </h3>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}