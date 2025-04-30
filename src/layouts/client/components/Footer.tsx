import React from 'react';
import {
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
  FacebookOutlined,
  XOutlined,
  LinkedinOutlined,
  YoutubeOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-10 px-5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Địa chỉ */}
        <div>
          <h3 className="text-lg font-semibold text-yellow-400">Liên hệ</h3>
          <p className="flex items-center mt-2">
            <EnvironmentOutlined className="mr-2 text-yellow-400" /> 123 Đường ABC, TP. Hồ Chí Minh, Việt Nam
          </p>
          <p className="flex items-center mt-2">
            <PhoneOutlined className="mr-2 text-yellow-400" /> +84 123 456 789
          </p>
          <p className="flex items-center mt-2">
            <MailOutlined className="mr-2 text-yellow-400" /> support@abcquiz.com
          </p>
          <div className="flex space-x-3 mt-4">
            <FacebookOutlined className="text-xl cursor-pointer text-white hover:text-yellow-400 transition-all duration-200" />
            <XOutlined className="text-xl cursor-pointer text-white hover:text-yellow-400 transition-all duration-200" />
            <LinkedinOutlined className="text-xl cursor-pointer text-white hover:text-yellow-400 transition-all duration-200" />
            <YoutubeOutlined className="text-xl cursor-pointer text-white hover:text-yellow-400 transition-all duration-200" />
          </div>
        </div>

        {/* Lĩnh vực học tập */}
        <div>
          <h3 className="text-lg font-semibold text-yellow-400">Lĩnh vực học tập</h3>
          <ul className="mt-2 space-y-2">
            <li>
              <Link to="/linh-vuc/lap-trinh" className="text-white hover:font-bold transition-all duration-200">
                Lập trình
              </Link>
            </li>
            <li>
              <Link to="/linh-vuc/khoa-hoc" className="text-white hover:font-bold transition-all duration-200">
                Khoa học
              </Link>
            </li>
            <li>
              <Link to="/linh-vuc/su-pham" className="text-white hover:font-bold transition-all duration-200">
                Sư phạm
              </Link>
            </li>
            <li>
              <Link to="/linh-vuc/kinh-te" className="text-white hover:font-bold transition-all duration-200">
                Kinh tế
              </Link>
            </li>
          </ul>
        </div>

        {/* Liên kết khác */}
        <div>
          <h3 className="text-lg font-semibold text-yellow-400">Hỗ trợ</h3>
          <ul className="mt-2 space-y-2">
            <li>
              <Link to="/huong-dan" className="text-white hover:font-bold transition-all duration-200">
                Hướng dẫn sử dụng
              </Link>
            </li>
            <li>
              <Link to="/chinh-sach" className="text-white hover:font-bold transition-all duration-200">
                Chính sách và Điều khoản
              </Link>
            </li>
            <li>
              <Link to="/cau-hoi-thuong-gap" className="text-white hover:font-bold transition-all duration-200">
                Câu hỏi thường gặp
              </Link>
            </li>
            <li>
              <Link to="/lien-he" className="text-white hover:font-bold transition-all duration-200">
                Liên hệ hỗ trợ
              </Link>
            </li>
          </ul>
        </div>

        {/* Đăng ký nhận tin */}
        <div>
          <h3 className="text-lg font-semibold text-yellow-400">Đăng ký nhận tin</h3>
          <p className="mt-2 text-gray-400">
            Nhận thông báo về các bài thi và tài liệu học tập mới nhất.
          </p>
          <div className="flex mt-4">
            <input
              type="email"
              placeholder="Nhập email của bạn"
              className="p-2 flex-1 text-black rounded-l"
            />
            <button className="bg-red-500 text-white px-4 py-2 rounded-r hover:bg-red-600 transition-all duration-200">
              Đăng ký
            </button>
          </div>
        </div>
      </div>
      <p className="text-center text-gray-400 mt-10">
        © 2025 ABC QUIZ. Mọi quyền được bảo lưu.
      </p>
    </footer>
  );
};

export default Footer;