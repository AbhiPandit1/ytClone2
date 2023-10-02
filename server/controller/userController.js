import mongoose from 'mongoose';
import User from '../model/User.js';
import { createError } from '../Utils/error.js';

//update
export const updateUser = async (req, res, next) => {
  if (req.params.id === req.user.id) {
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: 'true' }
      );
      res.status(200).json({
        success: true,
        updatedUser,
      });
    } catch (err) {
      next(err);
    }
  } else {
    return next(createError(404, 'You can update only your account'));
  }
};

//delete

export const deleteUser = async (req, res, next) => {
  // Check if the user making the request is deleting their own account
  if (req.params.id === req.user.id) {
    try {
      // Delete the user by their ID
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json({
        message: 'Success', // Fixed the error message
      });
    } catch (err) {
      next(err);
    }
  } else {
    // User is trying to delete someone else's account
    return next(createError(403, 'You can only delete your own account')); // Changed status code to 403 (Forbidden)
  }
};

//get

export const getUsers = async (req, res, next) => {
  try {
    const users = await User.find(req.params.id);
    res.status(200).json({
      success: true,
      users,
    });
  } catch (err) {
    return next(err);
  }
};

export const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);

    res.status(200).json({
      success: true,
      user,
    });
  } catch {
    return next(err);
  }
};

//subscribe

export const subscribe = async (req, res, next) => {
  try {
    await User.findByIdAndUpdate(req.user.id, {
      $push: { subscribedUsers: req.params.id },
    });
    await User.findByIdAndUpdate(req.params.id, {
      $inc: { subscribers: 1 },
    });
    res.status(200).json({
      success: true,
      message: 'subscription successfull',
    });
  } catch (err) {
    return next(err);
  }
};

//unSubscribe
export const unSubscribe = async (req, res, next) => {
  try {
    await User.findByIdAndUpdate(req.user.id, {
      $pull: { subscribedUsers: req.params.id },
    });
    await User.findByIdAndUpdate(req.params.id, {
      $inc: { subscribers: -1 },
    });
    res.status(200).json({
      success:true,
      message: 'Unsubscription successfull',
    });
  } catch (err) {
    return next(err);
  }
};

//like

//dislike
