import { Forecast } from "@/pages/datas/Data";
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
        path: "forecast",
        element: <Forecast />,
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
