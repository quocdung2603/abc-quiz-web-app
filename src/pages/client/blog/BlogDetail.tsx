import BlogItemSm from "./components/BlogItemSm";

const BlogDetail = () => {
  // Mock data
  const mainBlog = {
    category: "C++",
    title: "Cách tăng level lập trình mỗi ngày cùng ABCQuiz",
    author: {
      name: "quocdung2603",
      avatar: "https://picsum.photos/200/300",
    },
    date: "01/05/2025",
    coverImage: "https://picsum.photos/800/500",
    content: `
      <p>Trong hành trình trở thành lập trình viên giỏi, việc luyện tập đều đặn là yếu tố then chốt. ABCQuiz mang đến cho bạn công cụ học tập qua câu hỏi trắc nghiệm hàng ngày, giúp củng cố kiến thức một cách hiệu quả.</p>
      <p>Bắt đầu ngày mới bằng 15 phút với các câu hỏi trong chủ đề bạn yêu thích. Không cần nhiều thời gian, chỉ cần sự kiên trì mỗi ngày!</p>
      <h3 class="text-xl font-semibold mt-4 mb-2">Lợi ích khi luyện tập cùng ABCQuiz:</h3>
      <ul class="list-disc ml-5 space-y-1">
        <li>Kiểm tra lại kiến thức nhanh chóng.</li>
        <li>Biết được điểm mạnh và điểm yếu.</li>
        <li>Giao diện dễ dùng, tiện lợi trên cả máy tính và điện thoại.</li>
      </ul>
    `,
  };

  const latestNews = [
    {
      id: 2,
      title: "Top 10 mẹo học Python hiệu quả",
      thumbnail: "https://picsum.photos/200/150",
    },
    {
      id: 3,
      title: "Lập trình JavaScript: Từ cơ bản đến nâng cao",
      thumbnail: "https://picsum.photos/201/150",
    },
    {
      id: 4,
      title: "Khám phá HTML & CSS hiện đại 2025",
      thumbnail: "https://picsum.photos/202/150",
    },
    {
      id: 5,
      title: "Cùng học thuật toán qua ABCQuiz",
      thumbnail: "https://picsum.photos/203/150",
    },
  ];

  return (
    <div className="flex flex-col max-w-7xl mx-auto my-5 space-y-5">
      {/* Ảnh bìa */}
      <div className="w-full h-[500px] bg-red-300 relative">
        <img
          src={mainBlog.coverImage}
          alt="cover"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-row justify-center space-x-5">
        {/* Bên trái: bài viết chính */}
        <div className="w-[70%] flex flex-col space-y-5">
          {/* Tiêu đề + tác giả */}
          <div className="w-full flex flex-col space-y-5">
            <span className="bg-green-100 mr-auto p-2 rounded text-green-600 font-semibold">
              {mainBlog.category}
            </span>
            <h2 className="text-3xl font-semibold">{mainBlog.title}</h2>
            <div className="flex flex-row items-center space-x-24">
              <div className="flex flex-row items-center space-x-5">
                <img
                  src={mainBlog.author.avatar}
                  alt={mainBlog.author.name}
                  className="w-10 h-10 rounded-full"
                />
                <span className="text-lg font-semibold">
                  {mainBlog.author.name}
                </span>
              </div>
              <span className="text-lg">{mainBlog.date}</span>
            </div>
            <span className="w-full border"></span>
          </div>

          {/* Nội dung bài viết */}
          <div
            className="prose max-w-none"
            dangerouslySetInnerHTML={{ __html: mainBlog.content }}
          />
        </div>

        {/* Bên phải: Tin tức mới nhất */}
        <div className="w-[30%] flex flex-col space-y-5">
          <h3 className="mr-auto text-lg font-semibold">Tin tức mới nhất</h3>
          <BlogItemSm />
          <BlogItemSm />
          <BlogItemSm />
          <BlogItemSm />
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
