import express from 'express';
import { signin, signup } from '../controller/authController.js';

const router = express.Router();

//Create a user

router.route('/signup').post(signup);

//Sign In
router.route('/signin').post(signin);

//Google Authentication

router.route('/google').post();

export default router;
