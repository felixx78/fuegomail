import { Request, Response } from "express";
import { z } from "zod";
import { validateSchema } from "../validateMiddleware";
import bcrypt from "bcrypt";
import client from "../../db";
import generateToken from "../generateToken";
import setTokenCookie from "../setTokenCookie";

const schema = z.object({
  username: z.string(),
  password: z.string(),
});

async function signUp(req: Request, res: Response) {
  const { username, password } = req.body as z.infer<typeof schema>;

  const { rows: find } = await client.query(
    "SELECT * from users WHERE username = $1",
    [username]
  );

  if (!find.length) return res.status(400).json("Username doesn't exist");

  if (!(await bcrypt.compare(password, find[0].password))) {
    return res.status(403).json("Incorrect Password");
  }

  const refreshToken = await generateToken({ username }, "refresh");
  const accessToken = await generateToken({ username }, "access");

  setTokenCookie(res, refreshToken);
  res.json({ username, token: accessToken });
}

export default [validateSchema(schema), signUp];
