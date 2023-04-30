import { IProductRepository } from "../domain/ProductRepository";
import { IEnterGetProductsCommandIn } from "../domain/in/EnterGetProductsCommandIn";
import { IGetProductsResponseCommandOut } from "../domain/out/GetProductsCommandOut";
import { UseCase } from "./UseCase";

export class GetProductsCase extends UseCase{
  constructor(productRepository: IProductRepository){
    super(productRepository);
}

  run = async (data: IEnterGetProductsCommandIn): Promise<IGetProductsResponseCommandOut> => {
    return this._productRepository.getProducts(data);
  };
}
