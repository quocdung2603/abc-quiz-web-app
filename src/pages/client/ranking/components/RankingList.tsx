interface User {
  username: string;
  wins: number;
  avatar: string;
  rank: number;
}

export default function RankingList({ users }: { users: User[] }) {
  return (
    <div className="bg-white/90 rounded-2xl shadow-xl p-4 md:p-8 border border-gray-100 mt-2">
      <table className="w-full text-base text-left">
        <thead className="text-center">
          <tr className="border-b">
            <th className="py-3 text-lg font-bold text-gray-700">Hạng</th>
            <th className="text-lg font-bold text-gray-700">Người chơi</th>
            <th className="text-lg font-bold text-gray-700">Số trận thắng</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr
              key={u.rank}
              className="border-b hover:bg-blue-50/60 transition group cursor-pointer"
            >
              <td className="py-3 font-extrabold text-center">
                <span
                  className={`inline-block px-3 py-1 rounded-full text-white text-base font-bold shadow bg-gradient-to-r ${
                    u.rank === 1
                      ? "from-yellow-400 to-yellow-500"
                      : u.rank === 2
                      ? "from-slate-400 to-gray-300"
                      : u.rank === 3
                      ? "from-orange-400 to-orange-300"
                      : "from-blue-400 to-purple-400"
                  }`}
                >
                  #{u.rank}
                </span>
              </td>
              <td className="w-full flex flex-row items-center gap-4 md:pl-10">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-400 to-purple-400 text-white flex items-center justify-center font-bold shadow-lg border-2 border-white">
                  {u.avatar || u.username.charAt(0).toUpperCase()}
                </div>
                <span className="font-semibold text-gray-800 group-hover:text-blue-600 transition">
                  {u.username}
                </span>
              </td>
              <td className="text-center font-semibold text-gray-700">
                {u.wins}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
