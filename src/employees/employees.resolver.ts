import {
  Args,
  Int,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { Employees } from './models/Employees.model';
import { EmployeesService } from './employees.service';
import { SalesService } from '../sales/sales.service';
import { Sales } from '../sales/models/Sales.model';

@Resolver(() => Employees)
export class EmployeesResolver {
  constructor(
    private employeesService: EmployeesService,
    private salesService: SalesService,
  ) {}

  @Query(() => Employees)
  async employees(@Args('id', { type: () => Int }) id: number) {
    return this.employeesService.findOneById(id);
  }

  @Query(() => Employees, { name: 'rating' })
  async getEmployeeSaleRating() {
    return this.employeesService.getEmployeeSaleRating();
  }

  @ResolveField('sales', () => [Sales])
  async getEmployeeSales(@Parent() employee: Employees) {
    return this.salesService.findAllByEmployee(employee.id);
  }
}
