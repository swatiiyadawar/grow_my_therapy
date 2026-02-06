"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp, staggerContainer, viewportOptions } from "@/lib/animations";

export default function Professional() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const backgroundItems = [
    {
      title: "Education & Credentials",
      content: "Doctor of Psychology (PsyD) in Clinical Psychology from an APA-accredited program. My doctoral training emphasized evidence-based practice, with specialized coursework in trauma-focused interventions, cognitive-behavioral therapy, and integrative approaches to mental health."
    },
    {
      title: "California Licensure",
      content: "Licensed Clinical Psychologist (PSY #XXXXX) in the State of California. I maintain full credentials to provide individual psychotherapy both in-person at my Santa Monica office and via secure telehealth to adults throughout California."
    },
    {
      title: "Specialized Training",
      content: "EMDR-trained clinician for trauma processing. Additional certifications in somatic experiencing, mindfulness-based cognitive therapy (MBCT), and advanced training in treating anxiety disorders, PTSD, and complex trauma in adults."
    }
  ];

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* Accordion Section - My Professional Background */}
      <section id="professional" className="bg-[#D5CEC4] py-20 md:py-28">
        <div className="px-6 md:px-12 lg:px-20 max-w-[700px] mx-auto">
          {/* Centered Heading */}
          <motion.div 
            className="text-center mb-10"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            variants={staggerContainer}
          >
            <motion.h2 
              className="text-[#1F4E5F] leading-[1.1] tracking-[-0.02em]"
              style={{ 
                fontFamily: "var(--font-cormorant)",
                fontSize: 'clamp(28px, 4vw, 42px)',
                fontWeight: 500,
              }}
              variants={fadeUp}
            >
              My Professional Background
            </motion.h2>
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
              <motion.div
                key={index}
                className="border-t border-[#1F4E5F]/40 last:border-b"
                variants={fadeUp}
              >
                <button 
                  className="flex items-center justify-between w-full py-5 text-left"
                  onClick={() => toggleItem(index)}
                >
                  <h3 
                    className="text-[#1F4E5F] text-lg md:text-xl"
                    style={{ fontFamily: "var(--font-cormorant)", fontWeight: 500 }}
                  >
                    {item.title}
                  </h3>
                  <span 
                    className="text-[#7A9E8E] text-xl flex-shrink-0"
                    style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300 }}
                  >
                    {openIndex === index ? '—' : '+'}
                  </span>
                </button>
                
                {/* Answer */}
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p 
                        className="text-[#1F4E5F] text-base pb-5 pl-6"
                        style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
                      >
                        {item.content}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Full-Width CTA Section - Get started today */}
      <section id="cta-professional" className="bg-[#4A7C6F] py-20 md:py-28">
        <motion.div 
          className="px-6 md:px-12 lg:px-20 max-w-[700px] mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={staggerContainer}
        >
          {/* Headline */}
          <motion.h2 
            className="text-white leading-[1.2] tracking-[-0.02em] mb-6"
            style={{ 
              fontFamily: "var(--font-cormorant)",
              fontSize: 'clamp(28px, 4vw, 42px)',
              fontWeight: 500,
            }}
            variants={fadeUp}
          >
            Ready to Begin Therapy in Santa Monica?
          </motion.h2>

          {/* Supporting Text */}
          <motion.p 
            className="text-white/80 text-base md:text-lg leading-[1.8] mb-10 max-w-xl mx-auto"
            style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
            variants={fadeUp}
          >
            Taking the first step is often the hardest part. I offer a free 15-minute phone consultation to answer your questions and help you decide if we're a good fit. Let's start the conversation.
          </motion.p>

          {/* Outlined Button */}
          <motion.a 
            href="/contact"
            className="inline-flex items-center gap-3 border border-white bg-transparent text-white hover:bg-white hover:text-[#4A7C6F] px-8 py-4 transition-all duration-300 text-xs uppercase tracking-[0.2em] group"
            style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600 }}
            variants={fadeUp}
          >
            Book Your Free Consultation
            <span className="text-base group-hover:translate-x-1 transition-transform">→</span>
          </motion.a>
        </motion.div>
      </section>
    </>
  );
}
