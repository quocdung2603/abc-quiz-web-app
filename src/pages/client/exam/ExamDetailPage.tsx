import React, { useState } from "react";
import { Rate, Tabs, Modal } from "antd";
import Slider from "react-slick";
import ExamCardItem from "./components/ExamCardItem";

const { TabPane } = Tabs;

const examData = {
  title:
    "20 Bài Tập Kiểm Tra, Rèn Luyện JavaScript Phần 4 (Câu hỏi và hướng dẫn chi tiết)",
  author: "Nguyen Trung Toan",
  rating: 5,
  ratingCount: 3,
  questions: "20 câu",
  time: "30:00",
  views: "374",
  description:
    "Chào mừng bạn đến với bài kiểm tra thuộc series JavaScript của mình, 20 câu hỏi, bài tập JavaScript giúp bạn có thể thực hành thêm nhiều kiến thức để nâng cao kỹ năng code, nâng cao trình độ. Các câu hỏi đều có sẵn đáp án và giải thích chi tiết. Hãy bắt đầu kiểm tra ngay nào! 20 câu hỏi trong 30 phút sẽ không làm khó bạn đâu, hãy thử vượt qua thử thách này nhé! Kết quả sẽ hiển thị ngay sau khi bạn hoàn thành bài kiểm tra. Chúc bạn đạt kết quả tốt nhé! KQUIZ",
  practiceInfo:
    "Chỉ mở bằng bản video bài tập đầy đủ trong series JavaScript mỗi ngày 20 câu/nhánh thuộc các mức độ khó, từ cơ bản đến nâng cao. Hãy bắt đầu ngay nào! Bạn cần đăng nhập tài khoản để lưu kết quả và xem lại sau khi hoàn thành.",
  leaderboard: {
    name: "Trần Minh Phúc",
    date: "01/38/05/2023",
    score: "20/20",
    completion: "100%",
  },
  tags: ["JavaScript"],
  reviews: [
    { user: "PA_7380e", questions: "14/20 câu", rating: 5 },
    { user: "haophanQN@gmail.com", questions: "8/20 câu", rating: 4 },
    { user: "zoroso.black", questions: "6/20 câu", rating: 3 },
  ],
  relatedExams: [
    {
      image: "https://picsum.photos/40/40?random=10",
      title:
        "20 Bài Tập Kiểm Tra, Rèn Luyện JavaScript (Có video hướng dẫn chi tiết)",
      questions: "20 câu",
      time: "30:00",
      views: "444",
      category: ["JavaScript"],
    },
    {
      image: "https://picsum.photos/40/40?random=11",
      title: "Đề Có Hậu Phế Thụng Việc JavaScript (Đề nâng cao)",
      questions: "20 câu",
      time: "30:00",
      views: "448",
      category: ["JavaScript"],
    },
    {
      image: "https://picsum.photos/40/40?random=12",
      title: "Bộ 20 câu hỏi MySQL cơ bản",
      questions: "20 câu",
      time: "30:00",
      views: "578",
      category: ["MySQL"],
    },
  ],
};

