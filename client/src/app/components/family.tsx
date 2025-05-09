"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const family = [
  {
    name: "Mr. Rajesh Pandey",
    role: "Father – A guiding force",
    image: "/father.jpg", // Replace with real images in public folder
  },
  {
    name: "Mrs. Sunita Pandey",
    role: "Mother – The heart of our home",
    image: "/mother.jpg",
  },
  {
    name: "Ritika Pandey",
    role: "Sister – My forever friend",
    image: "/sister.jpg",
  },
];

const FamilySection = () => {
  return (
    <section className="px-6 md:px-20 py-20 bg-gradient-to-b from-blue-200 via-white to-red-100">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-12"
      >
        My Family
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto ">
        {family.map((member, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden text-center p-4 transform transition-transform duration-200 hover:scale-110"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="relative w-36 h-36 mx-auto rounded-full overflow-hidden border-4 border-blue-200 shadow-sm ">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover"
              />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-blue-900">
              {member.name}
            </h3>
            <p className="text-blue-700 text-sm mt-1">{member.role}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FamilySection;
