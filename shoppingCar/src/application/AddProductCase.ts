import { IShoppingCarRepository } from "../domain/ShoppingCarRepository";
import { UseCase } from "./UseCase";

export class AddProductCase extends UseCase {
  constructor(shoppingRepository: IShoppingCarRepository) {
    super(shoppingRepository);
  }
}
