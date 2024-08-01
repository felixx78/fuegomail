import { useForm } from "react-hook-form";
import Input from "../Input";
import { useIntl } from "react-intl";
import Button from "../Button";
import Auth from "../../api/auth";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

type FormData = {
  username: string;
  password: string;
  confirmPassword: string;
};

function SignUpForm() {
  const intl = useIntl();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  const {
    control,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      username: "",
      password: "",
      confirmPassword: "",
    },
  });

  const handleOnSubmit = async (formData: FormData) => {
    try {
      if (formData.password !== formData.confirmPassword) {
        setError("confirmPassword", {
          type: "custom",
          message: "Password doesn't match",
        });
        return;
      }
      clearErrors();

      setIsLoading(true);

      const data = await Auth.signUp(formData);
      localStorage.setItem("token", JSON.stringify(data));
      navigate("/inbox");
    } catch (e: any) {
      const error = e.response.data;

      if (error === "Username is taken") {
        setError("username", { type: "custom", message: error });
        return;
      }

      setError("username", { type: "custom", message: "Not valid" });
    }
    setIsLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit(handleOnSubmit)}
      className="mx-auto max-w-[400px] space-y-4 rounded-md bg-dark-secondary-background p-4"
    >
      <div className="flex items-center gap-4">
        <Input
          control={control}
          name="username"
          error={errors?.username}
          label="Username"
        />
        <div className={clsx(!!errors?.username ? "pt-0" : "pt-7")}>
          @fuegomail.org
        </div>
      </div>
      <Input
        control={control}
        name="password"
        label={intl.formatMessage({ id: "password" })}
        type="password"
        error={errors?.password}
      />
      <Input
        control={control}
        name="confirmPassword"
        label={intl.formatMessage({ id: "confirmPassword" })}
        type="password"
        mb="30px"
        error={errors?.confirmPassword}
      />
      <Button isLoading={isLoading} type="submit" fullWidth label="Continue" />
    </form>
  );
}
export default SignUpForm;
