"use client";

import { motion } from "framer-motion";
import { fadeRight, viewportOptions } from "@/lib/animations";

export default function ContactNotice() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportOptions}
      variants={fadeRight}
      className="bg-[#1F4E5F] text-white p-8 sm:p-10 md:p-12 w-full"
    >
      <p
        className="text-sm sm:text-base md:text-lg leading-[1.7] sm:leading-[1.8] mb-6"
        style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
      >
        <span 
          className="font-bold uppercase tracking-wide"
          style={{ fontFamily: "var(--font-body)", fontWeight: 700 }}
        >
          PLEASE NOTE:
        </span>{" "}
        If you opt to use a "Form Block" on your contact page this is not HIPAA-compliant. Squarespace stores data that is input into forms in the Marketing tab under Profiles. Instead, you can embed a HIPAA-compliant form, a link to your client portal, or simply put your email address.
      </p>
      <p
        className="text-sm sm:text-base md:text-lg leading-[1.7] sm:leading-[1.8]"
        style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
      >
        <span 
          className="font-bold uppercase tracking-wide"
          style={{ fontFamily: "var(--font-body)", fontWeight: 700 }}
        >
          Email:
        </span>{" "}
        hello@drmayareynolds.com
      </p>
    </motion.div>
  );
}
