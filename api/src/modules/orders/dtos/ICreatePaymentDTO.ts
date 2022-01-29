interface ICreatePaymentDTO{
  amount: number;
  installments: number;
  status: string;
  type: string;
  card_id: string;
}

export default ICreatePaymentDTO;
