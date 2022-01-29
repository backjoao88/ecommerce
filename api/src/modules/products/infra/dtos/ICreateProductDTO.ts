interface ICreateProductDTO{
  title: string;
  description: string;
  available: boolean;
  price: number;
  price_promotion: number;
  sku: string;
  category_id: string;
  shop_id: string;
}

export default ICreateProductDTO;
