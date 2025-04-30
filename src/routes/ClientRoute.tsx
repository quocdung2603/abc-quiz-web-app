import BlogPage from "../pages/client/blog/BlogPage";
import ExamDetailPage from "../pages/client/exam/ExamDetailPage";
import ExamPage from "../pages/client/exam/ExamPage";
import ExamResultPage from "../pages/client/exam/ExamResultPage";
import ExamTestPage from "../pages/client/exam/ExamTestPage";
import HomePage from "../pages/client/home/HomePage";
import PracticePage from "../pages/client/practice/PracticePage";
import LeaderBoardPage from "../pages/client/ranking/LeaderboardPage";
import ResultPage from "../pages/client/result/ResultPage";
import { ClientRouterLink } from "../utils/RouterLink";

export const ClientRoute = [
  {
    path: ClientRouterLink.Home,
    element: HomePage,
  },
  {
    path: ClientRouterLink.Practice,
    element: PracticePage,
  },
  {
    path: ClientRouterLink.Exam,
    element: ExamPage,
  },
  {
    path: ClientRouterLink.ExamDetail,
    element: ExamDetailPage,
  },
  {
    path: ClientRouterLink.ExamTest,
    element: ExamTestPage,
  },
  {
    path: ClientRouterLink.ExamResult,
    element: ExamResultPage,
  },
  {
    path: ClientRouterLink.Result,
    element: ResultPage,
  },
  {
    path: ClientRouterLink.Leaderboard,
    element: LeaderBoardPage,
  },
  {
    path: ClientRouterLink.Blog,
    element: BlogPage,
  },
];
