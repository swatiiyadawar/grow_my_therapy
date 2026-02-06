"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, cardVariant, viewportOptions } from "@/lib/animations";

const specialties = [
  {
    title: "Anxiety & Panic Disorders",
    description:
      "Chronic worry, racing thoughts, panic attacks, and physical tension. Using CBT and somatic techniques, we'll work together to regulate your nervous system and restore a sense of calm.",
    image: "./images/specialist1.jpg",
  },
  {
    title: "Trauma & PTSD Recovery",
    description:
      "Whether from a single event or complex developmental experiences, I use EMDR and carefully paced interventions to help you process trauma safely and reclaim your sense of security.",
    image: "./images/specialist2.jpg",
  },
  {
    title: "Burnout & Work Stress",
    description:
      "For high-achieving professionals, entrepreneurs, and creatives feeling depleted and disconnected. We'll address perfectionism, set sustainable boundaries, and restore your vitality.",
    image: "./images/specialist3.jpg",
  },
];

export default function Specialties() {
  return (
    <section id="specialties" className="bg-[#FAF8F5] py-12 sm:py-16 md:py-20 lg:py-28">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
        
        {/* Centered Section Heading */}
        <motion.h2 
          className="text-center text-[#1F4E5F] mb-8 sm:mb-10 md:mb-12 lg:mb-16"
          style={{ 
            fontFamily: "var(--font-cormorant)",
            fontSize: 'clamp(28px, 5vw, 56px)',
            fontWeight: 500,
          }}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={fadeUp}
        >
          Areas of Specialty
        </motion.h2>

        {/* Three Cards Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={staggerContainer}
        >
          {specialties.map((item) => (
            <motion.div
              key={item.title}
              className="border border-[#1F4E5F] bg-[#E5DED4] p-4 sm:p-6 md:p-8 flex flex-col"
              variants={cardVariant}
            >
              {/* Card Content - Top Section */}
              <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                <h3 
                  className="text-[#1F4E5F] text-base sm:text-lg md:text-xl"
                  style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600 }}
                >
                  {item.title}
                </h3>
                <p 
                  className="text-[#1F4E5F] text-xs sm:text-sm leading-[1.6] sm:leading-[1.7]"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
                >
                  {item.description}
                </p>
              </div>

              {/* Circular Image - Bottom Aligned */}
              <div className="flex justify-center mt-auto pt-4 sm:pt-6 md:pt-6 lg:pt-8">
                <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-52 md:h-52 lg:w-64 lg:h-64 overflow-hidden rounded-full">
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
