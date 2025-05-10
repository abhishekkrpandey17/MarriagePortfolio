"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import Image from "next/image";

const MarriagePhilosophy = () => {
  return (
    <section className="relative px-6 md:px-20 py-24 bg-gradient-to-br from-white to-blue-50 overflow-hidden">
      {/* Mandala Background */}
      <div className="absolute inset-0 opacity-10 z-0 pointer-events-none flex justify-center items-center">
        <Image
          src="/mandala.svg" // place in /public
          alt="Mandala"
          width={400}
          height={400}
          className="opacity-10"
        />
      </div>

      {/* Content Block */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-3xl mx-auto text-center bg-white shadow-xl rounded-3xl p-10 border border-blue-100"
      >
        {/* Decorative Heart */}
        <motion.div
          className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-pink-100 border border-pink-300 rounded-full p-3 shadow"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <Heart className="text-pink-600 w-6 h-6 animate-pulse" />
        </motion.div>

        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6 mt-4">
          My Marriage Philosophy
        </h2>

        <p className="text-blue-700 text-base leading-relaxed italic">
          “Marriage, for me, is not just a social institution — it&apos;s a sacred partnership. I believe it&apos;s about growing together, laughing freely, standing by each other&apos;s dreams, and building a peaceful, loving life that reflects trust, empathy, and shared values.”
        </p>

        <p
          className="mt-6 text-pink-700 text-xl font-[500] font-cursive"
          style={{ fontFamily: `'Great Vibes', cursive` }}
        >
          — Abhishek
        </p>
      </motion.div>
    </section>
  );
};

export default MarriagePhilosophy;
