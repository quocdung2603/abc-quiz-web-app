import { Route, Routes } from "react-router-dom";
import { ClientRoute } from "./routes/ClientRoute";
import { AuthRoute } from "./routes/AuthRoute";
import AuthLayout from "./layouts/others/AuthLayout";
import ClientLayout from "./layouts/client/ClientLayout";
import ArenaLayout from "./layouts/others/ArenaLayout";
import { ArenaRoute } from "./routes/ArenaRoute";
import AdminLayout from "./layouts/admin/AdminLayout";
import { AdminRoute } from "./routes/AdminRoute";

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
      <Route path="/arena" element={<ArenaLayout />}>
        {ArenaRoute.map((route, index) => {
          return (
            <Route
              key={index + 0}
              path={route.path}
              element={<route.element />}
            />
          );
        })}
      </Route>
      <Route path="/admin" element={<AdminLayout />}>
        {AdminRoute.map((route, index) => {
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
