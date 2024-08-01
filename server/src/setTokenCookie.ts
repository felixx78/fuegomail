import { Response } from "express";

function setTokenCookie(res: Response, token: string) {
  res.cookie("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 90 * 24 * 60 * 60 * 1000, // 90d
  });
}

export default setTokenCookie;
