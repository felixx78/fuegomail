import { RouteObject } from "react-router-dom";
import Inbox from "../pages/Inbox";

const privateRoutes: RouteObject[] = [
  {
    path: "/inbox",
    element: <Inbox />,
  },
];

export default privateRoutes;
