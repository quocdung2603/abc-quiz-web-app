import React from "react";
import {
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
  FacebookOutlined,
  XOutlined,
  LinkedinOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-100 via-purple-50 to-pink-50 pt-10 pb-4 px-2 md:px-5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
        {/* Địa chỉ */}
        <div className="rounded-2xl bg-white/70 shadow p-4 flex flex-col gap-2">
          <h3 className="text-base md:text-lg font-semibold bg-gradient-to-r from-blue-400 to-pink-400 bg-clip-text text-transparent">
            Liên hệ
          </h3>
          <p className="flex items-center text-xs md:text-sm">
            <EnvironmentOutlined className="mr-2 text-blue-400" /> 123 Đường
            ABC, TP. Hồ Chí Minh, Việt Nam
          </p>
          <p className="flex items-center text-xs md:text-sm">
            <PhoneOutlined className="mr-2 text-blue-400" /> +84 123 456 789
          </p>
          <p className="flex items-center text-xs md:text-sm">
            <MailOutlined className="mr-2 text-blue-400" /> support@abcquiz.com
          </p>
          <div className="flex space-x-3 mt-2">
            <FacebookOutlined className="text-lg md:text-xl cursor-pointer text-blue-400 hover:text-pink-400 transition-all duration-200" />
            <XOutlined className="text-lg md:text-xl cursor-pointer text-blue-400 hover:text-pink-400 transition-all duration-200" />
            <LinkedinOutlined className="text-lg md:text-xl cursor-pointer text-blue-400 hover:text-pink-400 transition-all duration-200" />
            <YoutubeOutlined className="text-lg md:text-xl cursor-pointer text-blue-400 hover:text-pink-400 transition-all duration-200" />
          </div>
        </div>
        {/* Lĩnh vực học tập */}
        <div className="rounded-2xl bg-white/70 shadow p-4 flex flex-col gap-2">
          <h3 className="text-base md:text-lg font-semibold bg-gradient-to-r from-blue-400 to-pink-400 bg-clip-text text-transparent">
            Lĩnh vực học tập
          </h3>
          <ul className="mt-1 space-y-1">
            <li>
              <Link
                to="/linh-vuc/lap-trinh"
                className="text-blue-900 hover:font-bold hover:text-pink-400 transition-all duration-200 text-xs md:text-sm"
              >
                Lập trình
              </Link>
            </li>
            <li>
              <Link
                to="/linh-vuc/khoa-hoc"
                className="text-blue-900 hover:font-bold hover:text-pink-400 transition-all duration-200 text-xs md:text-sm"
              >
                Khoa học
              </Link>
            </li>
            <li>
              <Link
                to="/linh-vuc/su-pham"
                className="text-blue-900 hover:font-bold hover:text-pink-400 transition-all duration-200 text-xs md:text-sm"
              >
                Sư phạm
              </Link>
            </li>
            <li>
              <Link
                to="/linh-vuc/kinh-te"
                className="text-blue-900 hover:font-bold hover:text-pink-400 transition-all duration-200 text-xs md:text-sm"
              >
                Kinh tế
              </Link>
            </li>
          </ul>
        </div>
        {/* Liên kết khác */}
        <div className="rounded-2xl bg-white/70 shadow p-4 flex flex-col gap-2">
          <h3 className="text-base md:text-lg font-semibold bg-gradient-to-r from-blue-400 to-pink-400 bg-clip-text text-transparent">
            Hỗ trợ
          </h3>
          <ul className="mt-1 space-y-1">
            <li>
              <Link
                to="/huong-dan"
                className="text-blue-900 hover:font-bold hover:text-pink-400 transition-all duration-200 text-xs md:text-sm"
              >
                Hướng dẫn sử dụng
              </Link>
            </li>
            <li>
              <Link
                to="/chinh-sach"
                className="text-blue-900 hover:font-bold hover:text-pink-400 transition-all duration-200 text-xs md:text-sm"
              >
                Chính sách và Điều khoản
              </Link>
            </li>
            <li>
              <Link
                to="/cau-hoi-thuong-gap"
                className="text-blue-900 hover:font-bold hover:text-pink-400 transition-all duration-200 text-xs md:text-sm"
              >
                Câu hỏi thường gặp
              </Link>
            </li>
            <li>
              <Link
                to="/lien-he"
                className="text-blue-900 hover:font-bold hover:text-pink-400 transition-all duration-200 text-xs md:text-sm"
              >
                Liên hệ hỗ trợ
              </Link>
            </li>
          </ul>
        </div>
        {/* Đăng ký nhận tin */}
        <div className="rounded-2xl bg-white/70 shadow p-4 flex flex-col gap-2">
          <h3 className="text-base md:text-lg font-semibold bg-gradient-to-r from-blue-400 to-pink-400 bg-clip-text text-transparent">
            Đăng ký nhận tin
          </h3>
          <p className="mt-1 text-gray-500 text-xs md:text-sm">
            Nhận thông báo về các bài thi và tài liệu học tập mới nhất.
          </p>
          <div className="flex mt-2">
            <input
              type="email"
              placeholder="Nhập email của bạn"
              className="p-2 flex-1 text-blue-900 rounded-l-full border border-blue-100 focus:outline-none text-xs md:text-sm bg-white/90"
            />
            <button className="bg-gradient-to-r from-pink-300 to-blue-300 text-white px-4 py-2 rounded-r-full text-xs md:text-sm font-semibold shadow hover:from-pink-400 hover:to-blue-400 transition-all duration-200">
              Đăng ký
            </button>
          </div>
        </div>
      </div>
      <p className="text-center text-gray-400 mt-8 text-xs md:text-sm">
        © 2025 ABC QUIZ. Mọi quyền được bảo lưu.
      </p>
    </footer>
  );
};

export default Footer;
