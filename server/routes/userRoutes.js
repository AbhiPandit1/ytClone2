import express from 'express';
import {
  deleteUser,
  getUser,
  getUsers,
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

export default router;
