import React, { useState } from "react";
import { Select, Pagination } from "antd";
import ExamFilter from "../exam/components/ExamFilter";
import ResultCardItem from "./components/ResultCardItem";

const { Option } = Select;

interface QuizItem {
  image: string;
  title: string;
  questions: string;
  time: string;
  history: string;
  category: string[];
}

interface FilterValues {
  keyword: string;
  quantity: string;
  time: string;
  categories: string[];
}

const quizData: QuizItem[] = [
  {
    image: "https://picsum.photos/40/40?random=1",
    title:
      "20 Bài Tập Kiểm Tra, Rèn Luyện JavaScript Phần 4 (Câu hỏi và hướng dẫn chi tiết)",
    questions: "20",
    time: "20",
    history: "374",
    category: ["JavaScript"],
  },
  {
    image: "https://picsum.photos/40/40?random=2",
    title: "20 Bài Tập Về ES6 Và JavaScript Hiện Đại Phần 2",
    questions: "20",
    time: "30",
    history: "213",
    category: ["JavaScript", "JS-DOM"],
  },
  {
    image: "https://picsum.photos/40/40?random=3",
    title: "20 Bài Tập Về DOM Trong JavaScript",
    questions: "20",
    time: "45",
    history: "335",
    category: ["JS-DOM"],
  },
  {
    image: "https://picsum.photos/40/40?random=4",
    title: "Đề trắc nghiệm 500 câu python thực luyện",
    questions: "500",
    time: "30",
    history: "1326",
    category: ["Python"],
  },
  {
    image: "https://picsum.photos/40/40?random=5",
    title: "Đề trắc nghiệm 500 câu C++ thực luyện",
    questions: "500",
    time: "50",
    history: "2050",
    category: ["C++"],
  },
  {
    image: "https://picsum.photos/40/40?random=6",
    title: "20 Bài Tập Về ES6 Và JavaScript Hiện Đại",
    questions: "20",
    time: "30:00",
    history: "267",
    category: ["JavaScript"],
  },
  {
    image: "https://picsum.photos/40/40?random=7",
    title: "20 Bài Tập Về Mảng (Array) Trong JavaScript",
    questions: "20",
    time: "30",
    history: "491",
    category: ["Mảng"],
  },
  {
    image: "https://picsum.photos/40/40?random=8",
    title: "Bộ 20 câu hỏi MySQL cơ bản 3",
    questions: "20",
    time: "30",
    history: "227",
    category: ["MySQL"],
  },
  {
    image: "https://picsum.photos/40/40?random=9",
    title:
      "20 Bài Tập Kiểm Tra, Rèn Luyện JavaScript Phần 3 (Câu hỏi và hướng dẫn chi tiết)",
    questions: "20",
    time: "30",
    history: "89",
    category: ["JavaScript"],
  },
];

const ResultPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredData, setFilteredData] = useState<QuizItem[]>(quizData);
  const itemsPerPage = 6;

  // Hàm lọc dữ liệu
  const handleFilter = (values: FilterValues) => {
    const { keyword, quantity, time, categories } = values;

    let filtered = [...quizData];

    // Lọc theo từ khóa
    if (keyword) {
      filtered = filtered.filter(
        (quiz) =>
          quiz.title.toLowerCase().includes(keyword.toLowerCase()) ||
          quiz.category.some((cat) =>
            cat.toLowerCase().includes(keyword.toLowerCase())
          )
      );
    }

    // Lọc theo số lượng câu hỏi
    if (quantity !== "Chọn số lượng") {
      filtered = filtered.filter((quiz) => {
        const questionCount = parseInt(quiz.questions);
        return questionCount === parseInt(quantity);
      });
    }

    // Lọc theo thời gian
    if (time !== "Chọn thời gian làm bài") {
      filtered = filtered.filter((quiz) => {
        const [minutes] = quiz.time.split(":").map(Number);
        const selectedTime = parseInt(time);
        return minutes <= selectedTime;
      });
    }

    // Lọc theo danh mục
    if (categories.length > 0) {
      filtered = filtered.filter((quiz) =>
        quiz.category.some((cat) => categories.includes(cat))
      );
    }

    setFilteredData(filtered);
    setCurrentPage(1); // Reset về trang đầu tiên sau khi lọc
  };

  // Tính toán dữ liệu hiển thị trên trang hiện tại
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentQuizData = filteredData.slice(startIndex, endIndex);

  // Tổng số đề thi và số đề thi hiển thị
  const totalQuizzes = filteredData.length;
  const displayedQuizzes = currentQuizData.length;

  // Xử lý khi thay đổi trang
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6">
        {/* Sidebar: ExamFilter */}
        <div className="md:w-1/4">
          <ExamFilter onFilter={handleFilter} />
        </div>

        {/* Nội dung chính */}
        <div className="md:w-3/4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-black">
              Hiện tại {startIndex + 1}-{startIndex + displayedQuizzes}/
              {totalQuizzes} kết quả
            </h2>
            <Select
              defaultValue="Mới nhất"
              className="w-48"
              dropdownStyle={{ minWidth: "200px" }}
            >
              <Option value="Mới nhất">Mới nhất</Option>
              <Option value="Cũ nhất">Cũ nhất</Option>
              <Option value="Phổ biến nhất">Phổ biến nhất</Option>
            </Select>
          </div>

          {/* Danh sách đề thi */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentQuizData.map((quiz, index) => (
              <ResultCardItem
                key={index + 0}
                image={quiz.image}
                title={quiz.title}
                questions={quiz.questions}
                time={quiz.time}
                history={quiz.history}
                category={quiz.category}
              />
            ))}
          </div>

          {/* Phân trang */}
          <div className="mt-8 flex justify-center">
            <Pagination
              current={currentPage}
              total={totalQuizzes}
              pageSize={itemsPerPage}
              onChange={handlePageChange}
              showSizeChanger={false}
              className="custom-pagination"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultPage;
