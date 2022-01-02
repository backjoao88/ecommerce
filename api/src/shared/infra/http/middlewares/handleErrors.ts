import { Request, Response } from 'express';
import ApiError from '@shared/errors/ApiException';

function errorMiddleware(error: ApiError, request: Request, response: Response) {
  if (error instanceof ApiError) {
    return response.status(error.statusCode).json({ error: error.message });
  }
  return response.status(500).json({ status: 'error', message: 'Internal server error.' });
}

export default errorMiddleware;
