import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import privateRoutes from "./routes/privateRoutes.tsx";
import publicRoutes from "./routes/publicRoutes.tsx";
import PublicLayout from "./layouts/PublicLayout.tsx";
import PrivateLayout from "./layouts/PrivateLayout.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    children: publicRoutes,
  },
  {
    path: "/",
    element: <PrivateLayout />,
    children: privateRoutes,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
