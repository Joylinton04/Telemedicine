import Layout from "@/Layout/Layout";
import Appointments from "@/Pages/Appointments";
import DoctorProfile from "@/Pages/DoctorProfile";
import Financial from "@/Pages/Financial";
import Home from "@/Pages/Home";
import Patient from "@/Pages/Patient";
import { createBrowserRouter } from "react-router-dom";

const Approute = createBrowserRouter(
  [
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
