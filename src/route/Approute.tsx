import Layout from "@/Layout/Layout";
import Appointments from "@/Pages/Appointments";
import DoctorProfile from "@/Pages/DoctorProfile";
import Financial from "@/Pages/Financial";
import Home from "@/Pages/Home";
import LandingPage from "@/Pages/LandingPage";
import Login from "@/Pages/Login";
import Patient from "@/Pages/Patient";
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
          element: <Appointments />,
        },
        {
          path: "/patient/:id",
          element: <Patient />,
        },
        {
          path: "profile",
          element: <DoctorProfile />,
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
