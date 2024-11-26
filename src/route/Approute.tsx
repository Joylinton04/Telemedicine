import Layout from "@/Layout/Layout";
import Appointments from "@/Pages/Appointments";
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
