import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../pages/Home";
import Tracker from "../pages/Tracker";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Home /> },
      { path: "tracker", element: <Tracker /> },
    ],
  },
]);

export default router;
