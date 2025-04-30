interface User {
  username: string;
  wins: number;
  avatar: string;
  rank: number;
}

export default function RankingList({ users }: { users: User[] }) {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <table className="w-1/2 mx-auto text-sm text-left">
        <thead className="text-center">
          <tr className="border-b">
            <th className="py-2">Hạng</th>
            <th>Người chơi</th>
            <th>Số trận thắng</th>
          </tr>
        </thead>
        <tbody className="">
          {users.map((u) => (
            <tr key={u.rank} className="border-b hover:bg-gray-50">
              <td className="py-2 font-bold text-center">{u.rank}</td>
              <td className="w-full flex flex-row items-center pl-40 space-x-5">
                <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">
                  {u.avatar || u.username.charAt(0).toUpperCase()}
                </div>
                <p>{u.username}</p>
              </td>
              <td className="text-center">{u.wins}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
