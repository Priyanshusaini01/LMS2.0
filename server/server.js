import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./configs/mongodb.js";
import { clerkWebhooks } from "./controllers/webhooks.js";
import educatorRouter from "./routes/educatorRoutes.js";
import { clerkMiddleware } from '@clerk/express';
import connectCloudinary from "./configs/cloudinary.js";
import educatorRouter from './routes/educatorRoutes.js'
import courseRouter from './routes/courseRoute.js'
import userRouter from './routes/userRoutes.js'
const app = express();

// Database & Cloudinary
await connectDB();
await connectCloudinary();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(clerkMiddleware());  // Single Clerk middleware

// Routes
app.get("/", (req, res) => {
  res.send("API is working");
});

app.post('/clerk', clerkWebhooks);
app.use('/api/educator', educatorRouter); // Fixed route mounting
app.use('/api/educator',   educatorRouter)
app.use('/api/course',   courseRouter)
app.use('/api/user',   userRouter)

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
