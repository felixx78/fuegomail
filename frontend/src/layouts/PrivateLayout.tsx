import { Outlet } from "react-router-dom";
import RequireAuth from "../components/RequireAuth";
import Sidebar from "../components/Sidebar";
import MobileMenuButton from "../components/MobileMenuButton";

function PrivateLayout() {
  return (
    <RequireAuth>
      <div className="relative min-h-svh bg-background text-primary-text dark:bg-dark-background dark:text-dark-primary-text">
        <div className="flex">
          <Sidebar />
          <div className="min-w-0 flex-1 flex-shrink flex-grow px-4 py-6">
            <MobileMenuButton />

            <Outlet />
          </div>
        </div>
      </div>
    </RequireAuth>
  );
}
export default PrivateLayout;
