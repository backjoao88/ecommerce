interface ICreateShippingDTO{
  status: string;
  tracking_code: string;
  type: string;
  cost: number;
  deadline: number;
  address_id: string;
  order_id: string;
  shop_id: string;
}

export default ICreateShippingDTO;
