import React, { useState, useEffect } from "react";
import { Button, Modal, Checkbox, Upload, Input } from "antd";
import { FlagOutlined } from "@ant-design/icons";

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

const ExamTestPage: React.FC = () => {
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

  //answer modal
  const [showExplanation, setShowExplanation] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  //flagging
  const [flaggedQuestions, setFlaggedQuestions] = useState<number[]>([]);

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

  return (
    <div className="bg-[#1C2526] min-h-screen flex flex-col p-6">
      <p className="text-sm mb-4 cursor-pointer hover:underline mr-auto text-white">
        ← Trang chủ
      </p>
      <div className="flex flex-col md:flex-row gap-6">
        {/* Bên trái */}
        <div className="md:w-3/4 flex flex-col">
          <div className="flex-grow w-full">
            {/* Header */}
            <div className="w-full flex flex-col justify-between space-y-5">
              <h1 className="text-xl font-semibold text-white">
                {currentData.title}
              </h1>
              <div className="mt-2 flex gap-2">
                {currentData.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-[#6B7280] text-white text-xs px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="w-full px-10 border border-white"></div>
            </div>

            {/* Câu hỏi */}
            <div className="mt-6 mx-20">
              <p className="text-lg font-medium text-white">
                {currentData.content}
              </p>
              <div className="mt-4 flex flex-col gap-3 w-2/3">
                {currentData.options.map((option, idx) => {
                  const isSelected = selectedAnswer === idx + 1;
                  return (
                    <div
                      key={idx}
                      onClick={() => handleAnswerChange(idx + 1)}
                      className={`cursor-pointer p-3 rounded border transition-colors duration-200
                        ${
                          isSelected
                            ? "bg-[#FFC107] text-black border-[#FFC107]"
                            : "bg-[#1C2526] text-[#D1D5DB] border-[#6B7280] hover:bg-[#374151] hover:border-[#D1D5DB]"
                        }`}
                    >
                      {option}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {showExplanation && (
            <div
              className={`absolute top-40 left-20 p-5 ${
                isExpanded ? "max-w-[1000px]" : "w-[400px]"
              } bg-[#2c2f33] text-white relative`}
            >
              <span className="text-yellow-400 font-semibold">
                💡 Giải thích đáp án
              </span>
              <div className="mt-2">
                <strong>JavaScript</strong> có thể được thực thi trên các hệ
                điều hành khác nhau, do đó chương trình được phát triển trên{" "}
                <strong>UNIX</strong> sẽ hoạt động hoàn toàn tốt trên{" "}
                <strong>windows</strong>.
              </div>
              <div
                className="absolute top-2 right-2 cursor-pointer"
                onClick={() => setIsExpanded((prev) => !prev)}
              >
                🔍
              </div>
            </div>
          )}

          {/* Phần dưới */}
          <div className="w-2/3 flex justify-between items-center bg-black px-2 py-4 rounded absolute bottom-10 left-20">
            <Button
              onClick={() => {
                currentQuestion > 1 && goToQuestion(currentQuestion - 1);
              }}
              className="border-[#6B7280] text-[#D1D5DB] bg-[#1C2526] hover:border-[#D1D5DB] hover:text-white"
            >
              {`Câu ${currentQuestion}`}
            </Button>
            <div className="flex gap-2">
              <Button
                onClick={() => setIsErrorModalOpen(true)}
                className="bg-[#6B7280] text-white border-none hover:bg-[#4B5563]"
              >
                Báo lỗi
              </Button>
              <Button
                onClick={() => toggleFlagQuestion(currentData.id)}
                className={`border-none ${
                  flaggedQuestions.includes(currentData.id)
                    ? "bg-red-500 text-white"
                    : "bg-[#6B7280] text-white"
                } hover:bg-red-600`}
              >
                {flaggedQuestions.includes(currentData.id)
                  ? "Bỏ đánh dấu"
                  : "Đánh dấu"}
              </Button>
              <Button
                onClick={() => setShowExplanation(!showExplanation)}
                className="bg-[#FFC107] text-black border-none hover:bg-[#F59E0B]"
              >
                Đáp án
              </Button>
              <Button
                className="bg-[#6B7280] text-white border-none hover:bg-[#4B5563]"
                onClick={nextQuestion}
                disabled={currentQuestion === mockData.length}
              >
                Tiếp theo
              </Button>
            </div>
            <Button
              onClick={() => goToQuestion(currentQuestion + 1)}
              className="border-[#6B7280] text-[#D1D5DB] bg-[#1C2526] hover:border-[#D1D5DB] hover:text-white"
            >
              {`Câu ${currentQuestion + 1}`}
            </Button>
          </div>
        </div>

        <Modal
          title="Gửi phản hồi về câu hỏi"
          open={isErrorModalOpen}
          onCancel={() => setIsErrorModalOpen(false)}
          onOk={() => {
            // Xử lý gửi phản hồi
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
          <Upload className="mt-2">
            <Button>Upload ảnh lỗi</Button>
          </Upload>
        </Modal>

        {/* Bên phải */}
        <div className="md:w-1/4">
          {/* Đồng hồ */}
          <div className="flex flex-col items-center space-y-10">
            <div className="flex flex-col mr-auto space-y-4">
              <p className="text-[#D1D5DB] text-sm">Loại câu hỏi</p>
              <div className="w-full flex flex-row space-x-2">
                {currentData.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-[#6B7280] text-white text-xs px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <p className="text-[#D1D5DB] text-sm mr-auto">Thời gian làm bài</p>
            <div className="w-32 h-32 flex items-center justify-center rounded-full border-4 border-[#FFC107]">
              <span className="text-2xl font-semibold text-white">
                {formatTime(timeLeft)}
              </span>
            </div>
          </div>

          {/* Số câu hỏi và lưới */}
          <div className="mt-6">
            <div className="flex items-center justify-between">
              <span className="text-[#D1D5DB] text-sm">Số câu hỏi</span>
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
                    className={`w-8 h-8 flex items-center justify-center rounded cursor-pointer ${
                      isCurrent
                        ? "bg-[#959fb1] text-white"
                        : isFlagged
                        ? "bg-yellow-400 text-black"
                        : isAnswered
                        ? "bg-[#e95353] text-white"
                        : "bg-[#343a41] text-white"
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
            <Button className="w-full border-[#6B7280] text-[#D1D5DB] bg-[#1C2526] hover:border-[#D1D5DB] hover:text-white">
              Kết thúc bài thi
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamTestPage;
