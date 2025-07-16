import { ClockCircleOutlined, EyeOutlined } from "@ant-design/icons";

interface ResultCardItemProps {
  title: string;
  image: string;
  questions: string;
  time: string;
  history: string;
  category: string[];
}

const ResultCardItem: React.FC<ResultCardItemProps> = ({
  title,
  history,
  image,
  questions,
  time,
  category,
}) => {
  return (
    <div className="bg-white/90 rounded-2xl shadow-xl border border-gray-100 p-4 flex flex-col transition-all duration-200 hover:shadow-2xl hover:-translate-y-1 group cursor-pointer">
      {/* Hình ảnh lớn */}
      <div className="w-full h-40 rounded-xl overflow-hidden mb-4 flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-200"
        />
      </div>
      {/* Tiêu đề */}
      <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition">
        {title}
      </h3>
      {/* Thông tin */}
      <div className="mt-2 flex flex-wrap gap-3 text-sm">
        <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 text-white font-semibold shadow">
          📝 {questions} câu
        </span>
        <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 text-white font-semibold shadow">
          <ClockCircleOutlined /> {time} phút
        </span>
        <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-gray-400 to-gray-600 text-white font-semibold shadow">
          <EyeOutlined /> {history}
        </span>
      </div>
      {/* Tag danh mục */}
      <div className="mt-4 flex flex-wrap gap-2">
        {category.map((item, index) => (
          <span
            key={index}
            className="px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 shadow"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ResultCardItem;
