import React from "react";

type BlogBannerProps = {
  title: string;
  author: string;
  date: string;
  category: string;
  avatarText: string;
  imageUrl: string;
};

const BlogBanner: React.FC<BlogBannerProps> = ({
  title,
  author,
  date,
  category,
  avatarText,
  imageUrl,
}) => {
  return (
    <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-neon border-4 border-accent animate-fade-in group">
      {/* Background image */}
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-500"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-8">
        {/* Category Tag */}
        <div className="absolute top-5 left-5 bg-gradient-to-r from-primary to-accent text-xs text-white font-bold px-4 py-2 rounded-full shadow-neon uppercase tracking-wider">
          {category}
        </div>
        {/* Title */}
        <h2 className="text-white text-3xl md:text-4xl font-bold mb-4 drop-shadow-neon max-w-2xl animate-fade-in-up">
          {title}
        </h2>
        {/* Author and date */}
        <div className="flex items-center space-x-4 text-sm text-white animate-fade-in-up">
          {/* Avatar Text */}
          <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-white font-bold text-lg shadow-md border-2 border-white">
            {avatarText}
          </div>
          <span className="font-semibold text-lg">{author}</span>
          <span className="text-gray-200">{date}</span>
        </div>
      </div>
    </div>
  );
};

export default BlogBanner;
