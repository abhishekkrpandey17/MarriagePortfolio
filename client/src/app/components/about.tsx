"use client";

import { motion } from "framer-motion";
import { Building2, Laptop2, CalendarHeart, GraduationCap, Briefcase, Sparkles } from "lucide-react";

const timeline = [
  {
    year: "2001",
    title: "Born in Mirzapur, Uttar Pradesh, India",
    icon: CalendarHeart,
  },
  {
    year: "2019",
    title: "Started a business in the field of paying guest services in Mumbai.",
    icon: Building2,
  },
  {
    year: "2022",
    title: "Started B.Tech in Computer Science with specialization in Artifiicial Intelligence.",
    icon: GraduationCap,
  },
  {
    year: "2024",
    title: "Started my journey as a Managing Partner and Full-Stack Developer at Codemap Partners.",
    icon: Briefcase,
  },
  {
    year: "2025",
    title: "Started my journey as a Full-Stack Developer at E-Bindle Pvt Ltd.",
    icon: Laptop2,
  },
  {
    year: "Now",
    title: "I love building things, traveling, and sharing joy.",
    icon: Sparkles,
  },
];

const AboutSection = () => {
  return (
    <section id="" className="px-6 md:px-20 py-20 bg-gradient-to-b from-blue-200 via-white to-red-100 relative z-10">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-12"
      >
        About Me
      </motion.h2>

      <div className="space-y-10 max-w-3xl mx-auto">
        {timeline.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="flex items-center gap-4"
          >
            <div className="bg-blue-100 text-blue-700 rounded-full p-3 shadow">
              <item.icon className="w-10 h-10" />
            </div>
            <div>
              <p className="text-sm text-blue-500">{item.year}</p>
              <p className="text-lg font-medium text-blue-900">{item.title}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
