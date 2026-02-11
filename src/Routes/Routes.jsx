import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home";
import CategoryNews from "../Layouts/CategoryNews";
import Login from "../Pages/Login";
import AuthLayout from "../Layouts/AuthLayout";
import Register from "../Pages/Register";
import NewsdetailsLayout from "../Layouts/NewsdetailsLayout";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      { index: true, Component: Home },
      {
        path: "/category/:id",
        loader: () => fetch("/news.json"),
        element: <CategoryNews></CategoryNews>,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/news/:id",
    loader: () => fetch("/news.json"),
    element: (
      <PrivateRoutes>
        <NewsdetailsLayout></NewsdetailsLayout>
      </PrivateRoutes>
    ),
  },
  {
    path: "/*",
    element: <div>Error 404</div>,
  },
]);

export default router;
