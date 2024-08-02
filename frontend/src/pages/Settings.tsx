import { Lightning, Moon } from "@phosphor-icons/react";
import clsx from "clsx";
import { useState } from "react";

function Settings() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  const handleThemeOnClick = (newTheme: "dark" | "light") => {
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
    if (newTheme === "dark") document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  };

  return (
    <div>
      <h1 className="mb-8 ml-4">Settings</h1>
      <div className="px-6">
        <p className="mb-4 text-xl">Theme</p>
        <button
          onClick={() => handleThemeOnClick("dark")}
          className={clsx(
            "mb-4 flex cursor-pointer items-center gap-2 rounded-md px-6 py-1 text-lg text-dark-primary-text",
            theme === "dark"
              ? "bg-dark-highlighted-background"
              : "bg-secondary-text",
          )}
        >
          <Moon size={30} /> Dark
        </button>
        <button
          onClick={() => handleThemeOnClick("light")}
          className={clsx(
            "flex cursor-pointer items-center gap-2 rounded-md px-6 py-1 text-lg text-dark-primary-text",
            theme === "light"
              ? "bg-dark-highlighted-background"
              : "bg-secondary-text",
          )}
        >
          <Lightning size={30} /> Light
        </button>
      </div>
    </div>
  );
}
export default Settings;
