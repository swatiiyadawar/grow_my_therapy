"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, cardVariant, viewportOptions } from "@/lib/animations";

const services = [
  {
    title: "Individual Psychotherapy",
    description:
      "Personalized one-on-one therapy sessions integrating CBT, EMDR, and mindfulness-based approaches to address anxiety, depression, and life transitions.",
  },
  {
    title: "EMDR Trauma Therapy",
    description:
      "Specialized Eye Movement Desensitization and Reprocessing for processing single-incident trauma, PTSD, and complex developmental trauma safely and effectively.",
  },
  {
    title: "Telehealth for California",
    description:
      "Secure, HIPAA-compliant video sessions available to clients throughout California—bringing quality psychological care to you wherever you are.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={staggerContainer}
        >
          <div>
            <motion.h2 className="text-3xl font-semibold text-[#1F4E5F]" style={{ fontFamily: "var(--font-cormorant)" }} variants={fadeUp}>How I Can Help</motion.h2>
            <motion.p className="mt-2 text-[#1F4E5F]/80" style={{ fontFamily: "var(--font-body)" }} variants={fadeUp}>
              Evidence-based therapeutic services tailored to your unique needs and goals.
            </motion.p>
          </div>
          <motion.span className="text-sm font-semibold text-[#7A9E8E]" style={{ fontFamily: "var(--font-body)" }} variants={fadeUp}>
            Sliding scale fees available
          </motion.span>
        </motion.div>
        <motion.div 
          className="mt-12 grid gap-8 md:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={staggerContainer}
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              className="rounded-3xl border border-[#1F4E5F]/20 bg-[#F5F0E8] p-8"
              variants={cardVariant}
            >
              <h3 className="text-xl font-semibold text-[#1F4E5F]" style={{ fontFamily: "var(--font-cormorant)" }}>
                {service.title}
              </h3>
              <p className="mt-3 text-[#1F4E5F]/80" style={{ fontFamily: "var(--font-body)" }}>{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
