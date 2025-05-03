import React from "react";

interface SidebarProps {
  isOpen: boolean;
  onClicked: (id: string) => void;
}

const ArenaDrawer: React.FC<SidebarProps> = ({ isOpen, onClicked }) => {
  const menuItems = [
    "Tạo phòng",
    "Tham gia phòng",
    "Xếp ngẫu nhiên",
    "Lịch sử đấu trường",
    "Rời đấu trường",
  ];

  return (
    <div
      className={`fixed top-0 right-0 w-64 bg-gray-800 text-white h-full p-4 flex flex-col transform transition-transform duration-300 ease-in-out z-20 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* Logo */}
      <div className="text-2xl font-bold mb-6">ABCTEAM</div>

      {/* Avatar và Username */}
      <div className="flex flex-col items-center space-y-5">
        <div className="w-40 h-40 rounded-full bg-gray-500 mr-3">
          <img
            src="https://picsum.photos/200/300"
            alt=""
            className="w-full h-full rounded-full"
          />
        </div>
        <span className="text-lg font-semibold">quocdung2603</span>
        <span className="w-full border"></span>
      </div>

      {/* Menu */}
      <nav className="flex-1">
        {menuItems.map((item, index) => (
          <button
            key={index + 0}
            onClick={() => onClicked(index.toString())}
            className="py-2 px-4 ml-2 hover:bg-gray-700 rounded cursor-pointer"
          >
            {item}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default ArenaDrawer;
