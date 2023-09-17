import jwt from 'jsonwebtoken';
import { createdError } from './error.js';

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) return next(createdError(401, 'You are not authenticated!'));

  jwt.verify(token, process.env.JWT, (err, user) => {
    if (err) return next(createdError(403, 'Token is not valid!'));
    req.user = user;
    next();
  });
};
