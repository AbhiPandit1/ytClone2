import express from 'express';
import {
  deleteUser,
  dislike,
  getUser,
  like,
  subscribe,
  unsubscribe,
  updateUser,
} from '../controllers/userController.js';
import { verifyToken } from '../functional/verify.js';
const router = express.Router();

//Update user

router.put('/:id', verifyToken, updateUser);

//delete User
router.delete('/:id', verifyToken, deleteUser);

//get a user
router.get('/find/:id', getUser);

//subscribe a user
router.put('/sub/:id', verifyToken, subscribe);

//unsubscribe a user
router.put('/unsub/:id', verifyToken, unsubscribe);

//like a video
router.put('/like/:id', verifyToken, like);

//dislike a video
router.put('/dislike/:id', verifyToken, dislike);

export default router;
