import React, { useState } from "react";
import { MenuOutlined } from "@ant-design/icons";
import AdminSidebar from "./components/AdminSidebar";
import { Outlet } from "react-router-dom";

const AdminLayout: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Mặc định đóng

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen bg-gray-100 relative overflow-hidden">
      {/* Sidebar */}
      <AdminSidebar collapse={isSidebarOpen} />

      {/* Nội dung chính */}
      <div
        className={`flex-1 flex flex-col transition-all duration-300 ease-in-out ${
          isSidebarOpen ? "ml-64" : "ml-16"
        }`}
      >
        {/* Header */}
        <div className="bg-gray-800 p-2 flex items-center space-x-4 shadow-md">
          <button
            onClick={handleToggleSidebar}
            className="text-white p-2 rounded-md hover:bg-gray-700 focus:outline-none"
          >
            <MenuOutlined className="text-xl" />
          </button>
          {!isSidebarOpen && (
            <div className="text-2xl text-white font-bold">ABCTEAM</div>
          )}
        </div>
        <div className="flex-1 overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
