import { useState, useRef, useEffect } from "react";
import { Menu, MenuProps } from "antd";
import { LogoutOutlined, EyeOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

interface UserDropdownProps {
  username: string | undefined;
  onLogout: () => void;
}

const UserDropdown: React.FC<UserDropdownProps> = ({ username, onLogout }) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const menuItems: MenuProps["items"] = [
    {
      key: "1",
      label: <span className="font-medium text-blue-900">Trang cá nhân</span>,
      icon: <EyeOutlined className="text-blue-400" />,
      onClick: () => {
        navigate("/profile");
      },
    },
    {
      key: "2",
      label: <span className="font-medium text-pink-500">Đăng xuất</span>,
      icon: <LogoutOutlined className="text-pink-400" />,
      onClick: onLogout,
    },
  ];

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex flex-row items-center gap-2 bg-gradient-to-r from-blue-100 to-pink-100 hover:from-blue-200 hover:to-pink-200 px-2 md:px-4 py-1 md:py-2 rounded-full border-2 border-transparent hover:border-pink-200 shadow-sm transition-all duration-200 focus:outline-none"
        style={{ minWidth: 0 }}
      >
        <span className="relative w-8 h-8 md:w-10 md:h-10 flex items-center justify-center">
          <span className="absolute inset-0 rounded-full bg-gradient-to-tr from-pink-200 via-blue-100 to-purple-100 blur-sm opacity-60"></span>
          <img
            src="https://picsum.photos/200/300?random=1"
            alt="avt"
            className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white shadow object-cover relative z-10"
          />
        </span>
        <span className="text-blue-900 font-semibold text-xs md:text-sm truncate max-w-[80px] md:max-w-[120px]">
          {username}
        </span>
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-44 md:w-48 bg-white/90 backdrop-blur-md border border-pink-100 rounded-xl shadow-xl z-50 animate-fade-in-up overflow-hidden">
          <Menu
            className="bg-transparent text-blue-900 rounded-xl [&_.ant-menu-item]:!px-4 [&_.ant-menu-item]:!py-2 [&_.ant-menu-item]:!rounded-lg [&_.ant-menu-item-selected]:!bg-gradient-to-r [&_.ant-menu-item-selected]:from-pink-100 [&_.ant-menu-item-selected]:to-blue-100 [&_.ant-menu-item-selected]:!text-blue-900"
            items={menuItems}
          />
        </div>
      )}
    </div>
  );
};

export default UserDropdown;
