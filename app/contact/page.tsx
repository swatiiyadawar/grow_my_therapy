import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactContent from "@/components/sections/ContactContent";

export default function ContactPage() {
  return (
    <div className="bg-[#E5DED4] text-neutral-900">
      <Navbar />

      <main>
        <ContactContent />
      </main>

      <Footer />
    </div>
  );
}
