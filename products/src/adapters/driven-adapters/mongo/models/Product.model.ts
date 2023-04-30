import { getModelForClass, modelOptions, prop } from "@typegoose/typegoose";
import { IProductEntity } from "../../../../domain/Product.entity";
import { TSections, TType } from "../../../../domain/types";

@modelOptions({
  options: { customName: "_productService" },
  schemaOptions: { timestamps: true, versionKey: false },
})
class ProductCollection implements IProductEntity {
  @prop({ required: true })
  section!: TSections;

  @prop({ required: true })
  type!: TType;

  @prop({  minlength: 2, maxlength: 40, required: true })
  name!: string;

  @prop({ required: true })
  description!: string;

  @prop({ required: true })
  specification!: string;

  @prop({ required: true })
  price!: number;

  @prop({ required: false, default: [] })
  images!: string[];

  @prop({ required: true })
  value!: number;

  @prop({ required: true })
  available!: boolean;

  @prop({ required: true })
  stock_available!: number;
}

const ProductModel = getModelForClass(ProductCollection);
export default ProductModel;
