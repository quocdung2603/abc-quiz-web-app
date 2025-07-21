import { useState } from "react";
import { Progress, Button, Tag } from "antd";
import {
  ReloadOutlined,
  StarFilled,
  ShareAltOutlined,
  SwapOutlined,
} from "@ant-design/icons";

const mockQuestions = Array.from({ length: 20 }, (_, i) => {
  const correctAnswer = ["A", "B", "C", "D"][Math.floor(Math.random() * 4)];
  const userAnswer =
    Math.random() > 0.2
      ? ["A", "B", "C", "D"][Math.floor(Math.random() * 4)]
      : null;
  return {
    questionId: i + 1,
    questionText: `Câu hỏi ${i + 1}: Đây là nội dung câu hỏi mẫu.`,
    options: {
      A: "Đáp án A",
      B: "Đáp án B",
      C: "Đáp án C",
      D: "Đáp án D",
    },
    explanation: "Đây là giải thích tại sao câu này đúng hoặc sai.",
    correctAnswer,
    userAnswer,
  };
});

const ExamResultPage = () => {
  const [selectedQuestionId, setSelectedQuestionId] = useState<number | null>(
    null
  );

  const total = mockQuestions.length;
  const correctCount = mockQuestions.filter(
    (q) => q.userAnswer === q.correctAnswer
  ).length;
  const wrongCount = total - correctCount;
  const percentCorrect = Math.round((correctCount / total) * 100);

  const selectedQuestion = mockQuestions.find(
    (q) => q.questionId === selectedQuestionId
  );

  return (
    <div className="max-w-7xl mx-auto py-10 px-5 min-h-screen flex flex-col md:flex-row gap-8">
      {/* LEFT SIDE */}
      <div className="md:w-3/4 w-full flex flex-col items-start">
        <p className="text-sm mb-4 cursor-pointer hover:underline text-primary">
          ← Trang chủ
        </p>

        {!selectedQuestionId ? (
          <>
            <div className="flex flex-col items-center gap-2 w-full">
              <div className="w-32 h-32 rounded-full border-4 border-accent flex items-center justify-center text-accent text-xl font-bold bg-white shadow">
                <div>
                  <p>00 : 02</p>
                  <p className="text-sm font-normal mt-1 text-center text-gray-500">
                    phút : giây
                  </p>
                </div>
              </div>

              <p className="mt-4 text-lg text-secondary">Số câu hoàn thành</p>
              <h2 className="text-3xl font-bold text-primary">
                {total}/{total}
              </h2>

              <p className="mt-4 text-success text-base font-semibold">
                Chúc mừng! Bạn đã hoàn thành bài thi!
              </p>
            </div>

            <div className="mx-auto">
              <div className="bg-white border border-success mt-6 p-4 rounded-lg w-[300px] shadow">
                <div className="flex justify-between mb-1">
                  <span className="text-success font-semibold">
                    ✔ {correctCount} Câu
                  </span>
                  <span className="text-success font-semibold">
                    {percentCorrect}%
                  </span>
                </div>
                <Progress
                  percent={percentCorrect}
                  showInfo={false}
                  strokeColor="#22C55E"
                />

                <div className="flex justify-between mb-1 mt-2">
                  <span className="text-danger font-semibold">
                    ✘ {wrongCount} Câu
                  </span>
                  <span className="text-danger font-semibold">
                    {100 - percentCorrect}%
                  </span>
                </div>
                <Progress
                  percent={100 - percentCorrect}
                  showInfo={false}
                  strokeColor="#EF4444"
                />
              </div>
              <div className="mt-6 flex flex-col gap-3 w-[300px]">
                <Button
                  icon={<ReloadOutlined />}
                  className="bg-gradient-to-r from-primary to-accent text-white font-bold hover:scale-105 hover:shadow-lg border-none"
                >
                  Thi lại
                </Button>
                <Button
                  icon={<StarFilled />}
                  className="bg-secondary text-white font-bold hover:bg-primary border-none"
                >
                  Đánh giá đề
                </Button>
                <Button
                  icon={<SwapOutlined />}
                  className="bg-gray-200 text-gray-700 font-bold hover:bg-primary hover:text-white border-none"
                >
                  Luyện tập đề mới
                </Button>
                <Button
                  icon={<ShareAltOutlined />}
                  className="bg-gray-200 text-gray-700 font-bold hover:bg-primary hover:text-white border-none"
                >
                  Chia sẻ đề thi
                </Button>
              </div>
            </div>
          </>
        ) : (
          selectedQuestion && (
            <div className="w-full bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-bold mb-2 text-primary">
                {selectedQuestion.questionText}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {Object.entries(selectedQuestion.options).map(
                  ([key, value]) => {
                    const isCorrect = selectedQuestion.correctAnswer === key;
                    const isUserAnswer = selectedQuestion.userAnswer === key;
                    const isWrongChoice = isUserAnswer && !isCorrect;

                    return (
                      <div
                        key={key}
                        className={`p-3 rounded border text-sm font-medium transition-all
                          ${
                            isCorrect
                              ? "border-success bg-success/10 text-success"
                              : isWrongChoice
                              ? "border-danger bg-danger/10 text-danger"
                              : "border-gray-300 bg-gray-50 text-gray-700"
                          } ${
                          isUserAnswer ? "underline decoration-accent" : ""
                        }`}
                      >
                        <strong>{key}:</strong> {value}
                      </div>
                    );
                  }
                )}
              </div>
              {selectedQuestion.userAnswer !==
                selectedQuestion.correctAnswer && (
                <div className="mt-4 text-danger italic">
                  💡 Giải thích: {selectedQuestion.explanation}
                </div>
              )}
            </div>
          )
        )}
      </div>

      {/* RIGHT SIDE */}
      <div className="md:w-1/4 w-full bg-white p-4 rounded-lg shadow h-fit">
        <h3 className="text-sm mb-2 font-semibold text-primary">
          # Loại câu hỏi
        </h3>
        <Tag color="blue" className="mb-4">
          JavaScript
        </Tag>

        <h3 className="text-sm mb-2 font-semibold text-primary">
          📄 Chi tiết kết quả
        </h3>
        <div className="grid grid-cols-4 gap-2">
          <div
            onClick={() => setSelectedQuestionId(null)}
            className={`flex items-center justify-center p-2 rounded bg-gradient-to-r from-primary to-accent text-white cursor-pointer col-span-4 font-bold`}
          >
            📊 Xem thống kê tổng
          </div>
          {mockQuestions.map((q) => {
            const isCorrect = q.userAnswer === q.correctAnswer;
            const icon = isCorrect ? "✔" : "✘";
            const color = isCorrect ? "text-success" : "text-danger";
            const isActive = q.questionId === selectedQuestionId;

            return (
              <div
                key={q.questionId}
                onClick={() => setSelectedQuestionId(q.questionId)}
                className={`flex items-center justify-center gap-1 p-2 rounded cursor-pointer font-semibold text-sm border transition-all
                  ${
                    isActive
                      ? "bg-accent text-white border-accent"
                      : "bg-gray-100 text-gray-700 border-gray-200 hover:bg-primary hover:text-white"
                  } ${color}`}
              >
                {icon} <span>Câu {String(q.questionId).padStart(2, "0")}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ExamResultPage;
