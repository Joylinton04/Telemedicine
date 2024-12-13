import { useAppSelector } from "@/redux/store";
import DoctorProfile from "./DoctorProfile";
import PatientProfile from "./patients/PatientProfile";

const Profile = () => {
const user = useAppSelector((state) => state.currentUser);
  return (
    <div>
      {user?.isDoctor? <DoctorProfile/> : <PatientProfile/>}
    </div>
  )
}

export default Profile;
