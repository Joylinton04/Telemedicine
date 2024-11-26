import Footer from "@/global/Footer";
import Navbar from "@/global/Navbar";
import Sidebar from "@/global/Sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="min-h-screen flex font-main">
      <Sidebar />
      <div className="grow">
        <Navbar/>
        <Outlet/>
      </div>
    </div>
  );
};

export default Layout;
