"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeLeft, fadeUp, staggerContainer, viewportOptions } from "@/lib/animations";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What happens in the first therapy session?",
      answer: "Our initial consultation is a chance to get to know each other. I'll ask about what's bringing you to therapy, your personal history, and your goals for treatment. You'll also have the opportunity to ask questions and determine if my approach feels like a good fit. There's no pressure—just an open, supportive conversation."
    },
    {
      question: "Do you offer online therapy in California?",
      answer: "Yes, I provide secure, HIPAA-compliant telehealth sessions to clients located anywhere in California. Many people find video therapy just as effective as in-person sessions, with the added convenience of attending from home or work. I also see clients in-person at my Santa Monica office."
    },
    {
      question: "How does EMDR therapy work for trauma?",
      answer: "EMDR (Eye Movement Desensitization and Reprocessing) is an evidence-based therapy that helps your brain process traumatic memories. Using bilateral stimulation, we work together to reduce the emotional intensity of past experiences. My approach is carefully paced, emphasizing safety and stabilization before processing."
    },
    {
      question: "How long does therapy typically take?",
      answer: "The duration varies based on your unique needs and goals. Some clients find relief in 8-12 sessions, while others benefit from longer-term work. During our initial sessions, we'll discuss a treatment plan tailored to you. I believe in collaborative, goal-oriented therapy that respects your timeline."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq-detailed" className="bg-[#FAF8F5] py-20 md:py-28">
      <div className="px-6 md:px-12 lg:px-20 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column - Arched Image */}
          <motion.div 
            className="order-2 lg:order-1"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            variants={fadeLeft}
          >
            <div 
              className="w-full max-w-[420px] h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden mx-auto lg:mx-0"
              style={{ borderRadius: '9999px 9999px 0px 0px' }}
            >
              <img
                src="/images/faq.jpg"
                alt="Dried flowers in vase"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Right Column - FAQ Content */}
          <motion.div 
            className="order-1 lg:order-2 flex flex-col justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            variants={staggerContainer}
          >
            {/* Title */}
            <motion.h2 
              className="text-[#1F4E5F] leading-[1.1] tracking-[-0.02em] mb-12"
              style={{ 
                fontFamily: "var(--font-cormorant)",
                fontSize: 'clamp(36px, 5vw, 52px)',
                fontWeight: 500,
              }}
              variants={fadeUp}
            >
              Frequently Asked Questions
            </motion.h2>

            {/* FAQ List */}
            <div className="space-y-0">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  className="border-b border-[#1F4E5F]/30"
                  variants={fadeUp}
                >
                  <button 
                    className="flex items-center gap-4 w-full py-6 text-left group"
                    onClick={() => toggleFAQ(index)}
                  >
                    {/* Plus/Minus Icon */}
                    <span 
                      className="text-[#7A9E8E] text-2xl flex-shrink-0 transition-transform duration-300"
                      style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300 }}
                    >
                      {openIndex === index ? '—' : '+'}
                    </span>
                    
                    {/* Question */}
                    <h3 
                      className="text-[#1F4E5F] text-xl md:text-2xl lg:text-3xl"
                      style={{ fontFamily: "var(--font-cormorant)", fontWeight: 500 }}
                    >
                      {faq.question}
                    </h3>
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
                          className="text-[#1F4E5F] text-base md:text-lg pb-6 pl-10"
                          style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
                        >
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
