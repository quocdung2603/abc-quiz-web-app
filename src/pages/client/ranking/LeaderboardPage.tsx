import { useState } from "react";
import TopThreePodium from "./components/TopThreePodium";
import RankingList from "./components/RankingList";
import FilterBar from "./components/FilterBar";

const mockData = [
  { username: "Khoa sad", wins: 58, avatar: "KH", rank: 1 },
  { username: "KenShine0803", wins: 57, avatar: "KE", rank: 2 },
  { username: "Exitw.3", wins: 55, avatar: "EX", rank: 3 },
  { username: "Kirigaya", wins: 49, avatar: "", rank: 4 },
  { username: "vipmath171", wins: 44, avatar: "V", rank: 5 },
  { username: "User6", wins: 40, avatar: "U6", rank: 6 },
  { username: "User7", wins: 38, avatar: "U7", rank: 7 },
  { username: "User8", wins: 35, avatar: "U8", rank: 8 },
  { username: "User9", wins: 32, avatar: "U9", rank: 9 },
  { username: "User10", wins: 30, avatar: "U10", rank: 10 },
  { username: "User11", wins: 28, avatar: "U11", rank: 11 },
  { username: "User12", wins: 27, avatar: "U11", rank: 12 },
  { username: "User13", wins: 25, avatar: "U11", rank: 13 },
  { username: "User14", wins: 23, avatar: "U11", rank: 14 },
];

const ITEMS_PER_PAGE = 10;

const LeaderBoardPage = () => {
  const [filter, setFilter] = useState({ time: "all", topic: "all" });
  const [currentPage, setCurrentPage] = useState(1);

  const topThree = mockData.slice(0, 3);
  const rest = mockData.slice(3);

  const totalPages = Math.ceil(rest.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedUsers = rest.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-purple-50 to-blue-100 py-10 px-2">
      <div className="max-w-4xl mx-auto bg-white/90 rounded-3xl shadow-2xl p-6 md:p-10 border border-gray-100">
        <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-8 bg-gradient-to-r from-yellow-400 via-purple-400 to-blue-500 bg-clip-text text-transparent drop-shadow">
          Bảng xếp hạng
        </h1>
        <FilterBar filter={filter} setFilter={setFilter} />
        <TopThreePodium users={topThree} />
        <RankingList users={paginatedUsers} />
        <div className="flex justify-center mt-8 gap-2">
          {Array.from({ length: totalPages }).map((_, idx) => (
            <button
              key={idx}
              className={`w-10 h-10 flex items-center justify-center rounded-full font-bold text-lg transition-all duration-150 shadow-md border-2 focus:outline-none ${
                currentPage === idx + 1
                  ? "bg-gradient-to-tr from-yellow-400 to-purple-400 text-white border-yellow-400 scale-110"
                  : "bg-white text-gray-700 border-gray-200 hover:bg-blue-50 hover:text-blue-600"
              }`}
              onClick={() => setCurrentPage(idx + 1)}
              aria-label={`Trang ${idx + 1}`}
            >
              {idx + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeaderBoardPage;
