"use client";

import { motion } from "framer-motion";
import { fadeUp, fadeLeft, staggerContainer, viewportOptions } from "@/lib/animations";
import ContactNotice from "./ContactNotice";

export default function ContactContent() {
  return (
    <>
    <section className="bg-[#D6D3DC] min-h-screen py-32 md:py-40 px-8 md:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_520px] gap-32 lg:gap-32 items-start">
          
          {/* LEFT COLUMN - Text & Images */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            variants={staggerContainer}
            className="space-y-16 md:space-y-20"
          >
            {/* Heading */}
            <motion.div variants={fadeUp} className="space-y-8">
              <h1 className="text-5xl md:text-6xl font-semibold text-[#2F3B1F] leading-tight">
                Let's Connect
              </h1>

              <p className="text-lg md:text-xl text-[#4A5540] leading-relaxed max-w-xl font-light">
                Starting therapy is courageous. Get in touch for questions, or to book a free 15-minute consultation.
              </p>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              variants={staggerContainer}
              className="space-y-10 pt-8"
            >
              <motion.div variants={fadeUp} className="space-y-2">
                <p className="text-sm font-semibold text-[#2F3B1F] uppercase tracking-widest">
                  Phone
                </p>
                <a
                  href="tel:+14165551234"
                  className="text-lg text-[#4A5540] hover:text-[#2F3B1F] transition-colors font-light"
                >
                  (416) 555-1234
                </a>
              </motion.div>

              <motion.div variants={fadeUp} className="space-y-2">
                <p className="text-sm font-semibold text-[#2F3B1F] uppercase tracking-widest">
                  Email
                </p>
                <a
                  href="mailto:hello@growtherapy.com"
                  className="text-lg text-[#4A5540] hover:text-[#2F3B1F] transition-colors font-light"
                >
                  hello@growtherapy.com
                </a>
              </motion.div>

              <motion.div variants={fadeUp} className="space-y-2">
                <p className="text-sm font-semibold text-[#2F3B1F] uppercase tracking-widest">
                  Location
                </p>
                <p className="text-lg text-[#4A5540] font-light">
                  Toronto, ON
                </p>
              </motion.div>
            </motion.div>

            {/* CTA Button */}
            <motion.a
              href="#book"
              variants={fadeUp}
              className="inline-block mt-12"
            >
              <button className="bg-[#2F3B1F] text-[#F7F4EE] px-8 py-3 font-medium hover:bg-[#1a2312] transition-colors">
                Schedule Free Consultation
              </button>
            </motion.a>

            {/* Images Section */}
            <motion.div
              variants={fadeLeft}
              className="pt-20 md:pt-24 flex items-end gap-8 md:gap-10"
            >
              {/* Tall arch image */}
              <div className="flex-1 max-w-sm">
                <div className="h-96 md:h-[480px] overflow-hidden bg-[#e8ded4]">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a775?w=600&h=800&fit=crop"
                    alt="Therapy session"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Circular overlapping image */}
              <motion.div
                variants={fadeLeft}
                transition={{ delay: 0.2 }}
                className="w-40 h-40 md:w-52 md:h-52 overflow-hidden bg-[#e8ded4] flex-shrink-0 -ml-12 md:-ml-16"
              >
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN - Notice Box */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className=""
          >
            <ContactNotice />
          </motion.div>
        </div>
      </div>
    </section>

    <section className="bg-[#ECE7DF] py-32 md:py-40 px-8 md:px-12 lg:px-16" id="book">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOptions}
        variants={staggerContainer}
        className="max-w-[800px] mx-auto text-center space-y-8"
      >
        <motion.h2
          variants={fadeUp}
          className="text-5xl md:text-6xl font-semibold text-[#2F3B1F] tracking-tight"
        >
          Book an appointment.
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="text-lg md:text-xl text-[#4A5540] leading-relaxed max-w-[600px] mx-auto font-light"
        >
          Choose a time that feels right for you. This space is designed to make scheduling simple, calm, and clear.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="mt-20 md:mt-24 flex justify-center"
        >
          <div className="bg-white w-full max-w-[480px] px-10 md:px-12 py-10 md:py-12 text-center">
            <h3 className="text-xl md:text-2xl font-semibold text-[#1E1E1E]">
              This page is not active
            </h3>
            <p className="mt-4 text-sm md:text-base text-[#6B6B6B] leading-relaxed">
              Scheduling will be available soon. For now, please contact us directly to book your consultation.
            </p>
            <div className="mt-8 flex justify-center">
              <button className="bg-black text-white px-5 py-3 text-sm md:text-base font-semibold uppercase tracking-wide hover:opacity-90 transition-opacity">
                Contact us
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>

    {/* SECTION 3: My Office */}
    <section className="bg-[#7A7A45] py-32 md:py-36 px-8 md:px-20 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-20 items-center">
          
          {/* Left Column - Text */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            variants={staggerContainer}
            className="space-y-12"
          >
            <motion.h2
              variants={fadeUp}
              className="text-4xl md:text-5xl font-semibold text-[#F5F2EB] leading-tight"
            >
              My Office
            </motion.h2>

            <motion.div variants={fadeUp} className="space-y-3">
              <p className="text-lg text-[#F5F2EB] leading-relaxed font-light">
                123 Queen Street West
              </p>
              <p className="text-lg text-[#F5F2EB] leading-relaxed font-light">
                Suite 456
              </p>
              <p className="text-lg text-[#F5F2EB] leading-relaxed font-light">
                Toronto, ON M5H 2M9
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="pt-8 space-y-4">
              <h3 className="text-xl font-semibold text-[#F5F2EB]">
                Hours
              </h3>
              <p className="text-lg text-[#F5F2EB] leading-relaxed font-light">
                Monday – Friday: 9:00 AM – 6:00 PM
              </p>
              <p className="text-lg text-[#F5F2EB] leading-relaxed font-light">
                Saturday: By appointment only
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column - Map */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            variants={fadeLeft}
            className="flex justify-center lg:justify-end"
          >
            <div className="w-full max-w-[520px] h-80 md:h-96 bg-gray-300 overflow-hidden">
              <img
                src="https://api.mapbox.com/styles/v1/mapbox/light-v11/static/-79.3832,43.6532,13,0/600x400@2x?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw"
                alt="Office location map"
                className="w-full h-full object-cover grayscale"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* SECTION 4: Find me on social */}
    <section className="bg-[#ECE7DF] py-32 md:py-36 px-8 md:px-20 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={fadeUp}
          className="text-4xl md:text-5xl font-semibold text-[#2F3B1F] mb-12 md:mb-16"
        >
          Find me on social.
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          <motion.div variants={fadeUp} className="aspect-square bg-gray-200 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&h=400&fit=crop"
              alt="Social post"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div variants={fadeUp} className="aspect-square bg-gray-200 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=400&fit=crop"
              alt="Social post"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div variants={fadeUp} className="aspect-square bg-gray-200 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=400&h=400&fit=crop"
              alt="Social post"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div variants={fadeUp} className="aspect-square bg-gray-200 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1490730141103-6cac27aaab94?w=400&h=400&fit=crop"
              alt="Social post"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
    </>
  );
}
