import { post } from ".";

type AuthRequest = (params: {
  username: string;
  password: string;
}) => Promise<object>;

const Auth = {
  signUp: ((data) => post("/auth/sign-up", data)) as AuthRequest,
  signIn: ((data) => post("/auth/sign-in", data)) as AuthRequest,
};

export default Auth;
