"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section
      id="home"
      className=" min-h-[70vh] bg-gradient-to-b from-blue-200 via-white to-red-100 flex flex-col md:flex-row items-center justify-center md:justify-between px-6 md:px-28 pt-22 pb-13 gap-16 md:gap-0"
    >
    <div className="flex flex-col-reverse md:flex-row items-center justify-center md:justify-between w-full">
      {/* Left: Intro Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="md:w-1/2 text-center md:text-left space-y-6 z-10"
      >
       
        <h1 className="text-2xl md:text-6xl font-extrabold text-blue-900 leading-tight">
          नमस्ते 🙏🏻 , I am <br></br><span className="text-blue-600 hover:text-yellow-600">Abishek Kr. Pandey</span>
        </h1>
        <p className="text-lg md:text-xl text-blue-800 max-w-xl">
          “Seeking a Life Partner who values love, culture, and companionship.”
        </p>
        
        <a href="#contact">
          <button
            className="bg-blue-600 inline-block px-10 py-3  text-white font-semibold rounded-full shadow-md hover:bg-blue-700  transform transition-transform duration-200 hover:scale-130"
          >
            Contact
          </button>
        </a>
        
      </motion.div>

      {/* Right: Hero Image */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="md:w-1/2 flex justify-center"
      >
        <div className="relative w-72 h-72 md:w-[26rem] md:h-[26rem] rounded-full overflow-hidden border-4 border-blue-300 shadow-2xl mb-4 lg:mt-7">
          <Image
            src="/images/me.png"
            alt="Profile Picture"
            layout="fill"
            objectFit="cover"
            className="hover:scale-110 transition duration-500"
          />
        </div>
      </motion.div>
    </div>
    </section>
  );
};

export default HeroSection;
