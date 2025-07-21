import React, { useState } from "react";
import { UploadOutlined } from "@ant-design/icons";

const AvatarEdit: React.FC = () => {
  const [progress, setProgress] = useState(100); // Giả lập tiến trình hoàn thành 100%
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null); // URL của ảnh avatar

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setAvatarUrl(url);
      setProgress(100);
    }
  };

  const handleSetAvatar = () => {
    // Logic đặt làm ảnh đại diện (có thể gọi API)
    console.log("Đặt làm ảnh đại diện");
  };

  return (
    <div className="w-full max-w-xl mx-auto flex flex-col md:flex-row gap-8 bg-white/90 p-8 items-center">
      <div className="flex flex-col items-center gap-4 w-full md:w-1/3">
        <div className="w-32 h-32 bg-gradient-to-tr from-purple-400 via-blue-400 to-pink-400 p-1 rounded-full shadow-lg flex items-center justify-center">
          <div className="w-full h-full rounded-full bg-gray-100 overflow-hidden flex items-center justify-center">
            {avatarUrl ? (
              <img
                src={avatarUrl}
                alt="Avatar"
                className="w-full h-full object-cover rounded-full border-4 border-white shadow"
              />
            ) : (
              <span className="text-gray-400 text-lg">Avatar</span>
            )}
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col gap-6 items-center">
        <label className="inline-flex items-center px-5 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-semibold shadow hover:scale-105 cursor-pointer transition">
          <UploadOutlined className="mr-2" />
          <span>Chọn ảnh từ máy tính</span>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
          />
        </label>
        <div className="w-full">
          <div className="w-full bg-gray-200 h-4 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-green-400 to-green-600 text-white text-center flex items-center justify-center transition-all duration-300"
              style={{ width: `${progress}%` }}
            >
              {progress === 100 ? "Hoàn thành" : `${progress}%`}
            </div>
          </div>
        </div>
        <button
          onClick={handleSetAvatar}
          className="w-fit px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-semibold shadow hover:scale-105 transition"
        >
          Đặt làm ảnh đại diện
        </button>
      </div>
    </div>
  );
};

export default AvatarEdit;
