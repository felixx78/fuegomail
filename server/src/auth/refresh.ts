import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import generateToken from "../generateToken";

async function refresh(req: Request, res: Response) {
  const token = req.cookies?.token;
  if (!token) return res.status(401).json("No token provided");

  try {
    const decoded: any = jwt.verify(token, process.env.REFRESH_SECRET!);
    delete decoded.iat;
    delete decoded.exp;

    const newToken = await generateToken(decoded, "access");
    res.json(newToken);
  } catch (e) {
    return res.status(401).json("Invalid token");
  }
}

export default refresh;
