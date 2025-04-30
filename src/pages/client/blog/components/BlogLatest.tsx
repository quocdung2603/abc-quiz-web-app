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
    <div className="w-full ">
      {/* Tiêu đề "Tin tức mới nhất" */}
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Tin tức mới nhất
      </h2>

      {/* Nội dung chính */}
      <div className="flex flex-row items-center space-x-5 bg-gray-400 rounded-lg">
        {/* Hình ảnh bên trái */}
        <div className="md:w-1/2">
          <img
            src={image}
            alt="Latest news illustration"
            className="w-full h-96 rounded-lg"
          />
        </div>

        {/* Nội dung bên phải */}
        <div className="md:w-1/2">
          <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
          <div className="mt-2 flex items-center space-x-2">
            <div className="w-6 h-6 rounded-full bg-gray-300" />{" "}
            {/* Hình đại diện giả lập */}
            <span className="text-gray-600 text-lg">{author}</span>
            <span className="text-gray-600 text-lg">{date}</span>
          </div>
          <p className="mt-2 text-gray-600 text-lg">{content}</p>
          <Link
            to=""
            className="mt-2 inline-block text-blue-500 hover:underline"
          >
            Xem thêm
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogLatest;
