const InfoEdit = () => {
  return (
    <div className="w-full flex flex-col space-y-10">
      <span className="p-4 text-lg font-semibold border-b">
        Thông tin cơ bản
      </span>
      <div className="w-full flex flex-row space-x-5">
        <div className="w-1/4 p-6">
          <span className="">
            Giới thiệu để mọi người hiểu thêm về bạn. Một số thông tin sẽ được
            hiển thị công khai.
          </span>
        </div>
        <div className="w-3/4 flex flex-col">
          <div className="flex flex-col mx-20 space-y-2">
            <p className="font-semibold text-lg">Tên hiển thị</p>
            <input
              type="text"
              className="text-lg px-4 py-1 w-full border rounded"
              value={"quocdung2603"}
            />
          </div>
          <div className="flex flex-col mx-20 space-y-2">
            <p className="font-semibold text-lg">Ngày sinh</p>
            <input
              type="date"
              className="text-lg px-4 py-1 w-full border rounded"
              value={"2003-03-26"}
            />
          </div>
          <div className="flex flex-col mx-20 space-y-2">
            <p className="font-semibold text-lg">Giới tính</p>
            <select
              defaultValue={"Nam"}
              className="text-lg px-4 py-1 w-full border rounded"
              value={"Nam"}
            >
              <option value={"Nam"}>Nam</option>
              <option value={"Nữ"}>Nữ</option>
            </select>
          </div>
        </div>
      </div>
      <span className="p-4 text-lg font-semibold border-b">
        Thông tin liên hệ
      </span>
      <div className="w-full flex flex-row space-x-5">
        <div className="w-1/4 p-6">
          <span className="">
            Thông tin để mọi người có thể liên lạc với bạn khi cần.
          </span>
        </div>
        <div className="w-3/4 flex flex-col">
          <div className="flex flex-col mx-20 space-y-2">
            <p className="font-semibold text-lg">Tên hiển thị</p>
            <input
              type="text"
              className="text-lg px-4 py-1 w-full border rounded"
              value={"0901291640"}
            />
          </div>
          <div className="flex flex-col mx-20 space-y-2">
            <p className="font-semibold text-lg">Địa chỉ</p>
            <input
              type="text"
              className="text-lg px-4 py-1 w-full border rounded"
              value={
                "349/19 Nguyễn Văn Trỗi, Hiệp Thành, Thủ Dầu Một, Bình Dương"
              }
            />
          </div>
        </div>
      </div>
      <button className="mx-auto w-fit p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Lưu thông tin
      </button>
    </div>
  );
};

export default InfoEdit;
