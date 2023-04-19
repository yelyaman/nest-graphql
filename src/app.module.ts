import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { EmployeesModule } from './employees/employees.module';
import { SalesModule } from './sales/sales.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      installSubscriptionHandlers: true,
      autoSchemaFile: true,
    }),
    EmployeesModule,
    SalesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
