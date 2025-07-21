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
    <div className="bg-white py-20 px-5 animate-fade-in">
      <div className="max-w-7xl mx-auto text-center">
        {/* Tiêu đề và mô tả */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4 drop-shadow-neon">
          Đề thi nổi bật
        </h2>
        <p className="mt-2 text-lg text-gray-500 max-w-2xl mx-auto">
          Những đề thi nổi bật nhận Quiz 24h
        </p>
        {/* Danh sách đề thi */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {quizData.map((item, index) => (
            <div
              key={index}
              className="p-8 bg-white rounded-2xl shadow-neon border-2 border-accent hover:shadow-lg hover:scale-105 transition-all duration-300 flex flex-col items-center gap-6 animate-fade-in-up"
            >
              <span className="bg-gradient-to-r from-primary to-accent text-white text-sm px-4 py-1 rounded-full font-bold shadow mb-2">
                {item.questions}
              </span>
              <img
                src={item.icon}
                alt={item.title}
                className="w-24 h-24 rounded-full border-4 border-accent shadow-md object-cover"
              />
              <h3 className="mt-2 text-lg font-bold text-primary text-center line-clamp-2">
                {item.title}
              </h3>
              <div className="mt-2 flex flex-wrap gap-2 justify-center">
                {item.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="bg-gray-100 text-accent text-xs px-3 py-1 rounded-full font-semibold shadow"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <button className="mt-4 bg-gradient-to-r from-primary to-accent text-white font-bold px-6 py-2 rounded-full shadow hover:from-accent hover:to-primary transition-all duration-200">
                Thi ngay &gt;&gt;
              </button>
            </div>
          ))}
        </div>
        {/* Nút Xem thêm */}
        <button className="mt-12 bg-gradient-to-r from-yellow-400 to-accent text-white font-bold px-8 py-3 rounded-xl shadow-neon text-lg hover:from-accent hover:to-yellow-400 transition-all duration-200">
          Xem thêm
        </button>
      </div>
    </div>
  );
};

export default FeaturedQuizzes;
