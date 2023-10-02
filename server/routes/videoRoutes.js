import express from 'express';
import { verifyToken } from '../Utils/verifyToken.js';
import {
  addVideo,
  addView,
  deleteVideo,
  getAllVideo,
  getBySearch,
  getByTag,
  getVideo,
  random,
  subScribedVideo,
  trend,
  updateVideo,
} from '../controller/videoController.js';
const router = express.Router();
//create a Video
router.route('/').post(verifyToken, addVideo);

router
  .route('/:id')
  .put(verifyToken, updateVideo)
  .delete(verifyToken, deleteVideo);

router.route('/find/:id').get(getVideo);
router.route('/').get(getAllVideo);

router.route('/view').get(addView);
router.route('/trend').get(trend);
router.route('/random').get(random);
router.route('/sub').get(verifyToken, subScribedVideo);
router.route('/tags').get(verifyToken, getByTag);
router.route('/search').get(verifyToken, getBySearch);

export default router;
