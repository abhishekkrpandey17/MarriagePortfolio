"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "",mobile:"", email: "", message: "" });

  return (
    <section className="px-6 md:px-20 py-20 bg-gradient-to-b from-red-100 via-white to-blue-200">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-12"
      >
        Contact Me
      </motion.h2>

      <motion.form
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto space-y-6"
        onSubmit={(e) => {
          e.preventDefault();
          alert("Submitted!");
        }}
      >
        <div>
          <label className="block text-blue-800 font-medium mb-1">Name</label>
          <input
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full text-blue-500 border-2 border-blue-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-blue-800 font-medium mb-1">Mobile</label>
          <input
            type="tel"
            required
            value={form.mobile}
            onChange={(e) => setForm({ ...form, mobile: e.target.value })}
            className="w-full text-green-500 border-2 border-blue-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-blue-800 font-medium mb-1">Email</label>
          <input
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full text-purple-600   border-2 border-blue-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-blue-800 font-medium mb-1">Message</label>
          <textarea
            required
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full text-yellow-600 border-2 border-blue-300 px-4 py-2 rounded-md min-h-[120px] resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-full hover:bg-blue-700 transition shadow"
        >
          Send Message
        </button>
      </motion.form>
    </section>
  );
};

export default ContactSection;
