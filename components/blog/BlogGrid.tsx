"use client";

import BlogCard from "./BlogCard";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  date: string;
  image: string;
}

interface BlogGridProps {
  posts: BlogPost[];
}

// Sample blog posts data
export const sampleBlogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Finding Calm in a Chaotic World: Practical Mindfulness Techniques",
    slug: "mindfulness-techniques",
    date: "2025-01-28",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80",
  },
  {
    id: "2",
    title: "The Power of Self-Compassion: Treating Yourself Like a Friend",
    slug: "self-compassion",
    date: "2025-01-22",
    image: "https://images.unsplash.com/photo-1512485374519-92d1de0b42a5?w=800&q=80",
  },
  {
    id: "3",
    title: "Understanding Anxiety: What's Happening in Your Body and Brain",
    slug: "anxiety-understanding",
    date: "2025-01-15",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80",
  },
  {
    id: "4",
    title: "Building Stronger Relationships: Communication Skills That Work",
    slug: "communication-skills",
    date: "2025-01-08",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
  },
  {
    id: "5",
    title: "Navigating Life Transitions: How Therapy Can Help You Adapt",
    slug: "life-transitions",
    date: "2025-01-01",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80",
  },
  {
    id: "6",
    title: "Breaking the Cycle: Understanding and Overcoming Burnout",
    slug: "overcoming-burnout",
    date: "2024-12-25",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
  },
];

export default function BlogGrid({ posts }: BlogGridProps) {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-[1280px] mx-auto px-6 md:px-20 lg:px-24">
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20">
          {posts.map((post, index) => (
            <BlogCard
              key={post.id}
              image={post.image}
              date={post.date}
              title={post.title}
              slug={post.slug}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
