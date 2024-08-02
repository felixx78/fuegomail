import { Link } from "react-router-dom";
import Logo from "./Logo";
import ThemeToggler from "./ThemeToggler";
import SelectLanguage from "./SelectLanguage";

function Header() {
  return (
    <div className="mb-2 flex items-center justify-between px-8 py-3">
      <Link to="/">
        <Logo />
      </Link>
      <div className="flex items-center gap-6">
        <div className="hidden sm:block">
          <SelectLanguage />
        </div>
        <ThemeToggler />
      </div>
    </div>
  );
}
export default Header;
