import React, { useState } from "react";
import PasswordEdit from "./setting components/PasswordEdit";
import AvatarEdit from "./setting components/AvatarEdit";
import AccountEdit from "./setting components/AccountEdit";
import InfoEdit from "./setting components/InfoEdit";

const filter = ["Hồ sơ", "Ảnh đại diện", "Mật khẩu", "Tài khoản"];

const Setting: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("Hồ sơ");

  const renderContent = () => {
    switch (activeFilter) {
      case "Hồ sơ":
        return <InfoEdit />;
      case "Ảnh đại diện":
        return <AvatarEdit />;
      case "Mật khẩu":
        return <PasswordEdit />;
      case "Tài khoản":
        return <AccountEdit />;
      default:
        return null;
    }
  };

  return (
    <div className="w-full flex flex-col md:flex-row gap-4 p-3 md:p-5">
      {/* Filter navigation */}
      <div className="md:w-1/4 w-full flex flex-col shadow rounded-xl border border-gray-100 bg-white/90">
        <h2 className="p-3 text-base font-bold text-center bg-gradient-to-r from-blue-100 to-purple-100 rounded-t-xl tracking-wide">
          CÀI ĐẶT
        </h2>
        <div className="flex flex-col gap-1 py-3 px-2">
          {filter.map((item, index) => (
            <button
              key={index}
              onClick={() => setActiveFilter(item)}
              className={`py-1.5 px-4 rounded-full font-semibold text-xs transition-all duration-150 border focus:outline-none ${
                activeFilter === item
                  ? "bg-gradient-to-r from-blue-400 to-purple-400 text-white shadow"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-blue-50"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
      {/* Content area */}
      <div className="flex-1 flex flex-col shadow rounded-xl border border-gray-100 bg-white/90">
        <h2 className="p-3 text-base font-bold text-center bg-gradient-to-r from-blue-100 to-purple-100 rounded-t-xl tracking-wide">
          Chỉnh sửa
        </h2>
        <div className="p-3 md:p-5 flex-1 flex flex-col">{renderContent()}</div>
      </div>
    </div>
  );
};

export default Setting;
