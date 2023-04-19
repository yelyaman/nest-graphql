import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Sales } from './models/Sales.model';
import { SalesService } from './sales.service';
import { MakeSaleInput } from './dto/MakeSale.input';

@Resolver(() => Sales)
export class SalesResolver {
  constructor(private salesService: SalesService) {}

  @Query(() => [Sales])
  async sales() {
    return this.salesService.findAll();
  }

  @Mutation(() => Sales)
  async makeSale(@Args('makeSaleData') makeSaleData: MakeSaleInput) {
    return this.salesService.create(makeSaleData);
  }
}
