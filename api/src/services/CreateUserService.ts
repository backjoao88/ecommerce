import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';
import User from '../models/User';

interface IRequestDTO {
  name: string;
  email: string;
  password: string;
  permissions: string;
}

class CreateUserService {
  public async execute({
    name, email, password, permissions,
  }: IRequestDTO): Promise<User> {
    const userRepository = getRepository(User);
    const checkSameEmail = await userRepository.findOne({ where: { email } });

    if (checkSameEmail) {
      throw new Error('E-mail already registered');
    }

    const hashedPassword = await hash(password, 8);

    const user = await userRepository.create({
      name,
      email,
      password: hashedPassword,
      permissions,
    });

    await userRepository.save(user);

    return user;
  }
}

export default CreateUserService;
