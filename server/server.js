import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./configs/mongodb.js";
 
import { clerkWebhooks } from "./controllers/webhooks.js";
const app = express();
app.use(cors());

//connection DB
await connectDB();

app.get("/", (req, res) => {  
  res.send("API is working");
});
app.use(express.json()); // ✅ Global JSON parser middleware

app.post('/clerk', clerkWebhooks); // Clerk Webhook to manage user data
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

