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
    <div className="max-w-7xl mx-auto py-10 px-5 min-h-screen bg-gray-50">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Box câu hỏi */}
        <div className="md:w-3/4 w-full">
          <div className="bg-white rounded-lg shadow p-6 mb-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
              <h1 className="text-xl font-bold text-primary">
                {currentData.title}
              </h1>
              <div className="flex items-center gap-2 text-gray-500 text-sm">
                <span>
                  Thời gian còn lại:{" "}
                  <span className="font-semibold text-accent">
                    {formatTime(timeLeft)}
                  </span>
                </span>
                <span>|</span>
                <span>
                  Câu {currentQuestion}/{mockData.length}
                </span>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              {currentData.tags.map((tag, i) => (
                <span
                  key={i}
                  className="bg-accent text-white text-xs px-2 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="mb-6">
              <p className="text-base font-medium text-gray-800 mb-4">
                {currentData.content}
              </p>
              <div className="flex flex-col gap-3">
                {currentData.options.map((option, idx) => {
                  const isSelected = selectedAnswer === idx + 1;
                  return (
                    <div
                      key={idx}
                      onClick={() => handleAnswerChange(idx + 1)}
                      className={`cursor-pointer p-3 rounded border transition-all duration-200 text-sm font-medium
                        ${
                          isSelected
                            ? "bg-gradient-to-r from-primary to-accent text-white border-primary shadow"
                            : "bg-gray-50 text-gray-700 border-gray-200 hover:bg-primary/10 hover:border-primary"
                        }`}
                    >
                      {option}
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              <Button
                onClick={() => setShowExplanation(!showExplanation)}
                className="bg-gradient-to-r from-primary to-accent text-white font-semibold px-4 py-1 rounded shadow hover:scale-105 hover:shadow-lg border-none text-sm"
              >
                Đáp án/Giải thích
              </Button>
              <Button
                onClick={() => setIsErrorModalOpen(true)}
                className="bg-secondary text-white font-semibold px-4 py-1 rounded shadow hover:bg-primary border-none text-sm"
              >
                Báo lỗi
              </Button>
              <Button
                onClick={() => toggleFlagQuestion(currentData.id)}
                className={`font-semibold px-4 py-1 rounded shadow border-none text-sm ${
                  flaggedQuestions.includes(currentData.id)
                    ? "bg-red-500 text-white"
                    : "bg-gray-300 text-gray-700 hover:bg-primary hover:text-white"
                }`}
              >
                {flaggedQuestions.includes(currentData.id)
                  ? "Bỏ đánh dấu"
                  : "Đánh dấu"}
              </Button>
            </div>
            {showExplanation && (
              <div
                className={`mt-4 bg-primary/10 border-l-4 border-primary p-4 rounded-lg text-gray-800 relative`}
              >
                <span className="text-accent font-semibold block mb-2">
                  💡 Giải thích đáp án
                </span>
                <div>
                  <strong>JavaScript</strong> có thể được thực thi trên các hệ
                  điều hành khác nhau, do đó chương trình được phát triển trên{" "}
                  <strong>UNIX</strong> sẽ hoạt động hoàn toàn tốt trên{" "}
                  <strong>windows</strong>.
                </div>
                <button
                  className="absolute top-2 right-2 text-primary hover:text-accent"
                  onClick={() => setShowExplanation(false)}
                >
                  ✕
                </button>
              </div>
            )}
            <div className="flex justify-between items-center mt-8">
              <Button
                onClick={() =>
                  currentQuestion > 1 && goToQuestion(currentQuestion - 1)
                }
                className="bg-gray-200 text-gray-700 font-semibold px-4 py-1 rounded shadow hover:bg-primary hover:text-white border-none text-sm"
                disabled={currentQuestion === 1}
              >
                ← Câu trước
              </Button>
              <Button
                onClick={nextQuestion}
                className="bg-gradient-to-r from-primary to-accent text-white font-semibold px-4 py-1 rounded shadow hover:scale-105 hover:shadow-lg border-none text-sm"
                disabled={currentQuestion === mockData.length}
              >
                Câu tiếp theo →
              </Button>
            </div>
          </div>
        </div>
        {/* Thanh điều hướng câu hỏi */}
        <div className="md:w-1/4 w-full">
          <div className="bg-white rounded-lg shadow p-4 sticky top-24">
            <h3 className="text-base font-semibold text-primary mb-3">
              Chuyển nhanh câu hỏi
            </h3>
            <div className="grid grid-cols-5 gap-2">
              {mockData.map((q, idx) => (
                <button
                  key={q.id}
                  className={`w-8 h-8 rounded-full font-semibold text-sm border transition-all
                    ${
                      currentQuestion === q.id
                        ? "bg-primary text-white border-primary"
                        : "bg-gray-100 text-gray-700 border-gray-200 hover:bg-primary hover:text-white"
                    }`}
                  onClick={() => goToQuestion(q.id)}
                >
                  {q.id}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Modal báo lỗi */}
      <Modal
        title="Gửi phản hồi về câu hỏi"
        open={isErrorModalOpen}
        onCancel={() => setIsErrorModalOpen(false)}
        onOk={() => {
          // Xử lý gửi phản hồi
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
          <Button>Tải lên hình ảnh minh họa (nếu có)</Button>
        </Upload>
      </Modal>
    </div>
  );
};

export default ExamTestPage;
