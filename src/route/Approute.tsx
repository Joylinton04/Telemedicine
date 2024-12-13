import Layout from "@/Layout/Layout";
import AllAppointments from "@/Pages/AllAppointments";
import Appointments from "@/Pages/Appointments";
import DoctorProfile from "@/Pages/DoctorProfile";
import Financial from "@/Pages/Financial";
import Home from "@/Pages/Home";
import LandingPage from "@/Pages/LandingPage";
import Login from "@/Pages/Login";
import Patient from "@/Pages/Patient";
import Profile from "@/Pages/Profile";
import Register from "@/Pages/Register";
import Settings from "@/Pages/Settings";
import { createBrowserRouter } from "react-router-dom";

const Approute = createBrowserRouter(
  [
    {
      path: "/landingpage",
      element: <LandingPage />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
          index: true,
        },
        {
          path: "/appointments",
          element: <AllAppointments/>,
        },
        {
          path: "/patient/:id",
          element: <Patient />,
        },
        {
          path: "profile",
          element: <Profile/>,
        },
        {
          path: "financial",
          element: <Financial />,
        },
        {
          path: "settings",
          element: <Settings />,
        },
      ],
    },
  ],
  {
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true,
    },
  }
);

export default Approute;
