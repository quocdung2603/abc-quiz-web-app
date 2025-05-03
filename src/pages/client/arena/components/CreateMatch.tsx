import React, { useState } from "react";
import { Select } from "antd";

const CreateMatch: React.FC = () => {
  const [matchName, setMatchName] = useState("");
  const [matchType, setMatchType] = useState("Cộng đồng");
  const [maxParticipants, setMaxParticipants] = useState(2);
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);

  const languages = ["Java", "Python", "C++", "JavaScript", "C#"];

  const handleMaxParticipantsChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = Math.max(2, Math.min(5, Number(e.target.value)));
    setMaxParticipants(value);
  };

  const handleLanguageChange = (value: string[]) => {
    setSelectedLanguages(value);
  };

  return (
    <div className="p-6 w-full mx-auto">
      <h2 className="text-2xl font-bold mb-6">Tạo cuộc thi</h2>

      {/* Tên cuộc thi */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Tên cuộc thi
        </label>
        <input
          type="text"
          value={matchName}
          onChange={(e) => setMatchName(e.target.value)}
          className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
          placeholder="Nhập tên cuộc thi"
        />
      </div>

      {/* Loại */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Loại
        </label>
        <select
          value={matchType}
          onChange={(e) => setMatchType(e.target.value)}
          className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
        >
          <option value="Cộng đồng">Cộng đồng</option>
          <option value="Cá nhân">Cá nhân</option>
        </select>
      </div>

      {/* Số lượng thành viên tối đa */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Số lượng thành viên tối đa (2-5)
        </label>
        <input
          type="number"
          value={maxParticipants}
          onChange={handleMaxParticipantsChange}
          min="2"
          max="5"
          className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Nội dung cuộc thi (Ngôn ngữ lập trình) */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Nội dung cuộc thi (Ngôn ngữ)
        </label>
        <Select
          mode="multiple"
          showSearch
          placeholder="Chọn ngôn ngữ"
          value={selectedLanguages}
          onChange={handleLanguageChange}
          filterOption={(input, option) =>
            (option?.children as unknown as string)
              .toLowerCase()
              .includes(input.toLowerCase())
          }
          className="w-full"
        >
          {languages.map((language) => (
            <Select.Option key={language} value={language}>
              {language}
            </Select.Option>
          ))}
        </Select>
      </div>

      {/* Nút Tạo */}
      <button className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
        Tạo cuộc thi
      </button>
    </div>
  );
};

export default CreateMatch;
