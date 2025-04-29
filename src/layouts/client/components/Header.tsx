import { Menu, Button } from "antd";
import { Link } from "react-router-dom"; // Giả sử bạn dùng react-router để điều hướng

const Header = () => {
  return (
    <header className="bg-black flex items-center justify-between px-4">
      {/* Logo */}
      <div className="flex items-center">
        <span className="text-yellow-400 text-2xl font-bold">QUIZ</span>
      </div>

      {/* Menu chính */}
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["1"]}
        className="flex-1 bg-black"
        items={[
          { key: "1", label: <Link to="/luyen-tap">Luyện tập</Link> },
          { key: "2", label: <Link to="/de-thi">Đề thi</Link> },
          { key: "3", label: <Link to="/ket-qua-thi">Kết quả thi</Link> },
          { key: "4", label: <Link to="/bang-xep-hang">Bảng xếp hạng</Link> },
        ]}
      />

      {/* Liên kết phụ */}
      <div className="flex items-center space-x-4">
        <Link to="/bai-viet" className="text-white hover:text-yellow-400">
          Bài viết
        </Link>
        <Link to="/ve-kteam" className="text-white hover:text-yellow-400">
          Về Kteam
        </Link>
      </div>

      {/* Nút đăng nhập và thi nhanh */}
      <div className="flex items-center space-x-2">
        <Button type="default" className="border-white text-white">
          Đăng nhập/Đăng ký
        </Button>
        <Button
          type="primary"
          className="bg-yellow-400 text-black hover:bg-yellow-500"
        >
          Thi nhanh
        </Button>
      </div>
    </header>
  );
};

export default Header;
