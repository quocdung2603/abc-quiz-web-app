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
    <div className="bg-gradient-to-br from-red-900 to-black min-h-screen flex flex-col p-6 text-white">
      {/* Thanh trạng thái trên cùng */}
      <div className="flex justify-between items-center mb-6 p-4 bg-gray-800 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold">
          Đấu trường: Kỳ thi Lập trình 2025
        </h1>
        <div className="flex items-center space-x-4">
          {!isSidebarVisible && (
            <span className={timeLeft < 60 ? "animate-pulse text-red-400" : ""}>
              Thời gian: {formatTime(timeLeft)}
            </span>
          )}
          <span>Số người: 3/5</span>
          <Button
            onClick={() => setIsSidebarVisible(!isSidebarVisible)}
            className="bg-gray-700 text-white border-none hover:bg-gray-600"
            icon={isSidebarVisible ? <EyeInvisibleOutlined /> : <EyeOutlined />}
          >
            {isSidebarVisible ? "Ẩn bảng điều khiển" : "Hiện bảng điều khiển"}
          </Button>
          <Button
            onClick={() => gotoLeaderBoard()}
            className="bg-yellow-600 text-white border-none hover:bg-yellow-700"
          >
            Xem bảng xếp hạng
          </Button>
        </div>
      </div>

      {/* Bố cục chính */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Vùng câu hỏi */}
        <div
          className={`flex flex-col ${
            isSidebarVisible ? "md:w-3/4" : "flex-grow"
          }`}
        >
          <div className="flex-grow w-full">
            {/* Header câu hỏi */}
            <div className="flex flex-col justify-between space-y-5 mb-6 animate-fade-in">
              <h2 className="text-xl font-semibold">{currentData.title}</h2>
              <div className="flex gap-2">
                {currentData.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-yellow-600 text-white text-xs px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="w-full px-10 border-t border-yellow-500"></div>
            </div>

            {/* Câu hỏi và đáp án */}
            <div className="mt-6 mx-20 animate-fade-in">
              <p className="text-lg font-medium">{currentData.content}</p>
              <div className="mt-4 flex flex-col gap-3 w-2/3">
                {currentData.options.map((option, idx) => {
                  const isSelected = selectedAnswer === idx + 1;
                  return (
                    <div
                      key={idx}
                      onClick={() => handleAnswerChange(idx + 1)}
                      className={`cursor-pointer p-3 rounded border transition-all duration-300 transform ${
                        isSelected
                          ? "bg-yellow-400 text-black border-yellow-500 animate-pulse scale-105"
                          : "bg-gray-800 text-gray-300 border-gray-600 hover:bg-gray-700 hover:border-yellow-500 hover:scale-102"
                      }`}
                    >
                      {option}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Nút hành động */}
            <div className="w-2/3 flex justify-between items-center bg-gray-900 px-4 py-3 rounded-lg mt-6 absolute bottom-10 left-20">
              <Button
                onClick={() => {
                  currentQuestion > 1 && goToQuestion(currentQuestion - 1);
                }}
                className="border-yellow-500 text-yellow-300 bg-gray-900 hover:border-yellow-400 hover:text-yellow-200"
              >
                Câu trước
              </Button>
              <div className="flex gap-2">
                <Button
                  onClick={() => setIsErrorModalOpen(true)}
                  className="bg-red-600 text-white border-none hover:bg-red-700"
                >
                  Báo lỗi
                </Button>
                <Button
                  onClick={() => toggleFlagQuestion(currentData.id)}
                  className={`border-none ${
                    flaggedQuestions.includes(currentData.id)
                      ? "bg-red-500 text-white animate-blink"
                      : "bg-yellow-600 text-white animate-blink"
                  } hover:bg-red-700`}
                >
                  {flaggedQuestions.includes(currentData.id)
                    ? "Bỏ đánh dấu"
                    : "Đánh dấu"}
                </Button>
                <Button
                  className="bg-green-600 text-white border-none hover:bg-green-700"
                  onClick={nextQuestion}
                  disabled={currentQuestion === mockData.length}
                >
                  Tiếp theo
                </Button>
              </div>
              <Button
                onClick={() => goToQuestion(currentQuestion + 1)}
                className="border-yellow-500 text-yellow-300 bg-gray-900 hover:border-yellow-400 hover:text-yellow-200"
              >
                Câu sau
              </Button>
            </div>
          </div>
        </div>

        {/* Vùng thông tin bên phải (list câu hỏi và thời gian) */}
        <div
          className={`md:w-1/4 transition-all duration-500 ease-in-out ${
            isSidebarVisible ? "" : "hidden"
          }`}
        >
          {isSidebarVisible && (
            <>
              {/* Đồng hồ */}
              <div className="flex flex-col items-center space-y-10">
                <div className="flex flex-col mr-auto space-y-4">
                  <p className="text-gray-300 text-sm">Loại câu hỏi</p>
                  <div className="w-full flex flex-row space-x-2">
                    {currentData.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="bg-yellow-600 text-white text-xs px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-gray-300 text-sm mr-auto">
                  Thời gian làm bài
                </p>
                <div
                  className={`w-32 h-32 flex items-center justify-center rounded-full border-4 border-yellow-500 ${
                    timeLeft < 60 ? "animate-pulse border-red-500" : ""
                  }`}
                >
                  <span className="text-2xl font-semibold text-white">
                    {formatTime(timeLeft)}
                  </span>
                </div>
              </div>

              {/* Số câu hỏi và lưới */}
              <div className="mt-6">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300 text-sm">Số câu hỏi</span>
                  <span className="text-white font-semibold">
                    {currentQuestion}/{mockData.length}
                  </span>
                </div>
                <div className="mt-4 grid grid-cols-5 gap-2">
                  {answers.map((answer, index) => {
                    const isCurrent = index + 1 === currentQuestion;
                    const isAnswered = answer !== null;
                    const isFlagged = flaggedQuestions.includes(index + 1);
                    return (
                      <div
                        key={index}
                        className={`w-8 h-8 flex items-center justify-center rounded cursor-pointer transition-all duration-300 transform hover:scale-110 ${
                          isCurrent
                            ? "bg-yellow-500 text-black"
                            : isFlagged
                            ? "bg-red-500 text-white animate-blink"
                            : isAnswered
                            ? "bg-green-500 text-white"
                            : "bg-gray-700 text-white"
                        }`}
                        onClick={() => goToQuestion(index + 1)}
                      >
                        {isFlagged ? <FlagOutlined /> : index + 1}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Nút kết thúc */}
              <div className="mt-6">
                <Button className="w-full bg-red-600 text-white hover:bg-red-700">
                  Kết thúc vòng
                </Button>
              </div>
            </>
          )}
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
