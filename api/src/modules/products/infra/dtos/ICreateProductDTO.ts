interface ICreateProductDTO{
  title: string;
  available: boolean;
  price: number;
  price_promotion: number;
  sku: string;
  category_id: string;
  shop_id: string;
}

export default ICreateProductDTO;
