import { useState } from "react";
import { Input, Select, Button, Form, Checkbox } from "antd";
import {
  LockOutlined,
  UserOutlined,
  MailOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import { AuthRouterLink, ClientRouterLink } from "../../utils/RouterLink";

const { Option } = Select;

const Register = () => {
  const navigate = useNavigate();
  const [agreeTerms, setAgreeTerms] = useState(false);

  const onFinish = (values: any) => {
    console.log("Form values:", values);
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
        <button
          className="absolute top-5 right-10"
          onClick={() => navigate(`${ClientRouterLink.Home}`)}
        >
          <CloseOutlined className="text-3xl" />
        </button>
        <div className="bg-white p-8 rounded-lg space-y-5">
          <h2 className="text-3xl font-bold text-center text-gray-800 uppercase">
            Đăng ký
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
              name="Email"
              label="Email"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập email",
                },
              ]}
            >
              <Input
                className="p-2"
                prefix={<MailOutlined />}
                placeholder="Nhập email"
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
            <Form.Item
              name="confirmPassword"
              label="Nhập lại mật khẩu"
              dependencies={["password"]}
              hasFeedback
              rules={[
                { required: true, message: "Vui lòng nhập lại mật khẩu" },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error("Mật khẩu không khớp!"));
                  },
                }),
              ]}
            >
              <Input.Password
                prefix={<LockOutlined />}
                placeholder="Nhập lại mật khẩu"
              />
            </Form.Item>

            <Form.Item>
              <Checkbox
                checked={agreeTerms}
                onChange={(e) => setAgreeTerms(e.target.checked)}
              >
                Tôi đã đọc và đồng ý với <Link to="#">Điều khoản dịch vụ</Link>{" "}
                và <Link to="#">Chính sách bảo mật</Link> của Giao Hàng Nhanh.
              </Checkbox>
            </Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full bg-yellow-400 hover:bg-yellow-500 p-2"
              disabled={!agreeTerms}
            >
              Đăng ký
            </Button>
          </Form>

          <div className="text-center text-gray-600 mt-4">
            Bạn đã có tài khoản?{" "}
            <Link
              to={`/auth/${AuthRouterLink.Login}`}
              className="text-blue-500"
            >
              Đăng nhập ngay
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
