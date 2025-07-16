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
      if (selectedFilters.includes("Tất cả") && filter !== "Tất cả") {
        newFilters = newFilters.filter((f) => f !== "Tất cả");
      }
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

  const filteredHistory = selectedFilters.includes("Tất cả")
    ? historyItems
    : historyItems.filter((item) => selectedFilters.includes(item.type));

  // Badge color by type
  const badgeColor = (type: string) => {
    switch (type) {
      case "Khóa học":
        return "bg-teal-400/90 text-white";
      case "Bài học":
        return "bg-blue-400/90 text-white";
      case "Bài viết":
        return "bg-green-400/90 text-white";
      case "Câu hỏi":
        return "bg-purple-400/90 text-white";
      case "Series":
        return "bg-yellow-300/90 text-gray-900";
      default:
        return "bg-gray-200 text-gray-700";
    }
  };

  return (
    <div className="w-full flex flex-col md:flex-row gap-4 p-3 md:p-5">
      {/* Filter controls */}
      <div className="md:w-1/4 w-full bg-white/90 rounded-xl shadow border border-gray-100 flex flex-col pb-6">
        <h2 className="text-base font-bold text-center p-3 bg-gradient-to-r from-blue-100 to-purple-100 rounded-t-xl tracking-wide">
          LỌC THEO
        </h2>
        <div className="flex flex-wrap gap-1 px-2 py-2 justify-center">
          {filters.map((filter, index) => (
            <button
              key={index}
              onClick={() => handleFilterChange(filter)}
              className={`px-3 py-1 rounded-full font-semibold text-xs transition-all duration-150 border focus:outline-none ${
                selectedFilters.includes(filter)
                  ? "bg-gradient-to-r from-blue-400 to-purple-400 text-white shadow"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-blue-50"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
        <button
          onClick={handleClearHistory}
          className="flex items-center justify-center gap-1 text-red-500 hover:text-red-700 font-semibold mt-2 mx-auto text-xs"
        >
          <DeleteOutlined />
          <span>Xóa lịch sử</span>
        </button>
      </div>
      {/* History list/table */}
      <div className="flex-1 bg-white/90 rounded-xl shadow border border-gray-100 p-3">
        <h2 className="text-base font-bold text-center p-3 bg-gradient-to-r from-blue-100 to-purple-100 rounded-t-xl tracking-wide">
          LỊCH SỬ
        </h2>
        {filteredHistory.length > 0 ? (
          <div className="mt-2 flex flex-col gap-2">
            {filteredHistory.map((item, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row items-start md:items-center gap-1 md:gap-3 p-2 bg-white rounded-lg shadow border border-gray-100 transition-all duration-150"
              >
                <span
                  className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${badgeColor(
                    item.type
                  )}`}
                >
                  {item.type}
                </span>
                <span className="flex-1 text-sm font-semibold text-gray-800">
                  {item.title}
                </span>
                <span className="text-gray-500 text-xs whitespace-nowrap">
                  {item.time}
                </span>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-center py-6 text-xs">
            Không có lịch sử phù hợp với bộ lọc.
          </p>
        )}
      </div>
    </div>
  );
};

export default History;
