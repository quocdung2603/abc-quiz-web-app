import React from "react";
import { CheckCircleOutlined } from "@ant-design/icons";

interface Friend {
  name: string;
  score: string;
}

const friendsData: Friend[] = [
  { name: "Trần Kim Long", score: "25/25" },
  { name: "Nguyễn Đoàn Ngọc Giàu", score: "24/25" },
  { name: "Như Guynh Fury", score: "20/25" },
];

const PracticeWithFriends: React.FC = () => {
  return (
    <div className="bg-white py-16 px-5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
        {/* Hình ảnh minh họa */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img
            src="https://picsum.photos/600/400?random=10"
            alt="Nhóm bạn học tập"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Nội dung */}
        <div className="md:w-1/2 md:pl-8">
          <h2 className="text-3xl md:text-4xl font-bold text-black leading-tight">
            Luyện tập bạn thân qua các bài tập trắc nghiệm hữu ích
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Với mỗi cuộc đua, bạn hoàn toàn có thể đề đang tham gia một đề thi
            ngẫu nhiên từ Quiz, học thử thách bạn thân với các đề thi để kiểm.
            Bạn còn chừng chờ mà bắt đầu ngay!
          </p>

          {/* Danh sách lợi ích */}
          <ul className="mt-6 space-y-3">
            <li className="flex items-start">
              <CheckCircleOutlined className="text-yellow-500 text-xl mr-2 mt-1" />
              <span className="text-gray-600">
                Ngân hàng câu hỏi trắc nghiệm lập trình đồ sộ
              </span>
            </li>
            <li className="flex items-start">
              <CheckCircleOutlined className="text-yellow-500 text-xl mr-2 mt-1" />
              <span className="text-gray-600">
                Đề đang tham gia thi và nhập kết quả ngay sau khi nộp bài
              </span>
            </li>
            <li className="flex items-start">
              <CheckCircleOutlined className="text-yellow-500 text-xl mr-2 mt-1" />
              <span className="text-gray-600">
                Giải thích đáp án với mỗi lựa chọn, giúp bạn hiểu sâu hơn.
              </span>
            </li>
          </ul>

          {/* Nút Thử ngay */}
          <button className="mt-6 bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg hover:bg-yellow-500 transition-all duration-200">
            Thử ngay
          </button>
        </div>
      </div>
    </div>
  );
};

export default PracticeWithFriends;
