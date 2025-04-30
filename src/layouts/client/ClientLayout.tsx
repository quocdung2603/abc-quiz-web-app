import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

const ClientLayout = () => {
  return (
    <div className="font-sans bg-white min-h-screen">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default ClientLayout;
