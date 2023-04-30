import { IProductRepository } from "../domain/ProductRepository";

export class UseCase{
    protected readonly _productRepository: IProductRepository;

    constructor(productRepository: IProductRepository) {
      this._productRepository = productRepository;
    }
}