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
    <div className="bg-white py-20 px-5 animate-fade-in">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Hình ảnh minh họa */}
        <div className="md:w-1/2 mb-8 md:mb-0 animate-fade-in-up">
          <img
            src="https://picsum.photos/600/400?random=10"
            alt="Nhóm bạn học tập"
            className="w-full h-auto rounded-2xl shadow-neon border-4 border-accent"
          />
        </div>
        {/* Nội dung */}
        <div className="md:w-1/2 md:pl-8 flex flex-col gap-8 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary leading-tight drop-shadow-neon">
            Luyện tập bạn thân qua các bài tập trắc nghiệm hữu ích
          </h2>
          <p className="text-lg text-gray-500">
            Với mỗi cuộc đua, bạn hoàn toàn có thể đề đang tham gia một đề thi
            ngẫu nhiên từ Quiz, học thử thách bạn thân với các đề thi để kiểm.
            Bạn còn chờ gì mà bắt đầu ngay!
          </p>
          {/* Danh sách lợi ích */}
          <ul className="space-y-4">
            <li className="flex items-start">
              <CheckCircleOutlined className="text-accent text-2xl mr-3 mt-1" />
              <span className="text-gray-700 text-base font-semibold">
                Ngân hàng câu hỏi trắc nghiệm lập trình đồ sộ
              </span>
            </li>
            <li className="flex items-start">
              <CheckCircleOutlined className="text-accent text-2xl mr-3 mt-1" />
              <span className="text-gray-700 text-base font-semibold">
                Đề đang tham gia thi và nhập kết quả ngay sau khi nộp bài
              </span>
            </li>
            <li className="flex items-start">
              <CheckCircleOutlined className="text-accent text-2xl mr-3 mt-1" />
              <span className="text-gray-700 text-base font-semibold">
                Giải thích đáp án với mỗi lựa chọn, giúp bạn hiểu sâu hơn.
              </span>
            </li>
          </ul>
          {/* Nút Thử ngay */}
          <button className="mt-4 bg-gradient-to-r from-primary to-accent text-white font-bold px-8 py-3 rounded-xl shadow-neon text-lg hover:from-accent hover:to-primary transition-all duration-200">
            Thử ngay
          </button>
        </div>
      </div>
    </div>
  );
};

export default PracticeWithFriends;
