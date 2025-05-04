import { AdminRouterLink } from "../../../utils/RouterLink";
import {
  BookOutlined,
  HomeOutlined,
  ReadOutlined,
  SafetyCertificateOutlined,
} from "@ant-design/icons";

interface MenuItem {
  content: string;
  icon?: React.ReactNode;
  href?: string;
  submenu?: MenuItem[] | null;
  isCollapse: boolean;
}

export const AdminMenu = (): MenuItem[] => {
  return [
    {
      content: "Dashboard",
      icon: <HomeOutlined />,
      href: AdminRouterLink.Dashboard,
      submenu: null,
      isCollapse: false,
    },
    {
      content: "Exam",
      icon: <BookOutlined />,
      href: AdminRouterLink.Exam,
      submenu: null,
      isCollapse: false,
    },
    {
      content: "Arena",
      icon: <SafetyCertificateOutlined />,
      href: AdminRouterLink.Arena,
      submenu: null,
      isCollapse: false,
    },
    {
      content: "Blog",
      icon: <ReadOutlined />,
      href: AdminRouterLink.Blog,
      submenu: null,
      isCollapse: false,
    },
  ];
};
