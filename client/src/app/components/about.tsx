"use client";

import { motion } from "framer-motion";
import { CalendarHeart, GraduationCap, Briefcase, Sparkles } from "lucide-react";

const timeline = [
  {
    year: "1995",
    title: "Born in Varanasi",
    icon: CalendarHeart,
  },
  {
    year: "2016",
    title: "Graduated B.Tech in Computer Science",
    icon: GraduationCap,
  },
  {
    year: "2018",
    title: "Started my journey as a Full-Stack Developer",
    icon: Briefcase,
  },
  {
    year: "Now",
    title: "I love building things, traveling, and sharing joy.",
    icon: Sparkles,
  },
];

const AboutSection = () => {
  return (
    <section className="px-6 md:px-20 py-20 bg-gradient-to-b from-red-100 via-white to-blue-200 relative z-10">
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
