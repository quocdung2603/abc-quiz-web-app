import React, { useState } from "react";
import { Input, Select, Button } from "antd";

const { Option } = Select;

interface FilterValues {
  keyword: string;
  quantity: string;
  time: string;
  categories: string[];
}

interface ExamFilterProps {
  onFilter: (values: FilterValues) => void;
}

const categoriesList = [
  "C++",
  "Python",
  "Cấu trúc dữ liệu (rèn nhanh)",
  "Toán tư",
  "Biến và kiểu dữ liệu",
  "Vòng lặp",
  "Mảng",
  "Hàm",
  "Con trỏ",
  "Lớp đối tượng sẵn",
  "Objects",
  "HTML",
  "CSS",
  "Java",
  "COOP",
  "JavaScript",
];

const ExamFilter: React.FC<ExamFilterProps> = ({ onFilter }) => {
  const [keyword, setKeyword] = useState("");
  const [quantity, setQuantity] = useState("Chọn số lượng");
  const [time, setTime] = useState("Chọn thời gian làm bài");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const handleKeywordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };
  const handleQuantityChange = (value: string) => {
    setQuantity(value);
  };
  const handleTimeChange = (value: string) => {
    setTime(value);
  };
  const handleCategoryToggle = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((cat) => cat !== category)
        : [...prev, category]
    );
  };
  const handleSearch = () => {
    onFilter({
      keyword,
      quantity,
      time,
      categories: selectedCategories,
    });
  };

  return (
    <div className="bg-white/90 rounded-2xl shadow-xl border border-gray-100 p-0 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-yellow-400 p-5 text-white text-center font-extrabold text-xl tracking-wide rounded-t-2xl mb-0">
        Bộ lọc đề thi
      </div>
      <div className="p-6 flex flex-col gap-5">
        {/* Thanh tìm kiếm */}
        <Input
          placeholder="Ngôn ngữ, từ khóa..."
          value={keyword}
          onChange={handleKeywordChange}
          className="rounded-lg px-4 py-2 border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition shadow-sm"
        />
        {/* Dropdown chọn số lượng */}
        <Select
          value={quantity}
          onChange={handleQuantityChange}
          className="w-full"
          dropdownStyle={{ minWidth: "200px" }}
        >
          <Option value="Chọn số lượng">Chọn số lượng</Option>
          <Option value="10">10 câu</Option>
          <Option value="20">20 câu</Option>
          <Option value="50">50 câu</Option>
        </Select>
        {/* Dropdown chọn thời gian */}
        <Select
          value={time}
          onChange={handleTimeChange}
          className="w-full"
          dropdownStyle={{ minWidth: "200px" }}
        >
          <Option value="Chọn thời gian làm bài">Chọn thời gian làm bài</Option>
          <Option value="10">10 phút</Option>
          <Option value="20">20 phút</Option>
          <Option value="50">50 phút</Option>
        </Select>
        {/* Danh mục tùy chỉnh */}
        <div>
          <h3 className="text-base font-bold text-gray-700 mb-2">
            Loại câu hỏi
          </h3>
          <div className="flex flex-wrap gap-2">
            {categoriesList.map((category, index) => (
              <div
                key={index}
                className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold shadow transition-all duration-150 cursor-pointer ${
                  selectedCategories.includes(category)
                    ? "bg-gradient-to-r from-blue-400 to-purple-400 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-700"
                }`}
                onClick={() => handleCategoryToggle(category)}
              >
                {category}
              </div>
            ))}
          </div>
        </div>
        {/* Nút Tìm kiếm */}
        <Button
          className="mt-2 w-full bg-gradient-to-r from-yellow-400 to-purple-400 text-white font-bold text-base rounded-full py-2 shadow-lg border-none hover:from-yellow-500 hover:to-purple-500 hover:scale-105 transition"
          onClick={handleSearch}
          size="large"
        >
          Tìm kiếm đề thi
        </Button>
      </div>
    </div>
  );
};

export default ExamFilter;