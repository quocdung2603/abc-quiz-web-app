import React, { useState } from "react";
import { AdminMenu } from "./AdminMenu";
import SidebarItem from "./SidebarItem";

interface CollapseProps {
  collapse: boolean;
}

const AdminSidebar: React.FC<CollapseProps> = ({ collapse }) => {
  const [activeMenuIndex, setActiveMenuIndex] = useState<number | null>(null);

  const adminSiteMenu = AdminMenu();

  const handleMenuClick = (index: number) => {
    setActiveMenuIndex(activeMenuIndex === index ? null : index);
  };

  return (
    <div
      className={`bg-gray-800 ${
        collapse ? "w-64" : "w-16"
      } transition-all duration-300 h-screen p-4 flex flex-col shadow-lg fixed top-0 left-0 z-10 text-white`}
    >
      {/* Body (Menu chính) - Căn giữa */}
      <div className="flex-1 flex items-center justify-center">
        <div className="space-y-10">
          {adminSiteMenu.map((item, index) => (
            <SidebarItem
              key={index + 0}
              content={item.content}
              icon={item.icon}
              href={item.href}
              submenu={item.submenu}
              isOpen={activeMenuIndex === index}
              onClick={() => handleMenuClick(index)}
              isCollapse={collapse}
            />
          ))}
        </div>
      </div>

      {/* Footer - Avatar, tên, vai trò */}
      <div className="mt-auto flex items-center space-x-4">
        <div
          className={`${
            !collapse ? "w-8 h-8" : "w-14 h-14"
          } rounded-full bg-gray-500 overflow-hidden`}
        >
          <img
            src="https://picsum.photos/200/300"
            alt="Avatar"
            className="w-full h-full object-cover"
          />
        </div>
        {collapse && (
          <div className="flex flex-col">
            <span className="text-sm font-semibold">quocdung2603</span>
            <span className="text-xs text-gray-400">Admin</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminSidebar;
