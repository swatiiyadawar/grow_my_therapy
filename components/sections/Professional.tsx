"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOptions } from "@/lib/animations";

export default function Professional() {
  const backgroundItems = [
    {
      title: "Education & Training",
      content: "Master's degree in Clinical Psychology from the University of Toronto. Advanced training in Cognitive Behavioral Therapy, EMDR, and trauma-informed care. Ongoing professional development through workshops and peer supervision groups."
    },
    {
      title: "Clinical Experience",
      content: "Over 10 years of experience working with individuals, couples, and families. Specialized work with anxiety, depression, relationship challenges, and life transitions. Previous roles at community health centers and private practice settings."
    },
   
  ];

  return (
    <>
      {/* Accordion Section - Professional Background */}
      <section id="professional" className="bg-[#f5ead6] py-20 md:py-32">
        <div className="px-6 md:px-12 lg:px-20 max-w-5xl mx-auto">
          {/* Centered Heading */}
          <motion.div 
            className="text-center mb-12 md:mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            variants={staggerContainer}
          >
            <motion.h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#2b3b2b] leading-tight mb-4" variants={fadeUp}>
              Professional Background
            </motion.h2>
            <motion.p className="text-lg md:text-xl text-[#4b5a4b] max-w-3xl mx-auto" variants={fadeUp}>
              Learn more about my training, experience, and approach to therapy.
            </motion.p>
          </motion.div>

          {/* Full-Width Accordion */}
          <motion.div 
            className="space-y-0"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            variants={staggerContainer}
          >
            {backgroundItems.map((item, index) => (
              <motion.details
                key={index}
                className="group border-t border-[#d4c4a8] last:border-b"
                variants={fadeUp}
              >
                <summary className="flex items-center justify-between cursor-pointer py-6 md:py-8 hover:bg-[#f9f0e0] transition-colors duration-200 px-4 md:px-6">
                  <h3 className="text-xl md:text-2xl font-semibold text-[#2b3b2b] pr-4">
                    {item.title}
                  </h3>
                  <span className="text-3xl text-[#4b5a4b] group-open:rotate-45 transition-transform duration-200 flex-shrink-0">
                    +
                  </span>
                </summary>
                <div className="px-4 md:px-6 pb-6 md:pb-8">
                  <p className="text-base md:text-lg text-[#4b5a4b] leading-relaxed max-w-4xl">
                    {item.content}
                  </p>
                </div>
              </motion.details>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Full-Width CTA Section */}
      <section id="cta-professional" className="bg-[#6b7755] py-20 md:py-32">
        <motion.div 
          className="px-6 md:px-12 lg:px-20 max-w-4xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={staggerContainer}
        >
          {/* Headline */}
          <motion.h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6" variants={fadeUp}>
            Ready to Begin Your Journey?
          </motion.h2>

          {/* Supporting Text */}
          <motion.p className="text-lg md:text-xl text-gray-100 leading-relaxed mb-10 max-w-2xl mx-auto" variants={fadeUp}>
            Take the first step towards meaningful change. Schedule a free consultation to discuss your goals and how therapy can support your well-being.
          </motion.p>

          {/* Outlined Button */}
          <motion.button className="border-2 border-white text-white hover:bg-white hover:text-[#6b7755] font-semibold px-10 py-5 rounded-lg transition-all duration-300 text-base md:text-lg shadow-lg hover:shadow-xl" variants={fadeUp}>
            Schedule Free Consultation
          </motion.button>

          {/* Additional Info */}
          <motion.p className="text-sm md:text-base text-gray-200 mt-8" variants={fadeUp}>
            No commitment required • 15-minute introductory call
          </motion.p>
        </motion.div>
      </section>
    </>
  );
}
