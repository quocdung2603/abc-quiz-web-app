import React, { useState } from "react";
import { MenuOutlined } from "@ant-design/icons";
import Sidebar from "./components/Sidebar";
import Introduce from "./components/Introduce";
import History from "./components/History";
import Setting from "./components/Setting";

const ProfilePage: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Giới thiệu");

  const tabs = ["Giới thiệu", "Bài viết", "Lịch sử", "Thông báo", "Cài đặt"];

  const renderTabContent = () => {
    switch (activeTab) {
      case "Giới thiệu":
        return <Introduce />;
      case "Lịch sử":
        return <History />;
      case "Cài đặt":
        return <Setting />;
      default:
        return (
          <div className="p-4 flex-1 flex flex-col items-center justify-center">
            <h2 className="text-lg font-bold text-gray-800 mb-2 drop-shadow">
              {activeTab}
            </h2>
            <p className="text-gray-500 text-sm">Nội dung sẽ hiển thị ở đây.</p>
          </div>
        );
    }
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-blue-50 to-purple-100 relative overflow-hidden">
      {/* Sidebar (Drawer) */}
      <Sidebar isOpen={isSidebarOpen} />
      {/* Main Content */}
      <div
        className={`w-full flex flex-col min-h-screen transition-all duration-300 ease-in-out ${
          isSidebarOpen ? "ml-56" : "ml-0"
        }`}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-700 to-purple-600 px-3 py-2 flex items-center gap-3 shadow-md min-h-[44px]">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="text-white p-1 rounded-md hover:bg-white/10 focus:outline-none transition"
            aria-label="Toggle sidebar"
          >
            <MenuOutlined className="text-lg" />
          </button>
          {!isSidebarOpen && (
            <div className="text-xl text-white font-extrabold tracking-wide drop-shadow select-none">
              ABCTEAM
            </div>
          )}
        </div>
        {/* Tabs */}
        <div className="bg-white/80 shadow flex flex-row gap-1 px-2 py-1 overflow-x-auto border-b border-gray-200 min-h-[38px]">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-1 rounded-full font-semibold transition-all duration-200 text-xs md:text-sm focus:outline-none ${
                tab === activeTab
                  ? "bg-gradient-to-r from-blue-400 to-purple-400 text-white shadow scale-105"
                  : "text-gray-700 hover:bg-blue-100 hover:text-blue-700"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        {/* Tab Content */}
        <div className="flex-1 overflow-y-auto bg-transparent">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
