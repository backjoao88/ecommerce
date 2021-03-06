import { Request, Response } from 'express';
import AuthenticateUserService from '@modules/users/services/AuthenticateUserService';
import { container } from 'tsyringe';
import ApiException from '@shared/errors/ApiException';

export default class SessionsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;
    const authenticateUserService = container.resolve(AuthenticateUserService);
    const authenticateUser = await authenticateUserService.execute({ email, password });
    return response.json(authenticateUser);
  }
}
