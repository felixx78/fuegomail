import express from "express";
import signUp from "./signUp";
import signIn from "./signIn";

const authRouter = express.Router();

authRouter.post("/sign-up", ...signUp);
authRouter.post("/sign-in", ...signIn);

export default authRouter;
