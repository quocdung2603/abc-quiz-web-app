const AccountEdit = () => {
  return (
    <div className="w-full flex flex-col space-y-5">
      <div className="flex flex-col mx-20 space-y-2">
        <p className="font-semibold text-lg">Username</p>
        <input
          type="text"
          className="text-lg px-4 py-1 w-full border rounded"
          value={"quocdung2603"}
        />
      </div>
      <div className="flex flex-col mx-20 space-y-2">
        <p className="font-semibold text-lg">Email</p>
        <input
          type="text"
          className="text-lg px-4 py-1 w-full border rounded"
          value={"nguyenquocdung26032003@gmail.com"}
        />
      </div>
    </div>
  );
};

export default AccountEdit;
