import React, { useState } from "react";
import { SafetyCertificateOutlined, TrophyOutlined } from "@ant-design/icons";

interface FloatButtonProps {
  onClicked: () => void;
}

const FloatButton: React.FC<FloatButtonProps> = ({ onClicked }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && (
        <span className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-semibold shadow-lg text-base animate-fade-in">
          Tham gia đấu trường
        </span>
      )}
      <button
        onClick={onClicked}
        className="bg-gradient-to-r from-yellow-400 to-pink-500 rounded-full p-5 shadow-2xl hover:shadow-3xl hover:-translate-y-2 transition-all duration-300 transform focus:outline-none border-4 border-white/60"
        aria-label="Tham gia đấu trường"
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
