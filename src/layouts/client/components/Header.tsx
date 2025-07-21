import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthRouterLink, ClientRouterLink } from "../../../utils/RouterLink";
import UserDropdown from "./UserDropdown";

const menuItems = [
  { key: "1", label: "Luyện tập", path: `${ClientRouterLink.Practice}` },
  { key: "2", label: "Đề thi", path: `${ClientRouterLink.Exam}` },
  { key: "3", label: "Kết quả thi", path: `${ClientRouterLink.Result}` },
  { key: "4", label: "Bảng xếp hạng", path: `${ClientRouterLink.Leaderboard}` },
  { key: "5", label: "Bài viết", path: `${ClientRouterLink.Blog}` },
  { key: "6", label: "Ôn phỏng vấn", path: `${ClientRouterLink.Interview}` },
  { key: "7", label: "Về ABC Company", path: "/ve-abc-company" },
];

const Header: React.FC = () => {
  const location = useLocation();
  const navigation = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 shadow-lg rounded-b-2xl mx-2 mt-2
        ${
          isScrolled
            ? "bg-gradient-to-r from-blue-200 via-purple-100 to-pink-100 bg-opacity-90"
            : "bg-gradient-to-r from-blue-100 via-purple-50 to-pink-50 bg-opacity-80"
        }
      `}
    >
      <div className="flex items-center justify-between px-4 md:px-10 py-2 md:py-3">
        {/* Logo */}
        <button
          onClick={() => navigation(`${ClientRouterLink.Home}`)}
          className="flex items-center gap-2 select-none"
        >
          <span className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent tracking-tight drop-shadow-sm">
            ABC
          </span>
          <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 bg-clip-text text-transparent tracking-tight">
            QUIZ
          </span>
        </button>
        {/* Menu */}
        <nav className="hidden md:flex items-center gap-3 lg:gap-6">
          {menuItems.map((item) => (
            <Link
              key={item.key}
              to={item.path}
              className={`px-2 py-1 rounded-lg text-sm font-medium transition-all duration-200
                ${
                  location.pathname === item.path
                    ? "bg-gradient-to-r from-pink-200 to-blue-200 text-blue-900 shadow font-bold"
                    : "text-blue-900 hover:bg-gradient-to-r hover:from-blue-100 hover:to-pink-100 hover:text-blue-700"
                }
              `}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        {/* Mobile menu (optional: add a hamburger here if needed) */}
        {/* Nút */}
        <div className="flex items-center gap-2 md:gap-4">
          <button className="bg-gradient-to-r from-pink-300 to-blue-300 text-white text-xs md:text-sm font-semibold px-3 py-1 md:px-4 md:py-2 rounded-full shadow hover:from-pink-400 hover:to-blue-400 transition-all duration-200">
            Thi nhanh
          </button>
          {/* <button
            onClick={() => navigation(`/auth/${AuthRouterLink.Login}`)}
            className="bg-white/80 text-blue-500 text-xs md:text-sm font-semibold px-3 py-1 md:px-4 md:py-2 rounded-full shadow hover:bg-blue-100 hover:text-blue-700 transition-all duration-200 border border-blue-100"
          >
            Đăng nhập/Đăng ký
          </button> */}
          <UserDropdown username="quocdung2603" onLogout={() => {}} />
        </div>
      </div>
      {/* Mobile menu: hiển thị menu dưới dạng grid khi trên mobile */}
      <nav className="flex md:hidden flex-wrap justify-center gap-1 pb-2">
        {menuItems.map((item) => (
          <Link
            key={item.key}
            to={item.path}
            className={`px-2 py-1 rounded-lg text-xs font-medium transition-all duration-200
              ${
                location.pathname === item.path
                  ? "bg-gradient-to-r from-pink-200 to-blue-200 text-blue-900 shadow font-bold"
                  : "text-blue-900 hover:bg-gradient-to-r hover:from-blue-100 hover:to-pink-100 hover:text-blue-700"
              }
            `}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
