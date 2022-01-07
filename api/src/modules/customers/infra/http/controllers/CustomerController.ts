import DeleteCustomerService from '@modules/customers/services/DeleteCustomerService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateCustomerService from '../../../services/CreateCustomerService';
import UpdateCustomerService from '../../../services/UpdateCustomerService';
import ShowCustomerService from '../../../services/ShowCustomerService';
import ShowAllCustomersByNameService from '../../../services/ShowAllCustomersByNameService';

class CustomerController {
  public async create(request: Request, response: Response): Promise<Response> {
    const {
      name, birth_date, cpf, fone, user_id, address_id, shop_id,
    } = request.body;

    const createCustomerService = container.resolve(CreateCustomerService);

    const newCustomer = await createCustomerService.execute({
      name,
      cpf,
      birth_date,
      fone,
      user_id,
      address_id,
      shop_id,
    });

    return response.json(newCustomer);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const {
      id, name, birth_date, cpf, fone, user_id, address_id, shop_id, inactive,
    } = request.body;

    const updateCustomerService = container.resolve(UpdateCustomerService);

    const newCustomer = await updateCustomerService.execute({
      name,
      cpf,
      birth_date,
      fone,
      user_id,
      address_id,
      shop_id,
      id,
      inactive,
    });

    return response.json(newCustomer);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const {
      id,
    } = request.body;

    const deleteCustomerService = container.resolve(DeleteCustomerService);

    const newCustomer = await deleteCustomerService.execute({ id });

    return response.json(newCustomer);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const {
      id,
    } = request.body;

    const showCustomerService = container.resolve(ShowCustomerService);

    const newCustomer = await showCustomerService.execute({ id });

    return response.json(newCustomer);
  }

  public async showAllByName(request: Request, response: Response): Promise<Response> {
    const showAllByNameService = container.resolve(ShowAllCustomersByNameService);

    const { search } = request.params;

    const newCustomer = await showAllByNameService.execute({ shop_id: request.user.shop_id, name: search });

    return response.json(newCustomer);
  }
}

export default CustomerController;
