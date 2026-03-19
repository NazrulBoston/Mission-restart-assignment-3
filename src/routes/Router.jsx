import { createBrowserRouter } from "react-router";
import Root from "../pages/RootLayout/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Apps from "../pages/Apps/Apps";
import Installation from "../pages/Installation/Installation";
import AppDetails from "../pages/AppDetails/AppDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        loader: () => fetch("/Apps.json"), 
        element: <Home />
      },
      {
        path: "/apps",
        loader: () => fetch("/Apps.json"),
        element: <Apps />
      },
      {
        path: "/installation",
        element: <Installation />
      },
      {
        path: "/appDetails/:id",
        loader: () => fetch("/Apps.json"),
        element: <AppDetails />
      }
    ]
  }
]);