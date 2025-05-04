import ArenaPage from "../pages/admin/arena/ArenaPage";
import BlogPage from "../pages/admin/blog/BlogPage";
import DashboardPage from "../pages/admin/dashboard/DashboardPage";
import ExamPage from "../pages/admin/exam/ExamPage";
import { AdminRouterLink } from "../utils/RouterLink";

export const AdminRoute = [
  {
    path: AdminRouterLink.Dashboard,
    element: DashboardPage,
  },
  {
    path: AdminRouterLink.Exam,
    element: ExamPage,
  },
  {
    path: AdminRouterLink.Arena,
    element: ArenaPage,
  },
  {
    path: AdminRouterLink.Blog,
    element: BlogPage,
  },
];
