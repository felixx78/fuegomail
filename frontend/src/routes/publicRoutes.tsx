import { RouteObject } from "react-router-dom";
import Home from "../pages/Home";
import Auth from "../pages/Auth";

const publicRoutes: RouteObject[] = [
  { path: "/", element: <Home /> },
  { path: "/sign-up", element: <Auth mode="up" /> },
  { path: "/sign-in", element: <Auth mode="in" /> },
];

export default publicRoutes;
