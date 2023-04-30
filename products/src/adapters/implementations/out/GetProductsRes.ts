import { IProductEntity } from "../../../domain/Product.entity";
import { IGetProductsResponseCommandOut } from "../../../domain/out/GetProductsCommandOut";

export class GetProductsRes implements IGetProductsResponseCommandOut {
  constructor(data: IProductEntity[], ok: boolean, message: string) {
    this.data = data;
    this.ok = ok;
    this.message = message;
  }
  data: IProductEntity[];
  ok: boolean;
  message: string;
}
