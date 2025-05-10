"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

const LetterSection = () => {
  const router = useRouter();

  return (
    <section
      id="letter"
      className="px-6 md:px-20 py-24 bg-gradient-to-b from-red-100 via-white to-blue-200 text-blue-900 text-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold mb-6"
      >
        Letter to My Future Partner
      </motion.h2>

      <p className="text-blue-700 mb-8 max-w-2xl mx-auto">
        I’ve written a heartfelt message to the person I’ll be sharing my life with. Click below to read it.
      </p>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => router.push("/letter")}
        className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition"
      >
        <BookOpen className="w-5 h-5" />
        Read
      </motion.button>
    </section>
  );
};

export default LetterSection;
