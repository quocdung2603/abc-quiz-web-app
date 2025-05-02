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
      // Giả lập tiến trình upload
      setProgress(100);
    }
  };

  const handleSetAvatar = () => {
    // Logic đặt làm ảnh đại diện (có thể gọi API)
    console.log("Đặt làm ảnh đại diện");
  };

  return (
    <div className="w-full flex flex-row p-10 ">
      <div className="w-1/3 flex justify-center items-center space-x-4 mb-6">
        <div className="w-40 h-40 bg-gray-300 rounded-full flex items-center justify-center overflow-hidden">
          {avatarUrl ? (
            <img
              src={avatarUrl}
              alt="Avatar"
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-gray-500">Avatar</span>
          )}
        </div>
      </div>
      <div className="w-2/3 flex flex-col justify-between items-center border-2 p-10 border-dashed">
        <div className="mb-4">
          <label className="inline-flex items-center px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 cursor-pointer">
            <UploadOutlined className="mr-2" />
            <span>Chọn ảnh từ máy tính của bạn</span>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
            />
          </label>
        </div>
        <div className="mb-4 w-full">
          <div className="w-full bg-green-200 h-4 rounded-full overflow-hidden">
            <div
              className="h-full bg-green-500 text-white text-center flex items-center justify-center"
              style={{ width: `${progress}%` }}
            >
              {progress === 100 ? "Complete..." : `${progress}%`}
            </div>
          </div>
        </div>
        <button
          onClick={handleSetAvatar}
          className="w-full py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
        >
          Đặt làm ảnh đại diện
        </button>
      </div>
    </div>
  );
};

export default AvatarEdit;
