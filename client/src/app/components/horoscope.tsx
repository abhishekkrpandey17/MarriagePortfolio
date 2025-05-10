"use client";

import { motion } from "framer-motion";
import { Star, Moon, Sparkles } from "lucide-react";

const horoscope = [
  {
    icon: Sparkles,
    label: "Gotra",
    value: "Contact for details",
  },
  {
    icon: Star,
    label: "Nakshatra",
    value: "Contact for details",
  },
  {
    icon: Moon,
    label: "Raashi",
    value: "Contact for details",
  },
];

const HoroscopeSection = () => {
  return (
    <section className="px-6 md:px-20 py-20 bg-gradient-to-b from-blue-200 via-white to-red-100">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-12"
      >
        Horoscope Details
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {horoscope.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ delay: index * 0.1, duration: 0.3 }}
            className="bg-blue-50 hover:bg-blue-100 shadow-md hover:shadow-xl border border-blue-100 hover:border-blue-300 rounded-xl p-6 flex items-center gap-4 transition-all duration-300 ease-in-out"
          >
            <div className="p-3 bg-blue-100 rounded-full text-blue-700 shadow">
              <item.icon className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-blue-900 font-semibold">{item.label}</h4>
              <p className="text-blue-700">{item.value}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HoroscopeSection;
