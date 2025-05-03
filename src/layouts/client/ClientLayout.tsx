import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

const ClientLayout = () => {
  const NoHeader = ["/profile", "/arena"];

  const NoFooter = ["/arena"];

  const location = useLocation();
  console.log(location);
  return (
    <div className="font-sans bg-white min-h-screen">
      {!NoHeader.includes(location.pathname) && <Header />}
      <Outlet />
      {!NoFooter.includes(location.pathname) && <Footer />}
    </div>
  );
};

export default ClientLayout;
