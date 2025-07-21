import React from "react";
import { notification } from "antd";
import { useNavigate } from "react-router-dom";
import { ClientRouterLink } from "../../../../utils/RouterLink";
import { ExclamationCircleOutlined } from "@ant-design/icons";

interface ExitArenaProps {
  setIsDrawerModal: (A: boolean) => void;
}

const ExitArena: React.FC<ExitArenaProps> = ({ setIsDrawerModal }) => {
  const navigation = useNavigate();
  const handleOk = () => {
    // Logic navigate sẽ được bạn thêm vào đây
    console.log("Người dùng đồng ý thoát khỏi đấu trường");
    notification.success({
      message: "Thoát thành công",
      description: "Bạn đã thoát khỏi đấu trường.",
    });
    setIsDrawerModal(false); // Đóng modal
    navigation(`${ClientRouterLink.Home}`);
  };

  const handleCancel = () => {
    setIsDrawerModal(false); // Đóng modal
  };

  return (
    <div className="p-8 w-full max-w-md mx-auto bg-white rounded-2xl shadow-lg border border-danger animate-fade-in flex flex-col items-center gap-8">
      <div className="flex flex-col items-center gap-2">
        <ExclamationCircleOutlined className="text-danger text-5xl mb-2 animate-pulse" />
        <p className="text-lg font-semibold text-gray-800 text-center">
          Bạn có muốn thoát khỏi chế độ đấu trường không?
        </p>
      </div>
      <div className="flex space-x-4 w-full">
        <button
          onClick={handleOk}
          className="w-1/2 py-3 text-lg font-bold rounded-xl bg-danger text-white hover:bg-red-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-danger"
        >
          Thoát
        </button>
        <button
          onClick={handleCancel}
          className="w-1/2 py-3 text-lg font-bold rounded-xl bg-gray-200 text-gray-700 hover:bg-gray-300 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400"
        >
          Hủy
        </button>
      </div>
    </div>
  );
};

export default ExitArena;
