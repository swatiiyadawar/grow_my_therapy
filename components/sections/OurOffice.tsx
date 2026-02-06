"use client";

import { motion } from "framer-motion";
import { fadeUp, fadeLeft, fadeRight, staggerContainer, viewportOptions } from "@/lib/animations";

export default function OurOffice() {
  return (
    <section id="our-office" className="bg-[#FAF8F5] py-20 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        
        {/* Section Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16 md:mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={staggerContainer}
        >
          <motion.p 
            className="text-[#7A9E8E] text-xs md:text-sm uppercase tracking-[0.3em] mb-4 md:mb-6"
            style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
            variants={fadeUp}
          >
            Santa Monica, California
          </motion.p>
          
          <motion.h2 
            className="text-[#1F4E5F] leading-[1.2] tracking-[-0.02em] mb-6 md:mb-8"
            style={{ 
              fontFamily: "var(--font-cormorant)",
              fontSize: 'clamp(40px, 6vw, 64px)',
              fontWeight: 500,
            }}
            variants={fadeUp}
          >
            A Calm Space for Healing
          </motion.h2>
          
          <motion.p 
            className="text-[#1F4E5F]/70 text-sm md:text-base leading-[1.7]"
            style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
            variants={fadeUp}
          >
            My office at 123th Street 45 W, Santa Monica, CA 90401 provides a quiet, private sanctuary—natural light, comfortable furnishings, and a grounding atmosphere where healing can unfold.
          </motion.p>
        </motion.div>

        {/* Image Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-20 md:mb-28"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={staggerContainer}
        >
          {/* Left Image */}
          <motion.div 
            className="h-[340px] md:h-[420px] bg-[#E5DED4] overflow-hidden"
            variants={fadeLeft}
          >
            <img
              src="/images/office1.jpg"
              alt="Therapy office interior with natural light and peaceful ambiance"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Right Image */}
          <motion.div 
            className="h-[340px] md:h-[420px] bg-[#E5DED4] overflow-hidden"
            variants={fadeRight}
          >
            <img
              src="/images/office2.jpg"
              alt="Warm waiting area with welcoming atmosphere"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>

        {/* Info Section - Editorial Style */}
        <motion.div 
          className="max-w-6xl mx-auto mb-16 md:mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={staggerContainer}
        >
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
            variants={fadeUp}
          >
            <div className="text-center md:text-left">
              <h3 className="text-[#1F4E5F] text-sm uppercase tracking-[0.15em] mb-4"
                style={{ fontFamily: "var(--font-body)", fontWeight: 600 }}>
                Hours
              </h3>
              <p 
                className="text-[#1F4E5F]/80 text-sm md:text-base leading-[1.7]"
                style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
              >
                Monday – Friday, 9am – 6pm
                <br />
                <span className="text-[#1F4E5F]/60 text-xs md:text-sm">Centrally located, accessible by car and public transit</span>
              </p>
            </div>
            
            <div className="text-center md:text-left">
              <h3 className="text-[#1F4E5F] text-sm uppercase tracking-[0.15em] mb-4"
                style={{ fontFamily: "var(--font-body)", fontWeight: 600 }}>
                Sessions
              </h3>
              <p 
                className="text-[#1F4E5F]/80 text-sm md:text-base leading-[1.7]"
                style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
              >
                In-person and secure telehealth
                <br />
                <span className="text-[#1F4E5F]/60 text-xs md:text-sm">Same warmth, depth, and evidence-based care</span>
              </p>
            </div>

            <div className="text-center md:text-left">
              <h3 className="text-[#1F4E5F] text-sm uppercase tracking-[0.15em] mb-4"
                style={{ fontFamily: "var(--font-body)", fontWeight: 600 }}>
                Privacy
              </h3>
              <p 
                className="text-[#1F4E5F]/80 text-sm md:text-base leading-[1.7]"
                style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
              >
                Discreet, private entrance
                <br />
                <span className="text-[#1F4E5F]/60 text-xs md:text-sm">Complete confidentiality from arrival to departure</span>
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* CTA */}
        <motion.div 
          className="text-center pt-8 md:pt-12 border-t border-[#1F4E5F]/20"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={fadeUp}
        >
          <a 
            href="/contact"
            className="inline-flex items-center gap-3 text-[#1F4E5F] hover:opacity-60 transition-opacity duration-300 text-xs uppercase tracking-[0.2em] group"
            style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600 }}
          >
            Schedule a Visit
            <span className="text-base group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
