import React from "react";
import {
  UserOutlined,
  PlusCircleOutlined,
  SearchOutlined,
  ThunderboltOutlined,
  HistoryOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

interface SidebarProps {
  isOpen: boolean;
  onClicked: (id: string) => void;
}

const ArenaDrawer: React.FC<SidebarProps> = ({ isOpen, onClicked }) => {
  const menuItems = [
    {
      label: "Tạo phòng",
      icon: <PlusCircleOutlined className="mr-2" />,
    },
    {
      label: "Tham gia phòng",
      icon: <SearchOutlined className="mr-2" />,
    },
    {
      label: "Xếp ngẫu nhiên",
      icon: <ThunderboltOutlined className="mr-2" />,
    },
    {
      label: "Lịch sử đấu trường",
      icon: <HistoryOutlined className="mr-2" />,
    },
    {
      label: "Rời đấu trường",
      icon: <LogoutOutlined className="mr-2" />,
    },
  ];

  return (
    <div
      className={`fixed top-0 right-0 w-60 max-w-full bg-gradient-to-b from-blue-900 to-purple-900 text-white h-full p-4 flex flex-col transform transition-transform duration-300 ease-in-out z-30 shadow-xl border-l-2 border-blue-200 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* Logo */}
      <div className="text-2xl font-bold mb-6 tracking-wide text-white select-none">
        ABCTEAM
      </div>
      {/* Avatar và Username */}
      <div className="flex flex-col items-center space-y-3 mb-6">
        <div className="relative w-20 h-20 rounded-full bg-gray-700 flex items-center justify-center shadow border-2 border-blue-200">
          <img
            src="https://picsum.photos/200/300"
            alt="avatar"
            className="w-full h-full rounded-full object-cover"
          />
          <span
            className="absolute bottom-2 right-2 w-4 h-4 bg-green-400 border-2 border-white rounded-full animate-pulse"
            title="Online"
          ></span>
        </div>
        <span className="text-base font-semibold flex items-center gap-2">
          <UserOutlined />
          quocdung2603
        </span>
        <span className="w-full border-b border-blue-200"></span>
      </div>
      {/* Menu */}
      <nav className="flex-1 flex flex-col gap-2">
        {menuItems.map((item, index) => (
          <button
            key={index}
            onClick={() => onClicked(index.toString())}
            className="flex items-center py-2 px-3 w-full text-base rounded-lg bg-gradient-to-r from-blue-400 to-purple-400 shadow hover:from-purple-400 hover:to-blue-400 transition-all duration-200 font-semibold tracking-wide mb-1 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2"
          >
            {item.icon}
            {item.label}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default ArenaDrawer;
