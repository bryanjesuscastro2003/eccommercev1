import { IProductEntity } from "../Product.entity";
import { IBaseResponseCommandOut } from "./BaseCommandOut";

export interface IGetProductResponseCommandOut extends IBaseResponseCommandOut{
       data: IProductEntity
}