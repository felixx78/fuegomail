import express from "express";
import paged from "./paged";

const emailRouter = express.Router();

emailRouter.get("/", paged);

export default emailRouter;
