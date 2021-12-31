import { getRepository } from 'typeorm';
import User from '../models/User';

interface IRequestDTO {
  id: string;
}

export default class ShowUserProfileService {
  public async execute({ id }: IRequestDTO): Promise<User> {
    const userRepository = getRepository(User);
    const user = await userRepository.findOne({ where: { id } });

    if (!user) {
      throw new Error('User not found.');
    }
    return user;
  }
}
