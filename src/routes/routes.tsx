import { Data } from "@/pages/dataPage/Data";
import { Home } from "@/pages/homePage/Home";
import { Layout } from "@/pages/layout/Layout";
import { Locations } from "@/pages/Locations";
import { NotFound } from "@/pages/not-foundPage/NotFound";
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
        path:'data',
        element:<Data/>
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
    element: <NotFound />,
  },
]);
