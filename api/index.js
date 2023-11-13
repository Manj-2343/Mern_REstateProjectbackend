import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import  userRouter from "./routes/user.routes.js";
import authRouter from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
import  listingRouter from "./routes/listing.route.js";
dotenv.config();
mongoose.connect(process.env.MONGO) 
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(error => {
    console.error('Error connecting to MongoDB:', error);
  });

const app = express();
//take input to the server
app.use(express.json());
app.use(cookieParser());

app.listen(3000, () => {
  console.log("Server is running on Port 3000!!!");
});
//Router Configuration
app.use("/api/user",userRouter);
app.use("/api/auth",authRouter);
app.use("/api/listing",listingRouter);


//  middle ware configuration
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

