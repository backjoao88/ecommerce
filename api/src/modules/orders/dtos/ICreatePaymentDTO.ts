interface ICreatePaymentDTO{
  amount: number;
  installments: number;
  status: string;
  type: string;
  card_id: string;
  order_id: string;
  shop_id: string;
}

export default ICreatePaymentDTO;
