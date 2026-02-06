"use client";

import { motion } from "framer-motion";
import { viewportOptions } from "@/lib/animations";

interface BlogCardProps {
  image: string;
  date: string;
  title: string;
  slug: string;
  index?: number;
}

export default function BlogCard({ image, date, title, slug, index = 0 }: BlogCardProps) {
  const cardVariant = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.15,
      },
    },
  };

  return (
    <motion.article
      className="space-y-5"
      initial="hidden"
      whileInView="visible"
      viewport={viewportOptions}
      variants={cardVariant}
    >
      {/* Image - Larger */}
      <div className="w-full h-[350px] md:h-[420px] overflow-hidden bg-[#E5DED4]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="space-y-3 pt-2">
        {/* Date */}
        <p 
          className="text-sm text-[#1F4E5F]"
          style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
        >
          {new Date(date).toLocaleDateString('en-US', { 
            month: 'numeric', 
            day: 'numeric',
            year: '2-digit'
          }).replace(/\//g, '/')}
        </p>

        {/* Title - Larger and Bolder */}
        <h3 
          className="text-[#1F4E5F] leading-[1.1] tracking-[-0.02em]"
          style={{ 
            fontFamily: "var(--font-cormorant)", 
            fontSize: 'clamp(28px, 4vw, 42px)',
            fontWeight: 500 
          }}
        >
          {title}
        </h3>

        {/* Read More Link */}
        <a
          href={`/blog/${slug}`}
          className="inline-block text-[#1F4E5F] hover:opacity-70 transition-opacity pt-2"
          style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
        >
          <span className="underline underline-offset-4">Read More</span>
        </a>
      </div>
    </motion.article>
  );
}
