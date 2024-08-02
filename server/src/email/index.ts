import express from "express";
import paged from "./paged";
import byId from "./byId";
import markRead from "./markRead";

const emailRouter = express.Router();

emailRouter.get("/:id", byId);
emailRouter.get("/", paged);
emailRouter.get("/mark/:id", markRead);

export default emailRouter;
