import { IEnterProductCarCommandIn } from "../../../domain/in";
import { ICar } from "../../../domain/types";

export class EnterProductCarRequest implements IEnterProductCarCommandIn {
  user: string;
  action: "ADD" | "SUBSTRACT" | "DELETE";
  product: ICar;

  constructor(
    user: string,
    action: "ADD" | "SUBSTRACT" | "DELETE",
    product: ICar
  ) {
    this.user = user;
    this.action = action;
    this.product = product;
  }
}
