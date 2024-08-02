import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";
import { useIntl } from "react-intl";
import { Envelope, Gear } from "@phosphor-icons/react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { menuActions } from "../redux/menuReducer";

const items = [
  {
    id: "inbox",
    href: "/inbox",
    icon: <Envelope size={26} />,
  },
  {
    id: "settings",
    href: "/settings",
    icon: <Gear size={26} />,
  },
];

function Sidebar() {
  const intl = useIntl();
  const location = useLocation();
  const isOpen = useSelector((root: RootState) => root.menu);
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.href = "/sign-in";
    window.location.reload();
  };

  return (
    <aside
      onClick={() => dispatch(menuActions.toggle())}
      style={{ display: isOpen ? "block" : "none" }}
      className="absolute z-10 hidden min-h-svh w-[200px] flex-shrink-0 lg:static lg:!block"
    >
      <div className="fixed z-10 flex h-svh w-[200px] flex-col bg-background dark:bg-dark-background">
        <div className="mb-8 flex justify-center py-4">
          <Logo />
        </div>

        <div className="space-y-2">
          {items.map((i) => (
            <Link
              className={`flex w-full items-center gap-2 rounded py-2 pl-4 ${location.pathname.startsWith(i.href) ? "bg-primary text-dark-primary-text dark:bg-dark-hover-link-color" : ""}`}
              to={i.href}
              key={i.id}
            >
              {i.icon}
              {intl.formatMessage({ id: i.id })}
            </Link>
          ))}
        </div>

        <div className="h-full flex-1"></div>

        <button
          onClick={handleLogout}
          className="w-full cursor-pointer bg-highlighted-background py-2 dark:bg-dark-highlighted-background"
        >
          Logout
        </button>
      </div>
      <div className="fixed inset-0 z-0 bg-black opacity-35 lg:hidden" />
    </aside>
  );
}
export default Sidebar;
