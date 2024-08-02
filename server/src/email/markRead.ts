import { Request, Response } from "express";
import client from "../../db";

async function markRead(req: Request, res: Response) {
  const id = req.params.id;

  const updateResult = await client.query(
    "UPDATE email SET readed = TRUE WHERE id = $1 AND receiver = $2 RETURNING *",
    [id, req.user!.username + "@fuegomail.org"]
  );

  if (updateResult.rowCount === 0) {
    return res.status(404).json({ error: "Email not found" });
  }

  res.sendStatus(200);
}

export default markRead;
