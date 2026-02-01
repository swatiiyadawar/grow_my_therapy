"use client";

import { motion } from "framer-motion";
import { fadeLeft, fadeUp, staggerContainer, viewportOptions } from "@/lib/animations";

export default function BlogHero() {
  return (
    <section id="blog-hero" className="bg-[#FAF7F2] pt-24 md:pt-32 pb-20 md:pb-32">
      <div className="max-w-[1280px] mx-auto px-6 md:px-20 lg:px-24 w-full">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-16 md:gap-20 items-center">
          
          {/* Left Column - Arched Image (45%) */}
          <motion.div 
            className="md:col-span-2 order-2 md:order-1 flex justify-center md:justify-start"
            initial="hidden"
            animate="visible"
            variants={fadeLeft}
          >
            <div 
              className="relative w-full max-w-md h-[520px] md:h-[600px] overflow-hidden" 
              style={{ borderRadius: '9999px 9999px 0 0' }}
            >
              <img
                src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&q=80"
                alt="Blog hero image"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Right Column - Text Content (55%) */}
          <motion.div 
            className="md:col-span-3 order-1 md:order-2 space-y-8"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            {/* Emphasis Text */}
            <motion.p 
              className="text-base md:text-lg text-[#5A6450] font-semibold tracking-wide"
              variants={fadeUp}
            >
              Glad you're here.
            </motion.p>

            {/* Main Heading */}
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-semibold text-[#2F3B1F] leading-[1.1]"
              variants={fadeUp}
            >
              The Lilac Blog
            </motion.h1>

            {/* Body Text */}
            <motion.p 
              className="text-lg md:text-xl text-[#5A6450] leading-relaxed max-w-2xl"
              variants={fadeUp}
            >
              Insights, stories, and evidence-based perspectives on therapy, wellness, and living a more fulfilling life. Whether you're seeking guidance, validation, or simply a thoughtful read, you'll find something here for you.
            </motion.p>

            {/* Additional Info */}
            <motion.div 
              className="pt-4 space-y-2"
              variants={fadeUp}
            >
              <p className="text-sm md:text-base text-[#5A6450]">
                Updated regularly with new insights and reflections.
              </p>
            </motion.div>

            {/* CTA or Browse */}
            <motion.a 
              href="#blog-posts" 
              className="inline-flex items-center gap-3 text-base md:text-lg text-[#2F3B1F] font-semibold hover:gap-4 transition-all duration-300 group pt-4"
              variants={fadeUp}
            >
              <span className="border-b-2 border-[#2F3B1F]">Browse Articles</span>
              <span className="text-2xl group-hover:translate-x-1 transition-transform">→</span>
            </motion.a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
