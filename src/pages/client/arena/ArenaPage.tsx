import { useState } from "react";
import { MenuOutlined } from "@ant-design/icons";
import ArenaDrawer from "./components/ArenaDrawer";
import { Modal, notification, Table, TableProps } from "antd";
import Column from "./components/Column";
import CreateMatch from "./components/CreateMatch";
import FindMatch from "./components/FindMatch";
import ExitArena from "./components/ExitArena";
import { useNavigate } from "react-router-dom";
import { ArenaRouterLink } from "../../../utils/RouterLink";
import InfoMatch from "./components/InfoMatch";

interface Arena {
  id: string;
  type: string;
  topic: string;
  quantity: number;
  numOfQuest: number;
  duration: string;
  status: string;
}

const types = ["Cộng đồng", "Cá nhân"];
const topics = [
  "C++ cơ bản",
  "Python nâng cao",
  "HTML & CSS",
  "JavaScript ES6",
  "ReactJS",
  "Node.js",
  "SQL",
  "Java OOP",
  "Cấu trúc dữ liệu",
  "Thuật toán cơ bản",
];
const statuses = ["Đang mở", "Đã đóng"];

function getRandomElement<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function getRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const mockData: Arena[] = Array.from({ length: 20 }, (_, i) => {
  const quantity = getRandomNumber(10, 100);
  const numOfQuest = getRandomNumber(5, quantity);
  const durationMinutes = getRandomNumber(15, 60);
  return {
    id: `${i + 1}`,
    type: getRandomElement(types),
    topic: getRandomElement(topics),
    quantity,
    numOfQuest,
    duration: `${durationMinutes} phút`,
    status: getRandomElement(statuses),
  };
});

const ArenaPage: React.FC = () => {
  const navigation = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [listData, setListData] = useState<Arena[]>(mockData);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [filters, setFilters] = useState({
    orderStatus: "",
    start: Date.now(),
    end: Date.now(),
    search: "",
    pageSize: 10,
    pageNumber: 1,
  });

  const [isDrawerModal, setIsDrawerModal] = useState(false);
  const [selectedDrawerId, setSelectedDrawerId] = useState<string | null>(null);

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const onChange: TableProps<Arena>["onChange"] = (pagination) => {
    setFilters((prev) => ({
      ...prev,
      pageNumber: pagination.current ?? 1,
      pageSize: pagination.pageSize ?? 5,
    }));
  };

  const showViewModal = (isOpen: boolean, id: string) => {
    setSelectedId(id);
    setIsModalOpen(isOpen);
  };

  const handleDrawerClick = (id: string) => {
    setSelectedDrawerId(id);
    setIsDrawerModal(true);
  };

  const renderDrawerContent = () => {
    switch (selectedDrawerId) {
      case "0":
        return <CreateMatch />;
      case "1":
        return <FindMatch />;
      case "2":
        return <p>Xếp ngẫu nhiên</p>;
      case "3":
        return <p>Lịch sử đấu trường</p>;
      case "4":
        return <ExitArena setIsDrawerModal={setIsDrawerModal} />;
      default:
        return <p>Chức năng đang phát triển...</p>;
    }
  };

  const showConfirmJoinModal = (id: string) => {
    Modal.confirm({
      title: "Xác nhận tham gia",
      content: `Bạn có chắc muốn tham gia cuộc thi có ID: ${id}?`,
      onOk: () => {
        notification.success({
          message: "Đăng ký thành công",
          description: `Bạn đã tham gia thành công cuộc thi với ID: ${id}`,
        });
        navigation(`/arena/${ArenaRouterLink.ArenaLobby}`);
      },
      onCancel() {
        notification.info({
          message: "Đã hủy",
          description: `Bạn đã hủy tham gia cuộc thi với ID: ${id}`,
        });
      },
    });
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex h-screen bg-gray-100 relative overflow-hidden">
      <ArenaDrawer isOpen={isSidebarOpen} onClicked={handleDrawerClick} />

      <div
        className={`w-full flex flex-col transition-all duration-300 ease-in-out ${
          isSidebarOpen ? "mr-64" : "mr-0"
        }`}
      >
        {/* Header */}
        <div className="bg-gray-800 p-4 flex flex-row items-center justify-between space-x-5">
          <div className="text-3xl text-white font-bold">ABC ARENA</div>
          <button
            onClick={handleToggleSidebar}
            className="text-white p-2 rounded-md hover:bg-gray-700 focus:outline-none"
          >
            <MenuOutlined className="text-xl" />
          </button>
        </div>

        {/* Main content */}
        <div className="w-full p-10 flex flex-col space-y-10">
          <h1 className="text-3xl font-semibold text-center">
            CÁC CUỘC THI HIỆN TẠI
          </h1>
          <Table
            columns={Column(showViewModal, showConfirmJoinModal)}
            dataSource={listData.map((item, index) => ({
              ...item,
              key: index,
            }))}
            pagination={{
              pageSize: 10,
              total: listData.length,
            }}
            onChange={onChange}
          />
        </div>

        {/* Chi tiết trận đấu */}
        <Modal
          width={800}
          open={isModalOpen}
          onCancel={closeModal}
          cancelButtonProps={{ className: "hidden" }}
          okButtonProps={{ className: "hidden" }}
        >
          <InfoMatch />
        </Modal>

        {/* Modal chức năng từ drawer */}
        <Modal
          width={800}
          title=""
          open={isDrawerModal && selectedDrawerId !== null}
          onCancel={() => setIsDrawerModal(false)}
          cancelButtonProps={{ className: "hidden" }}
          okButtonProps={{ className: "hidden" }}
        >
          {renderDrawerContent()}
        </Modal>
      </div>
    </div>
  );
};

export default ArenaPage;
