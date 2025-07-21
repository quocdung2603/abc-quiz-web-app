import React from "react";

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  const menuItems = [
    "LỊCH SỬ",
    "ĐÃ LƯU",
    "KHÓA HỌC",
    "BÀI VIẾT",
    "TAG",
    "KTER",
    "VỀ KTEAM",
    "TÀI TRỢ",
    "PHẢN HỒI",
  ];

  return (
    <aside
      className={`fixed top-0 left-0 w-56 h-full z-30 flex flex-col bg-gradient-to-b from-blue-800 via-purple-700 to-purple-900 text-white shadow-xl transform transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
      aria-label="Sidebar"
    >
      {/* Logo */}
      <div className="text-xl font-extrabold tracking-wide text-center py-4 drop-shadow-lg select-none">
        ABCTEAM
      </div>
      {/* Avatar and Username */}
      <div className="flex flex-col items-center space-y-2 mb-4">
        <div className="relative w-16 h-16 rounded-full bg-gradient-to-tr from-purple-400 via-blue-400 to-pink-400 p-0.5 shadow">
          <div className="w-full h-full rounded-full bg-gray-100 overflow-hidden flex items-center justify-center">
            <img
              src="https://picsum.photos/200/300"
              alt="Avatar"
              className="w-full h-full object-cover rounded-full border-2 border-white shadow"
            />
          </div>
          <span
            className="absolute bottom-1 right-1 w-3 h-3 bg-green-400 border-2 border-white rounded-full shadow animate-pulse"
            title="Online"
          ></span>
        </div>
        <span className="text-xs font-semibold tracking-wide">
          quocdung2603
        </span>
        <span className="w-2/3 border-b border-white/30"></span>
      </div>
      {/* Menu */}
      <nav className="flex-1 flex flex-col gap-0.5 px-2">
        {menuItems.map((item, index) => (
          <button
            key={index}
            className="w-full text-left py-1.5 px-3 rounded-lg font-medium text-white/90 hover:bg-white/10 hover:text-yellow-300 transition-all duration-150 focus:outline-none focus:bg-white/20 text-xs"
            tabIndex={0}
          >
            {item}
          </button>
        ))}
      </nav>
      <div className="mt-auto py-2 text-center text-[10px] text-white/60 select-none">
        © 2024 ABC QUIZ
      </div>
    </aside>
  );
};

export default Sidebar;
