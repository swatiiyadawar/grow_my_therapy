"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      setIsScrolled(currentScrollY > 50);
      
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Close mobile menu when link is clicked
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${
        isScrolled ? "bg-[#FAF8F5]/95 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-6 md:py-8">
        <div className="flex items-center justify-between">
          
          {/* Brand - Always visible */}
          <a 
            href="/" 
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-wide text-[#1F4E5F]"
            style={{ fontFamily: "var(--font-cormorant)", fontWeight: 700 }}
          >
            Dr. Maya Reynolds
          </a>
          
          {/* DESKTOP NAVIGATION (lg and above) */}
          <nav className="hidden lg:flex items-center gap-12">
            {links.map((link) => (
              <a 
                key={link.href} 
                href={link.href} 
                className="text-lg lg:text-xl text-[#1F4E5F] hover:text-[#7A9E8E] transition-colors duration-200"
                style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600 }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* MOBILE HAMBURGER BUTTON (below lg) */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden flex flex-col gap-1.5 focus:outline-none"
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-[#1F4E5F] transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
            <span className={`block w-6 h-0.5 bg-[#1F4E5F] transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`}></span>
            <span className={`block w-6 h-0.5 bg-[#1F4E5F] transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
          </button>
        </div>
      </div>

      {/* MOBILE OVERLAY MENU (below lg) - Never renders on desktop */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="lg:hidden fixed inset-0 bg-[#FAF8F5] flex flex-col items-center justify-center z-50 w-screen h-screen overflow-hidden"
          >
            {/* Close Button - Top Left */}
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-6 left-6 focus:outline-none"
              aria-label="Close menu"
            >
              <span className="text-2xl text-[#1F4E5F]">✕</span>
            </button>

            {/* Title - Top Center */}
            <div className="absolute top-6 left-1/2 transform -translate-x-1/2">
              <p 
                className="text-2xl text-[#1F4E5F]"
                style={{ fontFamily: "var(--font-cormorant)", fontWeight: 700 }}
              >
                Dr. Maya Reynolds
              </p>
            </div>

            {/* Links - Centered */}
            <nav className="flex flex-col items-center gap-12">
              {links.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="text-4xl text-[#1F4E5F] hover:text-[#7A9E8E] transition-colors duration-200"
                  style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
