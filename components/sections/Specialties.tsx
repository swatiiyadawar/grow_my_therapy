"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, cardVariant, viewportOptions } from "@/lib/animations";

const specialties = [
  {
    title: "Anxiety & Stress",
    description:
      "Learn practical tools to manage anxiety and stress, regain control, and find peace in your daily life through evidence-based techniques.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
  },
  {
    title: "Relationships & Connection",
    description:
      "Navigate relationship challenges, improve communication, and build deeper, more meaningful connections with the people who matter most.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
  },
  {
    title: "Life Transitions",
    description:
      "Find support during major life changes—career shifts, loss, identity exploration—and emerge stronger, more resilient, and self-aware.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
  },
];

export default function Specialties() {
  return (
    <section id="specialties" className="bg-[#f9f5f0] py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        
        {/* Centered Section Heading */}
        <motion.h2 
          className="text-center text-4xl md:text-5xl lg:text-6xl font-bold text-[#2b3b2b] mb-16 md:mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={fadeUp}
        >
          My Specialties
        </motion.h2>

        {/* Three Cards Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={staggerContainer}
        >
          {specialties.map((item) => (
            <motion.div
              key={item.title}
              className="border-2 border-[#d4c4a8] bg-white p-8 md:p-10 flex flex-col h-full"
              variants={cardVariant}
            >
              {/* Card Content - Top Section */}
              <div className="flex-grow space-y-4 mb-8">
                <h3 className="text-2xl md:text-3xl font-semibold text-[#2b3b2b]">
                  {item.title}
                </h3>
                <p className="text-base md:text-lg text-[#4b5a4b] leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Circular Image - Bottom Aligned */}
              <div className="flex justify-center mt-auto">
                <div className="w-56 h-56 md:w-64 md:h-64 overflow-hidden rounded-full border-4 border-[#e8ded4] shadow-lg">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
