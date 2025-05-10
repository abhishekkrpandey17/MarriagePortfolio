"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Family", href: "#family" },
  { label: "Gallery", href: "#gallery" },
  { label: "Details", href: "#details" },
  { label: "Letter", href: "#letter" },
  { label: "Biodata", href: "./biodata" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed w-full z-50 px-6 md:px-16 py-4 backdrop-blur-md transition-all duration-300 ${
        scrolling ? "bg-blue-50/80 shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.div
          className="text-xl lg:2xl font-extrabold text-blue-900"
          whileHover={{ scale: 1.1 }}
        >
          💍 Abishek Kr.Pandey
        </motion.div>

        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <motion.a
              key={item.href}
              href={item.href}
              className="text-blue-900 font-medium hover:text-blue-600 transform transition-transform duration-200 hover:scale-110"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.label}
            </motion.a>
          ))}
        </div>

        {/* Mobile menu */}
        <div className="md:hidden text-black">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="md:hidden mt-4 bg-blue-50 rounded-lg shadow-lg p-4 space-y-4"
        >
          {navItems.map((item) => (
            <motion.a
              key={item.href}
              href={item.href}
              className="block text-blue-900 font-medium hover:text-blue-600"
              whileHover={{ scale: 1.05 }}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </motion.a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
