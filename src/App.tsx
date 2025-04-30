import { Route, Routes } from "react-router-dom";
import { ClientRoute } from "./routes/ClientRoute";
import { AuthRoute } from "./routes/AuthRoute";
import AuthLayout from "./layouts/Auth/AuthLayout";
import ClientLayout from "./layouts/client/ClientLayout";

export default function App() {
  return (
    <Routes>
      <Route path="/auth" element={<AuthLayout />}>
        {AuthRoute.map((route, index) => {
          return (
            <Route
              key={index + 0}
              path={route.path}
              element={<route.element />}
            />
          );
        })}
      </Route>
      <Route path="" element={<ClientLayout />}>
        {ClientRoute.map((route, index) => {
          return (
            <Route
              key={index + 0}
              path={route.path}
              element={<route.element />}
            />
          );
        })}
      </Route>
    </Routes>
  );
}
