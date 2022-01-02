import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import authConfig from '../../../../../config/auth';
import ApiError from '../../../../../shared/errors/ApiException';

interface TokenPayload {
    iat: number;
    exp: number;
    sub: string;
}

function ensureIsAuthenticated(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    throw new ApiError('Token JWT is missing.', 401);
  }

  const [, token] = authHeader.split(' ');

  try {
    const decoded = verify(token, authConfig.jwt.secret);

    const { sub } = decoded as TokenPayload;

    req.user = {
      id: sub,
    };

    return next();
  } catch {
    throw new ApiError('Invalid JWT token', 401);
  }
}

export default ensureIsAuthenticated;
