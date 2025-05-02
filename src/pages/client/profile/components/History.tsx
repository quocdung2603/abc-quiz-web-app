import React, { useState } from "react";
import { DeleteOutlined } from "@ant-design/icons";

const History: React.FC = () => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>(["Tất cả"]);

  const filters = [
    "Tất cả",
    "Khóa học",
    "Bài học",
    "Bài viết",
    "Câu hỏi",
    "Series",
  ];

  const historyItems = [
    {
      type: "Khóa học",
      title: "Lập trình website với ASP.Net MVC cơ bản",
      time: "khoảng 1 năm trước",
    },
    {
      type: "Khóa học",
      title: "Note - Tips - Trick - .Net",
      time: "khoảng 1 năm trước",
    },
    {
      type: "Bài học",
      title: "Thao tác với EXCEL trong C#",
      time: "khoảng 1 năm trước",
    },
  ];

  const handleFilterChange = (filter: string) => {
    if (filter === "Tất cả") {
      setSelectedFilters(["Tất cả"]);
    } else {
      let newFilters = selectedFilters.includes(filter)
        ? selectedFilters.filter((f) => f !== filter)
        : [...selectedFilters, filter];

      // Nếu bỏ chọn "Tất cả" hoặc chọn một filter khác, loại bỏ "Tất cả"
      if (selectedFilters.includes("Tất cả") && filter !== "Tất cả") {
        newFilters = newFilters.filter((f) => f !== "Tất cả");
      }

      // Nếu không có filter nào được chọn, mặc định chọn "Tất cả"
      if (newFilters.length === 0) {
        newFilters = ["Tất cả"];
      }

      setSelectedFilters(newFilters);
    }
  };

  const handleClearHistory = () => {
    // Logic xóa lịch sử (có thể gọi API hoặc cập nhật state)
    console.log("Xóa lịch sử");
  };

  // Lọc danh sách lịch sử dựa trên filter
  const filteredHistory = selectedFilters.includes("Tất cả")
    ? historyItems
    : historyItems.filter((item) => selectedFilters.includes(item.type));
  
  return (
    <div className="w-full p-10 flex flex-row space-x-10">
      {/* Bộ lọc bên trái */}
      <div className="w-1/4 bg-gray-200 flex flex-col pb-10">
        <h2 className="text-lg font-semibold text-center p-4 bg-gray-300">
          LỌC THEO
        </h2>
        <div className="space-y-2 py-2">
          {filters.map((filter, index) => (
            <label
              key={index}
              className={`flex items-center space-x-2 p-2 rounded ${
                selectedFilters.includes(filter) ? "bg-blue-200 " : ""
              }`}
            >
              <input
                type="radio"
                checked={selectedFilters.includes(filter)}
                onChange={() => handleFilterChange(filter)}
                className="form-checkbox h-5 w-5 text-blue-500"
              />
              <span className="text-gray-700">{filter}</span>
            </label>
          ))}
        </div>
        <button
          onClick={handleClearHistory}
          className="flex justify-center items-center space-x-2 text-red-500 hover:text-red-700"
        >
          <DeleteOutlined />
          <span>Xóa lịch sử</span>
        </button>
      </div>

      {/* Danh sách lịch sử bên phải */}
      <div className="w-3/4 bg-white p-6">
        <h2 className="text-lg font-semibold text-center p-4 bg-gray-300">
          LỊCH SỬ
        </h2>
        {filteredHistory.length > 0 ? (
          <table className="w-full mt-4 border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="text-left p-2 text-gray-700">Loại</th>
                <th className="text-left p-2 text-gray-700">Tiêu đề</th>
                <th className="text-left p-2 text-gray-700">Thời gian</th>
              </tr>
            </thead>
            <tbody>
              {filteredHistory.map((item, index) => (
                <tr key={index} className="border-b">
                  <td className="p-2 text-gray-600">{item.type}</td>
                  <td className="p-2 text-lg font-semibold text-gray-800">
                    {item.title}
                  </td>
                  <td className="p-2 text-gray-600">{item.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-gray-600">Không có lịch sử phù hợp với bộ lọc.</p>
        )}
      </div>
    </div>
  );
};

export default History;
