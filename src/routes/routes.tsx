import { Data } from "@/pages/dataPage/DataPage";
import { Home } from "@/pages/homePage/HomePage";
import { Layout } from "@/pages/layout/Layout";
import { Favorites } from "@/pages/favoritesPage/Favorites";
import { NotFound } from "@/pages/not-foundPage/NotFound";
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
      
    ],
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);
