"use client";

import { motion } from "framer-motion";
import { fadeLeft, fadeUp, staggerContainer } from "@/lib/animations";

export default function Hero() {
  return (
    <section id="hero" className="bg-[#FAF8F5] min-h-[130vh] relative overflow-hidden">
      <div className="flex flex-col lg:flex-row min-h-[130vh]">
        
        {/* Left Column - Arched Image */}
        <motion.div 
          className="lg:w-[45%] flex items-end justify-center lg:justify-end pt-20 lg:pt-0"
          initial="hidden"
          animate="visible"
          variants={fadeLeft}
        >
          <div 
            className="relative w-[90%] max-w-[650px] lg:max-w-none lg:w-[90%] h-[80vh] md:h-[90vh] lg:h-[110vh] overflow-hidden bg-[#D5CEC4]"
            style={{ 
              borderRadius: '9999px 9999px 0 0',
            }}
          >
            <img
              src="/images/hero1.jpg"
              alt="Dr. Maya Reynolds - Licensed Clinical Psychologist in Santa Monica providing anxiety and trauma therapy"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </motion.div>

        {/* Right Column - Text Content */}
        <motion.div 
          className="lg:w-[55%] flex items-center justify-center lg:items-center lg:justify-center px-6 md:px-12 lg:px-16 py-16 lg:py-0 mt-12 lg:mt-0"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <div className="flex flex-col justify-center items-center text-center max-w-2xl">
            {/* Headline */}
            <motion.h1 
              className="text-[#1F4E5F] leading-[1.2] tracking-[-0.02em]"
              style={{ 
                fontFamily: "var(--font-cormorant)",
                fontSize: 'clamp(52px, 7vw, 80px)',
                fontWeight: 500,
              }}
              variants={fadeUp}
            >
              Therapy for Anxiety, Trauma & Burnout in Santa Monica
            </motion.h1>

            {/* Subheadline */}
            <motion.p 
              className="text-[#1F4E5F] text-base md:text-lg leading-[1.6] md:leading-[1.9] mt-12 md:mt-14"
              style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
              variants={fadeUp}
            >
              Licensed clinical psychologist specializing in evidence-based therapy—EMDR, CBT, mindfulness, and somatic work—for high-achieving adults feeling overwhelmed, stuck, or emotionally on edge. Compassionate, grounded care both in-person and online.
            </motion.p>

            {/* CTA Button */}
            <motion.div className="pt-10 md:pt-12" variants={fadeUp}>
              <a 
                href="/contact"
                className="inline-flex items-center gap-4 border border-[#1F4E5F] bg-transparent text-[#1F4E5F] hover:bg-[#1F4E5F] hover:text-[#FAF8F5] px-10 py-3 transition-all duration-300 text-xs uppercase tracking-[0.2em]"
                style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600 }}
              >
                Schedule a Free Consultation
                <span className="text-lg">→</span>
              </a>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
