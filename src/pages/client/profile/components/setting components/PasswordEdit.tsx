const PasswordEdit = () => {
  return (
    <div className="w-full flex flex-col space-x-5 my-5">
      <span className="p-4 text-lg font-semibold border-b">
        Thay đổi mật khẩu
      </span>
      <div className="w-full flex flex-row space-x-5">
        <div className="w-1/4 p-6">
          <span className="">
            Giữ an toàn cho tài khoản bằng cách thay đổi mật khẩu thường xuyên.
          </span>
        </div>
        <div className="w-3/4 flex flex-col space-y-5">
          <div className="flex flex-col mx-20 space-y-2">
            <p className="font-semibold text-lg">Mật khẩu hiện tại</p>
            <input
              type="password"
              className="text-lg px-4 py-1 w-full border rounded"
              value={""}
            />
          </div>
          <div className="flex flex-col mx-20 space-y-2">
            <p className="font-semibold text-lg">Mật khẩu mới</p>
            <input
              type="password"
              className="text-lg px-4 py-1 w-full border rounded"
              value={""}
            />
          </div>
          <div className="flex flex-col mx-20 space-y-2">
            <p className="font-semibold text-lg">Nhập lại mật khẩu mới</p>
            <input
              type="password"
              className="text-lg px-4 py-1 w-full border rounded"
              value={""}
            />
          </div>
          <button className="mx-auto my-10 w-fit p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Đổi mật khẩu
          </button>
        </div>
      </div>
    </div>
  );
};

export default PasswordEdit;
