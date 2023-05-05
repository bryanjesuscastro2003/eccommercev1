import { IShoppingCarRepository } from "../domain/ShoppingCarRepository";
import { UseCase } from "./UseCase";

export class SubstractProductCase extends UseCase {
  constructor(shoppingRepository: IShoppingCarRepository) {
    super(shoppingRepository);
  }
}
