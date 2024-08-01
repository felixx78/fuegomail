import express, { Request, Response, Application } from "express";
import client from "./db";
import cors from "cors";

const app: Application = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get("/", async (req: Request, res: Response) => {
  const { rows: emails } = await client.query("SELECT * FROM email");
  res.send(emails);
});

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});
