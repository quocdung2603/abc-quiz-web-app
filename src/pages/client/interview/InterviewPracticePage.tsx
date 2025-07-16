import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  majors,
  positions,
  topicsByMajorAndPosition,
  questionsByTopic,
} from "./mockData";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const levelColor = {
  easy: "text-green-500",
  medium: "text-yellow-500",
  hard: "text-red-500",
};

const PAGE_SIZE = 5;

const InterviewPracticePage: React.FC = () => {
  const [selectedMajor, setSelectedMajor] = useState("");
  const [selectedPosition, setSelectedPosition] = useState("");
  const [showTopics, setShowTopics] = useState(false);
  const [topics, setTopics] = useState<{ id: string; name: string }[]>([]);
  const [selectedTopic, setSelectedTopic] = useState<{
    id: string;
    name: string;
  } | null>(null);
  const [questions, setQuestions] = useState<
    {
      id: string;
      question: string;
      answer: string;
      level: "easy" | "medium" | "hard";
      viewed: boolean;
    }[]
  >([]);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  const handleFind = () => {
    setSelectedTopic(null);
    setQuestions([]);
    setPage(1);
    if (selectedMajor && selectedPosition) {
      const found =
        topicsByMajorAndPosition[selectedMajor]?.[selectedPosition] || [];
      setTopics(found);
      setShowTopics(true);
    } else {
      setTopics([]);
      setShowTopics(false);
    }
  };

  const handleSelectTopic = (topic: { id: string; name: string }) => {
    setSelectedTopic(topic);
    setQuestions(questionsByTopic[topic.id] || []);
    setPage(1);
  };

  // Phân trang
  const totalPage = Math.ceil(questions.length / PAGE_SIZE);
  const pagedQuestions = questions.slice(
    (page - 1) * PAGE_SIZE,
    page * PAGE_SIZE
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-6 px-2 md:px-5 animate-fade-in">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-xl md:text-2xl font-bold text-blue-900 mb-6 text-center tracking-tight">
          Ôn tập phỏng vấn
        </h1>
        {/* Thanh chọn ngành/vị trí */}
        <div className="flex flex-wrap items-center gap-2 mb-6 justify-center">
          <span className="text-xs md:text-sm font-medium text-blue-700">
            Ngành học
          </span>
          <select
            className="border border-blue-200 rounded-full px-2 py-1 text-xs md:text-sm focus:outline-none focus:ring-2 focus:ring-blue-200 bg-white/80 shadow-sm"
            value={selectedMajor}
            onChange={(e) => setSelectedMajor(e.target.value)}
          >
            <option value="">Chọn ngành</option>
            {majors.map((major) => (
              <option key={major.id} value={major.id}>
                {major.name}
              </option>
            ))}
          </select>
          <span className="text-xs md:text-sm font-medium text-blue-700">
            Vị trí phỏng vấn
          </span>
          <select
            className="border border-blue-200 rounded-full px-2 py-1 text-xs md:text-sm focus:outline-none focus:ring-2 focus:ring-blue-200 bg-white/80 shadow-sm"
            value={selectedPosition}
            onChange={(e) => setSelectedPosition(e.target.value)}
          >
            <option value="">Chọn vị trí</option>
            {positions.map((position) => (
              <option key={position.id} value={position.id}>
                {position.name}
              </option>
            ))}
          </select>
          <button
            className="bg-gradient-to-r from-pink-300 to-blue-300 text-white font-semibold px-4 py-1 rounded-full shadow hover:from-pink-400 hover:to-blue-400 hover:scale-105 hover:shadow-lg transition-all text-xs md:text-sm"
            onClick={handleFind}
            type="button"
          >
            Tìm
          </button>
        </div>

        {/* Danh sách chủ đề */}
        {showTopics && (
          <div className="mb-8">
            {topics.length === 0 ? (
              <div className="text-xs text-blue-500 text-center">
                Không tìm thấy chủ đề phù hợp.
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                {topics.map((topic) => (
                  <button
                    key={topic.id}
                    className={`border border-blue-100 rounded-xl bg-white/80 shadow px-2 py-2 text-xs md:text-sm text-blue-900 font-medium hover:bg-gradient-to-r hover:from-blue-100 hover:to-pink-100 hover:text-blue-700 hover:shadow transition-all focus:outline-none focus:ring-2 focus:ring-pink-200 ${
                      selectedTopic?.id === topic.id
                        ? "ring-2 ring-pink-300"
                        : ""
                    }`}
                    onClick={() => handleSelectTopic(topic)}
                    type="button"
                  >
                    {topic.name}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Danh sách câu hỏi dạng table */}
        {selectedTopic && (
          <div className="bg-white/90 rounded-2xl shadow border border-blue-100 p-3 md:p-5 overflow-x-auto animate-fade-in-up">
            <h3 className="text-base font-semibold text-pink-500 mb-3 text-center">
              Câu hỏi phỏng vấn: {selectedTopic.name}
            </h3>
            {questions.length === 0 ? (
              <div className="text-xs text-blue-500 text-center">
                Chưa có câu hỏi cho chủ đề này.
              </div>
            ) : (
              <>
                <table className="min-w-full text-xs md:text-sm">
                  <thead>
                    <tr className="bg-gradient-to-r from-blue-50 to-pink-50">
                      <th className="px-2 py-2 text-left font-semibold">#</th>
                      <th className="px-2 py-2 text-left font-semibold">
                        Câu hỏi
                      </th>
                      <th className="px-2 py-2 text-left font-semibold">
                        Mức độ
                      </th>
                      <th className="px-2 py-2 text-center font-semibold">
                        Đã xem
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {pagedQuestions.map((q, idx) => (
                      <tr
                        key={q.id}
                        className="border-b last:border-0 hover:bg-blue-50/60 cursor-pointer transition-all"
                        onClick={() =>
                          navigate(
                            `/interview-practice/${selectedTopic.id}/${q.id}`
                          )
                        }
                      >
                        <td className="px-2 py-2 w-8">
                          {(page - 1) * PAGE_SIZE + idx + 1}
                        </td>
                        <td className="px-2 py-2 max-w-xs whitespace-normal">
                          {q.question}
                        </td>
                        <td className={`px-2 py-2 font-semibold`}>
                          <span
                            className={`px-2 py-0.5 rounded-full text-xs font-bold ${
                              levelColor[q.level]
                            } bg-blue-50`}
                          >
                            {q.level === "easy"
                              ? "Dễ"
                              : q.level === "medium"
                              ? "Trung bình"
                              : "Khó"}
                          </span>
                        </td>
                        <td className="px-2 py-2 text-center">
                          {q.viewed && (
                            <CheckCircleIcon
                              className="w-4 h-4 inline text-green-500"
                              title="Đã xem"
                            />
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {/* Phân trang */}
                {totalPage > 1 && (
                  <div className="flex justify-center items-center gap-1 mt-3">
                    <button
                      className="px-3 py-1 rounded-full bg-pink-200 text-white text-xs font-semibold disabled:opacity-50 hover:bg-pink-300 transition"
                      onClick={() => setPage(page - 1)}
                      disabled={page === 1}
                    >
                      Trước
                    </button>
                    {Array.from({ length: totalPage }, (_, i) => (
                      <button
                        key={i}
                        className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                          page === i + 1
                            ? "bg-gradient-to-r from-pink-300 to-blue-300 text-white shadow"
                            : "bg-gray-100 text-blue-900 hover:bg-blue-100"
                        }`}
                        onClick={() => setPage(i + 1)}
                      >
                        {i + 1}
                      </button>
                    ))}
                    <button
                      className="px-3 py-1 rounded-full bg-pink-200 text-white text-xs font-semibold disabled:opacity-50 hover:bg-pink-300 transition"
                      onClick={() => setPage(page + 1)}
                      disabled={page === totalPage}
                    >
                      Tiếp
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default InterviewPracticePage;
