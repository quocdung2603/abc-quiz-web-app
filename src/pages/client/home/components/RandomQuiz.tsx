import React from "react";

interface QuizItem {
  icon: string;
  title: string;
  questions: string;
}

const quizData: QuizItem[] = [
  {
    icon: "https://picsum.photos/40/40?random=1",
    title: "C++",
    questions: "1,342 câu hỏi",
  },
  {
    icon: "https://picsum.photos/40/40?random=2",
    title: "Python",
    questions: "1,205 câu hỏi",
  },
  {
    icon: "https://picsum.photos/40/40?random=3",
    title: "C#",
    questions: "51 câu hỏi",
  },
  {
    icon: "https://picsum.photos/40/40?random=4",
    title: "Cấu trúc dữ liệu",
    questions: "233 câu hỏi",
  },
  {
    icon: "https://picsum.photos/40/40?random=5",
    title: "Toán tư",
    questions: "233 câu hỏi",
  },
  {
    icon: "https://picsum.photos/40/40?random=6",
    title: "Biến cái và đệ đi lặp",
    questions: "788 câu hỏi",
  },
  {
    icon: "https://picsum.photos/40/40?random=7",
    title: "Vong lặp",
    questions: "562 câu hỏi",
  },
  {
    icon: "https://picsum.photos/40/40?random=8",
    title: "Mảng",
    questions: "517 câu hỏi",
  },
  {
    icon: "https://picsum.photos/40/40?random=9",
    title: "Function",
    questions: "779 câu hỏi",
  },
];

const RandomQuiz: React.FC = () => {
  return (
    <div className="bg-white py-20 px-5 animate-fade-in">
      <div className="max-w-7xl mx-auto text-center">
        {/* Tiêu đề và mô tả */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4 drop-shadow-neon">
          Trắc nghiệm ngẫu nhiên
        </h2>
        <p className="mt-2 text-lg text-gray-500 max-w-2xl mx-auto">
          Đề thi được tạo ngẫu nhiên từ kho bài hội theo danh mục bạn lựa chọn
        </p>
        {/* Danh sách đề thi */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {quizData.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-6 bg-white rounded-2xl shadow-neon border-2 border-accent hover:shadow-lg hover:scale-105 transition-all duration-300 animate-fade-in-up"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-14 h-14 rounded-full border-4 border-accent shadow-md object-cover"
                />
                <div className="text-left">
                  <h3 className="text-lg font-bold text-primary line-clamp-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-accent font-semibold">
                    {item.questions}
                  </p>
                </div>
              </div>
              <button className="bg-gradient-to-r from-primary to-accent text-white font-bold px-6 py-2 rounded-full shadow hover:from-accent hover:to-primary transition-all duration-200">
                Bắt đầu
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RandomQuiz;
