interface ICreateOrderDTO{
  code: string;
  total_price: number;
  total_price_promotion: number;
  cancelled: boolean;
  customer_id: string;
  payment_id: string;
  shipping_id: string;
}

export default ICreateOrderDTO;
