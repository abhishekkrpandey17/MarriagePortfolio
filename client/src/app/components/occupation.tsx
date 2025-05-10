"use client";

import { motion } from "framer-motion";
import { Briefcase, Building2, MapPin, Clock, BadgeCheck } from "lucide-react";

const occupationData = [
  {
    icon: Briefcase,
    label: "Current Position",
    value: "Managing partner, Full-Stack Developer",
  },
  {
    icon: Building2,
    label: "Company",
    value: "Codemap Partners, E-Bindle Pvt Ltd",
  },
  {
    icon: MapPin,
    label: "Work Location",
    value: "Greater Noida, India",
  },
  {
    icon: Clock,
    label: "Experience",
    value: "2+ Years in Software Development",
  },
  {
    icon: BadgeCheck,
    label: "Industry",
    value: "IT Services & Consulting",
  },
];

const OccupationSection = () => {
  return (
    <section className="px-6 md:px-20 py-20 bg-gradient-to-b from-red-100 via-white to-blue-200">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-12"
      >
        Occupation
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {occupationData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white shadow-md rounded-xl p-6 flex items-start gap-4"
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

export default OccupationSection;
