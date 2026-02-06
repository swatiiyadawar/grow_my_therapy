"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOptions } from "@/lib/animations";

export default function Footer() {
  return (
    <footer>
      {/* Main Footer Content */}
      <div className="bg-[#FAF8F5]">
        <motion.div
          className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-12 sm:py-16 md:py-20 lg:py-24"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
            {/* Column 1: Brand + Contact */}
            <motion.div className="space-y-4 sm:space-y-5 md:space-y-6" variants={fadeUp}>
              <h3 
                className="text-[#1F4E5F] text-2xl sm:text-3xl md:text-4xl"
                style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600 }}
              >
                Dr. Maya Reynolds
              </h3>
              <div 
                className="space-y-1 text-[#1F4E5F] text-xs sm:text-sm md:text-base lg:text-lg"
                style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
              >
                <p>123th Street 45 W</p>
                <p>Santa Monica, CA 90401</p>
              </div>
              <div 
                className="space-y-1 text-[#1F4E5F] text-xs sm:text-sm md:text-base lg:text-lg"
                style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
              >
                <a href="mailto:hello@drmayareynolds.com" className="block underline hover:text-[#7A9E8E] transition-colors">
                  hello@drmayareynolds.com
                </a>
                <a href="tel:+13105551234" className="block underline hover:text-[#7A9E8E] transition-colors">
                  (310) 555-1234
                </a>
              </div>
            </motion.div>

            {/* Column 2: Hours */}
            <motion.div className="space-y-3 sm:space-y-4" variants={fadeUp}>
              <h4 
                className="text-[#1F4E5F] text-xl sm:text-2xl md:text-3xl"
                style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600 }}
              >
                Hours
              </h4>
              <div 
                className="space-y-1 text-[#1F4E5F] text-xs sm:text-sm md:text-base lg:text-lg"
                style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
              >
                <p>Monday – Friday</p>
                <p>9am – 6pm</p>
              </div>
            </motion.div>

            {/* Column 3: Navigation */}
            <motion.div className="space-y-3 sm:space-y-4 md:text-right" variants={fadeUp}>
              <h4 
                className="text-[#1F4E5F] text-xl sm:text-2xl md:text-3xl"
                style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600 }}
              >
                Find
              </h4>
              <nav 
                className="space-y-1 text-xs sm:text-sm md:text-base lg:text-lg"
                style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
              >
                <a href="/" className="block text-[#1F4E5F] underline hover:text-[#7A9E8E] transition-colors">
                  Home
                </a>
                <a href="/contact" className="block text-[#1F4E5F] underline hover:text-[#7A9E8E] transition-colors">
                  Contact
                </a>
                <a href="/blog" className="block text-[#1F4E5F] underline hover:text-[#7A9E8E] transition-colors">
                  Blog
                </a>
              </nav>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Legal Strip */}
      <div className="bg-[#E5DED4]">
        <motion.div
          className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-8 sm:py-10 md:py-12"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div 
            className="text-center text-xs sm:text-xs md:text-sm text-[#8B9A95] space-y-3 sm:space-y-4"
            style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
            variants={fadeUp}
          >
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-6">
              <a href="/privacy" className="underline hover:text-[#1F4E5F] transition-colors">
                Privacy & Cookies Policy
              </a>
              <a href="/good-faith" className="underline hover:text-[#1F4E5F] transition-colors">
                Good Faith Estimate
              </a>
              <a href="/terms" className="underline hover:text-[#1F4E5F] transition-colors">
                Website Terms & Conditions
              </a>
              <a href="/disclaimer" className="underline hover:text-[#1F4E5F] transition-colors">
                Disclaimer
              </a>
            </div>
            <p>
              © 2026 Dr. Maya Reynolds, PsyD. All Rights Reserved.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
