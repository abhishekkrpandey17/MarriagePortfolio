"use client";

import { motion } from "framer-motion";
import {
  Flower2,
  BookText,
  HandCoins,
  Users,
  SunMoon,
} from "lucide-react";

const beliefs = [
  {
    icon: Flower2,
    title: "Spiritual Practice",
    description: "Daily pooja and devotional reading are a regular part of life.",
  },
  {
    icon: Users,
    title: "Family Values",
    description: "Deeply rooted in respect, love, and care for all generations.",
  },
  {
    icon: HandCoins,
    title: "Simple Living",
    description: "We believe in humility, simplicity, and gratitude.",
  },
  {
    icon: SunMoon,
    title: "Festivals",
    description: "Celebrates Diwali, Holi, Navratri and family traditions joyfully.",
  },
  {
    icon: BookText,
    title: "Cultural Balance",
    description: "Comfortable with tradition while appreciating modern perspectives.",
  },
];

const BeliefsSection = () => {
  return (
    <section id="beliefs" className="px-6 md:px-20 py-20 bg-gradient-to-b from-blue-200 via-white to-red-100">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-12"
      >
        Spiritual & Cultural Beliefs
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {beliefs.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="bg-blue-50 shadow-md hover:shadow-lg transition-all duration-300 rounded-xl p-6 flex gap-4 items-start border border-blue-100"
          >
            <div className="p-3 bg-blue-100 rounded-full text-blue-700 shadow">
              <item.icon className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-blue-900 font-semibold text-base">{item.title}</h4>
              <p className="text-blue-700 text-sm mt-1">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default BeliefsSection;
