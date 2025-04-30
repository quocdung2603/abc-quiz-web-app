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
    <div className="relative bg-white rounded-lg shadow-sm overflow-hidden group border">
      {/* Phần trên (hình ảnh) */}
      <div className="h-[500px] relative">
        <img
          src={image}
          alt="Blog banner"
          className="w-full h-full object-cover rounded-t-lg"
        />
      </div>

      {/* Phần dưới (nội dung, trượt lên khi hover) */}
      <div className="absolute top-1/2 inset-0 bg-white p-6 transform translate-y-0 group-hover:-translate-y-10 transition-transform duration-300 ease-in-out">
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
        <p className="mt-2 text-gray-600">{content}</p>
        <div className="mt-2 flex items-center space-x-2">
          <span className="text-yellow-500">V</span>
          <span className="text-yellow-500">{author}</span>
          <span className="text-gray-600">{date}</span>
          <span className="text-gray-600">💬 {comments} bình luận</span>
        </div>

        {/* Hiển thị khi hover */}
        <div className="mt-6 w-full bg-orange-400 p-2 rounded">
          <Link
            to=""
            className="text-blue-500 hover:underline text-center text-white"
          >
            <p>Xem thêm →</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
