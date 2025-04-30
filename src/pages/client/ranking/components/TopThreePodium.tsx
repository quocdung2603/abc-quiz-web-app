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

  return (
    <div className="flex justify-center items-end gap-6 mb-10">
      {topThree.map((u, idx) => {
        const podiumHeights = [60, 80, 70];
        return (
          <div key={u.rank} className="text-center">
            <div
              className={`w-16 h-16 rounded-full mx-auto text-white flex items-center justify-center text-xl font-bold ${
                idx === 1
                  ? "bg-yellow-400"
                  : idx === 0
                  ? "bg-slate-300"
                  : "bg-orange-300"
              }`}
            >
              {u.avatar || u.username.charAt(0).toUpperCase()}
            </div>
            <div
              className={`bg-gray-800 mt-2 w-20 rounded-t-md text-white flex items-center justify-center`}
              style={{ height: `${podiumHeights[idx]}px` }}
            >
              #{u.rank}
            </div>
            <p className="mt-1 text-sm font-semibold">{u.username}</p>
            <p className="text-xs text-gray-400">{u.wins} trận thắng</p>
          </div>
        );
      })}
    </div>
  );
}
