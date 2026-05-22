import dotenv from 'dotenv';
import express, { Request, Response } from "express";
dotenv.config();
const app = express();

const PORT = process.env.PORT || 5000;

app.get("/", (req: Request, res: Response) => {
  res.send("TypeScript Node.js Server Running...");
});

app.get("/data", (req: Request, res: Response) => {
  res.json([
    {
      name : "Alice",
      age : 30
    },
    {
      name : "Bob",
      age : 25
    }
  ])
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});