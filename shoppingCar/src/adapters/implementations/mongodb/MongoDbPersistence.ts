import e from "cors";
import { IShoppingCarEntity } from "../../../domain/ShoppingCar.entity";
import { IShoppingCarRepository } from "../../../domain/ShoppingCarRepository";
import {
  IEnterProductCarCommandIn,
  IGetCarCommandIn,
} from "../../../domain/in";
import { IResponseCommandOut } from "../../../domain/out/ResponseCommandOut";
import ShoppingCarModel, {
  ShoppingCarCollection,
} from "../../driven-adapters/mongo/models/Shopping.model";
import { ResponseData } from "../out/DataResponse";
import { ICar } from "../../../domain/types";

export class MongoDbPersistence implements IShoppingCarRepository {
  addorSubstractProduct = async (
    data: IEnterProductCarCommandIn
  ): Promise<IResponseCommandOut> => {
    try {
      switch (data.action) {
        case "ADD":
          const car = await ShoppingCarModel.findOne({ user: data.user });
          if (car !== undefined && car !== null) {
            var product : ICar | undefined  = car.car.find(
              (e) => e.productId === data.product.productId
            );
            if (product !== undefined) {
              product.amount! +=
                data.product.amount !== undefined ? Math.abs(data.product.amount) : 1;
              await Promise.all([
                car.car.filter((e) => e.productId === data.product.productId),
                car.car.push(product),
              ]);
            } else
              car?.car.push({
                productId: data.product.productId,
                productSection: data.product.productSection,
                amount:
                  data.product.amount !== undefined ? Math.abs(data.product.amount) : 1,
              });
              await car.save();
          }
          else {
              await ShoppingCarModel.create({user: data.user, car: []})
          }
          break;

        case "SUBSTRACT":
          break;

        case "DELETE":
          break;
      }
    } catch (error) {
      return new ResponseData(false, "Unexpected error", null);
    }
  };


  getCar = async (data: IGetCarCommandIn): Promise<IResponseCommandOut> => {
    try {
          const car = await ShoppingCarModel.findOne({user: data.user}).
          return new ResponseData(true, "Loaded car", [])
    } catch (error) {}
  };
}
