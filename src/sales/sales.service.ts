import { Injectable } from '@nestjs/common';
import { Sales } from './models/Sales.model';
import { MakeSaleInput } from './dto/MakeSale.input';

@Injectable()
export class SalesService {
  private readonly sales: Array<Sales & { employeeId: number }> = [
    { id: 1, comment: 'book', employeeId: 1 },
  ];

  findAll(): Sales[] {
    return this.sales;
  }

  findOneById(id: number): Sales {
    return this.sales.find((sale) => sale.id == id);
  }

  create(saleInput: MakeSaleInput): Sales {
    const id = this.sales.length + 1;
    this.sales.push({ id, ...saleInput });
    return this.findOneById(id);
  }

  findAllByEmployee(employeeId: number): Sales[] {
    return this.sales.filter((sale) => sale.employeeId == employeeId);
  }
}
