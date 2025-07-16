import React from "react";
import { Link } from "react-router-dom";

interface LatestNewsProps {
  title: string;
  author: string;
  date: string;
  content: string;
  image?: string;
}

const BlogLatest: React.FC<LatestNewsProps> = ({
  title,
  author,
  date,
  content,
  image = "https://picsum.photos/200/300?random=1",
}) => {
  return (
    <div className="w-full animate-fade-in">
      {/* Tiêu đề "Tin tức mới nhất" */}
      <h2 className="text-heading-2 font-bold text-primary mb-6">
        Tin tức mới nhất
      </h2>
      {/* Nội dung chính */}
      <div className="flex flex-col md:flex-row items-center gap-8 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl shadow-lg p-8 border border-accent">
        {/* Hình ảnh bên trái */}
        <div className="md:w-1/2">
          <img
            src={image}
            alt="Latest news illustration"
            className="w-full h-80 md:h-96 rounded-xl object-cover shadow-md"
          />
        </div>
        {/* Nội dung bên phải */}
        <div className="md:w-1/2 flex flex-col gap-4">
          <h2 className="text-2xl md:text-3xl font-bold text-accent mb-2 line-clamp-2">
            {title}
          </h2>
          <div className="flex items-center gap-3 text-gray-600">
            <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-white font-bold text-lg shadow-md border-2 border-white">
              {author[0]}
            </div>
            <span className="text-lg font-semibold text-primary">{author}</span>
            <span className="text-lg text-gray-400">{date}</span>
          </div>
          <p className="text-gray-700 text-lg line-clamp-4">{content}</p>
          <Link
            to=""
            className="mt-2 inline-block text-white bg-gradient-to-r from-primary to-accent px-6 py-2 rounded-full font-bold shadow hover:from-accent hover:to-primary transition-all duration-200 text-center"
          >
            Xem thêm
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogLatest;
