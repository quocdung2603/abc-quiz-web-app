import React from "react";
import { Link } from "react-router-dom";

interface BlogItemProps {
  title: string;
  content: string;
  author: string;
  date: string;
  comments: number;
  image?: string; // Hình ảnh cho phần trên
}

const BlogItem: React.FC<BlogItemProps> = ({
  title,
  content,
  author,
  date,
  comments,
  image = "https://picsum.photos/200/300?random=1",
}) => {
  return (
    <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden group border border-accent hover:shadow-neon transition-shadow duration-300 animate-fade-in">
      {/* Hình ảnh */}
      <div className="h-64 md:h-80 relative overflow-hidden">
        <img
          src={image}
          alt="Blog banner"
          className="w-full h-full object-cover rounded-t-2xl group-hover:scale-105 transition-transform duration-500"
        />
        <span className="absolute top-4 left-4 bg-gradient-to-r from-primary to-accent text-xs text-white font-bold px-3 py-1 rounded-full shadow-neon uppercase tracking-wider">
          BLOG
        </span>
      </div>
      {/* Nội dung */}
      <div className="p-6 flex flex-col gap-3 animate-fade-in-up">
        <h2 className="text-xl font-bold text-primary group-hover:text-accent transition-colors duration-200 line-clamp-2">
          {title}
        </h2>
        <p className="text-gray-600 text-base line-clamp-3">{content}</p>
        <div className="flex items-center gap-3 text-sm text-gray-500 mt-2">
          <span className="font-semibold text-accent">{author}</span>
          <span className="text-gray-400">• {date}</span>
          <span className="text-gray-400">💬 {comments} bình luận</span>
        </div>
        <Link
          to=""
          className="mt-4 inline-block text-white bg-gradient-to-r from-primary to-accent px-5 py-2 rounded-full font-semibold shadow hover:from-accent hover:to-primary transition-all duration-200 text-center"
        >
          Xem thêm →
        </Link>
      </div>
    </div>
  );
};

export default BlogItem;
