import { Outlet } from "react-router-dom";
import RequireAuth from "../components/RequireAuth";

function PrivateLayout() {
  return (
    <RequireAuth>
      <Outlet />
    </RequireAuth>
  );
}
export default PrivateLayout;
