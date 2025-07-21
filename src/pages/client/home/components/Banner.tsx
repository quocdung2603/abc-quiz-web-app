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
    <div className="relative bg-gradient-to-tr from-primary to-accent py-32 md:py-52 px-5 animate-fade-in overflow-hidden">
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-black/80"></div>
      <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between z-10">
        {/* Bên trái: Tiêu đề, mô tả, thanh tìm kiếm */}
        <div className="text-white md:w-1/2 mb-12 md:mb-0 flex flex-col gap-8 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight drop-shadow-neon">
            Rèn luyện hơn <span className="text-yellow-400">5,423+</span> câu
            trắc nghiệm dành riêng cho bạn
          </h1>
          <p className="text-lg text-gray-300 max-w-md">
            Ngân hàng đề thi trắc nghiệm đa dạng, dành riêng cho các ngành học
            lập trình, khoa học, sư phạm, kinh tế. Cùng ABC Quiz: Luyện tập -
            Thi thử - Kiểm tra nguồn kiến thức!
          </p>
          {/* Thanh tìm kiếm */}
          <div className="flex flex-row mt-4 max-w-lg rounded-xl p-2 bg-white/90 space-x-2 shadow-lg border border-accent backdrop-blur-md">
            <input
              className="outline-none w-2/4 p-3 text-black rounded-lg text-base focus:ring-2 focus:ring-primary"
              placeholder="Tìm đề, chủ đề..."
            />
            <div className="flex flex-row items-center border border-gray-300 w-1/4 rounded-lg overflow-hidden">
              <select className="outline-none text-black text-sm w-full p-2 bg-white">
                <option label="#Chọn danh mục" value={""} />
                <option
                  label="Công nghệ thông tin"
                  value={"Công nghệ thông tin"}
                />
                <option label="Kinh tế" value={"Kinh tế"} />
                <option label="Sư phạm" value={"Sư phạm"} />
              </select>
            </div>
            <button className="w-1/4 bg-gradient-to-r from-primary to-accent font-bold text-white p-3 rounded-lg hover:from-accent hover:to-primary transition-all duration-200 shadow-neon">
              Tìm kiếm
            </button>
          </div>
        </div>
        {/* Bên phải: Hình ảnh xếp chồng và visual indicator */}
        <div className="relative md:w-1/2 flex justify-end items-center h-[350px] md:h-[420px] w-full animate-fade-in-up">
          <div className="relative w-full max-w-md h-full flex items-center justify-center">
            {/* Hình ảnh chính */}
            <img
              src="https://picsum.photos/300/350"
              alt="Hình ảnh học tập"
              className="rounded-2xl shadow-neon absolute top-0 right-32 z-10 w-56 h-72 object-cover border-4 border-accent"
            />
            {/* Hình ảnh phụ 1 */}
            <img
              src="https://picsum.photos/200/250"
              alt="Hình ảnh học tập 2"
              className="rounded-2xl shadow-lg absolute top-40 right-64 z-20 w-40 h-56 object-cover border-4 border-primary"
            />
            {/* Hình ảnh phụ 2 */}
            <img
              src="https://picsum.photos/180/220"
              alt="Hình ảnh học tập 3"
              className="rounded-2xl shadow-lg absolute top-20 right-0 z-30 w-36 h-52 object-cover border-4 border-accent"
            />
            {/* Visual indicator */}
            <div className="absolute top-80 right-0 bg-yellow-100 text-black px-4 py-2 rounded-xl shadow-lg z-40 text-base font-bold animate-bounce border-2 border-yellow-400">
              Hoàn thành! Được 150/50 câu
            </div>
            <div className="absolute -bottom-5 right-1/2 bg-white text-black px-4 py-2 rounded-xl shadow-lg z-40 text-base font-bold border-2 border-accent animate-fade-in-up">
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
