import express from "express";
import paged from "./paged";
import byId from "./byId";

const emailRouter = express.Router();

emailRouter.get("/:id", byId);
emailRouter.get("/", paged);

export default emailRouter;
