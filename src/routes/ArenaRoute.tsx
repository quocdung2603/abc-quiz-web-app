import ArenaPage from "../pages/client/arena/ArenaPage";
import MatchLeaderboard from "../pages/client/arena/MatchLeaderboard";
import MatchLobby from "../pages/client/arena/MatchLobby";
import MatchResult from "../pages/client/arena/MatchResult";
import MatchStart from "../pages/client/arena/MatchStart";
import { ArenaRouterLink } from "../utils/RouterLink";

export const ArenaRoute = [
  {
    path: ArenaRouterLink.Arena,
    element: ArenaPage,
  },
  {
    path: ArenaRouterLink.ArenaLobby,
    element: MatchLobby,
  },
  {
    path: ArenaRouterLink.MatchStart,
    element: MatchStart,
  },
  {
    path: ArenaRouterLink.MatchLeaderboard,
    element: MatchLeaderboard,
  },
  {
    path: ArenaRouterLink.MatchResult,
    element: MatchResult,
  },
];
