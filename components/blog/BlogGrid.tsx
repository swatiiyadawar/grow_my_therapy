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
    title: "Blog Post One",
    slug: "blog-post-one",
    date: "2019-03-11",
    image: "./images/about.jpg",
  },
  {
    id: "2",
    title: "Blog Post Two",
    slug: "blog-post-two",
    date: "2019-03-11",
    image: "./images/office.jpg",
  },
  {
    id: "3",
    title: "Blog Post Three",
    slug: "blog-post-three",
    date: "2019-03-11",
    image: "./images/white.jpeg",
  },
  {
    id: "4",
    title: "Blog Post Four",
    slug: "blog-post-four",
    date: "2019-03-11",
    image: "./images/social.jpg",
  },
];

export default function BlogGrid({ posts }: BlogGridProps) {
  return (
    <section id="blog-posts" className="bg-[#FAF8F5] py-20 md:py-28">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        {/* Grid - 2 columns with large gap */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-x-16 md:gap-y-20">
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
