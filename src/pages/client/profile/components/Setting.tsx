import React, { useState } from "react";
import PasswordEdit from "./setting components/PasswordEdit";
import AvatarEdit from "./setting components/AvatarEdit"; // Giả sử đã có
import AccountEdit from "./setting components/AccountEdit";
import InfoEdit from "./setting components/InfoEdit";

const filter = ["Hồ sơ", "Ảnh đại diện", "Mật khẩu", "Tài khoản"];

const Setting: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("Hồ sơ"); // Mặc định là "Hồ sơ"

  const renderContent = () => {
    switch (activeFilter) {
      case "Hồ sơ":
        return <InfoEdit />;

      case "Ảnh đại diện":
        return <AvatarEdit />; // Sử dụng component AvatarEdit đã có

      case "Mật khẩu":
        return <PasswordEdit />;

      case "Tài khoản":
        return <AccountEdit />;

      default:
        return null;
    }
  };

  return (
    <div className="w-full flex flex-row p-10 space-x-10 h-auto">
      <div className="w-1/4 flex flex-col shadow-lg h-fit">
        <h2 className="p-4 text-lg font-semibold text-center bg-gray-300">
          CÀI ĐẶT
        </h2>
        <div className="flex flex-col space-y-2 my-5">
          {filter.map((item, index) => (
            <button
              key={index}
              onClick={() => setActiveFilter(item)}
              className={`py-2 px-10 rounded mx-10 text-lg font-semibold ${
                activeFilter === item
                  ? "bg-blue-500 text-white"
                  : "hover:bg-blue-500 hover:text-white"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
      <div className="w-3/4 flex flex-col shadow-lg">
        <h2 className="p-4 text-lg font-semibold text-center bg-gray-300">
          Chỉnh sửa
        </h2>
        {renderContent()}
      </div>
    </div>
  );
};

export default Setting;
