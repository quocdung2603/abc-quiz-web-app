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
    <div className="bg-white py-16 px-5">
      <div className="max-w-7xl mx-auto text-center">
        {/* Tiêu đề và mô tả */}
        <h2 className="text-3xl md:text-4xl font-bold text-black">
          Trắc nghiệm ngẫu nhiên
        </h2>
        <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
          Đề thi được tạo ngẫu nhiên từ kho bài hội theo danh mục bạn lựa chọn
        </p>

        {/* Danh sách đề thi */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6">
          {quizData.map((item, index) => (
            <div
              key={index + 0}
              className="flex items-center justify-between p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-all duration-200"
            >
              <div className="flex items-center">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-10 h-10 mr-4"
                />
                <div className="text-left">
                  <h3 className="text-base font-semibold text-black">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500">{item.questions}</p>
                </div>
              </div>
              <button className="bg-yellow-400 text-black font-semibold px-4 py-2 rounded-lg hover:bg-yellow-500 transition-all duration-200">
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
