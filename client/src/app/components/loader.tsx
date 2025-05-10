"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart } from "lucide-react";

const phrases = [
  "Thoda sabr karo, dulha milne wala hai 💍",
  "Loading your perfect jodi… 💑",
];

const MarriageLoader = ({ done }: { done?: boolean }) => {
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white text-blue-900"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Ring with Heart */}
          <motion.div
            className="w-32 h-32 border-[6px] border-blue-200 border-t-blue-600 rounded-full flex items-center justify-center mb-6"
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              duration: 1.6,
              ease: "linear",
            }}
          >
            <motion.div
              animate={{ scale: [1, 1.7, 1] }}
              transition={{ repeat: Infinity, duration: 1.2 }}
              className="bg-pink-100 p-3 rounded-full shadow-xl"
            >
              <Heart className="text-pink-600 w-6 h-6 animate-pulse" />
            </motion.div>
          </motion.div>

          {/* Changing Phrases */}
          <motion.p
            key={phraseIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="text-md text-center text-blue-700 font-medium min-h-[1.5rem]"
          >
            {phrases[phraseIndex]}
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MarriageLoader;
