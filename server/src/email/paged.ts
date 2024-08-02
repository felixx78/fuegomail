import { Request, Response } from "express";
import client from "../../db";

const pageSize = 20;

async function paged(req: Request, res: Response) {
  const page = parseInt(req.query.page as string, 10) || 1;

  const offset = (page - 1) * pageSize;

  try {
    const result = await client.query(
      "SELECT * FROM email WHERE receiver = $1 ORDER BY time DESC LIMIT $2 OFFSET $3",
      [req.user!.username + "@fuegomail.org", pageSize, offset]
    );

    const countResult = await client.query(
      "SELECT COUNT(*) FROM email WHERE receiver = $1",
      [req.user!.username + "@fuegomail.org"]
    );

    const totalRows = parseInt(countResult.rows[0].count, 10);

    const formatedEmails = result.rows.map((i) => ({
      id: i.id,
      sender_name: i.sender_name,
      sender_email: i.sender_email,
      subject: i.subject,
      snippet: i.text.split(" ").slice(0, 50).join(" "),
      time: i.time,
      readed: i.readed,
    }));

    res.json({ content: formatedEmails, rowCount: totalRows });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
}

export default paged;
