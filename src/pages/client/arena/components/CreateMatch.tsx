import React, { useState } from "react";
import { Select } from "antd";
import { LoadingOutlined, CheckCircleOutlined } from "@ant-design/icons";

const CreateMatch: React.FC = () => {
  const [matchName, setMatchName] = useState("");
  const [matchType, setMatchType] = useState("Cộng đồng");
  const [maxParticipants, setMaxParticipants] = useState(2);
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

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

  const handleCreate = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 2000);
    }, 1200);
  };

  return (
    <div className="p-8 w-full max-w-3xl mx-auto animate-fade-in">
      <h2 className="text-heading-2 text-primary font-bold mb-8 text-center tracking-wide">
        Tạo cuộc thi
      </h2>
      {/* Tên cuộc thi */}
      <div className="mb-6">
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Tên cuộc thi
        </label>
        <input
          type="text"
          value={matchName}
          onChange={(e) => setMatchName(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all text-base"
          placeholder="Nhập tên cuộc thi"
        />
      </div>
      {/* Loại */}
      <div className="mb-6">
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Loại
        </label>
        <select
          value={matchType}
          onChange={(e) => setMatchType(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all text-base"
        >
          <option value="Cộng đồng">Cộng đồng</option>
          <option value="Cá nhân">Cá nhân</option>
        </select>
      </div>
      {/* Số lượng thành viên tối đa */}
      <div className="mb-6">
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Số lượng thành viên tối đa (2-5)
        </label>
        <input
          type="number"
          value={maxParticipants}
          onChange={handleMaxParticipantsChange}
          min="2"
          max="5"
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all text-base"
        />
      </div>
      {/* Nội dung cuộc thi (Ngôn ngữ lập trình) */}
      <div className="mb-6">
        <label className="block text-sm font-semibold text-gray-700 mb-2">
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
      <button
        className="w-full py-3 text-lg font-bold rounded-xl bg-gradient-to-r from-primary to-accent shadow-neon text-white hover:from-accent hover:to-primary transition-all duration-200 flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-accent"
        onClick={handleCreate}
        disabled={loading}
      >
        {loading ? (
          <LoadingOutlined spin />
        ) : success ? (
          <CheckCircleOutlined className="text-green-400" />
        ) : null}
        {success
          ? "Đã tạo thành công!"
          : loading
          ? "Đang tạo..."
          : "Tạo cuộc thi"}
      </button>
    </div>
  );
};

export default CreateMatch;
