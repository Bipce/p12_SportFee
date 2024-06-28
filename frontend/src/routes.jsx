import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout.jsx";
import Home from "./pages/Home.jsx";
import UserProfil from "./pages/UserProfil.jsx";
import UserActivity from "./pages/UserActivity.jsx";
import UserSession from "./pages/UserSession.jsx";
import UserPerformance from "./pages/UserPerformance.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/user/:id", element: <UserProfil /> },
      { path: "/user/:id/activity", element: <UserActivity /> },
      { path: "/user/:id/average-sessions", element: <UserSession /> },
      { path: "/user/:id/performance", element: <UserPerformance /> },
    ],
  },
]);

export default router;