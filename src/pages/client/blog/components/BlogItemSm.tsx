const BlogItemSm = () => {
  return (
    <div className="flex border-b bg-white rounded-xl shadow-md overflow-hidden hover:shadow-neon transition-shadow duration-300 animate-fade-in group">
      {/* Text content */}
      <div className="flex flex-col justify-between p-4 w-3/4 space-y-4">
        <h3 className="text-lg font-bold leading-snug text-primary group-hover:text-accent transition-colors duration-200 line-clamp-2">
          Cách tăng level lập trình cùng ABCquiz
        </h3>
        <div className="flex justify-between text-sm text-gray-600">
          <span className="font-semibold text-accent">Abc Company</span>
          <span className="bg-gradient-to-r from-primary to-accent text-white px-2 py-1 rounded-full text-xs font-bold ml-2">
            BLOG
          </span>
          <span>27/7/2025</span>
        </div>
      </div>
      {/* Image */}
      <div className="w-1/4 h-auto">
        <img
          src="https://picsum.photos/200"
          alt="alt"
          className="object-cover w-full h-full rounded"
        />
      </div>
    </div>
  );
};

export default BlogItemSm;
