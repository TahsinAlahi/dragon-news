import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./AppLayout";

const routerRoutes = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
  },
]);

export default routerRoutes;
