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
      className="bg-[#243417] text-[#F7F4EE] p-12 md:p-16 w-full"
    >
      <motion.h3
        variants={fadeRight}
        className="text-sm md:text-base font-semibold uppercase tracking-wide mb-8 md:mb-10"
      >
        Please Note:
      </motion.h3>

      <motion.p
        variants={fadeRight}
        className="text-base md:text-lg leading-relaxed font-light"
      >
        All therapy sessions are protected under strict confidentiality and HIPAA
        regulations. Any information you share during consultation or treatment
        remains completely private. This is a safe, non-judgmental space dedicated
        to your wellbeing and growth. If you have any privacy concerns, please feel
        free to discuss them directly.
      </motion.p>
    </motion.div>
  );
}
