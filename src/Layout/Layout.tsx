import Footer from "@/global/Footer";
import Navbar from "@/global/Navbar";
import Sidebar from "@/global/Sidebar";
import ProtectedRoutes from "@/route/ProtectedRoutes";


const Layout = () => {
  return (
    <div className="min-h-screen flex font-main">
      <Sidebar />
      <div className="grow">
        <Navbar/>
        <ProtectedRoutes/>
      </div>
    </div>
  );
};

export default Layout;
