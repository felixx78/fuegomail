import Logo from "./Logo";
import ThemeToggler from "./ThemeToggler";

function Header() {
  return (
    <div className="mb-2 flex items-center justify-between px-8 py-3">
      <Logo />
      <ThemeToggler />
    </div>
  );
}
export default Header;
