"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOptions } from "@/lib/animations";

export default function Footer() {
  return (
    <footer className="bg-[#FAF7F2] text-[#2F3B1F]">
      {/* Main Footer Content */}
      <motion.div
        className="max-w-[1280px] mx-auto px-6 md:px-20 lg:px-24 pt-24 pb-24"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOptions}
        variants={staggerContainer}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14 md:gap-28 items-start">
          {/* Column 1: Brand + Contact */}
          <motion.div className="space-y-8" variants={fadeUp}>
            <h3 className="text-3xl font-medium text-[#2F3B1F]">Lilac Template</h3>
            <div className="space-y-3 text-[#4A5540]">
              <p>123 Wellness Street</p>
              <p>Toronto, ON M5H 2N2</p>
            </div>
            <div className="space-y-3 text-[#4A5540]">
              <a href="mailto:hello@growtherapy.com" className="underline hover:opacity-70 transition-opacity">
                hello@growtherapy.com
              </a>
              <br />
              <a href="tel:+14165551234" className="underline hover:opacity-70 transition-opacity">
                (416) 555-1234
              </a>
            </div>
          </motion.div>

          {/* Column 2: Hours */}
          <motion.div className="space-y-6" variants={fadeUp}>
            <h4 className="text-lg font-medium text-[#2F3B1F]">Hours</h4>
            <div className="space-y-3 text-[#4A5540]">
              <p>Monday – Friday</p>
              <p>10am – 6pm</p>
            </div>
          </motion.div>

          {/* Column 3: Navigation */}
          <motion.div className="space-y-6" variants={fadeUp}>
            <h4 className="text-lg font-medium text-[#2F3B1F]">Find</h4>
            <nav className="space-y-3">
              <a href="/" className="block text-[#4A5540] underline hover:opacity-70 transition-opacity">
                Home
              </a>
              <a href="/contact" className="block text-[#4A5540] underline hover:opacity-70 transition-opacity">
                Contact
              </a>
              <a href="/blog" className="block text-[#4A5540] underline hover:opacity-70 transition-opacity">
                Blog
              </a>
            </nav>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom Legal Strip */}
      <div className="bg-[#EDE9E2]">
        <motion.div
          className="max-w-[1280px] mx-auto px-6 md:px-20 lg:px-24 py-12"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={staggerContainer}
        >
          <motion.div className="text-center text-xs md:text-sm text-[#6B7460] space-y-5" variants={fadeUp}>
            <div className="flex flex-col md:flex-row items-center justify-center gap-5 md:gap-8">
              <a href="/privacy" className="underline hover:opacity-70 transition-opacity">
                Privacy & Cookies Policy
              </a>
              <a href="/good-faith" className="underline hover:opacity-70 transition-opacity">
                Good Faith Estimate
              </a>
              <a href="/terms" className="underline hover:opacity-70 transition-opacity">
                Website Terms & Conditions
              </a>
              <a href="/disclaimer" className="underline hover:opacity-70 transition-opacity">
                Disclaimer
              </a>
            </div>
            <p>Website design by Lilac Studio</p>
            <p>© 2026 Lilac Template. All rights reserved.</p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
