import { Request, Response } from 'express';
import AuthenticateUserService from '../services/AuthenticateUserService';

export default class SessionsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;
    const authenticateUserService = new AuthenticateUserService();
    const authenticateUser = await authenticateUserService.execute({ email, password });
    return response.json(authenticateUser);
  }
}
