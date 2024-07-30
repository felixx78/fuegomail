import { Lightning, Moon } from "@phosphor-icons/react";
import { useState } from "react";

function ThemeToggler() {
  const [isDark, setIsDark] = useState(
    localStorage.getItem("theme") === "dark",
  );

  const handleOnClick = () => {
    localStorage.setItem("theme", isDark ? "light" : "dark");
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <button onClick={handleOnClick}>
      {isDark ? (
        <Lightning weight="fill" size="36px" />
      ) : (
        <Moon weight="fill" size="40px" />
      )}
    </button>
  );
}
export default ThemeToggler;
