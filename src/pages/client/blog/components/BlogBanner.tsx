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
    <div className="relative w-full h-[500px] rounded-xl overflow-hidden shadow-md">
      {/* Background image */}
      <img src={imageUrl} alt={title} className="w-full h-full object-cover" />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-4">
        {/* Category Tag */}
        <div className="absolute top-3 left-3 bg-white text-xs text-gray-800 font-semibold px-2 py-1 rounded">
          {category}
        </div>

        {/* Title */}
        <h2 className="text-white text-3xl font-semibold mb-2">{title}</h2>

        {/* Author and date */}
        <div className="flex items-center space-x-4 text-sm text-white">
          {/* Avatar Text */}
          <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold text-xs">
            {avatarText}
          </div>
          <span className="font-semibold">{author}</span>
          <span>{date}</span>
        </div>
      </div>
    </div>
  );
};

export default BlogBanner;
