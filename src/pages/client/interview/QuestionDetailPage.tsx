import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { questionsByTopic } from "./mockData";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const levelColor = {
  easy: "text-green-500",
  medium: "text-yellow-500",
  hard: "text-red-500",
};

const QuestionDetailPage: React.FC = () => {
  const { topicId, questionId } = useParams<{
    topicId: string;
    questionId: string;
  }>();
  const navigate = useNavigate();

  if (!topicId || !questionId)
    return <div className="text-center py-10">Không tìm thấy câu hỏi.</div>;

  const questions = questionsByTopic[topicId] || [];
  const idx = questions.findIndex((q) => q.id === questionId);
  const question = questions[idx];

  if (!question)
    return <div className="text-center py-10">Không tìm thấy câu hỏi.</div>;

  const goTo = (offset: number) => {
    const newIdx = idx + offset;
    if (newIdx >= 0 && newIdx < questions.length) {
      navigate(`/interview-practice/${topicId}/${questions[newIdx].id}`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-6 px-2 md:px-5 animate-fade-in">
      <div className="max-w-2xl mx-auto">
        <button
          className="mb-4 px-4 py-1 rounded-full bg-gradient-to-r from-pink-300 to-blue-300 text-white font-semibold hover:from-pink-400 hover:to-blue-400 transition-all text-xs md:text-sm shadow"
          onClick={() => navigate("/interview-practice")}
          type="button"
        >
          ← Quay lại danh sách câu hỏi
        </button>
        <div className="bg-white/90 rounded-2xl shadow border border-blue-100 p-4 md:p-6 animate-fade-in-up">
          <div className="mb-2 flex items-center gap-2">
            <span className="font-semibold text-xs md:text-sm">Mức độ:</span>
            <span
              className={`font-bold px-2 py-0.5 rounded-full text-xs ${
                levelColor[question.level]
              } bg-blue-50`}
            >
              {question.level === "easy"
                ? "Dễ"
                : question.level === "medium"
                ? "Trung bình"
                : "Khó"}
            </span>
            {question.viewed && (
              <CheckCircleIcon
                className="w-4 h-4 text-green-500 ml-2"
                title="Đã xem"
              />
            )}
          </div>
          <div className="mb-4">
            <div className="font-semibold text-sm mb-1">Câu hỏi:</div>
            <div className="text-sm text-gray-800">{question.question}</div>
          </div>
          <div className="mb-4">
            <div className="font-semibold text-sm mb-1">Đáp án/Gợi ý:</div>
            <div className="text-sm text-gray-700">{question.answer}</div>
          </div>
          <div className="flex justify-between mt-6">
            <button
              className="px-4 py-1 rounded-full bg-gradient-to-r from-pink-300 to-blue-300 text-white font-semibold disabled:opacity-50 hover:from-pink-400 hover:to-blue-400 transition-all text-xs md:text-sm shadow"
              onClick={() => goTo(-1)}
              disabled={idx === 0}
            >
              Câu hỏi trước
            </button>
            <button
              className="px-4 py-1 rounded-full bg-gradient-to-r from-pink-300 to-blue-300 text-white font-semibold disabled:opacity-50 hover:from-pink-400 hover:to-blue-400 transition-all text-xs md:text-sm shadow"
              onClick={() => goTo(1)}
              disabled={idx === questions.length - 1}
            >
              Câu hỏi tiếp theo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionDetailPage;
