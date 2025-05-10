"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

const LetterPage = () => {
  const router = useRouter();

  return (
    <main className="min-h-screen px-6 md:px-20 py-7 bg-gradient-to-b from-blue-200 via-white to-red-100 text-blue-900">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold text-center mb-12"
      >
        Letter to My Future Partner
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto bg-blue-50 border border-blue-200 rounded-xl shadow-md p-8 md:p-12"
      >
        <p className="text-lg leading-relaxed text-blue-800">
          Dear Future Partner,
          <br /><br />
          I believe that marriage is not just a bond, but a journey — a journey where we grow together, support each other through thick and thin, and laugh through the small joys of life.
          <br /><br />
          I look forward to sharing prayers in the morning, planning simple things together, cooking with laughter, and being a safe space for one another.
          <br /><br />
          If you believe in kindness, commitment, family values, and unconditional support — then I believe we&#39;re already aligned in spirit.
          <br /><br />
          I can’t wait to begin a story with you — filled with love, respect, and deep understanding.
        </p>

        <p
          className="mt-8 text-xl text-pink-700 text-right font-cursive"
          style={{ fontFamily: "'Great Vibes', cursive" }}
        >
          — Abhishek 💖
        </p>
      </motion.div>

      {/* Back Button */}
      <div className="mt-12 text-center">
        <button
          onClick={() => router.push("/")}
          className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </button>
      </div>
    </main>
  );
};

export default LetterPage;
