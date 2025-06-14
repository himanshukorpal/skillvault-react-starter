import { createBrowserRouter } from "react-router";
import DashboardLayout from "../layouts/DashboardLayout";
import DashboardHome from "../pages/dashboard/DashboardHome";
import Skills from "../pages/dashboard/Skills";
import Goals from "../pages/dashboard/Goals";
import Settings from "../pages/dashboard/Settings";
import Home from "../pages/Home";
import Tracker from "../pages/Tracker";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";
import ForgotPassword from "../pages/auth/ForgotPassword";
import ProtectedRoute from "../components/ProtectedRoute";
import MainLayout from "../../MainLayout";

const router = createBrowserRouter([
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      { path: "", element: <DashboardHome /> },
      { path: "skills", element: <Skills /> },
      { path: "goals", element: <Goals /> },
      { path: "settings", element: <Settings /> },
    ],
  },

  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/forgotpassword",
        element: <ForgotPassword />,
      },
    ],
  },
]);

export default router;
