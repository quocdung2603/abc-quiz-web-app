import React, { useState } from "react";
import Column from "./components/lobby/Column";
import { Modal, notification, Table, TableProps } from "antd";
import { useNavigate } from "react-router-dom";
import { ArenaRouterLink } from "../../../utils/RouterLink";
import { CopyOutlined, UserOutlined, CrownOutlined } from "@ant-design/icons";
import { Tooltip, message } from "antd";

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
    message.success("Mã ID đã được sao chép!");
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
    <div className="p-4 bg-white/90 max-w-5xl mx-auto my-8 rounded-xl shadow border border-blue-100 animate-fade-in">
      <h2 className="text-xl font-bold text-blue-900 mb-4 text-center tracking-wide flex items-center gap-2 justify-center">
        <UserOutlined className="text-accent text-lg" /> Phòng chờ -{" "}
        {matchDetails.name}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        {/* Mã ID */}
        <div className="flex flex-col gap-1">
          <label className="block text-xs font-semibold text-gray-600 mb-1">
            Mã ID trận đấu
          </label>
          <div className="flex items-center gap-2">
            <input
              type={isIdVisible ? "text" : "password"}
              value={matchId}
              readOnly
              className="w-2/3 p-2 border border-gray-200 rounded bg-gray-50 text-base font-mono"
            />
            <button
              onClick={toggleIdVisibility}
              className="px-2 py-1 rounded bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold text-xs transition-all"
            >
              {isIdVisible ? "Ẩn ID" : "Hiện ID"}
            </button>
            <Tooltip title="Sao chép ID">
              <button
                onClick={copyToClipboard}
                className="px-2 py-1 rounded bg-blue-400 text-white hover:bg-blue-500 transition-all font-semibold flex items-center gap-1 text-xs"
              >
                <CopyOutlined /> Copy
              </button>
            </Tooltip>
          </div>
        </div>
        {/* Người tổ chức */}
        <div className="flex flex-col gap-1">
          <label className="block text-xs font-semibold text-gray-600 mb-1">
            Người tổ chức
          </label>
          <p className="p-2 bg-gray-50 rounded font-semibold text-base flex items-center gap-2">
            <CrownOutlined className="text-yellow-400" /> {matchDetails.host}
          </p>
        </div>
      </div>
      {/* Nội dung trận đấu */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
        <div className="flex flex-col border rounded shadow-sm p-3 bg-gray-50">
          <span className="text-center text-xs font-semibold text-gray-500 mb-1">
            Nội dung
          </span>
          <p className="text-center text-base font-bold text-blue-700">
            {matchDetails.languages.join(", ")}
          </p>
        </div>
        <div className="flex flex-col border rounded shadow-sm p-3 bg-gray-50">
          <span className="text-center text-xs font-semibold text-gray-500 mb-1">
            Số lượng câu hỏi
          </span>
          <p className="text-center text-base font-bold text-purple-700">
            {matchDetails.questions}
          </p>
        </div>
        <div className="flex flex-col border rounded shadow-sm p-3 bg-gray-50">
          <span className="text-center text-xs font-semibold text-gray-500 mb-1">
            Thời lượng
          </span>
          <p className="text-center text-base font-bold text-green-700">
            {matchDetails.duration}
          </p>
        </div>
      </div>
      {/* Bảng người tham gia */}
      <div className="mb-4">
        <label className="block text-xs font-semibold text-gray-600 mb-1">
          Người tham gia
        </label>
        <Table
          columns={Column(showKickModal)}
          dataSource={listData.map((item, index) => ({ ...item, key: index }))}
          pagination={{
            pageSize: 5,
            total: listData.length,
            position: ["bottomCenter"],
            showSizeChanger: false,
            className: "custom-pagination no-ant-pagination-style",
          }}
          onChange={onChange}
          className="rounded-lg shadow border border-gray-100"
          size="small"
        />
      </div>
      {/* Nút chức năng */}
      <div className="flex flex-col md:flex-row gap-2">
        {isHost ? (
          <>
            <button
              onClick={handleStartMatch}
              className="w-full md:w-1/2 py-2 text-base font-bold rounded-lg bg-green-400 text-white hover:bg-green-500 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-300"
            >
              Bắt đầu trận đấu
            </button>
            <button
              onClick={handleCancelMatch}
              className="w-full md:w-1/2 py-2 text-base font-bold rounded-lg bg-red-400 text-white hover:bg-red-500 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-300"
            >
              Hủy trận đấu
            </button>
          </>
        ) : (
          <button
            onClick={handleExitMatch}
            className="w-full py-2 text-base font-bold rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400"
          >
            Thoát khỏi trận đấu
          </button>
        )}
      </div>
    </div>
  );
};

export default MatchLobby;
