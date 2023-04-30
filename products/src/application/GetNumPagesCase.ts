import { IProductRepository } from "../domain/ProductRepository";
import { IEnterNumPagesCommandIn } from "../domain/in/EnterNumPagesCommandIn";
import { IGetNumPagesResponseCommandOut } from "../domain/out/GetNumPagesCommandOut";
import { UseCase } from "./UseCase";

export class GetNumPagesCase extends UseCase {
  constructor(productRepository: IProductRepository) {
    super(productRepository);
  }

  run = async (data: IEnterNumPagesCommandIn): Promise<IGetNumPagesResponseCommandOut> => {
    return await this._productRepository.getNumberOfPages(data);
  };
}
