import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

function authMiddleware(req: Request, res: Response, next: NextFunction) {
  const token = req.headers["authorization"];

  if (!token) {
    return res.status(401).json("No token provided");
  }

  jwt.verify(token, process.env.ACCESS_SECRET!, (err, decoded) => {
    if (err) {
      return res.status(403).json("Invalid token");
    }

    req.user = decoded as { username: string };
    next();
  });
}
export default authMiddleware;
