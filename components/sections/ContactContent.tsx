"use client";

import { motion } from "framer-motion";
import { fadeUp, fadeLeft, staggerContainer, viewportOptions } from "@/lib/animations";
import ContactNotice from "./ContactNotice";

export default function ContactContent() {
  return (
    <>
    <section className="bg-[#C9A7A2] min-h-screen pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-12 sm:pb-16 md:pb-20 lg:pb-28 px-4 sm:px-6 md:px-12 lg:px-20">
      <div className="max-w-[1400px] mx-auto">
        {/* Main Heading */}
        <motion.h1 
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={fadeUp}
          className="text-[#1F4E5F] leading-[1.1] tracking-[-0.02em] mb-8 sm:mb-10 md:mb-12"
          style={{ 
            fontFamily: "var(--font-cormorant)",
            fontSize: 'clamp(36px, 7vw, 64px)',
            fontWeight: 600,
          }}
        >
          Let's Connect
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-16 items-start">
          
          {/* LEFT COLUMN - Text & Images */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            variants={staggerContainer}
            className="space-y-5 sm:space-y-6"
          >
            {/* Description */}
            <motion.p 
              variants={fadeUp} 
              className="text-[#1F4E5F] text-sm sm:text-base md:text-lg leading-[1.7] sm:leading-relaxed"
              style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
            >
              Starting therapy is courageous.
            </motion.p>
            
            <motion.p 
              variants={fadeUp} 
              className="text-[#1F4E5F] text-sm sm:text-base md:text-lg leading-[1.7] sm:leading-relaxed max-w-lg"
              style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
            >
              Get in touch for questions, or to book a free 15-minute consultation.
            </motion.p>

            {/* Images Section */}
            <motion.div
              variants={fadeLeft}
              className="pt-4 sm:pt-6 md:pt-8 relative"
            >
              {/* Tall arch image */}
              <div 
                className="w-[220px] sm:w-[260px] md:w-[300px] lg:w-[320px] h-[300px] sm:h-[360px] md:h-[420px] lg:h-[450px] overflow-hidden bg-[#E5DED4]"
                style={{ borderRadius: '9999px 9999px 0 0' }}
              >
                <img
                  src="/images/maya.jpg"
                  alt="Person with lilac flowers"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Circular overlapping image */}
              <div
                className="absolute bottom-0 right-0 lg:right-auto lg:left-[200px] md:left-[180px] sm:left-[140px] left-[100px] w-[110px] h-[110px] sm:w-[140px] sm:h-[140px] md:w-[160px] md:h-[160px] lg:w-[180px] lg:h-[180px] rounded-full overflow-hidden bg-[#E5DED4] border-3 sm:border-4 border-[#C9A7A2]"
              >
                <img
                  src="/images/white.jpeg"
                  alt="White flowers"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN - Notice Box */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className="w-full"
          >
            <ContactNotice />
          </motion.div>
        </div>
      </div>
    </section>

    <section className="bg-[#F5F0E8] py-12 sm:py-16 md:py-20 lg:py-28 px-4 sm:px-6 md:px-12 lg:px-20" id="book">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOptions}
        variants={staggerContainer}
        className="max-w-[900px] mx-auto text-center"
      >
        <motion.h2
          variants={fadeUp}
          className="text-[#1F4E5F] leading-[1.1] tracking-[-0.02em] mb-6 md:mb-8"
          style={{ 
            fontFamily: "var(--font-cormorant)",
            fontSize: 'clamp(32px, 5vw, 52px)',
            fontWeight: 600,
          }}
        >
          Book an appointment.
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="text-[#1F4E5F] text-sm sm:text-base md:text-lg leading-[1.7] sm:leading-[1.8] max-w-[700px] mx-auto mb-12 md:mb-16"
          style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
        >
          I offer both in-person therapy from my Santa Monica office and secure telehealth sessions for clients located in California. Use the calendar below to book your initial consultation.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="flex justify-center"
        >
          <div className="bg-white w-full max-w-[520px] px-10 md:px-12 py-10 md:py-12 text-center shadow-sm">
            <h3 
              className="text-[#1E1E1E] text-xl md:text-2xl mb-4"
              style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600 }}
            >
              This page is not active
            </h3>
            <p 
              className="text-[#6B6B6B] text-sm md:text-base leading-relaxed mb-8"
              style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
            >
              If you're the owner, please log into your account to start a free trial or subscribe.
            </p>
            <button 
              className="bg-[#1E1E1E] text-white px-6 py-3 text-xs uppercase tracking-[0.15em] hover:opacity-90 transition-opacity"
              style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600 }}
            >
              Go To Account
            </button>
          </div>
        </motion.div>
      </motion.div>
    </section>

    {/* SECTION 3: My Office */}
    <section className="bg-[#1F4E5F] py-12 sm:py-16 md:py-20 lg:py-28 px-4 sm:px-6 md:px-12 lg:px-20">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center">
          
          {/* Left Column - Text */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            variants={staggerContainer}
            className="space-y-6 md:space-y-8"
          >
            <motion.h2
              variants={fadeUp}
              className="text-white leading-[1.1] tracking-[-0.02em]"
              style={{ 
                fontFamily: "var(--font-cormorant)",
                fontSize: 'clamp(28px, 5vw, 44px)',
                fontWeight: 500,
              }}
            >
              My Office
            </motion.h2>

            <motion.div variants={fadeUp} className="space-y-1">
              <p 
                className="text-white text-xs sm:text-sm md:text-base lg:text-lg"
                style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
              >
                123th Street 45 W
              </p>
              <p 
                className="text-white text-xs sm:text-sm md:text-base lg:text-lg"
                style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
              >
                Santa Monica, CA 90401
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="pt-2 md:pt-4 space-y-2">
              <h3 
                className="text-white text-lg sm:text-xl md:text-2xl"
                style={{ fontFamily: "var(--font-cormorant)", fontWeight: 500 }}
              >
                Hours
              </h3>
              <p 
                className="text-white text-xs sm:text-sm md:text-base lg:text-lg"
                style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
              >
                Monday – Friday
              </p>
              <p 
                className="text-white text-xs sm:text-sm md:text-base lg:text-lg"
                style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
              >
                9am – 6pm
              </p>
            </motion.div>

            <motion.p 
              variants={fadeUp} 
              className="text-white/80 text-xs sm:text-sm md:text-base leading-[1.6] md:leading-relaxed pt-2 md:pt-4"
              style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
            >
              My office is a quiet, private space designed to feel calm and grounding, with natural light and a comfortable, uncluttered environment.
            </motion.p>
          </motion.div>

          {/* Right Column - Map */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            variants={fadeLeft}
            className="flex justify-center lg:justify-end"
          >
            <div className="w-full max-w-[600px] h-[280px] sm:h-[350px] md:h-[400px] lg:h-[420px] bg-gray-200 overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52877.27479540685!2d-118.5073395!3d34.0194543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2a4cec2910019%3A0xb4170ab5ff23f5ab!2sSanta%20Monica%2C%20CA!5e0!3m2!1sen!2sus!4v1706900000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(100%)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* SECTION 4: Find me on social */}
    <section className="bg-[#FAF8F5] py-12 sm:py-16 md:py-20 lg:py-28 px-4 sm:px-6 md:px-12 lg:px-20 border-b-2">
      <div className="max-w-[1400px] mx-auto">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={fadeUp}
          className="text-[#1F4E5F] leading-[1.1] tracking-[-0.02em] mb-8 sm:mb-10 md:mb-12 lg:mb-14"
          style={{ 
            fontFamily: "var(--font-cormorant)",
            fontSize: 'clamp(28px, 5vw, 44px)',
            fontWeight: 600,
          }}
        >
          Find me on social.
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={staggerContainer}
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4 lg:gap-6"
        >
          <motion.div variants={fadeUp} className="aspect-square bg-gray-200 overflow-hidden rounded-sm">
            <img
              src="./images/social.jpg"
              alt="Social post - lilac flowers"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </motion.div>

          <motion.div variants={fadeUp} className="aspect-square bg-gray-200 overflow-hidden rounded-sm">
            <img
              src="./images/specialist3.jpg"
              alt="Social post - reading books"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </motion.div>

          <motion.div variants={fadeUp} className="aspect-square bg-gray-200 overflow-hidden rounded-sm hidden md:block">
            <img
              src="./images/about.jpg"
              alt="Social post - coffee and journal"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </motion.div>

          <motion.div variants={fadeUp} className="aspect-square bg-gray-200 overflow-hidden rounded-sm hidden lg:block">
            <img
              src="./images/hero1.jpg"
              alt="Social post - lilac bouquet"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
    </>
  );
}
