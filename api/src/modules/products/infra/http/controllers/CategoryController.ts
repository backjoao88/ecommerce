import CreateCategoryService from '@modules/products/services/CreateCategoryService';
import { container } from 'tsyringe';
import { Request, Response, NextFunction } from 'express';

class CategoryController {
  public async create(request: Request, response: Response): Promise<Response> {
    const {
      description, code, available,
    } = request.body;

    const createCategoryService = container.resolve(CreateCategoryService);

    const newCategory = await createCategoryService.execute({
      description, code, available,
    });

    return response.json(newCategory);
  }
}

export default CategoryController;
