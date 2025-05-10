"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About Me", href: "#about" },
  { label: "Family", href: "#family" },
  { label: "Gallery", href: "#gallery" },
  { label: "Education", href: "#education" },
  { label: "Details", href: "#details" },
  { label: "Biodata", href: "/biodata.pdf", download: true },
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

  // ✅ Mobile-safe forced download
  const handleDownload = (href: string) => {
    const link = document.createElement("a");
    link.href = href;
    link.setAttribute("download", "biodata.pdf");
    link.setAttribute("target", "_blank");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
        {/* Logo */}
        <motion.div
          className="text-xl lg:text-2xl font-extrabold text-blue-900"
          whileHover={{ scale: 1.1 }}
        >
          💍 Abishek Kr. Pandey
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) =>
            item.download ? (
              <motion.a
                key={item.label}
                href={item.href}
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white px-4 py-1.5 rounded-md font-semibold hover:bg-blue-700 transition"
              >
                {item.label}
              </motion.a>
            ) : (
              <motion.a
                key={item.href}
                href={item.href}
                className="text-blue-900 font-medium hover:text-blue-600 transform transition-transform duration-200 hover:scale-110"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
              </motion.a>
            )
          )}
        </div>

        {/* Mobile Menu Toggle */}
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
          {navItems.map((item) =>
            item.download ? (
              <motion.button
                key={item.label}
                onClick={() => {
                  setMenuOpen(false);
                  handleDownload(item.href);
                }}
                whileHover={{ scale: 1.03 }}
                className="w-full bg-blue-600 text-white text-center px-4 py-2 rounded-md font-semibold hover:bg-blue-700 transition"
              >
                {item.label}
              </motion.button>
            ) : (
              <motion.a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block text-blue-900 font-medium hover:text-blue-600"
                whileHover={{ scale: 1.05 }}
              >
                {item.label}
              </motion.a>
            )
          )}
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
