import { IShoppingCarRepository } from "../domain/ShoppingCarRepository";
import { UseCase } from "./UseCase";

export class DeleteProductCase extends UseCase {
  constructor(shoppingRepository: IShoppingCarRepository) {
    super(shoppingRepository);
  }
}
