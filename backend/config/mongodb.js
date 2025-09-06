import mongoose from "mongoose";

async function connectUrl(url) {
  try {
    await mongoose.connect(url);
    console.log("✅ DB connected successfully");
  } catch (error) {
    console.error("❌ DB connection failed:", error.message);
  }
}

export default connectUrl;