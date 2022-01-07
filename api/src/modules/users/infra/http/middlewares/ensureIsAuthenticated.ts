import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import authConfig from '../../../../../config/auth';
import ApiException from '../../../../../shared/errors/ApiException';

interface TokenPayload {
    iat: number;
    exp: number;
    sub: string;
    perm: string;
    shop_id: string;
}

function ensureIsAuthenticated(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;
  console.log(authHeader);
  if (!authHeader) {
    throw new ApiException('Token JWT is missing.', 401);
  }

  const [, token] = authHeader.split(' ');

  try {
    const decoded = verify(token, authConfig.jwt.secret);

    const { sub, perm, shop_id } = decoded as TokenPayload;

    req.user = {
      id: sub,
      perm,
      shop_id,
    };

    return next();
  } catch {
    throw new ApiException('Invalid JWT token', 401);
  }
}

export default ensureIsAuthenticated;
