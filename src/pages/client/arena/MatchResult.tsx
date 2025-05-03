import React from "react";

interface Participant {
  name: string;
  score: number; // Điểm đạt được
  rank: number;
}

interface MatchInfo {
  name: string;
  content: string;
  totalQuestions: number;
  duration: number; // Thời gian thi đấu (giây)
}

const MatchResult: React.FC = () => {
  // Mock dữ liệu
  const matchInfo: MatchInfo = {
    name: "Kỳ thi Lập trình 2025",
    content: "Lập trình với các ngôn ngữ C++, Java",
    totalQuestions: 60,
    duration: 1800, // 30 phút
  };

  const participants: Participant[] = [
    { name: "quocdung2603", score: 85, rank: 1 },
    { name: "user2", score: 72, rank: 2 },
    { name: "user3", score: 65, rank: 3 },
    { name: "user4", score: 58, rank: 4 },
    { name: "user5", score: 50, rank: 5 },
    { name: "user6", score: 45, rank: 6 },
  ];

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <div className="bg-gradient-to-br from-red-900 to-black min-h-screen flex flex-col p-6 text-white">
      {/* Thông tin trận đấu */}
      <div className="mb-8 p-6 bg-gray-800 rounded-lg shadow-lg animate-fade-in">
        <h1 className="text-3xl font-bold mb-4">{matchInfo.name}</h1>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-300">Nội dung thi</p>
            <p className="text-lg">{matchInfo.content}</p>
          </div>
          <div>
            <p className="text-sm text-gray-300">Số câu hỏi</p>
            <p className="text-lg">{matchInfo.totalQuestions}</p>
          </div>
          <div>
            <p className="text-sm text-gray-300">Thời gian thi đấu</p>
            <p className="text-lg">{formatTime(matchInfo.duration)}</p>
          </div>
        </div>
      </div>

      {/* Tiêu đề */}
      <h1 className="text-4xl font-bold text-center mb-10">Kết quả trận đấu</h1>

      {/* Bục trao giải cho 3 người đứng đầu */}
      <div className="flex justify-center items-end mb-12 space-x-8">
        {/* Hạng 2 (trái) */}
        <div className="flex flex-col items-center">
          <p className="text-xl font-semibold mb-2">{participants[1].name}</p>
          <div className="bg-gray-800 p-4 rounded-lg shadow-lg h-[150px] w-[120px] flex flex-col items-center justify-center transition-all duration-300 hover:shadow-xl">
            <p className="text-2xl font-semibold text-yellow-400">Hạng 2</p>
            <p className="text-lg">Điểm: {participants[1].score}</p>
          </div>
        </div>

        {/* Hạng 1 (giữa, cao nhất) */}
        <div className="flex flex-col items-center">
          <p className="text-2xl font-bold mb-2">{participants[0].name}</p>
          <div className="bg-gray-800 p-4 rounded-lg shadow-lg h-[200px] w-[120px] flex flex-col items-center justify-center transition-all duration-300 hover:shadow-xl">
            <p className="text-3xl font-bold text-yellow-400">Hạng 1</p>
            <p className="text-xl">Điểm: {participants[0].score}</p>
          </div>
        </div>

        {/* Hạng 3 (phải) */}
        <div className="flex flex-col items-center">
          <p className="text-xl font-semibold mb-2">{participants[2].name}</p>
          <div className="bg-gray-800 p-4 rounded-lg shadow-lg h-[120px] w-[120px] flex flex-col items-center justify-center transition-all duration-300 hover:shadow-xl">
            <p className="text-2xl font-semibold text-yellow-400">Hạng 3</p>
            <p className="text-lg">Điểm: {participants[2].score}</p>
          </div>
        </div>
      </div>

      {/* Bảng cho các hạng từ 4 trở đi */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Xếp hạng còn lại</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-700">
                <th className="p-3 text-left min-w-[60px]">Hạng</th>
                <th className="p-3 text-left min-w-[150px]">Người chơi</th>
                <th className="p-3 text-center min-w-[100px]">Điểm</th>
              </tr>
            </thead>
            <tbody>
              {participants.slice(3).map((participant, index) => (
                <tr
                  key={index}
                  className="border-t border-gray-600 hover:bg-gray-700 transition-colors duration-200"
                >
                  <td className="p-3">{participant.rank}</td>
                  <td className="p-3">{participant.name}</td>
                  <td className="p-3 text-center">{participant.score}</td>
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

export default MatchResult;