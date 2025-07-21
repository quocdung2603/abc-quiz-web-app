import React from "react";
import {
  AppstoreOutlined,
  UserOutlined,
  QuestionCircleOutlined,
  FieldTimeOutlined,
} from "@ant-design/icons";

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
    <div className="p-8 w-full max-w-3xl mx-auto animate-fade-in">
      <h2 className="text-heading-2 text-primary font-bold mb-8 text-center tracking-wide flex items-center gap-2 justify-center">
        <AppstoreOutlined className="text-accent text-2xl" /> Thông tin trận đấu
      </h2>
      {/* Tên cuộc thi */}
      <div className="mb-4">
        <label className="block text-sm font-semibold text-gray-700 mb-1">
          Tên cuộc thi
        </label>
        <p className="p-3 bg-gray-100 rounded-lg font-semibold text-lg flex items-center gap-2">
          <AppstoreOutlined className="text-primary" /> {matchInfo.name}
        </p>
      </div>
      {/* Loại cuộc thi */}
      <div className="mb-4">
        <label className="block text-sm font-semibold text-gray-700 mb-1">
          Loại cuộc thi
        </label>
        <p className="p-3 bg-gray-100 rounded-lg flex items-center gap-2">
          <AppstoreOutlined className="text-accent" /> {matchInfo.type}
        </p>
      </div>
      {/* Tên người tổ chức */}
      <div className="mb-4">
        <label className="block text-sm font-semibold text-gray-700 mb-1">
          Tên người tổ chức
        </label>
        <p className="p-3 bg-gray-100 rounded-lg flex items-center gap-2">
          <UserOutlined className="text-secondary" /> {matchInfo.organizer}
        </p>
      </div>
      {/* Nội dung thi */}
      <div className="mb-4">
        <label className="block text-sm font-semibold text-gray-700 mb-1">
          Nội dung thi
        </label>
        <p className="p-3 bg-gray-100 rounded-lg flex items-center gap-2">
          <QuestionCircleOutlined className="text-accent" /> {matchInfo.content}
        </p>
      </div>
      {/* Số câu hỏi */}
      <div className="mb-4">
        <label className="block text-sm font-semibold text-gray-700 mb-1">
          Số câu hỏi
        </label>
        <p className="p-3 bg-gray-100 rounded-lg flex items-center gap-2">
          <QuestionCircleOutlined className="text-primary" />{" "}
          {matchInfo.questions}
        </p>
      </div>
      {/* Thời lượng làm bài */}
      <div className="mb-4">
        <label className="block text-sm font-semibold text-gray-700 mb-1">
          Thời lượng làm bài
        </label>
        <p className="p-3 bg-gray-100 rounded-lg flex items-center gap-2">
          <FieldTimeOutlined className="text-secondary" /> {matchInfo.duration}
        </p>
      </div>
    </div>
  );
};

export default InfoMatch;
