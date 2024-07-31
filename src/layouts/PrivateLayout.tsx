import { Outlet } from "react-router-dom";
import RequireAuth from "../components/RequireAuth";
import Header from "../components/Header";

function PrivateLayout() {
  return (
    <RequireAuth>
      <div className="relative min-h-svh bg-background text-primary-text dark:bg-dark-background dark:text-dark-primary-text">
        <Header />
        <div className="px-4">
          <Outlet />
        </div>
      </div>
    </RequireAuth>
  );
}
export default PrivateLayout;
