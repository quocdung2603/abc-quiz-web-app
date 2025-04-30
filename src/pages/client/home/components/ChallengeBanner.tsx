import React from "react";

const ChallengeBanner: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-tr from-black to-gray-900 py-16 px-5 overflow-hidden">
      {/* Hiệu ứng particles đơn giản */}
      <div className="absolute inset-0 particles">
        <span className="particle"></span>
        <span className="particle"></span>
        <span className="particle"></span>
        <span className="particle"></span>
        <span className="particle"></span>
        <span className="particle"></span>
        <span className="particle"></span>
        <span className="particle"></span>
        <span className="particle"></span>
        <span className="particle"></span>
      </div>

      {/* Nội dung chính */}
      <div className="relative max-w-5xl mx-auto text-center text-white">
        <h1 className="text-3xl md:text-4xl font-bold leading-tight">
          Bắt đầu thử thách với trắc nghiệm từ ABCQuiz!
        </h1>
        <p className="mt-4 text-sm md:text-base text-gray-300 max-w-3xl mx-auto">
          Khởi động một chuỗi ngày luyện tập, bằng việc chọn đề phù hợp nhất với
          bạn hay chọn ngẫu nhiên để khám phá các ngành học lập trình, khoa học,
          sư phạm, kinh tế.
        </p>
        <p className="mt-2 text-sm md:text-base text-gray-300 max-w-3xl mx-auto">
          Bừng quên, với mỗi bài học bạn sẽ được giải thích chi tiết và tùy từng
          lý do để chọn ra đáp án chính xác nhất.
        </p>
        <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4 mt-8">
          <button className="bg-white text-black font-semibold px-6 py-3 rounded-lg hover:bg-gray-200 transition-all duration-200">
            THI THEO ĐỀ
          </button>
          <button className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg hover:bg-yellow-500 transition-all duration-200">
            THI NGẪU NHIÊN
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChallengeBanner;
