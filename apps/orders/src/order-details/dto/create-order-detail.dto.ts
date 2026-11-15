import { IsNumber, IsNotEmpty } from 'class-validator';

export class CreateOrderDetailDto {
  @IsNumber()
  @IsNotEmpty()
  productId: number;

  @IsNumber()
  @IsNotEmpty()
  quantity: number;
}
