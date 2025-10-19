import { createBrowserRouter } from "react-router";

import Apps from "../Pages/Apps";
import Home from "../Pages/Home";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import Installation from "../Pages/Installation";
import AppsDetails from "../../../hero-apps1/src/Pages/AppsDetails";
import AppDetail from "../Pages/AppDetail";
import ErrorApp from "../Pages/ErrorApp";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    hydrateFallbackElement: <p>Loading...</p>,
    children: [
      {
        index: true,
        element: <Home />,
        loader: () => fetch("../AppsData.json"),
      },
      {
        path: "/apps",
        element: <Apps />,
      },
      {
        path: "/installation",
        element: <Installation />,
      },
      {
        path: "/app/:id",
        element: <AppDetail />,
        errorElement: <ErrorApp />,
      },
    ],
  },
  //   {
  //     path: "/*",
  //     element: <ErrorPage />,
  //   },
]);

export default router;
