import { IProductRepository } from "../domain/ProductRepository";
import { IEnterGetProductCommandIn } from "../domain/in/GetProductCommandIn";
import { IGetProductResponseCommandOut } from "../domain/out/GetProductCommandOut";
import { UseCase } from "./UseCase";

export class GetProductCase extends UseCase{
    constructor(productRepository: IProductRepository){
          super(productRepository);
    }

    run = (data: IEnterGetProductCommandIn) : Promise<IGetProductResponseCommandOut> => {
         return this._productRepository.getProduct(data)
    }
}