const ExamDetailPage: React.FC = () => {
  const [isModal, setIsModal] = useState<boolean>(false);

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const handleSubmit = () => {
    setIsModal(false);
  };

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4 md:px-6">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="bg-white rounded-xl shadow p-6 space-y-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="space-y-2 md:w-2/3">
              <h1 className="text-2xl md:text-3xl font-bold text-black">
                {examData.title}
              </h1>
              <div className="flex items-center space-x-2 text-gray-600">
                <span>{examData.author}</span>
                <Rate
                  disabled
                  defaultValue={examData.rating}
                  className="text-yellow-400"
                />
                <span className="text-sm">
                  ({examData.ratingCount} đánh giá)
                </span>
              </div>
              <div className="flex space-x-4 text-gray-500 text-sm">
                <span>📝 {examData.questions}</span>
                <span>⏰ {examData.time}</span>
                <span>👁️ {examData.views}</span>
              </div>
            </div>
            <div className="mt-4 md:mt-0 flex gap-3">
              <button
                onClick={() => setIsModal(true)}
                className="bg-yellow-500 font-semibold text-white p-1 rounded hover:bg-yellow-600 hover:text-white transition-all duration-200"
              >
                Bắt đầu thi
              </button>
              <Modal
                open={isModal}
                title={"Xác nhận vào làm đề thi"}
                onCancel={() => setIsModal(false)}
                footer={null}
              >
                <div className="flex flex-col gap-4">
                  <div className="space-y-1">
                    <h2 className="text-lg font-semibold text-gray-800">
                      {examData.title}
                    </h2>
                    <div className="flex items-center text-gray-600 gap-6 text-sm">
                      <div className="flex items-center gap-1">
                        <span role="img" aria-label="questions">
                          🧮
                        </span>
                        <span>Số lượng câu hỏi: {examData.questions}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span role="img" aria-label="time">
                          ⏱
                        </span>
                        <span>Thời lượng: {examData.time}</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    {examData.tags.map((item, index) => (
                      <span
                        key={index}
                        className="bg-yellow-400 text-white text-xs font-semibold px-2 py-1 rounded"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={handleSubmit}
                    className="bg-yellow-500 font-semibold text-white p-1 rounded hover:bg-yellow-600 hover:text-white transition-all duration-200"
                  >
                    Bắt đầu
                  </button>
                </div>
              </Modal>
              <button className="bg-white font-semibold text-black p-1 rounded hover:bg-gray-600 hover:text-white transition-all duration-200">
                Chia sẻ đề thi
              </button>
            </div>
          </div>
        </div>

        {/* Image + Tabs */}
        <div className="bg-white rounded-xl shadow p-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/3">
              <img
                src="https://picsum.photos/600/320?random=1"
                alt="Minh họa"
                className="w-full h-auto rounded-xl shadow-sm"
              />
            </div>
            <div className="md:w-2/3">
              <Tabs defaultActiveKey="1" className="mt-4 md:mt-0">
                <TabPane tab="📘 Mô tả" key="1">
                  <p className="text-gray-600">{examData.description}</p>
                </TabPane>
                <TabPane tab="💡 Tự luyện" key="2">
                  <p className="text-gray-600">{examData.practiceInfo}</p>
                </TabPane>
                <TabPane tab="🏷️ Từ khóa" key="3">
                  <div className="flex flex-wrap gap-2">
                    {examData.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </TabPane>
                <TabPane tab="🏆 Vinh danh" key="4">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-yellow-300 flex items-center justify-center font-bold text-lg text-white">
                      {examData.leaderboard.name[0]}
                    </div>
                    <div className="text-sm">
                      <p className="font-medium text-black">
                        {examData.leaderboard.name}
                      </p>
                      <p className="text-gray-500">
                        Ngày: {examData.leaderboard.date}
                      </p>
                      <p className="text-gray-500">
                        Điểm: {examData.leaderboard.score}
                      </p>
                      <p className="text-gray-500">
                        Hoàn thành: {examData.leaderboard.completion}
                      </p>
                    </div>
                  </div>
                </TabPane>
              </Tabs>
            </div>
          </div>
        </div>

        {/* Reviews */}
        <section className="bg-white rounded-xl shadow p-6">
          <h2 className="text-lg font-semibold">⭐ Đánh giá đề thi</h2>
          <div className="mt-4 space-y-4">
            {examData.reviews.map((review, index) => (
              <div
                key={index}
                className="flex justify-between items-center bg-white p-4 rounded-md shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-white font-bold">
                    {review.user[0].toUpperCase()}
                  </div>
                  <div>
                    <p className="font-semibold text-black">{review.user}</p>
                    <p className="text-gray-500 text-sm">{review.questions}</p>
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <Rate
                    disabled
                    defaultValue={review.rating}
                    className="text-yellow-400"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Related exams */}
        <section className="bg-white rounded-xl shadow p-6">
          <h2 className="text-lg font-semibold mb-4">🧠 Các đề thi tương tự</h2>
          <Slider {...carouselSettings}>
            {examData.relatedExams.map((exam, index) => (
              <div key={index} className="px-2">
                <ExamCardItem {...exam} />
              </div>
            ))}
          </Slider>
        </section>
      </div>
    </div>
  );
};

export default ExamDetailPage;
