import { inject, injectable } from "tsyringe";
import { ICustomersRepository } from "../domain/repositories/ICustomerRepository";
import { IPaginateCustomer } from "../domain/models/IPaginateCustomer";

@injectable()
class ListCustomerService {
  constructor(
    @inject('CustomersRepository')
    private customersRepository: ICustomersRepository) {
  }
  public async execute(): Promise<IPaginateCustomer> {
    const customers = await this.customersRepository.listCustomer()

    return customers as IPaginateCustomer
  }
}

export default ListCustomerService