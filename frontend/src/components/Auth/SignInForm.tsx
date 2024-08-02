import { useForm } from "react-hook-form";
import Input from "../Input";
import { useIntl } from "react-intl";
import Button from "../Button";
import Auth from "../../api/auth";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

type FormData = {
  username: string;
  password: string;
};

function SignInForm() {
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
    },
  });

  const handleOnSubmit = async (formData: FormData) => {
    try {
      clearErrors();
      setIsLoading(true);

      const data = await Auth.signIn({
        username: formData.username.replace("@fuegomail.org", ""),
        password: formData.password,
      });
      localStorage.setItem("user", JSON.stringify(data));
      navigate("/inbox");
      window.location.reload();
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
      className="mx-auto max-w-[400px] space-y-4 rounded-md bg-dark-secondary-background p-6"
    >
      <Input
        control={control}
        name="username"
        error={errors?.username}
        label={intl.formatMessage({ id: "emailOrUsername" })}
      />
      <Input
        control={control}
        name="password"
        label={intl.formatMessage({ id: "password" })}
        type="password"
        error={errors?.password}
        mb="30px"
      />
      <Button
        isLoading={isLoading}
        type="submit"
        fullWidth
        label="Continue"
        mb="20px"
      />

      <Link className="text-dark-secondary-text hover:underline" to="/sign-up">
        Don't have an Account?
      </Link>
    </form>
  );
}
export default SignInForm;
