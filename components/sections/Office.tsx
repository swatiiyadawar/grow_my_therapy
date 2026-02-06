"use client";

import { motion } from "framer-motion";
import { fadeLeft, fadeUp, staggerContainer, viewportOptions } from "@/lib/animations";

export default function Growth() {
  return (
    <section id="growth" className="bg-[#FAF8F5]">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[700px] lg:min-h-[800px]">
        
        {/* Left Column - Full Height Image */}
        <motion.div 
          className="relative min-h-[400px] lg:min-h-full"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={fadeLeft}
        >
          <img
            src="./images/office.jpg"
            alt="Woman relaxing peacefully"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </motion.div>

        {/* Right Column - Soft accent background with Content */}
        <div className="flex flex-col bg-[#C9A7A2] h-full">
          {/* Content area with padding - centered vertically */}
          <motion.div 
            className="flex flex-col flex-1 justify-center px-8 md:px-12 lg:px-16"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            variants={staggerContainer}
          >
            {/* Content */}
            <div className="max-w-lg space-y-6">
              {/* Headline */}
              <motion.h2 
                className="text-[#1F4E5F] leading-[1.1] tracking-[-0.02em]"
                style={{ 
                  fontFamily: "var(--font-cormorant)",
                  fontSize: 'clamp(36px, 5vw, 52px)',
                  fontWeight: 500,
                }}
                variants={fadeUp}
              >
                Looking successful on the outside, <em>struggling on the inside?</em>
              </motion.h2>

              {/* Subheading */}
              <motion.p 
                className="text-[#1F4E5F] text-base md:text-lg leading-[1.7] pt-2"
                style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
                variants={fadeUp}
              >
                You don't have to have it all figured out. Many of my clients experience:
              </motion.p>

              {/* Bullet List */}
              <motion.ul className="space-y-3 pt-2" variants={staggerContainer}>
                <motion.li 
                  className="flex items-start gap-3 text-[#1F4E5F] text-base md:text-lg"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
                  variants={fadeUp}
                >
                  <span className="text-[#1F4E5F] flex-shrink-0">•</span>
                  <span>Chronic anxiety, worry, or panic attacks</span>
                </motion.li>
                <motion.li 
                  className="flex items-start gap-3 text-[#1F4E5F] text-base md:text-lg"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
                  variants={fadeUp}
                >
                  <span className="text-[#1F4E5F] flex-shrink-0">•</span>
                  <span>Unresolved trauma or PTSD symptoms</span>
                </motion.li>
                <motion.li 
                  className="flex items-start gap-3 text-[#1F4E5F] text-base md:text-lg"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
                  variants={fadeUp}
                >
                  <span className="text-[#1F4E5F] flex-shrink-0">•</span>
                  <span>Burnout, exhaustion, and loss of motivation</span>
                </motion.li>
                <motion.li 
                  className="flex items-start gap-3 text-[#1F4E5F] text-base md:text-lg"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
                  variants={fadeUp}
                >
                  <span className="text-[#1F4E5F] flex-shrink-0">•</span>
                  <span>Perfectionism and imposter syndrome</span>
                </motion.li>
                <motion.li 
                  className="flex items-start gap-3 text-[#1F4E5F] text-base md:text-lg"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
                  variants={fadeUp}
                >
                  <span className="text-[#1F4E5F] flex-shrink-0">•</span>
                  <span>Difficulty with relationships and boundaries</span>
                </motion.li>
                <motion.li 
                  className="flex items-start gap-3 text-[#1F4E5F] text-base md:text-lg"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
                  variants={fadeUp}
                >
                  <span className="text-[#1F4E5F] flex-shrink-0">•</span>
                  <span>Sleep issues and physical tension</span>
                </motion.li>
                <motion.li 
                  className="flex items-start gap-3 text-[#1F4E5F] text-base md:text-lg"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
                  variants={fadeUp}
                >
                  <span className="text-[#1F4E5F] flex-shrink-0">•</span>
                  <span>Feeling emotionally disconnected or on edge</span>
                </motion.li>
              </motion.ul>

              {/* Closing Text */}
              <motion.p 
                className="text-[#1F4E5F] text-base md:text-lg leading-[1.7] pt-4"
                style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
                variants={fadeUp}
              >
                Together, we'll create a safe space to understand what's happening, regulate your nervous system, and build lasting change—not just managing symptoms, but reclaiming your vitality and sense of self.
              </motion.p>
            </div>
          </motion.div>

          {/* CTA Button at very bottom - full width dark teal bar */}
          <motion.a 
            href="/contact" 
            className="flex items-center justify-center gap-3 bg-[#C9A7A2] text-[#1F4E5F] hover:bg-[#1F4E5F] hover:text-[#FAF8F5] text-xs uppercase tracking-[0.2em] transition-all duration-300 group w-full py-6 border-t border-[#1F4E5F]"
            style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600 }}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            variants={fadeUp}
          >
            <span>Start Your Healing Journey</span>
            <span className="text-base group-hover:translate-x-1 transition-transform">→</span>
          </motion.a>
        </div>

      </div>
    </section>
  );
}
