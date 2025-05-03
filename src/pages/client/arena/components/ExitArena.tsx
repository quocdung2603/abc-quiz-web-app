import React from "react";
import { notification } from "antd";
import { useNavigate } from "react-router-dom";
import { ClientRouterLink } from "../../../../utils/RouterLink";

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
    <div className="p-6 w-full flex flex-col space-y-10 mx-auto">
      <p>Bạn có muốn thoát khỏi chế độ đấu trường không</p>

      {/* Nút tìm kiếm và hủy */}
      <div className="flex space-x-4">
        <button
          onClick={handleOk}
          className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Thoát
        </button>
        <button
          onClick={handleCancel}
          className="w-full py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
        >
          Hủy
        </button>
      </div>
    </div>
  );
};

export default ExitArena;
