import { Request, Response } from 'express';
import CreateUserService from '../services/CreateUserService';
import ShowUserProfileService from '../services/ShowUserProfileService';

export default class UsersController {
  public async create(request: Request, response: Response): Promise<Response> {
    const {
      name, email, password, permissions,
    } = request.body;

    const createUserService = new CreateUserService();

    const newUser = await createUserService.execute({
      name, email, password, permissions,
    });

    return response.json(newUser);
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const { id } = request.body;

    const showUserProfileService = new ShowUserProfileService();

    const newUser = await showUserProfileService.execute({ id });

    return response.json(newUser);
  }
}
