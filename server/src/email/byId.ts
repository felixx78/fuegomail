import { Request, Response } from "express";
import client from "../../db";

async function byId(req: Request, res: Response) {
  try {
    const id = req.params.id;

    const result = await client.query(
      "SELECT * from email WHERE id = $1 and receiver = $2",
      [id, req.user!.username + "@fuegomail.org"]
    );

    if (result.rows.length === 0) return res.sendStatus(404);

    res.json(result.rows[0]);
  } catch (e) {
    res.sendStatus(400);
  }
}

export default byId;
