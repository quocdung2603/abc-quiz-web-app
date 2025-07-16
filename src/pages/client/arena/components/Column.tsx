import { Button, TableColumnsType, Tag, Tooltip } from "antd";
import { UsergroupAddOutlined, FieldTimeOutlined, AppstoreOutlined, QuestionCircleOutlined, CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";

const Column = (
  showViewModal: (isOpen: boolean, id: string) => void,
  showConfirmJoinModal: (id: string) => void
): TableColumnsType<any> => [
  {
    title: "Id",
    dataIndex: "id",
    align: "center",
    render(value) {
      return <span>{value}</span>;
    },
  },
  {
    title: "Loại",
    dataIndex: "type",
    align: "center",
    render(value) {
      return (
        <span className="flex items-center justify-center gap-1">
          <AppstoreOutlined className="text-accent" />
          <span>{value}</span>
        </span>
      );
    },
  },
  {
    title: "Chủ đề",
    dataIndex: "topic",
    align: "center",
    render(value) {
      return (
        <span className="flex items-center justify-center gap-1">
          <QuestionCircleOutlined className="text-primary" />
          <span>{value}</span>
        </span>
      );
    },
  },
  {
    title: "Số lượng",
    dataIndex: "quantity",
    align: "center",
    render(value) {
      return (
        <span className="flex items-center justify-center gap-1">
          <UsergroupAddOutlined className="text-secondary" />
          <span>{value}</span>
        </span>
      );
    },
  },
  {
    title: "Số câu hỏi",
    dataIndex: "numOfQuest",
    align: "center",
    render(value) {
      return (
        <span className="flex items-center justify-center gap-1">
          <QuestionCircleOutlined className="text-accent" />
          <span>{value}</span>
        </span>
      );
    },
  },
  {
    title: "Thời lượng",
    dataIndex: "duration",
    align: "center",
    render(value) {
      return (
        <span className="flex items-center justify-center gap-1">
          <FieldTimeOutlined className="text-primary" />
          <span>{value}</span>
        </span>
      );
    },
  },
  {
    title: "Trạng thái",
    dataIndex: "status",
    align: "center",
    render(value) {
      const isOpen = value === "Đang mở";
      return (
        <Tag
          color={isOpen ? "success" : "error"}
          className={`px-3 py-1 text-base font-semibold rounded-full shadow ${isOpen ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}
          icon={isOpen ? <CheckCircleOutlined /> : <CloseCircleOutlined />}
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
        <div className="flex flex-row justify-center space-x-3">
          <Tooltip title="Xem chi tiết">
            <button
              onClick={() => {
                showViewModal(true, record.id.toString());
              }}
              className="px-4 py-2 rounded-lg bg-primary text-white font-semibold shadow hover:bg-accent transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent"
            >
              Xem chi tiết
            </button>
          </Tooltip>
          <Tooltip title="Tham gia">
            <button
              onClick={() => {
                showConfirmJoinModal(record.id.toString());
              }}
              className="px-4 py-2 rounded-lg bg-accent text-white font-semibold shadow hover:bg-primary transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary"
            >
              Tham gia
            </button>
          </Tooltip>
        </div>
      );
    },
  },
];

export default Column;
