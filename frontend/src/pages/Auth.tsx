import SignInForm from "../components/Auth/SignInForm";
import SignUpForm from "../components/Auth/SignUpForm";

function Auth({ mode }: { mode: "in" | "up" }) {
  return (
    <div className="p-6">
      <h1 className="mb-6 text-center">
        Sign {mode[0].toUpperCase() + mode[1]}
      </h1>
      {mode === "up" ? <SignUpForm /> : <SignInForm />}
    </div>
  );
}
export default Auth;
