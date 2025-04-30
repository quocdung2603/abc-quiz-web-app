import Login from "../components/form/Login";
import Register from "../components/form/Register";
import { AuthRouterLink } from "../utils/RouterLink";

export const AuthRoute = [
  {
    path: AuthRouterLink.Login,
    element: Login,
  },
  {
    path: AuthRouterLink.Register,
    element: Register,
  },
];