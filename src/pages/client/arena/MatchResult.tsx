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
    <div className="bg-gradient-to-br from-primary to-accent min-h-screen flex flex-col p-6 text-white animate-fade-in">
      {/* Thông tin trận đấu */}
      <div className="mb-8 p-8 bg-gray-900 rounded-2xl shadow-neon border-b-4 border-accent animate-fade-in">
        <h1 className="text-heading-2 font-bold mb-4 bg-gradient-to-r from-yellow-400 to-accent bg-clip-text text-transparent drop-shadow-neon">
          {matchInfo.name}
        </h1>
        <div className="grid grid-cols-2 gap-8">
          <div>
            <p className="text-sm text-gray-300">Nội dung thi</p>
            <p className="text-lg font-bold text-primary">
              {matchInfo.content}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-300">Số câu hỏi</p>
            <p className="text-lg font-bold text-accent">
              {matchInfo.totalQuestions}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-300">Thời gian thi đấu</p>
            <p className="text-lg font-bold text-secondary">
              {formatTime(matchInfo.duration)}
            </p>
          </div>
        </div>
      </div>
      {/* Tiêu đề */}
      <h1 className="text-heading-1 font-bold text-center mb-10 bg-gradient-to-r from-yellow-400 to-accent bg-clip-text text-transparent drop-shadow-neon">
        Kết quả trận đấu
      </h1>
      {/* Podium top 3 */}
      <div className="flex flex-col md:flex-row justify-center items-end mb-12 gap-8">
        {/* Hạng 2 (trái) */}
        <div className="flex flex-col items-center">
          <p className="text-xl font-semibold mb-2 text-accent">
            {participants[1].name}
          </p>
          <div className="bg-white p-6 rounded-2xl shadow-lg h-[150px] w-[120px] flex flex-col items-center justify-center transition-all duration-300 hover:shadow-neon border-2 border-accent">
            <p className="text-2xl font-semibold text-yellow-400">🥈 Hạng 2</p>
            <p className="text-lg text-primary">
              Điểm: {participants[1].score}
            </p>
          </div>
        </div>
        {/* Hạng 1 (giữa, cao nhất) */}
        <div className="flex flex-col items-center">
          <p className="text-2xl font-bold mb-2 text-primary">
            {participants[0].name}
          </p>
          <div className="bg-white p-8 rounded-2xl shadow-lg h-[200px] w-[140px] flex flex-col items-center justify-center transition-all duration-300 hover:shadow-neon border-4 border-yellow-400">
            <p className="text-3xl font-bold text-yellow-400">🥇 Hạng 1</p>
            <p className="text-xl text-accent">Điểm: {participants[0].score}</p>
          </div>
        </div>
        {/* Hạng 3 (phải) */}
        <div className="flex flex-col items-center">
          <p className="text-xl font-semibold mb-2 text-secondary">
            {participants[2].name}
          </p>
          <div className="bg-white p-4 rounded-2xl shadow-lg h-[120px] w-[120px] flex flex-col items-center justify-center transition-all duration-300 hover:shadow-neon border-2 border-secondary">
            <p className="text-2xl font-semibold text-yellow-400">🥉 Hạng 3</p>
            <p className="text-lg text-primary">
              Điểm: {participants[2].score}
            </p>
          </div>
        </div>
      </div>
      {/* Bảng cho các hạng từ 4 trở đi */}
      <div className="bg-white p-8 rounded-2xl shadow-lg animate-fade-in text-gray-900 overflow-x-auto">
        <h2 className="text-heading-3 font-semibold mb-4 text-primary">
          Xếp hạng còn lại
        </h2>
        <table className="w-full border-collapse min-w-[400px]">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-3 text-left min-w-[60px]">Hạng</th>
              <th className="p-3 text-left min-w-[150px]">Người chơi</th>
              <th className="p-3 text-center min-w-[100px]">Điểm</th>
            </tr>
          </thead>
          <tbody>
            {participants.slice(3).map((participant, index) => (
              <tr
                key={index}
                className="border-t border-gray-300 hover:bg-accent/10 transition-colors duration-200"
              >
                <td className="p-3 text-primary">{participant.rank}</td>
                <td className="p-3">{participant.name}</td>
                <td className="p-3 text-center text-accent">
                  {participant.score}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MatchResult;
