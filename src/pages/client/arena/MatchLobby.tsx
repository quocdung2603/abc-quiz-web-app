import React, { useState } from "react";
import Column from "./components/lobby/Column";
import { Modal, notification, Table, TableProps } from "antd";
import { useNavigate } from "react-router-dom";
import { ArenaRouterLink } from "../../../utils/RouterLink";

export interface Participant {
  id: string;
  username: string;
  role: string;
}

const mockData: Participant[] = Array.from({ length: 5 }, (_, i) => {
  return {
    id: `${i + 1}`,
    username: `User ${i + 1}`,
    role: `${i + 1 === 1 ? "Người tổ chức" : "Người tham gia"}`,
  };
});

const MatchLobby: React.FC = () => {
  const navigate = useNavigate();
  const [isIdVisible, setIsIdVisible] = useState(false);
  const [matchId, setMatchId] = useState("ABC123"); // Giả lập ID
  const [isHost, setIsHost] = useState(true); // Giả lập trạng thái người chơi là chủ phòng
  const [listData, setListData] = useState<Participant[]>(mockData);
  const [filters, setFilters] = useState({
    orderStatus: "",
    start: Date.now(),
    end: Date.now(),
    search: "",
    pageSize: 5,
    pageNumber: 1,
  });

  const matchDetails = {
    name: "Kỳ thi Lập trình 2025",
    host: "quocdung2603",
    languages: ["C++", "Java"],
    questions: 10,
    duration: "30 phút",
  };

  const toggleIdVisibility = () => {
    setIsIdVisible(!isIdVisible);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(matchId);
    alert("Mã ID đã được sao chép!");
  };

  const handleStartMatch = () => {
    // Logic bắt đầu trận đấu
    console.log("Bắt đầu trận đấu");
  };

  const handleCancelMatch = () => {
    // Logic hủy trận đấu
    console.log("Hủy trận đấu");
    navigate(`/arena/${ArenaRouterLink.Arena}`);
  };

  const handleExitMatch = () => {
    // Logic thoát trận đấu
    console.log("Thoát trận đấu");
    navigate(`/arena/${ArenaRouterLink.Arena}`);
  };

  //table
  const showKickModal = (id: string) => {
    Modal.confirm({
      title: "Xác nhận đuổi người này",
      content: `Bạn có chắc muốn đuổi tham gia cuộc thi này? ${id}`,
      onOk: () => {
        notification.success({
          message: "Đuổi thành công",
          description: `Bạn đã đuổi tham gia thành công cuộc thi này. ${id}`,
        });
      },
      onCancel() {
        notification.info({
          message: "Đã hủy",
          description: `Bạn đã hủy đuổi tham gia cuộc thi này. ${id}`,
        });
      },
    });
  };

  const onChange: TableProps<Participant>["onChange"] = (pagination) => {
    setFilters((prev) => ({
      ...prev,
      pageNumber: pagination.current ?? 1,
      pageSize: pagination.pageSize ?? 5,
    }));
  };

  return (
    <div className="p-6 bg-white max-w-7xl mx-auto my-auto">
      <h2 className="text-2xl font-bold mb-6">
        Phòng chờ - {matchDetails.name}
      </h2>

      <div className="w-full flex flex-row space-x-10">
        {/* Mã ID */}
        <div className="w-1/2 mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-4 bg-gray-300 text-center p-1">
            Mã ID trận đấu
          </label>
          <div className="flex items-center space-x-2">
            <input
              type={isIdVisible ? "text" : "password"}
              value={matchId}
              readOnly
              className="w-3/4 p-2 border rounded-md bg-gray-100"
            />
            <button
              onClick={toggleIdVisibility}
              className="px-3 py-1 bg-gray-200 rounded-md hover:bg-gray-300"
            >
              {isIdVisible ? "Ẩn ID" : "Hiện ID"}
            </button>
            <button
              onClick={copyToClipboard}
              className="px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Copy ID
            </button>
          </div>
        </div>

        {/* Người tạo trận đấu */}
        <div className="w-1/2 mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-4 bg-gray-300 text-center p-1">
            Người tổ chức
          </label>
          <p className="p-2 bg-gray-100 rounded-md">{matchDetails.host}</p>
        </div>
      </div>

      {/* Nội dung trận đấu */}
      <div className="mb-4 flex flex-col justify-between">
        <label className="block text-sm font-medium text-gray-700 mb-4 bg-gray-300 text-center p-1">
          Nội dung trận đấu
        </label>
        <div className="flex flex-row items-center space-x-10">
          <div className="w-1/3 flex flex-col border">
            <span className="text-center bg-gray-300">Nội dung</span>
            <p className="p-4 text-center">
              {matchDetails.languages.join(", ")}
            </p>
          </div>
          <div className="w-1/3 flex flex-col border">
            <span className="text-center bg-gray-300">Số lượng câu hỏi</span>
            <p className="p-4 text-center">{matchDetails.questions}</p>
          </div>
          <div className="w-1/3 flex flex-col border">
            <span className="text-center bg-gray-300">Nội dung</span>
            <p className="p-4 text-center">{matchDetails.duration}</p>
          </div>
        </div>
      </div>

      {/* Bảng người tham gia */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-4 bg-gray-300 text-center p-1">
          Người tham gia
        </label>
        <Table
          columns={Column(showKickModal)}
          dataSource={listData.map((item, index) => ({
            ...item,
            key: index,
          }))}
          pagination={{
            pageSize: 5,
            total: listData.length,
          }}
          onChange={onChange}
        />
      </div>

      {/* Nút chức năng */}
      <div className="flex space-x-4">
        {isHost ? (
          <>
            <button
              onClick={handleStartMatch}
              className="w-1/2 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
            >
              Bắt đầu trận đấu
            </button>
            <button
              onClick={handleCancelMatch}
              className="w-1/2 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
            >
              Hủy trận đấu
            </button>
          </>
        ) : (
          <button
            onClick={handleExitMatch}
            className="w-full py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
          >
            Thoát khỏi trận đấu
          </button>
        )}
      </div>
    </div>
  );
};

export default MatchLobby;
