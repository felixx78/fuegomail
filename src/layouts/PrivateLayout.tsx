import { Outlet } from "react-router-dom";
import RequireAuth from "../components/RequireAuth";
import ThemeToggler from "../components/ThemeToggler";

function PrivateLayout() {
  return (
    <RequireAuth>
      <div className="relative min-h-svh bg-background text-primary-text dark:bg-dark-background dark:text-dark-primary-text">
        <div className="absolute right-6 top-3">
          <ThemeToggler />
        </div>
        <Outlet />
      </div>
    </RequireAuth>
  );
}
export default PrivateLayout;
