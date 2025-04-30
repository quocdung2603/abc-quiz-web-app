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
    <div className="p-6 max-w-7xl mx-auto text-black">
      <h1 className="text-2xl font-bold mb-6 text-center">Bảng xếp hạng</h1>
      <FilterBar filter={filter} setFilter={setFilter} />
      <TopThreePodium users={topThree} />
      <RankingList users={paginatedUsers} />
      <div className="flex justify-center mt-4 gap-2">
        {Array.from({ length: totalPages }).map((_, idx) => (
          <button
            key={idx + 0}
            className={`px-3 py-1 rounded ${
              currentPage === idx + 1
                ? "bg-yellow-400 text-white"
                : "bg-gray-200"
            }`}
            onClick={() => setCurrentPage(idx + 1)}
          >
            {idx + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LeaderBoardPage;
