import app, { dbConnect, portConnection } from './server.js';
import express from 'express';
import authRouter from '../server/route/authRoute.js';
import useRouter from './route/userRoute.js'
import videoRoutes from './route/video.js'
import commentRoutes from './route/commentRoute.js'
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
dotenv.config();

app.use(express.json());
app.use(cookieParser());



app.use('/api/auth', authRouter);
app.use('/api/verify/user',useRouter)
app.use("/api/videos", videoRoutes);
app.use("/api/comments", commentRoutes);



app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || 'Something went wrong';

  return res.status(status).json({
    success: false,
    message,
    status,
  });
});
dbConnect;
portConnection;
