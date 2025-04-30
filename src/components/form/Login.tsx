import { Form, Input, Button } from "antd";
import { CloseOutlined, LockOutlined, UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { AuthRouterLink, ClientRouterLink } from "../../utils/RouterLink";

const Login = () => {
  const onFinish = (values: any) => {
    // console.log("Login data:", values);
    // const dataLogin: UserLoginRequest = {
    //   email: values.email,
    //   password: values.password,
    // };
    // login(dataLogin);
    // navigate(`${ClientRouterLink.Home}`);
  };

  return (
    <div className="flex flex-row min-h-screen">
      {/* Left Side - Image */}
      <div className="w-2/5 min-h-full">
        <img
          src={"https://picsum.photos/300"}
          alt="About"
          className="w-full h-full object-cover"
        />
      </div>
      {/* Right Side - Form */}
      <div className="w-3/5 flex flex-col items-center justify-center min-h-screen">
        <Link
          to={`${ClientRouterLink.Home}`}
          className="absolute top-5 right-10"
        >
          <CloseOutlined className="text-3xl hover:text-yellow-500" />
        </Link>
        <div className="bg-white p-8 rounded-lg space-y-5">
          <h2 className="text-3xl font-bold text-center text-gray-800 uppercase">
            Đăng nhập
          </h2>
          <p className="text-center text-xl text-orange-500 mb-6">
            Chào ngày mới! Cùng một ngày tốt lành nhé!
          </p>

          <Form layout="vertical" onFinish={onFinish}>
            <Form.Item
              name="Tên đăng nhập"
              label="Tên đăng nhập"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập tên đăng nhập",
                },
              ]}
            >
              <Input
                className="p-2"
                prefix={<UserOutlined />}
                placeholder="Nhập tên đăng nhập"
              />
            </Form.Item>

            <Form.Item
              name="password"
              label="Mật khẩu"
              rules={[{ required: true, message: "Vui lòng nhập mật khẩu!" }]}
            >
              <Input.Password
                className="p-2"
                prefix={<LockOutlined />}
                placeholder="Nhập mật khẩu"
              />
            </Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full bg-yellow-400 hover:bg-yellow-500 p-2"
            >
              Đăng nhập
            </Button>
          </Form>

          <div className="text-center mt-4">
            <Link to={""} className="text-orange-500">
              Quên mật khẩu?
            </Link>
          </div>

          <div className="text-center text-gray-600 mt-4">
            Bạn chưa có tài khoản?{" "}
            <Link
              to={`/auth/${AuthRouterLink.Register}`}
              className="text-blue-500"
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
