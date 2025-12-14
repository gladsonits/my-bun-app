import express from "express";
import type { Request, Response } from "express";
import dotenv from "dotenv";
const app = express();

dotenv.config(); // Load environment variables from .env file

const PORT = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.send(process.env.OPENAI_API_KEY);
});

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
export default app;
