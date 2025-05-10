"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

const testimonials = [
  
  {
    name: "Sapana Mishra (Cousin Sister))",
    text: "Abhishek has always been the most respectful and responsible person in our family. He brings warmth wherever he goes. Any girl would be lucky to have a life partner like him — grounded, kind, and ambitious.",
    image: "/images/girl.png",
  },
  {
    name: "Rohit Shukla (College Friend)",
    text: "We’ve been friends since our engineering days, and one thing I’ve always admired is Abhishek’s honesty. He’s deeply loyal and mature — someone who balances fun and responsibility like a pro.",
    image: "/images/boy.png",
  },
  {
    name: "Gudia Tiwari (Bua ji - Paternal Aunt)",
    text: "He has grown into such a caring young man. He looks after his parents with utmost respect. I am sure he will be a very loving and supportive husband too.",
    image: "/images/girl.png",
  },
  {
    name: "Ashutosh Mishra (younger brother, Friend)", 
    text: "Abhishek Bhaiya is the kind of friend you can always count on — calm, solution-oriented, and incredibly humble. His life values make him an ideal life partner.",
    image: "/images/boy.png",
  },
  
  {
    name: "Brijendra Mishra (Mama ji - Maternal Uncle)",
    text: "From a young age, Abhishek has shown great character. He respects family traditions and yet is progressive in thought — the perfect mix for today’s generation.",
    image: "/images/man.png",
  },
  {
    name: "Priya Mishra (Sister)",
    text: "He’s not just my brother but my biggest supporter. Abhishek is understanding, respectful towards women, and always puts others first. A genuine gentleman!",
    image: "/images/girl.png",
  },
  {
    name: "Aritra Chakraborty (Friend,Colleague)",
    text: "Working with Abhishek was a joy. He’s dependable, soft-spoken, and always ready to help others. I’ve rarely seen someone so balanced and focused in life.",
    image: "/images/boy.png",
  },
  {
    name: "Surya Narayan Pandey (Uncle)",
    text: "Abhishek has always been clear about his goals and values. He’s the kind of person who listens with intent and speaks with wisdom. I admire his patience and emotional maturity.",
    image: "/images/boy.png",
  },
  {
    name: "Mr. Suresh Tiwari (Neighbour & Family Friend)",
    text: "I’ve known Abhishek since he was a little boy. His upbringing reflects in the way he talks and behaves. He is deeply rooted in family values and is a man of his word.",
    image: "/images/man.png",
  },
  {
    name: "Shubham (Flatmate)",
    text: "Living with Abhishek taught me what a calm and composed person he is. He respects boundaries, maintains a healthy routine, and always brings positivity into conversations. A true gem.",
    image: "/images/boy.png",
  },
  {
    name: "Prof. R. K. Srivastava (Professor, Computer Science)",
    text: "I had the pleasure of teaching Abhishek Pandey during his undergraduate studies. He was an exceptionally sincere and disciplined student, always respectful and well-mannered in his conduct. Abhishek displayed a sharp intellect, a strong work ethic, and a remarkable sense of responsibility — qualities that go far beyond academics. I am confident he will bring the same dedication, empathy, and maturity to his personal life as well. He will undoubtedly make a wonderful life partner.",
    image: "/images/man.png",
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
                <img
                  src={item.image}
                  alt={item.name}
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
