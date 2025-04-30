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
      label: "Trang cá nhân",
      icon: <EyeOutlined />,
      onClick: () => {
        navigate("/profile");
      },
    },
    {
      key: "2",
      label: "Đăng xuất",
      icon: <LogoutOutlined />,
      onClick: onLogout,
    },
  ];

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex flex-row items-center space-x-2 hover:bg-[#c2b4b4] py-2 px-4 rounded-full"
      >
        <img
          src="https://picsum.photos/200/300?random=1"
          alt="avt"
          className="w-10 h-10 rounded-full"
        />
        <span className="text-white font-semibold">{username}</span>
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg z-50">
          <Menu className="bg-white text-black rounded-md" items={menuItems} />
        </div>
      )}
    </div>
  );
};

export default UserDropdown;
