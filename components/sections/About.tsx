"use client";

import { motion } from "framer-motion";
import { fadeRight, fadeUp, staggerContainer, viewportOptions } from "@/lib/animations";

export default function About() {
  return (
    <section id="about" className="bg-[#e8ded4]">
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[600px] md:min-h-[700px]">
        
        {/* Left Column - Text Content (50%) */}
        <motion.div 
          className="flex items-center px-6 md:px-12 lg:px-20 py-16 md:py-20"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={staggerContainer}
        >
          <div className="max-w-xl w-full space-y-8">
            
            {/* Heading */}
            <motion.h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#2b3b2b] leading-tight"
              variants={fadeUp}
            >
              Live a Fulfilling Life
            </motion.h2>

            {/* First Paragraph */}
            <motion.p 
              className="text-lg md:text-xl text-[#4b5a4b] leading-relaxed"
              variants={fadeUp}
            >
              Life can be challenging—especially when you're trying to balance your personal and professional life, navigate relationships, and find meaning in the midst of daily pressures.
            </motion.p>

            {/* Second Paragraph */}
            <motion.p 
              className="text-lg md:text-xl text-[#4b5a4b] leading-relaxed"
              variants={fadeUp}
            >
              It's easy to feel like you're alone in facing these challenges, but I want you to know that I'm here to help. Together, we'll work through what's holding you back and create a path toward healing, growth, and lasting change.
            </motion.p>

            {/* Divider */}
            <motion.div 
              className="h-px bg-[#d4c4a8] my-8"
              variants={fadeUp}
            ></motion.div>

            {/* Text CTA */}
            <motion.a 
              href="#contact" 
              className="inline-flex items-center gap-3 text-base md:text-lg text-[#2b3b2b] font-semibold hover:gap-4 transition-all duration-300 group"
              variants={fadeUp}
            >
              <span className="border-b-2 border-[#2b3b2b]">Get in Touch</span>
              <span className="text-2xl group-hover:translate-x-1 transition-transform">→</span>
            </motion.a>
          </div>
        </motion.div>

        {/* Right Column - Full-Height Image (50%) */}
        <motion.div 
          className="relative min-h-[400px] md:min-h-full order-first md:order-last"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={fadeRight}
        >
          <img
            src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=800&q=80"
            alt="Peaceful therapy environment"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </motion.div>

      </div>
    </section>
  );
}
