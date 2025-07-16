const PasswordEdit = () => {
  return (
    <form className="w-full max-w-xl mx-auto flex flex-col gap-8 bg-white/90 p-8">
      <span className="text-xl font-bold border-b pb-2 mb-2 text-gray-800 tracking-wide">
        Thay đổi mật khẩu
      </span>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label
            className="font-semibold text-base text-gray-700"
            htmlFor="currentPassword"
          >
            Mật khẩu hiện tại
          </label>
          <input
            id="currentPassword"
            type="password"
            className="text-base px-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
            value={""}
            readOnly
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            className="font-semibold text-base text-gray-700"
            htmlFor="newPassword"
          >
            Mật khẩu mới
          </label>
          <input
            id="newPassword"
            type="password"
            className="text-base px-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
            value={""}
            readOnly
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            className="font-semibold text-base text-gray-700"
            htmlFor="confirmPassword"
          >
            Nhập lại mật khẩu mới
          </label>
          <input
            id="confirmPassword"
            type="password"
            className="text-base px-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
            value={""}
            readOnly
          />
        </div>
      </div>
      <button
        type="button"
        className="mt-4 w-fit self-center px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-semibold shadow hover:scale-105 transition"
      >
        Đổi mật khẩu
      </button>
    </form>
  );
};

export default PasswordEdit;
