import { getModelForClass, modelOptions, prop } from "@typegoose/typegoose";
import { IShoppingCarEntity } from "../../../../domain/ShoppingCar.entity";
import { ICar } from "../../../../domain/types";

@modelOptions({
  options: { customName: "_shoppingCarService" },
  schemaOptions: { timestamps: true, versionKey: false },
})
export class ShoppingCarCollection implements IShoppingCarEntity {
  @prop({ required: true, unique: true })
  user!: string;

  @prop({ default: [] })
  car!: ICar[];
}

const ShoppingCarModel = getModelForClass(ShoppingCarCollection);
export default ShoppingCarModel;
