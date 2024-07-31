import { Outlet } from "react-router-dom";
import Header from "../components/Header";

function PublicLayout() {
  return (
    <div className="min-h-svh bg-background text-primary-text dark:bg-dark-background dark:text-dark-primary-text">
      <Header />
      <Outlet />
    </div>
  );
}

export default PublicLayout;
