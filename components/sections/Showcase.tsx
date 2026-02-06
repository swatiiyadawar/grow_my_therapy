"use client";

import { motion } from "framer-motion";
import { fadeUp, fadeRight, staggerContainer, viewportOptions } from "@/lib/animations";

export default function Showcase() {
  return (
    <section id="showcase" className="bg-[#E5DED4] py-20 md:py-28">
      <div className="px-6 md:px-12 lg:px-20 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Text Content */}
          <motion.div 
            className="text-left max-w-xl"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            variants={staggerContainer}
          >
            {/* Headline */}
            <motion.h2 
              className="text-[#1F4E5F] leading-[1.1] tracking-[-0.02em] mb-6"
              style={{ 
                fontFamily: "var(--font-cormorant)",
                fontSize: 'clamp(36px, 5vw, 52px)',
                fontWeight: 500,
              }}
              variants={fadeUp}
            >
              Hi, I'm Dr. Maya.
            </motion.h2>

            {/* Body Paragraph */}
            <motion.p 
              className="text-[#1F4E5F] text-base md:text-lg leading-[1.8] mb-10"
              style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
              variants={fadeUp}
            >
              I'm a licensed clinical psychologist based in Santa Monica, California. I work with adults experiencing anxiety, panic attacks, trauma, burnout, perfectionism, sleep difficulties, and relationship struggles—especially those navigating high-pressure careers or past experiences that continue to affect their confidence and sense of safety.
            </motion.p>
            
            <motion.p 
              className="text-[#1F4E5F] text-base md:text-lg leading-[1.8] mb-10"
              style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
              variants={fadeUp}
            >
              My approach is warm, grounded, and collaborative. I combine evidence-based methods—EMDR, CBT, mindfulness, and somatic work—with depth-oriented therapy that honors your whole self. If you're looking for practical tools AND meaningful healing, we may be a good fit.
            </motion.p>

            {/* Outlined CTA Button */}
            <motion.div variants={fadeUp}>
              <a 
                href="/contact"
                className="inline-flex items-center gap-3 border border-[#1F4E5F] bg-transparent text-[#1F4E5F] hover:bg-[#1F4E5F] hover:text-[#E5DED4] px-8 py-4 transition-all duration-300 text-xs uppercase tracking-[0.2em] group"
                style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600 }}
              >
                Let's Chat
                <span className="text-base group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column - Layered Images */}
          <motion.div 
            className="relative h-[500px] md:h-[600px] lg:h-[700px]"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            variants={fadeRight}
          >
            {/* Primary Image - Tall Arched Shape */}
            <div 
              className="absolute top-0 left-1/2 -translate-x-1/2 lg:left-auto lg:translate-x-0 lg:left-8 w-[280px] md:w-[340px] lg:w-[400px] h-[450px] md:h-[520px] lg:h-[620px] overflow-hidden"
              style={{ borderRadius: '9999px 9999px 0px 0px' }}
            >
              <img
                src="/images/maya.jpg"
                alt="Person holding lilac flowers"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Secondary Image - Circular Overlapping Bottom-Right */}
            <div 
              className="absolute bottom-0 right-0 lg:right-0 w-[180px] h-[180px] md:w-[240px] md:h-[240px] lg:w-[300px] lg:h-[300px] rounded-full overflow-hidden border-4 border-[#E5DED4]"
            >
              <img
                src="./images/white.jpeg"
                alt="White flowers"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
