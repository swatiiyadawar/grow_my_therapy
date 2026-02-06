"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOptions } from "@/lib/animations";

export default function SubscribeSection() {
  return (
    <section className="bg-[#1F4E5F] py-20 md:py-28">
      <motion.div
        className="max-w-[900px] mx-auto px-6 md:px-12"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOptions}
        variants={staggerContainer}
      >
        <div className="border border-white/50 px-8 md:px-16 py-12 md:py-16 text-center">
          {/* Heading */}
          <motion.h2
            className="text-white leading-[1.1] tracking-[-0.02em]"
            style={{ 
              fontFamily: "var(--font-cormorant)",
              fontSize: 'clamp(36px, 5vw, 52px)',
              fontWeight: 600,
            }}
            variants={fadeUp}
          >
            Subscribe
          </motion.h2>

          {/* Supporting Text */}
          <motion.p
            className="mt-4 text-base md:text-lg text-white/90 leading-relaxed max-w-xl mx-auto"
            style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
            variants={fadeUp}
          >
            Sign up with your email address to receive news and updates.
          </motion.p>

          {/* Email Input and Button */}
          <motion.div
            className="mt-8 flex flex-col md:flex-row items-center justify-center gap-4"
            variants={fadeUp}
          >
            <input
              type="email"
              placeholder="Email Address"
              className="h-14 w-full md:w-[280px] bg-white px-5 text-[#1F4E5F] placeholder-[#8A8A8A] focus:outline-none"
              style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
              required
            />
            <button 
              className="h-14 px-8 border border-white/60 text-white text-xs uppercase tracking-[0.15em] hover:bg-white/10 transition-colors duration-300"
              style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
            >
              Sign Up
            </button>
          </motion.div>

          {/* Privacy Notice */}
          <motion.p
            className="mt-8 text-sm text-white/70"
            style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
            variants={fadeUp}
          >
            We respect your privacy.
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}
