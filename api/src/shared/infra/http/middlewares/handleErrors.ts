import { Request, Response, NextFunction } from 'express';
import ApiException from '@shared/errors/ApiException';

function errorMiddleware(err: ApiException, request: Request, response: Response, next: NextFunction) {
  if (err instanceof ApiException) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  console.log(err);

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error.',
  });
}

export default errorMiddleware;
