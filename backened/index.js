import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js";

dotenv.config();

const app = express(); // ✅ Declare app first

app.use(express.json()); // ✅ Now this works correctly

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("database is connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/api/auth", authRoutes); // ✅ Routes after middleware

app.listen(3000, () => {
  console.log("server is running!");
});
