"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, cardVariant, viewportOptions } from "@/lib/animations";

const services = [
  {
    title: "Individual Therapy",
    description:
      "Personalized sessions focused on anxiety, burnout, and emotional regulation.",
  },
  {
    title: "Couples Therapy",
    description:
      "Improve communication, rebuild trust, and strengthen connection.",
  },
  {
    title: "Group Support",
    description:
      "Small, supportive groups centered on shared challenges and growth.",
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
            <motion.h2 className="text-3xl font-semibold text-[#2E4A2F]" variants={fadeUp}>Services</motion.h2>
            <motion.p className="mt-2 text-[#2E4A2F]/80" variants={fadeUp}>
              A range of options to meet your needs and schedule.
            </motion.p>
          </div>
          <motion.span className="text-sm font-semibold text-[#2E4A2F]/70" variants={fadeUp}>
            Sliding scale available
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
              className="rounded-3xl border border-[#2E4A2F]/20 bg-[#FBF6EE] p-8"
              variants={cardVariant}
            >
              <h3 className="text-xl font-semibold text-[#2E4A2F]">
                {service.title}
              </h3>
              <p className="mt-3 text-[#2E4A2F]/80">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
