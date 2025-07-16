import { LoadingOutlined, SearchOutlined } from "@ant-design/icons";
import { useState } from "react";

const FindMatch: React.FC = () => {
  const [matchId, setMatchId] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSearch = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 2000);
    }, 1000);
  };

  const handleCancel = () => {
    setMatchId("");
    // Logic hủy (hiện tại chỉ xóa input)
    console.log("Cancelled search");
  };

  return (
    <div className="p-8 w-full max-w-lg mx-auto bg-white rounded-2xl shadow-lg border border-accent animate-fade-in">
      <h2 className="text-heading-2 text-primary font-bold mb-8 text-center tracking-wide">
        Tìm trận đấu
      </h2>
      {/* Thanh tìm kiếm */}
      <div className="mb-8">
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Nhập ID trận đấu
        </label>
        <input
          type="text"
          value={matchId}
          onChange={(e) => setMatchId(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all text-base"
          placeholder="Nhập ID trận đấu"
        />
      </div>
      {/* Nút tìm kiếm và hủy */}
      <div className="flex space-x-4">
        <button
          onClick={handleSearch}
          className="w-full py-3 text-lg font-bold rounded-xl bg-gradient-to-r from-primary to-accent shadow-neon text-white hover:from-accent hover:to-primary transition-all duration-200 flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-accent"
          disabled={loading}
        >
          {loading ? <LoadingOutlined spin /> : <SearchOutlined />}
          {loading ? "Đang tìm..." : success ? "Đã tham gia!" : "Tham gia"}
        </button>
        <button
          onClick={handleCancel}
          className="w-full py-3 text-lg font-bold rounded-xl bg-gray-200 text-gray-700 hover:bg-gray-300 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400"
          disabled={loading}
        >
          Hủy
        </button>
      </div>
    </div>
  );
};

export default FindMatch;
