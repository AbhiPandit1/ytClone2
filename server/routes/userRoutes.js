import express from 'express';
import {
  deleteUser,
  dislike,
  getUser,
  getUsers,
  like,
  subscribe,
  unSubscribe,
  updateUser,
} from '../controller/userController.js';
import { verifyToken } from '../Utils/verifyToken.js';

const router = express.Router();

router
  .route('/:id')
  .put(verifyToken, updateUser)
  .delete(verifyToken, deleteUser);

router.route('/users').get(getUsers);
router.route('/find/:id').get(getUser);
router.route('/sub/:id').put(verifyToken, subscribe);
router.route('/unsub/:id').put(verifyToken, unSubscribe);

router.route('/like/:videoId').put(verifyToken, like);

router.route('/dislike/:videoId').put(verifyToken, dislike);

export default router;
