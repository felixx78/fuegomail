import { Navigate } from "react-router-dom";

function RequireAuth({ children }: { children: React.ReactNode }) {
  const user = localStorage.getItem("user");

  if (!user) return <Navigate to="/sign-in" />;
  return children;
}
export default RequireAuth;
