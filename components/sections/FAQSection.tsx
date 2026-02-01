"use client";

import { motion } from "framer-motion";
import { fadeLeft, fadeUp, staggerContainer, viewportOptions } from "@/lib/animations";

export default function FAQSection() {
  const faqs = [
    {
      question: "How do I get started with therapy?",
      answer: "Simply reach out via phone or our contact form. We'll schedule a free 15-minute consultation to discuss your needs and determine if we're a good fit."
    },
    {
      question: "What can I expect in the first session?",
      answer: "Your first session is about getting to know each other. We'll discuss your concerns, goals, and what brings you to therapy. It's a judgment-free space to explore your needs."
    },
    {
      question: "Do you accept insurance?",
      answer: "We provide superbills for out-of-network reimbursement and offer sliding scale options to make therapy accessible to everyone."
    },
    {
      question: "How long does therapy typically last?",
      answer: "Every journey is unique. Some clients benefit from short-term work (8-12 sessions), while others prefer ongoing support. We'll regularly review your progress together."
    },
    {
      question: "Are virtual sessions available?",
      answer: "Yes, we offer secure telehealth sessions via a HIPAA-compliant platform. Many clients find virtual therapy just as effective and more convenient."
    }
  ];

  return (
    <section id="faq-detailed" className="bg-[#f9f5f0] py-20 md:py-32">
      <div className="px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-16">
          {/* Left Column - Portrait Image (40%) */}
          <motion.div 
            className="md:col-span-2 order-2 md:order-1"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            variants={fadeLeft}
          >
            <div className="h-96 md:h-full md:min-h-[700px] bg-gradient-to-b from-[#d8cbb8] to-[#c9baa6] rounded-t-3xl md:rounded-t-4xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80"
                alt="Peaceful therapy space"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Right Column - FAQ Content (60%) */}
          <motion.div 
            className="md:col-span-3 order-1 md:order-2 space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUp}>
              <h2 className="text-4xl md:text-5xl font-bold text-[#2b3b2b] leading-tight mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-[#4b5a4b] leading-relaxed">
                Find answers to common questions about our therapy services and what to expect.
              </p>
            </motion.div>

            {/* FAQ List */}
            <motion.div className="space-y-1" variants={staggerContainer}>
              {faqs.map((faq, index) => (
                <motion.details
                  key={index}
                  className="group bg-white rounded-lg overflow-hidden"
                  variants={fadeUp}
                >
                  <summary className="flex items-center justify-between cursor-pointer px-6 py-5 hover:bg-[#faf8f5] transition-colors duration-200">
                    <h3 className="text-lg md:text-xl font-semibold text-[#2b3b2b] pr-4">
                      {faq.question}
                    </h3>
                    <span className="text-2xl text-[#4b5a4b] group-open:rotate-45 transition-transform duration-200 flex-shrink-0">
                      +
                    </span>
                  </summary>
                  <div className="px-6 pb-5 pt-2">
                    <div className="h-px bg-[#e5ddd0] mb-4"></div>
                    <p className="text-base md:text-lg text-[#4b5a4b] leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </motion.details>
              ))}
            </motion.div>

            {/* Bottom CTA */}
            <motion.div className="pt-6" variants={fadeUp}>
              <p className="text-[#4b5a4b] mb-4">
                Still have questions? We're here to help.
              </p>
              <button className="border-2 border-[#2b3b2b] text-[#2b3b2b] hover:bg-[#2b3b2b] hover:text-[#f9f5f0] font-semibold px-8 py-4 rounded-lg transition-all duration-300 text-base md:text-lg">
                Contact Us
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
