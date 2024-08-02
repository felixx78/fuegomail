import { RouteObject } from "react-router-dom";
import Inbox from "../pages/Inbox";
import Email from "../pages/Email";
import Settings from "../pages/Settings";

const privateRoutes: RouteObject[] = [
  {
    path: "/inbox",
    element: <Inbox />,
  },
  {
    path: "/inbox/:id",
    element: <Email />,
  },
  {
    path: "/settings",
    element: <Settings />,
  },
];

export default privateRoutes;
