"use client";

import { motion } from "framer-motion";
import { fadeLeft, fadeUp, staggerContainer } from "@/lib/animations";

export default function BlogHero() {
  return (
    <section id="blog-hero" className="bg-[#FAF8F5] min-h-screen relative overflow-hidden">
      <div className="flex flex-col lg:flex-row min-h-screen">
        
        {/* Left Column - Arched Image */}
        <motion.div 
          className="lg:w-[45%] flex items-end justify-center lg:justify-end pt-20 lg:pt-0"
          initial="hidden"
          animate="visible"
          variants={fadeLeft}
        >
          <div 
            className="relative w-[85%] max-w-[520px] lg:max-w-none lg:w-[90%] h-[400px] sm:h-[500px] md:h-[600px] lg:h-[85vh] overflow-hidden bg-[#D5CEC4]"
            style={{ 
              borderRadius: '9999px 9999px 0 0',
            }}
          >
            <img
              src="./images/blog.jpg"
              alt="Journal and coffee"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </motion.div>

        {/* Right Column - Text Content */}
        <motion.div 
          className="lg:w-[55%] flex items-center justify-center lg:justify-start px-4 sm:px-8 md:px-16 lg:px-32 py-12 lg:py-0 lg:ml-12"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <div className="flex flex-col justify-center items-center text-center lg:text-left lg:items-start max-w-xl">
            {/* Emphasis Text */}
            <motion.p 
              className="text-base md:text-lg text-[#7A9E8E]"
              style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
              variants={fadeUp}
            >
              Welcome to my blog.
            </motion.p>

            {/* Main Heading */}
            <motion.h1 
              className="text-[#1F4E5F] leading-[1.05] tracking-[-0.02em] mt-4"
              style={{ 
                fontFamily: "var(--font-cormorant)",
                fontSize: 'clamp(48px, 7vw, 80px)',
                fontWeight: 500,
              }}
              variants={fadeUp}
            >
              Insights & Reflections
            </motion.h1>

            {/* Body Text */}
            <motion.p 
              className="text-[#1F4E5F] text-lg md:text-xl leading-relaxed mt-8 max-w-lg"
              style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
              variants={fadeUp}
            >
              Thoughts on anxiety, trauma, burnout, and the journey toward healing. Here you'll find evidence-based perspectives combined with the depth-oriented approach I bring to my practice.
            </motion.p>

            {/* CTA or Browse */}
            <motion.div className="pt-8" variants={fadeUp}>
              <a 
                href="#blog-posts"
                className="inline-flex items-center gap-4 border border-[#1F4E5F] bg-transparent text-[#1F4E5F] hover:bg-[#1F4E5F] hover:text-[#FAF8F5] px-10 py-3 transition-all duration-300 text-xs uppercase tracking-[0.2em]"
                style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600 }}
              >
                Browse Articles
                <span className="text-lg">→</span>
              </a>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
