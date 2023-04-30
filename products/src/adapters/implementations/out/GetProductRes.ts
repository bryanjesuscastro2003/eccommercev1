import { IProductEntity } from "../../../domain/Product.entity";
import { IGetProductResponseCommandOut } from "../../../domain/out/GetProductCommandOut";

export class GetProductRes implements IGetProductResponseCommandOut {
  constructor(data: IProductEntity | null, ok: boolean, message: string) {
    this.data = data;
    this.ok = ok;
    this.message = message;
  }
  data: IProductEntity | null;
  ok: boolean;
  message: string;
}
