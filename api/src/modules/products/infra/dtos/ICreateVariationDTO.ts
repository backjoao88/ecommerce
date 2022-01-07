interface ICreateVariationDTO{
  code: string;
  description: string;
  price: number;
  price_promotion: number;
  quantity: number;
  blocked_quantity: number;
  shipping_id: string;
  product_id: string;
  shop_id: string;
}

export default ICreateVariationDTO;
