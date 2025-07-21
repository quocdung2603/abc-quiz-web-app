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
    <div className="flex flex-col max-w-7xl mx-auto space-y-14 py-10 px-4 animate-fade-in">
      {/* Banner + bài viết nhỏ */}
      <div className="w-full flex flex-col md:flex-row gap-8 items-stretch">
        {/* Banner lớn */}
        <div className="md:w-2/3 w-full">
          <BlogBanner
            author="ABC"
            imageUrl="https://picsum.photos/800/400"
            avatarText="C"
            category="C++"
            date="21/2/2025"
            title="Lên trình C++ cùng ABCquiz"
          />
        </div>
        {/* Danh sách bài viết nhỏ */}
        <div className="md:w-1/3 w-full flex flex-col gap-4">
          <BlogItemSm />
          <BlogItemSm />
          <BlogItemSm />
          <BlogItemSm />
        </div>
      </div>
      {/* Grid bài viết nổi bật */}
      <div>
        <h2 className="text-heading-2 font-bold text-primary mb-6">
          Bài viết nổi bật
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
      {/* Tin tức mới nhất */}
      <BlogLatest
        date="21/2/2002"
        title="Học lập trình cùng ABCQuiz"
        image="https://picsum.photos/200/300?random=1"
        author="Abc"
        content="Việc học lập trình đòi hỏi phải luyện tập mỗi ngày. Lập trình càng khó, chúng tôi càng thích. Trong các bài kiểm tra lập trình sẽ giúp bạn nâng cao kỹ năng lập trình của KQUIZ là..."
      />
      {/* Tin tức khác */}
      <div>
        <h2 className="text-heading-2 font-bold text-primary mb-6 mt-10">
          Tin tức khác
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
