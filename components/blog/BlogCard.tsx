"use client";

import { motion } from "framer-motion";
import { easeOut } from "framer-motion";
import { fadeUp, staggerContainer, viewportOptions } from "@/lib/animations";

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
      className="space-y-6"
      initial="hidden"
      whileInView="visible"
      viewport={viewportOptions}
      variants={cardVariant}
    >
      {/* Image */}
      <div className="w-full h-80 overflow-hidden bg-[#e8ded4]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="space-y-3">
        {/* Date */}
        <p className="text-sm text-[#5A6450]">
          {new Date(date).toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}
        </p>

        {/* Title */}
        <h3 className="text-2xl md:text-3xl font-semibold text-[#2F3B1F] leading-tight hover:text-[#5A6450] transition-colors">
          {title}
        </h3>

        {/* Read More Link */}
        <a
          href={`/blog/${slug}`}
          className="inline-flex items-center gap-2 text-base text-[#2F3B1F] font-medium hover:gap-3 transition-all duration-300 group"
        >
          <span className="border-b border-[#2F3B1F]">Read More</span>
          <span className="text-lg group-hover:translate-x-1 transition-transform">→</span>
        </a>
      </div>
    </motion.article>
  );
}
