import { Request, Response } from "express";
import client from "../../db";

const pageSize = 20;

async function paged(req: Request, res: Response) {
  const page = parseInt(req.query.page as string, 10) || 1;

  const offset = (page - 1) * pageSize;

  try {
    const { rows: emails } = await client.query(
      "SELECT * FROM email WHERE receiver = $1 ORDER BY time DESC LIMIT $2 OFFSET $3",
      [req.user!.username + "@fuegomail.org", pageSize, offset]
    );

    res.json(emails);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
}

export default paged;
