import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Specialties from "../components/sections/Specialties";
import Services from "../components/sections/Services";
import Office from "../components/sections/Office";

import Showcase from "@/components/sections/Showcase";
import FAQSection from "@/components/sections/FAQSection";
import Professional from "@/components/sections/Professional";
import BlogHero from "@/components/sections/BlogHero";


export default function Home() {
  return (
    <div className="bg-white text-neutral-900">
      <Navbar />
      <BlogHero/>

      <main>
        <Hero />
        <About />
        <Specialties />
        <Office />
        <Showcase />
        <FAQSection />
        <Professional />
      
      </main>
      <Footer />
    </div>
  );
}
