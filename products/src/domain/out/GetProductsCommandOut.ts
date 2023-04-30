import { IProductEntity } from "../Product.entity";
import { IBaseResponseCommandOut } from "./BaseCommandOut";

export interface IGetProductsResponseCommandOut extends IBaseResponseCommandOut{
       data: IProductEntity[]
}