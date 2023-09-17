import express from 'express';
import {
  addVideo,
  addView,
  getByTag,
  getVideo,
  random,
  search,
  sub,
  trend,
} from '../controllers/videoController.js';
import { verifyToken } from '../functional/verify.js';

const router = express.Router();

router.post('/', verifyToken, addVideo);
router.put('/:id', verifyToken, addVideo);
router.delete('/:id', verifyToken, addVideo);
router.get('/find/:id', getVideo);
router.put('/view/:id', addView);
router.get('/trend', trend);
router.get('/random', random);
router.get('/sub', verifyToken, sub);
router.get('/tags', getByTag);
router.get('/search', search);

export default router;
