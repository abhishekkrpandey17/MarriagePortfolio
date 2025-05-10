"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {Phone, Linkedin, Mail } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Family", href: "#family" },
  { label: "Gallery", href: "#gallery" },
  { label: "Details", href: "#details" },
  { label: "Contact", href: "#contact" },
  { label: "Biodata📥", href: "./biodata" },
];

const socialLinks = [
  { icon: Phone, href: "tel:+91 8090570646" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/abhishek-kr-pandey-57544325a/" },
  { icon: Mail, href: "mailto:abhishekkrpandey17@gmail.com" },
];

const footerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.2 + i * 0.1, duration: 0.5 },
  }),
};

const Footer = () => {
  return (
    <footer className="bg-gradient-to-bl from-blue-300 via-white to-red-200 text-blue-900 py-12 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">

        {/* Logo / Name */}
        <motion.div
          custom={0}
          initial="hidden"
          whileInView="visible"
          variants={footerVariants}
          viewport={{ once: false }}
          className="text-2xl font-bold"
        >
          Abhishek 💙
        </motion.div>

        {/* Navigation Links */}
        <motion.ul
          className="flex flex-wrap gap-4 justify-center font-medium"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          {navLinks.map((link, i) => (
            <motion.li
              key={i}
              custom={i}
              variants={footerVariants}
              initial="hidden"
              whileInView="visible"
              className="hover:text-blue-600 transition-all"
            >
              <Link href={link.href}>{link.label}</Link>
            </motion.li>
          ))}
        </motion.ul>

        {/* Social Icons */}
        <motion.div
          className="flex gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          {socialLinks.map(({ icon: Icon, href }, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={footerVariants}
              initial="hidden"
              whileInView="visible"
            >
              <Link href={href} target="_blank">
                <Icon className="w-5 h-5 hover:text-blue-600 transition-all" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        className="text-center text-sm text-blue-700 mt-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        viewport={{ once: false }}
      >
        &copy; {new Date().getFullYear()} Abhishek. All rights reserved.
      </motion.div>
    </footer>
  );
};

export default Footer;
