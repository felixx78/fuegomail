import express from "express";
import signUp from "./signUp";
import signIn from "./signIn";
import refresh from "./refresh";

const authRouter = express.Router();

authRouter.post("/sign-up", ...signUp);
authRouter.post("/sign-in", ...signIn);
authRouter.get("/refresh", refresh);

export default authRouter;
