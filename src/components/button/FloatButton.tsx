import React, { useState } from "react";
import { SafetyCertificateOutlined, TrophyOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { ClientRouterLink } from "../../utils/RouterLink";

interface FloatButtonProps {
  onClicked: () => void;
}

const FloatButton: React.FC<FloatButtonProps> = ({ onClicked }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="fixed bottom-5 right-5 z-50 flex items-center space-x-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && (
        <span className="text-white bg-gray-800 px-3 py-1 rounded-full text-sm font-semibold">
          Tham gia đấu trường
        </span>
      )}
      <button
        onClick={onClicked}
        className="bg-gradient-to-r from-red-500 to-pink-500 rounded-full p-4 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition duration-300 transform"
      >
        {isHovered ? (
          <TrophyOutlined className="text-white text-3xl" />
        ) : (
          <SafetyCertificateOutlined className="text-white text-3xl" />
        )}
      </button>
    </div>
  );
};

export default FloatButton;
