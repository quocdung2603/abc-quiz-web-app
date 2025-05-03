import React from "react";
import FloatButton from "../../../../components/button/FloatButton";
import { useNavigate } from "react-router-dom";
import { ArenaRouterLink } from "../../../../utils/RouterLink";

const Banner: React.FC = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/arena/${ArenaRouterLink.Arena}`);
  };

  return (
    <div className="relative bg-gradient-to-tr py-52 px-5">
      {/* Nền đen mờ */}
      <div className="absolute inset-0 bg-black opacity-90"></div>

      <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between">
        {/* Bên trái: Tiêu đề, mô tả, thanh tìm kiếm */}
        <div className="text-white md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Rèn luyện hơn <span className="text-yellow-400">5,423+</span> câu
            trắc nghiệm dành riêng cho bạn
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-md">
            Ngân hàng đề thi trắc nghiệm đa dạng, dành riêng cho các ngành học
            lập trình, khoa học, sư phạm, kinh tế. Cùng ABC Quiz: Luyện tập -
            Thi thử - Kiểm tra nguồn kiến thức!
          </p>
          <div className="flex flex-row mt-8 max-w-lg rounded p-1 bg-white space-x-2">
            <input
              className="outline-none w-2/4 p-1 text-black"
              placeholder="Tìm..."
            />
            <div className="flex flex-row items-center border border-gray-300 w-1/4">
              <select className="outline-none text-black text-sm">
                <option label="#Chọn danh mục" value={""} />
                <option
                  label="Công nghệ thông tin"
                  value={"Công nghệ thông tin"}
                />
                <option label="Kinh tế" value={"Kinh tế"} />
                <option label="Sư phạm" value={"Sư phạm"} />
              </select>
            </div>
            <button className="w-1/4 bg-yellow-500 font-semibold text-white p-1 rounded hover:bg-yellow-600 hover:text-white transition-all duration-200">
              Tìm kiếm
            </button>
          </div>
        </div>

        {/* Bên phải: Hình ảnh xếp chồng và thông báo */}
        <div className="relative md:w-1/2 flex justify-end">
          <div className="relative w-full max-w-md">
            {/* Hình ảnh chính */}
            <img
              src="https://picsum.photos/300/350"
              alt="Hình ảnh học tập"
              className="rounded-lg shadow-lg absolute top-0 right-200 z-10"
            />
            {/* Hình ảnh phụ 1 */}
            <img
              src="https://picsum.photos/200/250"
              alt="Hình ảnh học tập 2"
              className="rounded-lg shadow-lg absolute top-48 right-96 z-20"
            />
            {/* Hình ảnh phụ 2 */}
            <img
              src="https://picsum.photos/180/220"
              alt="Hình ảnh học tập 3"
              className="rounded-lg shadow-lg absolute top-20 right-0 z-30"
            />

            {/* Thông báo "Hoàn thành!" */}
            <div className="absolute top-96 right-0 bg-yellow-100 text-black px-3 py-1 rounded-lg shadow-lg z-40 text-sm">
              Hoàn thành! Được 150/50 câu
            </div>
            {/* Thông báo "66% tham gia" */}
            <div className="absolute -bottom-5 right-1/2 bg-white text-black px-3 py-1 rounded-lg shadow-lg z-40 text-sm">
              66% tham gia giải đề này
            </div>
          </div>
        </div>
      </div>

      <FloatButton onClicked={handleClick} />
    </div>
  );
};

export default Banner;
