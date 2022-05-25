import "dotenv/config.js"
import "./database/client.js";
import express from "express";
import studentsRouter from "./routes/studentsRouter.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use("/api/students", studentsRouter);

app.get("/", (req, res) =>
  res.send("<h1>Students API with mongoose and express</h1>")
);

app.listen(port, () => console.log(`Server running on port ${port}`));