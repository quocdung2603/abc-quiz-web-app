import React from "react";

interface QuizItem {
  questions: string;
  icon: string;
  title: string;
  tags: string[];
}

const quizData: QuizItem[] = [
  {
    questions: "20 câu hỏi",
    icon: "https://picsum.photos/40/40?random=1",
    title:
      "20 Bài Tập Kiểm Tra, Rèn Luyện JavaScript Phần 4 (Câu hỏi và hướng dẫn chi tiết)",
    tags: ["JavaScript", "340 người tham gia"],
  },
  {
    questions: "20 câu hỏi",
    icon: "https://picsum.photos/40/40?random=2",
    title: "20 Bài Tập Về ES6 Và JavaScript Hiện Đại Phần 2",
    tags: ["JavaScript", "108 người tham gia"],
  },
  {
    questions: "20 câu hỏi",
    icon: "https://picsum.photos/40/40?random=3",
    title: "20 Bài Tập Về DOM Trong JavaScript JS-DOM",
    tags: ["JavaScript", "30 người tham gia"],
  },
  {
    questions: "500 câu hỏi",
    icon: "https://picsum.photos/40/40?random=4",
    title: "Đề trắc nghiệm 500 Câu python thực hành",
    tags: ["Python", "P T L T"],
  },
  {
    questions: "500 câu hỏi",
    icon: "https://picsum.photos/40/40?random=5",
    title: "Đề trắc nghiệm 500 Câu C++ thực hành",
    tags: ["C++", "D T h a205"],
  },
  {
    questions: "20 câu hỏi",
    icon: "https://picsum.photos/40/40?random=6",
    title: "20 Bài Tập Về ES6 Và JavaScript Hiện Đại",
    tags: ["JavaScript", "n M Q aB2"],
  },
];

const FeaturedQuizzes: React.FC = () => {
  return (
    <div className="bg-white py-16 px-5">
      <div className="max-w-7xl mx-auto text-center">
        {/* Tiêu đề và mô tả */}
        <h2 className="text-3xl md:text-4xl font-bold text-black">
          Đề thi nổi bật
        </h2>
        <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
          Những đề thi nổi bật nhận Quiz 24h
        </p>

        {/* Danh sách đề thi */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {quizData.map((item, index) => (
            <div
              key={index + 0}
              className="p-6 bg-white rounded-lg shadow-lg hover:shadow-md transition-all duration-200"
            >
              <div className="flex flex-col items-center justify-between space-y-5">
                <span className="bg-yellow-200 text-black text-sm px-3 py-1 mr-auto">
                  {item.questions}
                </span>
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-32 h-32 rounded-full border-4 p-2"
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-black">
                {item.title}
              </h3>
              <div className="mt-2 flex flex-wrap gap-2">
                {item.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex + 0}
                    className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <button className="mt-4 text-yellow-400 font-semibold hover:text-yellow-600">
                Thi ngay &gt;&gt;
              </button>
            </div>
          ))}
        </div>

        {/* Nút Xem thêm */}
        <button className="mt-8 bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg hover:bg-yellow-500 transition-all duration-200">
          Xem thêm
        </button>
      </div>
    </div>
  );
};

export default FeaturedQuizzes;
