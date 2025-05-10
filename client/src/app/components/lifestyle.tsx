"use client";

import { motion } from "framer-motion";
import {
  UtensilsCrossed,
  Droplet,
  Dumbbell,
  Sparkles,
} from "lucide-react";

const lifestyle = [
  {
    icon: UtensilsCrossed,
    title: "Food Preference",
    value: "🟢Pure Vegetarian",
  },
  {
    icon: Droplet,
    title: "Drinking / Smoking",
    value: "❌ Doesn't drink or smoke",
  },
  {
    icon: Sparkles,
    title: "Hobbies & Interests",
    value: "💡 Music, Traveling, Cooking, Art, Spiritual Reading",
  },
  {
    icon: Dumbbell,
    title: "Fitness Routine",
    value: " 📋 Morning walk, weekend trekking, occasional yoga",
  },
];

const LifestyleSection = () => {
  return (
    <section className="px-6 md:px-20 py-20 bg-gradient-to-b from-red-100 via-white to-blue-200">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-12"
      >
        Lifestyle & Hobbies
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {lifestyle.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.03 }}
            className="bg-blue-50 shadow-md rounded-xl p-6 flex items-start gap-4 border border-blue-100 hover:shadow-lg hover:border-blue-400 transition-all duration-300 ease-in-out cursor-default"
          >
            <div className="p-3 bg-blue-100 rounded-full text-blue-700 shadow-sm">
              <item.icon className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-blue-900 font-semibold">{item.title}</h4>
              <p className="text-blue-700 text-sm mt-1">{item.value}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default LifestyleSection;
