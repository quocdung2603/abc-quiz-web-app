import React, { useState } from "react";

const FindMatch: React.FC = () => {
  const [matchId, setMatchId] = useState("");

  const handleSearch = () => {
    // Logic tìm kiếm dựa trên matchId (hiện tại chỉ log)
    console.log("Searching for match ID:", matchId);
  };

  const handleCancel = () => {
    setMatchId("");
    // Logic hủy (hiện tại chỉ xóa input)
    console.log("Cancelled search");
  };

  return (
    <div className="p-6 w-full mx-auto">
      <h2 className="text-2xl font-bold mb-6">Tìm trận đấu</h2>

      {/* Thanh tìm kiếm */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Nhập ID trận đấu
        </label>
        <input
          type="text"
          value={matchId}
          onChange={(e) => setMatchId(e.target.value)}
          className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
          placeholder="Nhập ID trận đấu"
        />
      </div>

      {/* Nút tìm kiếm và hủy */}
      <div className="flex space-x-4">
        <button
          onClick={handleSearch}
          className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Tham gia
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

export default FindMatch;
