import Footer from "@/global/Footer";
import Navbar from "@/global/Navbar";
import Sidebar from "@/global/Sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="h-screen flex font-main overflow-hidden">
      <div className="w-[200px] sticky top-0 z-20">
        <Sidebar />
      </div>
      <div className="grow overflow-y-auto">
        <Navbar/>
        <Outlet/>
      </div>
    </div>
  );
};

export default Layout;
