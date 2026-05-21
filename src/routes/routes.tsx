import { Data } from "@/pages/datas/Data";
import { Home } from "@/pages/home/Home";
import { Layout } from "@/pages/layout/Layout";
import { Locations } from "@/pages/Locations";
import { Settings } from "@/pages/Settings";
import { createBrowserRouter } from "react-router";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "data",
        element: <Data />,
      },
      {
        path: "locations",
        element: <Locations />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
    ],
  },

  {
    path: "*",
    element: <Home />,
  },
]);
