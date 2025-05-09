"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Heart, Sparkles, Calendar, Ruler } from "lucide-react";

const details = [
  {
    icon: Calendar,
    title: "Date of Birth",
    value: "5th May 1995",
  },
  {
    icon: Ruler,
    title: "Height",
    value: "5'9\" (175 cm)",
  },
  {
    icon: GraduationCap,
    title: "Education",
    value: "B.Tech in Computer Science",
  },
  {
    icon: Briefcase,
    title: "Profession",
    value: "Full-Stack Developer at MNC",
  },
  {
    icon: Sparkles,
    title: "Hobbies",
    value: "Music, Travel, Cooking",
  },
  {
    icon: Heart,
    title: "Looking For",
    value: "A kind and understanding life partner",
  },
];

const DetailsSection = () => {
  return (
    <section className="px-6 md:px-20 py-20 bg-gradient-to-b from-red-100 via-white to-blue-200">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-12"
      >
        Details
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {details.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            className="bg-white shadow-lg rounded-xl p-6 flex items-start gap-4"
          >
            <div className="p-3 bg-blue-100 rounded-full text-blue-700 shadow">
              <item.icon className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-blue-900 font-semibold">{item.title}</h4>
              <p className="text-blue-700">{item.value}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default DetailsSection;
