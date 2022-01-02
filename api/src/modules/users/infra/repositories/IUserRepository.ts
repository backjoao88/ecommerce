import User from '../typeorm/entities/User';
import ICreateUserDTO from '../dtos/ICreateUserDTO';

interface IUserRespository {
  findById(id: string): Promise<User | undefined>;
  findByEmail(email: string): Promise<User | undefined>;
  create(data: ICreateUserDTO): Promise<User>;
  save(data: User): Promise<User>;
}

export default IUserRespository;
