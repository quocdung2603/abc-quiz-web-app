import React from "react";
import {
  UserAddOutlined,
  SearchOutlined,
  TrophyOutlined,
} from "@ant-design/icons";

const HowToUseQuiz: React.FC = () => {
  return (
    <div className="bg-white py-16 px-5">
      <div className="max-w-5xl mx-auto text-center">
        {/* Tiêu đề và mô tả */}
        <h2 className="text-3xl md:text-4xl font-bold text-black">
          Cách sử dụng Quiz
        </h2>
        <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
          Nếu đây là lần đầu truy cập, đừng bối rối! ABCquiz cực kỳ đơn giản và
          dễ sử dụng chỉ với vài thao tác
        </p>

        {/* Các mục */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Mục 1: Tạo tài khoản & Đăng nhập */}
          <div className="flex flex-col items-center">
            <div className="bg-yellow-100 rounded-full p-4 mb-4">
              <UserAddOutlined className="text-yellow-500 text-3xl" />
            </div>
            <h3 className="text-xl font-semibold text-black">
              Tạo tài khoản & Đăng nhập
            </h3>
            <p className="mt-2 text-gray-500 text-center">
              Bạn có thể truy tạo riêng cho mình một tài khoản mới, hoặc liên
              kết tài khoản Google để tham gia tại Howkteam.com
            </p>
          </div>

          {/* Mục 2: Tìm kiếm đề / Thi nhanh */}
          <div className="flex flex-col items-center">
            <div className="bg-yellow-100 rounded-full p-4 mb-4">
              <SearchOutlined className="text-yellow-500 text-3xl" />
            </div>
            <h3 className="text-xl font-semibold text-black">
              Tìm kiếm đề / Thi nhanh
            </h3>
            <p className="mt-2 text-gray-500 text-center">
              Quiz cung cấp cho bạn một ngân hàng đề trắc nghiệm đồ sộ mà bạn có
              thể nhánh chóng thử sức với bất kỳ đề nào hướng thú
            </p>
          </div>

          {/* Mục 3: Thử thách bạn thân */}
          <div className="flex flex-col items-center">
            <div className="bg-yellow-100 rounded-full p-4 mb-4">
              <TrophyOutlined className="text-yellow-500 text-3xl" />
            </div>
            <h3 className="text-xl font-semibold text-black">
              Thử thách bạn thân
            </h3>
            <p className="mt-2 text-gray-500 text-center">
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
