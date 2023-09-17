import { createdError } from '../functional/error.js';
import user from '../models/user.js';
import Video from '../models/video.js';

export const updateUser = async (req, res, next) => {
  if (req.params.id === req.user.id) {
    try {
      // Use the User model to update the user
      const updatedUser = await user.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );

      if (!updatedUser) {
        return res.status(404).json({ error: 'User not found' });
      }

      // Provide a more descriptive success message
      res
        .status(200)
        .json({ message: 'User updated successfully', updatedUser });
    } catch (error) {
      console.error('Error updating user:', error);
      return next(createdError(500, 'Internal Server Error'));
    }
  } else {
    return next(createdError(403, 'You can only update your own account'));
  }
};

export const deleteUser = async (req, res, next) => {
  if (req.params.id === req.user.id) {
    try {
      // Use the User model to update the user
      await user.findByIdAndDelete(req.params.id);

      // Provide a more descriptive success message
      res.status(200).json({ message: 'User has been deleted successfully' });
    } catch (error) {
      console.error('Error updating user:', error);
      return next(createdError(500, 'Internal Server Error'));
    }
  } else {
    return next(createdError(403, 'You can only delete your own account'));
  }
};

export const getUser = async (req, res) => {
  try {
    const user = await user.findByID(req.params.id);

    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};

export const subscribe = async (req, res) => {
  try {
    await user.findByIdAndUpdate(req.user.id, {
      $push: { subscribedUsers: req.params.id },
    });
    await user.findByIdAndUpdate(req.params.id, {
      $inc: { subscribers: 1 },
    });
    res.status(200).json('Subscription successfull.');
  } catch (err) {
    next(err);
  }
};

export const unsubscribe = async (req, res) => {
  try {
    try {
      await user.findByIdAndUpdate(req.user.id, {
        $pull: { subscribedUsers: req.params.id },
      });
      await user.findByIdAndUpdate(req.params.id, {
        $inc: { subscribers: -1 },
      });
      res.status(200).json('Unsubscription successfull.');
    } catch (err) {
      next(err);
    }
  } catch (err) {
    next(err);
  }
};

export const like = async (req, res, next) => {
  const id = req.user.id;
  const videoId = req.params.videoId;
  try {
    await Video.findByIdAndUpdate(videoId, {
      $addToSet: { likes: id },
      $pull: { dislikes: id },
    });
    res.status(200).json('The video has been liked.');
  } catch (err) {
    next(err);
  }
};

export const dislike = async (req, res, next) => {
  const id = req.user.id;
  const videoId = req.params.videoId;
  try {
    await Video.findByIdAndUpdate(videoId, {
      $addToSet: { dislikes: id },
      $pull: { likes: id },
    });
    res.status(200).json('The video has been disliked.');
  } catch (err) {
    next(err);
  }
};
