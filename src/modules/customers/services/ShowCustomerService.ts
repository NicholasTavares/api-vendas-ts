import AppError from "@shared/errors/AppError";
import { IShowCostumer } from "../domain/models/IShowCostumer"
import { inject, injectable } from "tsyringe";
import { ICustomersRepository } from "../domain/repositories/ICustomerRepository";
import { ICustomer } from "../domain/models/ICustomer";

@injectable()
class ShowCutomerService {
  constructor(
    @inject('CustomersRepository')
    private customersRepository: ICustomersRepository){
  }
  public async execute({ id }: IShowCostumer): Promise<ICustomer> {
    const customer = await this.customersRepository.findById(id)

    if (!customer) {
      throw new AppError('Customer not found')
    }
    
    return customer
  }
}

export default ShowCutomerService