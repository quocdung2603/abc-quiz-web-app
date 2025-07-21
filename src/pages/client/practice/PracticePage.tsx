import React, { useState } from "react";
import { Select } from "antd";
import {
  ClockCircleOutlined,
  CloseOutlined,
  DragOutlined,
  SearchOutlined,
} from "@ant-design/icons";

const friendsData = [
  { name: "Friend 1", avatar: "https://picsum.photos/40/40?random=1" },
  { name: "Friend 2", avatar: "https://picsum.photos/40/40?random=2" },
  { name: "Friend 3", avatar: "https://picsum.photos/40/40?random=3" },
  { name: "Friend 4", avatar: "https://picsum.photos/40/40?random=4" },
];

const TopicOption = [
  { label: "C++", value: "C++" },
  { label: "Javascript", value: "Javascript" },
];

const NumberQuestOption = [
  { label: "10 câu", value: "10" },
  { label: "15 câu", value: "15" },
];

const TimeOption = [
  { label: "10 phút", value: "10" },
  { label: "20 phút", value: "20" },
];

const PracticePage: React.FC = () => {
  const [topic, setTopic] = useState<string[]>([]);
  const [numberQuest, setNumberQuest] = useState<string>("10");
  const [time, setTime] = useState<string>("10");

  const handleCreateExam = () => {
    alert(
      "topic: " + topic + " Number Question: " + numberQuest + " Time: " + time
    );
  };

  const handleResetFilters = () => {
    setTopic([]);
    setNumberQuest("10");
    setTime("10");
  };

  return (
    <div
      className="min-h-screen py-10 px-5 bg-cover bg-center relative"
      style={{
        backgroundImage: `url('https://picsum.photos/1200/900?random=11')`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="w-full md:w-2/3">
          <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight mb-2">
            Khám phá ngân hàng đề thi trắc nghiệm{" "}
            <span className="text-accent">ngẫu nhiên ABCquiz</span>
          </h2>
          <p className="mt-2 text-base text-gray-200 max-w-2xl">
            Không chỉ đơn trắc nghiệm một cách nhàm chán, đến với ABCquiz bạn sẽ
            không đoán được câu hỏi nào đang chờ! Đề sẽ không phải lựa chọn hay
            khi thử nghiệm đầu. Học thực sự để an tâm!
          </p>

          {/* Thanh filter */}
          <div className="flex flex-wrap md:flex-nowrap items-center mt-8 gap-3 bg-white/90 rounded-lg shadow p-3">
            <div className="flex items-center gap-2 w-full md:w-1/4">
              <SearchOutlined className="text-primary" />
              <Select
                showSearch
                mode="multiple"
                placeholder="Tên môn học, ngôn ngữ"
                optionFilterProp="label"
                className="w-full outline-none text-sm"
                filterSort={(optionA, optionB) =>
                  (optionA?.label ?? "")
                    .toLowerCase()
                    .localeCompare((optionB?.label ?? "").toLowerCase())
                }
                options={TopicOption}
                onChange={(value) => setTopic(value)}
                value={topic}
              />
            </div>
            <div className="flex items-center gap-2 w-full md:w-1/4">
              <DragOutlined className="text-primary" />
              <Select
                showSearch
                placeholder="Số lượng câu hỏi"
                optionFilterProp="label"
                className="w-full outline-none text-sm"
                defaultValue={"10"}
                value={numberQuest}
                filterSort={(optionA, optionB) =>
                  (optionA?.label ?? "")
                    .toLowerCase()
                    .localeCompare((optionB?.label ?? "").toLowerCase())
                }
                options={NumberQuestOption}
                onChange={(value) => setNumberQuest(value)}
              />
            </div>
            <div className="flex items-center gap-2 w-full md:w-1/4">
              <ClockCircleOutlined className="text-primary" />
              <Select
                showSearch
                placeholder="Thời gian làm bài"
                optionFilterProp="label"
                defaultValue={"10"}
                value={time}
                className="w-full outline-none text-sm"
                filterSort={(optionA, optionB) =>
                  (optionA?.label ?? "")
                    .toLowerCase()
                    .localeCompare((optionB?.label ?? "").toLowerCase())
                }
                options={TimeOption}
                onChange={(value) => setTime(value)}
              />
            </div>
            <button
              onClick={handleCreateExam}
              className="w-full md:w-auto bg-gradient-to-r from-primary to-accent font-semibold text-white px-6 py-2 rounded-lg shadow hover:scale-105 hover:shadow-lg transition-all text-sm"
            >
              Thi thử ngay
            </button>
          </div>

          {/* Lựa chọn của bạn */}
          <div className="mt-6 p-4 bg-white/90 rounded-lg shadow max-w-2xl">
            <h3 className="text-base font-semibold text-black mb-3">
              Lựa chọn của bạn
            </h3>
            <div className="flex flex-wrap items-center gap-2 text-sm">
              <span className="text-gray-700 border border-gray-300 bg-gray-100 px-3 py-1 rounded-full">
                Số lượng: <span className="font-medium">{numberQuest} câu</span>
              </span>
              <span className="text-gray-700 border border-gray-300 bg-gray-100 px-3 py-1 rounded-full">
                Thời gian: <span className="font-medium">{time} phút</span>
              </span>
              {topic.map((item, index) => (
                <span
                  key={index}
                  className="text-gray-700 border border-gray-300 bg-gray-100 px-3 py-1 rounded-full"
                >
                  <span className="font-medium">{item}</span>
                </span>
              ))}
              {topic.length > 0 && (
                <button
                  onClick={handleResetFilters}
                  className="flex flex-row space-x-2 items-center text-sm text-red-500 underline hover:text-red-600 transition"
                >
                  <CloseOutlined />
                  <span>Xóa bộ lọc</span>
                </button>
              )}
            </div>
            <div className="mt-4 flex items-center">
              <div className="flex -space-x-2">
                {friendsData.map((friend, index) => (
                  <img
                    key={index}
                    src={friend.avatar}
                    alt={friend.name}
                    className="w-8 h-8 rounded-full border-2 border-white shadow"
                  />
                ))}
              </div>
              <span className="ml-2 text-gray-600 text-sm">
                100+ tham gia đề thi ngẫu nhiên mỗi ngày
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PracticePage;