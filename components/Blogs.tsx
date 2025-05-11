import React from 'react';
import blog1 from '../public/Rectangle 1.png';
import blog2 from '../public/Rectangle 1 (1).png';
import blog3 from '../public/Rectangle 1 (2).png';

type BlogPost = {
  title: string;
  excerpt: string;
  image: string;
  author: string;
  role: string;
  date: string;
  authorImage: string;
};

const blogPosts: BlogPost[] = [
  {
    title: "Organize your digital assets with a new methodology here.",
    excerpt: "Podcasting operational management inside of workflows to establish a framework seamless. Convergence collaboratively.",
    image: blog1.src,
    author: "Andrew Miller",
    role: "CEO Company",
    date: "25 Apr",
    authorImage: "https://i.pravatar.cc/40?img=1",
  },
  {
    title: "Organize your digital assets with a new methodology here.",
    excerpt: "Keeping your eye while performing a deep dive on the start-up mentality to derive convergence collaboratively.",
    image: blog2.src,
    author: "David Munsan",
    role: "UX",
    date: "25 Apr",
    authorImage: "https://i.pravatar.cc/40?img=7",
  },
  {
    title: "Organize your digital assets with a new methodology here.",
    excerpt: "Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C.",
    image: blog3.src,
    author: "Andrew Meller",
    role: "UI",
    date: "25 Apr",
    authorImage: "https://i.pravatar.cc/40?img=3",
  },
];

const Blogs = () => {
  return (
      
     <div className="bg-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading & Subheading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-[#272D37] mb-4">Latest Blog Posts</h2>
          <p className="text-[#5F6D7E]">
            Completely synergize resource taxing relationships via premier niche markets.
            Professionally cultivate one-to-one customer service with robust ideas.
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogCard key={index} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

type BlogCardProps = {
  post: BlogPost;
};

const BlogCard: React.FC<BlogCardProps> = ({ post }) => (
  <div className="overflow-hidden">
    <img src={post.image} alt={post.title} className="w-full h-72 rounded-lg object-cover" />
    <div className="p-5">
      <h3 className="text-xl font-semibold text-[#272D37] mb-2">{post.title}</h3>
      <p className="text-[#5F6D7E] mb-4">{post.excerpt}</p>

      {/* Author & Date Section */}
      <div className="flex justify-between items-center text-sm">
        <div className="flex items-center gap-3">
          <img
            src={post.authorImage}
            alt={post.author}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <p className="font-semibold text-[#272D37]">{post.author}</p>
            <p className="text-[#5F6D7E]">{post.role}</p>
          </div>
        </div>
        <p className="text-[#5F6D7E] whitespace-nowrap">{post.date}</p>
      </div>
    </div>
  </div>
);

export default Blogs;
