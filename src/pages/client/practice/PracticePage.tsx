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
      className="bg-white py-40 px-5 bg-cover bg-center min-h-[600px] relative"
      style={{
        backgroundImage: `url('https://picsum.photos/1200/900?random=11')`,
      }}
    >
      {/* Overlay để làm mờ nền và tăng độ tương phản với nội dung */}
      <div className="absolute inset-0 bg-black opacity-30"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Nội dung chính */}
        <div className="md:w-2/3">
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            Khám phá ngân hàng đề thi trắc nghiệm{" "}
            <span className="text-orange-500">ngẫu nhiên ABCquiz</span>
          </h2>
          <p className="mt-4 text-lg text-gray-200 max-w-3xl">
            Không chỉ đơn trắc nghiệm một cách nhàm chán, đến với ABCquiz bạn sẽ
            không doan được câu hỏi nào đang chờ anh sao? Đề sẽ không phải lựa
            chọn hay khi thử nghiệm đầu Học thực sự để an sao?
          </p>

          {/* Thanh tìm kiếm */}
          <div className="flex flex-row mt-8 max-w-6xl rounded p-2 bg-white space-x-5">
            <div className="w-2/6 flex flex-row items-center space-x-2 p-1">
              <SearchOutlined />
              <Select
                showSearch
                mode="multiple"
                placeholder="Tên môn học, ngôn ngữ"
                optionFilterProp="label"
                className="w-full outline-none"
                filterSort={(optionA, optionB) =>
                  (optionA?.label ?? "")
                    .toLowerCase()
                    .localeCompare((optionB?.label ?? "").toLowerCase())
                }
                options={TopicOption}
                onChange={(value) => setTopic(value)}
              />
            </div>
            <div className="w-2/6 flex flex-row items-center space-x-2 p-1">
              <DragOutlined />
              <Select
                showSearch
                placeholder="Số lượng câu hỏi"
                optionFilterProp="label"
                className="w-full outline-none"
                defaultValue={"10"}
                filterSort={(optionA, optionB) =>
                  (optionA?.label ?? "")
                    .toLowerCase()
                    .localeCompare((optionB?.label ?? "").toLowerCase())
                }
                options={NumberQuestOption}
                onChange={(value) => setNumberQuest(value)}
              />
            </div>
            <div className="w-2/6 flex flex-row items-center space-x-2 p-1">
              <ClockCircleOutlined />
              <Select
                showSearch
                placeholder="Thời gian làm bài"
                optionFilterProp="label"
                defaultValue={"10"}
                className="w-full outline-none"
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
              onClick={() => handleCreateExam()}
              className="w-1/6 bg-yellow-500 font-semibold text-white p-1 rounded hover:bg-yellow-600 hover:text-white transition-all duration-200"
            >
              Thi thử ngay
            </button>
          </div>

          {/* Lựa chọn của bạn */}
          <div className="mt-6 p-4 bg-white bg-opacity-90 rounded-lg shadow-sm max-w-2xl">
            <h3 className="text-lg font-semibold text-black mb-3">
              Lựa chọn của bạn
            </h3>
            <div className="flex flex-row items-center gap-4 text-sm">
              <span className="text-gray-600 bg-gray-300 p-2 rounded-md">
                Số lượng: <span className="font-medium">{numberQuest} câu</span>
              </span>
              <span className="text-gray-600 bg-gray-300 p-2 rounded-md">
                Thời gian: <span className="font-medium">{time} phút</span>
              </span>
              {topic.map((item, index) => (
                <span
                  key={index + 0}
                  className="text-gray-600 bg-gray-300 p-2 rounded-md"
                >
                  <span className="font-medium">{item}</span>
                </span>
              ))}
              {topic.length > 0 && (
                <button
                  onClick={handleResetFilters}
                  className="flex flex-row space-x-2 items-center text-base text-red-500 underline hover:text-red-600 transition"
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
                    className="w-8 h-8 rounded-full border-2 border-white"
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
