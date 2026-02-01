import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactContent from "@/components/sections/ContactContent";

export default function ContactPage() {
  return (
    <div className="bg-[#D6D3DC] text-neutral-900">
      <Navbar />

      <main>
        <ContactContent />
      </main>

      <Footer />
    </div>
  );
}
