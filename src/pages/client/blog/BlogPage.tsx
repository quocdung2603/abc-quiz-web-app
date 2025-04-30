import React from "react";
import BlogItemSm from "./components/BlogItemSm";
import BlogBanner from "./components/BlogBanner";
import BlogItem from "./components/BlogItem";
import BlogLatest from "./components/BlogLatest";

const blogData = {
  posts: [
    {
      title: "Cách tăng level lập trình mỗi ngày cùng KQUIZ",
      content:
        "Việc học lập trình đòi hỏi phải luyện tập mỗi ngày. Lập trình càng khó, chúng tôi càng thích. Trong các bài kiểm tra lập trình sẽ giúp bạn nâng cao kỹ năng lập trình của KQUIZ là...",
      author: "vipmath171",
      date: "27/7/2021",
      comments: 2,
      image: "https://picsum.photos/200/300?random=1",
    },
    {
      title: "Cách tăng level lập trình mỗi ngày cùng KQUIZ",
      content:
        "Việc học lập trình đòi hỏi phải luyện tập mỗi ngày. Lập trình càng khó, chúng tôi càng thích. Trong các bài kiểm tra lập trình sẽ giúp bạn nâng cao kỹ năng lập trình của KQUIZ là...",
      author: "vipmath171",
      date: "27/7/2021",
      comments: 2,
      image: "https://picsum.photos/200/300?random=1",
    },
    {
      title: "Cách tăng level lập trình mỗi ngày cùng KQUIZ",
      content:
        "Việc học lập trình đòi hỏi phải luyện tập mỗi ngày. Lập trình càng khó, chúng tôi càng thích. Trong các bài kiểm tra lập trình sẽ giúp bạn nâng cao kỹ năng lập trình của KQUIZ là...",
      author: "vipmath171",
      date: "27/7/2021",
      comments: 2,
      image: "https://picsum.photos/200/300?random=1",
    },
  ],
};

const BlogPage: React.FC = () => {
  return (
    <div className="flex flex-col max-w-7xl mx-auto space-y-10 my-10">
      <div className="w-full flex flex-row space-x-5 items-center">
        {/* BANNER - giữ tỉ lệ khung hình */}
        <div className="w-2/3 border">
          <BlogBanner
            author="ABC"
            imageUrl="https://picsum.photos/800/400"
            avatarText="C"
            category="C++"
            date="21/2/2025"
            title="Lên trình C++ cùng ABCquiz"
          />
        </div>

        {/* DANH SÁCH BÀI VIẾT NHỎ */}
        <div className="w-1/3 flex flex-col justify-between space-y-2">
          <BlogItemSm />
          <BlogItemSm />
          <BlogItemSm />
          <BlogItemSm />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {blogData.posts.map((post, index) => (
          <BlogItem
            key={index}
            title={post.title}
            content={post.content}
            author={post.author}
            date={post.date}
            comments={post.comments}
            image={post.image}
          />
        ))}
      </div>
      <BlogLatest
        date="21/2/2002"
        title="Học lập trình cùng ABCQuiz"
        image="https://picsum.photos/200/300?random=1"
        author="Abc"
        content="Việc học lập trình đòi hỏi phải luyện tập mỗi ngày. Lập trình càng khó, chúng tôi càng thích. Trong các bài kiểm tra lập trình sẽ giúp bạn nâng cao kỹ năng lập trình của KQUIZ là..."
      />

      <div className="w-full">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Tin tức khác
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogData.posts.map((post, index) => (
            <BlogItem
              key={index}
              title={post.title}
              content={post.content}
              author={post.author}
              date={post.date}
              comments={post.comments}
              image={post.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
