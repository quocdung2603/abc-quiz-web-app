const InfoEdit = () => {
  return (
    <form className="w-full max-w-2xl mx-auto flex flex-col gap-10 bg-white/90 p-8">
      <span className="text-xl font-bold border-b pb-2 mb-2 text-gray-800 tracking-wide">
        Thông tin cơ bản
      </span>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/3 text-gray-500 text-base flex items-center">
          Giới thiệu để mọi người hiểu thêm về bạn. Một số thông tin sẽ được
          hiển thị công khai.
        </div>
        <div className="flex-1 flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label
              className="font-semibold text-base text-gray-700"
              htmlFor="displayName"
            >
              Tên hiển thị
            </label>
            <input
              id="displayName"
              type="text"
              className="text-base px-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
              value={"quocdung2603"}
              readOnly
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              className="font-semibold text-base text-gray-700"
              htmlFor="dob"
            >
              Ngày sinh
            </label>
            <input
              id="dob"
              type="date"
              className="text-base px-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
              value={"2003-03-26"}
              readOnly
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              className="font-semibold text-base text-gray-700"
              htmlFor="gender"
            >
              Giới tính
            </label>
            <select
              id="gender"
              className="text-base px-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
              value={"Nam"}
              disabled
            >
              <option value="Nam">Nam</option>
              <option value="Nữ">Nữ</option>
            </select>
          </div>
        </div>
      </div>
      <span className="text-xl font-bold border-b pb-2 mb-2 text-gray-800 tracking-wide">
        Thông tin liên hệ
      </span>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/3 text-gray-500 text-base flex items-center">
          Thông tin để mọi người có thể liên lạc với bạn khi cần.
        </div>
        <div className="flex-1 flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label
              className="font-semibold text-base text-gray-700"
              htmlFor="phone"
            >
              Số điện thoại
            </label>
            <input
              id="phone"
              type="text"
              className="text-base px-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
              value={"0901291640"}
              readOnly
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              className="font-semibold text-base text-gray-700"
              htmlFor="address"
            >
              Địa chỉ
            </label>
            <input
              id="address"
              type="text"
              className="text-base px-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
              value={
                "349/19 Nguyễn Văn Trỗi, Hiệp Thành, Thủ Dầu Một, Bình Dương"
              }
              readOnly
            />
          </div>
        </div>
      </div>
      <button
        type="button"
        className="mt-4 w-fit self-center px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-semibold shadow hover:scale-105 transition"
      >
        Lưu thông tin
      </button>
    </form>
  );
};

export default InfoEdit;
