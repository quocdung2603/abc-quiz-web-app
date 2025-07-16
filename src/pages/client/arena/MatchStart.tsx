import React, { useState, useEffect } from "react";
import { Button, Modal, Checkbox, Input } from "antd";
import {
  FlagOutlined,
  EyeOutlined,
  EyeInvisibleOutlined,
} from "@ant-design/icons";

interface Question {
  id: number;
  title: string;
  content: string;
  options: string[];
  tags: string[];
}

// Mock data 20 câu hỏi
const mockData: Question[] = Array.from({ length: 20 }, (_, index) => ({
  id: index + 1,
  title: `Câu hỏi ${index + 1}`,
  content: `Nội dung câu hỏi ${
    index + 1
  }: Sự khác biệt của vòng lặp for trong JavaScript trên Unix là gì?`,
  options: [
    "Tùy thuộc vào trình duyệt",
    "Không có sự khác biệt",
    "Phụ thuộc vào hệ điều hành",
    "Liên quan đến môi trường Node.js",
  ],
  tags: ["JavaScript", "JS-DOM"],
}));

const MatchStart: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [timeLeft, setTimeLeft] = useState(25 * 60 + 59); // 25:57
  const [answers, setAnswers] = useState<(number | null)[]>(
    Array(mockData.length).fill(null)
  );
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  //error modal
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
  const [selectedErrors, setSelectedErrors] = useState<string[]>([]);
  const [errorDetails, setErrorDetails] = useState("");

  //flagging
  const [flaggedQuestions, setFlaggedQuestions] = useState<number[]>([]);

  // Toggle sidebar
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const handleAnswerChange = (value: number) => {
    setSelectedAnswer(value);
    const newAnswers = [...answers];
    newAnswers[currentQuestion - 1] = value;
    setAnswers(newAnswers);
  };

  const goToQuestion = (index: number) => {
    setCurrentQuestion(index);
    setSelectedAnswer(answers[index - 1]);
  };

  const nextQuestion = () => {
    if (currentQuestion < mockData.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(answers[currentQuestion]);
    }
  };

  const currentData = mockData[currentQuestion - 1];

  const toggleFlagQuestion = (questionId: number) => {
    setFlaggedQuestions((prev) =>
      prev.includes(questionId)
        ? prev.filter((id) => id !== questionId)
        : [...prev, questionId]
    );
  };

  const gotoLeaderBoard = () => {
    //go to leaderboard
  };

  return (
    <div className="bg-gradient-to-br from-primary to-accent min-h-screen flex flex-col p-6 text-white animate-fade-in">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 p-6 bg-gray-900 rounded-2xl shadow-neon border-b-4 border-accent animate-fade-in">
        <h1 className="text-heading-2 font-bold tracking-wide bg-gradient-to-r from-yellow-400 to-accent bg-clip-text text-transparent drop-shadow-neon">
          Đấu trường: Kỳ thi Lập trình 2025
        </h1>
        <div className="flex items-center space-x-6 mt-4 md:mt-0">
          <span
            className={`text-lg font-semibold ${
              timeLeft < 60 ? "animate-pulse text-danger" : "text-white"
            }`}
          >
            ⏰ Thời gian: {formatTime(timeLeft)}
          </span>
          <span className="text-lg font-semibold">👥 Số người: 3/5</span>
          <button
            onClick={() => setIsSidebarVisible(!isSidebarVisible)}
            className="px-4 py-2 rounded-lg bg-secondary text-white font-semibold shadow hover:bg-primary transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent"
          >
            {isSidebarVisible ? "Ẩn bảng điều khiển" : "Hiện bảng điều khiển"}
          </button>
          <button
            onClick={gotoLeaderBoard}
            className="px-4 py-2 rounded-lg bg-gradient-to-r from-yellow-400 to-accent text-white font-bold shadow hover:from-accent hover:to-yellow-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent"
          >
            Xem bảng xếp hạng
          </button>
        </div>
      </div>
      {/* Main layout */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Question area */}
        <div
          className={`flex flex-col flex-grow ${
            isSidebarVisible ? "md:w-3/4" : "w-full"
          }`}
        >
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 animate-fade-in text-gray-900 relative">
            {/* Header câu hỏi */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
              <h2 className="text-heading-3 font-bold text-primary">
                {currentData.title}
              </h2>
              <div className="flex gap-2 flex-wrap">
                {currentData.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-gradient-to-r from-yellow-400 to-accent text-white text-xs px-3 py-1 rounded-full font-semibold shadow-neon"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="border-t border-accent mb-6"></div>
            {/* Nội dung câu hỏi */}
            <p className="text-lg font-medium mb-6">{currentData.content}</p>
            {/* Đáp án */}
            <div className="flex flex-col gap-4 w-full md:w-2/3 mx-auto">
              {currentData.options.map((option, idx) => {
                const isSelected = selectedAnswer === idx + 1;
                return (
                  <div
                    key={idx}
                    onClick={() => handleAnswerChange(idx + 1)}
                    className={`cursor-pointer p-4 rounded-xl border-2 transition-all duration-300 font-semibold text-lg shadow-md ${
                      isSelected
                        ? "bg-gradient-to-r from-yellow-400 to-accent text-white border-yellow-400 scale-105 animate-pulse"
                        : "bg-gray-100 text-gray-800 border-gray-300 hover:bg-accent hover:text-white hover:border-accent hover:scale-102"
                    }`}
                  >
                    {option}
                  </div>
                );
              })}
            </div>
            {/* Nút hành động */}
            <div className="w-full md:w-2/3 flex justify-between items-center bg-gray-50 px-4 py-3 rounded-xl mt-8 absolute left-0 right-0 mx-auto bottom-0 md:static">
              <button
                onClick={() => {
                  currentQuestion > 1 && goToQuestion(currentQuestion - 1);
                }}
                className="px-6 py-2 rounded-lg bg-secondary text-white font-semibold shadow hover:bg-primary transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent"
              >
                Câu trước
              </button>
              <div className="flex gap-2">
                <button
                  onClick={() => setIsErrorModalOpen(true)}
                  className="px-4 py-2 rounded-lg bg-danger text-white font-semibold shadow hover:bg-red-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-danger"
                >
                  Báo lỗi
                </button>
                <button
                  onClick={() => toggleFlagQuestion(currentData.id)}
                  className={`px-4 py-2 rounded-lg font-semibold shadow focus:outline-none focus:ring-2 focus:ring-accent ${
                    flaggedQuestions.includes(currentData.id)
                      ? "bg-danger text-white animate-blink"
                      : "bg-accent text-white animate-blink"
                  }`}
                >
                  {flaggedQuestions.includes(currentData.id)
                    ? "Bỏ đánh dấu"
                    : "Đánh dấu"}
                </button>
                <button
                  className="px-4 py-2 rounded-lg bg-success text-white font-semibold shadow hover:bg-green-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-success"
                  onClick={nextQuestion}
                  disabled={currentQuestion === mockData.length}
                >
                  Tiếp theo
                </button>
              </div>
              <button
                onClick={() => goToQuestion(currentQuestion + 1)}
                className="px-6 py-2 rounded-lg bg-secondary text-white font-semibold shadow hover:bg-primary transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent"
              >
                Câu sau
              </button>
            </div>
          </div>
        </div>
        {/* Sidebar */}
        <div
          className={`md:w-1/4 transition-all duration-500 ease-in-out ${
            isSidebarVisible ? "" : "hidden"
          }`}
        >
          {isSidebarVisible && (
            <div className="flex flex-col items-center gap-8 bg-white rounded-2xl shadow-lg p-6 animate-fade-in text-gray-900">
              {/* Đồng hồ */}
              <div className="flex flex-col items-center gap-4">
                <span className="text-sm text-gray-500">Thời gian làm bài</span>
                <div
                  className={`w-32 h-32 flex items-center justify-center rounded-full border-8 border-accent bg-gray-50 text-3xl font-bold text-primary animate-pulse`}
                >
                  {formatTime(timeLeft)}
                </div>
              </div>
              {/* Danh sách câu hỏi */}
              <div className="w-full">
                <span className="block text-sm text-gray-500 mb-2">
                  Danh sách câu hỏi
                </span>
                <div className="grid grid-cols-5 gap-2">
                  {mockData.map((q, idx) => (
                    <button
                      key={q.id}
                      onClick={() => goToQuestion(idx + 1)}
                      className={`w-10 h-10 rounded-full font-bold text-base shadow-md border-2 transition-all duration-200 ${
                        answers[idx] !== null
                          ? "bg-success text-white border-success"
                          : flaggedQuestions.includes(q.id)
                          ? "bg-danger text-white border-danger animate-blink"
                          : "bg-gray-200 text-gray-700 border-gray-300 hover:bg-accent hover:text-white hover:border-accent"
                      } ${
                        currentQuestion === idx + 1 ? "ring-4 ring-accent" : ""
                      }`}
                    >
                      {idx + 1}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Modal báo lỗi */}
      <Modal
        title="Gửi phản hồi về câu hỏi"
        open={isErrorModalOpen}
        onCancel={() => setIsErrorModalOpen(false)}
        onOk={() => {
          console.log(selectedErrors, errorDetails);
          setIsErrorModalOpen(false);
        }}
        okText="Gửi"
        cancelText="Hủy"
      >
        <Checkbox.Group
          onChange={(checked) => setSelectedErrors(checked as string[])}
          className="flex flex-col gap-2"
        >
          <Checkbox value="Lỗi chính tả">Lỗi chính tả</Checkbox>
          <Checkbox value="Sai nội dung">Sai nội dung</Checkbox>
          <Checkbox value="Sai hình ảnh">Sai hình ảnh</Checkbox>
          <Checkbox value="Sai câu trả lời">Sai câu trả lời</Checkbox>
          <Checkbox value="Sai đáp án">Sai đáp án</Checkbox>
          <Checkbox value="Lỗi khác">Lỗi khác</Checkbox>
        </Checkbox.Group>
        <Input.TextArea
          placeholder="Chi tiết lỗi..."
          className="mt-3"
          rows={4}
          onChange={(e) => setErrorDetails(e.target.value)}
        />
      </Modal>

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
          @keyframes blink {
            0%, 100% {
              opacity: 1;
            }
            50% {
              opacity: 0.5;
            }
          }
          .animate-blink {
            animation: blink 1s infinite;
          }
        `}
      </style>
    </div>
  );
};

export default MatchStart;
