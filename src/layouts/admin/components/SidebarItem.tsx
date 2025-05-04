import React from "react";
import { Link } from "react-router-dom";

interface ItemNavBarProps {
  content: string;
  icon?: React.ReactNode;
  href?: string;
  submenu?: ItemNavBarProps[] | null;
  isOpen?: boolean;
  onClick?: () => void;
  isCollapse: boolean;
}

const SidebarItem: React.FC<ItemNavBarProps> = ({
  content,
  icon,
  href,
  submenu,
  isOpen,
  onClick,
  isCollapse,
}) => {
  const defaultHref = "/admin/dashboard"; // Đường dẫn mặc định

  return (
    <div className="relative">
      {/* Menu Cha */}
      <div
        onClick={onClick}
        className={`flex items-center justify-between p-2 rounded-lg hover:bg-orange-600 transition duration-150 ease-linear ${
          submenu ? "cursor-pointer" : "cursor-default"
        }`}
      >
        <Link
          to={submenu ? "#" : href || defaultHref}
          className="flex items-center space-x-3 w-full"
        >
          <div className={`text-white ${!isCollapse ? 'text-3xl' : 'text-lg'}`}>{icon}</div>
          {isCollapse && (
            <p className="font-semibold text-lg text-white">{content}</p>
          )}
        </Link>
        {isCollapse && submenu && (
          <span className="text-white ml-auto">{isOpen ? "▲" : "▼"}</span>
        )}
      </div>

      {/* Submenu */}
      {isCollapse && submenu && isOpen && (
        <div className="ml-6 mt-1 space-y-1">
          {submenu.map((subItem, index) => (
            <Link
              key={index}
              to={subItem.href || defaultHref}
              className="block px-2 py-2 font-semibold text-sm text-gray-300 rounded-lg hover:bg-orange-500 hover:text-white transition duration-150 ease-linear"
            >
              {subItem.icon && (
                <span className="mr-2 text-white">{subItem.icon}</span>
              )}
              {subItem.content}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default SidebarItem;
