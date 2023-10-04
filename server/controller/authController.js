import mongoose from 'mongoose';
import User from '../model/User.js';
import bcrypt from 'bcryptjs';
import { createError } from '../Utils/error.js';
import jwt from 'jsonwebtoken';

export const signup = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const user = await User.create({ ...req.body, password: hash });

    res.status(200).send({
      message: 'success',
      user,
    });
  } catch (error) {
    next(error);
  }
};

export const signin = async (req, res, next) => {
  try {
    // Find the user by their name
    const user = await User.findOne({ name: req.body.name });

    // Check if no user was found
    if (!user) {
      return next(createError(400, 'No User found'));
    }

    // Compare the provided password with the stored hashed password
    const isCorrect = await bcrypt.compare(req.body.password, user.password);

    if (!isCorrect) {
      return next(createError(400, 'Wrong Credentials'));
    }

    // Generate a JWT token for authentication
    const token = jwt.sign({ id: user._id }, process.env.JWT_KEY);
    const { password, ...others } = user._doc;

    // Set the token as a cookie (you can modify this as needed)
    res.cookie('access_token', token, {
      httpOnly: true,
    });

    // Respond with a success status and user information
    res.status(200).json({
      message: 'Successfully signed in',
      others,
    });
  } catch (error) {
    next(error);
  }
};

//Google authentication

export const googleAuth = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      const token = jwt.sign({ id: user._id }, process.env.JWT_KEY);

      // Set the token as a cookie (you can modify this as needed)
      res.cookie('access_token', token, {
        httpOnly: true,
      });
      res.status(200).json(user._doc);
    } else {
      const newUser = new User({
        ...req.body,
        fromGoogle: true,
      });
      const savedUser = await newUser.save();
      const token = jwt.sign({ id: savedUser._id }, process.env.JWT_KEY);

      // Set the token as a cookie (you can modify this as needed)
      res.cookie('access_token', token, {
        httpOnly: true,
      });
      res.status(200).json(savedUser._doc);
    }
  } catch (err) {
    next(err);
  }
};
