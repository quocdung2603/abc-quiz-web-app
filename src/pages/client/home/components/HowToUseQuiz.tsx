import React from "react";
import {
  UserAddOutlined,
  SearchOutlined,
  TrophyOutlined,
} from "@ant-design/icons";

const HowToUseQuiz: React.FC = () => {
  return (
    <div className="bg-white py-20 px-5 animate-fade-in">
      <div className="max-w-5xl mx-auto text-center">
        {/* Tiêu đề và mô tả */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4 drop-shadow-neon">
          Cách sử dụng Quiz
        </h2>
        <p className="mt-2 text-lg text-gray-500 max-w-2xl mx-auto">
          Nếu đây là lần đầu truy cập, đừng bối rối! ABCquiz cực kỳ đơn giản và
          dễ sử dụng chỉ với vài thao tác
        </p>
        {/* Các mục */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Mục 1: Tạo tài khoản & Đăng nhập */}
          <div className="flex flex-col items-center bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl shadow-lg p-8 gap-4 animate-fade-in-up">
            <div className="bg-yellow-100 rounded-full p-6 mb-2 shadow-neon">
              <UserAddOutlined className="text-yellow-500 text-4xl" />
            </div>
            <h3 className="text-xl font-bold text-primary">
              Tạo tài khoản & Đăng nhập
            </h3>
            <p className="text-gray-600 text-center">
              Bạn có thể truy tạo riêng cho mình một tài khoản mới, hoặc liên
              kết tài khoản Google để tham gia tại Howkteam.com
            </p>
          </div>
          {/* Mục 2: Tìm kiếm đề / Thi nhanh */}
          <div className="flex flex-col items-center bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl shadow-lg p-8 gap-4 animate-fade-in-up">
            <div className="bg-yellow-100 rounded-full p-6 mb-2 shadow-neon">
              <SearchOutlined className="text-yellow-500 text-4xl" />
            </div>
            <h3 className="text-xl font-bold text-primary">
              Tìm kiếm đề / Thi nhanh
            </h3>
            <p className="text-gray-600 text-center">
              Quiz cung cấp cho bạn một ngân hàng đề trắc nghiệm đồ sộ mà bạn có
              thể nhanh chóng thử sức với bất kỳ đề nào hứng thú
            </p>
          </div>
          {/* Mục 3: Thử thách bạn thân */}
          <div className="flex flex-col items-center bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl shadow-lg p-8 gap-4 animate-fade-in-up">
            <div className="bg-yellow-100 rounded-full p-6 mb-2 shadow-neon">
              <TrophyOutlined className="text-yellow-500 text-4xl" />
            </div>
            <h3 className="text-xl font-bold text-primary">
              Thử thách bạn thân
            </h3>
            <p className="text-gray-600 text-center">
              Thử sức cùng bạn bè, cộng đồng là cách cực kỳ hữu hiệu để nâng cao
              skills của bạn ngành hôm nay.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToUseQuiz;
