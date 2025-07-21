import React, { useState, useEffect } from "react";
import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";
import { Button } from "antd";

interface Participant {
  name: string;
  correctAnswers: number;
  answers: (boolean | null)[]; // true: đúng, false: sai, null: chưa trả lời
}

interface MatchInfo {
  name: string;
  content: string;
  totalQuestions: number;
  timeLeft: number; // thời gian còn lại (giây)
}

const MatchLeaderboard: React.FC = () => {
  // Mock dữ liệu
  const [matchInfo, setMatchInfo] = useState<MatchInfo>({
    name: "Kỳ thi Lập trình 2025",
    content: "Lập trình với các ngôn ngữ C++, Java",
    totalQuestions: 60, // 60 câu để kiểm tra chế độ mới
    timeLeft: 1535, // 25 phút 35 giây
  });

  const participants: Participant[] = [
    {
      name: "quocdung2603",
      correctAnswers: 7,
      answers: Array(60)
        .fill(null)
        .map((_, i) => (i % 3 === 0 ? true : i % 3 === 1 ? false : null)),
    },
    {
      name: "user2",
      correctAnswers: 5,
      answers: Array(60)
        .fill(null)
        .map((_, i) => (i % 4 === 0 ? true : i % 4 === 1 ? false : null)),
    },
    {
      name: "user3",
      correctAnswers: 3,
      answers: Array(60)
        .fill(null)
        .map((_, i) => (i % 5 === 0 ? true : i % 5 === 1 ? false : null)),
    },
  ];

  // Đếm ngược thời gian
  useEffect(() => {
    const timer = setInterval(() => {
      setMatchInfo((prev) => {
        if (prev.timeLeft <= 0) {
          clearInterval(timer);
          return prev;
        }
        return { ...prev, timeLeft: prev.timeLeft - 1 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  // Pagination state
  const QUESTIONS_PER_PAGE = 30;
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(matchInfo.totalQuestions / QUESTIONS_PER_PAGE);
  const startQuestion = currentPage * QUESTIONS_PER_PAGE;
  const endQuestion = Math.min(
    startQuestion + QUESTIONS_PER_PAGE,
    matchInfo.totalQuestions
  );
  const displayedQuestions = Array.from(
    { length: endQuestion - startQuestion },
    (_, i) => startQuestion + i
  );

  return (
    <div className="bg-gradient-to-br from-primary to-accent min-h-screen flex flex-col p-6 text-white animate-fade-in">
      {/* Thông tin cuộc thi */}
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
            <p className="text-sm text-gray-300">Thời gian còn lại</p>
            <p
              className={`text-lg font-bold ${
                matchInfo.timeLeft < 60
                  ? "text-danger animate-pulse"
                  : "text-white"
              }`}
            >
              {formatTime(matchInfo.timeLeft)}
            </p>
          </div>
        </div>
      </div>
      {/* Bảng xếp hạng */}
      <div className="bg-white p-8 rounded-2xl shadow-lg animate-fade-in text-gray-900 overflow-x-auto">
        <h2 className="text-heading-3 font-semibold mb-6 text-primary">
          Bảng xếp hạng
        </h2>
        <div className="w-full min-w-[900px]">
          <table className="w-full border-collapse table-auto">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-3 text-left min-w-[60px]">Hạng</th>
                <th className="p-3 text-left min-w-[150px]">Người chơi</th>
                <th className="p-3 text-center min-w-[100px]">Số câu đúng</th>
                {displayedQuestions.map((questionIndex) => (
                  <th
                    key={questionIndex}
                    className={`text-center transition-all duration-300 ${
                      matchInfo.totalQuestions >= 15
                        ? "min-w-[30px] px-1 text-sm"
                        : "min-w-[80px] px-3"
                    }`}
                  >
                    {matchInfo.totalQuestions >= 15
                      ? questionIndex + 1
                      : `Câu ${questionIndex + 1}`}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {participants.map((participant, index) => (
                <tr
                  key={index}
                  className={`border-t border-gray-300 hover:bg-accent/10 transition-colors duration-200 ${
                    index < 3
                      ? "font-bold bg-gradient-to-r from-yellow-100 to-accent/10"
                      : ""
                  }`}
                >
                  <td className="p-3 text-primary">{index + 1}</td>
                  <td className="p-3 flex items-center gap-2">
                    {index === 0 && <span className="text-2xl">🥇</span>}
                    {index === 1 && <span className="text-2xl">🥈</span>}
                    {index === 2 && <span className="text-2xl">🥉</span>}
                    {participant.name}
                  </td>
                  <td className="p-3 text-center text-accent">
                    {participant.correctAnswers}
                  </td>
                  {displayedQuestions.map((questionIndex) => (
                    <td
                      key={questionIndex}
                      className={`text-center transition-all duration-300 ${
                        matchInfo.totalQuestions >= 15
                          ? "min-w-[30px] px-1"
                          : "min-w-[80px] px-3"
                      }`}
                    >
                      {participant.answers[questionIndex] === true ? (
                        <span className="text-green-500 text-xl">✔️</span>
                      ) : participant.answers[questionIndex] === false ? (
                        <span className="text-danger text-xl">❌</span>
                      ) : (
                        <span className="text-gray-400">-</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Nút điều hướng (hiển thị khi số câu hỏi > 50) */}
        {matchInfo.totalQuestions > 50 && (
          <div className="flex justify-between items-center mt-6">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
              disabled={currentPage === 0}
              className="px-6 py-2 rounded-lg bg-secondary text-white font-semibold shadow hover:bg-primary transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent disabled:opacity-50"
            >
              Trước
            </button>
            <span className="text-lg font-semibold text-primary">
              Câu {startQuestion + 1} - {endQuestion} /{" "}
              {matchInfo.totalQuestions}
            </span>
            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1))
              }
              disabled={currentPage === totalPages - 1}
              className="px-6 py-2 rounded-lg bg-secondary text-white font-semibold shadow hover:bg-primary transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent disabled:opacity-50"
            >
              Tiếp
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MatchLeaderboard;
