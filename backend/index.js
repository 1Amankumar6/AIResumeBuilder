import express from "express";
import dotenv from "dotenv";
import connectUrl from './config/mongodb.js'
import cookieParser from "cookie-parser";
import cors from "cors"
import authRouter from './routes/authRoutes.js'

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;
connectUrl(process.env.MONGODB_URI ?? "mongodb://localhost:27017/defaultDB");

app.use(express.json()); // Parse JSON bodies
app.use(cors({
  origin :[
    "http://localhost:5173"
  ],
    credentials: true, // allow cookies/auth headers
}));
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded data
app.use(cookieParser());

// API End Point
app.get("/", (req, res) => {
  res.json({ name: "Try kumar" });
});

app.get("/api/auth", authRouter);

// ✅ Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
