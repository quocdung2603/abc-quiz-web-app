interface ResultCardItemProps {
  title: string;
  image: string;
  questions: string;
  time: string;
  history: string;
  category: string[];
}

import { ClockCircleOutlined, EyeOutlined } from "@ant-design/icons";

const ResultCardItem: React.FC<ResultCardItemProps> = ({
  title,
  history,
  image,
  questions,
  time,
  category,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 transition-all duration-200 hover:shadow-md">
      {/* Hình ảnh nhỏ */}
      <img src={image} alt={title} className="w-full h-36 mb-4" />

      {/* Tiêu đề */}
      <h3 className="text-lg font-semibold text-black">{title}</h3>

      {/* Thông tin */}
      <div className="mt-3 flex items-center space-x-4 text-gray-500 text-sm">
        <div className="flex items-center">
          <span className="mr-1">📝</span>
          <span>{questions} câu</span>
        </div>
        <div className="flex items-center">
          <ClockCircleOutlined className="mr-1" />
          <span>{time} phút</span>
        </div>
        <div className="flex items-center">
          <EyeOutlined className="mr-1" />
          <span>{history}</span>
        </div>
      </div>

      {/* Tag danh mục */}
      <div className="mt-3 w-full flex flex-row space-x-1">
        {category.map((item, index) => (
          <span
            key={index + 0}
            className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ResultCardItem;
