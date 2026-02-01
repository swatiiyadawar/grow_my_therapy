"use client";

import { motion } from "framer-motion";
import { fadeLeft, fadeRight, fadeUp, staggerContainer, viewportOptions } from "@/lib/animations";

export default function Showcase() {
  return (
    <section id="showcase" className="bg-[#f5ead6] py-20 md:py-32">
      <div className="px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-16 items-center">
          {/* Left Column - Text Content (45%) */}
          <motion.div 
            className="md:col-span-2 space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            variants={staggerContainer}
          >
            {/* Headline */}
            <motion.h2 className="text-4xl md:text-5xl lg:text-5xl font-bold text-[#2b3b2b] leading-tight" variants={fadeUp}>
              Transformative Results Through Dedicated Care
            </motion.h2>

            {/* Body Paragraph */}
            <motion.p className="text-lg md:text-xl text-[#4b5a4b] leading-relaxed" variants={fadeUp}>
              Our clients experience profound shifts in their personal and professional lives. Through our evidence-based approach and compassionate guidance, we help you overcome challenges and unlock your full potential. Witness the remarkable transformations that await you.
            </motion.p>

            {/* Outlined CTA Button */}
            <motion.button className="border-2 border-[#2b3b2b] text-[#2b3b2b] hover:bg-[#2b3b2b] hover:text-[#f5ead6] font-semibold px-8 py-4 rounded-lg transition-all duration-300 text-base md:text-lg" variants={fadeUp}>
              Explore Success Stories
            </motion.button>
          </motion.div>

          {/* Right Column - Layered Images (55%) */}
          <motion.div 
            className="md:col-span-3 relative h-96 md:h-full min-h-96 md:min-h-[600px]"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            variants={fadeRight}
          >
            {/* Primary Image - Tall Arched Shape (3:4) */}
            <div className="absolute inset-0 md:static md:relative">
              <div className="w-full h-full bg-gradient-to-b from-[#d4c4a8] to-[#c8b594] rounded-t-3xl md:rounded-t-4xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&q=80"
                  alt="Transformation journey"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Secondary Image - Circular Overlapping Bottom-Right */}
              <div className="absolute -bottom-8 -right-8 md:-bottom-12 md:-right-12 w-40 h-40 md:w-56 md:h-56 bg-white rounded-full shadow-2xl overflow-hidden border-8 border-[#f5ead6]">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80"
                  alt="Success story"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
