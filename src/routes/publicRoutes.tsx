import { RouteObject } from "react-router-dom";
import Home from "../pages/Home";

const publicRoutes: RouteObject[] = [{ path: "/", element: <Home /> }];

export default publicRoutes;
