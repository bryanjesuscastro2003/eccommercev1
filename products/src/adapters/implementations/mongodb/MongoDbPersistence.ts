import { IProductRepository } from "../../../domain/ProductRepository";
import { IEnterGetProduct } from "../../../domain/in/GetProductCommandIn";
import { IEnterGetProducts } from "../../../domain/in/EnterGetProductsCommandIn";
import { IEnterNumPages } from "../../../domain/in/EnterNumPagesCommandIn";
import { IGetNumPagesResponse } from "../../../domain/out/GetNumPagesCommandOut";
import { IGetProductResponse } from "../../../domain/out/GetProductCommandOut";
import { IGetProductsResponse } from "../../../domain/out/GetProductsCommandOut";
import { connection } from "../../driven-adapters/mongo/Connection";
import ProductModel from "../../driven-adapters/mongo/models/Product.model";

export class MongoDbPersistence implements IProductRepository {
  constructor() {
    try {
      this.connectDB();
    } catch (error) {}
  }

  connectDB = async (): Promise<void> => {
    await connection();
  };

  getNumberOfPages = (data: IEnterNumPages): Promise<IGetNumPagesResponse> => {
     try {
        
     } catch (error) {
        return new 
     }
  };

  getProducts = (data: IEnterGetProducts): Promise<IGetProductsResponse> => {
    throw new Error();
  };

  getProduct = (data: IEnterGetProduct): Promise<IGetProductResponse> => {
    throw new Error();
  };
}
