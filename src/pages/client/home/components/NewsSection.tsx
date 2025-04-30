import React from 'react';

interface NewsItem {
  image: string;
  title: string;
  description: string;
  date: string;
  comments: string;
}

const newsData: NewsItem[] = [
  {
    image: 'https://picsum.photos/300/200?random=1',
    title: 'Giới thiệu đề 500 câu hỏi Python siêu bịch để 500 câu trắc',
    description: 'Rèn luyện kiến thức Python siêu bịch để 500 câu trắc nghiệm khó ở Quiz; Đề 500 câu hỏi Python được chọn lọc, DE 500 câu hỏi Python với mục tiêu...',
    date: '06/02/2022',
    comments: '0 bình luận',
  },
  {
    image: 'https://picsum.photos/300/200?random=2',
    title: 'Giới thiệu đề 500 Câu H C++ cực hay',
    description: 'Trải nghiệm kiến thức 500 Câu H C++ cực hay 500 câu hỏi Quiz cho học sinh, sinh viên để rèn luyện kỹ năng; Đề 500 câu H C++ chọn lọc DE 500 câu với mục tiêu...',
    date: '06/02/2022',
    comments: '0 bình luận',
  },
  {
    image: 'https://picsum.photos/300/200?random=3',
    title: 'Bật mí những điều bạn cần biết khi tham gia rèn luyện Quiz',
    description: 'Howkteam hướng dẫn kỹ năng tham gia rèn luyện Quiz website Howkteam; Khi bạn biết đúng năng lực bạn cần biết để tham gia rèn luyện bạn cần chú ý...',
    date: '08/02/2021',
    comments: '4 bình luận',
  },
];

const NewsSection: React.FC = () => {
  return (
    <div className="bg-white py-16 px-5">
      <div className="max-w-7xl mx-auto text-center">
        {/* Tiêu đề và mô tả */}
        <h2 className="text-3xl md:text-4xl font-bold text-black">
          Tin tức thú vị
        </h2>
        <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
          Thông chia sẻ, hướng dẫn các bạn sinh viên ở Quiz để bạn rèn luyện thực
        </p>

        {/* Danh sách bài viết */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-black">
                  {item.title}
                </h3>
                <p className="mt-2 text-gray-500 text-sm">
                  {item.description}
                </p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-gray-500 text-sm">{item.date}</span>
                  <span className="text-gray-500 text-sm">{item.comments}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Nút Xem thêm */}
        <button className="mt-8 bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg hover:bg-yellow-500 transition-all duration-200">
          Xem thêm
        </button>
      </div>
    </div>
  );
};

export default NewsSection;