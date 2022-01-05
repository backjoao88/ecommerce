interface ICreateUserDTO {
  name: string;
  email: string;
  permissions: string;
  password: string;
  shop_id: string;
}

export default ICreateUserDTO;
