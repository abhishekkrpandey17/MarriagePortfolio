"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const galleryImages = [
  "/images/my1.jpg",
  "/images/my2.jpg",
  "/images/my3.jpg",
  "/images/my4.jpg",
  "/images/my5.jpg",
  "/images/my6.jpg",
];

const GallerySection = () => {
  return (
    <section id="gallery" className="px-6 md:px-20 py-20 bg-gradient-to-b from-red-100 via-white to-blue-200">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-12"
      >
        Gallery
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
        {galleryImages.map((src, index) => (
          <motion.div
            key={index}
            className="relative group overflow-hidden rounded-xl shadow-lg"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <Image
              src={src}
              alt={`Gallery ${index + 1}`}
              width={250}
              height={250}
              className="object-cover w-full h-full transform group-hover:scale-110 transition duration-500"
            />
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-300" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default GallerySection;
