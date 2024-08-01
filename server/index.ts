import express, { Application } from "express";
import cors from "cors";
import authRouter from "./src/auth";
import authMiddleware from "./src/authMiddleware";
import emailRouter from "./src/email";

const app: Application = express();
const port = 3000;

declare global {
  namespace Express {
    interface Request {
      user?: {
        username: string;
      };
    }
  }
}

app.use(cors());
app.use(express.json());

app.use("/auth", authRouter);
app.use("/email", authMiddleware, emailRouter);

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});
