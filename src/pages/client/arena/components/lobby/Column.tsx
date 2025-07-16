import { UserOutlined, CrownOutlined } from "@ant-design/icons";
import { Tag, Tooltip } from "antd";
import { Button, TableColumnsType } from "antd";

const Column = (showKickModal: (id: string) => void): TableColumnsType<any> => [
  {
    title: "Id",
    dataIndex: "id",
    align: "center",
    render(value) {
      return <span>{value}</span>;
    },
  },
  {
    title: "Username",
    dataIndex: "username",
    align: "center",
    render(value) {
      return <p>{value}</p>;
    },
  },
  {
    title: "Vai trò",
    dataIndex: "role",
    align: "center",
    render(value) {
      const isHost = value === "Người tổ chức";
      return (
        <Tag
          color={isHost ? "warning" : "default"}
          className={`px-3 py-1 text-base font-semibold rounded-full shadow flex items-center gap-1 ${
            isHost
              ? "bg-yellow-100 text-yellow-700"
              : "bg-gray-100 text-gray-700"
          }`}
          icon={isHost ? <CrownOutlined /> : <UserOutlined />}
        >
          {value}
        </Tag>
      );
    },
  },
  {
    title: "",
    dataIndex: "action",
    align: "center",
    render(_, record) {
      return (
        <Tooltip title="Đuổi khỏi phòng">
          <button
            onClick={() => {
              showKickModal(record.id.toString());
            }}
            className="px-4 py-2 rounded-lg bg-danger text-white font-semibold shadow hover:bg-red-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-danger"
          >
            Đuổi
          </button>
        </Tooltip>
      );
    },
  },
];

export default Column;
