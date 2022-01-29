import CreateProductService from '@modules/products/services/CreateProductService';
import { container } from 'tsyringe';
import { Request, Response } from 'express';
import ShowProductService from '@modules/products/services/ShowProductService';
import { title } from 'process';

class ProductController {
  public async create(request: Request, response: Response): Promise<Response> {
    const {
      title, description, price, price_promotion, sku, category_id, shop_id,
    } = request.body;

    const createProductService = container.resolve(CreateProductService);

    const newProduct = await createProductService.execute({
      title, description, price, price_promotion, sku, category_id, shop_id,
    });

    return response.json(newProduct);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const {
      id,
    } = request.body;

    const showProductService = container.resolve(ShowProductService);

    const newProduct = await showProductService.execute({
      id,
    });

    return response.json(newProduct);
  }
}

export default ProductController;
