import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

const ClientLayout = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div className="font-sans bg-white min-h-screen">
      {location.pathname !== "/profile" && <Header />}
      <Outlet />
      <Footer />
    </div>
  );
};

export default ClientLayout;
