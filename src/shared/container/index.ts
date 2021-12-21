import { container, delay } from 'tsyringe';
import { ICustomersRepository } from '@modules/customers/domain/repositories/ICustomerRepository'
import CustomersRepository from '@modules/customers/infra/typeorm/repositories/CustomersRepository'


container.registerSingleton<ICustomersRepository>(
  'CustomersRepository',
  delay(() => CustomersRepository),
);