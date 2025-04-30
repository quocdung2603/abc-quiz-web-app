import React, { useState } from "react";
import { Input, Select, Checkbox, Button } from "antd";

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

  // Xử lý thay đổi từ khóa
  const handleKeywordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  // Xử lý thay đổi số lượng
  const handleQuantityChange = (value: string) => {
    setQuantity(value);
  };

  // Xử lý thay đổi thời gian
  const handleTimeChange = (value: string) => {
    setTime(value);
  };

  // Xử lý thay đổi danh mục
  const handleCategoryChange = (category: string, checked: boolean) => {
    if (checked) {
      setSelectedCategories([...selectedCategories, category]);
    } else {
      setSelectedCategories(
        selectedCategories.filter((cat) => cat !== category)
      );
    }
  };

  // Xử lý khi bấm nút tìm kiếm
  const handleSearch = () => {
    onFilter({
      keyword,
      quantity,
      time,
      categories: selectedCategories,
    });
  };

  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-sm h-full">
      {/* Thanh tìm kiếm */}
      <Input
        placeholder="Ngôn ngữ, từ khóa..."
        value={keyword}
        onChange={handleKeywordChange}
        className="rounded p-2 border-gray-300"
      />

      {/* Dropdown chọn số lượng */}
      <Select
        value={quantity}
        onChange={handleQuantityChange}
        className="w-full mt-4"
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
        className="w-full mt-4"
        dropdownStyle={{ minWidth: "200px" }}
      >
        <Option value="Chọn thời gian làm bài">Chọn thời gian làm bài</Option>
        <Option value="10">10 phút</Option>
        <Option value="20">20 phút</Option>
        <Option value="50">50 phút</Option>
      </Select>

      {/* Checkbox danh mục */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold text-black">Loại câu hỏi</h3>
        <div className="mt-2 space-y-2">
          {categoriesList.map((category, index) => (
            <div key={index}>
              <Checkbox
                checked={selectedCategories.includes(category)}
                onChange={(e) =>
                  handleCategoryChange(category, e.target.checked)
                }
              >
                {category}
              </Checkbox>
            </div>
          ))}
        </div>
      </div>

      {/* Nút Tìm kiếm */}
      <Button
        className="mt-6 w-full bg-yellow-400 text-black border-none hover:bg-yellow-500"
        onClick={handleSearch}
      >
        Tìm kiếm đề thi
      </Button>
    </div>
  );
};

export default ExamFilter;
