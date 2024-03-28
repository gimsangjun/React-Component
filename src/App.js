import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./routes/Root";
import Todos from "./routes/Todos";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/todos",
    element: <Todos />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
