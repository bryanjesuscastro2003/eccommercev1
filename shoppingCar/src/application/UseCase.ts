import { IShoppingCarRepository } from "../domain/ShoppingCarRepository";
import { IEnterProductCarCommandIn } from "../domain/in";
import { IResponseCommandOut } from "../domain/out/ResponseCommandOut";

export class UseCase {
      protected readonly _shoppingCarRepository: IShoppingCarRepository
      constructor(shoppingCarRepository: IShoppingCarRepository){
            this._shoppingCarRepository = shoppingCarRepository
      }
      
      run = async (data: IEnterProductCarCommandIn): Promise<IResponseCommandOut> => {
            return await this._shoppingCarRepository.addorSubstractProduct(data)
     }
}