import express, { Application } from "express";
import cors from "cors";
import authRouter from "./src/auth";

const app: Application = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.use("/auth", authRouter);

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});
