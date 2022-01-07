import { getRepository, Repository, Not } from 'typeorm';
import { uuid } from 'uuidv4';
import IUserRepository from '@modules/users/infra/repositories/IUserRepository';
import ICreateUserDTO from '@modules/users/infra/dtos/ICreateUserDTO';

import User from '../../typeorm/entities/User';

class FakeUserRepository implements IUserRepository {
  private users: User[] = [];

  public async findById(id: string): Promise<User | undefined> {
    const filteredUser = this.users.find((u) => u.id === id);
    return filteredUser;
  }

  public async findByEmail(email: string): Promise<User | undefined> {
    const filteredUser = this.users.find((u) => u.email === email);
    return filteredUser;
  }

  public async create(userData: ICreateUserDTO): Promise<User> {
    const user = new User();
    const newUser = Object.assign(user, { id: uuid() }, userData);
    this.users.push(newUser);
    return user;
  }

  public async save(data: User): Promise<User> {
    throw new Error('Method not implemented.');
  }
}

export default FakeUserRepository;
