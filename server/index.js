import express from 'express';
const app = express();
import userRouter from './routes/userRoutes.js';
import authRouter from './routes/authRoutes.js';
import videoRouter from './routes/videoRoutes.js';
import commentRouter from './routes/commentRoutes.js';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';

const port = 4000;

dotenv.config();

app.use(express.json());
app.use(cookieParser());

mongoose
  .connect(process.env.mongodb_URL)
  .then(() => {
    console.log('Mongoose is connected ');
  })
  .catch((error) => {
    console.log(error);
  });

app.use('/api/v1', authRouter);
app.use('/api/v1/user', userRouter);
app.use('/api/v1/video', videoRouter);
app.use('/api/v1/comment', commentRouter);

app.use((err, req, res) => {
  const status = err.status || 500;
  const message = err.message || 'Internal error';
  return res.status(status).json({
    success: false,
    message,
  });
});

app.listen(port, () => {
  console.log(`My app is working on ${port}`);
});
