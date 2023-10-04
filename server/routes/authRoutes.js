import express from 'express';
import { googleAuth, signin, signup } from '../controller/authController.js';

const router = express.Router();

//Create a user

router.route('/signup').post(signup);

//Sign In
router.route('/signin').post(signin);

//Google Authentication

router.route('/google').post(googleAuth);

export default router;
