import { Link, Outlet } from "react-router-dom";
import Logo from "../components/Logo";
import ThemeToggler from "../components/ThemeToggler";

function PublicLayout() {
  return (
    <div className="bg-background dark:bg-dark-background text-primary-text dark:text-dark-primary-text min-h-svh">
      <Header />
      <Outlet />
    </div>
  );
}

const Header = () => {
  return (
    <div className="mb-4 flex items-center justify-between px-8 py-3">
      <Link to="/">
        <Logo />
      </Link>

      <ThemeToggler />
    </div>
  );
};

export default PublicLayout;
