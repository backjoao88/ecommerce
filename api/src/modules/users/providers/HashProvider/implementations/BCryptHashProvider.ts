import bcrypt from 'bcryptjs';
import IHashProvider from '../models/IHashProvider';

class BCryptHashProvider implements IHashProvider {
  generateHash(password: string): Promise<string> {
    return bcrypt.hash(password, 8);
  }

  compareHash(password: string, hashed: string): Promise<boolean> {
    return bcrypt.compare(password, hashed);
  }
}

export default BCryptHashProvider;
