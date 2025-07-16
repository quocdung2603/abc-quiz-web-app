interface User {
  username: string;
  wins: number;
  avatar: string;
  rank: number;
}

export default function TopThreePodium({ users }: { users: User[] }) {
  const sorted = [...users]
    .sort((a, b) => a.rank - b.rank)
    .map((user, index) => ({ ...user, rank: index + 1 }));

  const topThree = [sorted[2], sorted[0], sorted[1]];
  const podiumColors = [
    "from-slate-300 to-gray-400", // 2nd
    "from-yellow-400 to-yellow-300", // 1st
    "from-orange-300 to-orange-200", // 3rd
  ];
  const ringColors = [
    "from-slate-400 to-gray-200",
    "from-yellow-400 to-yellow-200",
    "from-orange-400 to-orange-200",
  ];
  const podiumHeights = [60, 90, 75];

  return (
    <div className="flex justify-center items-end gap-8 mb-12">
      {topThree.map((u, idx) => (
        <div
          key={u.rank}
          className="text-center flex flex-col items-center group"
        >
          <div
            className={`w-20 h-20 rounded-full mx-auto flex items-center justify-center text-2xl font-extrabold shadow-lg bg-gradient-to-br ${ringColors[idx]} group-hover:scale-110 transition-transform duration-200 relative`}
          >
            <span className="absolute -top-2 -right-2 bg-gradient-to-r from-purple-400 to-blue-400 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg border-2 border-white">
              #{u.rank}
            </span>
            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center border-4 border-white overflow-hidden">
              <span className="text-gray-700 text-2xl font-bold">
                {u.avatar || u.username.charAt(0).toUpperCase()}
              </span>
            </div>
          </div>
          <div
            className={`bg-gradient-to-t ${podiumColors[idx]} mt-3 w-24 rounded-t-2xl text-white flex items-center justify-center font-bold shadow-lg`}
            style={{ height: `${podiumHeights[idx]}px` }}
          >
            <span className="drop-shadow text-lg">
              {u.rank === 1 ? "🥇" : u.rank === 2 ? "🥈" : "🥉"}
            </span>
          </div>
          <p className="mt-2 text-base font-semibold text-gray-800 group-hover:text-blue-600 transition">
            {u.username}
          </p>
          <p className="text-xs text-gray-500">{u.wins} trận thắng</p>
        </div>
      ))}
    </div>
  );
}
