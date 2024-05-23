import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';

//* Database configuration
dotenv.config();

mongoose.connect(process.env.MONGO).then(() => {
  console.log("Connected to MongoDB!");
})
  .catch((err) => {
    console.log(err);
  });

const app = express();

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Sever is listening on ${PORT}`);
});

app.use("/backend/user/", userRouter);