import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BlogHero from "@/components/sections/BlogHero";
import BlogGrid, { sampleBlogPosts } from "@/components/blog/BlogGrid";
import SubscribeSection from "@/components/blog/SubscribeSection";

export default function BlogPage() {
  return (
    <div className="bg-[#FAF8F5] text-neutral-900">
      <Navbar />
      
      <main>
        <BlogHero />
        <BlogGrid posts={sampleBlogPosts} />
        <SubscribeSection />
      </main>
      <Footer />
    </div>
  );
}
