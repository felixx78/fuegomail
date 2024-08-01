import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";
import { useIntl } from "react-intl";
import { Envelope, Gear } from "@phosphor-icons/react";

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

  return (
    <aside className="hidden min-h-svh w-[200px] flex-shrink-0 border-r border-dark-border-color lg:block">
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
    </aside>
  );
}
export default Sidebar;
