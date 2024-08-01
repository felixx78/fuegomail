import { Eye, EyeSlash } from "@phosphor-icons/react";
import clsx from "clsx";
import { useState } from "react";
import { Control, Controller } from "react-hook-form";
import { useIntl } from "react-intl";

type Props = {
  control: Control<any, any>;
  name: string;
  label?: string;
  error?: any;
  type?: "text" | "password";
  mb?: string;
  required?: boolean;
};

function Input({
  control,
  label,
  name,
  error,
  type = "text",
  mb,
  required = true,
}: Props) {
  const intl = useIntl();

  const [isHidden, setIsHidden] = useState(false);

  return (
    <Controller
      control={control}
      name={name}
      rules={{
        required: required && intl.formatMessage({ id: "required" }),
      }}
      render={({ field }) => (
        <div style={{ marginBottom: mb }}>
          <p className="mb-2 text-secondary-background">{label}</p>
          <div className="relative">
            <input
              {...field}
              autoCorrect="none"
              className={clsx(
                "w-full rounded bg-secondary-background py-1 pl-2 text-primary-text outline-none",
                type === "password" ? "pr-10" : "pr-2",
              )}
              type={isHidden && type === "password" ? "password" : "text"}
            />
            {type === "password" && (
              <button
                type="button"
                onClick={() => setIsHidden(!isHidden)}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-primary-text"
              >
                {isHidden ? <Eye size={26} /> : <EyeSlash size={26} />}
              </button>
            )}
          </div>
          {!!error && (
            <p className="mt-2 text-sm text-dark-error-color">
              {error.message}
            </p>
          )}
        </div>
      )}
    />
  );
}
export default Input;
