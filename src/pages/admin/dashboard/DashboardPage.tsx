import React from "react";

interface Stat {
  title: string;
  value: number | string;
  description: string;
}

const DashboardPage: React.FC = () => {
  // Mock dữ liệu
  const stats: Stat[] = [
    {
      title: "Cuộc thi đang diễn ra",
      value: 3,
      description: "Số cuộc thi hiện tại",
    },
    {
      title: "Người tham gia",
      value: 150,
      description: "Tổng số người tham gia",
    },
    { title: "Câu hỏi tổng cộng", value: 250, description: "Tổng số câu hỏi" },
  ];

  const recentMatches = [
    { name: "Kỳ thi Lập trình 2025", status: "Hoàn tất", date: "04/05/2025" },
    {
      name: "Kỳ thi Java nâng cao",
      status: "Đang diễn ra",
      date: "03/05/2025",
    },
    { name: "Kỳ thi C++ cơ bản", status: "Chờ bắt đầu", date: "05/05/2025" },
  ];

  return (
    <div className="bg-white min-h-screen text-white p-6">
      {/* Tiêu đề */}
      <h1 className="text-black text-4xl font-bold mb-8">Quản lý Kỳ thi xAI 2025</h1>

      {/* Thống kê nhanh */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-xl font-semibold text-blue-400">
              {stat.title}
            </h2>
            <p className="text-3xl font-bold mt-2">{stat.value}</p>
            <p className="text-sm text-gray-400 mt-1">{stat.description}</p>
          </div>
        ))}
      </div>

      {/* Trạng thái cuộc thi gần đây */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Cuộc thi gần đây</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-700">
                <th className="p-3 text-left min-w-[200px]">Tên cuộc thi</th>
                <th className="p-3 text-left min-w-[150px]">Trạng thái</th>
                <th className="p-3 text-left min-w-[150px]">Ngày</th>
              </tr>
            </thead>
            <tbody>
              {recentMatches.map((match, index) => (
                <tr
                  key={index}
                  className="border-t border-gray-600 hover:bg-gray-700 transition-colors duration-200"
                >
                  <td className="p-3">{match.name}</td>
                  <td className="p-3">{match.status}</td>
                  <td className="p-3">{match.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* CSS Animation */}
      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fade-in {
            animation: fadeIn 0.5s ease-in-out;
          }
        `}
      </style>
    </div>
  );
};

export default DashboardPage;
