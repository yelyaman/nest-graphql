import { Module } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { SalesModule } from '../sales/sales.module';
import { EmployeesResolver } from './employees.resolver';

@Module({
  imports: [SalesModule],
  providers: [EmployeesService, EmployeesResolver],
})
export class EmployeesModule {}
