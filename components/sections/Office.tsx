"use client";

import { motion } from "framer-motion";
import { fadeLeft, fadeUp, staggerContainer, viewportOptions } from "@/lib/animations";

export default function Growth() {
  return (
    <section id="growth" className="py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 min-h-screen md:min-h-auto">
        {/* Left Column - Brown with Image */}
        <motion.div 
          className="bg-gradient-to-br from-[#6B4423] to-[#8B5A3C] flex items-center justify-center overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={fadeLeft}
        >
          <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80')] bg-cover bg-center" />
        </motion.div>

        {/* Right Column - Purple with Content */}
        <motion.div 
          className="bg-gradient-to-br from-[#5B4B7A] to-[#7B6B9A] p-8 md:p-16 lg:p-20 flex flex-col justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={staggerContainer}
        >
          <div className="max-w-2xl mx-auto w-full">
            {/* Headline */}
            <motion.h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6" variants={fadeUp}>
              Transform Your Growth Journey
            </motion.h2>

            {/* Body Text */}
            <motion.p className="text-lg md:text-xl text-gray-100 leading-relaxed mb-8" variants={fadeUp}>
              Experience a comprehensive approach to personal and professional development. Our proven methodology combines personalized coaching with evidence-based strategies to accelerate your progress.
            </motion.p>

            {/* Bullet List */}
            <motion.ul className="space-y-4 md:space-y-5 mb-10" variants={staggerContainer}>
              <motion.li className="flex items-start gap-4" variants={fadeUp}>
                <span className="text-2xl text-purple-300 flex-shrink-0 pt-0.5">•</span>
                <span className="text-base md:text-lg text-gray-100">Personalized coaching tailored to your unique goals and challenges</span>
              </motion.li>
              <motion.li className="flex items-start gap-4" variants={fadeUp}>
                <span className="text-2xl text-purple-300 flex-shrink-0 pt-0.5">•</span>
                <span className="text-base md:text-lg text-gray-100">Sustainable habit formation with ongoing accountability and support</span>
              </motion.li>
              <motion.li className="flex items-start gap-4" variants={fadeUp}>
                <span className="text-2xl text-purple-300 flex-shrink-0 pt-0.5">•</span>
                <span className="text-base md:text-lg text-gray-100">Measurable progress tracking and adaptive strategy refinement</span>
              </motion.li>
              <motion.li className="flex items-start gap-4" variants={fadeUp}>
                <span className="text-2xl text-purple-300 flex-shrink-0 pt-0.5">•</span>
                <span className="text-base md:text-lg text-gray-100">Holistic wellness integration across all life dimensions</span>
              </motion.li>
            </motion.ul>

            {/* Divider */}
            <motion.div className="h-px bg-purple-400 bg-opacity-30 my-8" variants={fadeUp}></motion.div>

            {/* CTA Button */}
            <motion.button className="bg-white hover:bg-gray-50 text-[#6B4423] font-semibold px-8 md:px-10 py-4 md:py-5 rounded-lg transition-all duration-300 hover:shadow-2xl text-base md:text-lg" variants={fadeUp}>
              Start Your Growth Today
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
