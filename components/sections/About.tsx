"use client";

import { motion } from "framer-motion";
import { fadeRight, fadeUp, staggerContainer, viewportOptions } from "@/lib/animations";

export default function About() {
  return (
    <section id="about" className="bg-[#FAF8F5]">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-auto lg:min-h-[700px]">
        
        {/* Left Column - Text Content (50%) */}
        <div className="flex flex-col bg-[#E5DED4] h-full">
          {/* Content area with padding */}
          <motion.div 
            className="flex flex-col flex-1 px-4 sm:px-8 md:px-12 lg:px-20 pt-8 sm:pt-12 md:pt-16 lg:pt-24 pb-6 sm:pb-8 lg:pb-0"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            variants={staggerContainer}
          >
            {/* Spacer to push content to middle - hidden on mobile */}
            <div className="hidden lg:flex flex-1"></div>
            
            {/* Content in the middle */}
            <div className="max-w-lg space-y-4 sm:space-y-5 md:space-y-6">
              
              {/* Heading */}
              <motion.h2 
                className="text-[#1F4E5F] leading-[1.2] tracking-[-0.02em]"
                style={{ 
                  fontFamily: "var(--font-cormorant)",
                  fontSize: 'clamp(28px, 6vw, 52px)',
                  fontWeight: 500,
                }}
                variants={fadeUp}
              >
                Therapy That Honors Your Whole Self
              </motion.h2>

              {/* First Paragraph */}
              <motion.p 
                className="text-[#1F4E5F] text-sm sm:text-base md:text-lg leading-[1.7] sm:leading-[1.8]"
                style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
                variants={fadeUp}
              >
                I'm Dr. Maya Reynolds, PsyD, a licensed clinical psychologist in Santa Monica offering evidence-based therapy for adults struggling with anxiety, panic, trauma, burnout, and perfectionism. Many of my clients are high-achieving professionals, entrepreneurs, and creatives who appear "fine" on the outside while feeling exhausted, stuck in overthinking, or emotionally on edge.
              </motion.p>

              {/* Second Paragraph */}
              <motion.p 
                className="text-[#1F4E5F] text-sm sm:text-base md:text-lg leading-[1.7] sm:leading-[1.8]"
                style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
                variants={fadeUp}
              >
                I integrate CBT, EMDR, mindfulness-based practices, and somatic techniques to address both emotional and physiological sides of what you're experiencing. My warm, collaborative approach prioritizes safety, stabilization, and helping you feel more regulated—not just during sessions, but in your daily life. Healing happens when you feel truly understood and actively engaged in the process.
              </motion.p>
            </div>

            {/* Spacer to push CTA to bottom - hidden on mobile */}
            <div className="hidden lg:flex flex-1"></div>
          </motion.div>

          {/* CTA Button at very bottom - full width dark green bar (outside padding container) */}
          <motion.a 
            href="/contact" 
            className="flex items-center justify-center gap-2 sm:gap-3 bg-[#E5DED4] text-[#1F4E5F] hover:bg-[#1F4E5F] hover:text-[#FAF8F5] text-xs sm:text-xs uppercase tracking-[0.2em] transition-all duration-300 group w-full py-4 sm:py-5 md:py-6 border-t border-[#1F4E5F]"
            style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600 }}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            variants={fadeUp}
          >
            <span>Schedule a Consultation</span>
            <span className="text-base group-hover:translate-x-1 transition-transform">→</span>
          </motion.a>
        </div>

        {/* Right Column - Full-Height Image (50%) */}
        <motion.div 
          className="relative min-h-[400px] lg:min-h-full"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={fadeRight}
        >
          <img
            src="./images/about.jpg"
            alt="Peaceful therapy environment with lilac flowers and coffee"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </motion.div>

      </div>
    </section>
  );
}
