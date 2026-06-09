import { Data } from "@/pages/dataPage/DataPage";
import { Home } from "@/pages/homePage/HomePage";
import { Layout } from "@/pages/layout/Layout";
import { Favorites } from "@/pages/Favorites";
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
        path: "favorites",
        element: <Favorites />,
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
