import IHashProvider from '../models/IHashProvider';

class FakeHashProvider implements IHashProvider {
  generateHash(password: string): Promise<string> | string {
    return password;
  }

  compareHash(password: string, hashed: string): Promise<boolean> | boolean {
    return password === hashed;
  }
}

export default FakeHashProvider;
