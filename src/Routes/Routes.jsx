import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";

import Home from "../Pages/Home";
import CategoryNews from "../Layouts/CategoryNews";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      { index: true, Component: Home },
      { path: "/category/:id", element: <CategoryNews></CategoryNews> },
    ],
  },
  {
    path: "/auth",
    element: <div>Auth</div>,
  },
  {
    path: "/news",
    element: <div>News</div>,
  },
  {
    path: "/*",
    element: <div>Error 404</div>,
  },
]);

export default router;
