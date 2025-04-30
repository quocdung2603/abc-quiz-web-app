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
    <div className="bg-[#1C2526] w-full min-h-screen flex flex-row gap-6 p-6 text-white">
      {/* LEFT SIDE */}
      <div className="w-3/4 flex flex-col items-start">
        <p className="text-sm mb-4 cursor-pointer hover:underline">
          ← Trang chủ
        </p>

        {!selectedQuestionId ? (
          <>
            <div className="flex flex-col items-center gap-2 w-full">
              <div className="w-32 h-32 rounded-full border-4 border-yellow-400 flex items-center justify-center text-yellow-400 text-xl font-bold">
                <div>
                  <p>00 : 02</p>
                  <p className="text-sm font-normal mt-1 text-center">
                    phút : giây
                  </p>
                </div>
              </div>

              <p className="mt-4 text-lg">Số câu hoàn thành</p>
              <h2 className="text-3xl font-bold">
                {total}/{total}
              </h2>

              <p className="mt-4 text-green-300 text-base">
                Chúc mừng! Bạn đã hoàn thành bài thi!
              </p>
            </div>

            <div className="mx-auto">
              <div className="bg-[#1C1F24] border border-yellow-500 mt-6 p-4 rounded-lg w-[300px]">
                <div className="flex justify-between mb-1">
                  <span className="text-green-400">✔ {correctCount} Câu</span>
                  <span>{percentCorrect}%</span>
                </div>
                <Progress
                  percent={percentCorrect}
                  showInfo={false}
                  strokeColor="#22C55E"
                />

                <div className="flex justify-between mb-1 mt-2">
                  <span className="text-red-400">✘ {wrongCount} Câu</span>
                  <span>{100 - percentCorrect}%</span>
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
                  className="bg-yellow-500 text-black font-bold hover:bg-yellow-400"
                >
                  Thi lại
                </Button>
                <Button
                  icon={<StarFilled />}
                  className="bg-black text-white font-bold hover:bg-gray-800"
                >
                  Đánh giá đề
                </Button>
                <Button
                  icon={<SwapOutlined />}
                  className="bg-[#2E2E2E] text-white border-white"
                >
                  Luyện tập đề mới
                </Button>
                <Button
                  icon={<ShareAltOutlined />}
                  className="bg-[#2E2E2E] text-white border-white"
                >
                  Chia sẻ đề thi
                </Button>
              </div>
            </div>
          </>
        ) : (
          selectedQuestion && (
            <div className="w-full">
              <h2 className="text-lg font-bold mb-2">
                {selectedQuestion.questionText}
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(selectedQuestion.options).map(
                  ([key, value]) => {
                    const isCorrect = selectedQuestion.correctAnswer === key;
                    const isUserAnswer = selectedQuestion.userAnswer === key;
                    const isWrongChoice = isUserAnswer && !isCorrect;

                    return (
                      <div
                        key={key}
                        className={`p-3 rounded border text-sm ${
                          isCorrect
                            ? "border-green-500 bg-green-800"
                            : isWrongChoice
                            ? "border-red-500 bg-red-800"
                            : "border-gray-500 bg-gray-700"
                        } ${
                          isUserAnswer ? "underline decoration-yellow-300" : ""
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
                <div className="mt-4 text-red-300 italic">
                  💡 Giải thích: {selectedQuestion.explanation}
                </div>
              )}
            </div>
          )
        )}
      </div>

      {/* RIGHT SIDE */}
      <div className="w-1/4 bg-[#111416] p-4 rounded-xl">
        <h3 className="text-sm mb-2 font-semibold"># Loại câu hỏi</h3>
        <Tag color="blue" className="mb-4">
          JavaScript
        </Tag>

        <h3 className="text-sm mb-2 font-semibold">📄 Chi tiết kết quả</h3>
        <div className="grid grid-cols-4 gap-2">
          <div
            onClick={() => setSelectedQuestionId(null)}
            className={`flex items-center justify-center p-2 rounded bg-yellow-500 text-black cursor-pointer col-span-4 font-bold`}
          >
            📊 Xem thống kê tổng
          </div>
          {mockQuestions.map((q) => {
            const isCorrect = q.userAnswer === q.correctAnswer;
            const icon = isCorrect ? "✔" : "✘";
            const color = isCorrect ? "text-green-400" : "text-red-400";
            const isActive = q.questionId === selectedQuestionId;

            return (
              <div
                key={q.questionId}
                onClick={() => setSelectedQuestionId(q.questionId)}
                className={`flex items-center justify-center gap-1 p-2 rounded cursor-pointer ${
                  isActive ? "bg-yellow-600" : "bg-[#959fb1]"
                } ${color}`}
              >
                {icon}{" "}
                <span className="text-white">
                  Câu {String(q.questionId).padStart(2, "0")}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ExamResultPage;
