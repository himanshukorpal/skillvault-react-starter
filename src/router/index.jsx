import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Tracker from "../pages/Tracker";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";
import ForgotPassword from "../pages/auth/ForgotPassword";
import ProtectedRoute from "../components/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "", element: <Home /> },
      { path: "signup", element: <Signup /> },
      { path: "login", element: <Login /> },
      { path: "forgotpassword", element: <ForgotPassword /> },
      {
        element: <ProtectedRoute />,
        children: [
          {
            path: "tracker",
            element: <Tracker />,
          },
        ],
      },
    ],
  },
]);

export default router;
