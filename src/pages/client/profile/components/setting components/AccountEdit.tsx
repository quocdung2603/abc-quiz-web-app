const AccountEdit = () => {
  return (
    <form className="w-full max-w-xl mx-auto flex flex-col gap-8 bg-white/90  p-8 ">
      <div className="flex flex-col gap-2">
        <label
          className="font-semibold text-base text-gray-700"
          htmlFor="username"
        >
          Username
        </label>
        <input
          id="username"
          type="text"
          className="text-base px-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
          value={"quocdung2603"}
          readOnly
        />
      </div>
      <div className="flex flex-col gap-2">
        <label
          className="font-semibold text-base text-gray-700"
          htmlFor="email"
        >
          Email
        </label>
        <input
          id="email"
          type="text"
          className="text-base px-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
          value={"nguyenquocdung26032003@gmail.com"}
          readOnly
        />
      </div>
      <button
        type="button"
        className="mt-4 w-fit self-center px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-semibold shadow hover:scale-105 transition"
      >
        Lưu thay đổi
      </button>
    </form>
  );
};

export default AccountEdit;
