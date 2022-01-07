interface ICreateCustomerDTO{
  name: string;
  birth_date: Date;
  cpf: string;
  inactive: boolean;
  fone: string;
  user_id: string;
  shop_id: string;
  address_id: string;
}

export default ICreateCustomerDTO;
