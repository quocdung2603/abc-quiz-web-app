import React from "react";

const ChallengeBanner: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-tr from-primary to-accent py-20 px-5 overflow-hidden animate-fade-in">
      {/* Hiệu ứng particles */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {[...Array(12)].map((_, i) => (
          <span
            key={i}
            className={`particle particle-${i} bg-white/30 rounded-full absolute animate-pulse`}
          />
        ))}
      </div>
      {/* Nội dung chính */}
      <div className="relative max-w-5xl mx-auto text-center text-white z-10 animate-fade-in-up">
        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight drop-shadow-neon">
          Bắt đầu thử thách với trắc nghiệm từ ABCQuiz!
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
          Khởi động một chuỗi ngày luyện tập, bằng việc chọn đề phù hợp nhất với
          bạn hay chọn ngẫu nhiên để khám phá các ngành học lập trình, khoa học,
          sư phạm, kinh tế.
        </p>
        <p className="mt-2 text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
          Bừng quên, với mỗi bài học bạn sẽ được giải thích chi tiết và tùy từng
          lý do để chọn ra đáp án chính xác nhất.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-6 mt-10">
          <button className="bg-white text-primary font-bold px-8 py-4 rounded-xl shadow-neon text-lg hover:bg-gray-200 transition-all duration-200">
            THI THEO ĐỀ
          </button>
          <button className="bg-gradient-to-r from-yellow-400 to-accent text-white font-bold px-8 py-4 rounded-xl shadow-neon text-lg hover:from-accent hover:to-yellow-400 transition-all duration-200">
            THI NGẪU NHIÊN
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChallengeBanner;
