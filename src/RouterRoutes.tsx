import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./AppLayout";
import HomePage from "./pages/HomePage";
import NewsPage from "./pages/NewsPage";
import LoginPage from "./pages/LoginPage";
import Register from "./pages/Register";

const routerRoutes = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "",
        element: <HomePage />,
        children: [{ path: "/category/:category_id" }],
      },
      {
        path: "news/:news_id",
        element: <NewsPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default routerRoutes;
