"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOptions } from "@/lib/animations";

export default function SubscribeSection() {
  return (
    <section className="bg-[#7A7A46] py-28 md:py-36">
      <motion.div
        className="max-w-[1000px] mx-auto px-6 md:px-16"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOptions}
        variants={staggerContainer}
      >
        <div className="border border-[#FAF7F2] px-10 md:px-20 py-14 md:py-20 text-center">
          {/* Heading */}
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#FAF7F2] leading-tight"
            variants={fadeUp}
          >
            Subscribe
          </motion.h2>

          {/* Supporting Text */}
          <motion.p
            className="mt-5 text-base md:text-lg text-[#FAF7F2] opacity-90 leading-relaxed max-w-2xl mx-auto"
            variants={fadeUp}
          >
            Receive thoughtful insights on therapy, wellness, and personal growth—delivered with care.
          </motion.p>

          {/* Email Input and Button */}
          <motion.div
            className="mt-10 flex flex-col md:flex-row items-center justify-center gap-5"
            variants={fadeUp}
          >
            <input
              type="email"
              placeholder="Email address"
              className="h-12 w-full md:w-[360px] bg-white px-4 text-[#2F3B1F] placeholder-[#7A7A6A] focus:outline-none"
              required
            />
            <button className="h-12 px-6 border border-[#FAF7F2] text-[#FAF7F2] font-medium hover:bg-[#FAF7F2]/10 transition-colors duration-300">
              Subscribe
            </button>
          </motion.div>

          {/* Privacy Notice */}
          <motion.p
            className="mt-7 text-xs md:text-sm text-[#FAF7F2] opacity-75"
            variants={fadeUp}
          >
            We respect your privacy. Unsubscribe anytime.
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}
