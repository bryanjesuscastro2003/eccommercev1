import { IShoppingCarRepository } from "../domain/ShoppingCarRepository";
import { IGetCarCommandIn } from "../domain/in";
import { IResponseCommandOut } from "../domain/out/ResponseCommandOut";
import { UseCase } from "./UseCase";

export class GetShoppingCarCase extends UseCase {
  constructor(shoppingRepository: IShoppingCarRepository) {
    super(shoppingRepository);
  }
  override run = async (
    data: IGetCarCommandIn
  ): Promise<IResponseCommandOut> => {
    return await this._shoppingCarRepository.getCar(data);
  };
}
