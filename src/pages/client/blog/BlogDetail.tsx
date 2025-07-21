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
    <div className="flex flex-col max-w-7xl mx-auto py-10 px-4 space-y-10 animate-fade-in">
      {/* Ảnh bìa */}
      <div className="w-full h-[300px] md:h-[500px] rounded-2xl overflow-hidden relative shadow-neon border-4 border-accent animate-fade-in">
        <img
          src={mainBlog.coverImage}
          alt="cover"
          className="w-full h-full object-cover scale-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-8">
          <span className="bg-gradient-to-r from-primary to-accent text-xs text-white font-bold px-4 py-2 rounded-full shadow-neon uppercase tracking-wider mb-4 w-fit">
            {mainBlog.category}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white drop-shadow-neon mb-4 max-w-3xl animate-fade-in-up">
            {mainBlog.title}
          </h2>
          <div className="flex items-center gap-4 text-white animate-fade-in-up">
            <img
              src={mainBlog.author.avatar}
              alt={mainBlog.author.name}
              className="w-12 h-12 rounded-full border-2 border-white shadow-md"
            />
            <span className="text-lg font-semibold">
              {mainBlog.author.name}
            </span>
            <span className="text-lg text-gray-200">{mainBlog.date}</span>
          </div>
        </div>
      </div>
      {/* Nội dung + sidebar */}
      <div className="flex flex-col md:flex-row gap-10">
        {/* Bên trái: bài viết chính */}
        <div className="md:w-2/3 w-full flex flex-col gap-8">
          <div className="prose max-w-none prose-lg prose-primary animate-fade-in-up bg-white rounded-2xl shadow-lg p-8 border border-accent">
            <div dangerouslySetInnerHTML={{ __html: mainBlog.content }} />
          </div>
        </div>
        {/* Bên phải: Tin tức mới nhất */}
        <div className="md:w-1/3 w-full flex flex-col gap-6">
          <h3 className="text-heading-3 font-bold text-primary mb-2">
            Tin tức mới nhất
          </h3>
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
