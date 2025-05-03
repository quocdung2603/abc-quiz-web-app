import { Button, TableColumnsType } from "antd";

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
      return <p>{value}</p>;
    },
  },
  {
    title: "Chủ đề",
    dataIndex: "topic",
    align: "center",
    render(value) {
      return <p>{value}</p>;
    },
  },
  {
    title: "Số lượng",
    dataIndex: "quantity",
    align: "center",
    render(value) {
      return <p>{value}</p>;
    },
  },
  {
    title: "Số câu hỏi",
    dataIndex: "numOfQuest",
    align: "center",
    render(value) {
      return <p>{value}</p>;
    },
  },
  {
    title: "Thời lượng",
    dataIndex: "duration",
    align: "center",
    render(value) {
      return <p>{value}</p>;
    },
  },
  {
    title: "Trạng thái",
    dataIndex: "status",
    align: "center",
    render(value) {
      return <p>{value}</p>;
    },
  },
  {
    title: "",
    dataIndex: "action",
    align: "center",
    render(_, record) {
      return (
        <div className="flex flex-row justify-center space-x-3">
          <Button
            onClick={() => {
              showViewModal(true, record.id.toString());
            }}
          >
            Xem chi tiết
          </Button>
          <Button
            onClick={() => {
              showConfirmJoinModal(record.id.toString());
            }}
          >
            Tham gia
          </Button>
        </div>
      );
    },
  },
];

export default Column;
