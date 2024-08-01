import clsx from "clsx";
import Spinner from "./Spinner";

type Props = {
  label: string;
  isLoading?: boolean;
  type: "button" | "submit";
  color?: "light" | "dark";
  fullWidth?: boolean;
};

function Button({ label, isLoading, type, color = "dark", fullWidth }: Props) {
  return (
    <button
      disabled={isLoading}
      type={type}
      className={clsx(
        "cursor-pointer rounded-md py-2 font-medium",
        color === "dark"
          ? "flex justify-center gap-4 bg-dark-highlighted-background text-dark-primary-text"
          : "bg-background text-primary-text",
        fullWidth ? "w-full" : "px-6",
      )}
    >
      {label}
      {isLoading && <Spinner />}
    </button>
  );
}
export default Button;
