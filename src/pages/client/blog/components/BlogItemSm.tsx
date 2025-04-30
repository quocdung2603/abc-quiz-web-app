const BlogItemSm = () => {
  return (
    <div className="flex border-b bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Text content */}
      <div className="flex flex-col justify-between p-4 w-3/4 space-y-4">
        <h3 className="text-lg font-semibold leading-snug text-gray-900">
          Cách tăng level lập trình cùng ABCquiz
        </h3>
        <div className="flex justify-between text-sm text-gray-600">
          <span className="font-medium">Abc Company</span>
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
