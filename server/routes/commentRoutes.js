import express from 'express';
import {
  addComment,
  deleteComment,
  getComment,
} from '../controller/commentController.js';
import { verifyToken } from '../Utils/verifyToken.js';

const router = express.Router();

router.route('/').post(verifyToken, addComment);
router.route('/:videoId').get(verifyToken, getComment);
router.route('/:id').delete(verifyToken, deleteComment);

export default router;
