import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthRouterLink, ClientRouterLink } from "../../../utils/RouterLink";

const menuItems = [
  { key: "1", label: "Luyện tập", path: `${ClientRouterLink.Practice}` },
  { key: "2", label: "Đề thi", path: `${ClientRouterLink.Exam}` },
  { key: "3", label: "Kết quả thi", path: "/ket-qua-thi" },
  { key: "4", label: "Bảng xếp hạng", path: "/bang-xep-hang" },
  { key: "5", label: "Bài viết", path: "/bai-viet" },
  { key: "6", label: "Về ABC Company", path: "/ve-abc-company" },
];

const Header: React.FC = () => {
  const location = useLocation();
  const navigation = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);

  // Lắng nghe sự kiện scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        // Khi scroll xuống hơn 50px
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll); // Dọn dẹp sự kiện khi component unmount
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-black flex items-center justify-between px-10 py-3 transition-all duration-300 ${
        isScrolled ? "bg-opacity-100" : "bg-opacity-50"
      }`}
    >
      {/* Logo */}
      <div>
        <button className="flex items-center flex-row">
          <span className="text-red-500 text-3xl font-bold">ABC</span>
          <span className="text-yellow-400 text-2xl font-semibold">QUIZ</span>
        </button>
      </div>

      {/* Menu chính */}
      <div>
        <nav className="flex-1 flex items-center justify-center space-x-6">
          {menuItems.map((item) => (
            <Link
              key={item.key}
              to={item.path}
              className={`text-white hover:font-bold transition-all duration-200 ${
                location.pathname === item.path ? "font-bold underline" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Nút đăng nhập và thi nhanh */}
      <div className="flex items-center space-x-2">
        <button
          onClick={() => navigation(`/auth/${AuthRouterLink.Login}`)}
          className="bg-white font-semibold text-yellow-500 p-1 rounded hover:bg-yellow-600 hover:text-white transition-all duration-200"
        >
          Đăng nhập/Đăng ký
        </button>
        <button className="bg-yellow-500 font-semibold text-white p-1 rounded hover:bg-yellow-600 hover:text-white transition-all duration-200">
          Thi nhanh
        </button>
      </div>
    </header>
  );
};

export default Header;
