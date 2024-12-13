import { useAppSelector } from "@/redux/store";
import DoctorsDashboard from "./DoctorsDashboard";
import PatientDashboard from "./PatientDashboard";

const Home = () => {
  const user = useAppSelector((state) => state.currentUser);
  return (
    <div className="p-4 pb-6 ssm:p-2">
      {/* h-[calc(100vh-70px)] */}
      {user?.isDoctor? <DoctorsDashboard /> : <PatientDashboard/>}
    </div>
  );
};

export default Home;
