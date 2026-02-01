"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Determine if scrolled past threshold for background
      setIsScrolled(currentScrollY > 50);
      
      // Show/hide navbar based on scroll direction
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        // Scrolling up or near top
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past threshold
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${
        isScrolled ? "bg-[#FBF6EE]/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-20 lg:px-24 py-6 md:py-8">
        <div className="flex items-center justify-between">
          {/* Brand - Left Aligned */}
          <div className="text-[#2E4A2F]">
            <span className="text-lg md:text-xl font-medium tracking-wide">Lilac Template</span>
          </div>
          
          {/* Navigation - Right Aligned */}
          <nav className="flex items-center gap-6 md:gap-10">
            {links.map((link) => (
              <a 
                key={link.href} 
                href={link.href} 
                className="text-sm md:text-base text-[#2E4A2F] hover:opacity-70 transition-opacity duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
