import React from "react";

const InfoMatch: React.FC = () => {
  const matchInfo = {
    name: "Kỳ thi Lập trình 2025",
    type: "Cộng đồng",
    organizer: "quocdung2603",
    content: "Lập trình với các ngôn ngữ C++, Java",
    questions: 10,
    duration: "30 phút",
  };

  return (
    <div className="p-6 w-full mx-auto">
      <h2 className="text-2xl font-bold mb-6">Thông tin trận đấu</h2>

      {/* Tên cuộc thi */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Tên cuộc thi
        </label>
        <p className="p-2 bg-gray-100 rounded-md">{matchInfo.name}</p>
      </div>

      {/* Loại cuộc thi */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Loại cuộc thi
        </label>
        <p className="p-2 bg-gray-100 rounded-md">{matchInfo.type}</p>
      </div>

      {/* Tên người tổ chức */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Tên người tổ chức
        </label>
        <p className="p-2 bg-gray-100 rounded-md">{matchInfo.organizer}</p>
      </div>

      {/* Nội dung thi */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Nội dung thi
        </label>
        <p className="p-2 bg-gray-100 rounded-md">{matchInfo.content}</p>
      </div>

      {/* Số câu hỏi */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Số câu hỏi
        </label>
        <p className="p-2 bg-gray-100 rounded-md">{matchInfo.questions}</p>
      </div>

      {/* Thời lượng làm bài */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Thời lượng làm bài
        </label>
        <p className="p-2 bg-gray-100 rounded-md">{matchInfo.duration}</p>
      </div>
    </div>
  );
};

export default InfoMatch;
