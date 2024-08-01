import { post } from ".";

type SignUp = (params: {
  username: string;
  password: string;
}) => Promise<string>;

const Auth = {
  signUp: ((data) => post("/auth/sign-up", data)) as SignUp,
};

export default Auth;
