// 0307deepali25     csdeepalisahu

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js";
import categorybased from "./routes/CategoryBasedRoute.js";

dotenv.config();
const app = express();
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Mongo connected"))
  .catch((err) => console.log(err));

// 👇 Routes
app.use("/api/auth", authRoutes);
app.use("/api/interest", categorybased);

const port = process.env.PORT;
app.listen(port, () => console.log(`Server running on port ${port}`));
