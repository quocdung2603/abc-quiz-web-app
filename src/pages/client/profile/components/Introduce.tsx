const stats = [
  { label: "Khóa Học", value: 0, color: "bg-teal-200" },
  { label: "Bài Học", value: 0, color: "bg-blue-200" },
  { label: "Bài Viết", value: 0, color: "bg-green-200" },
  { label: "Câu Hỏi", value: 0, color: "bg-purple-200" },
  { label: "Bình Luận", value: 0, color: "bg-yellow-200" },
];

const details = [
  "0 điểm uy tín",
  "53 lượt xem hồ sơ",
  "Xem lần cuối của bạn vào giảng trước",
  "Tham gia khoảng 1 năm trước",
];

const Introduce = () => {
  return (
    <div className="w-full flex flex-row p-10 justify-center space-x-5">
      {/* Thống kê */}
      <div className="w-3/4 grid grid-cols-2 md:grid-cols-3 gap-6 ">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`${stat.color} p-6 rounded-lg flex flex-col items-center justify-center space-y-5`}
          >
            <div className="text-4xl font-bold">{stat.value}</div>
            <div className="text-3xl text-gray-700">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Chi tiết thống kê */}
      <div className="w-1/4 bg-gray-100 rounded-lg border">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4 text-center bg-gray-300 p-4">
          THỐNG KÊ
        </h2>
        <ul className="space-y-2 p-4">
          {details.map((detail, index) => (
            <li key={index} className="text-gray-600">
              {detail}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Introduce;
