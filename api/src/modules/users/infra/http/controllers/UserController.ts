import { Request, Response } from 'express';
import { container } from 'tsyringe';
import UpdateUserProfileService from '@modules/users/services/UpdateUserProfileService';
import CreateUserService from '@modules/users/services/CreateUserService';
import ShowUserProfileService from '@modules/users/services/ShowUserProfileService';

export default class UsersController {
  public async create(request: Request, response: Response): Promise<Response> {
    const {
      name, email, password, permissions, shop_id,
    } = request.body;

    const createUserService = container.resolve(CreateUserService);

    const newUser = await createUserService.execute({
      name, email, password, permissions, shop_id,
    });

    return response.json(newUser);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const {
      id, name, email, old_password, password,
    } = request.body;

    const updateUserProfileService = container.resolve(UpdateUserProfileService);

    const newUser = await updateUserProfileService.execute({
      id, name, email, old_password, password,
    });

    return response.json(newUser);
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const { id } = request.body;

    const showUserProfileService = container.resolve(ShowUserProfileService);

    const newUser = await showUserProfileService.execute({ id });

    return response.json(newUser);
  }
}
