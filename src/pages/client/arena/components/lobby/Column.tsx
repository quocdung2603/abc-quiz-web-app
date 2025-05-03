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
              showKickModal(record.id.toString());
            }}
          >
            Đuổi
          </Button>
        </div>
      );
    },
  },
];

export default Column;
