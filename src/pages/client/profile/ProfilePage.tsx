import React, { useState } from "react";
import { MenuOutlined } from "@ant-design/icons";
import Sidebar from "./components/Sidebar";
import Introduce from "./components/Introduce";
import History from "./components/History";
import Setting from "./components/Setting";

const ProfilePage: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Mặc định đóng
  const [activeTab, setActiveTab] = useState("Giới thiệu"); // Trạng thái tab đang chọn, mặc định là "Giới thiệu"

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const tabs = ["Giới thiệu", "Bài viết", "Lịch sử", "Thông báo", "Cài đặt"];

  // Hàm render nội dung dựa trên tab đang chọn
  const renderTabContent = () => {
    switch (activeTab) {
      case "Giới thiệu":
        return <Introduce />;

      case "Khóa học":
        return (
          <div className="p-6 flex-1">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Khóa học</h2>
            <p className="text-gray-600">
              Danh sách khóa học của bạn sẽ hiển thị ở đây.
            </p>
          </div>
        );

      case "Bài học":
        return (
          <div className="p-6 flex-1">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Bài học</h2>
            <p className="text-gray-600">
              Danh sách bài học sẽ hiển thị ở đây.
            </p>
          </div>
        );

      case "Series":
        return (
          <div className="p-6 flex-1">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Series</h2>
            <p className="text-gray-600">Danh sách series sẽ hiển thị ở đây.</p>
          </div>
        );

      case "Bài viết":
        return (
          <div className="p-6 flex-1">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Bài viết</h2>
            <p className="text-gray-600">
              Danh sách bài viết sẽ hiển thị ở đây.
            </p>
          </div>
        );

      case "Câu hỏi":
        return (
          <div className="p-6 flex-1">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Câu hỏi</h2>
            <p className="text-gray-600">
              Danh sách câu hỏi sẽ hiển thị ở đây.
            </p>
          </div>
        );

      case "Lịch sử":
        return <History />;

      case "Đã lưu":
        return (
          <div className="p-6 flex-1">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Đã lưu</h2>
            <p className="text-gray-600">Nội dung đã lưu sẽ hiển thị ở đây.</p>
          </div>
        );

      case "Thông báo":
        return (
          <div className="p-6 flex-1">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Thông báo</h2>
            <p className="text-gray-600">Thông báo sẽ hiển thị ở đây.</p>
          </div>
        );

      case "Cài đặt":
        return <Setting />;

      default:
        return null;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100 relative overflow-hidden">
      {/* Sidebar (Drawer) */}
      <Sidebar isOpen={isSidebarOpen} />

      {/* Nội dung chính - Đẩy sang phải khi sidebar mở */}
      <div
        className={`w-full flex flex-col transition-all duration-300 ease-in-out ${
          isSidebarOpen ? "ml-64" : "ml-0"
        }`}
      >
        {/* Header với Toggle Button */}
        <div className="bg-gray-800 p-4 flex flex-row items-center space-x-5">
          {/* Toggle Button */}
          <button
            onClick={handleToggleSidebar}
            className="text-white p-2 rounded-md hover:bg-gray-700 focus:outline-none"
          >
            <MenuOutlined className="text-xl" />
          </button>
          {!isSidebarOpen && (
            <div className="text-3xl text-white font-bold">ABCTEAM</div>
          )}
        </div>

        {/* Tab */}
        <div className="bg-white shadow-sm p-4 flex space-x-4 overflow-x-auto">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(tab)} // Cập nhật tab đang chọn
              className={`px-4 py-2 rounded-md ${
                tab === activeTab
                  ? "bg-blue-500 text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Nội dung của Tab */}
        {renderTabContent()}
      </div>
    </div>
  );
};

export default ProfilePage;
