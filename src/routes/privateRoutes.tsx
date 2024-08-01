import { RouteObject } from "react-router-dom";
import Inbox from "../pages/Inbox";
import Email from "../pages/Email";

const privateRoutes: RouteObject[] = [
  {
    path: "/inbox",
    element: <Inbox />,
  },
  {
    path: "/inbox/:id",
    element: <Email />,
  },
];

export default privateRoutes;
