import { useAppSelector } from "@/redux/store";
import { Outlet, Navigate } from "react-router-dom"

const ProtectedRoutes = () => {
 const user = useAppSelector(state => state.isAuthenticated)
 return user ? <Outlet/> : <Navigate to="/login"/>
}

export default ProtectedRoutes;