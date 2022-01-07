import ApiException from '@shared/errors/ApiException';
import { Request, Response, NextFunction } from 'express';

function ensureIsAdmin(req: Request, res: Response, next: NextFunction) {
  if (!req.user.id || !req.user.perm) {
    throw new ApiException('User not found', 401);
  }

  const { shop_id } = req.query;

  if (!shop_id) {
    throw new ApiException('Shop ID not found', 401);
  }

  const isAdmin = req.user.perm.split(';').find((permission) => permission.toLowerCase() === 'admin') !== undefined;

  if (!isAdmin) {
    throw new ApiException('User doesn\'t have permission.', 401);
  }

  console.log(shop_id);
  console.log(req.user.shop_id);

  if (shop_id !== req.user.shop_id) {
    throw new ApiException('Shop ID is incorrect', 401);
  }

  return next();
}

export default ensureIsAdmin;
