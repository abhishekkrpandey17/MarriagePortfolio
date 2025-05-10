"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

const testimonials = [
  {
    name: "Rohit (Friend)",
    text: "Abhishek is the most loyal and fun-loving guy I know. He'll cook for you and make you laugh with terrible jokes. A true gem!",
    image: "/friend1.jpg",
  },
  {
    name: "Sneha (Sister)",
    text: "My brother is not just smart, but also the most caring human ever. He'll remember your favorite dessert. Every time!",
    image: "/sister.jpg",
  },
  {
    name: "Karan (Colleague)",
    text: "He codes like a beast and parties like it's 1999. Super dependable and secretly a softie.",
    image: "/friend2.jpg",
  },
];

const TestimonialSection = () => {
  return (
    <section className="px-6 md:px-20 py-20 bg-gradient-to-b from-blue-200 via-white to-red-100">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-12"
      >
        What Friends & Family Say
      </motion.h2>

      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 5000 }}
        pagination={{ clickable: true }}
        className="max-w-4xl mx-auto"
      >
        {testimonials.map((item, i) => (
          <SwiperSlide key={i}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.5 }}
              className="bg-white shadow-xl p-8 rounded-2xl text-center flex flex-col items-center gap-4 transition-all duration-300"
            >
              <div className="relative w-20 h-20 rounded-full overflow-hidden border-4 border-blue-200 shadow">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h4 className="text-blue-900 font-bold text-lg">{item.name}</h4>
              <p className="text-blue-700 text-sm max-w-md">{item.text}</p>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default TestimonialSection;
