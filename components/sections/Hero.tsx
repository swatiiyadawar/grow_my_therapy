"use client";

import { motion } from "framer-motion";
import { fadeLeft, fadeUp, staggerContainer } from "@/lib/animations";

export default function Hero() {
  return (
    <section id="hero" className="bg-[#FBF6EE] min-h-screen flex items-center relative">
      <div className="max-w-[1280px] mx-auto px-6 md:px-20 lg:px-24 w-full py-32 md:py-40">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 items-center">
          
          {/* Left Column - Arched Image */}
          <motion.div 
            className="order-2 md:order-1 flex justify-center md:justify-start"
            initial="hidden"
            animate="visible"
            variants={fadeLeft}
          >
            <div className="relative w-full max-w-md aspect-[3/4] overflow-hidden" style={{ borderRadius: '9999px 9999px 0 0' }}>
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80"
                alt="Therapy session"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Right Column - Text Content */}
          <motion.div 
            className="order-1 md:order-2 text-center md:text-left space-y-8"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            {/* Headline */}
            <motion.h1 
              className="text-5xl md:text-6xl font-semibold text-[#2E4A2F] leading-[1.1]"
              variants={fadeUp}
            >
              Live your life in full bloom
            </motion.h1>

            {/* Subheadline */}
            <motion.p 
              className="text-base md:text-lg text-[#2E4A2F] opacity-75 leading-[1.6] max-w-xl"
              variants={fadeUp}
            >
              Compassionate, evidence-based therapy for adults seeking healing, growth, and meaningful transformation.
            </motion.p>

            {/* CTA Button */}
            <motion.div className="pt-4" variants={fadeUp}>
              <button className="border border-[#2E4A2F] border-opacity-50 bg-transparent text-[#2E4A2F] hover:bg-[#2E4A2F] hover:bg-opacity-5 px-8 py-3 rounded transition-all duration-200 text-xs uppercase tracking-[0.1em] font-medium">
                Get Started
              </button>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
