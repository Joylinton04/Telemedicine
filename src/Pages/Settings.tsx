import { LogOut, } from "lucide-react";
import { logout } from "@/redux/loginSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { useState } from "react";

const Settings = () => {
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const handleLogout = () => {
    setIsLoading(true);
    setTimeout(() => {
      dispatch(logout());
      setIsLoading(false);
    },1500)
  }
  return (
    <div className="h-[calc(100vh-70px)] p-6 font-main3">
      <div className="flex items-center gap-4 cursor-pointer bg-white rounded-lg py-3 px-4 w-max" onClick={()=>handleLogout()}>
        <LogOut strokeWidth={3} size={30} className="text-red-500"/>
        <h1 className="text-xl font-bold">Logout</h1>
      </div>
      {isLoading && (
        <div className="fixed top-0 left-0 z-50 w-full h-full bg-[#21212190]">
          <div className="flex justify-center items-center h-full w-full px-4 ssm:p-2">
            <div className="bg-white w-[200px] h-[200px] p-2 flex justify-center items-center rounded">
              <div className="flex flex-col items-center gap-2">
                <div className="loader1"></div>
                <div>Please Wait...</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Settings;
