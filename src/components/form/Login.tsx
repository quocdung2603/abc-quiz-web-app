import { Form, Input, Button } from "antd";
import { CloseOutlined, LockOutlined, UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { AuthRouterLink, ClientRouterLink } from "../../utils/RouterLink";

const Login = () => {
  const onFinish = (values: any) => {
    // handle login
  };

  return (
    <div className="flex flex-row min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-yellow-50">
      {/* Left Side - Image */}
      <div className="w-2/5 min-h-full">
        <img
          src={"https://picsum.photos/300"}
          alt="About"
          className="w-full h-full object-cover rounded-l-2xl shadow-lg"
        />
      </div>
      {/* Right Side - Form */}
      <div className="w-3/5 flex flex-col items-center justify-center min-h-screen relative">
        <Link
          to={`${ClientRouterLink.Home}`}
          className="absolute top-5 right-10"
        >
          <CloseOutlined className="text-3xl hover:text-yellow-500 transition" />
        </Link>
        <div className="bg-white/90 p-10 rounded-2xl shadow-2xl border border-gray-100 w-full max-w-2xl">
          <h2 className="text-3xl font-extrabold text-center bg-gradient-to-r from-blue-500 via-purple-500 to-yellow-400 bg-clip-text text-transparent uppercase mb-2 drop-shadow">
            Đăng nhập
          </h2>
          <p className="text-center text-lg text-orange-500 mb-6">
            Chào ngày mới! Cùng một ngày tốt lành nhé!
          </p>

          <Form layout="vertical" onFinish={onFinish}>
            <Form.Item
              name="username"
              label={<span className="font-semibold">Tên đăng nhập</span>}
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập tên đăng nhập",
                },
              ]}
            >
              <Input
                className="p-3 rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
                prefix={<UserOutlined />}
                placeholder="Nhập tên đăng nhập"
              />
            </Form.Item>

            <Form.Item
              name="password"
              label={<span className="font-semibold">Mật khẩu</span>}
              rules={[{ required: true, message: "Vui lòng nhập mật khẩu!" }]}
            >
              <Input.Password
                className="p-3 rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
                prefix={<LockOutlined />}
                placeholder="Nhập mật khẩu"
              />
            </Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full bg-gradient-to-r from-yellow-400 to-purple-400 text-white font-bold rounded-full p-3 mt-2 shadow-lg hover:scale-105 hover:from-yellow-500 hover:to-purple-500 transition"
            >
              Đăng nhập
            </Button>
          </Form>

          <div className="text-center mt-4">
            <Link to={""} className="text-orange-500 hover:underline">
              Quên mật khẩu?
            </Link>
          </div>

          <div className="text-center text-gray-600 mt-4">
            Bạn chưa có tài khoản?{" "}
            <Link
              to={`/auth/${AuthRouterLink.Register}`}
              className="text-blue-500 hover:underline"
            >
              Đăng ký ngay
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
