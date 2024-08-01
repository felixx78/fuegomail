import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

function authMiddleware(req: Request, res: Response, next: NextFunction) {
  const token = req.headers["authorization"];

  if (!token) {
    return res.status(401).json("No token provided");
  }

  try {
    const decoded = jwt.verify(token, process.env.ACCESS_SECRET!);
    req.user = decoded as { username: string };
    next();
  } catch (e) {
    return res.status(401).json("Invalid token");
  }
}
export default authMiddleware;
