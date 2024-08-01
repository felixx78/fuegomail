import express from "express";
import signUp from "./signUp";

const authRouter = express.Router();

authRouter.post("/sign-up", ...signUp);

export default authRouter;
