interface IHashProvider{
  generateHash(password: string): Promise<string> | string;
  compareHash(password: string, hashed: string): Promise<boolean> | boolean;
}

export default IHashProvider;
