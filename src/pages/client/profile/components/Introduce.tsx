import {
  UserOutlined,
  BookOutlined,
  FileTextOutlined,
  QuestionCircleOutlined,
  CommentOutlined,
} from "@ant-design/icons";

const stats = [
  {
    label: "Khóa Học",
    value: 0,
    color: "from-teal-400 to-teal-600",
    icon: <BookOutlined />,
  },
  {
    label: "Bài Học",
    value: 0,
    color: "from-blue-400 to-blue-600",
    icon: <FileTextOutlined />,
  },
  {
    label: "Bài Viết",
    value: 0,
    color: "from-green-400 to-green-600",
    icon: <UserOutlined />,
  },
  {
    label: "Câu Hỏi",
    value: 0,
    color: "from-purple-400 to-purple-600",
    icon: <QuestionCircleOutlined />,
  },
  {
    label: "Bình Luận",
    value: 0,
    color: "from-yellow-300 to-yellow-500",
    icon: <CommentOutlined />,
  },
];

const details = [
  "0 điểm uy tín",
  "53 lượt xem hồ sơ",
  "Xem lần cuối của bạn vào giảng trước",
  "Tham gia khoảng 1 năm trước",
];

const Introduce = () => {
  return (
    <div className="w-full flex flex-col md:flex-row p-3 md:p-5 justify-center gap-4">
      {/* Statistics */}
      <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-3">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`bg-gradient-to-br ${stat.color} p-3 rounded-xl shadow flex flex-col items-center justify-center space-y-2 transition-transform hover:scale-102`}
          >
            <div className="text-2xl text-white drop-shadow-lg">
              {stat.icon}
            </div>
            <div className="text-xl font-extrabold text-white drop-shadow-lg">
              {stat.value}
            </div>
            <div className="text-xs font-semibold text-white/90 tracking-wide uppercase">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
      {/* Details */}
      <div className="w-full md:w-1/3 bg-white/90 rounded-xl shadow border border-gray-100 flex flex-col">
        <h2 className="text-base font-bold text-gray-800 mb-1 text-center bg-gradient-to-r from-blue-100 to-purple-100 rounded-t-xl py-2 tracking-wide">
          THỐNG KÊ
        </h2>
        <ul className="space-y-2 p-3">
          {details.map((detail, index) => (
            <li
              key={index}
              className="text-gray-700 text-xs flex items-center gap-2"
            >
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-400 to-purple-400"></span>
              {detail}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Introduce;
