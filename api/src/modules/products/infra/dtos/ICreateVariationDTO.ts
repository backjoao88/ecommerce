interface ICreateVariationDTO{
  code: string;
  description: string;
  price: number;
  price_promotion: number;
  quantity: number;
  blocked_quantity: number;
  shippingVariation_id: string;
  product_id: string;
  shop_id: string;
}

export default ICreateVariationDTO;
