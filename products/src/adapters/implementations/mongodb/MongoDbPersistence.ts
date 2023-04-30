import { IProductRepository } from "../../../domain/ProductRepository";
import {
  IEnterGetProductCommandIn,
  IEnterGetProductsCommandIn,
  IEnterNumPagesCommandIn,
} from "../../../domain/in";
import {
  IGetNumPagesResponseCommandOut,
  IGetProductResponseCommandOut,
  IGetProductsResponseCommandOut,
} from "../../../domain/out";
import { connection } from "../../driven-adapters/mongo/Connection";
import ProductModel from "../../driven-adapters/mongo/models/Product.model";
import { GetNumPagesRes, GetProductsRes, GetProductRes } from "../out";
import { IProductEntity } from "../../../domain/Product.entity";

export class MongoDbPersistence implements IProductRepository {
  constructor() {
    try {
      this.connectDB();
    } catch (error) {}
  }

  connectDB = async (): Promise<void> => {
    await connection();
  };

  getNumberOfPages = async (
    data: IEnterNumPagesCommandIn
  ): Promise<IGetNumPagesResponseCommandOut> => {
    try {
      const resDb = await ProductModel.countDocuments({ ...data }).exec();
      return new GetNumPagesRes(resDb, true, "Loaded ok");
    } catch (error) {
      return new GetNumPagesRes(0, false, "Unexpected error :/");
    }
  };

  getProducts = async (
    data: IEnterGetProductsCommandIn
  ): Promise<IGetProductsResponseCommandOut> => {
    try {
      const filter = {
        section: data.section,
        type: data.type,
      };
      const count = await ProductModel.countDocuments({ ...filter }).exec();
      data.page -= 1;
      if (data.page * 5 > count) data.page = 0;
      const resDb = await ProductModel.find<IProductEntity>({ ...filter })
        .sort("price")
        .skip(data.page * 5)
        .limit(5);
      console.log(data.page);
      return new GetProductsRes(resDb, true, "Products loaded");
    } catch (error) {
      console.log(error);
      return new GetProductsRes([], false, "Error loading products");
    }
  };

  getProduct = async (
    data: IEnterGetProductCommandIn
  ): Promise<IGetProductResponseCommandOut> => {
    try {
      const resDb = await ProductModel.findOne<IProductEntity | null>({
        ...data,
      });
      if (resDb === null) throw new Error("Product not found");
      return new GetProductRes(resDb, true, "Product loaded ok");
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Server error :/";
      return new GetProductRes(null, false, "Unexpetced error : " + message);
    }
  };
}
