import { Injectable } from '@nestjs/common';
import { Employees } from './models/Employees.model';
import { SalesService } from '../sales/sales.service';

@Injectable()
export class EmployeesService {
  constructor(private salesService: SalesService) {}
  private readonly employees: Array<Employees> = [
    { id: 1, firstName: 'Tim', lastName: 'Allen' },
    { id: 2, firstName: 'Talgar', lastName: 'R' },
    { id: 3, firstName: 'Abylay', lastName: 'D' },
  ];

  findOneById(employeeId: number): Employees {
    return this.employees.find((employee) => employee.id == employeeId);
  }

  getEmployeeSaleRating() {
    const sales = this.salesService.findAll();
    const salesGroupedByEmployee = sales.reduce((group, sale) => {
      group[sale.employeeId] = group[sale.employeeId] ?? [];
      group[sale.employeeId].push(sale);
      return group;
    }, {});

    const result: Employees[] = []

    for (const employeeId of Object.keys(salesGroupedByEmployee)) {
      const sales = salesGroupedByEmployee[employeeId];
      const employee = this.findOneById(+employeeId);
      result.push({
        ...employee,
        sales
      })
    }

    const sortedResult = result.sort((a, b) => (a.sales.length > b.sales.length ? -1 : 1));
    return sortedResult;
  }
}
