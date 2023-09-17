import express from 'express';
const app = express();
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export const dbConnect = mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Db is connect');
  })
  .catch((err) => {
    console.log(err);
  });

export const portConnection = app.listen(process.env.PORT, () => {
  console.log(`server is working on this ${process.env.PORT}`);
});





export default app;
