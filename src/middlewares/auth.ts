import { Response, NextFunction, Request } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import Error from '../errors/errors';
import { ERROR } from '../constants/errors';

export interface AuthRequest extends Request {
  user?: {
    _id: string;
  };
}

const userAuthorization = (req: AuthRequest, res: Response, next: NextFunction) => {
  const { cookie } = req.headers;
  if (!cookie) {
    next(Error.authorizationError(ERROR.message.UNAURHORIZATION_ERROR));
  } else {
    try {
      const payload = jwt.verify(
        cookie!.split('=')[1],
        'super-secret',
      ) as JwtPayload;
      req.user = {
        _id: payload?._id,
      };
      next();
    } catch (error) {
      next(Error.authorizationError(ERROR.message.UNAURHORIZATION_ERROR));
    }
  }
};

export default userAuthorization;
