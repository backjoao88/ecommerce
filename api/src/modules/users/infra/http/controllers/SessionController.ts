import { Request, Response } from 'express';
import AuthenticateUserService from '@modules/users/services/AuthenticateUserService';
import { container } from 'tsyringe';

export default class SessionsController {
  public async create(request: Request, response: Response): Promise<Response> {
    try {
      const { email, password } = request.body;
      const authenticateUserService = container.resolve(AuthenticateUserService);
      const authenticateUser = await authenticateUserService.execute({ email, password });
      return response.json(authenticateUser);
    } catch (err: any) {
      return response.status(err.statusCode).json({ error: err.message });
    }
  }
}
